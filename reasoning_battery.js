/* ============================================================================
 * Reasoning BATTERY (generated from real MITRE/ETS items) — Objective 1, v3
 * ----------------------------------------------------------------------------
 * Consumes mitre_reasoning_items.js (parsed from the public guide, DTIC AD1107949):
 *   NS (70) + LS (60): REAL stems, keys, IRT b — constructed-response, fully runnable.
 *   FS (60): real direction-code stems (N..NW) + key + b; rendered as rotated SVG arrows
 *            (see fs_jspsych.js), 8-option choice — runnable, no font. All four surfaces runnable.
 *   MR (60): real keys (A-H) + b; image stimuli/mitre/mr/<label>.png — runnable, typed letter.
 *
 * Emits a BALANCED single-shot bank (~42 tasks) via SELECT caps per surface x tier;
 * the remaining real items stay in MITRE_ITEMS as a reserve you can swap in.
 * Per-DOMAIN framing, outcome-contingent feedback, and the success/failure pivots
 * are the same v3 model as the rest of the bank.
 *
 * Tiers are within-surface b-tertiles (RELATIVE placeholders). Calibration bands
 * (realPSuccess / medianRtMs / plausiblePct[Speed]) are tier-default placeholders —
 * set them per item from your pilot; that is what makes the credibility gate real.
 * Keys live here because scoring needs them: keep this in your secured system
 * (Appendix A) and never expose keys to participants.
 *
 * PRE-GENERATION: run `node reasoning_battery.js` to write reasoning_bank.js —
 * a static export the browser loads at runtime. The generator guard at the bottom
 * fires only on direct execution; importing this module never writes a file.
 * WARNING: re-running overwrites reasoning_bank.js — once you start adding pilot
 * calibration values to the generated bank, don't regenerate (or regenerate to a
 * scratch name and merge).
 * ========================================================================== */

import { PROBES } from "./trial_schema.js";
import { MITRE_ITEMS } from "./mitre_reasoning_items.js";

const REFERENT = {
  design:    "people who identified as designers",
  media:     "students in media",
  computing: "students on the computing track",
};
const ABILITY = {
  NS: { computing: "logical sequencing",             design: "the rule-finding side of design reasoning" },
  LS: { computing: "step-by-step rule-finding",      design: "the systematic rule-finding behind good design" },
  FS: { design: "visual-pattern sense",              media: "visual sequencing" },
  MR: { design: "spotting the underlying structure", media: "visual-structure reasoning", computing: "abstract pattern reasoning" },
};
const SURFACES = {
  NS: { label: "Number series",   modality: "numeric",      domains: ["computing", "design"],
        component: "numberSeries", scoreFn: "scoreNumberInput", response: "input",  content: "series",
        instructions: "What number comes next? Type your answer." },
  LS: { label: "Letter series",   modality: "logic",        domains: ["computing", "design"],
        component: "letterSeries", scoreFn: "scoreLetterInput", response: "input",  content: "series",
        instructions: "What letter comes next? Type your answer.",
        note: "Latin-alphabet fluency assumed (mild load, far below anagrams)" },
  FS: { label: "Figure series",   modality: "perceptual",   domains: ["design", "media"],
        component: "figureSeries", scoreFn: "scoreChoice",      response: "choice", optionCount: 8,
        answerSet: "N|NE|E|SE|S|SW|W|NW", content: "series",
        instructions: "Which arrow comes next? Click your answer." },
  MR: { label: "Matrix reasoning", modality: "visuospatial", domains: ["design", "media", "computing"],
        component: "matrixReasoning", scoreFn: "scoreLetterInput", response: "input", answerSet: "A-H",
        content: "image", generalAbility: true,
        instructions: "Which option (A\u2013H) best completes the pattern? Type the letter." },
};

const TIER_CALIB = {
  easy: { realPSuccess: 0.85, medianRtMs: 35000, plausiblePct: [60, 99], plausiblePctSpeed: [60, 99] },
  mid:  { realPSuccess: 0.58, medianRtMs: 55000, plausiblePct: [25, 80], plausiblePctSpeed: [25, 78] },
  hard: { realPSuccess: 0.22, medianRtMs: 85000, plausiblePct: [2, 45],  plausiblePctSpeed: [2, 42] },
};
const peerBand = (tier) => { const rp = Math.round(TIER_CALIB[tier].realPSuccess * 100);
  return [Math.max(2, rp - 9), Math.min(99, rp + 7)]; };

