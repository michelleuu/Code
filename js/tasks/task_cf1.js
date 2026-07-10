import { session, trial, stageData } from "../state.js";
import {
  startStageTracking,
  stopStageTracking,
  startKeyTracking,
  stopKeyTracking,
} from "../tracking.js";
import { resolveOutcomeFeedback } from "../../controller.js";
import { currentTask } from "../current_task.js";
import { showTimeoutPopup } from "../screens/screen_helpers.js";

/* ====================================================================
 * CF-1 Hidden Figures item (ETS Kit)
 * Five key shapes (Key-A..E.png) rendered above the pattern image at their
 * NATIVE pixel size (no independent CSS scaling) — the key must appear
 * exactly the same size in the task image as it does in the key strip; see
 * the STIMULI note in cf1_subbank.js. Participant picks A-E via radio button
 * and clicks Submit; an invisible per-item time limit (task.stimulus.limitMs,
 * normally 90s) auto-advances if they don't.
 *
 * Handles BOTH shapes emitted by cf1_subbank.js:
 *   - main bank: unit "single", stimulus.item (one item per trial)
 *   - calibration: unit "block", stimulus.block.items (4 items looped in
 *     one trial, honest feedback) — same loop machinery as rotation/IQA.
 * ==================================================================== */
function cf1Items(task) {
  if (task?.stimulus?.item) return [task.stimulus.item];
  return task?.stimulus?.block?.items || [];
}

