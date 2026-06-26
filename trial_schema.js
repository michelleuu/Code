/* ============================================================================
 * Trial metadata schema — achievement-emotion FER study (Objective 1)  v2
 * ----------------------------------------------------------------------------
 * Design decisions reflected in this version:
 *   - FULLY-SPECIFIED, SINGLE-SHOT tasks. No templating, no item pools. Each task
 *     has fixed stimuli and ONE piloted difficulty, so its believable-score band is
 *     stable and the controller's options are enumerable ahead of time. Populate the
 *     bank by copy-paste-then-tweak. (No per-task maxUses/cooldown — each task is used
 *     at most once; "don't tip them off" lives at the modality/domain level instead.)
 *   - Difficulty is fixed per task and TIES TO which emotions it can credibly carry:
 *     a hard task can show a believable bottom-percentile (shame/disappointment); an
 *     easy task a believable top-percentile (pride/relief). Different difficulty =
 *     different bank entry.
 *   - PRIMES carry two orthogonal properties: setsExpectancy (low|high|none) and
 *     attributionFrame (ability|effort|none). Relief/disappointment REQUIRE an
 *     expectancy violation (encoded on the feedback variant). Shame/pride/guilt fire
 *     single-round and may be OPTIONALLY amplified by an attribution prime. (Priming
 *     success + then failing = a shame+disappointment blend; a "pure" shame prime
 *     loads attribution with setsExpectancy:none.)
 *   - FEEDBACK is per-(emotion × comparison): each supported emotion lists the
 *     variants the task can carry credibly. A task that has no sensible normative
 *     ("most people") reading simply omits the normative variant. Social-comparison
 *     orientation (SCO/INCOM) is NOT in the metadata — it lives in participant state
 *     and the controller uses it to choose between individuating vs normative variants.
 *   - SIGNALS are post-hoc only. The controller runs on PROBES + real performance +
 *     participant/pool state. Raw signals are recorded for the later per-signal
 *     (face / head-pose / posture / combined) modelling; au_va_change is an offline
 *     segmentation aid, never a controller input.
 *   - Balance target = CONFIRMED labels in the POOL. Shame is priority + capped:
 *     pushed by yield-per-attempt + recruitment, not by raising attempt rate.
 *
 *   --- v3 additions (reasoning-bank refinements) ---------------------------
 *   - STIMULUS / FRAMING SPLIT. Difficulty is a property of the STIMULUS (fixed,
 *     single-shot, piloted band). Framing (primes + feedback) is a separate layer
 *     keyed by DOMAIN, so one stimulus can be aimed at different identities without
 *     being duplicated. `framing` is OPTIONAL: a task may still carry flat, domain-
 *     invariant `primes`/`feedback` and the controller falls back to them. SINGLE-
 *     SHOT now gates on `stimulusId` (shared across re-framings), not on `id`.
 *   - OUTCOME-CONTINGENT FEEDBACK. Accuracy framing is only credible if it AGREES
 *     with the real answer, so a variant may carry `requiresOutcome`
 *     (correct|incorrect|any) and is resolved AFTER the task from real performance
 *     (the sibling of the relief/disap expectancy resolution), not at selection.
 *     `pctRef` says what the percentile refers to: self_score (the v2 default),
 *     self_speed (controllable even on ONE item), or peer_success (a fabricated
 *     in-group pass-rate -> credibility checked against realPSuccess, not the
 *     percentile band). `referent` names the in-group the norm invokes — a domain
 *     the participant VALUES, since proximate referents dominate the felt comparison.
 *   - OFF-TARGET HARVESTING. The label is the FELT emotion, not the target. A clip
 *     is credited to whatever the participant confirms (relief targeted, pride felt
 *     -> counts as pride). Ethics/sequencing (cumNegLoad, consecutiveNeg) also follow
 *     what was FELT. BALANCE runs on the CLEAN-CORE spine (confirmedClean); all-
 *     confirmed (incl. multi-label) is bonus volume. "induction failed" = NO confirmed
 *     label at all; "off-target" is a success, not a failure.
 * ========================================================================== */

