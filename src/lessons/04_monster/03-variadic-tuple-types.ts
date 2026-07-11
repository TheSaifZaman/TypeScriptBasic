/**
 * monster/03 - Variadic Tuple Types
 * ---------------------------------
 * Covers: spreads inside tuple types, typed concat, and extracting
 * the first / last elements of a tuple.
 */

// Spread tuples into a new tuple type
type Concat<A extends readonly unknown[], B extends readonly unknown[]> = [...A, ...B];
type Joined = Concat<[1, 2], [3, 4]>; // [1, 2, 3, 4]

// Prepend / append at the type level
type Unshift<T extends readonly unknown[], V> = [V, ...T];
type Push<T extends readonly unknown[], V> = [...T, V];

// First and Last using variadic patterns
type First<T extends readonly unknown[]> = T extends [infer H, ...unknown[]] ? H : never;
type Last<T extends readonly unknown[]> = T extends [...unknown[], infer L] ? L : never;
type F = First<[1, 2, 3]>; // 1
type L = Last<[1, 2, 3]>; // 3

// A runtime function whose signature uses variadic tuples
function concat<A extends unknown[], B extends unknown[]>(a: [...A], b: [...B]): [...A, ...B] {
  return [...a, ...b];
}

const result = concat([1, 2], ["a", "b"]); // (string | number)[] tuple
console.log("monster/03:", result, concat([true], [1]));

export {};
