/* DEV TOGGLE: set true to skip WebGazer calibration during testing */
export const SKIP_WEBGAZER = true;

/* DEV TOGGLE: set false to hide the trial-info debug panel on prime/feedback
   screens before running real participants. */
export const SHOW_DEBUG_INFO = true;

/* Session-level state — persists across trials */
export const session = {
  participant: null,
  pool: null,
  sessionStartMs: null,
  trialOrdinal: 0,
  trialStartMs: 0,
  revealTsMs: 0,
};

/* Per-trial working state — reset by resetTrialBuffers() before each trial */
export const trial = {
  currentSelection: null,
  currentDisplayed: null,
  currentRealPerf: null,
  currentDerived: null,
  currentItemPerf: null, // CF-1: per-item {correct, rtMs} for the single-trial (main-bank) case
  currentBlockItem: 0,
  blockCorrect: 0,
  blockTotal: 0,
  keypressLog: [],
  backspaceCount: 0,
  responseTracker: null,
  rotBlockTracker: null,
  taskTimedOut: false,
  rotItemTimedOut: false,
  cf1ItemTimedOut: false,
};

/* Stage-separated tracking arrays (prime / task / feedback / probe) */
export const stageData = {
  prime: { moves: [], clicks: [], eye: [] },
  task: { moves: [], clicks: [], eye: [] },
  feedback: { moves: [], clicks: [], eye: [] },
  probe: { moves: [], clicks: [], eye: [] },
};

/* Active-stage cursor — updated by startStageTracking / stopStageTracking */
export const activeTracking = {
  stage: "",
  moves: null,
  clicks: null,
  t0: 0,
};

export const clock = {
  start() {
    session.sessionStartMs = performance.now();
  },
  elapsedMs() {
    return performance.now() - (session.sessionStartMs ?? performance.now());
  },
};