/* ---- Controlled vocabularies ------------------------------------------- */
export const EMOTIONS = ["pride", "relief", "disappointment", "shame", "guilt"];
export const PROBES = [...EMOTIONS, "anxiety", "confusion", "boredom", "none"]; // sliders shown each round
export const DOMAINS = ["design", "media", "computing"];
export const MODALITIES = [
  "visuospatial",
  "numeric",
  "logic",
  "perceptual",
  "verbal_creative",
];
export const ATTRIBUTION = [
  "ability",
  "effort",
  "ability_effort",
  "task_difficulty",
  "none",
]; // Weiner cause
export const COMPARISON = ["individuating", "normative_shared", "none"]; // feedback MECHANISM tag
export const EXPECTANCY = ["low", "high", "none"];
export const OUTCOME = ["correct", "incorrect", "any"]; // variant.requiresOutcome (v3)
export const PCTREF = ["self_score", "self_speed", "peer_success"]; // what variant.pct refers to (v3)
export const SIGNALS = [
  "face_au",
  "head_pose",
  "posture",
  "gaze",
  "gsr",
  "hrv",
]; // post-hoc study only

/* ---- Emotion profile (controller reads; ethics + sequencing live here) ----
 * cost                     : affective/ethical load -> caps + no-two-negatives-in-a-row
 * requiresExpectancyViolation : "low" | "high" | null. Relief needs a prior LOW
 *                            expectancy then success; disappointment a prior HIGH
 *                            expectancy then failure. Others fire single-round.
 * priority                 : oversample + monitor (shame: detrimental in education) */
export const EMOTION_PROFILE = {
  pride: { valence: "pos", cost: 0, requiresExpectancyViolation: null },
  relief: { valence: "pos", cost: 0, requiresExpectancyViolation: "low" },
  disappointment: {
    valence: "neg",
    cost: 1,
    requiresExpectancyViolation: "high",
  },
  guilt: { valence: "neg", cost: 2, requiresExpectancyViolation: null },
  shame: {
    valence: "neg",
    cost: 3,
    requiresExpectancyViolation: null,
    priority: true,
  },
};

/* ---- Global rig / delivery config (same every trial) ------------------- */
export const RIG = {
  delivery: "screen_only", // no researcher commentary, ever
  captureWindowMs: 10000, // generous container; the labeled instance is a SEGMENT of this
  baselinePreMs: 2000, // neutral pre-reveal baseline inside the clip
  onsetMarkers: ["gaze_offset_text", "au_va_change"], // pro eye-tracker -> reliable reading-offset t0
  signals: [...SIGNALS], // record all; signalsPresent re-logged per clip
  settleDelayMs: 800, // beat between task-end and result reveal (task arousal decays)
};

/* ---- Anti-stacking (replaces per-task cooldown) ------------------------ *
 * Keeps the controller from running same-modality/-domain trials back-to-back,
 * which would tip participants off and erode bogus-feedback credibility.       */
export const ANTI_STACK = { sameModalityCooldown: 2, sameDomainCooldown: 1 };

/* ---- Framing layer (v3) ------------------------------------------------- *
 * A task's primes + feedback may be given EITHER flat (domain-invariant, the v2
 * shape the controller still accepts) OR under `framing`, keyed by domain:
 *   framing: { computing: { primes:[...], feedback:{...} }, design: {...} }
 * Use framingForDomains() when the same framing applies to several domains so it
 * isn't hand-duplicated. Feedback variants gain three OPTIONAL fields:
 *   requiresOutcome : "correct" | "incorrect" | "any"   (resolved post-task)
 *   pctRef          : "self_score" | "self_speed" | "peer_success"
 *   referent        : in-group a fabricated norm invokes (string, or true -> fill
 *                     from the routed domain). Used by peer_success variants.       */
export const framingForDomains = (domains, framing) =>
  Object.fromEntries(domains.map((d) => [d, framing]));

/* ============================================================================
 * TRIAL BANK — assembled in trial_bank.js, NOT here.
 *
 * The live bank is composed from pre-generated static files in stimuli/:
 *   iqa_bank.js, rotation_bank.js, reasoning_bank.js (and future families).
 * The controller imports TRIAL_BANK + CALIBRATION_BANK from trial_bank.js.
 * This schema file exports only vocabularies, state templates, and helpers.
 *
 * Bank-width rule of thumb (size during pilot): for every
 * (domain x emotion x comparison) cell the controller can route to, have
 *   #tasks  >=  max times any single participant could be sent to that cell,
 * or a participant exhausts the cell and you're forced to repeat a task.
 *
 * Tasks list ONLY the feedback variants they can carry credibly given fixed
 * difficulty; presence of a variant = support for that (emotion, comparison).
 * Each task also carries:
 *   instructions : short neutral string shown above the stimulus before any
 *                  framing fires; invariant across all tasks of this family;
 *                  taught in familiarisation. t0 for RT taken from
 *                  gaze_offset_text (gaze leaving the instruction).
 * ========================================================================== */

