import { Player } from './player.js';

export class Student extends Player {
    constructor(name: string, age: number, isStudent: boolean) {
        super(name, age, isStudent);
    }
}