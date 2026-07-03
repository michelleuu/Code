import { session, trial, stageData, SKIP_WEBGAZER } from "../state.js";
import { J } from "../utils.js";
import { startCapture, stopCapture } from "../webcam.js";
import { disableContinueButton, renderDebugPanel } from "./screen_helpers.js";

/* ====================================================================
 * Feedback screen — shows the (possibly emotion-framed) result after a
 * task, plus a dev-only debug panel of the resolved feedback fields.
 * ==================================================================== */
export function createFeedbackScreen() {
  let feedbackContinueTimer = null;

  return {
    type: jsPsychHtmlButtonResponse,
    stimulus: function () {
      // d is null during calibration/honest-feedback trials (resolveOutcomeFeedback
      // is only called for non-honestFeedback selections) and whenever no framed
      // variant cleared the gates (honestFallback) — both cases show label only.
      const d = trial.currentDisplayed;
      const framedText = d && !d.honestFallback ? d.framedText : null;
      const debugPanel = renderDebugPanel([
        [
          ["BankId", trial.currentSelection?.bankId ?? ""],
          ["domainUsed", trial.currentSelection?.domainUsed ?? ""],
          ["targetEmotion", trial.currentSelection?.targetEmotion ?? ""],
          ["feedback_id", d?.feedbackId ?? ""],
          ["framed text", d?.framedText ?? ""],
        ],
        [
          ["emotion_shown", d?.emotionShown ?? ""],
          ["pivoted_to", d?.pivotedTo ?? ""],
          ["honest_fallback", d?.honestFallback ?? ""],
          ["pct", d?.pct ?? ""],
          ["pct_ref", d?.pctRef ?? ""],
          ["attribution", d?.attribution ?? ""],
        ],
        [
          ["correct", trial.currentRealPerf?.correct ?? ""],
          ["total", trial.currentRealPerf?.total ?? ""],
        ],
      ]);
      return `
        <div id="feedback-screen">
          <p class="stage-label">Your response has been recorded.</p>
          ${framedText ? `<p class="stage-text">${framedText}</p>` : ""}
          ${debugPanel}
        </div>`;
    },
    choices: ["Next task"],
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
      if (!SKIP_WEBGAZER) {
        const t0 = session.webgazerTrialStartPerfMs;
        session._cancelFeedbackGaze =
          window.jsPsych.extensions.webgazer.onGazeUpdate((pred) => {
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
      feedbackContinueTimer = disableContinueButton();
    },
    on_finish: function (data) {
      clearTimeout(feedbackContinueTimer);
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
}
