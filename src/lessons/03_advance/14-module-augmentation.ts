/**
 * advance/14 - Module Augmentation
 * --------------------------------
 * Add members to an existing module's types WITHOUT editing its source -
 * the mechanism behind extending third-party library types (e.g. adding
 * a custom property to Express's `Request`, or a field to a plugin config).
 *
 * NOTE: augmentation is GLOBAL - once you extend a module's interface,
 * every importer of that module sees the new member. That's why libraries
 * expose interfaces specifically so you can augment them.
 */

import { version, type PluginConfig } from "./14-plugin.js";

// Re-open the "library" module and extend its interface.
declare module "./14-plugin.js" {
  interface PluginConfig {
    timeoutMs: number; // a field the original library never declared
  }
}

// PluginConfig now has BOTH the original `name` and the augmented `timeoutMs`.
const config: PluginConfig = { name: "auth", timeoutMs: 5000 };

console.log("advance/14:", config.name, config.timeoutMs, version);

export {};
