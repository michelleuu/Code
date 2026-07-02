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
import { arrowSVG, renderSequence, DIRS } from "../../fs_jspsych.js";
import { currentTask } from "../current_task.js";

const FS_TIME_LIMIT_MS = 60000; // FS — 1 minute

/* ====================================================================
 * Figure Series choice task (FS)
 * Renders a sequence of rotated SVG arrows and 8 arrow-button options.
 * Uses jsPsych v7 button format: choices = HTML strings for button labels.
 * ==================================================================== */
export function createTaskChoiceFS() {
  return {
    type: jsPsychHtmlButtonResponse,
    stimulus: function () {
      const task = currentTask();
      if (!task) return `<div id="task-screen"><p>Loading…</p></div>`;
      const item = task.stimulus?.item;
      const instructions =
        task.instructions || "Which arrow comes next? Click your answer.";
      const stemHtml = renderSequence(item?.stem || [], 36);
      return `
        <div id="task-screen">
          <div class="task-label">Figure Series</div>
          <div class="fs-sequence">${stemHtml}</div>
          <p class="task-instructions">${instructions}</p>
        </div>`;
    },
    // jsPsych v7: choices are the button label HTML; index = response value
    choices: DIRS.map((d) => arrowSVG(d.code, 32)),
    trial_duration: FS_TIME_LIMIT_MS,
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
      // Attach response tracking to the 8 arrow buttons once rendered
      const buttons = document.querySelectorAll(".jspsych-btn");
      if (buttons.length && trial.responseTracker) {
        // Convert NodeList to radio-like objects for attachToChoices
        const fakeRadios = Array.from(buttons).map((btn, i) => ({
          value: String(i),
          addEventListener: (ev, fn) =>
            btn.addEventListener(ev === "change" ? "click" : ev, fn),
          removeEventListener: (ev, fn) =>
            btn.removeEventListener(ev === "change" ? "click" : ev, fn),
        }));
        trial.responseTracker.attachToChoices(fakeRadios);
      }
    },
    on_finish: function (data) {
      stopStageTracking();
      stopKeyTracking();
      const task = currentTask();
      const item = task?.stimulus?.item;
      const chosenDir = data.response != null ? DIRS[data.response] : null;
      const chosenCode = chosenDir?.code ?? null;
      const correct =
        item?.key != null && chosenCode != null
          ? chosenCode === item.key
            ? 1
            : 0
          : null;

      trial.currentRealPerf = {
        correct,
        total: 1,
        rtMs: data.rt,
        chosenCode,
        keyPresses: trial.keypressLog.slice(),
      };
      data.chosen_code = chosenCode;
      data.item_key = item?.key ?? null;

      if (trial.currentSelection && !trial.currentSelection.honestFeedback)
        trial.currentDisplayed = resolveOutcomeFeedback(
          trial.currentSelection,
          trial.currentRealPerf,
          session.participant,
        );

      if (trial.responseTracker) {
        trial.responseTracker.recordSubmit(chosenCode);
        const trk = trial.responseTracker.getSummary("choice", chosenCode);
        data.first_response = trk.first_response;
        data.change_count = trk.change_count;
        data.time_to_first_response_ms = trk.time_to_first_response_ms;
        trial.responseTracker.cleanup();
        trial.responseTracker = null;
      }
    },
    data: function () {
      return {
        phase: "task_choice_fs",
        ordinal: session.trialOrdinal,
        bankId: trial.currentSelection?.bankId,
        domainUsed: trial.currentSelection?.domainUsed,
        targetEmotion: trial.currentSelection?.targetEmotion,
      };
    },
  };
}
