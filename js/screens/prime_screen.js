import { session, trial } from "../state.js";
import { currentTask } from "../current_task.js";
import { disableContinueButton, renderDebugPanel } from "./screen_helpers.js";

/* ====================================================================
 * Prime screen — shown before the task when a prime was selected.
 * Returns the conditional-wrapper timeline object ready to slot into
 * buildTrialSequence()'s returned array; skipped when no prime applies.
 * ==================================================================== */
export function createPrimeScreen() {
  let primeContinueTimer = null;

  const primeNode = {
    type: jsPsychHtmlButtonResponse,
    stimulus: function () {
      const task = currentTask();
      if (!task) return `<div class="box"><p>Next task</p></div>`;
      const fr =
        (task.framing && task.framing[trial.currentSelection.domainUsed]) ||
        task;
      const primeObj = (fr.primes || []).find(
        (p) => p.id === trial.currentSelection.primeId,
      );
      const primeText = primeObj?.text || "";
      const debugPanel = renderDebugPanel([
        [
          ["BankId", trial.currentSelection?.bankId ?? ""],
          ["domainUsed", trial.currentSelection?.domainUsed ?? ""],
          ["targetEmotion", trial.currentSelection?.targetEmotion ?? ""],
          ["primeId", trial.currentSelection?.primeId ?? ""],
        ],
        [["controller_reason", JSON.stringify(trial.currentSelection?.reason ?? {})]],
      ]);
      return `
        <div id="prime-screen">
          <p class="stage-label">Prepare for the next task.</p>
          ${primeText ? `<p class="stage-text">${primeText}</p>` : ""}
          ${debugPanel}
        </div>`;
    },
    choices: ["Start task"],
    // No webgazer extension or mouse/click tracking here — nothing is logged
    // during the prime screen.
    on_load: function () {
      primeContinueTimer = disableContinueButton();
    },
    on_finish: function (data) {
      clearTimeout(primeContinueTimer);
    },
    data: function () {
      return {
        phase: "prime",
        ordinal: session.trialOrdinal,
        primeId: trial.currentSelection?.primeId || null,
        bankId: trial.currentSelection?.bankId,
        domainUsed: trial.currentSelection?.domainUsed,
        targetEmotion: trial.currentSelection?.targetEmotion,
      };
    },
  };

  // Conditional wrapper — prime screen only runs when a prime was selected
  return {
    timeline: [primeNode],
    conditional_function: function () {
      return !!trial.currentSelection?.primeId;
    },
  };
}
