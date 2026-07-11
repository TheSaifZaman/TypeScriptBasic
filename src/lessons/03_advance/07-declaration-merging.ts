/**
 * advance/07 - Declaration Merging
 * --------------------------------
 * Covers: merging interfaces, augmenting a function with properties
 * (function + namespace merging), and enum merging.
 */

// Two interfaces with the same name MERGE into one.
interface Box {
  width: number;
}
interface Box {
  height: number;
}
const box: Box = { width: 10, height: 20 }; // must satisfy both declarations

// Function + namespace merging - attach typed static properties to a function.
function counter(): number {
  counter.count += 1;
  return counter.count;
}
namespace counter {
  export let count = 0;
}
counter();
counter();

// Interface + class... and enum merging: extend an enum with more members.
enum Color {
  Red = "red",
}
enum Color {
  Green = "green",
}

console.log("advance/07:", box, counter.count, Color.Red, Color.Green);

export {};
