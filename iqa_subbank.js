/* ============================================================================
 * IQA sub-bank — achievement-emotion FER study (Objective 1)
 * ----------------------------------------------------------------------------
 * Image-quality discrimination: a 2-alternative forced choice — left or right image,
 * "which is lower quality?" — between a pristine reference and a distorted version.
 * Left/right placement is randomised at generation time (baked into the pre-generated
 * bank) so correctResp is POSITIONAL ("left"|"right") and varies across pairs: there
 * is no learnable pattern across trials. The key is known BY CONSTRUCTION (the
 * distorted file is always the lower-quality image), so this genuinely supports
 * self_score on "recognising visual differences". Difficulty = how subtle the
 * distortion is (its mean-opinion score, MOS). Zero language load.
 *
 * --- Why this one is CONCRETE, not placeholder slots ------------------------
 * Unlike the VAST-R / ETS families (secure content + keys you must obtain), the
 * IQA databases are openly downloadable WITH per-image MOS, and the answer key is
 * intrinsic (the distorted file). So this file references REAL databases,
 * distortion types, levels, reference IDs and filename conventions. The only
 * deferred numbers are (a) the exact per-image MOS, loaded from the database's
 * own MOS file by loadMos() rather than hand-copied, and (b) the cohort
 * believable bands, set from the ~5-person pilot — the same calibration step
 * every bank in this study defers. No item content or keys are hand-filled here.
 *
 * --- Stimulus source --------------------------------------------------------
 * Built on KADID-10k (81 references x 25 distortion types x 5 levels; crowdsourced
 * MOS ~[1,5], higher = better quality). The large reference set gives many distinct
 * single-shot blocks for spreading the scarce shame clips. One database per run so
 * the believable band stays single-valued (we settled on KADID; TID2013 dropped).
 * The shipped dmos.csv confirms the filename convention used below (references
 * "I01.png".."I81.png"; distorted "I<ref>_<type>_<lvl>.png", all zero-padded to 2).
 * Research-use; cite KADID-10k.
 *
 * --- Unit / scoring ---------------------------------------------------------
 * unit:"block" (a single 2AFC judgment is binary). Each task is a block of n
 * pairs at ONE difficulty band, over DISTINCT reference images. scoreFn returns
 * { correct, total, rtMs, passed } where passed = (correct/total >= passMark);
 * resolveOutcomeFeedback() must read `passed` for these (see media_common.js
 * INTEGRATION TODO). Displayed percentile is fabricated/decoupled as everywhere.
 * ========================================================================== */

import { PROBES } from "./trial_schema.js";
import { buildMediaTask, TIER_CALIB } from "./media_common.js";

/* ---- Database structural config (KADID-10k; conventions confirmed by dmos.csv) -- */
const DATABASES = {
  kadid: {
    label: "KADID-10k",
    dir: "stimuli/iqa/kadid",
    nRefs: 81,
    mosScale: [1, 5], mosHigherIsBetter: true,     // MOS ~1 worst .. 5 best
    ext: "png",
    // KADID naming (confirmed by dmos.csv): reference "I01.png".."I81.png";
    // distorted "I<ref>_<type>_<lvl>.png", ref/type/lvl zero-padded to 2.
    refFile:  (ref) => `I${pad2(ref)}.png`,
    distFile: (ref, type, lvl) => `I${pad2(ref)}_${pad2(type)}_${pad2(lvl)}.png`,
    mosFile:  "dmos.csv",                            // cols: dist_img, ref_img, dmos, var
  },
};

/* ---- Media-relevant distortion subset (named; INDICES = VERIFY per database) -- *
 * Chosen so failure reads as "I missed a real image flaw", the way a media pro
 * would catch it: compression, blur, noise, colour, contrast. Skip the exotic
 * synthetic types (eccentricity patches, colour blocks) that don't read as craft. */
const DIST_TYPES = {
  kadid: [   // KADID type indices — VERIFY the index->name mapping against the type table
    { type: 10, name: "jpeg" }, { type: 9, name: "jpeg2000" }, { type: 1, name: "gaussian_blur" },
    { type: 11, name: "white_noise" }, { type: 7, name: "colour_saturation" }, { type: 25, name: "contrast" },
  ],
};

/* ---- Difficulty model -----------------------------------------------------
 * Discrimination difficulty tracks how close the distorted MOS sits to pristine:
 * subtle (near-pristine) = HARD to tell apart; severe = EASY. The principled axis
 * is the MOS itself; distortion LEVEL is an ordered proxy within a type (KADID
 * levels 1=mild..5=severe), used to compose blocks before the MOS loader runs.
 * TIER_FROM_MOS cutoffs are PLACEHOLDERS — set from the database's MOS spread. */
