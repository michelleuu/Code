/* ============================================================================
 * Media bank — COMMON framing kit  (achievement-emotion FER study, Objective 1)
 * ----------------------------------------------------------------------------
 * The FAMILY-INVARIANT half of the media task bank. Nothing here is specific to
 * a stimulus source: it is the emotion/credibility model (primes, feedback
 * variants, per-tier framing, the outcome-contingent + pivot structure) plus a
 * task assembler. The three media families plug in by supplying only their
 * CONCRETE stimulus config and calling buildMediaTask():
 *
 *     IQA    (image-quality 2AFC)        -> iqa_subbank.js      [built]
 *     VAST-R (aesthetic-fault 2AFC)      -> vastr_subbank.js    [later — needs the items]
 *     ETS    (closure / perceptual)      -> ets_subbank.js      [later — needs the items]
 *
 * WHY THIS IS SHARED. The framing is identical to the reasoning bank's model —
 * easy carries pride/relief (+ peer_success failure landings for the gated
 * negative pivot); mid is moderate (+ a mild peer_success shame); hard carries
 * full self_score shame incl. shame_hard, plus a relief success-pivot. That
 * structure is a property of DIFFICULTY x EMOTION, not of the stimulus, so every
 * media family inherits it. Only the ABILITY wording (what skill the item reads
 * as) and the difficulty->tier mapping differ per family, and those are passed in.
 *
 * STRUCTURAL NOTE (media families vs the two existing banks). These tasks sit
 * BETWEEN rotation and reasoning: blocked like rotation (a single forced-choice
 * perceptual judgment is binary and can't carry a percentile, so unit:"block",
 * scored as a proportion), but accuracy-MEANINGFUL like reasoning (subtle items
 * genuinely lower accuracy), so they are outcome-contingent and carry the
 * success/failure pivots — unlike rotation, which is pure fabricated speed.
 *
 * INTEGRATION TODO (one controller touch-point). resolveOutcomeFeedback() reads
 * the round outcome as `realPerformance.correct >= 1`, which is correct for the
 * single-item reasoning tasks but NOT for a block. For block families set the
 * outcome from `realPerformance.passed` (block proportion >= calibration.passMark)
 * — see the per-tier passMark below. (Rotation never hits this line; it carries
 * no requiresOutcome. Reasoning hits it as 1-of-1. The media blocks are the first
 * case that needs the threshold the controller already flags as TODO.)
 * ========================================================================== */

import { PROBES } from "./trial_schema.js";

/* ---- In-group referents (proximate comparators dominate the felt comparison);
 *      domain-keyed, family-invariant — same map the reasoning bank uses. ----- */
export const REFERENT = {
  design:    "people who identified as designers",
  media:     "students in media",
  computing: "students on the computing track",
};

export const RESPONSE = { probes: PROBES, scale: { type: "likert", min: 1, max: 7 },
                          cleanCore: { dominantMin: 5, othersMax: 3 } };

/* ---- Per-tier block calibration DEFAULTS (PLACEHOLDERS — set from pilot) ---- *
 * plausiblePct      = believable SCORE (accuracy) band for self_score
 * plausiblePctSpeed = believable SPEED band for self_speed
 * realPSuccess      = expected block pass rate -> anchors peer_success credibility
 *                     AND the outcome threshold (passMark). For 2-alternative
 *                     families the real floor is ~0.5 (chance), so hard-tier
 *                     realPSuccess can't approach reasoning's 0.22 — but the
 *                     DISPLAYED shame percentile is fabricated and decoupled, and
 *                     stays credible because subtle pairs FEEL like coin-flips.
 * passMark          = proportion-correct threshold for outcome = "passed"        */
export const TIER_CALIB = {
  easy: { realPSuccess: 0.95, medianRtMs: 4000, plausiblePct: [60, 99], plausiblePctSpeed: [60, 99], passMark: 0.85 },
  mid:  { realPSuccess: 0.78, medianRtMs: 5000, plausiblePct: [25, 80], plausiblePctSpeed: [25, 78], passMark: 0.70 },
  hard: { realPSuccess: 0.60, medianRtMs: 6000, plausiblePct: [2, 45],  plausiblePctSpeed: [2, 42],  passMark: 0.58 },
};

// peer_success band must sit near the real pass rate (credibility gate allows
// +/- CONFIG.caps.peerNormSlackPct, default 20). Centre on realPSuccess.
export const peerBand = (tier) => { const rp = Math.round(TIER_CALIB[tier].realPSuccess * 100);
  return [Math.max(2, rp - 9), Math.min(99, rp + 7)]; };

