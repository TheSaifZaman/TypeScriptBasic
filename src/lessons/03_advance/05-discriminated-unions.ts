/**
 * advance/05 - Discriminated Unions & Exhaustiveness
 * --------------------------------------------------
 * Covers: tagged unions, exhaustive `switch`, the `never`
 * exhaustiveness guard, and a reusable `assertNever` helper.
 */

// Each variant shares a literal discriminant field: `kind`
type Shape =
  | { kind: "circle"; radius: number }
  | { kind: "rect"; width: number; height: number }
  | { kind: "triangle"; base: number; height: number };

// Compile-time guarantee that every case is handled.
function assertNever(x: never): never {
  throw new Error(`Unhandled variant: ${JSON.stringify(x)}`);
}

function area(shape: Shape): number {
  switch (shape.kind) {
    case "circle":
      return Math.PI * shape.radius ** 2;
    case "rect":
      return shape.width * shape.height;
    case "triangle":
      return (shape.base * shape.height) / 2;
    default:
      // If a new `kind` is added but not handled, this line stops compiling.
      return assertNever(shape);
  }
}

const shapes: Shape[] = [
  { kind: "circle", radius: 2 },
  { kind: "rect", width: 3, height: 4 },
  { kind: "triangle", base: 6, height: 2 },
];

console.log("advance/05:", shapes.map(area));

export {};
