// Encapsulation
class Animal {
    protected name: string;

    constructor(name: string) {
        this.name = name;
    }

    public makeSound(): void {
        console.log(`${this.name} makes a sound`);
    }
}

// Inheritance
class Dog extends Animal {
    constructor(name: string) {
        super(name);
    }

    public makeSound(): void {
        console.log(`${this.name} barks`);
    }
}

// Static members
class MathUtils {
    static PI = 3.14159;

    static calculateArea(radius: number): number {
        return MathUtils.PI * radius * radius;
    }
}

// Abstract class
abstract class Vehicle {
    abstract start(): void;
}

class Car extends Vehicle {
    start(): void {
        console.log("Car started");
    }
}