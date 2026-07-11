/**
 * mid/07 - Type Narrowing & Type Guards
 * -------------------------------------
 * Covers: typeof, instanceof, the `in` operator, truthiness &
 * equality narrowing, custom type predicates, and the discriminated
 * `never` exhaustiveness check.
 */

// typeof narrowing (primitives)
function double(x: string | number): string | number {
  return typeof x === "string" ? x.repeat(2) : x * 2;
}

// instanceof narrowing (classes)
class ApiError extends Error {}
function describe(e: unknown): string {
  if (e instanceof ApiError) return `API: ${e.message}`;
  if (e instanceof Error) return `Error: ${e.message}`;
  return "unknown error";
}

// `in` operator narrowing (property presence)
type Dog = { bark: () => string };
type Cat = { meow: () => string };
function speak(pet: Dog | Cat): string {
  return "bark" in pet ? pet.bark() : pet.meow();
}

// Custom type guard with a type predicate (`x is Cat`)
function isCat(pet: Dog | Cat): pet is Cat {
  return "meow" in pet;
}

// Truthiness narrowing removes null/undefined
function greet(name?: string): string {
  if (!name) return "Hi, stranger";
  return `Hi, ${name.toUpperCase()}`; // name is `string` here
}

const cat: Cat = { meow: () => "meow" };
console.log(
  "mid/07:",
  double("ab"),
  double(21),
  describe(new ApiError("boom")),
  speak(cat),
  isCat(cat),
  greet(),
);

export {};
