import { SHOW_DEBUG_INFO } from "../state.js";

/* ====================================================================
 * Screen_helper.js - currently, only imported by prime_screen.js and feedback_screen.js
 * for their shared ui behaviours.
 * ==================================================================== */

// How long the prime/feedback "Continue"-style button stays hidden before
// appearing, forcing participants to spend at least this long on the screen.
export const CONTINUE_DELAY_MS = 1000; // display for 10 sec

// Hides the jsPsych button-response button and shows a "Preparing for next
// task..." message in its place (same spot in the layout) for
// CONTINUE_DELAY_MS, then swaps the message back out for the button.
// Returns the timer id so callers can clear it on_finish.
export function hideContinueButton() {
  const btnGroup = document.getElementById(
    "jspsych-html-button-response-btngroup",
  );
  if (!btnGroup) return null;

  const preparing = document.createElement("p");
  preparing.className = "stage-label preparing-next-task";
  preparing.textContent = "Preparing for next task...";
  btnGroup.insertAdjacentElement("beforebegin", preparing);
  btnGroup.style.display = "none";

  return setTimeout(() => {
    preparing.remove();
    btnGroup.style.display = "";
  }, CONTINUE_DELAY_MS);
}

// How long the "time's up" popup stays on screen after a timed task hits its
// limit and advances away without a response.
export const TIMEOUT_POPUP_MS = 2000;

// Shows a brief "time's up" banner (see .timeout-popup in experiment.css),
// removing it after TIMEOUT_POPUP_MS. Called on the page a timed-out task
// advances to (the feedback screen), so the participant knows why the task
// ended early instead of assuming their answer was lost.
export function showTimeoutPopup() {
  const popup = document.createElement("div");
  popup.className = "timeout-popup";
  popup.textContent =
    "The allotted time has ended. Please move on to the next task.";
  document.body.appendChild(popup);
  setTimeout(() => popup.remove(), TIMEOUT_POPUP_MS);
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
  return `<div class="debug-panel"><div class="debug-panel-inner">${lines.map((l) => `<div>${l}</div>`).join("")}</div></div>`;
}
