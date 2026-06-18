import { trial, stageData, activeTracking } from "./state.js";

export function startStageTracking(stageName, movesArr, clicksArr) {
  stopStageTracking();
  activeTracking.stage = stageName;
  activeTracking.t0 = performance.now();
  activeTracking.moves = movesArr;
  activeTracking.clicks = clicksArr;
  document.addEventListener("mousemove", onMouseMove);
  document.addEventListener("click", onMouseClick);
}

export function stopStageTracking() {
  document.removeEventListener("mousemove", onMouseMove);
  document.removeEventListener("click", onMouseClick);
  activeTracking.stage = "";
  activeTracking.moves = null;
  activeTracking.clicks = null;
}

function onMouseMove(e) {
  if (!activeTracking.moves) return;
  activeTracking.moves.push({
    stage: activeTracking.stage,
    x: e.clientX, y: e.clientY,
    t: Math.round(performance.now() - activeTracking.t0),
  });
}

function onMouseClick(e) {
  if (!activeTracking.clicks) return;
  activeTracking.clicks.push({
    stage: activeTracking.stage,
    x: e.clientX, y: e.clientY,
    t: Math.round(performance.now() - activeTracking.t0),
    target: e.target.tagName,
  });
}

export function startKeyTracking() {
  trial.keypressLog = [];
  trial.backspaceCount = 0;
  document.addEventListener("keydown", onKeyDown);
}

export function stopKeyTracking() {
  document.removeEventListener("keydown", onKeyDown);
}

function onKeyDown(e) {
  trial.keypressLog.push({ key: e.key, t: Math.round(performance.now() - activeTracking.t0) });
  if (e.key === "Backspace" || e.key === "Delete") trial.backspaceCount++;
  if (trial.responseTracker && (e.key === "Backspace" || e.key === "Delete")) {
    const el = document.querySelector("#input-0");
    trial.responseTracker.trackKey(e.key, el ? el.value : "");
  }
}

export function resetTrialBuffers() {
  stageData.prime.moves    = []; stageData.prime.clicks    = []; stageData.prime.eye    = [];
  stageData.task.moves     = []; stageData.task.clicks     = []; stageData.task.eye     = [];
  stageData.feedback.moves = []; stageData.feedback.clicks = []; stageData.feedback.eye = [];
  stageData.probe.moves    = []; stageData.probe.clicks    = []; stageData.probe.eye    = [];
  trial.keypressLog    = [];
  trial.backspaceCount = 0;
  trial.responseTracker = null;
  trial.rotBlockTracker = {
    history: [], firstChoice: null, timeToFirst: null,
    changeCount: 0, changedChoice: false, finalChoice: null,
  };
  trial.currentRealPerf  = null;
  trial.currentDisplayed = null;
  trial.currentBlockItem = 0;
  trial.blockCorrect     = 0;
  trial.blockTotal       = 0;
}
