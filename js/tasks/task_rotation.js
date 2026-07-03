import { session, trial, stageData, SKIP_WEBGAZER } from "../state.js";
import {
  startStageTracking,
  stopStageTracking,
  startKeyTracking,
  stopKeyTracking,
} from "../tracking.js";
import { resolveOutcomeFeedback } from "../../controller.js";
import { currentTask } from "../current_task.js";

const ROTATION_TIME_LIMIT_MS = 7500; // 7500ms per item, per Ganis & Kievit paradigm
const ROTATION_BLANK_MS = 250; // blank screen preceding each item

/* ====================================================================
 * Mental-rotation block
 * Multi-item block: participant judges each image pair (same / mirrored).
 * Items come from task.stimulus.block.stimulusRefs.
 * ==================================================================== */
export function createRotationBlock() {
  // rotBlockStart: invisible node that starts tracking before the first image
  const rotBlockStart = {
    type: jsPsychHtmlKeyboardResponse,
    stimulus: "",
    choices: "NO_KEYS",
    trial_duration: 1,
    on_start: function () {
      startStageTracking("task", stageData.task.moves, stageData.task.clicks);
      startKeyTracking();
    },
    data: function () {
      return { phase: "task_rotation_start", ordinal: session.trialOrdinal };
    },
  };

  // rotItemBlank: 250ms blank screen shown before each item, per the original paradigm
  // ("Each trial started with a 250ms blank screen, after which one of the stimuli
  // was presented until participants responded... with a time limit of 7500ms.")
  const rotItemBlank = {
    type: jsPsychHtmlKeyboardResponse,
    stimulus: `<div id="task-screen"></div>`,
    choices: "NO_KEYS",
    trial_duration: ROTATION_BLANK_MS,
    data: function () {
      return { phase: "task_rotation_blank", ordinal: session.trialOrdinal };
    },
  };

  // rotItemNode: shows one image pair — participant clicks whether it's the same shape or a mirror image
  const rotItemNode = {
    type: jsPsychHtmlButtonResponse,
    stimulus: function () {
      const refs = currentTask()?.stimulus?.block?.stimulusRefs || [];
      const ref = refs[trial.currentBlockItem];
      if (!ref) return `<div id="task-screen"><p>—</p></div>`;
      return `
        <div id="task-screen">
          <div class="task-label">Mental Rotation - Item ${trial.currentBlockItem + 1}/${refs.length}</div>
          <div class="rot-pair"><img src="${ref.file}" alt="Rotation pair"></div>
          <p class="task-instructions">Same shape or mirror image?</p>
        </div>`;
    },
    choices: ["Same shape", "Mirror image"],
    trial_duration: ROTATION_TIME_LIMIT_MS,
    extensions: SKIP_WEBGAZER
      ? []
      : [
          {
            type: jsPsychExtensionWebgazer,
            params: { targets: ["#task-screen"] },
          },
        ],
    on_finish: function (data) {
      const refs = currentTask()?.stimulus?.block?.stimulusRefs || [];
      const ref = refs[trial.currentBlockItem];
      const answer =
        data.response === 0 ? "same" : data.response === 1 ? "different" : null;
      const t = data.rt !== null ? Math.round(data.rt) : ROTATION_TIME_LIMIT_MS;
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
      const isCorrect = answer !== null && answer === ref?.correctResp ? 1 : 0;
      trial.blockCorrect += isCorrect;
      trial.blockTotal++;
      trial.keypressLog.push({
        item: trial.currentBlockItem,
        answer,
        correct: isCorrect,
        rt: data.rt,
        timedOut: answer === null,
      });
      trial.currentBlockItem++;
    },
    data: function () {
      return {
        phase: "task_rotation_item",
        ordinal: session.trialOrdinal,
        bankId: trial.currentSelection?.bankId,
        block_item_index: trial.currentBlockItem,
      };
    },
  };

  // Loops the blank screen + rotItemNode until all stimulusRefs have been shown.
  const rotBlockLoop = {
    timeline: [rotItemBlank, rotItemNode],
    loop_function: function () {
      const refs = currentTask()?.stimulus?.block?.stimulusRefs || [];
      return trial.currentBlockItem < refs.length;
    },
  };

  // rotBlockEnd: fires after the loop — aggregates block performance
  const rotBlockEnd = {
    type: jsPsychHtmlKeyboardResponse,
    stimulus: "",
    choices: "NO_KEYS",
    trial_duration: 1,
    on_start: function () {
      stopStageTracking();
      stopKeyTracking();
      trial.currentRealPerf = {
        correct: trial.blockCorrect,
        total: trial.blockTotal,
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
      return { phase: "task_rotation_end", ordinal: session.trialOrdinal };
    },
    on_finish: function (data) {
      data.first_response = trial.rotBlockTracker.firstChoice;
      data.change_count = trial.rotBlockTracker.changeCount;
      data.time_to_first_response_ms = trial.rotBlockTracker.timeToFirst;
    },
  };

  return { rotBlockStart, rotBlockLoop, rotBlockEnd };
}
