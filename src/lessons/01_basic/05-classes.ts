/**
 * basic/05 - Classes & OOP
 * -------------------------
 * Covers: access modifiers, parameter properties, inheritance,
 * static members, abstract classes, getters/setters, and
 * implementing interfaces.
 */

interface Describable {
  describe(): string;
}

// Access modifiers + parameter properties (shorthand for declare+assign)
class Animal implements Describable {
  constructor(
    public name: string, // public: accessible everywhere
    protected legs: number, // protected: this class + subclasses
    private secret: string = "hidden", // private: this class only
    public readonly species: string = "unknown" // readonly: set once
  ) {}

  makeSound(): void {
    console.log(`${this.name} makes a sound`);
  }

  describe(): string {
    return `${this.name} (${this.species}) has ${this.legs} legs`;
  }
}

// Inheritance + method override
class Dog extends Animal {
  constructor(name: string) {
    super(name, 4, "good boy", "dog");
  }

  override makeSound(): void {
    console.log(`${this.name} barks`);
  }
}

// Static members belong to the class, not instances
class MathUtils {
  static readonly PI = 3.14159;
  static circleArea(r: number): number {
    return MathUtils.PI * r * r;
  }
}

// Abstract class - a template that cannot be instantiated directly
abstract class Shape {
  abstract area(): number; // subclasses must implement
  describe(): string {
    return `Area is ${this.area()}`;
  }
}

class Square extends Shape {
  constructor(private side: number) {
    super();
  }
  area(): number {
    return this.side ** 2;
  }
}

// Getters / setters
class Temperature {
  private _celsius = 0;
  get fahrenheit(): number {
    return this._celsius * 1.8 + 32;
  }
  set fahrenheit(value: number) {
    this._celsius = (value - 32) / 1.8;
  }
}

const dog = new Dog("Rex");
dog.makeSound();
const temp = new Temperature();
temp.fahrenheit = 212;

console.log("basic/05:", dog.describe(), MathUtils.circleArea(2), new Square(3).describe(), temp.fahrenheit);

export {};
