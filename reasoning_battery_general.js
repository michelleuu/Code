/* ============================================================================
 * Reasoning BATTERY (generated) — achievement-emotion FER study (Objective 1) v3
 * ----------------------------------------------------------------------------
 * A full general fluid-reasoning bank built on the MITRE/ETS Inductive Reasoning
 * suite (Kyllonen, Hartman, Sprenger, Weeks, Bertling, McGrew, Kriz, Bertling,
 * Fife, Stankov; "Guide to MITRE/ETS Inductive Reasoning Battery for a High
 * Ability Population", 22 Jul 2016, public release, case 16-2283). Four surfaces:
 * Figure Series (FS), Number Series (NS), Letter Series (LS), Matrix Reasoning
 * (MR). Each test has TWO parallel forms (marginal reliability >= 0.87).
 *
 * This file supersedes the 6-task SAMPLE in reasoning_subbank.js: it emits ~40
 * single-shot tasks across surfaces x tiers x domains, with per-DOMAIN framing,
 * outcome-contingent feedback, and the success/failure pivots — the same v3 model.
 *
 * **WHAT IS PLACEHOLDER (you fill from your authorized appendix copy).** Exactly
 * like rotation_subbank.js references Ganis-Kievit images by filename, this file
 * references MITRE items by an appendix ID and DOES NOT embed item content or keys.
 * Test security + our "answer keys are need-to-know" rule mean the secure content
 * must NOT live in shared code. For each task you supply, in your controlled env:
 *   - stimulus.item.ref   -> the real appendix item ID (Form A/B), e.g. "NS-A-17"
 *   - stimulus.item.key   -> the answer (loaded from Appendix B-I; need-to-know)
 *   - stimulus.item.prompt/options -> the item content (loaded at runtime, not here)
 *   - difficultyTier      -> set from the item's IRT b-value (see TIER_FROM_B)
 *   - calibration.*       -> realPSuccess / medianRtMs / plausiblePct[Speed] from
 *                            the item parameters + a small pilot (the believable
 *                            bands are what make the credibility gate meaningful)
 *
 * NS is CONSTRUCTED-RESPONSE (enter the next number) -> response:"input", no options.
 * LS/FS/MR are MULTIPLE-CHOICE -> response:"choice".
 *
 * Coverage note: media is reachable only via FS + MR here (NS/LS route to
 * computing+design); the team is sourcing a dedicated media task set separately.
 * ========================================================================== */

import { PROBES } from "./trial_schema.js";

/* ---- In-group referents (proximate comparators dominate the felt comparison) --- */
const REFERENT = {
  design:    "people who identified as designers",
  media:     "students in media",
  computing: "students on the computing track",
};

/* ---- Ability wording per (surface x domain): makes one item self-relevant to
 *      different identities without duplicating the stimulus. ----------------- */
const ABILITY = {
  NS: { computing: "logical sequencing",            design: "the rule-finding side of design reasoning" },
  LS: { computing: "step-by-step rule-finding",     design: "the systematic rule-finding behind good design" },
  FS: { design: "visual-pattern sense",             media: "visual sequencing" },
  MR: { design: "spotting the underlying structure", media: "visual-structure reasoning", computing: "abstract pattern reasoning" },
};

/* ---- Surface config ----------------------------------------------------- */
const SURFACES = {
  NS: { label: "Number series",   modality: "numeric",     domains: ["computing", "design"],
        component: "numberSeries", scoreFn: "scoreNumberInput", response: "input",  languageLoad: "low" },
  LS: { label: "Letter series",   modality: "logic",       domains: ["computing", "design"],
        component: "letterSeries", scoreFn: "scoreChoice",      response: "choice", languageLoad: "low",
        note: "Latin-alphabet fluency assumed (mild load, far below anagrams)" },
  FS: { label: "Figure series",   modality: "perceptual",  domains: ["design", "media"],
        component: "figureSeries", scoreFn: "scoreChoice",      response: "choice", languageLoad: "low" },
  MR: { label: "Matrix reasoning", modality: "visuospatial", domains: ["design", "media", "computing"],
        component: "matrixReasoning", scoreFn: "scoreChoice",   response: "choice", languageLoad: "low",
        generalAbility: true },
};