/* ---- Prime makers (two orthogonal properties; text supplied by the family) -- */
export const pAbility = (text) => ({ id: "p_abilityDiag", setsExpectancy: "none", attributionFrame: "ability", text });
export const pLow     = (text) => ({ id: "p_expectLow",   setsExpectancy: "low",  attributionFrame: "none",    text });
export const pHigh    = (text) => ({ id: "p_expectHigh",  setsExpectancy: "high", attributionFrame: "none",    text });
export const pEffort  = (text) => ({ id: "p_effortCue",   setsExpectancy: "none", attributionFrame: "effort",  text });

/* ---- Feedback-variant makers (literal ${pct} stays for post-task fill; the
 *      referent + ability wording are baked per-domain at build time) --------- */
export const fbShameScore = (ref, ab, { pct = [3, 18], severity = 2, id = "shame_mild" } = {}) => ({
  id, comparison: "individuating", attribution: "ability", severity,
  requiresOutcome: "incorrect", pctRef: "self_score", referent: ref, pct,
  template: `You came out in the bottom \${pct}% — ${ab} may not be where your strength lies.` });
export const fbShameHard = (ref, ab, { pct = [2, 10] } = {}) => ({
  id: "shame_hard", comparison: "individuating", attribution: "ability", severity: 3,
  requiresOutcome: "incorrect", pctRef: "self_score", referent: ref, pct,
  template: `Bottom \${pct}% again — others at your level are well ahead; ${ab} may just not be your area.` });
export const fbShameSpeed = (ref, ab, { pct = [4, 20], severity = 2, id = "shame_speed" } = {}) => ({
  id, comparison: "individuating", attribution: "ability", severity,
  requiresOutcome: "correct", pctRef: "self_speed", referent: ref, pct,
  template: `You got there — but among ${ref} who got it right you were bottom \${pct}% for speed, and quick ${ab} is what counts here.` });
export const fbShameNorm = (ref, { pct = [62, 78], severity = 2, id = "shame_mild" } = {}) => ({
  id, comparison: "individuating", attribution: "ability", severity,
  requiresOutcome: "incorrect", pctRef: "peer_success", referent: ref, pct,
  template: `\${pct}% of ${ref} caught this one — you didn't.` });
export const fbGuilt = (ref, ab, { pct = [8, 28] } = {}) => ({
  id: "guilt_effort", comparison: "individuating", attribution: "effort", severity: 1,
  requiresOutcome: "incorrect", pctRef: "self_score", referent: ref, pct,
  template: `Bottom \${pct}% — the eye is clearly there; you just didn't look carefully before answering.` });
export const fbGuiltNorm = (ref, { pct = [80, 95], id = "guilt_norm" } = {}) => ({
  id, comparison: "individuating", attribution: "effort", severity: 1,
  requiresOutcome: "incorrect", pctRef: "peer_success", referent: ref, pct,
  template: `\${pct}% catch this one — you clearly could too, you just went too fast.` });
export const fbDisap = (ref, { pct = [12, 42] } = {}) => ({
  id: "disap_ind", comparison: "individuating", attribution: "none", severity: 1,
  requiresOutcome: "incorrect", requiresExpectancy: "high", pctRef: "self_score", referent: ref, pct,
  template: `\${pct}th percentile — short of what your earlier rounds pointed to.` });
export const fbPrideScore = (ref, ab, { pct = [85, 98], id = "pride_ind" } = {}) => ({
  id, comparison: "individuating", attribution: "ability_effort", severity: 1,
  requiresOutcome: "correct", pctRef: "self_score", referent: ref, pct,
  template: `\${pct}th percentile — a real marker of ${ab}, and the care shows.` });
export const fbPrideSpeed = (ref, ab, { pct = [85, 98] } = {}) => ({
  id: "pride_speed", comparison: "individuating", attribution: "ability_effort", severity: 1,
  requiresOutcome: "correct", pctRef: "self_speed", referent: ref, pct,
  template: `Top \${pct}th percentile for speed — fast and accurate ${ab}, the strongest kind.` });
export const fbReliefSelf = (ref, { pct = [60, 82] } = {}) => ({
  id: "relief_self", comparison: "normative_shared", attribution: "task_difficulty", severity: 0,
  requiresOutcome: "correct", requiresExpectancy: "low", pctRef: "self_score", referent: ref, pct,
  template: `\${pct}th percentile — you cleared the set ${ref} usually find slow going.` });
export const fbReliefNorm = (ref, { pct } = {}) => ({
  id: "relief_norm", comparison: "normative_shared", attribution: "task_difficulty", severity: 0,
  requiresOutcome: "correct", requiresExpectancy: "low", pctRef: "peer_success", referent: ref, pct,
  template: `Only \${pct}% of ${ref} get this one right — you're one of them.` });

