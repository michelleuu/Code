/* ============================================================================
 * Rotation sub-bank — achievement-emotion FER study (Objective 1)
 * ----------------------------------------------------------------------------
 * Pre-rendered Ganis & Kievit (2015) mental-rotation pairs. We do NOT assemble
 * images: each file is a finished pair (baseline left, target rotated by the
 * disparity on the right). Difficulty = disparity (+ mirror). baseOrient dropped.
 *
 * This module DETERMINISTICALLY emits fully-specified, single-shot blocks (the
 * array is fixed at load — no runtime drawing). Tune the tier specs + object
 * lists, then spread ROT_SUBBANK into TRIAL_BANK.
 *
 * Displayed metric = SPEED (rotation accuracy stays high at every angle, so a
 * fabricated low percentile is only credible when framed on speed, not errors).
 * Capture/response/onset handling is inherited from RIG in trial_schema.js.
 *
 * --- v3 alignment (stimulus/framing split + outcome model) ------------------
 *   - FRAMING SPLIT: primes + feedback are wrapped in a DOMAIN-keyed `framing`
 *     layer via framingForDomains(). Rotation framing is domain-INVARIANT (same
 *     text for design & computing), so one block carries one shared framing.
 *   - SINGLE-SHOT gates on `stimulusId` (= the block id here; each block is a
 *     distinct stimulus). `unit: "block"` distinguishes these from the single-item
 *     reasoning tasks.
 *   - pctRef = "self_speed" on EVERY variant: the displayed percentile is a SPEED
 *     rank. (credibleBand() checks it against calibration.plausiblePctSpeed ?? 
 *     plausiblePct; rotation's plausiblePct IS the speed band, so the fallback is
 *     correct.)
 *   - OUTCOME-AGNOSTIC, NO PIVOTS (deliberate, unlike reasoning_subbank). Rotation
 *     feedback is FULLY fabricated speed, decoupled from real performance: accuracy
 *     stays ~80-95%, the participant can't gauge their true speed rank, and we
 *     deliberately avoid accuracy framing. So variants carry NO requiresOutcome
 *     (they fire on any outcome) and there are no failure-landing variants: a "slow"
 *     shame already fires on any block. peer_success does not fit here (a "~90% got
 *     it right" norm wouldn't individuate, and is accuracy framing we avoid).
 * ========================================================================== */

import { PROBES, framingForDomains } from "./trial_schema.js";

const BLOCK_DOMAINS = ["design", "computing"];   // rotation routes to these (domain-invariant framing)

/* ---- File convention ---------------------------------------------------- *
 * VERIFY against your folder. Pre-rendered pairs, JPG (browser-native; .pct
 * is NOT renderable in a browser). Same-trial: `<objId>_<disparity>.jpg`.
 * Mirror/"different": `<objId>_<disparity>_R.jpg`.
 * Response keys (from the paper): b = "same", n = "different".              */
const EXT = "jpg";
const STIM_DIR = "stimuli/rot";
const stimFile = (objId, disparity, mirror) =>
  `${STIM_DIR}/${objId}_${disparity}${mirror ? "_R" : ""}.${EXT}`;
const sref = (objId, disparity, mirror = false) => ({
  objId, disparity, mirror,
  correctResp: mirror ? "different" : "same",   // -> key n / b
  file: stimFile(objId, disparity, mirror),
});

/* ---- Object pools (FILL from Table 2) ----------------------------------- *
 * objId is the Table-2 baseline number (1..48). Reserve a couple for the
 * familiarization block so practice never reuses experimental objects.
 * VALIDATED = the 12 bold objects with real RT data; prefer them for the
 * high-stakes hard/shame blocks. Leave [] to fall back to all objects.      */
const ALL_OBJIDS        = Array.from({ length: 48 }, (_, i) => i + 1);
const RESERVED_PRACTICE = [1, 13, 25, 37];               // 4 objects, excluded from experimental blocks; TODO confirm IDs
const VALIDATED_OBJIDS  = [1, 8, 19, 21, 23, 25, 29, 20, 31, 39, 43, 48]; /* 12 bold IDs from Table 2 */

