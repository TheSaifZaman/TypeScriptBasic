/**
 * mid/05 - Decorators
 * -------------------
 * Covers: a method decorator (meta-programming).
 * Requires "experimentalDecorators": true in tsconfig.json.
 */

// A method decorator logs each call and its arguments.
function Log(target: any, propertyKey: string, descriptor: PropertyDescriptor): void {
  const original = descriptor.value;
  descriptor.value = function (...args: any[]) {
    console.log(`mid/05: calling ${propertyKey}(${args.join(", ")})`);
    return original.apply(this, args);
  };
}

class Calculator {
  @Log
  add(a: number, b: number): number {
    return a + b;
  }
}

const calc = new Calculator();
console.log("mid/05: result:", calc.add(5, 7));

export {};
