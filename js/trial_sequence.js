import {
  session,
  trial,
  stageData,
  activeTracking,
  clock,
  SKIP_WEBGAZER,
} from "./state.js";
import { J, extractWebgazerPoints, isPositiveEmotion } from "./utils.js";
import { makeResponseTracker } from "./response_tracker.js";
import {
  startStageTracking,
  stopStageTracking,
  startKeyTracking,
  stopKeyTracking,
  resetTrialBuffers,
} from "./tracking.js";
import { startCapture, stopCapture } from "./webcam.js";
import {
  resolveOutcomeFeedback,
  onTrialFinish,
  advancePhase,
} from "../controller.js";
import { PROBES } from "../trial_schema.js";
import { arrowSVG, renderSequence, DIRS } from "../fs_jspsych.js";

/* ---- Helper: look up the current trial's task in the full bank ---- */
function currentTask() {
  return window.TRIAL_BANK_FULL?.find(
    (t) => t.id === trial.currentSelection?.bankId,
  );
}

/* ---- Component → readable label map ---- */
const COMPONENT_LABEL = {
  numberSeries: "Number Series",
  letterSeries: "Letter Series",
  matrixReasoning: "Matrix Reasoning",
  figureSeries: "Figure Series",
  mentalRotationBlock: "Mental Rotation",
  iqa2afcBlock: "Image Quality",
};

