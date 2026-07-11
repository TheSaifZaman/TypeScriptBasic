/**
 * basic/02 - Functions
 * ---------------------
 * Covers: typed params/returns, arrow functions, optional & default
 * params, rest params, function types, and overloads.
 */

// Function declaration with typed params and return
function add(a: number, b: number): number {
  return a + b;
}

// Arrow function with an explicit function type
const multiply: (a: number, b: number) => number = (a, b) => a * b;

// Optional (?) and default parameters
function greet(name: string = "Guest", title?: string): string {
  return title ? `Hello, ${title} ${name}!` : `Hello, ${name}!`;
}

// Rest parameters
function sum(...numbers: number[]): number {
  return numbers.reduce((total, n) => total + n, 0);
}

// Function overloads - multiple signatures, one implementation
function makeArray(arg: number): number[];
function makeArray(arg: string): string[];
function makeArray(arg: number | string): (number | string)[] {
  return [arg];
}

console.log("basic/02:", add(2, 3), multiply(4, 5), greet("Saif", "Mr."), sum(1, 2, 3), makeArray("x"));

export {};
