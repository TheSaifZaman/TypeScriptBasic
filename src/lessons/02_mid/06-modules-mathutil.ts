/**
 * mid/06 (helper) - a module that exports utilities.
 * Demonstrates named exports and a default export.
 */

// Named exports
export function multiply(a: number, b: number): number {
  return a * b;
}

export const PI = 3.14159;

// Default export
export default function square(n: number): number {
  return n * n;
}