const EXPERIMENTAL = ALL_OBJIDS.filter(id => !RESERVED_PRACTICE.includes(id));
const HARD_POOL    = VALIDATED_OBJIDS.length ? VALIDATED_OBJIDS : EXPERIMENTAL;
const SOFT_POOL    = EXPERIMENTAL.filter(id => !HARD_POOL.includes(id)).length
                       ? EXPERIMENTAL.filter(id => !HARD_POOL.includes(id))
                       : EXPERIMENTAL;

// deterministic distinct-object cursor over a pool (cycles if exhausted)
function cursor(pool) { let i = 0; return () => pool[i++ % pool.length]; }

/* ---- Shared per-tier framing (same text across blocks of a tier) -------- */
const PRIMES = {
  easy: [
    { id: "p_expectLow",  setsExpectancy: "low",  attributionFrame: "none",
      text: "Heads-up — this rotation set trips up most people." },                 // RELIEF
    { id: "p_abilityPos", setsExpectancy: "none", attributionFrame: "ability",
      text: "This one is a clean read of visual-spatial talent." },                 // PRIDE amplifier
  ],
  mid: [
    { id: "p_expectHigh", setsExpectancy: "high", attributionFrame: "none",
      text: "Your rotation scores so far point to this going well." },              // DISAPPOINTMENT
    { id: "p_expectLow",  setsExpectancy: "low",  attributionFrame: "none",
      text: "This rotation set is a step up — most people slow right down here." }, // RELIEF (enables relief_norm on mid)
    { id: "p_effortCue",  setsExpectancy: "none", attributionFrame: "effort",
      text: "These reward careful, step-by-step rotation rather than a snap call." },// GUILT amplifier
  ],
  hard: [
    { id: "p_abilityDiag", setsExpectancy: "none", attributionFrame: "ability",
      text: "This set is diagnostic of core spatial-reasoning ability." },          // SHAME amplifier
    { id: "p_expectHigh",  setsExpectancy: "high", attributionFrame: "none",
      text: "Given your run so far, this should be within reach." },                // DISAPPOINTMENT
  ],
};

const FEEDBACK = {
  easy: {
    pride: [
      { id: "pride_ind",  comparison: "individuating",   attribution: "ability_effort", severity: 1,
        pctRef: "self_speed", pct: [88, 99], template: "Your rotation speed was ${pct}th percentile — among the fastest we've seen, a strong marker of spatial ability, and you clearly worked it." },
      { id: "pride_norm", comparison: "normative_shared", attribution: "ability_effort", severity: 1,
        pctRef: "self_speed", pct: [88, 99], template: "${pct}th percentile on rotation speed — well above the group on a set most find slow going." },
    ],
    relief: [
      { id: "relief_norm", comparison: "normative_shared", attribution: "task_difficulty", severity: 0,
        requiresExpectancy: "low", pctRef: "self_speed", pct: [62, 85],
        template: "${pct}th percentile — faster than most on the rotation set people usually struggle with." },
    ],
  },
  mid: {
    pride: [
      { id: "pride_ind", comparison: "individuating", attribution: "ability_effort", severity: 1,
        pctRef: "self_speed", pct: [68, 80], template: "${pct}th percentile on rotation speed — a strong spatial result, and the care shows." },
    ],
    guilt: [
      { id: "guilt_effort", comparison: "individuating", attribution: "effort", severity: 1,
        pctRef: "self_speed", pct: [25, 42], template: "Bottom ${pct}% on speed — the spatial sense is there; you just didn't push through the harder rotations." },
    ],
    disappointment: [
      { id: "disap_ind", comparison: "individuating", attribution: "none", severity: 1,
        requiresExpectancy: "high", pctRef: "self_speed", pct: [25, 45],
        template: "${pct}th percentile on speed — below what your earlier rotation rounds pointed to." },
    ],
    relief: [
      { id: "relief_norm", comparison: "normative_shared", attribution: "task_difficulty", severity: 0,
        requiresExpectancy: "low", pctRef: "self_speed", pct: [60, 80],
        template: "${pct}th percentile — quicker than most on a set people find slow." },
    ],
  },
  hard: {
    shame: [
      { id: "shame_mild", comparison: "individuating", attribution: "ability", severity: 2,
        pctRef: "self_speed", pct: [3, 18], template: "Your rotation speed landed in the bottom ${pct}% — spatial processing may not be your strength." },
      { id: "shame_hard", comparison: "individuating", attribution: "ability", severity: 3,
        pctRef: "self_speed", pct: [2, 10], template: "Bottom ${pct}% on rotation speed again — others at your level are well ahead; this may not be where your talent lies." },
    ],
    guilt: [
      { id: "guilt_effort", comparison: "individuating", attribution: "effort", severity: 1,
        pctRef: "self_speed", pct: [4, 22], template: "Bottom ${pct}% on speed — you have the spatial sense; you just didn't push through the hard rotations methodically." },
    ],
    disappointment: [
      { id: "disap_ind", comparison: "individuating", attribution: "none", severity: 1,
        requiresExpectancy: "high", pctRef: "self_speed", pct: [8, 35],
        template: "${pct}th percentile on speed — short of what your earlier rounds suggested." },
    ],
  },
};

