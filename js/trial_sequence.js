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
  const taskInput = {
    type: jsPsychSurveyText,
    preamble: function () {
      const task = window.TRIAL_BANK_FULL.find(
        (t) => t.id === trial.currentSelection?.bankId,
      );
      if (!task) return `<div id="task-screen"><p>Loading task…</p></div>`;
      const stem =
        task.stimulus?.item?.stem ||
        "(Stem not available — fill from MITRE item bank)";
      const surface = task.name?.split(" ")[0] || "";
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
      startKeyTracking();
      trial.responseTracker = makeResponseTracker(activeTracking.t0);
      const inputEl = document.querySelector("#input-0");
      if (inputEl) trial.responseTracker.attachToInput(inputEl);
    },
    on_finish: function (data) {
      stopStageTracking();
      stopKeyTracking();
      stageData.task.eye = extractWebgazerPoints(data, "task");

      const task = window.TRIAL_BANK_FULL.find(
        (t) => t.id === trial.currentSelection?.bankId,
      );
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

      // Update the target emotion based on how the participant performed.
      // Ex: if disappointment was targeted but they did well, show pride instead
      if (trial.currentSelection && !trial.currentSelection.honestFeedback)
        trial.currentDisplayed = resolveOutcomeFeedback(
          trial.currentSelection,
          trial.currentRealPerf,
          session.participant,
        );

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

  const rotItemNode = {
    type: jsPsychHtmlButtonResponse,
    stimulus: function () {
      const refs =
        window.TRIAL_BANK_FULL.find(
          (t) => t.id === trial.currentSelection?.bankId,
        )?.stimulus?.block?.stimulusRefs || [];
      const ref = refs[trial.currentBlockItem];
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
      stageData.task.eye.push(...extractWebgazerPoints(data, "task"));
      const refs =
        window.TRIAL_BANK_FULL.find(
          (t) => t.id === trial.currentSelection?.bankId,
        )?.stimulus?.block?.stimulusRefs || [];
      const ref = refs[trial.currentBlockItem];
      const answer = data.response === 0 ? "same" : "different";
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

  const rotBlockLoop = {
    timeline: [rotItemNode],
    loop_function: function () {
      const refs =
        window.TRIAL_BANK_FULL.find(
          (t) => t.id === trial.currentSelection?.bankId,
        )?.stimulus?.block?.stimulusRefs || [];
      return trial.currentBlockItem < refs.length;
    },
  };

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

  /* Dispatcher — picks the correct task branch */
  const taskDispatch = [
    {
      timeline: [taskInput],
      conditional_function: function () {
        const task = window.TRIAL_BANK_FULL.find(
          (t) => t.id === trial.currentSelection?.bankId,
        );
        return task?.unit === "single" && task?.stimulus?.response === "input";
      },
    },
    {
      timeline: [taskInput],
      conditional_function: function () {
        const task = window.TRIAL_BANK_FULL.find(
          (t) => t.id === trial.currentSelection?.bankId,
        );
        return task?.unit === "single" && task?.stimulus?.response === "choice";
      },
    },
    {
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
      const isCalib = trial.currentSelection?.honestFeedback;
      const perf = trial.currentRealPerf;
      const correct = perf?.correct || 0,
        total = perf?.total || 1;
      const scoreHtml = `<div class="feedback-score">${correct}/${total}</div>`;
      if (isCalib) {
        const pct = Math.round((correct / total) * 100);
        const msg =
          pct >= 80
            ? `Well done!`
            : `Getting the hang of it is what matters here.`;
        return `<div id="feedback-screen">${scoreHtml}<div class="feedback-text pos">${msg}</div></div>`;
      }
      const d = trial.currentDisplayed;
      if (!d || d.honestFallback || !d.framedText) {
        const ok = correct >= total * 0.5;
        return `<div id="feedback-screen">${scoreHtml}<div class="feedback-text ${ok ? "pos" : "neg"}">${ok ? "Good work." : "Keep going — this is a tough one."}</div></div>`;
      }
      const isPos = isPositiveEmotion(d.emotionShown);
      return `<div id="feedback-screen">${scoreHtml}<div class="feedback-text ${isPos ? "pos" : "neg"}">${d.framedText}</div></div>`;
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
      startStageTracking(
        "feedback",
        stageData.feedback.moves,
        stageData.feedback.clicks,
      );
      startCapture(
        `${session.participant.participantId}_t${session.trialOrdinal}_feedback`,
      );
    },
    on_finish: function (data) {
      stopStageTracking();
      stopCapture();
      stageData.feedback.eye = extractWebgazerPoints(data, "feedback");
      data.framed_text = trial.currentDisplayed?.framedText || null;
      data.emotion_shown = trial.currentDisplayed?.emotionShown || null;
      data.pivoted_to = trial.currentDisplayed?.pivotedTo || null;
      data.honest_fallback = trial.currentDisplayed?.honestFallback || false;
      data.pct = trial.currentDisplayed?.pct || null;
      data.pct_ref = trial.currentDisplayed?.pctRef || null;
      data.attribution = trial.currentDisplayed?.attribution || null;
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
      const probeList =
        window.TRIAL_BANK_FULL.find(
          (t) => t.id === trial.currentSelection?.bankId,
        )?.response?.probes || PROBES;
      let rows = "";
      for (const em of probeList) {
        if (em === "none") {
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
        task: window.TRIAL_BANK_FULL.find(
          (t) => t.id === trial.currentSelection?.bankId,
        ),
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

      data.probe_eye_moves_raw = J(stageData.probe.eye);
      data.probe_eye_count = stageData.probe.eye.length;

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
