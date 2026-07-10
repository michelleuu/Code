import { session, trial, clock } from "../state.js";
import { J } from "../utils.js";
import { onTrialFinish, advancePhase } from "../../controller.js";
import { PROBES, EMOTIONS } from "../../trial_schema.js";
import { currentTask } from "../current_task.js";

// A selected button records a rating comfortably above task.response.cleanCore's
// dominantMin (5 in trial_schema.js / media_common.js), an unselected one records
// the scale floor — so feltDominant()/othersMax scoring in controller.js needs no
// changes: it just sees the same 1-7 selfReport values the slider/rating UIs produce.
const SELECTED_VALUE = 7;
const UNSELECTED_VALUE = 1;

// Display labels for probe keys whose data-key spelling differs from what we
// want on the button (mirrors probe_screen2.js's OTHER_LABEL_OVERRIDES).
const LABEL_OVERRIDES = {
  boredom: "Bored",
  confusion: "Confused",
  anxiety: "Distressed",
  none: "None of the above",
};

function capitalize(str) {
  return str.charAt(0).toUpperCase() + str.slice(1);
}

function labelFor(em) {
  return LABEL_OVERRIDES[em] || capitalize(em);
}

function buildButton(em, small) {
  return `<button type="button" class="probe3-btn ${small ? "probe3-btn-small" : "probe3-btn-large"}" data-em="${em}">${labelFor(em)}</button>`;
}

/* ====================================================================
 * Probe markup (big-button variant) — same swappable-renderer pattern as
 * probe_screen.js's renderProbeGrid / probe_screen2.js's renderProbeChecklist:
 * primary emotions get large buttons, everything else gets small ones.
 * Selecting a button is binary (felt strongly / not), so there's no 1-7
 * rating step here — see SELECTED_VALUE/UNSELECTED_VALUE above for how that
 * maps back onto the shared selfReport schema.
 * (Selecting a button records a flat 7 for that emotion; leaving it unselected records a flat 1.)
 * ==================================================================== */
export function renderProbeButtons({
  primaryEmotions,
  otherEmotions,
  hasNone,
}) {
  const primaryButtons = primaryEmotions
    .map((em) => buildButton(em, false))
    .join("");
  const otherButtons = otherEmotions
    .map((em) => buildButton(em, true))
    .join("");
  const noneButton = hasNone ? buildButton("none", true) : "";

  return `
    <div id="probe-screen" class="probe-screen-v3">
      <h2 class="probe-heading">Which emotions do you feel strongly right now?</h2>
      <p class="probe-subtitle">Select any emotion you feel strongly (5-7 out of 7). Leave the rest unselected.</p>
      <div class="probe3-grid probe3-grid-primary">${primaryButtons}</div>

      <h2 class="probe-heading probe-heading-inline">
        Are you feeling any of these?
        <span class="probe-optional-tag">(Optional)</span>
      </h2>
      <div class="probe3-grid probe3-grid-secondary">
        ${otherButtons}
        ${noneButton}
      </div>
    </div>`;
}

/* ====================================================================
 * Emotion probe (big-button variant) — participant taps large buttons for
 * the primary emotions they feel strongly and small buttons for the
 * optional/other ones. on_finish records into window._probeValues exactly
 * like probe_screen.js/probe_screen2.js, so the data schema is identical
 * between UI variants.
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

      return renderProbeButtons({ primaryEmotions, otherEmotions, hasNone });
    },
    choices: ["Submit"],
    on_load: function () {
      // "None of the above" is mutually exclusive with every other button:
      // selecting it clears all other selections, and selecting any other
      // button clears it.
      const buttons = Array.from(document.querySelectorAll(".probe3-btn"));
      const noneBtn = buttons.find((btn) => btn.dataset.em === "none");

      buttons.forEach((btn) => {
        btn.addEventListener("click", () => {
          const em = btn.dataset.em;
          const selected = btn.classList.toggle("selected");
          if (em === "none") {
            window._probeValues[em] = selected ? 1 : 0;
            if (selected) {
              buttons.forEach((other) => {
                if (other === btn || !other.classList.contains("selected"))
                  return;
                other.classList.remove("selected");
                delete window._probeValues[other.dataset.em];
              });
            }
          } else if (selected) {
            window._probeValues[em] = SELECTED_VALUE;
            if (noneBtn && noneBtn.classList.contains("selected")) {
              noneBtn.classList.remove("selected");
              window._probeValues.none = 0;
            }
          } else {
            delete window._probeValues[em];
          }
        });
      });
    },
    on_finish: function (data) {
      const probeList = currentTask()?.response?.probes || PROBES;
      const selfReport = {};
      for (const em of probeList)
        selfReport[em] = window._probeValues?.[em] ?? UNSELECTED_VALUE;

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
