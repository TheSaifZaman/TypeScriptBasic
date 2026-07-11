/**
 * advance/08 - Namespaces
 * -----------------------
 * Covers: namespaces for grouping, nested namespaces, and aliasing.
 * NOTE: in modern code prefer ES modules; namespaces are mainly seen
 * in older codebases and ambient (.d.ts) type declarations.
 */

namespace Geometry {
  export const PI = 3.14159;

  export function circleArea(r: number): number {
    return PI * r * r;
  }

  // Nested namespace
  export namespace ThreeD {
    export function sphereVolume(r: number): number {
      return (4 / 3) * PI * r ** 3;
    }
  }
}

// Access members through the namespace
const area = Geometry.circleArea(2);
const volume = Geometry.ThreeD.sphereVolume(2);

// Alias a (nested) namespace for convenience
import Solid = Geometry.ThreeD;
const volume2 = Solid.sphereVolume(3);

console.log("advance/08:", area.toFixed(2), volume.toFixed(2), volume2.toFixed(2));

export {};
