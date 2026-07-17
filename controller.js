/* ============================================================================
 * Controller skeleton — achievement-emotion FER study (Objective 1)
 * ----------------------------------------------------------------------------
 * Architecture (per design decision): PROCEDURAL, STAGED control flow + single-
 * action selection, with the ETHICS/CONSTRAINT layer expressed as declarative
 * "rules-as-data" (the GATES list). No inference engine. Deterministic given a
 * seeded RNG, so every trial's selection.reason can be replayed.
 *
 * Phases:  intake -> calibration -> main -> positive_close -> debrief
 *   calibration : 2-3 real, easy->moderate tasks in the participant's top
 *                 self-relevant domain(s); honest/positive feedback (credibility
 *                 bootstrap); ends on success -> high success expectancy.
 *   main        : pursue the scarce, capped negatives (shame/disappointment/guilt)
 *                 first; positives are de-weighted (closing will cover them) and
 *                 appear mainly as forced spacers.
 *   positive_close : time-triggered; 3-4 pride/relief trials; mops up lagging
 *                 POSITIVE pool deficits; last trial = pride in highest-value domain.
 *
 * Entry points used by the jsPsych timeline:
 *   selectNextTrial(participant, pool, clock) -> realizedSelection
 *   resolveOutcomeFeedback(selection, realPerformance, participant) -> displayed   // v3, post-task
 *   onTrialFinish(realized, participant, pool, clock)
 *   advancePhase(participant, pool, clock)            // called at trial boundaries
 *
 * v3: stimulus/framing split (framingFor), outcome-contingent feedback resolved
 * post-task, off-target harvesting (label = felt dominant), clean-core balancing.
 * ========================================================================== */

import { EMOTION_PROFILE, EMOTIONS, ANTI_STACK } from "./trial_schema.js";
import { TRIAL_BANK, CALIBRATION_BANK } from "./trial_bank.js"; // assembled from the sub-banks you have

/* ---- Tunables — SET FROM PILOT (placeholders) -------------------------- */
export const CONFIG = {
  totalBudgetMs: 45 * 60 * 1000, // TODO pilot: whole-session wall-clock budget
  closing: { nTrials: 4, lastEmotion: "pride" },
  // reserve is dynamic: nTrials * observed median trial time (fallback fixed below)
  closingReserveFallbackMs: 8 * 60 * 1000, // TODO pilot

  calibration: { maxTasks: 3, startTier: "easy" },
  caps: {
    maxConsecutiveNeg: 1, // no two negatives in a row
    negLoadCap: 6, // TODO pilot: sum of EMOTION_PROFILE.cost over FELT negatives
    valueMin: 4, // generic self-conscious value threshold (1-7)
    generalAbilityValueMin: 2, // OPEN DECISION: relaxed floor for general-reasoning tasks
    //   (matrices etc.) — threat is to general ability, not one
    //   domain identity, so they stay servable to "ranks-it-2nd" people
    shameHardValueMin: 6, // OPEN DECISION: gate for the harsh shame variant
    shameNeedsPriorNeg: true, // ramp: shame_hard only after >=1 prior FELT negative
    peerNormSlackPct: 20, // peer_success norm credible only within this of realPSuccess
  },
  pivot: {
    enabled: true, // capitalize a REAL failure under a positive target with a
    //   GATED negative (must clear the same harm/consent gates)
    rushFrac: 0.5, // RT < rushFrac*medianRtMs => "rushed" (effort/guilt);
    //   otherwise "engaged" (ability/shame). TODO pilot.
  },
  // priority = poolDeficit(e) * phaseEmotionWeight[phase][e]
  phaseEmotionWeight: {
    main: {
      shame: 1.3,
      disappointment: 1.0,
      guilt: 1.0,
      pride: 0.25,
      relief: 0.25,
    }, // shame oversampled
    closing: { pride: 1.0, relief: 1.0, shame: 0, disappointment: 0, guilt: 0 },
  },
  score: { wDeficit: 1.0, wSco: 0.4, wValueFit: 0.5, wExpectancyFit: 0.5 }, // TODO tune
};

/* ============================================================================
 * DECLARATIVE GATES (rules-as-data). Each returns true when the candidate is
 * ALLOWED on that dimension. feasibility() returns the list of FAILED gates;
 * [] === eligible, and the failed/passed split is logged as the decision trace.
 * A candidate `c` = { emotion, task, domain, variant, pct, primeId|null }.
 * `s` = participant state.
 * ========================================================================== */
