import { Player } from './player';

export class Student extends Player {
    constructor(name: string, age: number, isStudent: boolean) {
        super(name, age, isStudent);
    }
}