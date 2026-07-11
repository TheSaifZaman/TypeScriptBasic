/**
 * monster/09 - Type-Safe Builder Pattern
 * --------------------------------------
 * A fluent builder whose type tracks which required fields have been
 * set - `build()` only becomes available once every field is provided.
 * This makes "you forgot to set X" a COMPILE error.
 */

// `Set` accumulates the keys provided so far.
type Builder<T, Set extends keyof T = never> = {
  set<K extends keyof T>(key: K, value: T[K]): Builder<T, Set | K>;
} & ([Exclude<keyof T, Set>] extends [never] ? { build(): T } : { build?: never });

interface User {
  id: number;
  name: string;
  email: string;
}

function builder<T>(): Builder<T> {
  const data: Partial<T> = {};
  const api = {
    set(key: keyof T, value: T[keyof T]) {
      data[key] = value;
      return api;
    },
    build() {
      return data as T;
    },
  };
  return api as unknown as Builder<T>;
}

// Every required field set: build() is allowed.
const user = builder<User>()
  .set("id", 1)
  .set("name", "Ada")
  .set("email", "ada@example.com")
  .build();

// builder<User>().set("id", 1).build();  // build() not available: name & email missing

console.log("monster/09:", user);

export {};
