import { session, trial, clock, SKIP_WEBGAZER } from "../state.js";
import { J } from "../utils.js";
import { onTrialFinish, advancePhase } from "../../controller.js";
import { PROBES, EMOTIONS } from "../../trial_schema.js";
import { currentTask } from "../current_task.js";

const SCALE_LABELS = [
  "Not at all",
  "Slightly",
  "Somewhat",
  "Moderately",
  "Fairly",
  "Very",
  "Extremely",
];

// Renders one radio-scale row for a single emotion.
function probeRow(em) {
  const cells = [1, 2, 3, 4, 5, 6, 7]
    .map(
      (v) =>
        `<td><input type="radio" name="probe_${em}" value="${v}"
      onchange="window._probeValues['${em}']=parseInt(this.value)"></td>`,
    )
    .join("");
  return `<tr><td class="probe-em-label">${em}</td>${cells}</tr>`;
}

// Renders a full-width section header row (e.g. "Primary Emotion") inside
// the table body — omit the group entirely (call site) when it's empty.
function probeSectionRow(label) {
  return `<tr class="probe-section-row"><td class="probe-section-label" colspan="8">${label}</td></tr>`;
}

/* ====================================================================
 * Probe markup — kept separate from the trial-object wiring below so
 * alternative UI versions are easy to try: write another renderProbe*
 * function with the same ({ probeList, primaryEmotions, otherEmotions, hasNone })
 * signature and swap it into the `stimulus` function in
 * createProbeScreen(). The on_load/on_finish scoring logic doesn't
 * need to change between UI variants.
 * ==================================================================== */
export function renderProbeGrid({
  probeList,
  primaryEmotions,
  otherEmotions,
  hasNone,
}) {
  const headerCols = SCALE_LABELS.map(
    (lbl, i) => `
    <th class="probe-th-col">
      <span class="probe-num">${i + 1}</span>
      <span class="probe-lbl">${lbl}</span>
    </th>`,
  ).join("");

  const bodyRows =
    (primaryEmotions.length
      ? probeSectionRow("Primary Emotion") +
        primaryEmotions.map(probeRow).join("")
      : "") +
    (otherEmotions.length
      ? probeSectionRow("Other Emotions (Optional)") +
        otherEmotions.map(probeRow).join("")
      : "");

  const noneRow = hasNone
    ? `
    <div class="probe-none-row">
      <label>
        <input type="checkbox" id="probe_none"
          onchange="window._probeValues['none']=this.checked?1:0">
        None of the above
      </label>
    </div>`
    : "";

  return `
    <div id="probe-screen">
      <h2 class="probe-heading">Which emotions do you feel strongly right now?</h2>
      <p class="probe-subtitle">Select all that apply. If you leave an emotion unselected, it will be recorded as 1 (Not at all).</p>
      <div class="probe-card">
        <table class="probe-table">
          <thead><tr>
            <th class="probe-th-emotion"></th>
            ${headerCols}
          </tr></thead>
          <tbody>${bodyRows}</tbody>
        </table>
      </div>
      ${noneRow}
    </div>`;
}

/* ====================================================================
 * Emotion probe — 7-point self-report grid shown after every trial.
 * Also where trial data gets finalized and handed to onTrialFinish/advancePhase.
 * ==================================================================== */