export const GATES = [
  { name: "credibility", test: (c) => credibleBand(c) },

  {
    name: "value_threshold", // shame/pride need the domain to matter
    test: (c, s) =>
      !isSelfConscious(c.emotion) ||
      s.domainValue[c.domain] >=
        (c.task.generalAbility
          ? CONFIG.caps.generalAbilityValueMin
          : CONFIG.caps.valueMin),
  },

  {
    name: "shame_hard_guard", // harsh variant only at high value + after context
    test: (c, s) =>
      c.variant.id !== "shame_hard" ||
      (s.domainValue[c.domain] >= CONFIG.caps.shameHardValueMin &&
        (!CONFIG.caps.shameNeedsPriorNeg ||
          s.ledger.consecutiveNegContext > 0)),
  },

  {
    name: "expectancy_violable", // relief/disap need a settable+violable expectancy + matching prime
    test: (c, s) =>
      EMOTION_PROFILE[c.emotion].requiresExpectancyViolation == null ||
      (hasMatchingPrime(
        c.task,
        c.domain,
        EMOTION_PROFILE[c.emotion].requiresExpectancyViolation,
      ) &&
        expectancyOk(
          s.domainExpectancy[c.domain],
          EMOTION_PROFILE[c.emotion].requiresExpectancyViolation,
        )),
  },

  {
    name: "no_consecutive_neg",
    test: (c, s) => !(isNeg(c.emotion) && isNeg(s.ledger.lastEmotion)),
  },

  {
    name: "negload_under_cap",
    test: (c, s) =>
      !isNeg(c.emotion) ||
      s.ledger.cumNegLoad + EMOTION_PROFILE[c.emotion].cost <=
        effectiveNegLoadCap(s),
  },

  {
    name: "single_shot", // gates on the STIMULUS, so re-framings can't repeat an item
    test: (c, s) => !s.ledger.usedStimulusIds.includes(stimulusIdOf(c.task)),
  },

  {
    name: "modality_not_stacked",
    test: (c, s) =>
      recentCount(s.ledger.recentModalities, c.task.modality) < 1 ||
      sinceLast(s.ledger.recentModalities, c.task.modality) >=
        ANTI_STACK.sameModalityCooldown,
  },

  {
    name: "domain_not_stacked",
    test: (c, s) =>
      sinceLast(s.ledger.recentDomains, c.domain) >=
      ANTI_STACK.sameDomainCooldown,
  },

  { name: "not_distressed", test: (c, s) => !s.flags.distress },

  {
    name: "not_suspicious", // once suspicion is flagged, stop HIGH-severity fabrication
    test: (c, s) => !s.flags.suspicious || (c.variant.severity ?? 0) <= 1,
  },

  {
    name: "norm_coherent", // OPEN DECISION: don't flip an in-group (referent) claim mid-session
    test: (c, s) => normCoherent(c, s),
  },
];

export const feasibility = (c, s) =>
  GATES.filter((g) => !g.test(c, s)).map((g) => g.name);

/* ============================================================================
 * TOP-LEVEL SELECTION — dispatch by phase
 * ========================================================================== */
export function selectNextTrial(participant, pool, clock) {
  switch (participant.phase) {
    case "calibration":
      return selectCalibration(participant, clock);
    case "main":
      return selectInduction(participant, pool, "main");
    case "positive_close":
      return selectInduction(participant, pool, "closing");
    default:
      throw new Error(`no selector for phase ${participant.phase}`);
  }
}

/* ---- Calibration: easy->moderate, honest/positive, end on success ------- */
function selectCalibration(participant, clock) {
  const done = participant.ledger.calibrationCount || 0;
  // escalate tier on prior success; otherwise hold easy so we exit on a win
  const tier =
    participant.ledger.lastCalibrationOk === false
      ? "easy"
      : done === 0
        ? CONFIG.calibration.startTier
        : "mid";
  const domain = topValueDomains(participant)[0]; // lean on self-relevant domain
  const task = pickCalibrationTask(domain, tier, participant); // real task, not single-shot-consumed
  return {
    phase: "calibration",
    bankId: task.id,
    domainUsed: domain,
    targetEmotion: null,
    primeId: null,
    feedbackId: null,
    honestFeedback: true, // show real (positive-leaning) result
    reason: {
      note: "calibration: bootstrap credibility + build success expectancy",
      tier,
    },
  };
}

/* ---- Induction (main + closing share the pipeline, differ by weights) --- */
function selectInduction(participant, pool, phase) {
  const weights = CONFIG.phaseEmotionWeight[phase];

  // 1. rank emotions by phase-weighted pool deficit
  const ranked = EMOTIONS.map((e) => ({
    e,
    pri: poolDeficit(pool, e) * (weights[e] ?? 0),
  }))
    .filter((x) => x.pri > 0)
    .sort((a, b) => b.pri - a.pri);

  // 2. walk emotions in priority order; take the first with >=1 feasible candidate
  for (const { e } of ranked) {
    const candidates = enumerateCandidates(e, participant, pool)
      .map((c) => ({ c, failed: feasibility(c, participant) }))
      .filter((x) => x.failed.length === 0);
    if (!candidates.length) continue;

    // 3. score feasible candidates; soften under load happens in chooseVariant()
    const scored = candidates.map((x) => ({
      ...x,
      s: scoreCandidate(x.c, participant, pool, phase),
    }));
    const maxScore = Math.max(...scored.map((x) => x.s));
    const tiedForBest = scored.filter((x) => x.s === maxScore);
    // Ties resolve via a seeded PRNG (participant.rngState), not Math.random(),
    // so the choice is still reproducible when a session is replayed from the
    // same participantId + call order (see header note on determinism).
    const tieBreak =
      tiedForBest.length > 1 ? seededTieBreak(tiedForBest, participant) : null;
    const best = tieBreak ? tieBreak.picked : tiedForBest[0];

    return realize(best.c, participant, pool, phase, {
      poolDeficit: deficitSnapshot(pool),
      gatesPassed: passedGates(best.c, participant),
      tieBreak: tieBreak && {
        tiedCount: tieBreak.tiedCount,
        tiedBankIds: tieBreak.tiedBankIds,
        chosenIndex: tieBreak.chosenIndex,
        rngValue: tieBreak.rngValue,
      },
    });
  }

  // 4. nothing feasible for any prioritized emotion -> neutral spacer (keeps face data flowing)
  return selectNeutralSpacer(participant);
}