const pAbility = (text) => ({ id: "p_abilityDiag", setsExpectancy: "none", attributionFrame: "ability", text });
const pLow     = (text) => ({ id: "p_expectLow",   setsExpectancy: "low",  attributionFrame: "none",    text });
const pHigh    = (text) => ({ id: "p_expectHigh",  setsExpectancy: "high", attributionFrame: "none",    text });
const pEffort  = (text) => ({ id: "p_effortCue",   setsExpectancy: "none", attributionFrame: "effort",  text });

const fbShameScore = (ref, ab, { pct = [3, 18], severity = 2, id = "shame_mild" } = {}) => ({
  id, comparison: "individuating", attribution: "ability", severity,
  requiresOutcome: "incorrect", pctRef: "self_score", referent: ref, pct,
  template: `You came out in the bottom \${pct}% — ${ab} may not be where your strength lies.` });
const fbShameHard = (ref, ab, { pct = [2, 10] } = {}) => ({
  id: "shame_hard", comparison: "individuating", attribution: "ability", severity: 3,
  requiresOutcome: "incorrect", pctRef: "self_score", referent: ref, pct,
  template: `Bottom \${pct}% again — others at your level are well ahead; ${ab} may just not be your area.` });
const fbShameSpeed = (ref, ab, { pct = [4, 20], severity = 2, id = "shame_speed" } = {}) => ({
  id, comparison: "individuating", attribution: "ability", severity,
  requiresOutcome: "correct", pctRef: "self_speed", referent: ref, pct,
  template: `You got it — but among ${ref} who solved it you were in the bottom \${pct}% for speed, and quick ${ab} is what counts here.` });
const fbShameNorm = (ref, { pct = [62, 78], severity = 2, id = "shame_mild" } = {}) => ({
  id, comparison: "individuating", attribution: "ability", severity,
  requiresOutcome: "incorrect", pctRef: "peer_success", referent: ref, pct,
  template: `\${pct}% of ${ref} got this one — you didn't.` });
const fbGuilt = (ref, ab, { pct = [8, 28] } = {}) => ({
  id: "guilt_effort", comparison: "individuating", attribution: "effort", severity: 1,
  requiresOutcome: "incorrect", pctRef: "self_score", referent: ref, pct,
  template: `Bottom \${pct}% — you clearly have the head for ${ab}; you just didn't work it through methodically.` });
const fbGuiltNorm = (ref, { pct = [80, 95], id = "guilt_norm" } = {}) => ({
  id, comparison: "individuating", attribution: "effort", severity: 1,
  requiresOutcome: "incorrect", pctRef: "peer_success", referent: ref, pct,
  template: `\${pct}% get this one — you clearly have it, you just went too fast.` });
const fbDisap = (ref, { pct = [12, 42] } = {}) => ({
  id: "disap_ind", comparison: "individuating", attribution: "none", severity: 1,
  requiresOutcome: "incorrect", requiresExpectancy: "high", pctRef: "self_score", referent: ref, pct,
  template: `\${pct}th percentile — short of what your earlier rounds pointed to.` });
const fbPrideScore = (ref, ab, { pct = [85, 98], id = "pride_ind" } = {}) => ({
  id, comparison: "individuating", attribution: "ability_effort", severity: 1,
  requiresOutcome: "correct", pctRef: "self_score", referent: ref, pct,
  template: `\${pct}th percentile — a real marker of ${ab}, and the care shows.` });
const fbPrideSpeed = (ref, ab, { pct = [85, 98] } = {}) => ({
  id: "pride_speed", comparison: "individuating", attribution: "ability_effort", severity: 1,
  requiresOutcome: "correct", pctRef: "self_speed", referent: ref, pct,
  template: `Top \${pct}th percentile for speed — fast, accurate ${ab}, the strongest kind.` });
const fbReliefSelf = (ref, { pct = [60, 82] } = {}) => ({
  id: "relief_self", comparison: "normative_shared", attribution: "task_difficulty", severity: 0,
  requiresOutcome: "correct", requiresExpectancy: "low", pctRef: "self_score", referent: ref, pct,
  template: `\${pct}th percentile — you cleared the one ${ref} usually find slow going.` });
const fbReliefNorm = (ref, { pct } = {}) => ({
  id: "relief_norm", comparison: "normative_shared", attribution: "task_difficulty", severity: 0,
  requiresOutcome: "correct", requiresExpectancy: "low", pctRef: "peer_success", referent: ref, pct,
  template: `Only \${pct}% of ${ref} solve this one — you're one of them.` });

const RESPONSE = { probes: PROBES, scale: { type: "likert", min: 1, max: 7 },
                   cleanCore: { dominantMin: 5, othersMax: 3 } };

