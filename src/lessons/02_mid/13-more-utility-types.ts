/**
 * mid/13 - More Utility Types
 * ---------------------------
 * Covers: InstanceType, ConstructorParameters, ThisParameterType,
 * OmitThisParameter, and NoInfer.
 */

class Point {
  constructor(
    public x: number,
    public y: number,
  ) {}
}

// Work with class *constructors* via `typeof Class`
type PointInstance = InstanceType<typeof Point>; // Point
type PointArgs = ConstructorParameters<typeof Point>; // [number, number]

// Extract or strip a function's `this` parameter
function toHex(this: number): string {
  return this.toString(16);
}
type HexThis = ThisParameterType<typeof toHex>; // number
type BoundToHex = OmitThisParameter<typeof toHex>; // () => string

// NoInfer<T> - stop TS inferring the type variable from this position,
// so it must be fixed by another argument (here: from `colors`).
function paint<C extends string>(colors: C[], fallback: NoInfer<C>): C {
  return fallback;
}

const args: PointArgs = [1, 2];
const p: PointInstance = new Point(...args);
console.log("mid/13:", p.x, p.y, toHex.call(255), paint(["red", "green"], "red"));

export {};
