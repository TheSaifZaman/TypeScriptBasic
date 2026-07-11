/**
 * mid/01 - Generics
 * --------------------
 * Covers: generic functions, constraints, default type params,
 * generic classes, and generic interfaces.
 */

// Generic function - T is inferred from the argument
function identity<T>(value: T): T {
  return value;
}

// Generic constraint - T must have the shape { name: string }
function addId<T extends { name: string }>(obj: T): T & { id: string } {
  const id = Math.random().toString(36).slice(2);
  return { ...obj, id };
}

// Constraint using keyof - key must be a real property of obj
function getProp<T, K extends keyof T>(obj: T, key: K): T[K] {
  return obj[key];
}

// Default type parameter
interface ApiResponse<T = unknown> {
  data: T;
  status: number;
}

// Generic class
class Box<T> {
  constructor(private value: T) {}
  get(): T {
    return this.value;
  }
}

const person = { name: "Saif", age: 24 };
const withId = addId(person);
const boxed = new Box<number>(123);
const res: ApiResponse<string[]> = { data: ["ok"], status: 200 };

console.log("mid/01:", identity("hi"), withId, getProp(person, "age"), boxed.get(), res);

export {};