const TIER_LEVELS = { hard: [1, 2], mid: [3], easy: [4, 5] };   // mild=subtle=hard; severe=easy
export const TIER_FROM_MOS = (mosNorm) =>                        // mosNorm in [0,1], 1 = pristine
  (mosNorm == null ? null : mosNorm >= 0.66 ? "hard" : mosNorm >= 0.33 ? "mid" : "easy");

/* ---- Ability wording, domains, and task instructions ----------------------- */
const IQA_ABILITY      = { media: "image-quality judgment", design: "visual-fidelity judgment" };
const IQA_DOMAINS      = ["media", "design"];               // identity-specific (NOT generalAbility); computing omitted
const IQA_INSTRUCTIONS = "Which image looks lower quality?"; // neutral; taught verbatim in familiarisation;
                                                             // rendered above the two images before framing fires

/* ---- Block plan: how many single-shot blocks per tier; n pairs per block ---- *
 * Hard-weighted: shame is the scarce, priority emotion -> spread across stimuli.
 * Sizes mirror rotation (~3-6 s/pair; n=8 easy/mid, n=6 hard fits the slot). IQA
 * is one of three media families, so it isn't over-produced. ~16 blocks.          */
const BLOCK_PLAN = { easy: { count: 4, n: 8 }, mid: { count: 4, n: 8 }, hard: { count: 8, n: 6 } };
const RESERVED_REFS = [1, 2, 3, 4];                    // familiarisation only; never in experimental blocks

const DB = DATABASES.kadid;                            // the database we use
const TYPES = DIST_TYPES.kadid;

/* ---- One 2AFC pair record — left/right assigned at generation time ----------
 * correctResp is POSITIONAL ("left" | "right") so it varies across pairs and the
 * component needs no logic: it just shows pair.left and pair.right, and scores
 * against pair.correctResp. distFile is kept as a private field for loadMos()
 * to look up MOS by filename; the component does not use it.                     */
const pair = (ref, t, lvl) => {
  const refPath  = `${DB.dir}/${DB.refFile(ref)}`;
  const distPath = `${DB.dir}/${DB.distFile(ref, t.type, lvl)}`;
  const distLeft = Math.random() < 0.5;
  return {
    db: DB.label, refId: ref, distType: t.type, distName: t.name, level: lvl,
    left:  distLeft ? distPath : refPath,     // what the component shows on the left
    right: distLeft ? refPath  : distPath,    // what the component shows on the right
    distFile: distPath,                       // private: loadMos() key — component ignores
    correctResp: distLeft ? "left" : "right", // varies per pair; no learnable pattern
    mos: null,                                // filled by loadMos() from DB.mosFile
  };
};

// deterministic distinct-reference cursor (cycles if exhausted), skipping reserved refs
function refCursor() {
  const pool = []; for (let r = 1; r <= DB.nRefs; r++) if (!RESERVED_REFS.includes(r)) pool.push(r);
  let i = 0; return () => pool[i++ % pool.length];
}
// deterministic type/level cursors so a block mixes distortion types at its tier band
const cycle = (arr) => { let i = 0; return () => arr[i++ % arr.length]; };

function makeBlockPairs(tier, n, nextRef, nextType) {
  const levels = TIER_LEVELS[tier], out = [];
  for (let i = 0; i < n; i++) out.push(pair(nextRef(), nextType(), levels[i % levels.length]));
  return out;   // distinct reference per pair within the block
}

/* ---- Emit the bank (deterministic) ----------------------------------------- */
function emit() {
  const nextRef = refCursor(), nextType = cycle(TYPES), out = [];
  for (const tier of ["easy", "mid", "hard"]) {
    const { count, n } = BLOCK_PLAN[tier];
    for (let i = 1; i <= count; i++) {
      const id = `iqa_${tier}_${pad2(i)}`;
      const pairs = makeBlockPairs(tier, n, nextRef, nextType);
      out.push(buildMediaTask({
        id, name: `Image-quality discrimination — ${tier} block ${i} (${DB.label})`,
        domains: IQA_DOMAINS, modality: "perceptual", languageLoad: "low",
        difficultyTier: tier, abilityByDomain: IQA_ABILITY, floorLimited: true,
        instructions: IQA_INSTRUCTIONS,
        stimulus: {
          component: "iqa2afcBlock", scoreFn: "scoreIqa2afcBlock", response: "choice2afc",
          measures: ["correct", "rtMs"],
          block: { n, pairs },
        },
        calibration: {
          ...TIER_CALIB[tier],                          // accuracy/speed/peer bands + passMark (pilot)
          db: DB.label, tierLevels: TIER_LEVELS[tier],
          blockRtMs: n * TIER_CALIB[tier].medianRtMs,   // rough; refine from pilot
          // loadMos() (below) fills per-pair mos and reseeds realPSuccess from the
          // MOS gap; plausiblePct[Speed] + passMark stay tier defaults until pilot.
        },
      }));
    }
  }
  return out;
}