/* ---- Build (emotion x task x domain x variant x pct) candidates --------- */
function enumerateCandidates(emotion, participant, pool) {
  const out = [];
  for (const task of TRIAL_BANK) {
    for (const domain of task.domains) {
      const fr = framingFor(task, domain); // v3: per-domain framing (or flat fallback)
      const variants = (fr.feedback || {})[emotion];
      if (!variants) continue;
      for (const variant of variants) {
        // SCO chooses individuating-vs-normative WHERE BOTH EXIST (handled in scoring/resolve);
        // here we enumerate all, gates + score prune.
        const pct = drawPct(variant, task, participant); // seeded RNG within the credible band
        const primeId = pickPrimeId(task, domain, emotion); // expectancy prime if required; else optional amplifier
        out.push({ emotion, task, domain, variant, pct, primeId });
      }
    }
  }
  return out;
}

/* ---- Scoring (soft preferences; NOT rules) ----------------------------- */
function scoreCandidate(c, s, pool, phase) {
  const w = CONFIG.score;
  return (
    w.wDeficit * poolDeficit(pool, c.emotion) +
    w.wSco * scoFit(c.variant.comparison, s.sco) + // high SCO -> comparison-heavy variants
    w.wValueFit * valueFit(c, s) + // place self-conscious emotions in high-value domains
    w.wExpectancyFit * expectancyFit(c, s)
  ); // place relief/disap where expectancy is right
}

/* ---- Realize the chosen candidate into a logged trial ------------------ *
 * NOTE: the feedback variant here is PROVISIONAL (the one matching the expected
 * outcome for this emotion). The authoritative variant + pct + text are re-resolved
 * post-task by resolveOutcomeFeedback() once the real correct/incorrect is known. */
function realize(c, s, pool, phase, reasonExtra) {
  const variant = chooseVariant(c, s); // provisional; final pick is post-task
  return {
    phase,
    bankId: c.task.id,
    stimulusId: stimulusIdOf(c.task),
    targetEmotion: c.emotion,
    domainUsed: c.domain,
    primeId: c.primeId,
    feedbackId: variant.id,
    comparisonUsed: variant.comparison,
    pct: c.pct,
    expectedOutcome: expectedOutcome(c.emotion),
    reason: {
      ...reasonExtra,
      snapshot: snapshot(s),
      variantChoiceBy: hasBothComparisons(c.task, c.domain, c.emotion)
        ? "sco"
        : "support_only",
    },
  };
}

/* ============================================================================
 * resolveOutcomeFeedback (v3) — POST-task variant resolution
 * Called at the result-reveal step, once realPerformance is known. Accuracy framing
 * is only credible when it agrees with the real answer, so the variant is chosen
 * HERE, not at selection. Returns the `displayed` record for the framed result.
 *
 * Contradiction handling (target emotion needs an outcome that didn't happen):
 *   - they did BETTER than a failure-target expected (SUCCESS) -> POSITIVE PIVOT to
 *     pride/relief, capitalising on the real success. Prime expectancy picks relief
 *     (was primed low) vs pride.
 *   - they did WORSE than a positive-target expected (FAILURE) -> GATED NEGATIVE PIVOT:
 *     capitalise the REAL failure, but only via a negative variant that clears the same
 *     harm/consent gates a planned negative would (PIVOT_GATES). Load is measured on
 *     FELT emotion, so an honest "you failed" already costs load — a shaped, confirmable
 *     negative is better than a muddy one. Prime + RT pick the emotion: rushed (fast-
 *     wrong) -> effort -> guilt; engaged (slow-wrong) -> ability -> shame. A relief setup
 *     (primed low + external) is left alone — a negative there contradicts the prime.
 *     If no negative clears the gates (e.g. at the cap, prior negative, low value) ->
 *     honest fallback, and off-target harvesting still labels whatever they feel.
 * ========================================================================== */
