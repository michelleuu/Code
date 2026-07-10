/* ============================================================================
 * P-3 sub-bank (ETS Identical Pictures Test) — achievement-emotion FER study
 * ----------------------------------------------------------------------------
 * ETS Kit of Factor-Referenced Cognitive Tests (1976 edition), P-3. Used under
 * ETS licensing agreement; 160 copies licensed. Cite as:
 *   Ekstrom, R. B., French, J. W., Harman, H. H., & Dermen, D. (1976).
 *   Kit of Factor-Referenced Cognitive Tests. ETS.
 *
 * CONSTRUCT. Perceptual speed — the ability to quickly identify matching figures.
 * Each item shows a target figure and five numbered alternatives (1–5); one
 * matches exactly. Identity claim for media students: the speed with which an
 * image "jumps to the eye" is a marker of visual fluency that experienced media
 * and design practitioners develop.
 *
 * PARADIGM. All N items shown simultaneously (like the paper test, preserving the
 * scanning construct). An invisible time limit auto-advances the block. Score =
 * items correctly identified / N. Since the window is fixed, score IS the speed
 * proxy: more matched in the same time = faster eye. No visible countdown.
 *
 * DIFFICULTY MODEL. No item-level difficulty gradient (all items are equally easy
 * given enough time). Difficulty is controlled by N (block size):
 *   easy  → 4 items  → most participants complete all of them (pride/relief)
 *   mid   → 6 items  → most complete some, not all (moderate emotions)
 *   hard  → 8 items  → most cannot finish (score naturally low → shame/guilt)
 * The time limit (limitMs) is fixed across tiers; only N varies.
 *
 * RT NOTE. Because limitMs is fixed, every participant's block RT is ≈ limitMs.
 * The controller's rtBucket() will always classify as "engaged" (never rushed),
 * so failure-outcome pivots always land on the ability (shame) branch. This is
 * correct for a genuinely timed task: getting a low score is not "rushing."
 *
 * SCORING (UPDATED — team decision overrides the original build note below).
 * scoreFn returns { correct, incorrect, total: N, netScore, rtMs: limitMs, passed }.
 * netScore = correct - incorrect (a flat rights-minus-wrongs; unanswered items
 * count toward neither term — no guessing penalty for rows never reached).
 * passed = netScore >= calibration.passMark, where passMark is now a raw netScore
 * threshold, NOT a proportion (see TIERS below). Original build note argued a
 * guessing correction was unnecessary here (fixed time limit means no opportunity
 * to randomly guess on unread items) — still true, but the team wants the
 * correct-minus-incorrect framing anyway, for consistency with the paper
 * instrument's own scoring line ("correct minus a fraction of incorrect").
 *
 * ANSWER KEY. Source: KIT-P3-key.pdf (ETS licensed materials). Format: item–answer
 * (1–5). Key is embedded here as it is needed at generation time; it is NOT exposed
 * to participants or stored separately from the pre-generated bank file (p3_bank.js).
 *
 * POOL. 96 items total (2 parts × 2 pages × 2 columns × 12 items).
 * Items 1–4 reserved for calibration familiarisation.
 * Items 5–96 (92 items) form the experimental pool:
 *   5 easy × 4 = 20 items
 *   4 mid  × 6 = 24 items
 *   6 hard × 8 = 48 items
 *   Total  = 92 items  (+ 4 reserved = 96 exactly)
 *
 * STIMULI. stimuli/ets/P3/P3-1.png .. P3-96.png (one image per item showing
 * the target on the left and five numbered alternatives on the right).
 * ========================================================================== */

import { PROBES } from "./trial_schema.js";
import { buildMediaTask, REFERENT } from "./media_common.js";

