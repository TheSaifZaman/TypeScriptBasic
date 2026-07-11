/**
 * basic/01 - Variables & Basic Types
 * ------------------------------------
 * Covers: let/const/var, primitive types, arrays, tuples,
 * any / unknown / never / void, and type inference.
 */

// --- let vs const vs var ---
let reassignable = "I can change";
reassignable = "changed";

const fixed = "I cannot be reassigned"; // prefer const by default
// fixed = "nope"; // Error: Cannot assign to 'fixed'

// `var` is function-scoped and hoisted - avoid it in modern TS.
function scopeDemo(): void {
  if (true) {
    var leaks = "I leak out of the block";
    let stays = "I stay in the block";
  }
  console.log(leaks); // works (function-scoped)
  // console.log(stays); // block-scoped
}

// --- Primitive types (annotate only when inference is not enough) ---
const message: string = "Hello, TypeScript!";
const count: number = 42;
const isActive: boolean = true;
const nothing: null = null;
const notDefined: undefined = undefined;
const big: bigint = 100n;
const sym: symbol = Symbol("id");

// --- Arrays & Tuples ---
const fruits: string[] = ["apple", "banana"];
const scores: Array<number> = [90, 85, 100]; // generic array syntax
const pair: [string, number] = ["age", 30]; // fixed-length, typed positions
const rgb: readonly [number, number, number] = [255, 0, 0]; // readonly tuple

// --- any / unknown / never / void ---
let loose: any = "anything"; // disables type checking - avoid
loose = 42;

let safe: unknown = "must narrow before use"; // type-safe alternative to any
if (typeof safe === "string") {
  console.log(safe.toUpperCase());
}

function fail(msg: string): never {
  throw new Error(msg); // never returns
}

function logMessage(msg: string): void {
  console.log(msg); // returns nothing
}

console.log("basic/01:", message, count, isActive, fruits, pair, big, rgb);
scopeDemo();

export {}; // makes this file a module (isolates its scope)