function buildTierFraming(surface, domain, tier) {
  const ref = REFERENT[domain], ab = ABILITY[surface][domain], pb = peerBand(tier);
  if (tier === "easy") return {
    primes: [ pAbility(`This one is a clean read of ${ab}.`),
              pLow(`Heads-up — plenty of ${ref} slip on the last step here.`),
              pEffort(`These reward a careful read rather than a snap answer.`) ],
    feedback: {
      pride:  [ fbPrideScore(ref, ab), fbPrideSpeed(ref, ab) ],
      relief: [ fbReliefSelf(ref, { pct: [62, 85] }) ],
      shame:  [ fbShameNorm(ref, { pct: pb }) ],
      guilt:  [ fbGuiltNorm(ref, { pct: pb }) ],
    } };
  if (tier === "mid") return {
    primes: [ pHigh(`Your earlier rounds point to ${ab} clicking today.`),
              pLow(`This one is a step up — most ${ref} slow right down.`),
              pEffort(`These reward working the rule through, not eyeballing it.`),
              pAbility(`This set reads ${ab} fairly cleanly.`) ],
    feedback: {
      pride:          [ fbPrideScore(ref, ab, { pct: [72, 82] }) ],
      guilt:          [ fbGuilt(ref, ab, { pct: [28, 45] }) ],
      disappointment: [ fbDisap(ref, { pct: [26, 46] }) ],
      relief:         [ fbReliefSelf(ref, { pct: [55, 78] }) ],
      shame:          [ fbShameNorm(ref, { pct: pb }) ],
    } };
  return {
    primes: [ pAbility(`This set is diagnostic of core ${ab}.`),
              pHigh(`Given your run so far, this should be within reach.`),
              pLow(`Heads-up — most ${ref} miss this one.`),
              pEffort(`These reward grinding the rule through methodically.`) ],
    feedback: {
      shame:          [ fbShameScore(ref, ab), fbShameHard(ref, ab), fbShameSpeed(ref, ab) ],
      guilt:          [ fbGuilt(ref, ab) ],
      disappointment: [ fbDisap(ref) ],
      relief:         [ fbReliefNorm(ref, { pct: pb }) ],
    } };
}

/* ---- Selection: how many tasks per surface x tier (balanced ~42; rest stay
 *      in MITRE_ITEMS as a reserve). Hard-weighted (shame is scarce); MR weighted
 *      (generalAbility, all three domains). ----------------------------------- */
const SELECT = {
  NS: { easy: 3, mid: 3, hard: 5 },
  LS: { easy: 2, mid: 3, hard: 4 },
  FS: { easy: 4, mid: 3, hard: 2 },
  MR: { easy: 3, mid: 4, hard: 6 },   // real MR items (image + A-H key), Form 1 preferred
};

// MR images are the report's matrix screenshots, named <label>.png. Label case follows
// the p.35 parameter table (e.g. F10.NEW1); confirm your filenames match this casing.
const mrImage = (label) => `stimuli/mitre/mr/${label}.png`;

function buildTask(surface, item, idx) {
  const S = SURFACES[surface], tier = item.tier;
  const id = `${surface.toLowerCase()}_${tier}_${String(idx).padStart(2, "0")}`;
  const itemRec =
    S.content === "image" ? { ref: item.label, form: item.form, b: item.b, key: item.key,        // MR: image + A-H key
                              image: mrImage(item.label), answerSet: S.answerSet }
  :                         { ref: item.label, form: item.form, b: item.b, stem: item.stem, key: item.key }; // NS/LS/FS: stem + key
  return {
    id, stimulusId: id,
    name: `${S.label} — ${tier} (MITRE ${surface}; item ${item.label})`,
    domains: S.domains, modality: S.modality, languageLoad: "low",
    difficultyTier: tier, unit: "single",
    ...(S.generalAbility ? { generalAbility: true } : {}),
    instructions: S.instructions,
    stimulus: { component: S.component, scoreFn: S.scoreFn, response: S.response,
                ...(S.optionCount ? { optionCount: S.optionCount } : {}),
                ...(S.answerSet ? { answerSet: S.answerSet } : {}),
                measures: ["correct", "rtMs"], item: itemRec },
    calibration: { ...TIER_CALIB[tier], b: item.b, itemRef: item.label },   // refine per item from pilot
    timer: { mode: "hidden" },
    framing: Object.fromEntries(S.domains.map((d) => [d, buildTierFraming(surface, d, tier)])),
    response: RESPONSE,
  };
}

