/**
 * mid/02 - Advanced Types & Narrowing
 * --------------------------------------
 * Covers: literal types, discriminated unions, type guards,
 * `keyof` / `typeof`, mapped types, and conditional types.
 */

// Discriminated union - a shared literal "kind" enables exhaustive narrowing
type Circle = { kind: "circle"; radius: number };
type Square = { kind: "square"; side: number };
type Shape = Circle | Square;

function area(shape: Shape): number {
  switch (shape.kind) {
    case "circle":
      return Math.PI * shape.radius ** 2;
    case "square":
      return shape.side ** 2;
    default:
      // Exhaustiveness check: if a new shape is added, this errors at compile time.
      const _never: never = shape;
      return _never;
  }
}

// Custom type guard with a type predicate (`x is Circle`)
function isCircle(shape: Shape): shape is Circle {
  return shape.kind === "circle";
}

// keyof + typeof
const config = { host: "localhost", port: 8080 };
type Config = typeof config; // { host: string; port: number }
type ConfigKey = keyof Config; // "host" | "port"

// Mapped type - build a new type by transforming each key
type ReadonlyConfig = { readonly [K in keyof Config]: Config[K] };

// Conditional type - types that branch on a condition
type ElementType<T> = T extends (infer U)[] ? U : T;
type Num = ElementType<number[]>; // number

const shapes: Shape[] = [
  { kind: "circle", radius: 2 },
  { kind: "square", side: 3 },
];

console.log("mid/02:", shapes.map(area), shapes.filter(isCircle));

export {};
