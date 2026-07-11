/**
 * advance/12 - Construct Signatures & Hybrid Types
 * ------------------------------------------------
 * Covers: construct signatures (`new (...) => T`), factory typing,
 * and hybrid types (a value that is both callable AND has properties).
 */

// Construct signature - describes something you can call with `new`.
interface PointCtor {
  new (x: number, y: number): { x: number; y: number };
}
function build(Ctor: PointCtor, x: number, y: number): { x: number; y: number } {
  return new Ctor(x, y);
}
class Point {
  constructor(
    public x: number,
    public y: number,
  ) {}
}
const p = build(Point, 3, 4);

// Hybrid type - callable AND carries properties/methods (like jQuery's `$`).
interface Counter {
  (label: string): string; // call signature
  count: number; // property
  reset(): void; // method
}
function makeCounter(): Counter {
  const fn = ((label: string) => `${label}:${fn.count++}`) as Counter;
  fn.count = 0;
  fn.reset = () => {
    fn.count = 0;
  };
  return fn;
}
const counter = makeCounter();
const a = counter("a"); // "a:0"
const b = counter("b"); // "b:1"

console.log("advance/12:", p.x, p.y, a, b, counter.count);

export {};