export const IQA_SUBBANK = emit();   // ~16 single-shot blocks (4 easy / 4 mid / 8 hard)

/* ---- MOS loader -----------------------------------------------------------
 * Loads KADID-10k's own dmos.csv (cols: dist_img, ref_img, dmos, var; dmos ~1..5,
 * higher = better quality) from DB.dir, fills each pair.mos, and SEEDS each block's
 * calibration.realPSuccess from the mean MOS gap (chance at no gap, rising toward
 * ~1 as the distortion gets severe). Believable bands (plausiblePct[Speed]) and the
 * passMark stay at their tier defaults until the pilot sets them. Returns diagnostics,
 * incl. any block whose MOS-implied tier disagrees with its level-proxy tier — a
 * sanity check on TIER_LEVELS; it does NOT silently re-tier (framing is baked per tier).
 *
 * `source` (optional):
 *   - omitted              -> loads `${DB.dir}/${DB.mosFile}` (browser: fetch; Node: fs)
 *   - CSV text             -> parsed directly (any string containing a newline)
 *   - path / URL string    -> loaded (browser: fetch; Node: fs)
 *   - { "I01_01_01.png": 4.57, ... } -> used as the pre-parsed map                 */
export async function loadMos(source) {
  const map = await resolveMosMap(source);
  const base = (p) => p.split("/").pop();                          // distFile path -> "I01_01_01.png"
  const [lo, hi] = DB.mosScale;
  const qual = (mos) => (DB.mosHigherIsBetter ? mos : lo + hi - mos);          // -> higher = better
  // 2AFC accuracy seed: chance (0.5) at no gap from pristine, -> ~0.99 at a full-scale gap
  const pPair = (mos) => Math.max(0.5, Math.min(0.99, 0.5 + 0.5 * ((hi - qual(mos)) / (hi - lo))));

  const missing = [], tierMismatch = []; let filled = 0;
  for (const t of [...IQA_SUBBANK, IQA_CALIBRATION]) {
    const pairs = t.stimulus?.block?.pairs || [];
    const got = [];
    for (const pr of pairs) {
      const mos = map[base(pr.distFile)];
      if (mos == null) { missing.push(base(pr.distFile)); continue; }
      pr.mos = mos; filled++; got.push(mos);
    }
    if (!got.length) continue;
    // seed realPSuccess on experimental blocks only (calibration is honest -> no band)
    if (t.calibration) {
      t.calibration.realPSuccess = round2(got.reduce((a, m) => a + pPair(m), 0) / got.length);
    }
    // diagnostic: does the MOS-implied tier match the level-proxy tier we emitted?
    const meanMos = got.reduce((a, m) => a + m, 0) / got.length;
    const meanNorm = (qual(meanMos) - lo) / (hi - lo);             // 1 = pristine (hard)
    const mosTier = TIER_FROM_MOS(meanNorm);
    if (t.difficultyTier && mosTier && mosTier !== t.difficultyTier)
      tierMismatch.push({ id: t.id, emitted: t.difficultyTier, mosTier, meanMos: round2(meanMos) });
  }
  return { filled, missing, tierMismatch };
}

// source -> { dist_img: mos } map. Accepts a pre-parsed map, raw CSV text, a path/URL,
// or nothing (defaults to the shipped file). Browser uses fetch; Node uses fs.
async function resolveMosMap(source) {
  if (source && typeof source === "object") return source;        // already a map
  let text = source;
  if (typeof text !== "string" || !text.includes("\n")) {         // a path/URL (or default), not CSV text
    const path = (typeof source === "string" ? source : `${DB.dir}/${DB.mosFile}`);
    text = (typeof window !== "undefined" && window.fetch)
      ? await (await fetch(path)).text()
      : await (await import("node:fs/promises")).readFile(path, "utf8");
  }
  return parseDmosCsv(text);
}

