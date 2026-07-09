import { session, trial } from "../state.js";
import { currentTask } from "../current_task.js";
import { hideContinueButton, renderDebugPanel } from "./screen_helpers.js";

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
      // instructionsOnPrime: timed tasks (P-3, CF-1) repeat the mechanic
      // reminder here so participants aren't reading it for the first time
      // once the clock is already running.
      const instructionsHtml = task.instructionsOnPrime && task.instructions
        ? `<p class="stage-instructions">${task.instructions}</p>`
        : "";
      const debugPanel = renderDebugPanel([
        [
          ["BankId", trial.currentSelection?.bankId ?? ""],
          ["domainUsed", trial.currentSelection?.domainUsed ?? ""],
          ["targetEmotion", trial.currentSelection?.targetEmotion ?? ""],
          ["primeId", trial.currentSelection?.primeId ?? ""],
        ],
        [
          [
            "controller_reason",
            JSON.stringify(trial.currentSelection?.reason ?? {}),
          ],
        ],
      ]);
      return `
        <div id="prime-screen">
          <p class="stage-label">Next task</p>
          ${primeText ? `<p class="stage-text">${primeText}</p>` : ""}
          ${instructionsHtml}
          ${debugPanel}
        </div>`;
    },
    choices: ["Start task"],
    // No webgazer extension or mouse/click tracking here — nothing is logged
    // during the prime screen.
    on_load: function () {
      primeContinueTimer = hideContinueButton();
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
