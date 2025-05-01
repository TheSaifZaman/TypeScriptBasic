import { PlayerInterface } from '../interfaces/user';

export class Player implements PlayerInterface {
    constructor(public name: string, public age: number, public isStudent: boolean) {}
}