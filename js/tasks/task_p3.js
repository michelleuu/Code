import { session, trial, stageData } from "../state.js";
import {
  startStageTracking,
  stopStageTracking,
  startKeyTracking,
  stopKeyTracking,
} from "../tracking.js";
import { resolveOutcomeFeedback } from "../../controller.js";
import { currentTask } from "../current_task.js";

/* ====================================================================
 * P-3 Identical Pictures block (ETS Kit)
 * All n items (rows) shown simultaneously — one target + five numbered
 * alternatives baked into a single row image, radio buttons 1-5 rendered
 * underneath. No submit button: the whole page is on one invisible timer
 * (task.stimulus.limitMs) that auto-advances, per the original paradigm
 * (fixed window, no visible countdown).
 *
 * LAYOUT NOTE. Row images are not consistently right-justified within their
 * own file (cropped from a two-column paper page — see p3_subbank.js /
 * media_bank_decisions_summary). Each row right-justifies its image, then
 * measures its RENDERED width on_load and sizes the radio row underneath to
 * ALT_REGION_FRACTION of it, so the five equidistant radio slots land under
 * the five alternatives and leave the leftmost slice — where the (unselectable)
 * target figure sits — empty, rather than spreading across the target's
 * column too. ALT_REGION_FRACTION was picked by eye against a handful of
 * rows (tools/p3_layout_demo.html), not measured per image, so it won't
 * land exactly for every row. Badly-off images still need a manual crop/pad
 * pass — see that same demo page.
 *
 * SCORING (team decision, overrides original build note in p3_subbank.js):
 * netScore = correct - incorrect; unanswered rows count toward neither.
 * scoreFn returns { correct, incorrect, total, netScore, rtMs: limitMs, passed }.
 * ==================================================================== */
// Fraction of the row's rendered width the 5-radio strip occupies, right-
// aligned — the remaining (1 - this) on the left is left empty for the
// target figure's column. See LAYOUT NOTE above.
const ALT_REGION_FRACTION = 0.72;

export function createP3Block() {
  const rowSelections = []; // rowSelections[i] = "1".."5" | undefined

  const p3BlockStart = {
    type: jsPsychHtmlKeyboardResponse,
    stimulus: "",
    choices: "NO_KEYS",
    trial_duration: 1,
    on_start: function () {
      startStageTracking("task", stageData.task.moves, stageData.task.clicks);
      startKeyTracking();
    },
    data: function () {
      return { phase: "task_p3_start", ordinal: session.trialOrdinal };
    },
  };

  const p3PageNode = {
    type: jsPsychHtmlKeyboardResponse,
    stimulus: function () {
      const task = currentTask();
      const items = task?.stimulus?.block?.items || [];
      const instructions =
        task?.instructions ||
        "Find the matching image in each row — work fast, accuracy counts.";
      const rows = items
        .map(
          (it, i) => `
          <div class="p3-row" data-row="${i}">
            <div class="p3-row-image"><img src="${it.file}" alt="Item ${i + 1}"></div>
            <div class="p3-row-radios">
              ${[1, 2, 3, 4, 5]
                .map(
                  (n) => `
                <label class="p3-radio-label">
                  <input type="radio" name="p3_row_${i}" value="${n}">
                </label>`,
                )
                .join("")}
            </div>
          </div>`,
        )
        .join("");
      return `
        <div id="task-screen">
          <div class="task-label">Identical Pictures - ${items.length} items</div>
          <p class="task-instructions">${instructions}</p>
          <div class="p3-block">${rows}</div>
        </div>`;
    },
    choices: "NO_KEYS",
    trial_duration: function () {
      return currentTask()?.stimulus?.limitMs ?? 7000;
    },
    on_start: function () {
      rowSelections.length = 0;
    },
    on_load: function () {
      // Scale each row DOWN to fit (never clip): row images run up to
      // ~1480px native (see p3_subbank.js STIMULI/LAYOUT note) but
      // #task-screen is ~780px, and clipping the overflow would hide either
      // the target figure or some of the five alternatives — unacceptable
      // when the participant needs to see all of them. `zoom` reflows (unlike
      // `transform`), so the shrunk image's own getBoundingClientRect() is
      // accurate afterward, which is what the radio strip is sized to.
      document.querySelectorAll(".p3-row").forEach((row) => {
        const img = row.querySelector(".p3-row-image img");
        const cell = row.querySelector(".p3-row-image");
        const radios = row.querySelector(".p3-row-radios");
        const sizeToImage = () => {
          const available = cell.clientWidth;
          if (img.naturalWidth > available) img.style.zoom = available / img.naturalWidth;
          radios.style.width = `${img.getBoundingClientRect().width * ALT_REGION_FRACTION}px`;
        };
        if (img.complete) sizeToImage();
        else img.addEventListener("load", sizeToImage, { once: true });

        row.querySelectorAll('input[type="radio"]').forEach((r) => {
          r.addEventListener("change", () => {
            rowSelections[Number(row.dataset.row)] = r.value;
          });
        });
      });
    },
    on_finish: function (data) {
      const task = currentTask();
      const items = task?.stimulus?.block?.items || [];
      let correct = 0,
        incorrect = 0;
      const responses = items.map((it, i) => {
        const answer = rowSelections[i] != null ? Number(rowSelections[i]) : null;
        const isCorrect = answer != null && answer === it.correctResp;
        if (answer != null) isCorrect ? correct++ : incorrect++;
        return { item: i, answer, correct: isCorrect ? 1 : 0 };
      });
      const netScore = correct - incorrect;
      const passMark = task?.calibration?.passMark ?? 0;
      trial.blockCorrect = correct;
      trial.blockTotal = items.length;
      trial.keypressLog = responses;
      trial.currentRealPerf = {
        correct,
        incorrect,
        total: items.length,
        netScore,
        passed: netScore >= passMark,
        rtMs: currentTask()?.stimulus?.limitMs ?? 7000,
        responses,
      };
      data.timed_out = true; // page always ends via the invisible time limit
    },
    data: function () {
      return {
        phase: "task_p3_page",
        ordinal: session.trialOrdinal,
        bankId: trial.currentSelection?.bankId,
      };
    },
  };

  const p3BlockEnd = {
    type: jsPsychHtmlKeyboardResponse,
    stimulus: "",
    choices: "NO_KEYS",
    trial_duration: 1,
    on_start: function () {
      stopStageTracking();
      stopKeyTracking();
      if (trial.currentSelection && !trial.currentSelection.honestFeedback)
        trial.currentDisplayed = resolveOutcomeFeedback(
          trial.currentSelection,
          trial.currentRealPerf,
          session.participant,
        );
    },
    data: function () {
      return { phase: "task_p3_end", ordinal: session.trialOrdinal };
    },
  };

  return { p3BlockStart, p3PageNode, p3BlockEnd };
}
