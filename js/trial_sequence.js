import { session, trial, clock } from "./state.js";
import { J } from "./utils.js";
import { resetTrialBuffers } from "./tracking.js";
import { advancePhase } from "../controller.js";
import { currentTask } from "./current_task.js";
import { createTaskInput } from "./tasks/task_input.js";
import { createTaskChoiceFS } from "./tasks/task_fs.js";
import { createRotationBlock } from "./tasks/task_rotation.js";
import { createIqaBlock } from "./tasks/task_iqa.js";
import { createPrimeScreen } from "./screens/prime_screen.js";
import { createFeedbackScreen } from "./screens/feedback_screen.js";
// import { createProbeScreen } from "./screens/probe_screen.js";
import { createProbeScreen } from "./screens/probe_screen2.js"; // was probe_screen.js

/* ============================================================================
 * Builds one full jsPsych trial sequence:
 *   setup → prime → task (dispatched) → settle → feedback → probe
 * selectionFn(): called at the start of each iteration to pick the next trial.
 *
 * Prime/feedback/probe each live in their own file under ./screens/, and the
 * four task types under ./tasks/, so markup/CSS for any one screen is easy to
 * find and edit without scrolling this shared scaffold. See screens/probe_screen.js
 * for how to try alternative probe UI versions.
 * ========================================================================== */
export function buildTrialSequence(selectionFn) {
  /* ---- 0. Setup (zero-duration) ---- */
  const setup = {
    type: jsPsychHtmlKeyboardResponse,
    stimulus: "",
    choices: "NO_KEYS",
    trial_duration: 1,
    on_start: function () {
      resetTrialBuffers();
      session.trialStartMs = performance.now();
      advancePhase(session.participant, session.pool, clock);
      trial.currentSelection = selectionFn();
      console.log(`[Trial ${session.trialOrdinal}]`, trial.currentSelection);
    },
    data: function () {
      return {
        phase: "trial_setup",
        ordinal: session.trialOrdinal,
        selection: J(trial.currentSelection),
      };
    },
  };

  /* ---- 1. Prime screen (skipped when no prime is selected) ---- */
  const prime = createPrimeScreen();

  /* ====================================================================
   * 2a–2d. Task nodes — one per response type (NS/LS/MR, FS, rotation, IQA).
   * Each lives in its own file under ./tasks/ so task-specific markup/CSS
   * hooks are easy to find without scrolling this shared trial scaffold.
   * ==================================================================== */
  const taskInput = createTaskInput();
  const taskChoiceFS = createTaskChoiceFS();
  const { rotBlockStart, rotBlockLoop, rotBlockEnd } = createRotationBlock();
  const { iqaBlockStart, iqaBlockLoop, iqaBlockEnd } = createIqaBlock();

  /* ====================================================================
   * Task dispatcher — selects the correct branch based on unit / response type
   * ==================================================================== */
  const taskDispatch = [
    {
      // NS / LS / MR: typed text answer
      timeline: [taskInput],
      conditional_function: function () {
        const task = currentTask();
        return task?.unit === "single" && task?.stimulus?.response === "input";
      },
    },
    {
      // FS: arrow sequence, 8-button choice (SVG arrows)
      timeline: [taskChoiceFS],
      conditional_function: function () {
        const task = currentTask();
        return task?.unit === "single" && task?.stimulus?.response === "choice";
      },
    },
    {
      // Mental rotation: multi-item block
      timeline: [rotBlockStart, rotBlockLoop, rotBlockEnd],
      conditional_function: function () {
        const task = currentTask();
        return (
          task?.unit === "block" && task?.stimulus?.response !== "choice2afc"
        );
      },
    },
    {
      // IQA: 2AFC image-comparison block
      timeline: [iqaBlockStart, iqaBlockLoop, iqaBlockEnd],
      conditional_function: function () {
        const task = currentTask();
        return (
          task?.unit === "block" && task?.stimulus?.response === "choice2afc"
        );
      },
    },
  ];

  /* ---- 3. Settle delay ---- */
  const settle = {
    type: jsPsychHtmlKeyboardResponse,
    stimulus: `<div class="box settle"></div>`,
    choices: "NO_KEYS",
    trial_duration: 800,
    data: function () {
      return { phase: "settle_delay", ordinal: session.trialOrdinal };
    },
  };

  /* ---- 4. Feedback screen ---- */
  const feedback = createFeedbackScreen();

  /* ---- 5. Emotion probe ---- */
  const probe = createProbeScreen();

  return [setup, prime, ...taskDispatch, settle, feedback, probe];
}