/* ============================================================================
 * PARTICIPANT STATE — set at intake, updated every trial's on_finish.
 *  - domainValue gates shame/pride (does failure here threaten the self?)
 *  - domainExpectancy gates disappointment/relief (can an expectancy be set & violated?)
 *  - sco (INCOM) weights the individuating-vs-normative feedback choice
 * ========================================================================== */
export const PARTICIPANT_STATE_TEMPLATE = {
  participantId: null,
  sco: null, // 1-7 social-comparison orientation (INCOM)
  domainValue: { design: null, media: null, computing: null }, // 1-7 identity / "this is me"
  domainExpectancy: { design: null, media: null, computing: null }, // 1-7 expected performance (intake + calibration)
  calibration: {}, // per-task real pSuccess + median RT from warm-up
  ledger: {
    // CREDIT + ethics key on the FELT dominant emotion (v3), not the target.
    confirmed: { pride: 0, relief: 0, disappointment: 0, shame: 0, guilt: 0 }, // any confirmed (incl. multi-label)
    confirmedClean: {
      pride: 0,
      relief: 0,
      disappointment: 0,
      shame: 0,
      guilt: 0,
    }, // single-dominant spine
    attempts: { pride: 0, relief: 0, disappointment: 0, shame: 0, guilt: 0 }, // keyed on TARGET (what we aimed at)
    lastEmotion: null, // last FELT emotion (null if induction failed)
    prevForConsec: null,
    consecutiveNeg: 0,
    consecutiveNegContext: 0, // # negatives actually FELT so far (shame ramp guard)
    cumNegLoad: 0, // sum of cost over FELT negatives
    recentModalities: [], // for ANTI_STACK
    recentDomains: [], // for ANTI_STACK
    usedStimulusIds: [], // single-shot enforcement (on STIMULUS, not framing id)
    referentClaims: {}, // {referent: "competent"|"weak"} norm-coherence (OPEN DECISION)
    negLoadAtClose: null, // snapshot of cap usage at the main->close boundary
  },
  flags: { distress: false, suspicious: false },
  phase: "intake", // intake -> calibration -> induction -> positive_close -> debrief
};

/* ---- POOL STATE — global; drives the deficit push across participants ---- */
export const POOL_STATE_TEMPLATE = {
  target: {
    pride: 200,
    relief: 200,
    disappointment: 200,
    shame: 200,
    guilt: 200,
  }, // clean-core quotas
  confirmedClean: {
    pride: 0,
    relief: 0,
    disappointment: 0,
    shame: 0,
    guilt: 0,
  }, // BALANCING SPINE -> deficit
  confirmed: { pride: 0, relief: 0, disappointment: 0, shame: 0, guilt: 0 }, // all-confirmed (bonus volume)
  // deficit(e) = (target-confirmedClean)/target -> priority weight. Off-target/multi-label
  // confirmations add to `confirmed` only. Capped emotions (shame, guilt) are pushed via
  // yield-per-attempt + recruitment, not attempt rate.
};

/* ============================================================================
 * REALIZED TRIAL — what the controller produces and logs (full decision trace).
 * Example: a shame induction on the hard logic task, ability-primed, individuating
 * (the only comparison this task supports for shame, so SCO didn't decide it).
 * ========================================================================== */
