/**
 * advance/11 - Type-Only Imports & Exports
 * ----------------------------------------
 * Covers: `import type`, the inline `type` modifier, and `export type`.
 * With `verbatimModuleSyntax` on, anything imported only as a type MUST
 * use one of these forms - they are fully erased from the emitted JS.
 */

// Pure type import - erased at runtime (no `import` appears in the output)
import type { Shape, Size } from "./11-shapes.js";

// Inline `type` modifier - mix a value import and a type import in one line
import { DEFAULT_SIZE, type Theme } from "./11-shapes.js";

const shape: Shape = { id: "s1" };
const size: Size = DEFAULT_SIZE;
const theme: Theme = { primary: "#8b5cf6" };

// `export type` re-exports a type without creating a runtime binding
export type { Shape };

console.log("advance/11:", shape.id, size, theme.primary);
