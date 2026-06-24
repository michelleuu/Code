/* ============================================================================
 * TRIAL_BANK assembly — achievement-emotion FER study (Objective 1)
 * ----------------------------------------------------------------------------
 * Single composition point for the controller. Imports from PRE-GENERATED static
 * bank files in stimuli/ (not the generator modules). jsPsych loads these files
 * directly at runtime; no generation code runs in the browser.
 *
 * To regenerate a bank after stimulus changes or pilot calibration updates, run
 * the corresponding generator (node rotation_subbank.js, node reasoning_battery.js,
 * node iqa_subbank.js) and it overwrites the file in stimuli/. Once pilot
 * calibration values have been added to a bank file, do NOT regenerate — edit the
 * values directly in stimuli/*.js.
 *
 * CURRENTLY ACTIVE: IQA (concrete) + rotation (concrete, Ganis-Kievit images are
 * freely reusable). Reasoning is wired but commented until the key spot-check is
 * done and pilot calibration bands are set (see reasoning_bank_decisions_summary).
 * VAST-R and ETS are scaffolded; enable once items + keys are obtained.
 * ========================================================================== */

// Pre-generated static banks — load from stimuli/, NOT the generator modules.
import { IQA_SUBBANK, IQA_CALIBRATION }   from "./stimuli/iqa_bank.js";
import { ROT_SUBBANK, ROT_CALIBRATION }   from "./stimuli/rotation_bank.js";

// Reasoning — enable after key spot-check (Appendices B-E) +

// >>>>> pilot band-setting needed

// NB: REASONING_CALIBRATION is an ARRAY (one task per surface); spread it below.
import { REASONING_BANK, REASONING_CALIBRATION } from "./stimuli/reasoning_bank.js";

// Pending acquisition / licensing:
// import { VASTR_SUBBANK,  VASTR_CALIBRATION }  from "./stimuli/vastr_bank.js";    // needs VAST-R items + key
// import { ETS_SUBBANK,    ETS_CALIBRATION }     from "./stimuli/ets_bank.js";      // needs ETS Kit items + key

export const TRIAL_BANK = [
  ...IQA_SUBBANK,        // media + design (perceptual)        ~16 blocks
  ...ROT_SUBBANK,        // design + computing (visuospatial)  ~23 blocks  (gives modality variety so anti-stacking
                         //                                                 doesn't force neutral spacers)
  ...REASONING_BANK,  // computing + design + media (mixed) ~42 single-shot items — enable after spot-check + pilot
  // ...VASTR_SUBBANK,
  // ...ETS_SUBBANK,
];

// Familiarisation blocks (honest feedback, reserved stimuli) for the calibration phase.
// REASONING_CALIBRATION is an ARRAY of 4 tasks (one per surface) — spread it with ...
export const CALIBRATION_BANK = [
  IQA_CALIBRATION,       // single object — one IQA practice block
  ROT_CALIBRATION,       // single object — one 12-trial rotation practice block
  ...REASONING_CALIBRATION,  // array of 4 (NS, LS, FS, MR) — spread, don't push the array
  // VASTR_CALIBRATION,
  // ETS_CALIBRATION,
];
