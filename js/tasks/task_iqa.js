import { session, trial, stageData } from "../state.js";
import {
  startStageTracking,
  stopStageTracking,
  startKeyTracking,
  stopKeyTracking,
} from "../tracking.js";
import { resolveOutcomeFeedback } from "../../controller.js";
import { currentTask } from "../current_task.js";

// The bank records paths as stimuli/iqa/kadid/*.png but the committed pilot
// images live in stimuli/iqa_pilot/ (only the 198 used files, git-tracked).
function iqaImgPath(p) {
  return (p || "").replace(
    /^stimuli\/iqa\/kadid\/(?:images\/)?/,
    "stimuli/iqa_pilot/",
  );
}

/* ====================================================================
 * IQA 2AFC block (Image-Quality Assessment)
 * Multi-item block: participant picks which of two images is lower quality.
 * Items come from task.stimulus.block.pairs (each has .left, .right, .correctResp).
 * No time limit.
 * ==================================================================== */
export function createIqaBlock() {
  // iqaBlockStart: invisible node that starts tracking before the first image pair.
  const iqaBlockStart = {
    type: jsPsychHtmlKeyboardResponse,
    stimulus: "",
    choices: "NO_KEYS",
    trial_duration: 1,
    on_start: function () {
      startStageTracking("task", stageData.task.moves, stageData.task.clicks);
      startKeyTracking();
    },
    data: function () {
      return { phase: "task_iqa_start", ordinal: session.trialOrdinal };
    },
  };

  // iqaItemNode: shows one left/right image pair — participant clicks which looks lower quality.
  const iqaItemNode = {
    type: jsPsychHtmlButtonResponse,
    stimulus: function () {
      const task = currentTask();
      const pairs = task?.stimulus?.block?.pairs || [];
      const pair = pairs[trial.currentBlockItem];
      if (!pair) return `<div id="task-screen"><p>—</p></div>`;
      const instructions =
        task?.instructions || "Which image looks lower quality?";
      return `
        <div id="task-screen">
          <div class="task-label">Image Quality - Image ${trial.currentBlockItem + 1}/${pairs.length}</div>
          <div class="iqa-pair">
            <div class="iqa-side">
              <img class="iqa-img" src="${iqaImgPath(pair.left)}" alt="Left image">
              <p class="iqa-img-label">(a) Left image</p>
            </div>
            <div class="iqa-side">
              <img class="iqa-img" src="${iqaImgPath(pair.right)}" alt="Right image">
              <p class="iqa-img-label">(b) Right image</p>
            </div>
          </div>
          <p class="task-instructions">${instructions}</p>
        </div>`;
    },
    choices: ["Left image is lower quality", "Right image is lower quality"],
    on_finish: function (data) {
      const pairs = currentTask()?.stimulus?.block?.pairs || [];
      const pair = pairs[trial.currentBlockItem];
      const answer = data.response === 0 ? "left" : "right";
      const t = Math.round(data.rt);
      if (trial.rotBlockTracker.firstChoice === null) {
        trial.rotBlockTracker.firstChoice = answer;
        trial.rotBlockTracker.timeToFirst = t;
      }
      trial.rotBlockTracker.finalChoice = answer;
      trial.rotBlockTracker.history.push({
        event_type: "selection",
        value: answer,
        t_ms: t,
        item: trial.currentBlockItem,
      });
      const isCorrect = answer === pair?.correctResp ? 1 : 0;
      trial.blockCorrect += isCorrect;
      trial.blockTotal++;
      trial.keypressLog.push({
        item: trial.currentBlockItem,
        answer,
        correct: isCorrect,
        rt: data.rt,
      });
      trial.currentBlockItem++;
    },
    data: function () {
      return {
        phase: "task_iqa_item",
        ordinal: session.trialOrdinal,
        bankId: trial.currentSelection?.bankId,
        block_item_index: trial.currentBlockItem,
      };
    },
  };

  // Loops iqaItemNode until all image pairs have been judged.
  const iqaBlockLoop = {
    timeline: [iqaItemNode],
    loop_function: function () {
      const pairs = currentTask()?.stimulus?.block?.pairs || [];
      return trial.currentBlockItem < pairs.length;
    },
  };

  // iqaBlockEnd: aggregates block performance and resolves feedback
  const iqaBlockEnd = {
    type: jsPsychHtmlKeyboardResponse,
    stimulus: "",
    choices: "NO_KEYS",
    trial_duration: 1,
    on_start: function () {
      stopStageTracking();
      stopKeyTracking();
      const task = currentTask();
      const passMark = task?.calibration?.passMark ?? 0.5;
      const passed =
        trial.blockTotal > 0 &&
        trial.blockCorrect / trial.blockTotal >= passMark;
      trial.currentRealPerf = {
        correct: trial.blockCorrect,
        total: trial.blockTotal,
        passed,
        rtMs: performance.now() - session.trialStartMs,
        responses: trial.keypressLog.slice(),
      };
      if (trial.currentSelection && !trial.currentSelection.honestFeedback)
        trial.currentDisplayed = resolveOutcomeFeedback(
          trial.currentSelection,
          trial.currentRealPerf,
          session.participant,
        );
    },
    data: function () {
      return { phase: "task_iqa_end", ordinal: session.trialOrdinal };
    },
    on_finish: function (data) {
      data.first_response = trial.rotBlockTracker.firstChoice;
      data.change_count = trial.rotBlockTracker.changeCount ?? 0;
      data.time_to_first_response_ms = trial.rotBlockTracker.timeToFirst;
    },
  };

  return { iqaBlockStart, iqaBlockLoop, iqaBlockEnd };
}
