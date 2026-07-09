/* ============================================================================
 * CF-1 sub-bank (ETS Hidden Figures Test) — achievement-emotion FER study
 * ----------------------------------------------------------------------------
 * ETS Kit of Factor-Referenced Cognitive Tests (1976 edition), CF-1 (Rev.).
 * Used under ETS licensing agreement; 160 copies licensed. Cite as:
 *   Ekstrom, R. B., French, J. W., Harman, H. H., & Dermen, D. (1976).
 *   Kit of Factor-Referenced Cognitive Tests. ETS.
 *
 * CONSTRUCT. Flexibility of Closure (field independence) — the ability to
 * disembed a simple target shape from a complex, visually cluttered pattern.
 * Five labelled key shapes (A–E) are shown; the participant identifies which
 * one is hidden in the pattern. Identity claim: seeing structure through
 * visual noise — a capacity that underpins composition analysis, pattern
 * recognition, and spatial reasoning. Tagged generalAbility: true because
 * field independence is domain-general; the relaxed value floor applies.
 *
 * UNIT. Single-item trials (unit: "single" — the value the controller's
 * roundOutcome()/rtBucket()/dispatch actually branch on; "single" is also what
 * the reasoning bank uses). Each of the 28 experimental items is a standalone
 * 90-second trial. scoreFn returns { correct, rtMs } — no block aggregate needed.
 * CF1_CALIBRATION is the one exception: it's authored as unit:"block" (4 items
 * looped in one trial, IQA/rotation-style) rather than 4 separate calibration
 * trials reasoning-bank-style — honestFeedback bypasses the outcome/pivot model
 * either way, so the block shape only affects how the practice items are looped.
 *
 * DIFFICULTY MODEL (PROVISIONAL — proxy only; pilot will re-tier).
 * Grid size (cols × rows) is the structural proxy:
 *   4×3 = 12 cells → easy  (all 4 reserved for calibration; none experimental)
 *   4×4 = 16 cells → mid   (16 experimental items)
 *   5×4 = 20 cells → hard  (9 experimental items)
 *   5×5 = 25 cells → hard  (3 experimental items; almost certainly hardest)
 * Easy-tier pride/relief comes from fast-correct responses on mid items
 * (self_speed path), not from a separate easy pool.
 *
 * EMOTION MODEL — HYBRID (differs from every other family in the bank).
 * Speed is the primary metric for CORRECT responses (finding it at all is
 * assumed; the quality signal is how fast). Accuracy is the primary metric
 * for INCORRECT responses (couldn't find it). This means:
 *   correct + fast → pride          (self_speed, high percentile)
 *   correct + slow → speed-shame    (self_speed, low percentile)  [hard only]
 *   incorrect + fast (rushed) → guilt   (effort attribution; peer_success)
 *   incorrect + slow (engaged) → shame  (ability attribution; self_score)
 * The controller's rtBucket() IS meaningful here (unlike P-3 where RT ≈ limitMs
 * for everyone). The 90-second cutoff is hidden; participants see no countdown.
 *
 * PILOT CANDIDATES (measure RT to calibrate speed bands + validate tiers).
 * Calibration anchor: items 3, 24  (4×3 grids; will be seen in familiarisation)
 * Mid proxy sample:   items 1, 17  (4×4; one per part)
 * Hard 5×4 sample:    items 5, 21  (5×4; one per part)
 * Hard 5×5 sample:    item  11     (5×5; likely hardest)
 * After pilot: regenerate this bank with real tiers via PILOT_RT_OVERRIDES below.
 *
 * ANSWER KEY. Source: CF-1 (Rev.) key image (ETS licensed materials).
 * Embedded at generation time; NOT exposed to participants.
 *
 * STIMULI (CORRECTED — the keys are NOT baked into the pattern image, despite
 * what an earlier draft of this comment claimed). CF1-1.png .. CF1-32.png are
 * the complex grid pattern ONLY (checked against the source scans). The five
 * labelled key shapes are five SEPARATE files, Key-A.png .. Key-E.png, shared
 * across every item — same native pixel scale as the grid images (300x202 vs.
 * ~105px/cell), so the task component must render both at native size (or apply
 * one identical scale factor to both) rather than independently CSS-fitting
 * each, or the key shapes stop being "exactly the same size" as their match in
 * the pattern — which is the whole test. The participant selects A / B / C / D / E.
 * ========================================================================== */