export function resolveOutcomeFeedback(
  selection,
  realPerformance,
  participant,
) {
  const task = taskById(selection.bankId);
  const fr = framingFor(task, selection.domainUsed);
  const domain = selection.domainUsed;
  const outcome = roundOutcome(realPerformance, task); // block tasks resolve on passMark, not correct>=1
  const fits = (v) =>
    !v.requiresOutcome ||
    v.requiresOutcome === "any" ||
    v.requiresOutcome === outcome;

  const all = fr.feedback[selection.targetEmotion] || [];
  const outcomeContingent = all.some(
    (v) => v.requiresOutcome && v.requiresOutcome !== "any",
  );
  let variants = all.filter(fits);
  let pivotedTo = null;

  if (!variants.length && outcomeContingent) {
    const primedLow = primeSetsExpectancy(fr, selection.primeId) === "low";
    if (outcome === "correct") {
      // better-than-expected SUCCESS under a negative target -> free POSITIVE pivot
      for (const e of primedLow ? ["relief", "pride"] : ["pride", "relief"]) {
        const cand = (fr.feedback[e] || []).filter(fits);
        if (cand.length) {
          variants = cand;
          pivotedTo = e;
          break;
        }
      }
    } else if (CONFIG.pivot.enabled && !primedLow) {
      // real FAILURE under a positive target -> GATED negative pivot (relief setup skipped).
      const order =
        rtBucket(realPerformance, task) === "rushed"
          ? ["guilt", "shame", "disappointment"] // fast-wrong -> effort
          : ["shame", "disappointment", "guilt"]; // engaged-wrong -> ability
      const neg = pickGatedNegativePivot(
        fr,
        fits,
        order,
        task,
        domain,
        participant,
      );
      if (neg) {
        variants = [neg.variant];
        pivotedTo = neg.emotion;
      }
    }
    if (!variants.length) {
      return {
        feedbackId: null,
        honestFallback: true,
        pivotedTo: null,
        emotionShown: null,
        comparisonUsed: "none",
        attribution: "none",
        requiresOutcome: outcome,
        pctRef: "self_score",
        referent: null,
        pct: null,
        framedText: null,
        resolvedFrom: outcome,
      };
    }
  } else if (!variants.length) {
    variants = all; // emotion isn't outcome-contingent
  }

  // SEVERITY CEILING (planned negatives only): the provisional pick already passed shame_hard_guard
  // / not_suspicious at selection, so resolution may soften DOWN or swap by outcome, never escalate.
  // Pivots aren't ceiled here because they were validated through PIVOT_GATES just above.
  if (!pivotedTo) {
    const provisional = all.find((v) => v.id === selection.feedbackId);
    const ceiling = provisional?.severity ?? Infinity;
    const capped = variants.filter((v) => (v.severity ?? 0) <= ceiling);
    if (capped.length) variants = capped;
  }

  // SCO: high-SCO -> comparison-heavy; then soften by severity under accumulated load
  const wantComparison = (participant.sco ?? 4) >= 4;
  variants = [...variants].sort(
    (a, b) =>
      cmpRank(b, wantComparison) - cmpRank(a, wantComparison) ||
      (a.severity ?? 0) - (b.severity ?? 0),
  );
  const variant = pivotedTo
    ? variants[0]
    : softenForLoad(variants, participant);
  if (!variant) {
    return {
      feedbackId: null,
      honestFallback: true,
      pivotedTo: null,
      emotionShown: null,
      comparisonUsed: "none",
      attribution: "none",
      requiresOutcome: outcome,
      pctRef: "self_score",
      referent: null,
      pct: null,
      framedText: null,
      resolvedFrom: outcome,
    };
  }

  const referent = variant.referent
    ? typeof variant.referent === "string"
      ? variant.referent
      : referentFor(selection.domainUsed)
    : null;
  const pct = drawPct(variant, task, participant);
  return {
    feedbackId: variant.id,
    emotionShown: pivotedTo || selection.targetEmotion,
    pivotedTo,
    comparisonUsed: variant.comparison,
    attribution: variant.attribution,
    requiresOutcome: variant.requiresOutcome || "any",
    pctRef: variant.pctRef || "self_score",
    referent,
    pct,
    framedText: fillTemplate(variant.template, { pct, referent }),
    resolvedFrom: outcome,
  };
}

/* ============================================================================
 * onTrialFinish — confirm label, update ledgers + pool, set distress flag
 * ========================================================================== */
