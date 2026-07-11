/**
 * monster/06 - Assertion Functions
 * --------------------------------
 * Covers: `asserts condition` and `asserts x is T`. Unlike type
 * guards (which return a boolean), assertion functions THROW on
 * failure and narrow the type for the rest of the scope.
 */

// `asserts condition` - after this call, TS knows the condition held.
function assert(condition: unknown, message = "Assertion failed"): asserts condition {
  if (!condition) throw new Error(message);
}

// `asserts x is T` - narrows a specific value's type.
function assertIsString(x: unknown): asserts x is string {
  if (typeof x !== "string") throw new Error(`Expected string, got ${typeof x}`);
}

function shout(input: unknown): string {
  assertIsString(input);
  return input.toUpperCase() + "!"; // `input` is `string` here
}

function safeLength(value: string | null): number {
  assert(value !== null, "value must not be null");
  return value.length; // `value` narrowed to `string`
}

console.log("monster/06:", shout("hello"), safeLength("abcd"));

export {};
