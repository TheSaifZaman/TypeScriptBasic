/**
 * monster/08 - Type-Level Programming
 * -----------------------------------
 * The type system is Turing-complete. Here we compute with types:
 * arithmetic via tuple length, and parsing strings into tuples.
 */

// Length of a tuple is available as a numeric literal type
type Length<T extends readonly unknown[]> = T["length"];

// Build a tuple of a given length, then use its length as a "number"
type BuildTuple<N extends number, Acc extends unknown[] = []> = Acc["length"] extends N
  ? Acc
  : BuildTuple<N, [...Acc, unknown]>;

// Type-level addition: concatenate two counting tuples and measure
type Add<A extends number, B extends number> = Length<[...BuildTuple<A>, ...BuildTuple<B>]>;
type Sum = Add<3, 4>; // 7

// Type-level string parsing: split a delimited string into a tuple
type Split<S extends string, D extends string> = S extends `${infer Head}${D}${infer Tail}`
  ? [Head, ...Split<Tail, D>]
  : [S];
type Segments = Split<"a/b/c/d", "/">; // ["a", "b", "c", "d"]

// Type-level "trim start"
type TrimLeft<S extends string> = S extends ` ${infer Rest}` ? TrimLeft<Rest> : S;
type Trimmed = TrimLeft<"   hello">; // "hello"

const sum: Sum = 7;
const trimmed: Trimmed = "hello";
console.log("monster/08:", sum, trimmed);

export {};
