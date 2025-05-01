export function identity<T>(arg: T): T {
    return arg;
}

export function addId<T extends { name: string; age: number }>(obj: T): T {
    const id = Math.random().toString(36).substring(2);
    return { ...obj, id };
}

class GenericClass<T> {
    private value: T;

    constructor(value: T) {
        this.value = value;
    }

    getValue(): T {
        return this.value;
    }
}

// Generic constraints
interface Lengthwise {
    length: number;
}

function loggingIdentity<T extends Lengthwise>(arg: T): T {
    console.log(arg.length);
    return arg;
}