export function onTrialFinish(realized, participant, pool, clock) {
  const L = participant.ledger;

  if (realized.phase === "calibration") {
    L.calibrationCount = (L.calibrationCount || 0) + 1;
    L.lastCalibrationOk =
      roundOutcome(realized.realPerformance, taskById(realized.bankId)) ===
      "correct";
    // TODO: refine participant.domainExpectancy + per-task believable band from real perf
    return;
  }

  const target = realized.targetEmotion;
  const task = taskById(realized.bankId); // realize() doesn't attach task; look it up
  const dom = realized.derived || (realized.derived = {});

  // LABEL = felt dominant emotion, not the target (off-target clips still count)
  const felt = feltDominant(realized.selfReport, task); // {emotion, value, clean} | null
  const feltE = felt?.emotion ?? null;
  const feltNeg = isNeg(feltE);

  L.attempts[target]++; // attempts key on what we AIMED at
  pushRecent(L.recentModalities, task.modality);
  pushRecent(L.recentDomains, realized.domainUsed);
  L.usedStimulusIds.push(stimulusIdOf(task)); // single-shot on the STIMULUS

  // ethics + sequencing follow what was FELT (null => neutral round, breaks the negative streak)
  if (feltNeg) {
    L.consecutiveNeg = isNeg(L.prevForConsec) ? L.consecutiveNeg + 1 : 1;
    L.consecutiveNegContext++; // # negatives actually felt (shame ramp)
  } else {
    L.consecutiveNeg = 0;
  }
  L.prevForConsec = feltE;
  L.lastEmotion = feltE;

  // credit: clean-core is the balancing spine; any confirmed adds bonus volume
  const confirmed = !!felt;
  if (confirmed) {
    L.confirmed[feltE]++;
    pool.confirmed[feltE]++;
    if (felt.clean) {
      L.confirmedClean[feltE]++;
      pool.confirmedClean[feltE]++;
    }
    if (feltNeg) L.cumNegLoad += EMOTION_PROFILE[feltE].cost;
    recordReferentClaim(realized, L); // norm-coherence bookkeeping
  }

  Object.assign(dom, {
    confirmed,
    feltDominant: feltE,
    target,
    cleanCore: !!felt?.clean,
    offTarget: confirmed && feltE !== target,
    inductionFailed: !confirmed,
  });

  // distress / suspicion: from probes or explicit signal
  if (detectDistress(realized, participant)) participant.flags.distress = true;
  if (detectSuspicion(realized, participant))
    participant.flags.suspicious = true;
}

/* ============================================================================
 * PHASE TRANSITIONS — evaluated at trial boundaries (cannot interrupt a trial)
 * ========================================================================== */
export function advancePhase(participant, pool, clock) {
  const p = participant;
  if (p.phase === "intake") {
    p.phase = "calibration";
    return;
  }

  if (p.phase === "calibration") {
    const done =
      (p.ledger.calibrationCount || 0) >= CONFIG.calibration.maxTasks;
    const exitOk = p.ledger.lastCalibrationOk !== false; // don't exit on a fail
    if (done && exitOk) p.phase = "main";
    return;
  }

  if (p.phase === "main") {
    if (
      p.flags.distress ||
      timeForClosing(clock, p) ||
      poolNegativesMet(pool) ||
      mainTrialsExhausted(p)
    ) {
      logNegLoadSnapshot(p, clock); // capture cap usage at the boundary
      p.phase = "positive_close";
    }
    return;
  }

  if (p.phase === "positive_close") {
    if (
      (p.ledger.closingCount || 0) >= CONFIG.closing.nTrials ||
      outOfTime(clock)
    )
      p.phase = "debrief";
    return;
  }
}

// closing trigger: dynamic reserve = nTrials * observed median trial time (fallback fixed)
function timeForClosing(clock, p) {
  const est =
    p.ledger.medianTrialMs ||
    CONFIG.closingReserveFallbackMs / CONFIG.closing.nTrials;
  const reserve = CONFIG.closing.nTrials * est;
  return clock.elapsedMs() >= CONFIG.totalBudgetMs - reserve;
}

/* ============================================================================
 * HELPER STUBS — fill during implementation / from pilot (kept obvious)
 * ========================================================================== */
const isNeg = (e) => e != null && EMOTION_PROFILE[e]?.valence === "neg";
const isSelfConscious = (e) => ["shame", "pride", "guilt"].includes(e);
const withinBand = (x, [lo, hi]) => x >= lo && x <= hi;
const poolDeficit = (pool, e) =>
  (pool.target[e] - pool.confirmedClean[e]) / pool.target[e]; // clean-core spine
const deficitSnapshot = (pool) =>
  Object.fromEntries(
    EMOTIONS.map((e) => [e, +poolDeficit(pool, e).toFixed(2)]),
  );
const passedGates = (c, s) =>
  GATES.map((g) => g.name).filter((n) => !feasibility(c, s).includes(n));
const taskById = (id) =>
  TRIAL_BANK.find((t) => t.id === id) ||
  CALIBRATION_BANK.find((t) => t.id === id);

