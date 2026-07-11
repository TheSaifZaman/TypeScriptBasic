/**
 * advance/06 - Generic Constraints & Variance
 * -------------------------------------------
 * Covers: `extends` constraints, default type params, `NoInfer`,
 * and explicit variance annotations (`in` / `out`).
 */

// Constraint: T must have a numeric `length`
function longest<T extends { length: number }>(a: T, b: T): T {
  return a.length >= b.length ? a : b;
}

// keyof constraint for safe property access
function pluck<T, K extends keyof T>(items: T[], key: K): T[K][] {
  return items.map((item) => item[key]);
}

// Default type parameter + constraint together
interface Collection<T extends { id: number } = { id: number }> {
  items: T[];
}

// NoInfer<T> stops TS inferring a type param from a particular position,
// forcing it to come from elsewhere.
function createLabel<T extends string>(values: T[], selected: NoInfer<T>): T {
  return selected;
}

// Explicit variance annotations document intent (and can speed up checking):
//   `out` = covariant (producer), `in` = contravariant (consumer)
interface Producer<out T> {
  get(): T;
}
interface Consumer<in T> {
  set(value: T): void;
}

const people = [{ id: 1 }, { id: 2 }];
console.log(
  "advance/06:",
  longest("abc", "de"),
  pluck(people, "id"),
  createLabel(["a", "b"], "a"),
);

export {};