export function createCf1Block() {
  let selected = null; // currently-checked radio value (A-E), or null

  const cf1BlockStart = {
    type: jsPsychHtmlKeyboardResponse,
    stimulus: "",
    choices: "NO_KEYS",
    trial_duration: 1,
    on_start: function () {
      startStageTracking("task", stageData.task.moves, stageData.task.clicks);
      startKeyTracking();
    },
    data: function () {
      return { phase: "task_cf1_start", ordinal: session.trialOrdinal };
    },
  };

  const cf1ItemNode = {
    type: jsPsychHtmlButtonResponse,
    stimulus: function () {
      const task = currentTask();
      const items = cf1Items(task);
      const it = items[trial.currentBlockItem];
      if (!it) return `<div id="task-screen"><p>—</p></div>`;
      const keys = task?.stimulus?.keys || [];
      const letters = task?.stimulus?.responses || ["A", "B", "C", "D", "E"];
      const instructions =
        task?.instructions ||
        "Five shapes are labelled A–E at the top. Find which one is hidden in the pattern below.";
      const keyStrip = keys
        .map(
          (src, i) => `
          <div class="cf1-key">
            <img src="${src}" alt="Key ${letters[i]}">
            <div class="cf1-key-letter">${letters[i]}</div>
          </div>`,
        )
        .join("");
      const radioRow = letters
        .map(
          (L) => `
          <label class="cf1-radio-label">
            <input type="radio" name="cf1_choice" value="${L}">
            <span>${L}</span>
          </label>`,
        )
        .join("");
      return `
        <div id="task-screen">
          <div class="task-label">Hidden Figures - Item ${trial.currentBlockItem + 1}/${items.length}</div>
          <div class="cf1-stimulus">
            <div class="cf1-keys">${keyStrip}</div>
            <div class="cf1-grid"><img src="${it.file}" alt="Pattern"></div>
          </div>
          <p class="task-instructions">${instructions}</p>
          <div class="cf1-radios">${radioRow}</div>
        </div>`;
    },
    choices: ["Submit"],
    trial_duration: function () {
      return currentTask()?.stimulus?.limitMs ?? 90000;
    },
    on_start: function () {
      selected = null;
    },
    on_load: function () {
      // The previous item timed out — show the "time's up" popup on this
      // (the next) item's page instead of waiting for the whole block to
      // end. Mirrors task_rotation.js's rotItemTimedOut handling.
      if (trial.cf1ItemTimedOut) {
        trial.cf1ItemTimedOut = false;
        showTimeoutPopup();
      }
      document.querySelectorAll('input[name="cf1_choice"]').forEach((r) => {
        r.addEventListener("change", () => {
          selected = r.value;
        });
      });
      // Keys + grid must stay the same size RELATIVE TO EACH OTHER (the
      // whole test hinges on a key matching its match in the pattern at
      // 1:1 scale) — so if the pair is wider than the available space,
      // shrink the wrapper as ONE unit with `zoom` (reflows, unlike
      // `transform`) rather than letting each half fit independently.
      // Wait for images to load first: scrollWidth is 0-ish for an <img>
      // with no width/height attribute until its bytes arrive, so measuring
      // synchronously here would race the image fetch and often skip the
      // shrink it needed.
      const wrapper = document.querySelector(".cf1-stimulus");
      const screen = document.querySelector("#task-screen");
      if (wrapper && screen) {
        const imgs = Array.from(wrapper.querySelectorAll("img"));
        Promise.all(
          imgs.map((img) =>
            img.complete
              ? Promise.resolve()
              : new Promise((res) => img.addEventListener("load", res, { once: true })),
          ),
        ).then(() => {
          wrapper.style.zoom = 1;
          const natural = wrapper.scrollWidth;
          const available = screen.clientWidth;
          if (natural > available) wrapper.style.zoom = available / natural;
        });
      }
    },
    on_finish: function (data) {
      const task = currentTask();
      const items = cf1Items(task);
      const it = items[trial.currentBlockItem];
      const t = data.rt !== null ? Math.round(data.rt) : (task?.stimulus?.limitMs ?? 90000);
      const isCorrect = selected != null && selected === it?.correctResp ? 1 : 0;
      trial.blockCorrect += isCorrect;
      trial.blockTotal++;
      if (trial.rotBlockTracker.firstChoice === null) {
        trial.rotBlockTracker.firstChoice = selected;
        trial.rotBlockTracker.timeToFirst = t;
      }
      trial.rotBlockTracker.finalChoice = selected;
      trial.rotBlockTracker.history.push({
        event_type: "selection",
        value: selected,
        t_ms: t,
        item: trial.currentBlockItem,
      });
      trial.keypressLog.push({
        item: trial.currentBlockItem,
        answer: selected,
        correct: isCorrect,
        rt: t,
        timedOut: data.response === null,
      });
      if (data.response === null) {
        // Last item (or the only item, for a main-bank single trial): no
        // next item page to show the popup on, so fall back to the
        // feedback screen. Otherwise, flag it for the next item's on_load.
        const isLastItem = trial.currentBlockItem === items.length - 1;
        if (isLastItem) trial.taskTimedOut = true;
        else trial.cf1ItemTimedOut = true;
      }
      // per-item real perf, needed for the single-trial (main-bank) case
      trial.currentItemPerf = { correct: isCorrect, rtMs: t };
      trial.currentBlockItem++;
    },
    data: function () {
      return {
        phase: "task_cf1_item",
        ordinal: session.trialOrdinal,
        bankId: trial.currentSelection?.bankId,
        block_item_index: trial.currentBlockItem,
      };
    },
  };

  const cf1BlockLoop = {
    timeline: [cf1ItemNode],
    loop_function: function () {
      const items = cf1Items(currentTask());
      return trial.currentBlockItem < items.length;
    },
  };

  const cf1BlockEnd = {
    type: jsPsychHtmlKeyboardResponse,
    stimulus: "",
    choices: "NO_KEYS",
    trial_duration: 1,
    on_start: function () {
      stopStageTracking();
      stopKeyTracking();
      const task = currentTask();
      if (task?.unit === "block") {
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
      } else {
        // single-item trial (main bank): scoreFn returns { correct, total: 1, rtMs }
        trial.currentRealPerf = {
          correct: trial.currentItemPerf?.correct ?? 0,
          total: 1,
          rtMs: trial.currentItemPerf?.rtMs ?? (task?.stimulus?.limitMs ?? 90000),
          responses: trial.keypressLog.slice(),
        };
      }
      if (trial.currentSelection && !trial.currentSelection.honestFeedback)
        trial.currentDisplayed = resolveOutcomeFeedback(
          trial.currentSelection,
          trial.currentRealPerf,
          session.participant,
        );
    },
    data: function () {
      return { phase: "task_cf1_end", ordinal: session.trialOrdinal };
    },
    on_finish: function (data) {
      data.first_response = trial.rotBlockTracker.firstChoice;
      data.change_count = trial.rotBlockTracker.changeCount ?? 0;
      data.time_to_first_response_ms = trial.rotBlockTracker.timeToFirst;
    },
  };

  return { cf1BlockStart, cf1BlockLoop, cf1BlockEnd };
}