/* ============================================================================
 * Builds one full jsPsych trial sequence:
 *   setup → prime → task (dispatched) → settle → feedback → probe
 * selectionFn(): called at the start of each iteration to pick the next trial.
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
  const primeNode = {
    type: jsPsychHtmlButtonResponse,
    stimulus: function () {
      const task = currentTask();
      if (!task) return `<div class="box"><p>Next task</p></div>`;
      const fr =
        (task.framing && task.framing[trial.currentSelection.domainUsed]) ||
        task;
      const primeObj = (fr.primes || []).find(
        (p) => p.id === trial.currentSelection.primeId,
      );
      return `<div id="prime-screen">${primeObj?.text || ""}</div>`;
    },
    choices: ["Continue"],
    extensions: SKIP_WEBGAZER
      ? []
      : [
          {
            type: jsPsychExtensionWebgazer,
            params: { targets: ["#prime-screen"] },
          },
        ],
    on_load: function () {
      startStageTracking(
        "prime",
        stageData.prime.moves,
        stageData.prime.clicks,
      );
    },
    on_finish: function (data) {
      stopStageTracking();
    },
    data: function () {
      return {
        phase: "prime",
        ordinal: session.trialOrdinal,
        primeId: trial.currentSelection?.primeId || null,
        bankId: trial.currentSelection?.bankId,
        domainUsed: trial.currentSelection?.domainUsed,
        targetEmotion: trial.currentSelection?.targetEmotion,
      };
    },
  };

  // Conditional wrapper — prime screen only runs when a prime was selected
  const prime = {
    timeline: [primeNode],
    conditional_function: function () {
      return !!trial.currentSelection?.primeId;
    },
  };

  /* ====================================================================
   * 2a. Text-input task (NS / LS / MR)
   * NS / LS: participant types a number or letter sequence answer.
   * MR: participant types A–H; the matrix image is shown above the input.
   * ==================================================================== */
  const taskInput = {
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
    },
    on_finish: function (data) {
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

  /* ====================================================================
   * 2b. Figure Series choice task (FS)
   * Renders a sequence of rotated SVG arrows and 8 arrow-button options.
   * Uses jsPsych v7 button format: choices = HTML strings for button labels.
   * ==================================================================== */
  const taskChoiceFS = {
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

  /* ====================================================================
   * 2c. Mental-rotation block
   * Multi-item block: participant judges each image pair (same / mirrored).
   * Items come from task.stimulus.block.stimulusRefs.
   * ==================================================================== */

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

  // rotItemNode: shows one image pair — press B for same, N for mirrored
  const rotItemNode = {
    type: jsPsychHtmlKeyboardResponse,
    stimulus: function () {
      const refs = currentTask()?.stimulus?.block?.stimulusRefs || [];
      const ref = refs[trial.currentBlockItem];
      if (!ref) return `<div id="task-screen"><p>—</p></div>`;
      return `
        <div id="task-screen">
          <div class="task-label">Mental Rotation</div>
          <div class="rot-progress">Item ${trial.currentBlockItem + 1} / ${refs.length}</div>
          <p class="task-instructions">Same shape or mirror image? Press <b>B</b> for same, <b>N</b> for mirrored.</p>
          <div class="rot-pair"><img src="${ref.file}" alt="Rotation pair"></div>
        </div>`;
    },
    choices: ["b", "n"],
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
      const answer = data.response === "b" ? "same" : "different";
      const t = Math.round(data.rt);
      if (trial.rotBlockTracker.firstChoice === null) {
        trial.rotBlockTracker.firstChoice = answer;
        trial.rotBlockTracker.timeToFirst = t;
      }
      trial.rotBlockTracker.finalChoice = answer;
      trial.rotBlockTracker.history.push({
        event_type: "selection",
        value: answer,
        key: null,
        t_ms: t,
        item: trial.currentBlockItem,
      });
      const isCorrect = answer === ref?.correctResp ? 1 : 0;
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
        phase: "task_rotation_item",
        ordinal: session.trialOrdinal,
        bankId: trial.currentSelection?.bankId,
        block_item_index: trial.currentBlockItem,
      };
    },
  };

  // Loops rotItemNode until all stimulusRefs have been shown.
  const rotBlockLoop = {
    timeline: [rotItemNode],
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

  /* ====================================================================
   * 2d. IQA 2AFC block (Image-Quality Assessment)
   * Multi-item block: participant picks which of two images is lower quality.
   * Items come from task.stimulus.block.pairs (each has .left, .right, .correctResp).
   * ==================================================================== */

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

  // The bank records paths as stimuli/iqa/kadid/*.png but the committed pilot
  // images live in stimuli/iqa_pilot/ (only the 198 used files, git-tracked).
  function iqaImgPath(p) {
    return (p || "").replace(
      /^stimuli\/iqa\/kadid\/(?:images\/)?/,
      "stimuli/iqa_pilot/",
    );
  }

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
          <div class="task-label">Image Quality</div>
          <div class="rot-progress">Image ${trial.currentBlockItem + 1} / ${pairs.length}</div>
          <p class="task-instructions">${instructions}</p>
          <div class="iqa-pair">
            <div class="iqa-side">
              <img class="iqa-img" src="${iqaImgPath(pair.left)}" alt="Left image">
              <p class="iqa-img-label">Left</p>
            </div>
            <div class="iqa-side">
              <img class="iqa-img" src="${iqaImgPath(pair.right)}" alt="Right image">
              <p class="iqa-img-label">Right</p>
            </div>
          </div>
        </div>`;
    },
    choices: ["Left image is lower quality", "Right image is lower quality"],
    extensions: SKIP_WEBGAZER
      ? []
      : [
          {
            type: jsPsychExtensionWebgazer,
            params: { targets: ["#task-screen"] },
          },
        ],
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
  const feedback = {
    type: jsPsychHtmlButtonResponse,
    stimulus: function () {
      const isCalib = trial.currentSelection?.honestFeedback;
      const perf = trial.currentRealPerf;
      const correct = perf?.correct ?? 0;
      const total = perf?.total ?? 1;
      const scoreHtml = `<div class="feedback-score">You scored ${correct}/${total}</div>`;

      // If during callibration phase, display the score only
      if (isCalib) {
        return `<div id="feedback-screen">${scoreHtml}</div>`;
      }

      // Fallback: controller couldn't produce framed feedback
      const d = trial.currentDisplayed;
      if (!d || d.honestFallback || !d.framedText) {
        return `<div id="feedback-screen">${scoreHtml}</div>`;
      }

      // Normal induction path: score + emotion-framed text
      return `<div id="feedback-screen">${scoreHtml}<div class="feedback-text">${d.framedText}</div></div>`;
    },
    choices: ["Continue"],
    extensions: SKIP_WEBGAZER
      ? []
      : [
          {
            type: jsPsychExtensionWebgazer,
            params: { targets: ["#feedback-screen"] },
          },
        ],
    on_load: function () {
      session.revealTsMs = performance.now();
      session.webgazerTrialStartPerfMs = performance.now();
      startStageTracking(
        "feedback",
        stageData.feedback.moves,
        stageData.feedback.clicks,
      );
      if (!SKIP_WEBGAZER) {
        const t0 = session.webgazerTrialStartPerfMs;
        session._cancelFeedbackGaze = window.jsPsych.extensions.webgazer.onGazeUpdate((pred) => {
          stageData.feedback.eye.push({
            stage: "feedback",
            x: Math.round(pred.x),
            y: Math.round(pred.y),
            t: Math.round(performance.now() - t0),
          });
        });
      }
      session.videoStartPerfMs = performance.now();
      startCapture(
        `${session.participant.participantId}_t${session.trialOrdinal}_feedback`,
      );
    },
    on_finish: function (data) {
      stopStageTracking();
      stopCapture();
      if (session._cancelFeedbackGaze) {
        session._cancelFeedbackGaze();
        session._cancelFeedbackGaze = null;
      }
      data.framed_text = trial.currentDisplayed?.framedText || null;
      data.emotion_shown = trial.currentDisplayed?.emotionShown || null;
      data.pivoted_to = trial.currentDisplayed?.pivotedTo || null;
      data.honest_fallback = trial.currentDisplayed?.honestFallback || false;
      data.pct = trial.currentDisplayed?.pct || null;
      data.pct_ref = trial.currentDisplayed?.pctRef || null;
      data.attribution = trial.currentDisplayed?.attribution || null;
      data.video_filename = `${session.participant.participantId}_t${session.trialOrdinal}_feedback.webm`;
      data.video_start_perf_ms = session.videoStartPerfMs;
      data.webgazer_trial_start_perf_ms = session.webgazerTrialStartPerfMs;
      data.feedback_eye_moves_raw = J(stageData.feedback.eye);
      data.feedback_eye_count = stageData.feedback.eye.length;
    },
    data: function () {
      return {
        phase: "feedback",
        ordinal: session.trialOrdinal,
        bankId: trial.currentSelection?.bankId,
        domainUsed: trial.currentSelection?.domainUsed,
        targetEmotion: trial.currentSelection?.targetEmotion,
        feedback_id: trial.currentSelection?.feedbackId || null,
      };
    },
  };

  /* ---- 5. Emotion probe ---- */
  const probe = {
    type: jsPsychHtmlButtonResponse,
    stimulus: function () {
      window._probeValues = {};
      const probeList = currentTask()?.response?.probes || PROBES;
      const emotions = probeList.filter((em) => em !== "none");
      const hasNone = probeList.includes("none");

      const SCALE_LABELS = [
        "Not at all",
        "Slightly",
        "Somewhat",
        "Moderately",
        "Fairly",
        "Very",
        "Extremely",
      ];

      const headerCols = SCALE_LABELS.map(
        (lbl, i) => `
        <th class="probe-th-col">
          <span class="probe-num">${i + 1}</span>
          <span class="probe-lbl">${lbl}</span>
        </th>`,
      ).join("");

      const bodyRows = emotions
        .map((em) => {
          const cells = [1, 2, 3, 4, 5, 6, 7]
            .map(
              (v) =>
                `<td><input type="radio" name="probe_${em}" value="${v}"
            onchange="window._probeValues['${em}']=parseInt(this.value)"></td>`,
            )
            .join("");
          return `<tr><td class="probe-em-label">${em}</td>${cells}</tr>`;
        })
        .join("");

      const noneRow = hasNone
        ? `
        <div class="probe-none-row">
          <label>
            <input type="checkbox" id="probe_none"
              onchange="window._probeValues['none']=this.checked?1:0">
            None of the above
          </label>
        </div>`
        : "";

      const perf = trial.currentRealPerf;
      const scoreHtml = perf
        ? `<p>Score: ${perf.correct ?? 0} / ${perf.total ?? 1}</p>`
        : "";

      return `
        <div id="probe-screen">
          ${scoreHtml}
          <h3>How strongly are you feeling each emotion right now?</h3>
          <p class="note">If you leave an emotion unselected, it will be recorded as 1 (Not at all).</p>
          <table class="probe-table">
            <thead><tr>
              <th class="probe-th-emotion"></th>
              ${headerCols}
            </tr></thead>
            <tbody>${bodyRows}</tbody>
          </table>
          ${noneRow}
        </div>`;
    },
    choices: ["Submit"],
    extensions: SKIP_WEBGAZER
      ? []
      : [
          {
            type: jsPsychExtensionWebgazer,
            params: { targets: ["#probe-screen"] },
          },
        ],
    on_load: function () {
      startStageTracking(
        "probe",
        stageData.probe.moves,
        stageData.probe.clicks,
      );
      document.querySelectorAll('input[type="radio"][name^="probe_"]').forEach(radio => {
        radio.addEventListener("mousedown", function () {
          this._wasChecked = this.checked;
        });
        radio.addEventListener("click", function () {
          if (this._wasChecked) {
            this.checked = false;
            delete window._probeValues[this.name.replace(/^probe_/, "")];
          }
        });
      });
    },
    on_finish: function (data) {
      stopStageTracking();
      const probeList = currentTask()?.response?.probes || PROBES;
      const selfReport = {};
      for (const em of probeList)
        selfReport[em] = window._probeValues?.[em] ?? 1;

      const trialUid = `${session.participant.participantId}_t${session.trialOrdinal}`;
      const realized = {
        trialUid,
        participantId: session.participant.participantId,
        ordinalPosition: session.trialOrdinal,
        bankId: trial.currentSelection?.bankId,
        phase: session.participant.phase,
        targetEmotion: trial.currentSelection?.targetEmotion || null,
        domainUsed: trial.currentSelection?.domainUsed || null,
        primeId: trial.currentSelection?.primeId || null,
        honestFeedback: !!trial.currentSelection?.honestFeedback,
        realPerformance: trial.currentRealPerf,
        displayed: trial.currentDisplayed,
        selfReport,
        task: currentTask(),
        capture: {
          revealTsMs: session.revealTsMs,
          captureWindowMs: 10000,
          baselineWindowMs: [-2000, 0],
        },
      };

      onTrialFinish(realized, session.participant, session.pool, clock);
      advancePhase(session.participant, session.pool, clock);

      data.self_report = J(selfReport);
      data.derived = J(realized.derived);
      data.felt_dominant = realized.derived?.feltDominant || null;
      data.confirmed = realized.derived?.confirmed || false;
      data.clean_core = realized.derived?.cleanCore || false;
      data.off_target = realized.derived?.offTarget || false;
      data.induction_failed = realized.derived?.inductionFailed || false;
      data.correct = trial.currentRealPerf?.correct;
      data.total = trial.currentRealPerf?.total;
      data.rt_task_ms = trial.currentRealPerf?.rtMs;
      data.cumNegLoad = session.participant.ledger.cumNegLoad;
      data.phase_at_finish = session.participant.phase;
      data.controller_reason = J(trial.currentSelection?.reason || {});

      // Exponential moving average (α=0.15) to track typical trial duration without storing all values.
      const trialMs = performance.now() - session.trialStartMs;
      const med = session.participant.ledger.medianTrialMs;
      session.participant.ledger.medianTrialMs = med
        ? med * 0.85 + trialMs * 0.15
        : trialMs;

      session.trialOrdinal++;
    },
    data: function () {
      return {
        phase: "emotion_probe",
        ordinal: session.trialOrdinal,
        bankId: trial.currentSelection?.bankId,
        domainUsed: trial.currentSelection?.domainUsed,
        targetEmotion: trial.currentSelection?.targetEmotion,
      };
    },
  };

  return [setup, prime, ...taskDispatch, settle, feedback, probe];
}
