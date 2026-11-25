// One Line, One Laugh — a single self-contained joke, written to /output/entry.txt.
// Node 22, stdlib only. Deterministic: the same line on every run.
import { mkdirSync, writeFileSync } from "node:fs";
import { join } from "node:path";

// The line: a deadpan therapy setup whose punchline proves the diagnosis
// in the very sentence that denies it.
const LINE =
  "My therapist says I deflect with humour, so in conclusion, my childhood was hilarious.";

// The gate allows 1–140 characters of non-blank UTF-8 text on one line.
// Fail loudly here rather than shipping an invalid entry.
const trimmed = LINE.trim();
if (trimmed.length < 1 || trimmed.length > 140) {
  throw new Error(`entry must be 1-140 characters, got ${trimmed.length}`);
}
if (trimmed.includes("\n")) {
  throw new Error("entry must be a single line");
}

// The grader runs the program with /output as its output directory;
// MAKEFUN_OUTPUT_DIR only overrides it for local testing.
const outDir = process.env.MAKEFUN_OUTPUT_DIR || "/output";
mkdirSync(outDir, { recursive: true });
writeFileSync(join(outDir, "entry.txt"), trimmed + "\n", "utf8");
console.log(`wrote ${trimmed.length}-character entry to ${join(outDir, "entry.txt")}`);