function topValueDomains(p) {
  // domains sorted by identity value
  return Object.entries(p.domainValue)
    .sort((a, b) => b[1] - a[1])
    .map(([d]) => d);
}
function hasMatchingPrime(task, domain, exp) {
  return (framingFor(task, domain).primes || []).some(
    (pr) => pr.setsExpectancy === exp,
  );
}
function hasBothComparisons(task, domain, e) {
  const v = ((framingFor(task, domain).feedback || {})[e] || []).map(
    (x) => x.comparison,
  );
  return v.includes("individuating") && v.includes("normative_shared");
}
function pickPrimeId(task, domain, emotion) {
  const primes = framingFor(task, domain).primes || [];
  const req = EMOTION_PROFILE[emotion].requiresExpectancyViolation;
  if (req)
    return (primes.find((p) => p.setsExpectancy === req) || {}).id || null;
  // optional amplifier: ability for shame/pride, effort for guilt
  const frame =
    emotion === "guilt"
      ? "effort"
      : isSelfConscious(emotion)
        ? "ability"
        : "none";
  return (primes.find((p) => p.attributionFrame === frame) || {}).id || null;
}
function chooseVariant(c, s) {
  // PROVISIONAL only — authoritative softening + SCO pick happen in resolveOutcomeFeedback()
  // once the real outcome is known. (Cross-emotion fallback shame->guilt is a SELECTION-time
  // choice, not done here.) c.variant is already pinned by enumerateCandidates(); the
  // score-tie case is handled by seededTieBreak() in selectInduction(), not here.
  return c.variant;
}

/* ---- Seeded PRNG — lazily seeded per-participant so tie-breaks (and any other
 * randomness) are reproducible on replay from the same participantId + call
 * order, matching the file-header determinism guarantee. Mutates s.rngState. */
// Turn the participant ID into a numeric seed
function hashSeed(str) {
  let h = 1779033703 ^ str.length;
  for (let i = 0; i < str.length; i++) {
    h = Math.imul(h ^ str.charCodeAt(i), 3432918353);
    h = (h << 13) | (h >>> 19);
  }
  return (h ^ (h >>> 16)) >>> 0 || 1; // avoid a 0 seed (mulberry32 degenerates)
}
// Generate the next reproducible random value.
function nextRandom(s) {
  if (s.rngState == null) s.rngState = hashSeed(String(s.participantId ?? "seed"));
  let t = (s.rngState = (s.rngState + 0x6d2b79f5) | 0);
  t = Math.imul(t ^ (t >>> 15), t | 1);
  t ^= t + Math.imul(t ^ (t >>> 7), t | 61);
  return ((t ^ (t >>> 14)) >>> 0) / 4294967296;
}
// Use value to select one tied candidate and record debug information.
function seededTieBreak(tied, s) {
  const rngValue = nextRandom(s);
  const chosenIndex = Math.floor(rngValue * tied.length);
  return {
    picked: tied[chosenIndex],
    tiedCount: tied.length,
    tiedBankIds: tied.map((x) => x.c.task.id),
    chosenIndex,
    rngValue,
  };
}

// TODO stubs (return safe defaults so the skeleton runs):
function expectancyOk(v, exp) {
  return exp === "high" ? v >= CONFIG.caps.valueMin : v <= CONFIG.caps.valueMin;
}
function drawPct(variant, task, _s) {
  const [lo, hi] = variant.pct;
  return Math.round((lo + hi) / 2);
} // TODO seeded RNG
function scoFit(comparison, sco) {
  return comparison === "none" ? 0 : (sco ?? 4) / 7;
} // TODO
function valueFit(c, s) {
  return isSelfConscious(c.emotion) ? s.domainValue[c.domain] / 7 : 0.5;
}
function expectancyFit(c, s) {
  return EMOTION_PROFILE[c.emotion].requiresExpectancyViolation
    ? s.domainExpectancy[c.domain] / 7
    : 0.5;
}
function recentCount(arr, m) {
  return arr.filter((x) => x === m).length;
}
function sinceLast(arr, x) {
  const i = arr.lastIndexOf(x);
  return i < 0 ? Infinity : arr.length - 1 - i;
}
function pushRecent(arr, x) {
  arr.push(x);
  if (arr.length > 8) arr.shift();
}
function snapshot(s) {
  return {
    sco: s.sco,
    cumNegLoad: s.ledger.cumNegLoad,
    consecutiveNeg: s.ledger.consecutiveNeg,
    lastEmotion: s.ledger.lastEmotion,
    domainValue: { ...s.domainValue },
  };
}
function pickCalibrationTask(domain, _tier, _participant) {
  // use the family FAMILIARISATION blocks (honest feedback, reserved stimuli), never an
  // experimental single-shot task. Prefer one serving the participant's top domain.
  return (
    CALIBRATION_BANK.find((t) => t.domains.includes(domain)) ||
    CALIBRATION_BANK[0] ||
    TRIAL_BANK[0]
  );
}
function selectNeutralSpacer(p) {
  const t = TRIAL_BANK[0];
  return {
    phase: p.phase,
    bankId: t.id,
    domainUsed: t.domains[0],
    targetEmotion: null,
    primeId: null,
    feedbackId: null,
    reason: { note: "neutral spacer (no feasible target)" },
  };
}
function detectDistress() {
  return false;
} // TODO: probe-based rule + explicit opt-out button
function poolNegativesMet(pool) {
  return ["shame", "disappointment", "guilt"].every(
    (e) => pool.confirmedClean[e] >= pool.target[e],
  );
}
function mainTrialsExhausted() {
  return false;
} // TODO: optional hard cap on main trials
function outOfTime(clock) {
  return clock.elapsedMs() >= CONFIG.totalBudgetMs;
}

