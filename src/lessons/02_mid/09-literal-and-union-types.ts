/**
 * mid/09 - Literal & Union Types
 * ------------------------------
 * Covers: string/number/boolean literal types, unions, literal
 * narrowing, and modelling state with unions instead of booleans.
 */

// Literal types - a value restricted to specific constants
type Alignment = "left" | "center" | "right";
type Dice = 1 | 2 | 3 | 4 | 5 | 6;
type ToggleOn = true;

function setAlign(a: Alignment): Alignment {
  return a; // only the 3 allowed strings compile
}

// Unions combine several possibilities
type Id = number | string;
function stringifyId(id: Id): string {
  return typeof id === "number" ? id.toFixed(0) : id;
}

// Model state as a union of exact shapes ("make illegal states unrepresentable")
type RequestState =
  | { status: "idle" }
  | { status: "loading" }
  | { status: "success"; data: string }
  | { status: "error"; message: string };

function render(state: RequestState): string {
  switch (state.status) {
    case "idle":
      return "-";
    case "loading":
      return "Loading…";
    case "success":
      return state.data; // `data` only exists in this branch
    case "error":
      return state.message; // `message` only exists here
  }
}

const roll: Dice = 4;
console.log(
  "mid/09:",
  setAlign("center"),
  stringifyId(42),
  roll,
  render({ status: "success", data: "done" }),
);

export {};
