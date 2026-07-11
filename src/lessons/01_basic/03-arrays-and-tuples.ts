/**
 * basic/03 - Arrays & Tuples
 * --------------------------
 * Covers: array syntaxes, readonly arrays, multidimensional arrays,
 * tuples, optional & named tuple elements, and rest elements.
 */

// Two equivalent array syntaxes
const nums: number[] = [1, 2, 3];
const words: Array<string> = ["a", "b"];

// readonly arrays cannot be mutated
const frozen: readonly number[] = [1, 2, 3];
// frozen.push(4); // push does not exist on readonly arrays

// Multidimensional
const grid: number[][] = [
  [1, 2],
  [3, 4],
];

// Tuple - fixed length, each position has its own type
const rgb: [number, number, number] = [255, 128, 0];

// Named tuple elements (labels are for readability/tooling)
const point: [x: number, y: number] = [10, 20];

// Optional tuple element + rest elements
type HttpResult = [status: number, message?: string];
const ok: HttpResult = [200];
const err: HttpResult = [404, "Not Found"];
type Path = [root: string, ...segments: string[]];
const p: Path = ["/", "users", "42"];

// noUncheckedIndexedAccess makes indexed access `T | undefined`,
// so out-of-range access is caught - narrow before using.
const maybe = nums[10]; // number | undefined
console.log("basic/03:", nums, words, frozen, grid, rgb, point, ok, err, p, maybe ?? "no value");

export {};