/* ---- Tier calibration defaults (PLACEHOLDERS — refine per item from norms) --- *
 * Difficulty is one construct across surfaces (the point of the battery), so the
 * tier — not the surface — sets the believable band. plausiblePct = score band;
 * plausiblePctSpeed = speed band; realPSuccess anchors peer_success credibility.  */
const TIER_CALIB = {
  easy: { realPSuccess: 0.85, medianRtMs: 35000, plausiblePct: [60, 99], plausiblePctSpeed: [60, 99] },
  mid:  { realPSuccess: 0.58, medianRtMs: 55000, plausiblePct: [25, 80], plausiblePctSpeed: [25, 78] },
  hard: { realPSuccess: 0.22, medianRtMs: 85000, plausiblePct: [2, 45],  plausiblePctSpeed: [2, 42] },
};
// Map an item's IRT b-value to a tier. CUTOFFS ARE PLACEHOLDERS — set from the
// observed b-distribution in the appendix so the tiers are roughly balanced.
export const TIER_FROM_B = (b) => (b == null ? null : b < -0.4 ? "easy" : b <= 0.8 ? "mid" : "hard");

// peer_success band must sit near the item's real pass rate (credibility gate
// allows +/- CONFIG.caps.peerNormSlackPct, default 20). Centre on realPSuccess.
const peerBand = (tier) => { const rp = Math.round(TIER_CALIB[tier].realPSuccess * 100);
  return [Math.max(2, rp - 9), Math.min(99, rp + 7)]; };

/* ---- Prime makers (two orthogonal properties; text per surface/domain) --- */
const pAbility = (text) => ({ id: "p_abilityDiag", setsExpectancy: "none", attributionFrame: "ability", text });
const pLow     = (text) => ({ id: "p_expectLow",   setsExpectancy: "low",  attributionFrame: "none",    text });
const pHigh    = (text) => ({ id: "p_expectHigh",  setsExpectancy: "high", attributionFrame: "none",    text });
const pEffort  = (text) => ({ id: "p_effortCue",   setsExpectancy: "none", attributionFrame: "effort",  text });

/* ---- Feedback-variant makers (templates keep ${pct} for post-task fill; the
 *      referent + ability wording are baked per-domain at build time) -------- */
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

/* ---- Per-(domain x tier) framing -----------------------------------------
 * easy : positive (pride/relief) + peer_success FAILURE landings (shame/guilt) for
 *        the gated negative pivot — on an easy item the only credible percentile is
 *        a high in-group pass rate.
 * mid  : moderate set + a MILD peer_success shame (the engaged-wrong landing).
 * hard : full self_score shame (incl. shame_hard) + speed shame + guilt/disap + a
 *        peer_success relief (the success pivot).                                  */
function buildTierFraming(surface, domain, tier) {
  const ref = REFERENT[domain], ab = ABILITY[surface][domain], pb = peerBand(tier);
  if (tier === "easy") return {
    primes: [ pAbility(`This one is a clean read of ${ab}.`),
              pLow(`Heads-up — plenty of ${ref} slip on the last step here.`),
              pEffort(`These reward a careful read rather than a snap answer.`) ],
    feedback: {
      pride:  [ fbPrideScore(ref, ab), fbPrideSpeed(ref, ab) ],
      relief: [ fbReliefSelf(ref, { pct: [62, 85] }) ],
      shame:  [ fbShameNorm(ref, { pct: pb }) ],     // failure-pivot landing (engaged)
      guilt:  [ fbGuiltNorm(ref, { pct: pb }) ],     // failure-pivot landing (rushed)
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
      shame:          [ fbShameNorm(ref, { pct: pb }) ],   // mild peer_success shame
    } };
  // hard
  return {
    primes: [ pAbility(`This set is diagnostic of core ${ab}.`),
              pHigh(`Given your run so far, this should be within reach.`),
              pLow(`Heads-up — most ${ref} miss this one.`),
              pEffort(`These reward grinding the rule through methodically.`) ],
    feedback: {
      shame:          [ fbShameScore(ref, ab), fbShameHard(ref, ab), fbShameSpeed(ref, ab) ],
      guilt:          [ fbGuilt(ref, ab) ],
      disappointment: [ fbDisap(ref) ],
      relief:         [ fbReliefNorm(ref, { pct: pb }) ],   // success pivot: "only X% solve this, you did"
    } };
}

