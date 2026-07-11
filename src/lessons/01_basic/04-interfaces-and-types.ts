/**
 * basic/04 - Interfaces & Type Aliases
 * -------------------------------------
 * Covers: interfaces, optional & readonly members, extends,
 * index signatures, type aliases, unions, intersections,
 * and interface vs type.
 */

// Interface with optional (?) and readonly members
interface User {
  readonly id: number; // cannot be changed after creation
  name: string;
  isAdmin?: boolean; // optional
}

const user: User = { id: 1, name: "Bob" };
// user.id = 2; // readonly

// Extending interfaces
interface Admin extends User {
  role: string;
}

const admin: Admin = { id: 2, name: "Alice", role: "superuser" };

// Index signature - objects with dynamic keys
interface StringMap {
  [key: string]: string;
}
const headers: StringMap = { "Content-Type": "application/json" };

// Type aliases: unions, intersections, and object shapes
type ID = number | string; // union
type Point = { x: number; y: number };
type Point3D = Point & { z: number }; // intersection

const id: ID = "abc-123";
const origin: Point3D = { x: 0, y: 0, z: 0 };

/**
 * interface vs type - interview favorite:
 * - interface: can be re-opened (declaration merging) & is idiomatic for object/class shapes.
 * - type: can express unions, tuples, primitives, and mapped/conditional types.
 * Rule of thumb: interface for public object/class contracts, type for everything else.
 */

console.log("basic/04:", user, admin, headers, id, origin);

export {};
