import { trial, stageData, activeTracking } from "./state.js";

// Starts recording mouse moves and clicks for a named stage into the provided arrays.
export function startStageTracking(stageName, movesArr, clicksArr) {
  stopStageTracking();
  activeTracking.stage = stageName;
  activeTracking.t0 = performance.now();
  activeTracking.moves = movesArr;
  activeTracking.clicks = clicksArr;
  document.addEventListener("mousemove", onMouseMove);
  document.addEventListener("click", onMouseClick);
}

// Removes mouse listeners and clears the active stage so no further events are recorded.
export function stopStageTracking() {
  document.removeEventListener("mousemove", onMouseMove);
  document.removeEventListener("click", onMouseClick);
  activeTracking.stage = "";
  activeTracking.moves = null;
  activeTracking.clicks = null;
}

// Appends a timestamped {stage, x, y, t} entry to the active moves array.
function onMouseMove(e) {
  if (!activeTracking.moves) return;
  activeTracking.moves.push({
    stage: activeTracking.stage,
    x: e.clientX, y: e.clientY,
    t: Math.round(performance.now() - activeTracking.t0),
  });
}

// Appends a timestamped {stage, x, y, t, target} entry to the active clicks array.
function onMouseClick(e) {
  if (!activeTracking.clicks) return;
  activeTracking.clicks.push({
    stage: activeTracking.stage,
    x: e.clientX, y: e.clientY,
    t: Math.round(performance.now() - activeTracking.t0),
    target: e.target.tagName,
  });
}

// Resets keypress log and backspace counter, then starts listening for keydown events.
export function startKeyTracking() {
  trial.keypressLog = [];
  trial.backspaceCount = 0;
  document.addEventListener("keydown", onKeyDown);
}

// Removes the keydown listener.
export function stopKeyTracking() {
  document.removeEventListener("keydown", onKeyDown);
}

// Logs the key and elapsed time; increments backspaceCount and notifies responseTracker on deletions.
function onKeyDown(e) {
  trial.keypressLog.push({ key: e.key, t: Math.round(performance.now() - activeTracking.t0) });
  if (e.key === "Backspace" || e.key === "Delete") trial.backspaceCount++;
  if (trial.responseTracker && (e.key === "Backspace" || e.key === "Delete")) {
    const el = document.querySelector("#input-0");
    trial.responseTracker.trackKey(e.key, el ? el.value : "");
  }
}

// Clears all per-trial buffers (moves, clicks, eye, keypresses) and resets counters/trackers.
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
  trial.currentDerived   = null;
  trial.currentBlockItem = 0;
  trial.blockCorrect     = 0;
  trial.blockTotal       = 0;
}