/* ---- Item plan: how many single-shot tasks per surface x tier ------------- *
 * Each slot becomes ONE task referencing one appendix item. The hard tier is
 * weighted (shame is the scarce, priority emotion -> spread across many stimuli);
 * matrices are weighted (generalAbility -> servable to "ranks-it-second" people,
 * and reachable by all three domains). ~40 tasks total. Adjust counts to the items
 * actually available at each b-band in the appendix.                              */
const ITEM_PLAN = {
  NS: { easy: 3, mid: 3, hard: 5 },   // 11
  LS: { easy: 2, mid: 3, hard: 4 },   //  9
  FS: { easy: 4, mid: 3, hard: 2 },   //  9  (positive-leaning; design+media)
  MR: { easy: 3, mid: 4, hard: 6 },   // 13  (generalAbility; all three domains)
};

/* ---- Emit the battery (deterministic) ------------------------------------ */
function emit() {
  const out = [];
  for (const surface of Object.keys(ITEM_PLAN)) {
    const S = SURFACES[surface];
    for (const tier of ["easy", "mid", "hard"]) {
      const n = ITEM_PLAN[surface][tier] || 0;
      for (let i = 1; i <= n; i++) {
        const id = `${surface.toLowerCase()}_${tier}_${String(i).padStart(2, "0")}`;
        const itemRef = `${surface}-TBD-${tier}-${String(i).padStart(2, "0")}`;  // MAP to a real appendix item (b in tier band)
        out.push({
          id, stimulusId: id,
          name: `${S.label} — ${tier} (MITRE ${surface}; item ${itemRef})`,
          domains: S.domains, modality: S.modality, languageLoad: S.languageLoad,
          difficultyTier: tier, unit: "single",
          ...(S.generalAbility ? { generalAbility: true } : {}),
          stimulus: {
            component: S.component, scoreFn: S.scoreFn, response: S.response, measures: ["correct", "rtMs"],
            // SECURE CONTENT loaded from your authorized appendix copy, not stored here:
            item: { ref: itemRef, prompt: null, options: S.response === "choice" ? null : undefined, key: null },
          },
          calibration: { ...TIER_CALIB[tier], itemRef },   // refine per item from appendix params + pilot
          timer: { mode: "hidden" },                        // speed measured silently; shown only at feedback
          // per-DOMAIN framing (referent + ability wording + primes differ by domain)
          framing: Object.fromEntries(S.domains.map((d) => [d, buildTierFraming(surface, d, tier)])),
          response: RESPONSE,
        });
      }
    }
  }
  return out;
}

export const REASONING_BANK = emit();   // ~42 single-shot tasks (see ITEM_PLAN)

/* ---- Calibration familiarization (reasoning family) ---------------------- *
 * Parallel to ROT_CALIBRATION: a few EASY items with HONEST feedback, on RESERVED
 * items that never appear in experimental tasks (use Form B or designated practice
 * items), ending on a gentle success to seed the high success-expectancy that
 * disappointment later violates. Consumed by the controller's calibration phase. */
export const REASONING_CALIBRATION = {
  id: "reason_calib_fam",
  name: "Reasoning — familiarization (practice, honest feedback)",
  domains: ["computing", "design", "media"], modality: "numeric", languageLoad: "low",
  difficultyTier: "easy", unit: "single", phase: "calibration", honestFeedback: true,
  // 3-4 reserved EASY items across surfaces; honest correct/incorrect + honest speed, no fabrication.
  items: [
    { ref: "NS-RESV-01", surface: "NS", response: "input" },
    { ref: "FS-RESV-01", surface: "FS", response: "choice" },
    { ref: "MR-RESV-01", surface: "MR", response: "choice" },  // last = easy -> guaranteed-feeling success
  ],
  feedbackKind: "honest",
  timer: { mode: "hidden" },
  response: { probes: PROBES, scale: { type: "likert", min: 1, max: 7 } },
};

/* ============================================================================
 * To use: assemble TRIAL_BANK from the sub-banks (drop the trial_schema.js
 * placeholders to avoid id collisions):
 *     import { REASONING_BANK } from "./reasoning_battery.js";
 *     import { ROT_SUBBANK } from "./rotation_subbank.js";
 *     export const TRIAL_BANK = [ ...REASONING_BANK, ...ROT_SUBBANK ];
 * Then map each task's item.ref/key + difficultyTier (from b) + calibration from
 * the authorized appendix, in your controlled environment.
 * ========================================================================== */