/* ---- Per-(ability x referent x tier) framing  (family-invariant structure) -- *
 * `ab`  : the skill wording for this surface in this domain (family supplies it)
 * `ref` : REFERENT[domain]
 * floorLimited (2-alternative families): the hard-tier relief success-pivot can't
 *   credibly say "only 8% solve this" when chance is 50%, so it uses a self_score
 *   relief band instead of a peer_success one.                                    */
export function buildMediaFraming(ab, ref, tier, { floorLimited = false } = {}) {
  const pb = peerBand(tier);
  if (tier === "easy") return {
    primes: [ pAbility(`This one is a clean read of ${ab}.`),
              pLow(`Heads-up — plenty of ${ref} slip on the subtle ones here.`),
              pEffort(`These reward a careful look rather than a snap answer.`) ],
    feedback: {
      pride:  [ fbPrideScore(ref, ab), fbPrideSpeed(ref, ab) ],
      relief: [ fbReliefSelf(ref, { pct: [62, 85] }) ],
      shame:  [ fbShameNorm(ref, { pct: pb }) ],     // failure-pivot landing (engaged)
      guilt:  [ fbGuiltNorm(ref, { pct: pb }) ],     // failure-pivot landing (rushed)
    } };
  if (tier === "mid") return {
    primes: [ pHigh(`Your earlier rounds point to ${ab} clicking today.`),
              pLow(`This one is a step up — most ${ref} slow right down.`),
              pEffort(`These reward looking properly, not eyeballing it.`),
              pAbility(`This set reads ${ab} fairly cleanly.`) ],
    feedback: {
      pride:          [ fbPrideScore(ref, ab, { pct: [72, 82] }) ],
      guilt:          [ fbGuilt(ref, ab, { pct: [28, 45] }) ],
      disappointment: [ fbDisap(ref, { pct: [26, 46] }) ],
      relief:         [ fbReliefSelf(ref, { pct: [55, 78] }) ],
      shame:          [ fbShameNorm(ref, { pct: pb }) ],   // mild peer_success shame
    } };
  // hard
  return {
    primes: [ pAbility(`This set is diagnostic of core ${ab}.`),
              pHigh(`Given your run so far, this should be within reach.`),
              pLow(`Heads-up — most ${ref} miss this one.`),
              pEffort(`These reward really studying each one before answering.`) ],
    feedback: {
      shame:          [ fbShameScore(ref, ab), fbShameHard(ref, ab), fbShameSpeed(ref, ab) ],
      guilt:          [ fbGuilt(ref, ab) ],
      disappointment: [ fbDisap(ref) ],
      relief:         floorLimited ? [ fbReliefSelf(ref, { pct: [55, 80] }) ]   // 2AFC floor: self_score pivot
                                   : [ fbReliefNorm(ref, { pct: pb }) ],        // success pivot
    } };
}

/* ---- Task assembler: wires framing + response + timer consistently --------- *
 * The family supplies the CONCRETE bits (id, stimulus, calibration, domains,
 * ability wording per domain); everything family-invariant is filled here.
 * `instructions`      : optional short neutral string rendered above the stimulus
 *                       before any framing fires. Separate from framing layer.
 * `instructionsOnPrime`: if true, the component also renders instructions on the
 *                       prime page (useful for timed tasks where the participant
 *                       needs a reminder of the mechanics before the block starts).
 * `framingOverride`   : supply a complete per-domain framing object to bypass
 *                       buildMediaFraming (used by families whose prime text
 *                       doesn't fit the standard templates, e.g. P-3).           */
export function buildMediaTask({
  id, name, domains, modality, languageLoad = "low", difficultyTier,
  stimulus, calibration, abilityByDomain, generalAbility = false,
  unit = "block", timerMode = "hidden", floorLimited = false,
  instructions = null, instructionsOnPrime = false,
  framingOverride = null,
}) {
  return {
    id, stimulusId: id, name,
    domains, modality, languageLoad, difficultyTier, unit,
    ...(generalAbility ? { generalAbility: true } : {}),
    ...(instructions ? { instructions } : {}),
    ...(instructionsOnPrime ? { instructionsOnPrime: true } : {}),
    stimulus,
    calibration,
    timer: { mode: timerMode },
    framing: framingOverride ?? Object.fromEntries(domains.map((d) =>
      [d, buildMediaFraming(abilityByDomain[d], REFERENT[d], difficultyTier, { floorLimited })])),
    response: RESPONSE,
  };
}
