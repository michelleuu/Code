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

// Display labels for the optional/non-primary emotions that differ from
// their raw data-key spelling (e.g. "boredom" -> "Bored").
const OTHER_LABEL_OVERRIDES = { boredom: "Bored", confusion: "Confused" };

function capitalize(str) {
  return str.charAt(0).toUpperCase() + str.slice(1);
}

function otherLabel(em) {
  return OTHER_LABEL_OVERRIDES[em] || capitalize(em);
}

/* ====================================================================
 * Probe markup (checklist variant) — same swappable-renderer pattern as
 * probe_screen.js's renderProbeGrid: kept separate from the trial-object
 * wiring so it's easy to compare UI approaches side by side.
 * ==================================================================== */
export function renderProbeChecklist({
  primaryEmotions,
  otherEmotions,
  hasNone,
}) {
  // Checkboxes — this is a "select all that apply" checklist, so multiple
  // items can be checked at once.
  const primaryRows = primaryEmotions
    .map(
      (em) => `
      <label class="probe-check-row">
        <input type="checkbox" class="probe-check-input probe-primary-check" data-em="${em}">
        <span>${capitalize(em)}</span>
      </label>`,
    )
    .join("");

  const otherRows = otherEmotions
    .map(
      (em) => `
      <label class="probe-check-row">
        <input type="checkbox" class="probe-check-input" data-em="${em}"
          onchange="window._probeValues['${em}']=this.checked?1:0">
        <span>${otherLabel(em)}</span>
      </label>`,
    )
    .join("");

  const noneRow = hasNone
    ? `
      <label class="probe-check-row">
        <input type="checkbox" class="probe-check-input" id="probe_none" data-em="none"
          onchange="window._probeValues['none']=this.checked?1:0">
        <span>None of the above</span>
      </label>`
    : "";

  return `
    <div id="probe-screen">
      <h2 class="probe-heading">Which emotions do you feel strongly right now?</h2>
      <p class="probe-subtitle">Select all that apply.</p>
      <div class="probe-checklist">${primaryRows}</div>

      <div class="probe-divider"></div>

      <div id="probe-rating-section" style="display:none">
        <h2 class="probe-heading">How would you rate it?</h2>
        <p class="probe-subtitle">Rate the intensity for each emotion.</p>
        <div id="probe-rating-rows"></div>
        <div class="probe-divider"></div>
      </div>

      <h2 class="probe-heading probe-heading-inline">
        Are you feeling any of these?
        <span class="probe-optional-tag">(Optional)</span>
      </h2>
      <div class="probe-checklist">
        ${otherRows}
        ${noneRow}
      </div>
    </div>`;
}

// Builds one "<emotion label> [1..7 segmented buttons]" rating row and wires
// its click handlers. Clicking a button records the value into
// window._probeValues, matching the same key every UI variant writes to.
function buildRatingRow(em, initialValue) {
  const row = document.createElement("div");
  row.className = "probe-rate-row";
  row.dataset.em = em;
  row.innerHTML = `
    <div class="probe-rate-label">${capitalize(em)}</div>
    <div class="probe-rate-scale">
      ${[1, 2, 3, 4, 5, 6, 7]
        .map(
          (v, i) => `
        <button type="button" class="probe-rate-btn" data-value="${v}">
          <span class="probe-rate-num">${v}</span>
          <span class="probe-rate-lbl">${SCALE_LABELS[i]}</span>
        </button>`,
        )
        .join("")}
    </div>`;

  row.querySelectorAll(".probe-rate-btn").forEach((btn) => {
    if (Number(btn.dataset.value) === initialValue) {
      btn.classList.add("selected");
    }
    btn.addEventListener("click", () => {
      row
        .querySelectorAll(".probe-rate-btn")
        .forEach((b) => b.classList.remove("selected"));
      btn.classList.add("selected");
      window._probeValues[em] = parseInt(btn.dataset.value, 10);
    });
  });
  return row;
}

/* ====================================================================
 * Emotion probe (checklist variant) — participant first checks off which
 * emotions they're feeling; each checked primary emotion expands into a
 * 1-7 intensity row in "How would you rate it?" (unchecking removes the
 * row and clears its recorded value). The optional "Are you feeling any
 * of these?" checklist is always shown, unrated (checked = 1, else 0).
 * on_load/on_finish record into window._probeValues exactly like
 * probe_screen.js, so the data schema is identical between UI variants.
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

      return renderProbeChecklist({ primaryEmotions, otherEmotions, hasNone });
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
      const ratingSection = document.getElementById("probe-rating-section");
      const ratingRows = document.getElementById("probe-rating-rows");

      const refreshRatingRows = () => {
        const checkedEmotions = Array.from(
          document.querySelectorAll(".probe-primary-check"),
        ).filter((cb) => cb.checked);
        ratingRows.innerHTML = "";
        checkedEmotions.forEach((cb) => {
          const em = cb.dataset.em;
          ratingRows.appendChild(buildRatingRow(em, window._probeValues[em]));
        });
        ratingSection.style.display = checkedEmotions.length ? "" : "none";
      };

      document.querySelectorAll(".probe-primary-check").forEach((cb) => {
        cb.addEventListener("change", function () {
          if (!this.checked) delete window._probeValues[this.dataset.em];
          refreshRatingRows();
        });
      });

      // "None of the above" is mutually exclusive with every other checklist
      // item: checking it clears everything else, and checking anything else
      // clears it.
      const noneCheckbox = document.getElementById("probe_none");
      const otherCheckboxes = Array.from(
        document.querySelectorAll(".probe-check-input"),
      ).filter((cb) => cb !== noneCheckbox);

      if (noneCheckbox) {
        noneCheckbox.addEventListener("change", function () {
          if (!this.checked) return;
          otherCheckboxes.forEach((cb) => {
            if (!cb.checked) return;
            cb.checked = false;
            if (cb.classList.contains("probe-primary-check")) {
              delete window._probeValues[cb.dataset.em];
            } else {
              window._probeValues[cb.dataset.em] = 0;
            }
          });
          refreshRatingRows();
        });

        otherCheckboxes.forEach((cb) => {
          cb.addEventListener("change", function () {
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
