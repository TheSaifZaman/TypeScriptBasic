/**
 * basic/06 - Enums (and their alternatives)
 * ------------------------------------------
 * Covers: numeric enums, string enums, const enums, and the
 * `as const` union pattern often preferred over enums.
 */

// Numeric enum (auto-incrementing from 0)
enum Direction {
  Up, // 0
  Down, // 1
  Left, // 2
  Right, // 3
}

// String enum (explicit, debuggable values)
enum Weekday {
  Monday = "Monday",
  Tuesday = "Tuesday",
  Wednesday = "Wednesday",
}

// const enum - inlined at compile time (no runtime object emitted)
const enum LogLevel {
  Info,
  Warn,
  Error,
}

// Modern alternative: `as const` object + union type.
// Lighter output and works well with plain JS interop.
const Status = {
  Active: "active",
  Inactive: "inactive",
} as const;
type Status = (typeof Status)[keyof typeof Status]; // "active" | "inactive"

const current: Status = Status.Active;

console.log("basic/06:", Direction.Right, Weekday.Monday, LogLevel.Error, current);

export {};