/* ---- Tier specs: block size, angle mix, mirror count, calibration ------- *
 * angleMix sums to n; nMirror of the n slots are mirror (assigned to the
 * highest-disparity slots, the hardest). Calibration values seeded from the
 * Ganis-Kievit per-angle norms + observed RTs (speed band in plausiblePct).  */
const TIERS = {
  easy: { n: 8, angleMix: { 0: 3, 50: 5 },        nMirror: 2,
          calibration: { realPSuccess: 0.93, realMedianRtMs: 2400, plausiblePct: [62, 99] }, count: 8 },
  mid:  { n: 8, angleMix: { 50: 2, 100: 6 },      nMirror: 4,
          calibration: { realPSuccess: 0.87, realMedianRtMs: 2950, plausiblePct: [25, 80] }, count: 5 },
  hard: { n: 6, angleMix: { 100: 1, 150: 5 },     nMirror: 5,
          calibration: { realPSuccess: 0.80, realMedianRtMs: 3100, plausiblePct: [2, 45] },  count: 10 },
};

function makeRefs(spec, nextObj) {
  const disps = [];
  for (const [d, c] of Object.entries(spec.angleMix)) for (let i = 0; i < c; i++) disps.push(Number(d));
  disps.sort((a, b) => b - a);                          // hardest first
  return disps.map((d, i) => sref(nextObj(), d, i < spec.nMirror));  // mirror on hardest slots
}

function buildBlock(tier, idx, nextObj) {
  const spec = TIERS[tier];
  const refs = makeRefs(spec, nextObj);
  const id = `rot_${tier}_${String(idx).padStart(2, "0")}`;
  return {
    id, stimulusId: id,                                      // single-shot gates on stimulusId
    name: `Mental rotation — ${tier} block ${idx} (Ganis & Kievit)`,
    domains: BLOCK_DOMAINS, modality: "visuospatial", languageLoad: "low",
    difficultyTier: tier, unit: "block",
    instructions: "Same shape or mirror image? Press B for same, N for mirror.",
    stimulus: {
      component: "mentalRotationBlock", scoreFn: "scoreRotationBlock", metric: "speed",
      block: { n: spec.n, stimulusRefs: refs },
    },
    calibration: {
      ...spec.calibration,                                   // plausiblePct here IS the speed band
      blockRtMs: spec.n * spec.calibration.realMedianRtMs,   // rough; refine from pilot
    },
    timer: { mode: "hidden" },                               // measured silently; speed shown at feedback
    // domain-invariant framing (same text for design & computing); speed-based, outcome-agnostic
    framing: framingForDomains(BLOCK_DOMAINS, { primes: PRIMES[tier], feedback: FEEDBACK[tier] }),
    response: { probes: PROBES, scale: { type: "likert", min: 1, max: 7 },
                cleanCore: { dominantMin: 5, othersMax: 3 } },
  };
}

