/**
 * basic/07 - Type Inference & Assertions
 * --------------------------------------
 * Covers: inference, widening vs `as const`, type assertions (`as`),
 * non-null assertion (`!`), and the `satisfies` operator.
 */

// Inference - TypeScript figures the type out; no annotation needed
let inferredString = "hello"; // string
const inferredLiteral = "hello"; // "hello" (const narrows to a literal)

// Widening: `let` widens literals to their base type
let widened = "a"; // string, not "a"

// `as const` freezes a value to its most specific, readonly form
const roles = ["admin", "user"] as const; // readonly ["admin", "user"]
type Role = (typeof roles)[number]; // "admin" | "user"

// Type assertion - "trust me, it's this type" (no runtime check!)
const input = "42" as unknown as number; // double assertion (use sparingly)
const el = { value: "x" } as { value: string };

// Non-null assertion `!` - asserts a value is not null/undefined
function firstChar(s?: string): string {
  return s!.charAt(0); // throws at runtime if s is undefined
}

// `satisfies` - validate a value against a type WITHOUT widening it.
// Here `config` still has literal types, but is checked to match the shape.
type Config = Record<string, string | number>;
const config = {
  host: "localhost",
  port: 8080,
} satisfies Config;

const portNumber: number = config.port; // stays `number`, not `string | number`

// Definite assignment assertion (`!`) - promise TS a variable/field WILL be
// assigned before use, even though TS can't prove it (e.g. set up elsewhere).
let token!: string; // note the `!` - no "used before assigned" error
function initToken(): void {
  token = "abc123";
}
initToken();

console.log("basic/07:", inferredString, inferredLiteral, widened, roles, el.value, firstChar("hi"), portNumber, token);

export {};
