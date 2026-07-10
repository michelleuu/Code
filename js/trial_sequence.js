import { session, trial, clock } from "./state.js";
import { J } from "./utils.js";
import { resetTrialBuffers } from "./tracking.js";
import { advancePhase } from "../controller.js";
import { currentTask } from "./current_task.js";
import { createTaskInput } from "./tasks/task_input.js";
import { createTaskChoiceFS } from "./tasks/task_fs.js";
import { createRotationBlock } from "./tasks/task_rotation.js";
import { createIqaBlock } from "./tasks/task_iqa.js";
import { createCf1Block } from "./tasks/task_cf1.js";
import { createP3Block } from "./tasks/task_p3.js";
import { createPrimeScreen } from "./screens/prime_screen.js";
import { createFeedbackScreen } from "./screens/feedback_screen.js";
// import { createProbeScreen } from "./screens/probe_screen.js";
// import { createProbeScreen } from "./screens/probe_screen2.js";
import { createProbeScreen } from "./screens/probe_screen3.js";
import { createDerivedDebugScreen } from "./screens/derived_debug_screen.js";

/* ============================================================================
 * Builds one full jsPsych trial sequence:
 *   setup → prime → task (dispatched) → settle → feedback → probe → derived debug (dev only)
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
  const { cf1BlockStart, cf1BlockLoop, cf1BlockEnd } = createCf1Block();
  const { p3BlockStart, p3PageNode, p3BlockEnd } = createP3Block();

  /* ====================================================================
   * Task dispatcher — one branch per stimulus.component. Explicit component
   * matching (rather than the old unit/response heuristics) so adding a
   * family can never silently collide with an existing branch: every
   * conditional_function in this array is evaluated independently by
   * jsPsych, so any overlap would run BOTH branches on the same trial.
   * ==================================================================== */
  const taskDispatch = [
    {
      // NS / LS / MR: typed text answer
      timeline: [taskInput],
      conditional_function: function () {
        const c = currentTask()?.stimulus?.component;
        return (
          c === "numberSeries" ||
          c === "letterSeries" ||
          c === "matrixReasoning"
        );
      },
    },
    {
      // FS: arrow sequence, 8-button choice (SVG arrows)
      timeline: [taskChoiceFS],
      conditional_function: function () {
        return currentTask()?.stimulus?.component === "figureSeries";
      },
    },
    {
      // Mental rotation: multi-item block
      timeline: [rotBlockStart, rotBlockLoop, rotBlockEnd],
      conditional_function: function () {
        return currentTask()?.stimulus?.component === "mentalRotationBlock";
      },
    },
    {
      // IQA: 2AFC image-comparison block
      timeline: [iqaBlockStart, iqaBlockLoop, iqaBlockEnd],
      conditional_function: function () {
        return currentTask()?.stimulus?.component === "iqa2afcBlock";
      },
    },
    {
      // CF-1: single hidden-figures item (or a 4-item calibration block)
      timeline: [cf1BlockStart, cf1BlockLoop, cf1BlockEnd],
      conditional_function: function () {
        return currentTask()?.stimulus?.component === "cf1HiddenFiguresItem";
      },
    },
    {
      // P-3: identical-pictures block, all N items on one invisible timer
      timeline: [p3BlockStart, p3PageNode, p3BlockEnd],
      conditional_function: function () {
        return (
          currentTask()?.stimulus?.component === "p3IdenticalPicturesBlock"
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

  /* ---- 6. Derived debug screen (dev only — see derived_debug_screen.js) ---- */
  const derivedDebug = createDerivedDebugScreen();

  return [setup, prime, ...taskDispatch, settle, feedback, probe, derivedDebug];
}