/* ---- Emit the bank (deterministic) -------------------------------------- */
function emit() {
  const softCur = cursor(SOFT_POOL), hardCur = cursor(HARD_POOL);
  const out = [];
  for (const tier of ["easy", "mid", "hard"]) {
    const cur = tier === "hard" ? hardCur : softCur;
    for (let i = 1; i <= TIERS[tier].count; i++) out.push(buildBlock(tier, i, cur));
  }
  return out;
}

export const ROT_SUBBANK = emit();   // ~23 fixed blocks (8 easy / 5 mid / 10 hard)

/* ---- Calibration familiarization (rotation family) ---------------------- *
 * Paper's 12 practice trials with honest feedback, on RESERVED objects, easy
 * disparities. Bootstraps credibility + neutral baseline + success expectancy;
 * never consumes an experimental block. Consumed by the controller's
 * calibration phase (honestFeedback: true), not the induction pipeline.      */
export const ROT_CALIBRATION = {
  id: "rot_calib_fam",
  name: "Mental rotation — familiarization (practice, honest feedback)",
  domains: ["design", "computing"], modality: "visuospatial", languageLoad: "low",
  difficultyTier: "easy", unit: "block", phase: "calibration", honestFeedback: true,  // honest: no framing/pctRef
  instructions: "Same shape or mirror image? Press B for same, N for mirror.",
  stimulus: {
    component: "mentalRotationBlock", scoreFn: "scoreRotationBlock", metric: "speed",
    block: {
      n: 12,
      // 12 DISTINCT practice trials over the 4 reserved objects: gentle 0->50->100
      // ramp, both response types on every object, ending on an easy 'same' (a
      // guaranteed-feeling success -> seeds the high success expectancy). [obj, disp, mirror]
      stimulusRefs: [
        [1, 0, false],  [13, 0, true],  [25, 0, false],  [37, 0, true],
        [1, 50, true],  [13, 50, false],[25, 50, true],  [37, 50, false],
        [1, 0, true],   [13, 50, true], [25, 50, false], [37, 0, false],   // last = easy same -> success
      ].map(([o, d, m]) => sref(o, d, m)),
    },
  },
  feedbackKind: "honest",                                  // real correct/incorrect (+ honest speed), no fabrication
  timer: { mode: "hidden" },
  response: { probes: PROBES, scale: { type: "likert", min: 1, max: 7 } },
};

/* ============================================================================
 * Bank-writer: run `node rotation_subbank.js` to produce rotation_bank.js.
 * Guarded so importing this module (browser or via trial_bank.js) never writes
 * a file or loads Node-only dependencies.
 * WARNING: re-running overwrites rotation_bank.js — once you start adding pilot
 * calibration values to the generated bank, update them there directly rather
 * than regenerating.
 * ========================================================================== */
if (typeof process !== "undefined" && process.argv?.[1]) {
  (async () => {
    const { fileURLToPath } = await import("node:url");
    if (fileURLToPath(import.meta.url) !== process.argv[1]) return;  // imported, not run directly
    const { writeFileSync } = await import("node:fs");
    const out =
      `/* AUTO-GENERATED by rotation_subbank.js — do not edit by hand.\n` +
      ` * Re-running overwrites this file. Once pilot calibration values are added,\n` +
      ` * update them here directly rather than regenerating.\n` +
      ` * Stimuli: Ganis & Kievit (2015) JPG pairs; cite DOI 10.5334/jopd.ai. */\n\n` +
      `export const ROT_SUBBANK = ${JSON.stringify(ROT_SUBBANK, null, 2)};\n\n` +
      `export const ROT_CALIBRATION = ${JSON.stringify(ROT_CALIBRATION, null, 2)};\n`;
    writeFileSync("rotation_bank.js", out);
    const byTier = {};
    for (const t of ROT_SUBBANK) byTier[t.difficultyTier] = (byTier[t.difficultyTier] || 0) + 1;
    console.log(`rotation_bank.js written — ${ROT_SUBBANK.length} blocks (${Object.entries(byTier).map(([k,v])=>v+' '+k).join(' / ')}) + calibration`);
  })();
}
