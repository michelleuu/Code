import { trial } from "./state.js";

// Helper function to look up the current trial's task in the full bank
export function currentTask() {
  return window.TRIAL_BANK_FULL?.find(
    (t) => t.id === trial.currentSelection?.bankId,
  );
}