import { PROBES } from "./trial_schema.js";
import { buildMediaTask, REFERENT } from "./media_common.js";

/* ---- Answer key (source: CF-1 Rev. key, ETS licensed materials) ------------ */
const CF1_KEY = {
   1:'A',  2:'B',  3:'A',  4:'E',  5:'B',  6:'C',  7:'D',  8:'B',
   9:'E', 10:'D', 11:'A', 12:'C', 13:'D', 14:'E', 15:'C', 16:'E',
  17:'E', 18:'A', 19:'B', 20:'C', 21:'D', 22:'B', 23:'D', 24:'A',
  25:'C', 26:'C', 27:'B', 28:'E', 29:'A', 30:'E', 31:'E', 32:'D',
};

/* ---- Grid params (source: scanned_grid_params.csv) ------------------------- */
const CF1_GRID = {
   1:[4,4],  2:[5,4],  3:[4,3],  4:[4,3],  5:[5,4],  6:[5,4],  7:[4,4],  8:[4,4],
   9:[4,3], 10:[4,4], 11:[5,5], 12:[4,4], 13:[4,4], 14:[4,4], 15:[5,4], 16:[5,4],
  17:[4,4], 18:[4,4], 19:[4,4], 20:[4,4], 21:[5,4], 22:[4,4], 23:[4,4], 24:[4,3],
  25:[4,4], 26:[4,4], 27:[5,4], 28:[4,4], 29:[5,4], 30:[5,4], 31:[5,5], 32:[5,5],
};
const cells = (id) => CF1_GRID[id][0] * CF1_GRID[id][1];

/* ---- Tier proxy from grid size -------------------------------------------- *
 * PROVISIONAL — replace with observed per-item median RT after pilot.
 * Items 3,4,9,24 (12 cells) are calibration-only; no easy tier in experiment. */
const PROXY_TIER = (id) => cells(id) <= 16 ? "mid" : "hard";

/* ---- Pilot RT overrides (populate after pilot; triggers regeneration) ------- *
 * Format: { [id]: { tier: "easy"|"mid"|"hard", medianRtMs: N } }
 * Until populated, all tiers come from PROXY_TIER and calibration bands are
 * tier-level defaults. Leave empty to run on proxy tiers.                       */
export const PILOT_RT_OVERRIDES = {};

/* ---- Stimuli helper -------------------------------------------------------- */
const STIM_DIR = "stimuli/ets/CF1";
const CF1_RESPONSES = ["A", "B", "C", "D", "E"];
// Separate key-shape images, shared across every item — see STIMULI note above.
const CF1_KEY_FILES = CF1_RESPONSES.map((L) => `${STIM_DIR}/Key-${L}.png`);
const item = (id) => ({
  id, file: `${STIM_DIR}/CF1-${id}.png`,
  correctResp: CF1_KEY[id],
  gridCols: CF1_GRID[id][0], gridRows: CF1_GRID[id][1],  // kept for post-pilot re-tiering
  tierProxy: PROXY_TIER(id),
});

/* ---- Pool ------------------------------------------------------------------ */
const RESERVED  = new Set([3, 4, 9, 24]);                 // calibration only; all 4×3
const ALL_IDS   = Object.keys(CF1_KEY).map(Number);
const EXP_IDS   = ALL_IDS.filter(id => !RESERVED.has(id));// 28 experimental items

/* ---- Per-tier calibration (PLACEHOLDER — set from pilot) ------------------- *
 * medianRtMs: per-item (not block), used by rtBucket for rushed/engaged split.
 * limitMs:    invisible cutoff; no visible countdown.                           */
