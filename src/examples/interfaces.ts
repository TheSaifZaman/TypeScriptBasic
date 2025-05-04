// Interfaces Example

interface User {
    id: number;
    name: string;
    isAdmin?: boolean;
}

const user: User = {
    id: 1,
    name: "Bob"
};

console.log(user);