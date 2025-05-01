// Basic Types
let name: string = "John";
let age: number = 30;
let isStudent: boolean = true;

// Array
let fruits: string[] = ["apple", "banana", "orange"];
let numbers: number[] = [1, 2, 3];

// Tuple
let person: [string, number, boolean] = ["John", 30, true];

// Enum
enum Color {
    Red,
    Green,
    Blue
}
let favoriteColor: Color = Color.Red;

// Any (avoid using this)
let anything: any = "This can be anything";
anything = 42;
anything = true;

// Void
function log(message: string): void {
    console.log(message);
}

// Never
function throwError(message: string): never {
    throw new Error(message);
}

// Unknown
let unknownValue: unknown = "unknown";
if (typeof unknownValue === "string") {
    console.log(unknownValue.toUpperCase());
}

export type Direction = "up" | "down" | "left" | "right";
export const Direction = {
    UP: "up",
    DOWN: "down",
    LEFT: "left",
    RIGHT: "right"
};