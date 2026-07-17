import { trial, SHOW_DEBUG_INFO } from "../state.js";
import { J } from "../utils.js";
import { renderDebugPanel } from "./screen_helpers.js";

/* ====================================================================
 * Derived debug screen — dev-only screen shown right after the probe,
 * surfacing this trial's derived scoring (trial.currentDerived, stashed
 * by the probe screen's on_finish). Wrapped in the same conditional-
 * timeline pattern as prime_screen.js, but gated on SHOW_DEBUG_INFO
 * instead of a per-trial condition, so flipping that flag off in
 * state.js removes this screen from the timeline entirely — delete this
 * file and its trial_sequence.js wiring once no longer needed.
 * ==================================================================== */
export function createDerivedDebugScreen() {
  const derivedDebugNode = {
    type: jsPsychHtmlButtonResponse,
    stimulus: function () {
      return `
        <div id="derived-debug-screen">
          <p class="stage-label">[Dev only] Derived scoring for this trial.</p>
        </div>`;
    },
    choices: ["Next task"],
    // Rendered via `prompt`, not inline in `stimulus` — see prime_screen.js
    // for why (jsPsych appends prompt HTML after the button group).
    prompt: function () {
      const d = trial.currentDerived || {};
      return renderDebugPanel([
        [
          ["feltDominant", d.feltDominant ?? ""],
          ["confirmed", d.confirmed ?? ""],
          ["cleanCore", d.cleanCore ?? ""],
          ["offTarget", d.offTarget ?? ""],
          ["inductionFailed", d.inductionFailed ?? ""],
        ],
        [["derived", J(d)]],
      ]);
    },
    data: function () {
      return { phase: "derived_debug" };
    },
  };

  return {
    timeline: [derivedDebugNode],
    conditional_function: function () {
      return SHOW_DEBUG_INFO;
    },
  };
}
