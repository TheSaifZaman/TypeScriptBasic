export interface UserInterface {
    name: string;
    age: number;
    isStudent: boolean;
}

export interface PlayerInterface extends UserInterface {}

export interface Admin extends UserInterface {
    name: string;
    age: number;
    isStudent: boolean;
    role: string;
}

// Index signature
interface StringArray {
    [index: number]: string;
}

// Type aliases vs interfaces
type Point = {
    x: number;
    y: number;
};

interface PointInterface {
    x: number;
    y: number;
}