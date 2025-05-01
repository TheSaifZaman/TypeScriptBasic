// Function declaration
function add(a: number, b: number): number {
    return a + b;
}

// Arrow function
const multiply = (a: number, b: number): number => a * b;

// Function with default parameters
function greet(name: string = "Guest"): string {
    return `Hello, ${name}!`;
}

// Rest parameters
function sum(...numbers: number[]): number {
    return numbers.reduce((a, b) => a + b, 0);
}

// Overloaded functions
function makeArray(arg: number): number[];
function makeArray(arg: string): string[];
function makeArray(arg: any): any[] {
    return [arg];
}