const TIER_CAL = {
  mid:  { realPSuccess: 0.80, medianRtMs: 35000, limitMs: 90000,
          plausiblePct: [20, 85], plausiblePctSpeed: [20, 85], passMark: null },
  hard: { realPSuccess: 0.60, medianRtMs: 55000, limitMs: 90000,
          plausiblePct: [2, 50],  plausiblePctSpeed: [2, 50],  passMark: null },
};

/* ---- CF-1 framing ---------------------------------------------------------- *
 * Hybrid emotion model: correct → self_speed; incorrect → self_score/peer_success.
 * generalAbility surface: same ability noun across domains; referent is domain-specific.
 * rtBucket() drives guilt (rushed/effort) vs shame (engaged/ability) on incorrect. */

const CF1_ABILITY = {
  media:    "visual-analytical ability",
  design:   "visual-analytical ability",
  computing: "systematic visual analysis",
};
const CF1_DOMAINS = ["media", "design", "computing"];

function cf1Framing(domain, tier) {
  const ab  = CF1_ABILITY[domain];
  const ref = REFERENT[domain];

  const primes = {
    mid: [
      { id: "p_abilityDiag", setsExpectancy: "none", attributionFrame: "ability",
        text: `This one is a clean read of ${ab}.` },
      { id: "p_expectLow",   setsExpectancy: "low",  attributionFrame: "none",
        text: `Plenty of ${ref} get tripped up on these — the pattern is designed to confuse.` },
      { id: "p_effortCue",   setsExpectancy: "none", attributionFrame: "effort",
        text: "A systematic scan of the pattern pays off more than a quick glance here." },
      { id: "p_expectHigh",  setsExpectancy: "high", attributionFrame: "none",
        text: `Your earlier rounds point to this being within reach.` },
    ],
    hard: [
      { id: "p_abilityDiag", setsExpectancy: "none", attributionFrame: "ability",
        text: `This set is diagnostic of core ${ab}.` },
      { id: "p_expectHigh",  setsExpectancy: "high", attributionFrame: "none",
        text: "Given your run so far, this should be findable." },
      { id: "p_expectLow",   setsExpectancy: "low",  attributionFrame: "none",
        text: `Most ${ref} spend their full time on this one — and some still miss it.` },
      { id: "p_effortCue",   setsExpectancy: "none", attributionFrame: "effort",
        text: "Work through the pattern systematically — the shape is there if you look carefully." },
    ],
  };

  const peerBandMid  = [72, 88];   // near realPSuccess 0.80 for mid
  const peerBandHard = [50, 70];   // near realPSuccess 0.60 for hard

  const feedback = {
    mid: {
      // correct variants — speed is what differentiates
      pride: [
        { id: "pride_speed", comparison: "individuating", attribution: "ability_effort", severity: 1,
          requiresOutcome: "correct", pctRef: "self_speed", referent: ref, pct: [75, 95],
          template: `\${pct}th percentile for speed — found it quickly, which is the real marker of ${ab}.` },
        { id: "pride_norm", comparison: "normative_shared", attribution: "ability_effort", severity: 1,
          requiresOutcome: "correct", pctRef: "self_speed", referent: ref, pct: [75, 95],
          template: `\${pct}th percentile for speed among ${ref} — a quick eye for structure.` },
      ],
      relief: [
        { id: "relief_speed", comparison: "normative_shared", attribution: "task_difficulty", severity: 0,
          requiresOutcome: "correct", requiresExpectancy: "low", pctRef: "self_speed", referent: ref,
          pct: [55, 78],
          template: `\${pct}th percentile for speed — found it faster than most ${ref} on a pattern people find confusing.` },
      ],
      // incorrect variants — accuracy is what's indexed
      shame: [
        { id: "shame_mild", comparison: "individuating", attribution: "ability", severity: 2,
          requiresOutcome: "incorrect", pctRef: "peer_success", referent: ref, pct: peerBandMid,
          template: `\${pct}% of ${ref} find this one — ${ab} may not be your strength.` },
      ],
      guilt: [
        { id: "guilt_effort", comparison: "individuating", attribution: "effort", severity: 1,
          requiresOutcome: "incorrect", pctRef: "peer_success", referent: ref, pct: peerBandMid,
          template: `\${pct}% of ${ref} get this one — you clearly could too; you just didn't scan carefully enough.` },
      ],
      disappointment: [
        { id: "disap_ind", comparison: "individuating", attribution: "none", severity: 1,
          requiresOutcome: "incorrect", requiresExpectancy: "high",
          pctRef: "peer_success", referent: ref, pct: peerBandMid,
          template: `\${pct}% of ${ref} find this one — below what your earlier rounds suggested.` },
      ],
    },

    hard: {
      // correct variants — speed shame possible even when correct
      pride: [
        { id: "pride_speed", comparison: "individuating", attribution: "ability_effort", severity: 1,
          requiresOutcome: "correct", pctRef: "self_speed", referent: ref, pct: [70, 92],
          template: `\${pct}th percentile for speed on a genuinely hard pattern — a strong marker of ${ab}.` },
      ],
      relief: [
        { id: "relief_speed", comparison: "normative_shared", attribution: "task_difficulty", severity: 0,
          requiresOutcome: "correct", requiresExpectancy: "low", pctRef: "self_speed", referent: ref,
          pct: [52, 78],
          template: `\${pct}th percentile for speed — found it when most ${ref} are still searching.` },
      ],
      // correct but slow — speed shame
      shame: [
        { id: "shame_mild", comparison: "individuating", attribution: "ability", severity: 2,
          requiresOutcome: "incorrect", pctRef: "peer_success", referent: ref, pct: peerBandHard,
          template: `\${pct}% of ${ref} find this one — ${ab} may not be where your strength lies.` },
        { id: "shame_hard", comparison: "individuating", attribution: "ability", severity: 3,
          requiresOutcome: "incorrect", pctRef: "peer_success", referent: ref, pct: peerBandHard,
          template: `\${pct}% of ${ref} get this — others at your level are well ahead; ${ab} may just not be your area.` },
        { id: "shame_speed", comparison: "individuating", attribution: "ability", severity: 2,
          requiresOutcome: "correct", pctRef: "self_speed", referent: ref, pct: [3, 18],
          template: `You found it — but at \${pct}th percentile for speed, you took much longer than most ${ref}. Quick visual analysis is what counts here.` },
      ],
      guilt: [
        { id: "guilt_effort", comparison: "individuating", attribution: "effort", severity: 1,
          requiresOutcome: "incorrect", pctRef: "peer_success", referent: ref, pct: peerBandHard,
          template: `\${pct}% of ${ref} find this one — you could too; you just didn't work through it systematically enough.` },
      ],
      disappointment: [
        { id: "disap_ind", comparison: "individuating", attribution: "none", severity: 1,
          requiresOutcome: "incorrect", requiresExpectancy: "high",
          pctRef: "peer_success", referent: ref, pct: peerBandHard,
          template: `\${pct}% of ${ref} get this one — short of what your earlier rounds suggested.` },
      ],
    },
  };

  return { primes: primes[tier], feedback: feedback[tier] };
}

