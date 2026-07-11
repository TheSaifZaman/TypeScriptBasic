/**
 * monster/02 - DeepPartial & DeepReadonly
 * ---------------------------------------
 * Covers: recursive mapped types that transform every nested level
 * of an object (not just the top level, like the built-ins do).
 */

type DeepPartial<T> = T extends (infer U)[]
  ? DeepPartial<U>[]
  : T extends object
    ? { [K in keyof T]?: DeepPartial<T[K]> }
    : T;

type DeepReadonly<T> = T extends (infer U)[]
  ? ReadonlyArray<DeepReadonly<U>>
  : T extends object
    ? { readonly [K in keyof T]: DeepReadonly<T[K]> }
    : T;

interface Settings {
  ui: { theme: string; sizes: number[] };
  features: { beta: boolean };
}

// Every nested property is now optional - perfect for "patch" / update objects
const patch: DeepPartial<Settings> = { ui: { theme: "dark" } };

// Every nested property is now readonly, all the way down
const frozen: DeepReadonly<Settings> = {
  ui: { theme: "dark", sizes: [12, 14] },
  features: { beta: true },
};
// frozen.ui.theme = "light"; // readonly all the way down

console.log("monster/02:", patch, frozen.ui.theme, frozen.ui.sizes.length);

export {};
