/* ============================================================================
 * fs_jspsych.js — Figure Series trials for jsPsych (html-button-response)
 * ----------------------------------------------------------------------------
 * FS items are sequences over 8 fixed arrow directions. We store each item as
 * direction CODES (N, NE, E, SE, S, SW, W, NW) + a key code, and render every
 * arrow as one rotated SVG path — font-free, pixel-consistent, no per-item images.
 *
 *   import { buildFsTrial, DIRS, arrowSVG, renderSequence } from "./fs_jspsych.js";
 *   timeline.push(buildFsTrial({ ref:"as_b1i11", stem:[...codes], key:"N", b:-0.14, tier:"easy" }));
 *
 * Written for jsPsych v8 (button_html is a function). For v7, see the note on
 * buildFsTrial below.
 * ========================================================================== */

// 8 directions, clockwise from North. This array order IS the option order
// (matches the MITRE A–H radio order: ↑ ↗ → ↘ ↓ ↙ ← ↖), so option index == direction index.
export const DIRS = [
  { code: "N",  deg: 0,   uni: "\u2191" },
  { code: "NE", deg: 45,  uni: "\u2197" },
  { code: "E",  deg: 90,  uni: "\u2192" },
  { code: "SE", deg: 135, uni: "\u2198" },
  { code: "S",  deg: 180, uni: "\u2193" },
  { code: "SW", deg: 225, uni: "\u2199" },
  { code: "W",  deg: 270, uni: "\u2190" },
  { code: "NW", deg: 315, uni: "\u2196" },
];
const DEG = Object.fromEntries(DIRS.map((d) => [d.code, d.deg]));
export const codeToIndex = (code) => DIRS.findIndex((d) => d.code === code);

// One up-arrow path, rotated to the requested direction. `currentColor` so CSS sets the ink.
export function arrowSVG(code, px = 34) {
  return `<svg width="${px}" height="${px}" viewBox="0 0 100 100" aria-hidden="true" style="display:inline-block;vertical-align:middle">
    <g transform="rotate(${DEG[code]} 50 50)" fill="none" stroke="currentColor"
       stroke-width="8" stroke-linecap="round" stroke-linejoin="round">
      <line x1="50" y1="84" x2="50" y2="26"/><polyline points="31,47 50,26 69,47"/>
    </g></svg>`;
}

// The stem: a row of rotated arrows from the direction codes.
export function renderSequence(codes, px = 34, gap = 14) {
  return `<div style="display:flex;flex-wrap:wrap;gap:${gap}px;justify-content:center;align-items:center">
    ${codes.map((c) => arrowSVG(c, px)).join("")}</div>`;
}

/* Build one FS trial. item = { ref, stem:[codes], key:code, b, tier }.
 * Records: response (chosen code), correct (vs key), plus rt from jsPsych. */
export function buildFsTrial(item, opts = {}) {
  const px = opts.optionPx ?? 32;
  return {
    type: jsPsychHtmlButtonResponse,                       // assumes jsPsych v8 global
    stimulus:
      `${renderSequence(item.stem, opts.stemPx ?? 34)}
       <p style="margin-top:18px;font-size:15px">Select the arrow that comes next.</p>`,
    choices: DIRS.map((d) => d.code),                      // values; index == direction index
    // jsPsych v8: button_html is (choice, index) => string
    button_html: (choice) => `<button class="jspsych-btn">${arrowSVG(choice, px)}</button>`,
    trial_duration: opts.timeLimitMs ?? 60000,             // FS 1-minute/item limit
    data: { task: "FS", item: item.ref, key: item.key, b: item.b, tier: item.tier,
            ...(opts.data || {}) },
    on_finish: (d) => {
      d.response_code = d.response == null ? null : DIRS[d.response].code;  // null = timed out
      d.correct = d.response_code === item.key;
    },
  };
}

/* ---- jsPsych v7 note ------------------------------------------------------
 * In v7, button_html is a string template, not a function, and choices supply
 * the label HTML. Replace the trial fields above with:
 *
 *   choices: DIRS.map(d => arrowSVG(d.code, 32)),   // HTML labels
 *   button_html: '<button class="jspsych-btn">%choice%</button>',
 *
 * and in on_finish map the index yourself:
 *   d.response_code = d.response == null ? null : DIRS[d.response].code;
 * ------------------------------------------------------------------------- */
