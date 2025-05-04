// Generics Example

function identity<T>(arg: T): T {
    return arg;
}

console.log(identity<string>("TypeScript"));
console.log(identity<number>(123));