/* ---- Task instructions ----------------------------------------------------- */
const CF1_INSTRUCTIONS =
  "Five shapes are labelled A–E at the top. Find which one is hidden in the pattern below — " +
  "work as quickly as you can.";

/* ---- Emit the bank --------------------------------------------------------- */
function emit() {
  return EXP_IDS.map(id => {
    const tier = PILOT_RT_OVERRIDES[id]?.tier ?? PROXY_TIER(id);
    const cal  = { ...TIER_CAL[tier] };
    if (PILOT_RT_OVERRIDES[id]?.medianRtMs) cal.medianRtMs = PILOT_RT_OVERRIDES[id].medianRtMs;
    return buildMediaTask({
      id:   `cf1_${String(id).padStart(2,"0")}`,
      name: `Hidden Figures (CF-1) — item ${id} (ETS)`,
      domains: CF1_DOMAINS, modality: "visuospatial", languageLoad: "low",
      difficultyTier: tier, unit: "single",
      generalAbility: true,
      instructions: CF1_INSTRUCTIONS, instructionsOnPrime: true,
      framingOverride: Object.fromEntries(CF1_DOMAINS.map(d => [d, cf1Framing(d, tier)])),
      abilityByDomain: CF1_ABILITY,
      stimulus: {
        component: "cf1HiddenFiguresItem",
        scoreFn:   "scoreCF1Item",              // returns { correct, total: 1, rtMs }
        limitMs:   cal.limitMs,                 // 90 s invisible cutoff
        responses: CF1_RESPONSES,               // A B C D E (radio labels)
        keys:      CF1_KEY_FILES,               // Key-A..E.png (rendered above the pattern)
        item: item(id),
      },
      calibration: cal,
    });
  });
}

