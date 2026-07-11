/**
 * advance/03 - Template Literal Types
 * -----------------------------------
 * Covers: building string types from unions, the intrinsic string
 * manipulation types, and inferring parts of a string type.
 */

// Compose string literal types
type Lang = "en" | "de";
type Page = "home" | "about";
type Route = `/${Lang}/${Page}`; // "/en/home" | "/en/about" | "/de/home" | "/de/about"

// Intrinsic string types: Uppercase / Lowercase / Capitalize / Uncapitalize
type Loud = Uppercase<"hello">; // "HELLO"
type Event = "click" | "hover";
type Handler = `on${Capitalize<Event>}`; // "onClick" | "onHover"

// Infer a substring with `infer` inside a template literal
type ExtractId<T> = T extends `user_${infer Id}` ? Id : never;
type Id = ExtractId<"user_42">; // "42"

// Typed CSS-like values
type Px = `${number}px`;
const width: Px = "1200px";

const route: Route = "/en/home";
const handler: Handler = "onClick";
console.log("advance/03:", route, handler, width);

export {};
