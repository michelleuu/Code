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

/* Builds one full jsPsych trial sequence: setup → prime → task → settle → feedback → probe.
 * selectionFn(): called at the start of each iteration to pick the next trial. */
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

  /* ---- 1. Prime screen ---- */
  const prime = {
    type: jsPsychHtmlButtonResponse,
    stimulus: function () {
      if (!trial.currentSelection?.primeId)
        return `<div class="box" style="min-height:80px"><p style="color:#888;font-size:15px">Prepare for the next task.</p></div>`;
      const task = window.TRIAL_BANK_FULL.find(
        (t) => t.id === trial.currentSelection.bankId,
      );
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
      stageData.prime.eye = extractWebgazerPoints(data, "prime");
      data.prime_eye_moves_raw = J(stageData.prime.eye);
      data.prime_eye_count = stageData.prime.eye.length;
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

  /* ---- 2a. Text-input task (NS / LS) ---- */
  // Used for Number Series and Letter Series tasks — participant types a text answer.
  const taskInput = {
    type: jsPsychSurveyText,
    preamble: function () {
      // Look up the selected task in the bank to get its stem (the question text)
      const task = window.TRIAL_BANK_FULL.find(
        (t) => t.id === trial.currentSelection?.bankId,
      );
      if (!task) return `<div id="task-screen"><p>Loading task…</p></div>`;
      const stem =
        task.stimulus?.item?.stem ||
        "(Stem not available — fill from MITRE item bank)";
      const surface = task.name?.split(" ")[0] || ""; // e.g. "NS", "LS"
      return `
        <div id="task-screen">
          <div class="task-label">${surface} Task</div>
          <div class="task-prompt">${stem}</div>
          <p style="font-size:15px;color:#555">What comes next?</p>
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
      startKeyTracking(); // records every keypress for the keypressLog
      trial.responseTracker = makeResponseTracker(activeTracking.t0);
      const inputEl = document.querySelector("#input-0");
      if (inputEl) trial.responseTracker.attachToInput(inputEl); // tracks edits, erases, focus/blur
    },
    on_finish: function (data) {
      stopStageTracking();
      stopKeyTracking();
      stageData.task.eye = extractWebgazerPoints(data, "task");

      const task = window.TRIAL_BANK_FULL.find(
        (t) => t.id === trial.currentSelection?.bankId,
      );
      const key = task?.stimulus?.item?.key ?? null; // correct answer from the bank
      const answer = (data.response?.task_answer || "").trim();
      // Compare case-insensitively; null if no answer key exists (item not yet filled in)
      const correct =
        key !== null
          ? answer.toLowerCase() === String(key).toLowerCase()
            ? 1
            : 0
          : null;

      // Store performance so feedback screen and controller can read it
      trial.currentRealPerf = {
        correct,
        total: 1,
        rtMs: data.rt,
        keyPresses: trial.keypressLog.slice(),
        backspaceCount: trial.backspaceCount,
      };

      // Resolve post-task: real performance may pivot the target emotion (e.g. success under disappointment target → pride).
      if (trial.currentSelection && !trial.currentSelection.honestFeedback)
        trial.currentDisplayed = resolveOutcomeFeedback(
          trial.currentSelection,
          trial.currentRealPerf,
          session.participant,
        );

      // Save response behaviour summary (how participant typed, changed answer, etc.)
      const taskRespType =
        task?.stimulus?.response === "choice" ? "choice" : "input";
      if (trial.responseTracker) {
        trial.responseTracker.recordSubmit(answer);
        const trk = trial.responseTracker.getSummary(taskRespType, answer);
        data.first_response = trk.first_response;
        data.change_count = trk.change_count;
        data.time_to_first_response_ms = trk.time_to_first_response_ms;
        if (taskRespType === "input") {
          data.erase_count = trk.erase_count;
          data.focus_blur_count = trk.focus_blur_count;
        }
        trial.responseTracker.cleanup();
        trial.responseTracker = null;
      }

      data.task_eye_moves_raw = J(stageData.task.eye);
      data.task_eye_count = stageData.task.eye.length;
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

  /* ---- 2b. Mental-rotation block ---- */
  // Mental rotation is a multi-item block: participant judges each image pair (same / mirrored)
  // one at a time. The block loops through all stimulusRefs in the selected task before ending.

  // rotBlockStart: invisible 1ms node that starts tracking before the first image appears
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

  // rotItemNode: shows one image pair and waits for Same / Mirrored button click
  const rotItemNode = {
    type: jsPsychHtmlButtonResponse,
    stimulus: function () {
      const refs =
        window.TRIAL_BANK_FULL.find(
          (t) => t.id === trial.currentSelection?.bankId,
        )?.stimulus?.block?.stimulusRefs || [];
      const ref = refs[trial.currentBlockItem]; // current item index within the block
      if (!ref) return `<div id="task-screen"><p>—</p></div>`;
      return `
        <div id="task-screen">
          <div class="task-label">Mental Rotation</div>
          <div class="rot-progress">Item ${trial.currentBlockItem + 1} / ${refs.length}</div>
          <div class="rot-pair"><img src="${ref.file}" alt="Rotation pair"></div>
        </div>`;
    },
    choices: ["Same shape", "Mirrored shape"],
    extensions: SKIP_WEBGAZER
      ? []
      : [
          {
            type: jsPsychExtensionWebgazer,
            params: { targets: ["#task-screen"] },
          },
        ],
    on_finish: function (data) {
      stageData.task.eye.push(...extractWebgazerPoints(data, "task")); // accumulate gaze across all items
      const refs =
        window.TRIAL_BANK_FULL.find(
          (t) => t.id === trial.currentSelection?.bankId,
        )?.stimulus?.block?.stimulusRefs || [];
      const ref = refs[trial.currentBlockItem];
      const answer = data.response === 0 ? "same" : "different"; // button index → label
      const t = Math.round(data.rt);
      // Track first choice and timing separately from final choice (participant may review)
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
      trial.blockCorrect += isCorrect; // running tally across all items in this block
      trial.blockTotal++;
      trial.keypressLog.push({
        item: trial.currentBlockItem,
        answer,
        correct: isCorrect,
        rt: data.rt,
      });
      trial.currentBlockItem++; // advance to next image pair
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

  // rotBlockLoop: repeats rotItemNode until all image pairs in the block have been shown
  const rotBlockLoop = {
    timeline: [rotItemNode],
    loop_function: function () {
      const refs =
        window.TRIAL_BANK_FULL.find(
          (t) => t.id === trial.currentSelection?.bankId,
        )?.stimulus?.block?.stimulusRefs || [];
      return trial.currentBlockItem < refs.length; // keep looping until every item is done
    },
  };

  // rotBlockEnd: invisible 1ms node that fires after the loop — computes block-level performance
  // and resolves which feedback to show (same pivot logic as taskInput)
  const rotBlockEnd = {
    type: jsPsychHtmlKeyboardResponse,
    stimulus: "",
    choices: "NO_KEYS",
    trial_duration: 1,
    on_start: function () {
      stopStageTracking();
      stopKeyTracking();
      // Aggregate all item results into one performance record for the block
      trial.currentRealPerf = {
        correct: trial.blockCorrect,
        total: trial.blockTotal,
        rtMs: performance.now() - session.trialStartMs, // total block time, not per-item
        responses: trial.keypressLog.slice(),
      };
      // Resolve feedback based on block-level accuracy + speed (mental rotation uses self_speed framing)
      if (trial.currentSelection && !trial.currentSelection.honestFeedback)
        trial.currentDisplayed = resolveOutcomeFeedback(
          trial.currentSelection,
          trial.currentRealPerf,
          session.participant,
        );
    },
    data: function () {
      return {
        phase: "task_rotation_end",
        ordinal: session.trialOrdinal,
      };
    },
    on_finish: function (data) {
      const answers = (trial.currentRealPerf?.responses || []).map(
        (r) => r.answer,
      );
      data.first_response = trial.rotBlockTracker.firstChoice;
      data.change_count = trial.rotBlockTracker.changeCount;
      data.time_to_first_response_ms = trial.rotBlockTracker.timeToFirst;
    },
  };

  /* Dispatcher — picks the correct task branch based on the selected task's unit type */
  const taskDispatch = [
    {
      // NS / LS: typed text answer
      timeline: [taskInput],
      conditional_function: function () {
        const task = window.TRIAL_BANK_FULL.find(
          (t) => t.id === trial.currentSelection?.bankId,
        );
        return task?.unit === "single" && task?.stimulus?.response === "input";
      },
    },
    {
      // FS / MR: multiple-choice button answer (reuses same taskInput node, choice layout differs in HTML)
      timeline: [taskInput],
      conditional_function: function () {
        const task = window.TRIAL_BANK_FULL.find(
          (t) => t.id === trial.currentSelection?.bankId,
        );
        return task?.unit === "single" && task?.stimulus?.response === "choice";
      },
    },
    {
      // Mental rotation: multi-item block with its own loop
      timeline: [rotBlockStart, rotBlockLoop, rotBlockEnd],
      conditional_function: function () {
        const task = window.TRIAL_BANK_FULL.find(
          (t) => t.id === trial.currentSelection?.bankId,
        );
        return task?.unit === "block";
      },
    },
  ];

  /* ---- 3. Settle delay ---- */
  const settle = {
    type: jsPsychHtmlKeyboardResponse,
    stimulus: `<div class="box" style="min-height:80px"></div>`,
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
      const isCalib = trial.currentSelection?.honestFeedback; // true during practice rounds — no emotion induction
      const perf = trial.currentRealPerf;
      const correct = perf?.correct || 0,
        total = perf?.total || 1;
      const scoreHtml = `<div class="feedback-score">${correct}/${total}</div>`; // always shown regardless of branch

      // Calibration: only display score and no framed text
      if (isCalib) {
        return `<div id="feedback-screen">${scoreHtml}</div>`;
      }

      //  Fallback: controller couldn't produce framed feedback (edge case), show score only
      const d = trial.currentDisplayed; // set by resolveOutcomeFeedback() in taskInput/rotBlock on_finish
      if (!d || d.honestFallback || !d.framedText) {
        return `<div id="feedback-screen">${scoreHtml}</div>`;
      }

      // Normal induction path: show score + emotion-framed text
      const isPos = isPositiveEmotion(d.emotionShown);
      return `<div id="feedback-screen">${scoreHtml}<div class="feedback-text ${isPos ? "pos" : "neg"}">${d.framedText}</div></div>`;
    },
    choices: ["Continue"],
    // Attach WebGazer to track where participant looks during feedback (skipped in dev mode)
    extensions: SKIP_WEBGAZER
      ? []
      : [
          {
            type: jsPsychExtensionWebgazer,
            params: { targets: ["#feedback-screen"] },
          },
        ],
    on_load: function () {
      session.revealTsMs = performance.now(); // timestamp when feedback became visible — used to compute reaction latency
      startStageTracking(
        "feedback",
        stageData.feedback.moves,
        stageData.feedback.clicks,
      );
      // Start webcam recording — captures facial expression in response to the feedback text
      startCapture(
        `${session.participant.participantId}_t${session.trialOrdinal}_feedback`,
      );
    },
    on_finish: function (data) {
      stopStageTracking();
      stopCapture(); // saves the .webm clip for this trial
      stageData.feedback.eye = extractWebgazerPoints(data, "feedback");
      // Log what was actually shown to the participant (may differ from target if outcome pivoted)
      data.framed_text = trial.currentDisplayed?.framedText || null;
      data.emotion_shown = trial.currentDisplayed?.emotionShown || null; // emotion the framing was designed to induce
      data.pivoted_to = trial.currentDisplayed?.pivotedTo || null; // set if outcome forced a pivot (e.g. success → pride instead of disappointment)
      data.honest_fallback = trial.currentDisplayed?.honestFallback || false; // true if framing failed and score was shown plain
      data.pct = trial.currentDisplayed?.pct || null; // percentile number shown in feedback text
      data.pct_ref = trial.currentDisplayed?.pctRef || null; // what the pct refers to: self_score / self_speed / peer_success
      data.attribution = trial.currentDisplayed?.attribution || null; // effort vs ability attribution frame used
      data.feedback_eye_moves_raw = J(stageData.feedback.eye);
      data.feedback_eye_count = stageData.feedback.eye.length;
    },
    data: function () {
      // Static metadata logged at trial start (before on_finish fields are added)
      return {
        phase: "feedback",
        ordinal: session.trialOrdinal,
        bankId: trial.currentSelection?.bankId,
        domainUsed: trial.currentSelection?.domainUsed,
        targetEmotion: trial.currentSelection?.targetEmotion, // what emotion was planned before the task
        feedback_id: trial.currentSelection?.feedbackId || null,
      };
    },
  };

  /* ---- 5. Emotion probe ---- */
  const probe = {
    type: jsPsychHtmlButtonResponse,
    stimulus: function () {
      window._probeValues = {}; // reset ratings bucket before building the screen
      // Use task-specific probe list if defined, otherwise fall back to the global PROBES list
      const probeList =
        window.TRIAL_BANK_FULL.find(
          (t) => t.id === trial.currentSelection?.bankId,
        )?.response?.probes || PROBES;
      let rows = "";
      for (const em of probeList) {
        if (em === "none") {
          // "None of the above" checkbox — written as 0/1 into _probeValues
          rows += `
            <div class="probe-row" style="margin-top:10px">
              <div class="probe-label">none of the above</div>
              <div class="probe-radios">
                <label style="font-size:14px;color:#555;cursor:pointer">
                  <input type="checkbox" id="probe_none"
                    onchange="window._probeValues['none']=this.checked?1:0">
                  &nbsp;I am not feeling any of these
                </label>
              </div>
            </div>`;
        } else {
          // 1–7 Likert slider for each emotion; rating written to _probeValues on every change
          rows += `
            <div class="probe-row">
              <div class="probe-label">${em}</div>
              <div class="probe-radios">
                <div class="probe-radio-options">
                  ${[1, 2, 3, 4, 5, 6, 7].map((v) => `<label class="probe-radio-label"><input type="radio" name="probe_${em}" value="${v}" onchange="window._probeValues['${em}']=parseInt(this.value)"><span>${v}</span></label>`).join("")}
                </div>
                <div class="probe-anchors"><span>Not at all</span><span>Extremely</span></div>
              </div>
            </div>`;
        }
      }
      return `<div id="probe-screen"><h3>How are you feeling right now?</h3>${rows}</div>`;
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
    },
    on_finish: function (data) {
      stopStageTracking();
      stageData.probe.eye = extractWebgazerPoints(data, "probe");

      const probeList =
        window.TRIAL_BANK_FULL.find(
          (t) => t.id === trial.currentSelection?.bankId,
        )?.response?.probes || PROBES;
      // Collect final ratings from _probeValues; default to 1 (not at all) if participant skipped a slider
      const selfReport = {};
      for (const em of probeList)
        selfReport[em] = window._probeValues?.[em] ?? 1;

      // Unique key for matching this trial's probe data to the webcam clip file
      const trialUid = `${session.participant.participantId}_t${session.trialOrdinal}`;
      // Bundle everything that happened this trial into one record for the controller
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
        realPerformance: trial.currentRealPerf,   // accuracy + RT from task
        displayed: trial.currentDisplayed,         // what feedback was actually shown
        selfReport,                                // participant's emotion ratings
        task: window.TRIAL_BANK_FULL.find(
          (t) => t.id === trial.currentSelection?.bankId,
        ),
        capture: {
          revealTsMs: session.revealTsMs,          // when feedback appeared on screen
          captureWindowMs: 10000,                  // webcam clip length in ms
          baselineWindowMs: [-2000, 0],            // pre-feedback baseline window for FER
        },
      };

      // Controller updates pool counts, ledger, and derives cleanCore / inductionFailed labels
      onTrialFinish(realized, session.participant, session.pool, clock);
      // Check whether the session should advance to the next phase (e.g. main → positive_close)
      advancePhase(session.participant, session.pool, clock);

      // Write trial outcome fields to jsPsych's data log
      data.self_report = J(selfReport);
      data.derived = J(realized.derived);
      data.felt_dominant = realized.derived?.feltDominant || null;   // emotion with the highest rating
      data.confirmed = realized.derived?.confirmed || false;          // did the target emotion register?
      data.clean_core = realized.derived?.cleanCore || false;         // target ≥ 5, all others ≤ 3
      data.off_target = realized.derived?.offTarget || false;         // a different emotion dominated
      data.induction_failed = realized.derived?.inductionFailed || false; // no emotion rated above threshold
      data.correct = trial.currentRealPerf?.correct;
      data.total = trial.currentRealPerf?.total;
      data.rt_task_ms = trial.currentRealPerf?.rtMs;
      data.cumNegLoad = session.participant.ledger.cumNegLoad;        // running total of negative emotion exposure
      data.phase_at_finish = session.participant.phase;
      data.controller_reason = J(trial.currentSelection?.reason || {}); // why the controller picked this trial

      data.probe_eye_moves_raw = J(stageData.probe.eye);
      data.probe_eye_count = stageData.probe.eye.length;

      // Exponential moving average of trial duration — used by controller to estimate time remaining
      const trialMs = performance.now() - session.trialStartMs;
      const med = session.participant.ledger.medianTrialMs;
      session.participant.ledger.medianTrialMs = med
        ? med * 0.85 + trialMs * 0.15
        : trialMs;

      session.trialOrdinal++; // increment after all logging so ordinal is stable throughout this trial
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