function emit() {
  const out = [];
  for (const surface of ["NS", "LS", "FS", "MR"]) {
    const pool = MITRE_ITEMS[surface];
    for (const tier of ["easy", "mid", "hard"]) {
      // MR: prefer Form 1 (the images most likely on hand), then by difficulty
      const picks = pool.filter((x) => x.tier === tier)
        .sort((a, b) => (surface === "MR" ? (a.form === "1" ? 0 : 1) - (b.form === "1" ? 0 : 1) : 0)
                        || (a.b ?? 0) - (b.b ?? 0))
        .slice(0, SELECT[surface][tier]);
      picks.forEach((item, i) => out.push(buildTask(surface, item, i + 1)));
    }
  }
  return out;
}

export const REASONING_BANK = emit();   // ~42 single-shot tasks

/* ---- Calibration items — one per surface, reserved (never in REASONING_BANK) -- *
 * NS/LS/MR: easy items from Form 2 (main bank uses Form 1 NS/LS and Form 1 MR).
 * FS: lower-mid (b=-0.37), the FS mid-boundary that sits clearly above "easy"
 *   in participant effort while still being learnable in familiarisation.
 * All items confirmed present in reserve before use — see calibration-check log.  */
const CALIB_ITEMS = {
  NS: { label: "nst_f01i5", form: "2", b: 0.95,  tier: "easy",
        stem: [22, 26, 34, 41, 46, 56, 67, 80], key: 88 },
  LS: { label: "ls_f01i3",  form: "2", b: -2.77, tier: "easy",
        stem: ["V","G","X","G","Z","G","B"],     key: "G" },
  FS: { label: "as_b1i13", form: "1", b: -0.37, tier: "mid",
        stem: ["NE","NE","N","NW","SE","SE","E","NE","SW","SW","S","SE","NW","NW"], key: "W" },
  MR: { label: "F4.1",     form: "2", b: -0.87, tier: "easy", key: "E" },  // image only
};

function buildCalibTask(surface) {
  const item = CALIB_ITEMS[surface];
  const base = buildTask(surface, item, 0);
  return {
    ...base,
    id: `${surface.toLowerCase()}_calib`,
    stimulusId: `${surface.toLowerCase()}_calib`,
    name: `${SURFACES[surface].label} — familiarisation (reserved item, honest feedback)`,
    phase: "calibration",
    honestFeedback: true, 
  };
}

/* Ordered NS → LS → FS → MR: introduces the four surfaces in order of
 * ascending perceptual load (numeric/alphabetic before visual/spatial).
 * The controller presents these in sequence during the calibration phase;
 * honest feedback is used regardless of the framing carried on each task. */
export const REASONING_CALIBRATION = [
  buildCalibTask("NS"),
  buildCalibTask("LS"),
  buildCalibTask("FS"),
  buildCalibTask("MR"),
];

/* ============================================================================
 * Bank-writer: run `node reasoning_battery.js` to produce reasoning_bank.js.
 * Guarded so importing this module (browser or via trial_bank.js) never writes
 * a file or loads Node-only dependencies.
 * ========================================================================== */
if (typeof process !== "undefined" && process.argv?.[1]) {
  (async () => {
    const { fileURLToPath } = await import("node:url");
    if (fileURLToPath(import.meta.url) !== process.argv[1]) return;  // imported, not run directly
    const { writeFileSync } = await import("node:fs");
    const out =
      `/* AUTO-GENERATED by reasoning_battery.js — do not edit by hand.\n` +
      ` * Re-running overwrites this file. Once pilot calibration values are added,\n` +
      ` * update them here directly rather than regenerating.\n` +
      ` * Keep inside your secured system (Appendix A) — contains answer keys. */\n\n` +
      `export const REASONING_BANK = ${JSON.stringify(REASONING_BANK, null, 2)};\n\n` +
      `export const REASONING_CALIBRATION = ${JSON.stringify(REASONING_CALIBRATION, null, 2)};\n`;
    writeFileSync("reasoning_bank.js", out);
    console.log(`reasoning_bank.js written — ${REASONING_BANK.length} tasks + ${REASONING_CALIBRATION.length} calibration tasks`);
    // Sanity report
    const bySurf = {}, byTier = {};
    for (const t of REASONING_BANK) {
      const s = t.id.split("_")[0]; bySurf[s] = (bySurf[s] || 0) + 1;
      byTier[t.difficultyTier] = (byTier[t.difficultyTier] || 0) + 1;
    }
    console.log("  surfaces:", bySurf, "| tiers:", byTier);
    console.log("  calibration surfaces:", REASONING_CALIBRATION.map(t => t.id).join(", "));
    const usedRefs = new Set([...REASONING_BANK, ...REASONING_CALIBRATION].map(t => t.stimulus.item.ref));
    console.log("  total unique items referenced:", usedRefs.size);
  })();
}
