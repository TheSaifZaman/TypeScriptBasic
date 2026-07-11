/**
 * mid/03 - Built-in Utility Types
 * ----------------------------------
 * Covers the utility types you will use daily and in interviews:
 * Partial, Required, Readonly, Pick, Omit, Record, Exclude,
 * Extract, NonNullable, ReturnType, Parameters, Awaited.
 */

interface Person {
  name: string;
  age: number;
  address?: string;
}

type PartialPerson = Partial<Person>; // all optional
type RequiredPerson = Required<Person>; // all required
type ReadonlyPerson = Readonly<Person>; // all readonly
type NameOnly = Pick<Person, "name">; // subset of keys
type NoAddress = Omit<Person, "address">; // remove keys

// Record - build an object type from keys: value type
type RolePermissions = Record<"admin" | "user", string[]>;

// Union filters
type T1 = Exclude<"a" | "b" | "c", "a">; // "b" | "c"
type T2 = Extract<"a" | "b" | "c", "a" | "z">; // "a"
type T3 = NonNullable<string | null | undefined>; // string

// Function-related utilities
function createUser(name: string, age: number) {
  return { name, age, id: 1 };
}
type CreateUserReturn = ReturnType<typeof createUser>; // { name; age; id }
type CreateUserArgs = Parameters<typeof createUser>; // [string, number]

// Awaited - unwrap a Promise's resolved type
type Resolved = Awaited<Promise<string>>; // string

const perms: RolePermissions = { admin: ["read", "write"], user: ["read"] };

console.log("mid/03:", perms);

export {};