/* ---- v3 helpers --------------------------------------------------------- */
function framingFor(task, domain) {
  // per-domain framing, else flat fallback
  return (
    (task.framing && task.framing[domain]) || {
      primes: task.primes,
      feedback: task.feedback,
    }
  );
}
const stimulusIdOf = (task) => task.stimulusId || task.id; // single-shot key (shared across re-framings)
const expectedOutcome = (e) =>
  EMOTION_PROFILE[e]?.valence === "pos" ? "correct" : "incorrect";

// Round outcome for post-task variant resolution. Single-item tasks resolve on
// correct>=1; BLOCK tasks (rotation/IQA/future media families) resolve on the block
// PASS — proportion correct >= calibration.passMark — surfaced by the scoreFn as
// `passed` (fallback: compute from correct/total; final fallback: correct>=1).
function roundOutcome(realPerformance, task) {
  if (!realPerformance) return "incorrect";
  if (task?.unit === "block") {
    const passed =
      realPerformance.passed != null
        ? realPerformance.passed
        : realPerformance.total
          ? realPerformance.correct / realPerformance.total >=
            (task.calibration?.passMark ?? 0.5)
          : realPerformance.correct >= 1;
    return passed ? "correct" : "incorrect";
  }
  return realPerformance.correct >= 1 ? "correct" : "incorrect";
}
const primeSetsExpectancy = (
  fr,
  primeId, // expectancy the shown prime set (for pivot)
) =>
  ((fr.primes || []).find((p) => p.id === primeId) || {}).setsExpectancy ||
  "none";

// PILOT/OPEN: the negative-load ceiling may be modulated per participant (e.g. high domain
// expectancy -> easier ego hurt -> a lower cap; or a trait measure). Hook only — returns the
// configured base until a modulation rule is set from pilot data.
function effectiveNegLoadCap(s) {
  return CONFIG.caps.negLoadCap; // TODO pilot: f(base, expectancy/trait)
}

// Gates that apply to a POST-task negative PIVOT. The task/domain are already fixed (the trial ran),
// so placement gates (single_shot, modality/domain stacking) don't apply; only the harm/consent +
// credibility gates do — a pivot must clear exactly what a planned negative would on those.
const PIVOT_GATES = [
  "credibility",
  "value_threshold",
  "shame_hard_guard",
  "expectancy_violable",
  "no_consecutive_neg",
  "negload_under_cap",
  "not_distressed",
  "not_suspicious",
  "norm_coherent",
];
const pivotFeasible = (c, s) =>
  GATES.filter((g) => PIVOT_GATES.includes(g.name)).every((g) => g.test(c, s));

function pickGatedNegativePivot(fr, fits, order, task, domain, s) {
  for (const emotion of order) {
    for (const variant of (fr.feedback[emotion] || []).filter(fits)) {
      const pct = drawPct(variant, task, s);
      if (pivotFeasible({ emotion, task, domain, variant, pct }, s))
        return { emotion, variant };
    }
  }
  return null;
}

function rtBucket(realPerformance, task) {
  // rushed (effort) vs engaged (ability)
  // block tasks measure WHOLE-BLOCK rt -> compare against the block median, not per-item
  const median =
    task.unit === "block"
      ? (task.calibration?.blockRtMs ??
        (task.calibration?.medianRtMs || 5000) * (task.stimulus?.block?.n ?? 1))
      : task.calibration?.medianRtMs || 20000;
  const rt = realPerformance?.rtMs ?? median;
  return rt < CONFIG.pivot.rushFrac * median ? "rushed" : "engaged";
}

// Snapshot negative-load usage at the main->close boundary (pilot: set the cap against the realized
// cost MIX, not the trial count, since opportunistic pivots skew the mix toward what people fail).
function logNegLoadSnapshot(p, clock) {
  const L = p.ledger,
    byEmotion = {};
  for (const e of EMOTIONS)
    if (EMOTION_PROFILE[e].valence === "neg")
      byEmotion[e] = {
        confirmed: L.confirmed[e],
        cost: EMOTION_PROFILE[e].cost,
        load: L.confirmed[e] * EMOTION_PROFILE[e].cost,
      };
  return (L.negLoadAtClose = {
    cumNegLoad: L.cumNegLoad,
    cap: effectiveNegLoadCap(p),
    elapsedMs: clock?.elapsedMs?.() ?? null,
    byEmotion,
  });
}

function feltDominant(selfReport, task) {
  // argmax over EMOTIONS -> the label
  const cc = task.response.cleanCore;
  let top = null;
  for (const e of EMOTIONS)
    if (!top || selfReport[e] > top.value)
      top = { emotion: e, value: selfReport[e] };
  if (!top || top.value < cc.dominantMin) return null; // induction failed: nothing confirmed
  const clean = EMOTIONS.filter((e) => e !== top.emotion).every(
    (e) => selfReport[e] <= cc.othersMax,
  );
  return { emotion: top.emotion, value: top.value, clean };
}