export const REALIZED_TRIAL_EXAMPLE = {
  trialUid: "P017_t08",
  participantId: "P017",
  bankId: "seq_hard_01",
  ordinalPosition: 8,

  selection: {
    targetEmotion: "shame",
    domainUsed: "computing",
    primeId: "p_abilityDiag", // optional shame amplifier (no success promise -> avoids disap. blend)
    feedbackId: "shame_mild", // softened variant chosen given cumNegLoad
    comparisonUsed: "individuating",
    pct: 12, // drawn from variant.pct ∩ task.plausiblePct
    reason: {
      poolDeficit: { shame: 0.71, disappointment: 0.44, guilt: 0.3 }, // at decision time
      snapshot: {
        sco: 5,
        cumNegLoad: 2,
        consecutiveNeg: 0,
        lastEmotion: "relief",
        domainValue: { design: 4, media: 3, computing: 6 },
        domainExpectancy: { design: 4, media: 3, computing: 5 },
      },
      gatesPassed: [
        "credibility",
        "value_threshold",
        "no_consecutive_neg",
        "negload_under_cap",
        "modality_not_stacked",
        "not_distressed",
      ],
      variantChoiceBy: "support_only", // would be "sco" where both comparison variants exist
    },
  },

  realPerformance: { correct: 1, total: 6, rtMs: 21800 }, // logged, NOT shown
  // feedback variant RESOLVED post-task from realPerformance (incorrect here):
  displayed: {
    pct: 12,
    framedText:
      "You're in the bottom 12% — logical sequencing may not be your strength.",
    attribution: "ability",
    comparison: "individuating",
    requiresOutcome: "incorrect",
    pctRef: "self_score",
    referent: null,
  },

  capture: {
    files: { face: "P017_t08_face.mp4", scene: "P017_t08_scene.mp4" },
    revealTsMs: 0,
    onset: { gaze_offset_text_ms: 2150, au_va_change_ms: 2600 }, // reading-offset vs expression-onset
    signalsPresent: ["face_au", "head_pose", "posture", "gaze", "gsr", "hrv"], // provenance for per-signal study
    baselineWindowMs: [-2000, 0],
    expressionSegmentMs: [2150, 9000], // DERIVED labeled instance (onset->offset)
  },

  selfReport: {
    shame: 6,
    guilt: 3,
    disappointment: 4,
    pride: 1,
    relief: 1,
    anxiety: 2,
    confusion: 1,
    boredom: 1,
    none: 1,
  }, // the FER ground truth
  // LABEL = felt dominant, not target. Here target===felt (on-target). If we had targeted
  // relief and the participant rated pride 6 / others low, derived would instead read:
  //   { confirmed: true, feltDominant: "pride", target: "relief", cleanCore: true, offTarget: true, inductionFailed: false }
  // -> credited to PRIDE on the clean spine, ethics keyed on pride (cost 0). A failed
  //    induction (no rating >= dominantMin) -> { confirmed: false, inductionFailed: true }.
  derived: {
    confirmed: true,
    feltDominant: "shame",
    target: "shame",
    cleanCore: true,
    offTarget: false,
    inductionFailed: false,
  },

  postHoc: { suspicion: false },
};

/* ============================================================================
 * CONTROLLER + jsPsych WIRING (signatures only)
 *
 *   selectNextTrial(participant, pool, bank) -> {
 *     bankId, targetEmotion, domainUsed, primeId|null, feedbackId, comparisonUsed, pct
 *   }
 *     1. Rank emotions by pool deficit (priority weight; shame oversampled).
 *     2. Keep FEASIBLE (emotion x task x variant) options via gates:
 *          credibility        - pct ∈ variant.pct ∩ believable band; the band depends on pctRef
 *                               (self_score/_speed -> plausiblePct; peer_success -> near realPSuccess)
 *          value_threshold    - shame/pride: domainValue[domain] >= threshold (a LOWER floor for
 *                               generalAbility tasks, whose self-relevance isn't domain-specific)
 *          expectancy_violable- relief/disap: domainExpectancy + a matching prime in framing[domain]
 *          no_consecutive_neg / negload_under_cap / not_distressed / not_suspicious
 *          norm_coherent      - don't flip an in-group (referent) claim within a participant (OPEN)
 *          single_shot        - stimulusId(task) ∉ usedStimulusIds   (gates on STIMULUS)
 *          modality/domain_not_stacked - per ANTI_STACK
 *     3. Pick task + domain; pick comparison variant by participant.sco where the task
 *        offers both (else the only one); soften shame->mild / ->guilt under load;
 *        optionally attach an attribution prime (ability for shame/pride, effort for guilt).
 *
 *   resolveOutcomeFeedback(selection, realPerformance, participant)   // v3, POST-task
 *     - among the target emotion's variants, pick the one whose requiresOutcome matches the
 *       real correct/incorrect; choose comparison by SCO; soften under load; draw pct; fill referent.
 *     - if the outcome CONTRADICTS the target: a better-than-expected SUCCESS pivots to a
 *       fabricated positive (pride/relief); an unexpected FAILURE under a positive target pivots
 *       to a GATED negative (prime+RT pick guilt vs shame; must clear the harm/consent gates),
 *       else degrades to honest feedback (off-target harvesting still labels what they feel).
 *
 *   onTrialFinish(realized, participant, pool)
 *     - feltDominant = argmax(selfReport over EMOTIONS); confirmed if >= dominantMin
 *     - CREDIT + ethics key on feltDominant (off-target counts); attempts key on target
 *     - clean-core -> pool.confirmedClean[felt]++ (spine); any confirmed -> pool.confirmed[felt]++
 *     - update cumNegLoad/consecutiveNeg from FELT; record referent claim; set distress/suspicion
 *
 * jsPsych: one looping timeline node with FUNCTION-valued params. See the
 * jsPsych wiring section in controller.js for the full per-trial sequence
 * (instructions → prime → task → score → resolveOutcomeFeedback → capture
 * → sliders → onTrialFinish). loop_function stops when phase === "debrief".
 * Write the full selection.reason trace to jsPsych.data for later modelling.
 * ========================================================================== */