/* ---- Answer key (source: KIT-P3-key.pdf, ETS licensed materials) ----------- */
const P3_KEY = {
  1: 3,
  2: 5,
  3: 2,
  4: 1,
  5: 4,
  6: 3,
  7: 4,
  8: 5,
  9: 4,
  10: 5,
  11: 1,
  12: 4,
  13: 4,
  14: 4,
  15: 5,
  16: 3,
  17: 4,
  18: 3,
  19: 2,
  20: 1,
  21: 4,
  22: 4,
  23: 1,
  24: 1,
  25: 5,
  26: 4,
  27: 4,
  28: 4,
  29: 4,
  30: 4,
  31: 2,
  32: 2,
  33: 4,
  34: 4,
  35: 3,
  36: 3,
  37: 4,
  38: 3,
  39: 1,
  40: 4,
  41: 3,
  42: 1,
  43: 2,
  44: 4,
  45: 1,
  46: 3,
  47: 4,
  48: 5,
  49: 4,
  50: 2,
  51: 3,
  52: 5,
  53: 4,
  54: 1,
  55: 4,
  56: 2,
  57: 5,
  58: 4,
  59: 1,
  60: 1,
  61: 3,
  62: 5,
  63: 3,
  64: 2,
  65: 5,
  66: 1,
  67: 3,
  68: 3,
  69: 1,
  70: 4,
  71: 2,
  72: 5,
  73: 3,
  74: 4,
  75: 1,
  76: 2,
  77: 1,
  78: 3,
  79: 3,
  80: 3,
  81: 1,
  82: 5,
  83: 4,
  84: 3,
  85: 3,
  86: 1,
  87: 3,
  88: 2,
  89: 1,
  90: 4,
  91: 2,
  92: 5,
  93: 3,
  94: 2,
  95: 5,
  96: 2,
};

const STIM_DIR = "stimuli/ets/P3";
const RESERVED = [1, 2, 3, 4]; // calibration only
const ALL_IDS = Object.keys(P3_KEY).map(Number);
const EXPERIMENTAL = ALL_IDS.filter((id) => !RESERVED.includes(id)); // 92 items

const item = (id) => ({
  id,
  file: `${STIM_DIR}/P3-${id}.png`,
  correctResp: P3_KEY[id],
});

// deterministic sequential cursor through the experimental pool
function cursor() {
  let i = 0;
  return (n) => EXPERIMENTAL.slice(i, (i += n)).map(item);
}

/* ---- P-3 specific framing -------------------------------------------------- *
 * Standard buildMediaFraming templates don't fit a speed task (e.g. "these reward
 * a careful look" is wrong for scanning-speed). Custom framing is written per
 * domain and per tier, using the same variant structure the controller expects.
 * Templates keep "${pct}" as a runtime placeholder (filled by resolveOutcomeFeedback).
 * Uses framingOverride in buildMediaTask to bypass buildMediaFraming.              */

const P3_ABILITY = {
  media: "visual recognition speed",
  design: "perceptual fluency",
};

