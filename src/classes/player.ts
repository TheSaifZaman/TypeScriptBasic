// Implementation
import { PlayerInterface } from '../interfaces/user';

// Implementation
export class Player implements PlayerInterface {
    constructor(public name: string, public age: number, public isStudent: boolean) {
        this.name = name;
        this.age = age;
        this.isStudent = isStudent;
    }
}