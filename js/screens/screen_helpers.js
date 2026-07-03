import { SHOW_DEBUG_INFO } from "../state.js";

/* ====================================================================
 * Screen_helper.js - currently, only imported by prime_screen.js and feedback_screen.js
 * for their shared ui behaviours.
 * ==================================================================== */

// How long the prime/feedback "Continue"-style button stays hidden before
// appearing, forcing participants to spend at least this long on the screen.
export const CONTINUE_DELAY_MS = 10000; // display for 10 sec

// Disables the jsPsych button-response button (pale/muted via the
// .jspsych-btn:disabled override in experiment.css, cursor: not-allowed)
// for CONTINUE_DELAY_MS, then re-enables it back to its normal style.
// Returns the timer id so callers can clear it on_finish.
export function disableContinueButton() {
  const buttons = document.querySelectorAll(
    "#jspsych-html-button-response-btngroup button",
  );
  if (!buttons.length) return null;

  buttons.forEach((btn) => (btn.disabled = true));

  return setTimeout(() => {
    buttons.forEach((btn) => (btn.disabled = false));
  }, CONTINUE_DELAY_MS);
}

// Renders a monospace dev-only panel of trial fields below the prime/feedback
// text. `rows` is an array of arrays of [label, value] pairs — one <div> per
// row, label bold and value regular weight. Controlled by the SHOW_DEBUG_INFO
// toggle in js/state.js.
export function renderDebugPanel(rows) {
  if (!SHOW_DEBUG_INFO) return "";
  const lines = rows.map((fields) =>
    fields
      .map(([label, value]) => `<strong>${label}:</strong> ${value}`)
      .join(", "),
  );
  return `<div class="debug-panel">${lines.map((l) => `<div>${l}</div>`).join("")}</div>`;
}