function p3Framing(domain, tier) {
  const ab = P3_ABILITY[domain];
  const ref = REFERENT[domain];

  const primes = {
    easy: [
      {
        id: "p_abilityDiag",
        setsExpectancy: "none",
        attributionFrame: "ability",
        text: `This set is a clean read of ${ab} — a real marker of the quick eye.`,
      },
      {
        id: "p_expectLow",
        setsExpectancy: "low",
        attributionFrame: "none",
        text: `Most ${ref} miss more of these than they expect.`,
      },
      {
        id: "p_effortCue",
        setsExpectancy: "none",
        attributionFrame: "effort",
        text: "Trust your first read — hesitation costs you more than a wrong answer here.",
      },
    ],
    mid: [
      {
        id: "p_expectHigh",
        setsExpectancy: "high",
        attributionFrame: "none",
        text: `Your earlier matching rounds suggest this should go well.`,
      },
      {
        id: "p_expectLow",
        setsExpectancy: "low",
        attributionFrame: "none",
        text: `This is a step up in pace — most ${ref} start missing here.`,
      },
      {
        id: "p_effortCue",
        setsExpectancy: "none",
        attributionFrame: "effort",
        text: "Scanning row by row rather than jumping around pays off here.",
      },
      {
        id: "p_abilityDiag",
        setsExpectancy: "none",
        attributionFrame: "ability",
        text: `This set is a fair read of ${ab}.`,
      },
    ],
    hard: [
      {
        id: "p_abilityDiag",
        setsExpectancy: "none",
        attributionFrame: "ability",
        text: `This set is diagnostic of core ${ab}.`,
      },
      {
        id: "p_expectHigh",
        setsExpectancy: "high",
        attributionFrame: "none",
        text: "Given your run so far, this should be within reach.",
      },
      {
        id: "p_expectLow",
        setsExpectancy: "low",
        attributionFrame: "none",
        text: `Heads-up — most ${ref} don't get through all of these.`,
      },
      {
        id: "p_effortCue",
        setsExpectancy: "none",
        attributionFrame: "effort",
        text: "You won't finish them all — lock in the ones that jump out immediately.",
      },
    ],
  };

  const feedback = {
    easy: {
      pride: [
        {
          id: "pride_ind",
          comparison: "individuating",
          attribution: "ability_effort",
          severity: 1,
          requiresOutcome: "correct",
          pctRef: "self_score",
          referent: ref,
          pct: [85, 98],
          template: `\${pct}th percentile on visual matching speed — fast and accurate, a strong marker of ${ab}.`,
        },
        {
          id: "pride_norm",
          comparison: "normative_shared",
          attribution: "ability_effort",
          severity: 1,
          requiresOutcome: "correct",
          pctRef: "self_score",
          referent: ref,
          pct: [85, 98],
          template: `\${pct}th percentile — well above most ${ref} on a set people find fast-paced.`,
        },
      ],
      relief: [
        {
          id: "relief_norm",
          comparison: "normative_shared",
          attribution: "task_difficulty",
          severity: 0,
          requiresOutcome: "correct",
          requiresExpectancy: "low",
          pctRef: "self_score",
          referent: ref,
          pct: [62, 82],
          template: `\${pct}th percentile — faster than most ${ref} on a set people usually find quick-fire.`,
        },
      ],
      // failure-pivot landings (engaged → shame; rushed → guilt)
      shame: [
        {
          id: "shame_mild",
          comparison: "individuating",
          attribution: "ability",
          severity: 2,
          requiresOutcome: "incorrect",
          pctRef: "peer_success",
          referent: ref,
          pct: [82, 92],
          template: `\${pct}% of ${ref} matched more than you — quick visual matching may not be your strength.`,
        },
      ],
      guilt: [
        {
          id: "guilt_norm",
          comparison: "individuating",
          attribution: "effort",
          severity: 1,
          requiresOutcome: "incorrect",
          pctRef: "peer_success",
          referent: ref,
          pct: [82, 92],
          template: `\${pct}% of ${ref} matched more — you have the eye; you were just moving too deliberately.`,
        },
      ],
    },

    mid: {
      pride: [
        {
          id: "pride_ind",
          comparison: "individuating",
          attribution: "ability_effort",
          severity: 1,
          requiresOutcome: "correct",
          pctRef: "self_score",
          referent: ref,
          pct: [68, 82],
          template: `\${pct}th percentile on matching speed — solid ${ab} at this pace.`,
        },
      ],
      guilt: [
        {
          id: "guilt_effort",
          comparison: "individuating",
          attribution: "effort",
          severity: 1,
          requiresOutcome: "incorrect",
          pctRef: "self_score",
          referent: ref,
          pct: [25, 45],
          template: `Bottom \${pct}% — the visual fluency is there; you just didn't scan quickly enough.`,
        },
      ],
      disappointment: [
        {
          id: "disap_ind",
          comparison: "individuating",
          attribution: "none",
          severity: 1,
          requiresOutcome: "incorrect",
          requiresExpectancy: "high",
          pctRef: "self_score",
          referent: ref,
          pct: [25, 46],
          template: `\${pct}th percentile — below what your earlier matching rounds suggested.`,
        },
      ],
      relief: [
        {
          id: "relief_self",
          comparison: "normative_shared",
          attribution: "task_difficulty",
          severity: 0,
          requiresOutcome: "correct",
          requiresExpectancy: "low",
          pctRef: "self_score",
          referent: ref,
          pct: [55, 78],
          template: `\${pct}th percentile — faster than most ${ref} at this pace.`,
        },
      ],
      shame: [
        {
          id: "shame_mild",
          comparison: "individuating",
          attribution: "ability",
          severity: 2,
          requiresOutcome: "incorrect",
          pctRef: "peer_success",
          referent: ref,
          pct: [62, 78],
          template: `\${pct}% of ${ref} matched more — ${ab} may not be your strongest suit.`,
        },
      ],
    },

    hard: {
      shame: [
        {
          id: "shame_mild",
          comparison: "individuating",
          attribution: "ability",
          severity: 2,
          requiresOutcome: "incorrect",
          pctRef: "self_score",
          referent: ref,
          pct: [3, 18],
          template: `Bottom \${pct}% on visual matching speed — quick visual recognition may not be your strength.`,
        },
        {
          id: "shame_hard",
          comparison: "individuating",
          attribution: "ability",
          severity: 3,
          requiresOutcome: "incorrect",
          pctRef: "self_score",
          referent: ref,
          pct: [2, 10],
          template: `Bottom \${pct}% again — others at your level are well ahead; ${ab} may just not be your area.`,
        },
      ],
      guilt: [
        {
          id: "guilt_effort",
          comparison: "individuating",
          attribution: "effort",
          severity: 1,
          requiresOutcome: "incorrect",
          pctRef: "self_score",
          referent: ref,
          pct: [4, 22],
          template: `Bottom \${pct}% — you have the eye; you just didn't commit fast enough to the ones you knew.`,
        },
      ],
      disappointment: [
        {
          id: "disap_ind",
          comparison: "individuating",
          attribution: "none",
          severity: 1,
          requiresOutcome: "incorrect",
          requiresExpectancy: "high",
          pctRef: "self_score",
          referent: ref,
          pct: [12, 42],
          template: `\${pct}th percentile — short of what your earlier rounds suggested.`,
        },
      ],
      relief: [
        {
          id: "relief_self",
          comparison: "normative_shared",
          attribution: "task_difficulty",
          severity: 0,
          requiresOutcome: "correct",
          requiresExpectancy: "low",
          pctRef: "self_score",
          referent: ref,
          pct: [55, 80],
          template: `\${pct}th percentile — you got through more than most ${ref} on this one.`,
        },
      ],
    },
  };

  return { primes: primes[tier], feedback: feedback[tier] };
}

