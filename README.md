# TypeScript Basics - Learn, Practice

A hands-on TypeScript project that also works as a study guide. Every concept has a small, runnable lesson in [`src/lessons/`](src/lessons), and this README is a topic checklist with tips and Points for each area.

---

## Table of Contents

1. [Quick Start](#quick-start)
2. [Project Structure](#project-structure)
3. [Learning Path (runnable lessons)](#learning-path-runnable-lessons)
4. [Complete TypeScript Topic Checklist](#complete-typescript-topic-checklist)
   - [Fundamentals](#1-fundamentals)
   - [Functions](#2-functions)
   - [Objects, Interfaces & Types](#3-objects-interfaces--types)
   - [Classes & OOP](#4-classes--oop)
   - [Generics](#5-generics)
   - [Advanced Types](#6-advanced-types)
   - [Utility Types](#7-utility-types)
   - [Modules & Namespaces](#8-modules--namespaces)
   - [Async & Iterators](#9-async--iterators)
   - [Decorators & Meta-programming](#10-decorators--meta-programming)
   - [Compiler & Config](#11-compiler--config)
   - [Ecosystem & Real-world](#12-ecosystem--real-world)
   - [Expert / Type-Level (Monster)](#13-expert--type-level-monster)
5. [Tips & Tricks](#tips--tricks)
6. [tsconfig Cheat Sheet](#tsconfig-cheat-sheet)
7. [Resources](#resources)

---

## Quick Start

```bash
npm install        # install TypeScript

npm run build      # compile src/ -> dist/
npm run run:lessons  # build + run every lesson in the terminal

npm start          # build + serve index.html at http://localhost:3000
                   # (open the browser console to see lesson output)

npm run typecheck  # type-check without emitting files
npm run watch      # recompile on every save
```

---

## Project Structure

```text
TypeScriptBasic/
├── src/
│   ├── index.ts                     # entry point - imports & runs every lesson
│   └── lessons/                     # self-contained, runnable lessons, grouped by level
│       ├── 01_basic/                # fundamentals
│       ├── 02_mid/                  # intermediate
│       ├── 03_advance/              # advanced type system
│       ├── 04_monster/              # expert, type-level features
├── dist/                            # compiled JavaScript (git-ignored)
├── index.html                       # loads dist/index.js as an ES module
├── server.cjs                       # tiny static file server (npm start)
├── tsconfig.json                    # TypeScript compiler configuration
└── package.json
```

Each lesson is a standalone module (it ends with `export {}`), so its declarations don't collide with other lessons, and importing it runs its demo. The five numbered groups increase in difficulty.

---

## Learning Path (runnable lessons)

### 01 | Basic - [`src/lessons/01_basic/`](src/lessons/01_basic)

| # | Lesson | Concepts covered |
|---|--------|------------------|
| 01 | [Variables & Types](src/lessons/01_basic/01-variables-and-types.ts) | `let`/`const`/`var`, primitives, `any`/`unknown`/`never`/`void`, inference |
| 02 | [Functions](src/lessons/01_basic/02-functions.ts) | Typed params & returns, arrow fns, optional/default/rest params, overloads |
| 03 | [Arrays & Tuples](src/lessons/01_basic/03-arrays-and-tuples.ts) | Array syntaxes, readonly arrays, tuples, named/optional/rest elements |
| 04 | [Interfaces & Types](src/lessons/01_basic/04-interfaces-and-types.ts) | Interfaces, `readonly`/optional, `extends`, index signatures, unions, intersections |
| 05 | [Classes & OOP](src/lessons/01_basic/05-classes.ts) | Access modifiers, parameter properties, inheritance, `static`, `abstract`, getters/setters |
| 06 | [Enums](src/lessons/01_basic/06-enums.ts) | Numeric/string/const enums, and the `as const` union alternative |
| 07 | [Inference & Assertions](src/lessons/01_basic/07-type-inference-and-assertions.ts) | Inference, widening, `as const`, `as`, `!`, `satisfies` |

### 02 | Mid - [`src/lessons/02_mid/`](src/lessons/02_mid)

| # | Lesson | Concepts covered |
|---|--------|------------------|
| 01 | [Generics](src/lessons/02_mid/01-generics.ts) | Generic functions/classes/interfaces, constraints, `keyof`, defaults |
| 02 | [Advanced Types](src/lessons/02_mid/02-advanced-types.ts) | Discriminated unions, guards, `keyof`/`typeof`, mapped & conditional (overview) |
| 03 | [Utility Types](src/lessons/02_mid/03-utility-types.ts) | `Partial`, `Required`, `Pick`, `Omit`, `Record`, `ReturnType`, `Awaited`, … |
| 04 | [Async / await](src/lessons/02_mid/04-async-await.ts) | Typed `Promise`s, `async`/`await`, `Promise.all`, `unknown` in `catch` |
| 05 | [Decorators](src/lessons/02_mid/05-decorators.ts) | Method decorator (meta-programming) |
| 06 | [Modules](src/lessons/02_mid/06-modules.ts) | Named/default/aliased/type-only imports & exports |
| 07 | [Narrowing & Type Guards](src/lessons/02_mid/07-narrowing-and-type-guards.ts) | `typeof`/`instanceof`/`in`, truthiness, predicates (`x is T`) |
| 08 | [keyof / typeof / Indexed Access](src/lessons/02_mid/08-keyof-typeof-indexed-access.ts) | `keyof`, type-level `typeof`, `T[K]`, safe getters |
| 09 | [Literal & Union Types](src/lessons/02_mid/09-literal-and-union-types.ts) | Literal types, unions, modelling state as unions |
| 10 | [Iterators & Generators](src/lessons/02_mid/10-iterators-and-generators.ts) | `function*`, `yield`, `Symbol.iterator`, async generators |
| 11 | [Typing `this`](src/lessons/02_mid/11-this-typing.ts) | `this` parameters, polymorphic `this`, `ThisType<T>` |
| 12 | [Symbols](src/lessons/02_mid/12-symbols.ts) | `Symbol`, `unique symbol`, symbol keys, `Symbol.for` |
| 13 | [More Utility Types](src/lessons/02_mid/13-more-utility-types.ts) | `InstanceType`, `ConstructorParameters`, `ThisParameterType`, `NoInfer` |

### 03 | Advance - [`src/lessons/03_advance/`](src/lessons/03_advance)

| # | Lesson | Concepts covered |
|---|--------|------------------|
| 01 | [Conditional Types](src/lessons/03_advance/01-conditional-types.ts) | `T extends U ? X : Y`, distributive conditionals |
| 02 | [Mapped Types](src/lessons/03_advance/02-mapped-types.ts) | Key mapping, `+/-` modifiers, key remapping with `as` |
| 03 | [Template Literal Types](src/lessons/03_advance/03-template-literal-types.ts) | String types, `Uppercase`/`Capitalize`, `infer` in templates |
| 04 | [The `infer` Keyword](src/lessons/03_advance/04-infer-keyword.ts) | Extracting element/return/param/promise types |
| 05 | [Discriminated Unions](src/lessons/03_advance/05-discriminated-unions.ts) | Tagged unions, exhaustive `switch`, `assertNever` |
| 06 | [Generic Constraints & Variance](src/lessons/03_advance/06-generic-constraints-variance.ts) | `extends`, `NoInfer`, `in`/`out` variance |
| 07 | [Declaration Merging](src/lessons/03_advance/07-declaration-merging.ts) | Interface/enum merging, function + namespace merging |
| 08 | [Namespaces](src/lessons/03_advance/08-namespaces.ts) | Namespaces, nesting, aliasing (legacy patterns) |
| 09 | [Index Signatures & Records](src/lessons/03_advance/09-index-signatures-and-records.ts) | String/number index signatures, `Record`, readonly indexes |
| 10 | [Ambient & Global Declarations](src/lessons/03_advance/10-ambient-and-global-declarations.ts) | `declare`, `.d.ts`, `declare global` |
| 11 | [Type-Only Imports](src/lessons/03_advance/11-type-only-imports.ts) | `import type`, inline `type`, `export type` |
| 12 | [Construct & Hybrid Types](src/lessons/03_advance/12-construct-and-hybrid-types.ts) | `new (...) => T` signatures, callable-object types |
| 13 | [Mixins](src/lessons/03_advance/13-mixins.ts) | Composing behaviour via class factories |
| 14 | [Module Augmentation](src/lessons/03_advance/14-module-augmentation.ts) | Extending an existing module's types (`declare module`) |

### 04 | Monster - [`src/lessons/04_monster/`](src/lessons/04_monster)

| # | Lesson | Concepts covered |
|---|--------|------------------|
| 01 | [Recursive Types](src/lessons/04_monster/01-recursive-types.ts) | JSON/tree types, recursive conditional types |
| 02 | [DeepPartial & DeepReadonly](src/lessons/04_monster/02-deep-partial-and-readonly.ts) | Recursive mapped types |
| 03 | [Variadic Tuple Types](src/lessons/04_monster/03-variadic-tuple-types.ts) | Tuple spreads, `Concat`, `First`/`Last` |
| 04 | [Branded / Nominal Types](src/lessons/04_monster/04-branded-nominal-types.ts) | Simulating nominal typing, units of measure |
| 05 | [`const` Type Parameters](src/lessons/04_monster/05-const-type-parameters.ts) | Literal inference without `as const` |
| 06 | [Assertion Functions](src/lessons/04_monster/06-assertion-functions.ts) | `asserts condition`, `asserts x is T` |
| 07 | [The `satisfies` Operator](src/lessons/04_monster/07-satisfies-operator.ts) | Validate without widening |
| 08 | [Type-Level Programming](src/lessons/04_monster/08-type-level-programming.ts) | Type-level arithmetic & string parsing |
| 09 | [Type-Safe Builder Pattern](src/lessons/04_monster/09-builder-pattern-types.ts) | Tracking set fields so `build()` is gated |

---

## Complete TypeScript Topic Checklist

Use this as a study map. = has a runnable lesson in [`src/lessons/`](src/lessons), = concept to read/practice (mentioned in a lesson's comments or worth exploring further). Between the **basic -> mid -> advance -> monster** groups, almost every item below now has dedicated example code.

### 1. Fundamentals

- `let` / `const` / `var` and scoping
- Primitives: `string`, `number`, `boolean`, `null`, `undefined`, `bigint`, `symbol`
- Arrays (`T[]` vs `Array<T>`) and tuples (incl. `readonly` tuples)
- Special types: `any`, `unknown`, `never`, `void`
- Type **inference** vs explicit **annotation**
- Type **assertions** (`as`, `<T>`) and `!` non-null assertion
- Literal types & literal narrowing (`const` vs `let` inference)
- Symbols & `unique symbol` *(mid/12)*
- Definite assignment assertion (`let x!: T`) *(basic/07)*

**Points**

- **`any` vs `unknown`:** both accept any value, but `unknown` is *safe* - you must narrow it before use; `any` disables checking entirely. Prefer `unknown`.
- **`never` vs `void`:** `void` = returns nothing; `never` = never returns (throws/infinite loop). `never` is also the type of exhaustiveness checks.
- **Structural typing:** TS types are compatible by *shape*, not by name ("duck typing").

### 2. Functions

- Parameter & return type annotations
- Optional (`?`), default, and rest (`...`) parameters
- Function type expressions & call signatures
- Function **overloads**
- `this` typing and `ThisParameterType` *(mid/11, mid/13)*
- Construct signatures & hybrid (callable-object) types *(advance/12)*
- Contextual typing (callbacks infer their parameter types) (reference)

**Points**

- Order overloads from **most specific to least specific**; the implementation signature is *not* callable from outside.
- A parameter typed `(x?: number)` is `number | undefined`; a default value narrows it back to `number` inside the body.

### 3. Objects, Interfaces & Types

- Interfaces, optional & `readonly` members
- Extending interfaces / intersection types
- Index signatures
- Type aliases, unions & intersections
- Declaration merging (interfaces re-open, types don't) (reference)
- Excess property checks on object literals (reference)

**Points**

- **`interface` vs `type`:** `interface` supports declaration merging and is idiomatic for object/class contracts; `type` can also express unions, tuples, primitives, and mapped/conditional types. Use `interface` for public shapes, `type` for everything else.
- **Union vs intersection:** union `A | B` = "either"; intersection `A & B` = "both combined".

### 4. Classes & OOP

- Access modifiers: `public`, `private`, `protected`, `readonly`
- Parameter properties (constructor shorthand)
- Inheritance & `override`
- `static` members, `abstract` classes
- Getters / setters, implementing interfaces
- Mixins (composing behaviour via class factories) *(advance/13)*
- `#private` (true runtime-private) vs `private` (compile-time only) (reference)

**Points**

- TS `private` is erased at compile time - it's *not* enforced at runtime. Use JS `#field` for real privacy.
- **Abstract class vs interface:** an abstract class can hold implementation and state; an interface is a pure contract with no runtime footprint.

### 5. Generics

- Generic functions, classes, and interfaces
- Constraints with `extends`
- `keyof` constraints (`K extends keyof T`)
- Default type parameters
- Generic inference and when to annotate explicitly (reference)

**Points**

- Generics preserve the relationship between input and output types (`identity<T>(x: T): T`) - something `any` throws away.
- `T extends keyof U` is the classic way to type a safe property getter.

### 6. Advanced Types

- Literal & template literal types
- **Discriminated unions** + exhaustiveness with `never`
- Type guards & type predicates (`x is Foo`)
- `keyof` and `typeof`
- Mapped types (`{ [K in keyof T]: ... }`)
- Conditional types (`T extends U ? X : Y`) and `infer`
- `in`, `instanceof`, and `typeof` narrowing
- Indexed access types (`T["prop"]`)

**Points**

- A **discriminated union** = several object types sharing one literal "tag" field (`kind`). `switch`-ing on the tag narrows each branch; a `never` default catches unhandled cases at compile time.
- A **type predicate** (`function isX(v): v is X`) lets you write reusable, type-aware guards.
- **Mapped + conditional types** power most utility types.

### 7. Utility Types

- `Partial`, `Required`, `Readonly`
- `Pick`, `Omit`, `Record`
- `Exclude`, `Extract`, `NonNullable`
- `ReturnType`, `Parameters`, `Awaited`
- String manipulation types: `Uppercase`, `Lowercase`, `Capitalize` (see advance/03)
- `InstanceType`, `ConstructorParameters`, `ThisType` (reference)

**Points**

- Know the difference between `Pick<T, K>` (keep listed keys) and `Omit<T, K>` (drop listed keys).
- `Record<Keys, Value>` is the cleanest way to type a dictionary/lookup object.
- These are just mapped/conditional types under the hood - try re-implementing `Partial` and `Pick` yourself.

### 8. Modules & Namespaces

- Named, default, aliased, and type-only imports/exports
- Namespaces (legacy - prefer ES modules) *(advance/08)*
- Declaration merging *(advance/07)*
- `import type` / `export type` and `verbatimModuleSyntax` *(advance/11)*
- Ambient declarations (`declare`, `.d.ts`) & `declare global` *(advance/10)*
- Module augmentation (`declare module`) *(advance/14)*
- ES modules vs CommonJS, and `esModuleInterop` (reference)

**Points**

- Prefer **ES modules** over namespaces in new code.
- `import type` is erased at runtime - use it to avoid pulling runtime code in just for a type, and to prevent circular-dependency issues.

### 9. Async & Iterators

- Typing `Promise<T>` and `async`/`await`
- `Promise.all` and error handling (`unknown` in `catch`)
- `for...of`, iterators & generators (`function*`, `Iterable<T>`) *(mid/10)*
- Async iterators (`for await...of`) *(mid/10)*

**Points**

- With `strict` (specifically `useUnknownInCatchVariables`), a caught error is `unknown` - narrow with `instanceof Error` before using it.
- `async` functions always return a `Promise`; `await` unwraps it (`Awaited<T>` gives the resolved type).

### 10. Decorators & Meta-programming

- Method decorator (requires `experimentalDecorators`)
- Class, property, accessor, and parameter decorators (reference)
- Decorator factories and `reflect-metadata` (reference)
- Stage-3 (standard) decorators vs legacy `experimentalDecorators` (reference)

**Points**

- Decorators are functions that observe/replace/augment a declaration. Widely used by Angular, NestJS, and TypeORM.
- Note the split between **legacy** (`experimentalDecorators`) and **new standard** decorators - know which your project targets.

### 11. Compiler & Config

- `strict` and the flags it enables (see [cheat sheet](#tsconfig-cheat-sheet)) (reference)
- `target`, `module`, `moduleResolution`, `lib` (reference)
- `noEmit`, `declaration`, `sourceMap`, `outDir`/`rootDir` (reference)
- `noUncheckedIndexedAccess`, `exactOptionalPropertyTypes` (reference)
- Project references & incremental builds (reference)

**Points**

- **Always enable `strict`.** It turns on `strictNullChecks`, `noImplicitAny`, and more - the settings that make TS actually catch bugs.
- `strictNullChecks` forces you to handle `null`/`undefined` explicitly - the single most valuable flag.

### 12. Ecosystem & Real-world

- `@types/*` packages & DefinitelyTyped (reference)
- Writing `.d.ts` declaration files (reference)
- TS with React (`FC`, props typing, hooks), Node, Express (reference)
- Tooling: ESLint (`@typescript-eslint`), Prettier, `ts-node`, `tsx`, Vite/esbuild/swc (reference)
- Type-safe validation at runtime boundaries (e.g. Zod) - types vanish at runtime, so validate external data (reference)

**Points**

- **Types are erased at runtime.** They give you *compile-time* safety only - validate data crossing the boundary (API responses, form input) with runtime checks.
- Know that `@types/x` provides types for untyped JS libraries.

### 13. Expert / Type-Level (Monster)

- Recursive types (JSON, trees) & recursive conditional types
- Recursive mapped types (`DeepPartial`, `DeepReadonly`)
- Variadic tuple types (spreads, `First`/`Last`)
- Branded / nominal types
- `const` type parameters
- Assertion functions (`asserts`)
- The `satisfies` operator
- Type-level programming (arithmetic, string parsing)
- Type-safe builder pattern

**Points**

- **Branding** simulates nominal typing on a structural system - the trick behind type-safe IDs and units.
- `satisfies` gives you validation *and* the narrow inferred type; `: Type` annotation gives validation but widens.
- Assertion functions (`asserts x is T`) narrow like guards but **throw** instead of returning a boolean.

---

## Tips & Tricks

- **Prefer `const`**, and let TypeScript **infer** types - annotate return types on exported/public functions, but don't over-annotate locals.
- **Use `as const`** to lock literals: `const routes = ['/a', '/b'] as const` gives you a readonly tuple of exact string literals.
- **Model "impossible states as impossible"** with discriminated unions instead of many optional booleans.
- **Reach for `unknown`, never `any`** at untyped boundaries, then narrow.
- **`satisfies`** checks a value against a type *without* widening it: `const cfg = {...} satisfies Config` keeps precise literal types while validating the shape.
- **Derive, don't duplicate:** use `typeof`, `keyof`, `ReturnType`, and indexed access to keep types in sync with values.
- **Non-null assertion `!`** is a code smell - prefer real narrowing or optional chaining `?.` / nullish coalescing `??`.
- **Enable `noUncheckedIndexedAccess`** so `arr[i]` is `T | undefined` - it catches a whole class of runtime bugs.
- **Template literal types** can type things like `` `on${Capitalize<Event>}` `` event-handler names.
- **Turn on `strict` from day one** - retrofitting it onto a large codebase is painful.

---

## Questions & Answers

<details>
<summary><b>What are the benefits of TypeScript over JavaScript?</b></summary>

Static type checking (catch errors at compile time), better editor tooling (autocomplete, refactoring, inline docs), self-documenting code, safer refactors, and modern features that compile down for older targets. The trade-off is a build step and a learning curve.
</details>

<details>
<summary><b>Explain <code>any</code> vs <code>unknown</code> vs <code>never</code>.</b></summary>

`any` opts out of type checking. `unknown` is the type-safe top type - accepts anything but forces you to narrow before use. `never` is the bottom type - no value is assignable to it; it's the return type of functions that never return and the result of exhaustive narrowing.
</details>

<details>
<summary><b>Difference between <code>interface</code> and <code>type</code>?</b></summary>

`interface` can be re-opened (declaration merging) and is idiomatic for object/class shapes. `type` aliases can also represent unions, intersections, tuples, primitives, and mapped/conditional types, but cannot be merged. Both can extend and be extended. Rule of thumb: `interface` for public object/class contracts, `type` for unions and computed types.
</details>

<details>
<summary><b>What is structural typing?</b></summary>

TypeScript compares types by their *structure/shape*, not their declared name. If an object has all the members a type requires, it's assignable - regardless of whether it was declared as that type ("duck typing").
</details>

<details>
<summary><b>What are generics and why use them?</b></summary>

Generics let you write reusable components that work over many types while preserving type relationships. `identity<T>(x: T): T` keeps the exact input type on the output - unlike `any`, which loses it. Constraints (`T extends ...`) restrict what a generic accepts.
</details>

<details>
<summary><b>How do you narrow types? Name several techniques.</b></summary>

`typeof` guards (primitives), `instanceof` (classes), the `in` operator (property presence), truthiness/equality checks, discriminated unions (a shared literal tag), and custom type guards with a `x is T` predicate.
</details>

<details>
<summary><b>What is a discriminated (tagged) union?</b></summary>

A union of object types that share a common literal property (the discriminant, e.g. `kind: "circle"`). Switching on that property narrows to the specific member in each branch; a `never`-typed `default` gives compile-time exhaustiveness checking.
</details>

<details>
<summary><b>What does <code>strictNullChecks</code> do?</b></summary>

It removes `null`/`undefined` from the domain of every type unless explicitly included. You must handle the nullable case, which eliminates a huge class of "cannot read property of undefined" bugs.
</details>

<details>
<summary><b>Are types available at runtime?</b></summary>

No. TypeScript types are erased during compilation. For runtime safety at boundaries (API responses, user input) you need actual runtime checks or a validation library.
</details>

<details>
<summary><b>Explain a few utility types.</b></summary>

`Partial<T>` (all optional), `Required<T>` (all required), `Pick<T,K>`/`Omit<T,K>` (keep/drop keys), `Record<K,V>` (dictionary), `Readonly<T>`, `ReturnType<F>`, `Parameters<F>`, and `Awaited<P>` (unwrap a Promise). They're built from mapped and conditional types.
</details>

<details>
<summary><b>What is the difference between <code>enum</code> and <code>as const</code> unions?</b></summary>

A regular `enum` emits a runtime object and supports reverse mapping (numeric enums). An `as const` object + union type produces lighter output, plays nicely with plain JS, and gives you an exact string-literal union. `const enum` inlines values but has caveats with isolated modules.
</details>

<details>
<summary><b>What are decorators used for?</b></summary>

They're functions that annotate and modify classes and their members (methods, properties, accessors, parameters) - used heavily for dependency injection, routing, and ORM metadata in frameworks like Angular, NestJS, and TypeORM. Note the legacy vs Stage-3 standard split.
</details>

---

## tsconfig Cheat Sheet

Key options used in [`tsconfig.json`](tsconfig.json):

| Option | Value here | What it does |
|--------|-----------|--------------|
| `target` | `es2020` | JS language level of the emitted code (needed for `bigint`, optional chaining, etc.) |
| `module` | `es2015` | Emits ES module `import`/`export` |
| `strict` | `true` | Enables all strict type-checking flags - **keep this on** |
| `rootDir` / `outDir` | `src` / `dist` | Where sources live / where compiled JS goes |
| `esModuleInterop` | `true` | Smooth interop with CommonJS default imports |
| `forceConsistentCasingInFileNames` | `true` | Prevents case-mismatch import bugs across OSes |
| `experimentalDecorators` | `true` | Enables the decorator syntax used in lesson 10 |
| `skipLibCheck` | `true` | Skips type-checking `.d.ts` files (faster builds) |

> **Note on imports:** because output is ES modules, relative imports in `.ts` source use the compiled `.js` extension (e.g. `import "./lessons/01-....js"`). This is expected for native ESM output.

---

## Resources

- [TypeScript Handbook](https://www.typescriptlang.org/docs/handbook/intro.html) - the official docs
- [TypeScript Playground](https://www.typescriptlang.org/play) - experiment in the browser
- [Type Challenges](https://github.com/type-challenges/type-challenges) - level up your type-level skills
- [Total TypeScript](https://www.totaltypescript.com/) - advanced patterns
- [DefinitelyTyped](https://github.com/DefinitelyTyped/DefinitelyTyped) - community type definitions

---

Contributions and new lessons are welcome.
