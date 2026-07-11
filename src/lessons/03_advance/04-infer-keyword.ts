/**
 * advance/04 - The `infer` Keyword
 * --------------------------------
 * Covers: extracting types out of other types inside conditional
 * types - element types, return types, promise values, and more.
 */

// Extract the element type of an array
type ElementType<T> = T extends (infer U)[] ? U : T;
type E = ElementType<number[]>; // number

// Extract a function's return type (re-implementing ReturnType)
type MyReturnType<T> = T extends (...args: never[]) => infer R ? R : never;
type R = MyReturnType<() => string>; // string

// Extract the first parameter type
type FirstParam<T> = T extends (first: infer P, ...rest: never[]) => unknown ? P : never;
type P = FirstParam<(id: number, name: string) => void>; // number

// Unwrap a Promise (re-implementing Awaited, one level)
type Unwrap<T> = T extends Promise<infer V> ? V : T;
type V = Unwrap<Promise<boolean>>; // boolean

// Multiple `infer`s in one pattern: split a tuple into head / tail
type Head<T> = T extends [infer H, ...unknown[]] ? H : never;
type Tail<T> = T extends [unknown, ...infer Rest] ? Rest : never;
type H = Head<[1, 2, 3]>; // 1
type Rest = Tail<[1, 2, 3]>; // [2, 3]

const first: H = 1;
console.log("advance/04:", first);

export {};
