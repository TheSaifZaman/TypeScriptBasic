/**
 * Entry point - runs every lesson in curriculum order.
 *
 * Lessons are grouped by difficulty, from 01_basic through 02_mid,
 * 03_advance, 04_monster, and finally 05_interview.
 *
 * Each lesson is a self-contained module that logs a short demo
 * (prefixed with its group/number) when imported. Build with
 * `npm run build`, then run `node dist/index.js` or open index.html.
 */

console.log("TypeScript Basics - running the full curriculum\n");

/* 01 - Basic */
import "./lessons/01_basic/01-variables-and-types.js";
import "./lessons/01_basic/02-functions.js";
import "./lessons/01_basic/03-arrays-and-tuples.js";
import "./lessons/01_basic/04-interfaces-and-types.js";
import "./lessons/01_basic/05-classes.js";
import "./lessons/01_basic/06-enums.js";
import "./lessons/01_basic/07-type-inference-and-assertions.js";

/* 02 - Mid */
import "./lessons/02_mid/01-generics.js";
import "./lessons/02_mid/02-advanced-types.js";
import "./lessons/02_mid/03-utility-types.js";
import "./lessons/02_mid/04-async-await.js";
import "./lessons/02_mid/05-decorators.js";
import "./lessons/02_mid/06-modules.js";
import "./lessons/02_mid/07-narrowing-and-type-guards.js";
import "./lessons/02_mid/08-keyof-typeof-indexed-access.js";
import "./lessons/02_mid/09-literal-and-union-types.js";
import "./lessons/02_mid/10-iterators-and-generators.js";
import "./lessons/02_mid/11-this-typing.js";
import "./lessons/02_mid/12-symbols.js";
import "./lessons/02_mid/13-more-utility-types.js";

/* 03 - Advance */
import "./lessons/03_advance/01-conditional-types.js";
import "./lessons/03_advance/02-mapped-types.js";
import "./lessons/03_advance/03-template-literal-types.js";
import "./lessons/03_advance/04-infer-keyword.js";
import "./lessons/03_advance/05-discriminated-unions.js";
import "./lessons/03_advance/06-generic-constraints-variance.js";
import "./lessons/03_advance/07-declaration-merging.js";
import "./lessons/03_advance/08-namespaces.js";
import "./lessons/03_advance/09-index-signatures-and-records.js";
import "./lessons/03_advance/10-ambient-and-global-declarations.js";
import "./lessons/03_advance/11-type-only-imports.js";
import "./lessons/03_advance/12-construct-and-hybrid-types.js";
import "./lessons/03_advance/13-mixins.js";
import "./lessons/03_advance/14-module-augmentation.js";

/* 04 - Monster */
import "./lessons/04_monster/01-recursive-types.js";
import "./lessons/04_monster/02-deep-partial-and-readonly.js";
import "./lessons/04_monster/03-variadic-tuple-types.js";
import "./lessons/04_monster/04-branded-nominal-types.js";
import "./lessons/04_monster/05-const-type-parameters.js";
import "./lessons/04_monster/06-assertion-functions.js";
import "./lessons/04_monster/07-satisfies-operator.js";
import "./lessons/04_monster/08-type-level-programming.js";
import "./lessons/04_monster/09-builder-pattern-types.js";

/*
 * 05 - Interview (optional)
 * This folder is git-ignored, so it may be absent in a fresh clone.
 * Load the lessons dynamically via a runtime path (so they aren't a
 * static build dependency) and skip quietly if the folder is missing.
 */
const interviewLessons = [
  "01-implement-utility-types",
  "02-coding-challenges",
  "03-type-puzzles",
  "04-practice-beginner",
  "05-practice-intermediate",
  "06-practice-advanced",
  "07-practice-monster",
];

for (const name of interviewLessons) {
  const modulePath = `./lessons/05_interview/${name}.js`;
  try {
    await import(modulePath);
  } catch {
    // Interview folder not present in this checkout; skip it.
  }
}
