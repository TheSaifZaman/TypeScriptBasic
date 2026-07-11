/**
 * mid/12 - Symbols & `unique symbol`
 * ----------------------------------
 * Covers: symbol uniqueness, symbols as object keys, the `unique symbol`
 * type, and the global symbol registry (`Symbol.for`).
 */

// Every Symbol() is unique, even with the same description.
// (Typed as `symbol` here so we can compare them at runtime - two distinct
//  `unique symbol` values are known-unequal, so TS would reject `===`.)
const s1: symbol = Symbol("id");
const s2: symbol = Symbol("id");
// s1 === s2: false

// `const x = Symbol()` gives the type `unique symbol` - a compile-time
// identity that lets a symbol be used as a typed object key.
const ID: unique symbol = Symbol("id");
interface User {
  [ID]: number; // symbol-keyed property (collision-free, not a string key)
  name: string;
}
const user: User = { [ID]: 42, name: "Ada" };

// Symbols keep "hidden" metadata off the normal string-key surface
const META: unique symbol = Symbol("meta");
const record = { value: 1, [META]: { internal: true } };

// Global registry - Symbol.for returns the SAME symbol for a given key,
// shared across the whole program (and across realms).
const t1: symbol = Symbol.for("app.token");
const t2: symbol = Symbol.for("app.token");
// t1 === t2: true

console.log("mid/12:", s1.description, s1 === s2, user[ID], record[META].internal, t1 === t2);

export {};