export const CF1_SUBBANK = emit();   // 28 single-item trials (16 mid / 12 hard proxy)

/* ---- Calibration familiarisation ------------------------------------------ *
 * All four 4×3 items (IDs 3, 4, 9, 24): easiest by proxy, used for practice
 * with honest feedback. Teaches the paradigm (5 labelled shapes → find which
 * is in the pattern) before any framing fires. Also serves as the easy-anchor
 * for the 7-item pilot (see header): observe RT on items 3 and 24 to set the
 * bottom of the speed band.                                                      */
export const CF1_CALIBRATION = {
  id: "cf1_calib_fam",
  name: "Hidden Figures (CF-1) — familiarisation (practice, honest feedback) (ETS)",
  domains: CF1_DOMAINS, modality: "visuospatial", languageLoad: "low",
  difficultyTier: "easy", unit: "block", phase: "calibration", honestFeedback: true,
  instructions: CF1_INSTRUCTIONS, instructionsOnPrime: false,
  stimulus: {
    component: "cf1HiddenFiguresItem",
    scoreFn:   "scoreCF1Item",
    limitMs:   90000,
    responses: CF1_RESPONSES,
    keys:      CF1_KEY_FILES,
    block: { n: 4, items: [3, 4, 9, 24].map(item) },    // all four easy-proxy items
  },
  feedbackKind: "honest",
  timer:    { mode: "hidden" },
  response: { probes: PROBES, scale: { type: "likert", min: 1, max: 7 } },
};

/* ---- Generate the static bank file: run `node cf1_subbank.js` --------------
 * Writes cf1_bank.js. After piloting: fill PILOT_RT_OVERRIDES and re-run to
 * bake real tiers and median RTs into the generated bank.
 * WARNING: re-running OVERWRITES cf1_bank.js.                                   */
if (typeof process !== "undefined" && process.argv?.[1]) {
  (async () => {
    const { fileURLToPath } = await import("node:url");
    if (fileURLToPath(import.meta.url) !== process.argv[1]) return;
    const { writeFileSync } = await import("node:fs");
    const mid  = CF1_SUBBANK.filter(t => t.difficultyTier === "mid").length;
    const hard = CF1_SUBBANK.filter(t => t.difficultyTier === "hard").length;
    writeFileSync("cf1_bank.js",
      `export const CF1_SUBBANK = ${JSON.stringify(CF1_SUBBANK, null, 2)};\n\n` +
      `export const CF1_CALIBRATION = ${JSON.stringify(CF1_CALIBRATION, null, 2)};\n`);
    console.log(`cf1_bank.js written — ${CF1_SUBBANK.length} items (${mid} mid / ${hard} hard proxy) + calibration`);
    if (Object.keys(PILOT_RT_OVERRIDES).length === 0)
      console.log("  NOTE: running on proxy tiers — populate PILOT_RT_OVERRIDES after piloting and regenerate.");
  })();
}
