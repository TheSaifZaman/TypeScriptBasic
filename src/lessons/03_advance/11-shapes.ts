/**
 * advance/11 (helper) - a small module that exports TYPES and one value.
 * Used by 11-type-only-imports.ts and 14-module-augmentation.ts.
 */

export interface Shape {
  id: string;
}

export interface Theme {
  primary: string;
}

export type Size = "sm" | "md" | "lg";

export const DEFAULT_SIZE: Size = "md";
