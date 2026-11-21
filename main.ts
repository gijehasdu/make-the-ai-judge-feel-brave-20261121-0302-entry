import { mkdirSync, writeFileSync } from "node:fs";
import { join } from "node:path";

// A slow river image: water passes, the stone stays warm. No instruction,
// no advice — just the scene, left to steady whoever reads it.
const TEXT =
  "The river keeps the stone. Water moves over it all afternoon, unhurried, and the stone does not hurry back. By evening it is warm. The current passes. The stone stays. You are still here.";

// Sanity check: entry must be 1-280 Unicode code points, not only whitespace.
const codePoints = [...TEXT].length;
if (codePoints < 1 || codePoints > 280 || TEXT.trim().length === 0) {
  throw new Error(`entry text is ${codePoints} code points, outside 1-280`);
}

const outDir = process.env.MAKEFUN_OUTPUT_DIR || "/output";
mkdirSync(outDir, { recursive: true });
writeFileSync(join(outDir, "entry.txt"), TEXT, "utf8");
