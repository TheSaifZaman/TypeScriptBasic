/**
 * monster/01 - Recursive Types
 * ----------------------------
 * Covers: self-referential data types (JSON, trees) and recursive
 * conditional types.
 */

// A recursive type describing any JSON value
type Json = string | number | boolean | null | Json[] | { [key: string]: Json };
const data: Json = { name: "Ada", tags: ["a", "b"], meta: { ok: true, count: 3 } };

// A recursive tree node
type TreeNode<T> = { value: T; children: TreeNode<T>[] };
const tree: TreeNode<number> = {
  value: 1,
  children: [
    { value: 2, children: [] },
    { value: 3, children: [{ value: 4, children: [] }] },
  ],
};

// Recursive conditional type - unwrap arbitrarily nested Promises
type DeepAwaited<T> = T extends Promise<infer U> ? DeepAwaited<U> : T;
type Resolved = DeepAwaited<Promise<Promise<Promise<string>>>>; // string

const value: Resolved = "done";
console.log("monster/01:", data, tree.value, tree.children.length, value);

export {};
