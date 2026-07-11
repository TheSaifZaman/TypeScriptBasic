/**
 * monster/05 - const Type Parameters (TS 5.0+)
 * --------------------------------------------
 * A `const` type parameter makes TypeScript infer the most specific
 * (literal / readonly) type for an argument - without the caller
 * having to write `as const`.
 */

// Without `const`, `t` would widen to `(string | number | boolean)[]`.
// With it, TS keeps the exact readonly tuple `readonly [1, "a", true]`.
function asTuple<const T extends readonly unknown[]>(t: T): T {
  return t;
}
const tuple = asTuple([1, "a", true]);

// Preserve literal property types on an object argument
function defineConfig<const T>(config: T): T {
  return config;
}
const cfg = defineConfig({ mode: "dark", level: 3 });
// cfg.mode has type "dark" (a literal), not string

// Great for helpers that build unions from an argument
function oneOf<const T extends readonly string[]>(values: T): T[number] {
  return values[0]!;
}
const picked = oneOf(["red", "green", "blue"]); // type: "red" | "green" | "blue"

console.log("monster/05:", tuple, cfg.mode, picked);

export {};