export function createProbeScreen() {
  return {
    type: jsPsychHtmlButtonResponse,
    stimulus: function () {
      window._probeValues = {};
      const probeList = currentTask()?.response?.probes || PROBES;
      const emotions = probeList.filter((em) => em !== "none");
      const primaryEmotions = emotions.filter((em) => EMOTIONS.includes(em));
      const otherEmotions = emotions.filter((em) => !EMOTIONS.includes(em));
      const hasNone = probeList.includes("none");

      return renderProbeGrid({
        probeList,
        primaryEmotions,
        otherEmotions,
        hasNone,
      });
    },
    choices: ["Submit"],
    css_classes: "content-align-top",
    extensions: SKIP_WEBGAZER
      ? []
      : [
          {
            type: jsPsychExtensionWebgazer,
            params: { targets: ["#probe-screen"] },
          },
        ],
    on_load: function () {
      const radios = Array.from(
        document.querySelectorAll('input[type="radio"][name^="probe_"]'),
      );
      radios.forEach((radio) => {
        radio.addEventListener("mousedown", function () {
          this._wasChecked = this.checked;
        });
        radio.addEventListener("click", function () {
          if (this._wasChecked) {
            this.checked = false;
            delete window._probeValues[this.name.replace(/^probe_/, "")];
          }
        });
      });

      // "None of the above" is mutually exclusive with the rating grid:
      // checking it clears every rated emotion, and rating any emotion
      // clears it.
      const noneCheckbox = document.getElementById("probe_none");
      if (noneCheckbox) {
        noneCheckbox.addEventListener("change", function () {
          if (!this.checked) return;
          radios.forEach((radio) => {
            if (!radio.checked) return;
            radio.checked = false;
            delete window._probeValues[radio.name.replace(/^probe_/, "")];
          });
        });

        radios.forEach((radio) => {
          radio.addEventListener("change", function () {
            if (this.checked && noneCheckbox.checked) {
              noneCheckbox.checked = false;
              window._probeValues.none = 0;
            }
          });
        });
      }
    },
    on_finish: function (data) {
      const probeList = currentTask()?.response?.probes || PROBES;
      const selfReport = {};
      for (const em of probeList)
        selfReport[em] = window._probeValues?.[em] ?? 1;

      const trialUid = `${session.participant.participantId}_t${session.trialOrdinal}`;
      const realized = {
        trialUid,
        participantId: session.participant.participantId,
        ordinalPosition: session.trialOrdinal,
        bankId: trial.currentSelection?.bankId,
        phase: session.participant.phase,
        targetEmotion: trial.currentSelection?.targetEmotion || null,
        domainUsed: trial.currentSelection?.domainUsed || null,
        primeId: trial.currentSelection?.primeId || null,
        honestFeedback: !!trial.currentSelection?.honestFeedback,
        realPerformance: trial.currentRealPerf,
        displayed: trial.currentDisplayed,
        selfReport,
        task: currentTask(),
        capture: {
          revealTsMs: session.revealTsMs,
          captureWindowMs: 10000,
          baselineWindowMs: [-2000, 0],
        },
      };

      onTrialFinish(realized, session.participant, session.pool, clock);
      advancePhase(session.participant, session.pool, clock);

      trial.currentDerived = realized.derived;
      data.self_report = J(selfReport);
      data.derived = J(realized.derived);
      data.felt_dominant = realized.derived?.feltDominant || null;
      data.confirmed = realized.derived?.confirmed || false;
      data.clean_core = realized.derived?.cleanCore || false;
      data.off_target = realized.derived?.offTarget || false;
      data.induction_failed = realized.derived?.inductionFailed || false;
      data.correct = trial.currentRealPerf?.correct;
      data.total = trial.currentRealPerf?.total;
      data.rt_task_ms = trial.currentRealPerf?.rtMs;
      data.cumNegLoad = session.participant.ledger.cumNegLoad;
      data.phase_at_finish = session.participant.phase;
      data.controller_reason = J(trial.currentSelection?.reason || {});

      // Exponential moving average (α=0.15) to track typical trial duration without storing all values.
      const trialMs = performance.now() - session.trialStartMs;
      const med = session.participant.ledger.medianTrialMs;
      session.participant.ledger.medianTrialMs = med
        ? med * 0.85 + trialMs * 0.15
        : trialMs;

      session.trialOrdinal++;
    },
    data: function () {
      return {
        phase: "emotion_probe",
        ordinal: session.trialOrdinal,
        bankId: trial.currentSelection?.bankId,
        domainUsed: trial.currentSelection?.domainUsed,
        targetEmotion: trial.currentSelection?.targetEmotion,
      };
    },
  };
}
