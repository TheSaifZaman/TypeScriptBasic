/**
 * mid/08 - keyof, typeof & Indexed Access Types
 * ---------------------------------------------
 * Covers: the `keyof` operator, the type-level `typeof`,
 * indexed access types (T[K]), and a type-safe property getter.
 */

interface User {
  id: number;
  name: string;
  active: boolean;
}

// keyof - a union of an object type's keys
type UserKey = keyof User; // "id" | "name" | "active"

// Indexed access - look up the type of a property
type UserName = User["name"]; // string
type IdOrName = User["id" | "name"]; // number | string

// typeof (type-level) - derive a type from a runtime value
const defaults = { theme: "dark", fontSize: 14 };
type Settings = typeof defaults; // { theme: string; fontSize: number }
type SettingKey = keyof typeof defaults; // "theme" | "fontSize"

// Array element type via number index
const palette = ["red", "green", "blue"];
type Color = (typeof palette)[number]; // string

// Type-safe getter: K is constrained to real keys, return type is exact
function getProp<T, K extends keyof T>(obj: T, key: K): T[K] {
  return obj[key];
}

const user: User = { id: 1, name: "Ada", active: true };
const name: UserName = getProp(user, "name");

console.log("mid/08:", name, getProp(user, "id"), Object.keys(defaults));

export {};
