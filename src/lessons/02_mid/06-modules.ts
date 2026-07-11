/**
 * mid/06 - Modules (import / export)
 * ----------------------------------
 * Covers: named imports, default imports, aliasing, and
 * type-only imports.
 *
 * NOTE: because the compiled output is ES modules, relative
 * imports use the ".js" extension (the emitted file name),
 * even though the source is ".ts".
 */

// Named + default imports from a sibling module
import square, { multiply, PI } from "./06-modules-mathutil.js";

// Aliasing a named import
import { multiply as times } from "./06-modules-mathutil.js";

// Tip: use `import type { Foo } from "..."` for type-only imports -
// they are fully erased at runtime and prevent accidental value imports.

console.log("mid/06:", multiply(3, 4), times(2, 5), square(6), PI);

export {};
