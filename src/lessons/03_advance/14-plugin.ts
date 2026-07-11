/**
 * advance/14 (helper) - a module representing a "third-party library"
 * whose types we will extend from the outside via module augmentation.
 */

export interface PluginConfig {
  name: string;
}

export const version = "1.0.0";
