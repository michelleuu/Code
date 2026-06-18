/* ============================================================================
 * Reasoning BATTERY (generated from real MITRE/ETS items) — Objective 1, v3
 * ----------------------------------------------------------------------------
 * Consumes mitre_reasoning_items.js (parsed from the public guide, DTIC AD1107949):
 *   NS (70) + LS (60): REAL stems, keys, IRT b — constructed-response, fully runnable.
 *   FS (60): real b only; arrow glyphs render from your authorized copy.
 *   MR: reference slots; images from matrixReasoning.zip + keys/params from Appendix E.
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
        component: "numberSeries", scoreFn: "scoreNumberInput", response: "input",  hasContent: true },
  LS: { label: "Letter series",   modality: "logic",        domains: ["computing", "design"],
        component: "letterSeries", scoreFn: "scoreLetterInput", response: "input",  hasContent: true,
        note: "Latin-alphabet fluency assumed (mild load, far below anagrams)" },
  FS: { label: "Figure series",   modality: "perceptual",   domains: ["design", "media"],
        component: "figureSeries", scoreFn: "scoreChoice",      response: "choice", optionCount: 8, hasContent: false },
  MR: { label: "Matrix reasoning", modality: "visuospatial", domains: ["design", "media", "computing"],
        component: "matrixReasoning", scoreFn: "scoreChoice",   response: "choice", optionCount: 8, hasContent: false,
        generalAbility: true },
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
  MR: { easy: 3, mid: 4, hard: 6 },   // MR placeholder slots (no real items yet)
};

// MR reference slots (no params extracted): user fills b/key/image from Appendix E + zip
const MR_SLOTS = [];
for (const tier of ["easy", "mid", "hard"])
  for (let i = 1; i <= SELECT.MR[tier]; i++)
    MR_SLOTS.push({ label: `MR-TBD-${tier}-${String(i).padStart(2, "0")}`, tier, b: null, form: null });

function buildTask(surface, item, idx) {
  const S = SURFACES[surface], tier = item.tier;
  const id = `${surface.toLowerCase()}_${tier}_${String(idx).padStart(2, "0")}`;
  const itemRec = S.hasContent
    ? { ref: item.label, form: item.form, b: item.b, stem: item.stem, key: item.key }       // NS/LS: runnable
    : { ref: item.label, form: item.form, b: item.b, key: null,                              // FS/MR: reference
        ...(surface === "FS" ? { glyphsFrom: "authorized copy (arrow font)" }
                             : { imageFrom: "matrixReasoning.zip", keyFrom: "Appendix E" }) };
  return {
    id, stimulusId: id,
    name: `${S.label} — ${tier} (MITRE ${surface}; item ${item.label})`,
    domains: S.domains, modality: S.modality, languageLoad: "low",
    difficultyTier: tier, unit: "single",
    ...(S.generalAbility ? { generalAbility: true } : {}),
    stimulus: { component: S.component, scoreFn: S.scoreFn, response: S.response,
                ...(S.optionCount ? { optionCount: S.optionCount } : {}),
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
    const pool = surface === "MR" ? MR_SLOTS : MITRE_ITEMS[surface];
    for (const tier of ["easy", "mid", "hard"]) {
      const picks = pool.filter((x) => x.tier === tier)
        .sort((a, b) => (a.b ?? 0) - (b.b ?? 0)).slice(0, SELECT[surface][tier]);
      picks.forEach((item, i) => out.push(buildTask(surface, item, i + 1)));
    }
  }
  return out;
}

export const REASONING_BANK = emit();   // ~42 single-shot tasks

/* ---- Calibration familiarization: reserve real EASY items (use Form 2 / unused
 *      items so practice never reuses an experimental stimulus), honest feedback,
 *      ending on a gentle success. Fill refs from MITRE_ITEMS reserve. ---------- */
export const REASONING_CALIBRATION = {
  id: "reason_calib_fam",
  name: "Reasoning — familiarization (practice, honest feedback)",
  domains: ["computing", "design", "media"], modality: "numeric", languageLoad: "low",
  difficultyTier: "easy", unit: "single", phase: "calibration", honestFeedback: true,
  items: [ /* reserve easy items not used above, e.g.: */
    { surface: "NS", ref: null }, { surface: "FS", ref: null }, { surface: "LS", ref: null },
  ],
  feedbackKind: "honest", timer: { mode: "hidden" },
  response: { probes: PROBES, scale: { type: "likert", min: 1, max: 7 } },
};
