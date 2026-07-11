/**
 * advance/10 - Ambient & Global Declarations
 * ------------------------------------------
 * Covers: `declare` (describe a runtime value with no TS source, emits
 * no JS), and `declare global` (augment the global scope). In real
 * projects these live in `.d.ts` files; shown inline here so it runs.
 */

// `declare` = "trust me, this exists at runtime". It produces NO JavaScript.
declare const APP_VERSION: string;
// Normally a bundler/env injects this; we set it so the demo runs:
(globalThis as { APP_VERSION?: string }).APP_VERSION = "1.0.0";

// Global augmentation - add a typed member to the global object.
declare global {
  // eslint-disable-next-line no-var
  var featureFlags: Record<string, boolean>;
}
globalThis.featureFlags = { beta: true, darkMode: false };

console.log("advance/10:", APP_VERSION, globalThis.featureFlags["beta"]);

export {};