// "dist_img,ref_img,dmos,var\nI01_01_01.png,I01.png,4.57,0.496\n..." -> { "I01_01_01.png": 4.57, ... }
function parseDmosCsv(text) {
  const map = {};
  const lines = text.trim().split(/\r?\n/);
  const head = lines[0].toLowerCase().split(",").map((s) => s.trim());
  const ci = head.indexOf("dist_img"), cm = head.indexOf("dmos");
  const iImg = ci !== -1 ? ci : 0, iMos = cm !== -1 ? cm : 2;      // fall back to positional cols 0 / 2
  for (let k = (ci !== -1 && cm !== -1) ? 1 : 0; k < lines.length; k++) {
    const c = lines[k].split(",");
    if (c.length <= iMos) continue;
    const img = c[iImg].trim(), mos = Number(c[iMos]);
    if (img && Number.isFinite(mos)) map[img] = mos;
  }
  return map;
}

const round2 = (x) => Math.round(x * 100) / 100;

/* ---- Calibration familiarisation (IQA family) ------------------------------ *
 * Parallel to ROT_CALIBRATION / REASONING_CALIBRATION: a few EASY (obvious,
 * severe-distortion) pairs with HONEST feedback, on RESERVED references that never
 * appear in experimental blocks, ending on an easy pair for a guaranteed-feeling
 * success -> seeds the high success expectancy disappointment later violates.
 * Consumed by the controller's calibration phase, not the induction pipeline.     */
export const IQA_CALIBRATION = {
  id: "iqa_calib_fam",
  name: `Image-quality discrimination — familiarisation (practice, honest feedback) (${DB.label})`,
  domains: IQA_DOMAINS, modality: "perceptual", languageLoad: "low",
  difficultyTier: "easy", unit: "block", phase: "calibration", honestFeedback: true,
  instructions: IQA_INSTRUCTIONS,          // same wording as experimental blocks — teaches it here
  stimulus: {
    component: "iqa2afcBlock", scoreFn: "scoreIqa2afcBlock", response: "choice2afc",
    measures: ["correct", "rtMs"],
    block: {
      n: 6,
      // severe (level 5) distortions across reserved refs + varied types; obvious on purpose
      pairs: RESERVED_REFS.flatMap((r, k) => [
        pair(r, TYPES[k % TYPES.length], 5),
        pair(r, TYPES[(k + 3) % TYPES.length], 5),
      ]).slice(0, 6),
    },
  },
  feedbackKind: "honest",
  timer: { mode: "hidden" },
  response: { probes: PROBES, scale: { type: "likert", min: 1, max: 7 } },
};

/* ---- utils ---------------------------------------------------------------- */
function pad2(x) { return String(x).padStart(2, "0"); }

/* ============================================================================
 * Assembly (when the other media families land):
 *     import { REASONING_BANK } from "./reasoning_battery_general.js";
 *     import { ROT_SUBBANK }     from "./rotation_subbank.js";
 *     import { IQA_SUBBANK }     from "./iqa_subbank.js";
 *     export const TRIAL_BANK = [ ...REASONING_BANK, ...ROT_SUBBANK, ...IQA_SUBBANK ];
 * Then: (1) VERIFY the distortion-type index->name mapping against KADID's type table
 * (filenames already confirmed by dmos.csv); (2) await loadMos() to fill MOS + reseed
 * realPSuccess (check the returned tierMismatch is empty); (3) pilot (~5) to set
 * plausiblePct[Speed] / passMark; (4) resolveOutcomeFeedback() reads block `passed`
 * (already wired in controller.js).
 * ========================================================================== */

/* ---- Generate the static bank file: run `node iqa_subbank.js` ---------------
 * Writes iqa_bank.js (MOS filled + realPSuccess seeded). GUARDED to direct
 * execution: importing this module (browser or via trial_bank.js) never writes a
 * file or touches a Node-only dependency.
 * WARNING: re-running OVERWRITES iqa_bank.js — once you start updating pilot/runtime
 * values in the generated bank, don't regenerate (or it will clobber them).        */
if (typeof process !== "undefined" && process.argv?.[1]) {
  (async () => {
    const { fileURLToPath } = await import("node:url");
    if (fileURLToPath(import.meta.url) !== process.argv[1]) return;   // imported, not run directly
    await loadMos();                                                  // fill MOS + seed realPSuccess
    const { writeFileSync } = await import("node:fs");
    writeFileSync("iqa_bank.js",
      `export const IQA_SUBBANK = ${JSON.stringify(IQA_SUBBANK, null, 2)};\n\n` +
      `export const IQA_CALIBRATION = ${JSON.stringify(IQA_CALIBRATION, null, 2)};\n`);
    console.log(`iqa_bank.js written — ${IQA_SUBBANK.length} tasks + calibration (re-running overwrites it)`);
  })();
}
