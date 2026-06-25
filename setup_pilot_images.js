// Run once after cloning: node setup_pilot_images.js
// Run this script to copy the only the IQA images used by the experiment into stimuli/iqa_pilot/
// so they can be committed to git without including the full KADID dataset.

// Not needed for the experimemt and can be deleted after use

import { IQA_SUBBANK, IQA_CALIBRATION } from "./stimuli/iqa_bank.js";
import { copyFileSync, mkdirSync, existsSync } from "fs";
import { join } from "path";

const SRC = "./stimuli/iqa/kadid/images";
const DEST = "./stimuli/iqa_pilot";

if (!existsSync(SRC)) {
  console.error(`Source folder not found: ${SRC}`);
  console.error("Place the full KADID images folder there first, then re-run.");
  process.exit(1);
}

mkdirSync(DEST, { recursive: true });

const allBlocks = [...IQA_SUBBANK, IQA_CALIBRATION];
const files = new Set(
  allBlocks
    .flatMap((b) => b.stimulus?.block?.pairs || [])
    .flatMap((p) => [p.left, p.right])
    .map((p) => p.split("/").pop()),
);

let copied = 0,
  missing = 0;
for (const fname of files) {
  const src = join(SRC, fname);
  const dest = join(DEST, fname);
  try {
    copyFileSync(src, dest);
    copied++;
  } catch {
    console.warn(`Missing: ${fname}`);
    missing++;
  }
}

console.log(`Done. Copied ${copied} images to ${DEST}/`);
if (missing) console.warn(`${missing} files not found in source.`);