/* ---- Block plan ------------------------------------------------------------ *
 * passMark is now a raw netScore (correct - incorrect) threshold, NOT a
 * proportion — PLACEHOLDER, set from pilot like everything else here. */
const TIERS = {
  easy: {
    count: 5,
    n: 4,
    calibration: {
      realPSuccess: 0.9,
      limitMs: 7000,
      blockRtMs: 7000,
      plausiblePct: [65, 99],
      plausiblePctSpeed: [65, 99],
      passMark: 3,
    },
  },
  mid: {
    count: 4,
    n: 6,
    calibration: {
      realPSuccess: 0.7,
      limitMs: 7000,
      blockRtMs: 7000,
      plausiblePct: [25, 80],
      plausiblePctSpeed: [25, 78],
      passMark: 3,
    },
  },
  hard: {
    count: 6,
    n: 8,
    calibration: {
      realPSuccess: 0.55,
      limitMs: 7000,
      blockRtMs: 7000,
      plausiblePct: [2, 45],
      plausiblePctSpeed: [2, 42],
      passMark: 2,
    },
  },
};

const P3_DOMAINS = ["media", "design"];
const P3_INSTRUCTIONS =
  "Find the matching image in each row — work fast, accuracy counts.";
// instructionsOnPrime: true — reminder shown on the prime page so participants
// are ready for the time-limited block before it starts.

