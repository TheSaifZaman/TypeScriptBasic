// Utility Types Example

interface Person {
    name: string;
    age: number;
    address?: string;
}

type PersonRequired = Required<Person>;
type PersonPartial = Partial<Person>;
type PersonPick = Pick<Person, "name" | "age">;

const person1: PersonRequired = { name: "Alice", age: 30, address: "Wonderland" };
const person2: PersonPartial = { name: "Bob" };
const person3: PersonPick = { name: "Charlie", age: 25 };

console.log(person1, person2, person3);