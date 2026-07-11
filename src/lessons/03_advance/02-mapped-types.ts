/**
 * advance/02 - Mapped Types
 * -------------------------
 * Covers: mapping over keys, modifiers (`readonly`, `?`) and their
 * removal (`-readonly`, `-?`), and key remapping with `as`.
 */

interface Person {
  name: string;
  age: number;
}

// Map over each key to build a new type
type Optional<T> = { [K in keyof T]?: T[K] }; // like Partial
type Nullable<T> = { [K in keyof T]: T[K] | null };

// Add / strip modifiers. `-readonly` and `-?` remove them.
type Mutable<T> = { -readonly [K in keyof T]: T[K] };
type Concrete<T> = { [K in keyof T]-?: T[K] };

// Key remapping with `as` - e.g. generate getter method names
type Getters<T> = {
  [K in keyof T as `get${Capitalize<string & K>}`]: () => T[K];
};
type PersonGetters = Getters<Person>; // { getName: () => string; getAge: () => number }

// Filter keys out by remapping to `never`
type RemoveAge<T> = { [K in keyof T as K extends "age" ? never : K]: T[K] };

const p: Optional<Person> = { name: "Ada" };
const getters: PersonGetters = { getName: () => "Ada", getAge: () => 36 };
console.log("advance/02:", p, getters.getName(), getters.getAge());

export {};