/* ---- Emit the bank (deterministic) ---------------------------------------- */
function emit() {
  const nextItems = cursor();
  const out = [];
  for (const tier of ["easy", "mid", "hard"]) {
    const { count, n, calibration } = TIERS[tier];
    for (let i = 1; i <= count; i++) {
      const id = `p3_${tier}_${pad2(i)}`;
      const items = nextItems(n);
      out.push(
        buildMediaTask({
          id,
          name: `Identical Pictures (P-3) — ${tier} block ${i} (ETS)`,
          domains: P3_DOMAINS,
          modality: "perceptual",
          languageLoad: "low",
          difficultyTier: tier,
          unit: "block",
          instructions: P3_INSTRUCTIONS,
          instructionsOnPrime: true,
          // custom speed-appropriate framing; bypasses buildMediaFraming
          framingOverride: Object.fromEntries(
            P3_DOMAINS.map((d) => [d, p3Framing(d, tier)]),
          ),
          abilityByDomain: P3_ABILITY, // kept for reference; not used when framingOverride supplied
          stimulus: {
            component: "p3IdenticalPicturesBlock",
            scoreFn: "scoreP3Block", // returns { correct, incorrect, total, netScore, rtMs: limitMs, passed }
            limitMs: calibration.limitMs, // invisible auto-cutoff; no visible countdown
            block: { n, items },
          },
          calibration,
        }),
      );
    }
  }
  return out;
}

export const P3_SUBBANK = emit(); // 15 blocks (5 easy / 4 mid / 6 hard)

/* ---- Calibration familiarisation ------------------------------------------ *
 * 4 reserved items (IDs 1–4) at easy pace (4 items, 7 s), honest feedback.
 * Teaches the task mechanic (simultaneous display, auto-advance) and the
 * instruction wording before the experimental blocks start.                      */
export const P3_CALIBRATION = {
  id: "p3_calib_fam",
  name: "Identical Pictures (P-3) — familiarisation (practice, honest feedback) (ETS)",
  domains: P3_DOMAINS,
  modality: "perceptual",
  languageLoad: "low",
  difficultyTier: "easy",
  unit: "block",
  phase: "calibration",
  honestFeedback: true,
  instructions: P3_INSTRUCTIONS,
  instructionsOnPrime: true,
  stimulus: {
    component: "p3IdenticalPicturesBlock",
    scoreFn: "scoreP3Block",
    limitMs: 7000,
    block: { n: 4, items: RESERVED.map(item) },
  },
  feedbackKind: "honest",
  timer: { mode: "hidden" },
  response: { probes: PROBES, scale: { type: "likert", min: 1, max: 7 } },
};

/* ---- Generate the static bank file: run `node p3_subbank.js` ---------------
 * Writes p3_bank.js. GUARDED to direct execution — importing this module never
 * writes a file or touches Node-only dependencies.
 * WARNING: re-running OVERWRITES p3_bank.js — once pilot/runtime values are
 * added to the generated bank, do not regenerate (same rule as iqa_bank.js).    */
if (typeof process !== "undefined" && process.argv?.[1]) {
  (async () => {
    const { fileURLToPath } = await import("node:url");
    if (fileURLToPath(import.meta.url) !== process.argv[1]) return;
    const { writeFileSync } = await import("node:fs");
    writeFileSync(
      "p3_bank.js",
      `export const P3_SUBBANK = ${JSON.stringify(P3_SUBBANK, null, 2)};\n\n` +
        `export const P3_CALIBRATION = ${JSON.stringify(P3_CALIBRATION, null, 2)};\n`,
    );
    console.log(
      `p3_bank.js written — ${P3_SUBBANK.length} blocks + calibration` +
        ` (re-running overwrites it)`,
    );
  })();
}

/* ---- utils ---------------------------------------------------------------- */
function pad2(x) {
  return String(x).padStart(2, "0");
}