function credibleBand(c) {
  // credibility gate, branched by pctRef
  const cal = c.task.calibration,
    ref = c.variant.pctRef || "self_score";
  if (!withinBand(c.pct, c.variant.pct)) return false;
  if (ref === "peer_success") {
    // "X% of <referent> got it" -> near REAL pass rate
    const real = Math.round((cal.realPSuccess ?? 0.5) * 100);
    return Math.abs(c.pct - real) <= CONFIG.caps.peerNormSlackPct;
  }
  const band =
    ref === "self_speed"
      ? (cal.plausiblePctSpeed ?? cal.plausiblePct)
      : cal.plausiblePct;
  return withinBand(c.pct, band);
}

// norm-coherence (OPEN DECISION): a fabricated norm implies the in-group is competent or weak;
// don't let that flip for the SAME referent within a participant. Heuristic — TODO refine
// (e.g. track per referent x task-family, and decide whether pride-above-group counts as a claim).
function claimDirection(v) {
  if (v.pctRef === "peer_success") return "competent"; // most of the in-group succeeded
  if (v.attribution === "task_difficulty") return "weak"; // "the set most <group> miss" (relief frame)
  return null;
}
function normCoherent(c, s) {
  const ref = c.variant.referent;
  if (!ref || typeof ref !== "string") return true;
  const dir = claimDirection(c.variant),
    prior = s.ledger.referentClaims[ref];
  return !prior || !dir || prior === dir;
}
function recordReferentClaim(realized, L) {
  const ref = realized.displayed?.referent;
  if (!ref) return;
  const dir = claimDirection(realized.displayed || {});
  if (dir && !L.referentClaims[ref]) L.referentClaims[ref] = dir;
}

// resolveOutcomeFeedback support
const cmpRank = (
  v,
  wantComparison, // order variants by SCO preference
) =>
  wantComparison
    ? v.comparison !== "none"
      ? 1
      : 0
    : v.comparison === "none"
      ? 1
      : 0;
function softenForLoad(variants, s) {
  // step down severity as negative load accrues
  if (!variants.length) return undefined;
  const overHalf = s.ledger.cumNegLoad >= CONFIG.caps.negLoadCap / 2;
  return overHalf
    ? [...variants].sort((a, b) => (a.severity ?? 0) - (b.severity ?? 0))[0]
    : variants[0];
}
const referentFor = (domain) =>
  ({
    design: "designers",
    media: "media students",
    computing: "computing students",
  })[domain] || `${domain} students`;
function fillTemplate(t, vars) {
  return (t || "").replace(/\$\{(\w+)\}/g, (_, k) => vars[k] ?? `\${${k}}`);
}
function detectSuspicion() {
  return false;
} // TODO: probe-based (boredom/confusion + "none") + manipulation check

/* ============================================================================
 * jsPsych WIRING
 *
 * BANK LOADING
 *   Import TRIAL_BANK + CALIBRATION_BANK from trial_bank.js, which in turn
 *   imports the pre-generated static files from stimuli/ (iqa_bank.js,
 *   rotation_bank.js, reasoning_bank.js, …). Do NOT import the generator
 *   modules (iqa_subbank.js etc.) into jsPsych — they write files and pull
 *   Node-only dependencies.
 *
 * PER-TRIAL RENDERING SEQUENCE (one looping timeline node, FUNCTION params):
 *   1. advancePhase(participant, pool, clock)      // phase boundary check
 *   2. sel = selectNextTrial(participant, pool, clock)
 *   3. Lookup task = TRIAL_BANK.find(t => t.id === sel.bankId)
 *   4. If task.instructions: show instruction string above the stimulus.
 *      t0 for RT scoring is taken from gaze_offset_text (gaze leaving the
 *      instruction area), NOT from stimulus onset, so instructions do not
 *      contaminate response-time data.
 *   5. If sel.primeId: show the prime text (from framingFor(task, sel.domainUsed)
 *      .primes.find(p => p.id === sel.primeId).text) before stimulus onset.
 *   6. Run task stimulus component (task.stimulus.component).
 *   7. Score: realPerformance = task.stimulus.scoreFn(responseData).
 *      scoreFn must return { correct, total, rtMs } for single-item tasks
 *      or { correct, total, rtMs, passed } for unit:"block" tasks.
 *   8. displayed = resolveOutcomeFeedback(sel, realPerformance, participant)
 *   9. Show framed result text (displayed.framedText) + capture window.
 *   10. Show self-report sliders (PROBES, Likert 1-7).
 *
 * on_finish:
 *   Build the realized record by merging sel + realPerformance + capture +
 *   selfReport, then call onTrialFinish(realized, participant, pool, clock).
 *   Write the full sel.reason trace to jsPsych.data for sequence modelling.
 *
 * loop_function:
 *   Continue while participant.phase !== "debrief".
 *
 * conditional_function (or timeline branch):
 *   When phase === "debrief", run the debrief + data-withdrawal node.
 *   The distress flag forces phase → positive_close on the next boundary,
 *   so distress always routes through a positive close before debrief.
 * ========================================================================== */
