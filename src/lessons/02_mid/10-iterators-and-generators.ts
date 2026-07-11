/**
 * mid/10 - Iterators & Generators
 * -------------------------------
 * Covers: generator functions (`function*`, `yield`), custom
 * iterables via `Symbol.iterator`, manual `.next()`, and async
 * generators (`for await...of`).
 */

// Generator - produces a sequence lazily, one `yield` at a time
function* range(start: number, end: number): Generator<number> {
  for (let i = start; i < end; i++) yield i;
}
const nums = [...range(1, 5)]; // [1, 2, 3, 4]  (spread consumes the generator)

// Custom iterable - implement Symbol.iterator so `for...of` / spread work
class NumberRange implements Iterable<number> {
  constructor(
    private start: number,
    private end: number,
  ) {}
  *[Symbol.iterator](): Iterator<number> {
    for (let i = this.start; i < this.end; i++) yield i;
  }
}
const total = [...new NumberRange(1, 4)].reduce((a, b) => a + b, 0); // 1+2+3

// Infinite generator consumed manually with .next()
function* idGenerator(): Generator<number> {
  let id = 1;
  while (true) yield id++;
}
const ids = idGenerator();
const firstId = ids.next().value; // 1
const secondId = ids.next().value; // 2

// Async generator - yields values over time
async function* asyncCounter(): AsyncGenerator<number> {
  yield 1;
  yield 2;
  yield 3;
}
async function runAsync(): Promise<void> {
  const collected: number[] = [];
  for await (const n of asyncCounter()) collected.push(n);
  console.log("mid/10 (async):", collected);
}
runAsync();

console.log("mid/10:", nums, total, firstId, secondId);

export {};
