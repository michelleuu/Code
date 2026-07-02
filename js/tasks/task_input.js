import {
  session,
  trial,
  stageData,
  activeTracking,
  SKIP_WEBGAZER,
} from "../state.js";
import { makeResponseTracker } from "../response_tracker.js";
import {
  startStageTracking,
  stopStageTracking,
  startKeyTracking,
  stopKeyTracking,
} from "../tracking.js";
import { resolveOutcomeFeedback } from "../../controller.js";
import { currentTask } from "../current_task.js";

/* ---- Component → readable label map ---- */
const COMPONENT_LABEL = {
  numberSeries: "Number Series",
  letterSeries: "Letter Series",
  matrixReasoning: "Matrix Reasoning",
};

/* ---- Per-component screen time limits (ms) — page auto-advances when reached ---- */
const INPUT_TIME_LIMIT_MS = {
  matrixReasoning: 120000, // MR — 2 minutes
  letterSeries: 60000, // LS — 1 minute
  numberSeries: 90000, // NS — 1.5 minutes
};

/* ====================================================================
 * Text-input task (NS / LS / MR)
 * NS / LS: participant types a number or letter sequence answer.
 * MR: participant types A–H; the matrix image is shown above the input.
 * ==================================================================== */
export function createTaskInput() {
  let taskInputTimer = null;

  return {
    type: jsPsychSurveyText,
    preamble: function () {
      const task = currentTask();
      if (!task) return `<div id="task-screen"><p>Loading task…</p></div>`;

      const item = task.stimulus?.item;
      const component = task.stimulus?.component;
      const instructions = task.instructions || "What comes next?";
      const label = COMPONENT_LABEL[component] || "Reasoning";

      let stimulusHtml;
      if (component === "matrixReasoning" && item?.image) {
        // Matrix Reasoning: show image + letter-set reminder
        stimulusHtml = `
          <img src="${item.image}" alt="Matrix pattern" class="mr-image">
          <p class="mr-options">Answer options: A &nbsp; B &nbsp; C &nbsp; D &nbsp; E &nbsp; F &nbsp; G &nbsp; H</p>`;
      } else {
        // Number Series / Letter Series: render stem as comma-separated list ending with "?"
        const stemArr = Array.isArray(item?.stem)
          ? item.stem
          : [item?.stem ?? ""];
        const stemStr = stemArr.join(", ") + ", ?";
        stimulusHtml = `<div class="task-prompt">${stemStr}</div>`;
      }

      return `
        <div id="task-screen">
          <div class="task-label">${label}</div>
          ${stimulusHtml}
          <p class="task-instructions">${instructions}</p>
        </div>`;
    },
    questions: [
      {
        prompt: "",
        name: "task_answer",
        required: true,
        rows: 1,
        columns: 12,
        placeholder: "Your answer",
      },
    ],
    button_label: "Submit",
    extensions: SKIP_WEBGAZER
      ? []
      : [
          {
            type: jsPsychExtensionWebgazer,
            params: { targets: ["#task-screen"] },
          },
        ],
    on_load: function () {
      startStageTracking("task", stageData.task.moves, stageData.task.clicks);
      startKeyTracking();
      trial.responseTracker = makeResponseTracker(activeTracking.t0);
      const inputEl = document.querySelector("#input-0");
      if (inputEl) trial.responseTracker.attachToInput(inputEl);

      const component = currentTask()?.stimulus?.component;
      const limitMs = INPUT_TIME_LIMIT_MS[component];
      if (limitMs) {
        taskInputTimer = setTimeout(() => window.jsPsych.finishTrial(), limitMs);
      }
    },
    on_finish: function (data) {
      if (taskInputTimer) {
        clearTimeout(taskInputTimer);
        taskInputTimer = null;
      }
      stopStageTracking();
      stopKeyTracking();
      const task = currentTask();
      const key = task?.stimulus?.item?.key ?? null;
      const answer = (data.response?.task_answer || "").trim();
      const correct =
        key !== null
          ? answer.toLowerCase() === String(key).toLowerCase()
            ? 1
            : 0
          : null;

      trial.currentRealPerf = {
        correct,
        total: 1,
        rtMs: data.rt,
        keyPresses: trial.keypressLog.slice(),
        backspaceCount: trial.backspaceCount,
      };

      if (trial.currentSelection && !trial.currentSelection.honestFeedback)
        trial.currentDisplayed = resolveOutcomeFeedback(
          trial.currentSelection,
          trial.currentRealPerf,
          session.participant,
        );

      if (trial.responseTracker) {
        trial.responseTracker.recordSubmit(answer);
        const trk = trial.responseTracker.getSummary("input", answer);
        data.first_response = trk.first_response;
        data.change_count = trk.change_count;
        data.time_to_first_response_ms = trk.time_to_first_response_ms;
        data.erase_count = trk.erase_count;
        data.focus_blur_count = trk.focus_blur_count;
        trial.responseTracker.cleanup();
        trial.responseTracker = null;
      }
    },
    data: function () {
      return {
        phase: "task_input",
        ordinal: session.trialOrdinal,
        bankId: trial.currentSelection?.bankId,
        domainUsed: trial.currentSelection?.domainUsed,
        targetEmotion: trial.currentSelection?.targetEmotion,
      };
    },
  };
}
