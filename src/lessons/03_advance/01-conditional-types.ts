/**
 * advance/01 - Conditional Types
 * ------------------------------
 * Covers: `T extends U ? X : Y`, distributive conditional types,
 * and re-implementing built-in helpers with conditions.
 */

// Basic conditional type
type IsString<T> = T extends string ? "yes" : "no";
type A = IsString<string>; // "yes"
type B = IsString<number>; // "no"

// Distributive over unions: applied to each member individually
type ToArray<T> = T extends unknown ? T[] : never;
type Arrays = ToArray<string | number>; // string[] | number[]

// Re-implementing Exclude and NonNullable with conditionals
type MyExclude<T, U> = T extends U ? never : T;
type WithoutA = MyExclude<"a" | "b" | "c", "a">; // "b" | "c"

type MyNonNullable<T> = T extends null | undefined ? never : T;
type Clean = MyNonNullable<string | null | undefined>; // string

// Nested conditionals act like a type-level switch
type TypeName<T> = T extends string
  ? "string"
  : T extends number
    ? "number"
    : T extends boolean
      ? "boolean"
      : "object";

const demo: TypeName<number> = "number";
console.log("advance/01:", demo);

export {};
