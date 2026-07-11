/**
 * advance/09 - Index Signatures & Record Types
 * --------------------------------------------
 * Covers: string/number index signatures, `Record<K, V>`, mixing
 * known + dynamic keys, and readonly index signatures.
 */

// String index signature - any string key maps to a number
interface Scores {
  [player: string]: number;
}
const scores: Scores = { ada: 10, linus: 8 };

// Number index signature (array-like)
interface NumberDictionary {
  [index: number]: string;
}
const list: NumberDictionary = { 0: "a", 1: "b" };

// Record<Keys, Value> - the idiomatic way to type a dictionary
type Role = "admin" | "user" | "guest";
const permissions: Record<Role, string[]> = {
  admin: ["read", "write", "delete"],
  user: ["read", "write"],
  guest: ["read"],
};

// Mix known keys with an index signature (known keys must fit the index type)
interface Config {
  name: string;
  [option: string]: string;
}
const config: Config = { name: "app", theme: "dark" };

// Readonly index signature - lookups allowed, assignment blocked
interface ReadonlyCache {
  readonly [key: string]: string;
}
const cache: ReadonlyCache = { hit: "value" };
// cache.hit = "x"; // Index signature is readonly

console.log("advance/09:", scores["ada"], list[0], permissions.admin, config.theme, cache["hit"]);

export {};
