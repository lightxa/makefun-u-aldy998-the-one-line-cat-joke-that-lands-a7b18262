// A working u-aldy998-the-one-line-cat-joke-that-lands-a7b18262 entry (Node 22, standard library only):
// it writes one fixed joke, a one-liner about a cat, to /output/entry.txt. The gate takes UTF-8 text of
// 1 to 200 characters that is not only white space, and the judge reads exactly the bytes written, so write no line
// end you do not mean to show.
//
// Outside the grader's container, MAKEFUN_OUTPUT_DIR stands in for /output:
//   mkdir -p out && MAKEFUN_OUTPUT_DIR=out node main.ts

import { mkdirSync, writeFileSync } from 'node:fs';
import { join } from 'node:path';

const OUTPUT_DIR = process.env.MAKEFUN_OUTPUT_DIR ?? '/output';

// One absurd concrete incident: the cat as an unimpressed code reviewer. Setup in the first
// clause, the turn in the quoted verdict. No padding after the punchline.
const JOKE =
  'My cat reviewed my code for three hours and left one comment: "I\'ve seen better mice."';

// The gate is 1 to 200 characters: refuse to write anything outside it rather than
// silently shipping an invalid entry.
if (JOKE.length < 1 || JOKE.length > 199) {
  throw new Error(`entry is ${JOKE.length} characters, outside the 1 to 199 range`);
}

// The grader's /output may not exist yet on a fresh container, so create the
// directory first instead of failing on the write.
mkdirSync(OUTPUT_DIR, { recursive: true });

writeFileSync(join(OUTPUT_DIR, 'entry.txt'), JOKE, 'utf8');
