/**
 * monster/07 - The `satisfies` Operator (TS 4.9+)
 * -----------------------------------------------
 * `satisfies` validates that a value conforms to a type WITHOUT
 * widening the value to that type. You get validation AND the
 * precise inferred type - you no longer have to choose.
 */

type RGB = readonly [number, number, number];
type ColorValue = string | RGB;
type Palette = Record<string, ColorValue>;

const palette = {
  primary: "#8b5cf6",
  danger: "#ef4444",
  accent: [255, 0, 0],
} satisfies Palette;

// Because the value wasn't widened to `Palette`, TS remembers the specifics:
const hex = palette.primary.toUpperCase(); // `primary` is still a string
const red = palette.accent[0]; // `accent` is still a tuple

// Also validates keys against a required shape while keeping literal types:
const routes = {
  home: "/",
  profile: "/user/:id",
} satisfies Record<string, `/${string}`>;

// Contrast: `const x: Palette = {...}` would validate but LOSE the specifics,
// making `palette.primary.toUpperCase()` an error (it'd be `string | RGB`).

console.log("monster/07:", hex, red, routes.home);

export {};
