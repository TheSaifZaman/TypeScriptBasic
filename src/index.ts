import { Player } from './classes/player.js';
import { Student } from './classes/student.js';
import { identity, addId } from './utils/generics.js';
import { Direction } from './types/types.js';
import { Weekdays } from './enums/weekdays.js';

// Basic examples
let playerName = "Saif";
let playerAge = 24;

console.log(playerName);
console.log(playerAge);

// Class examples
const player1 = new Player("Saif", 24, true);
console.log(player1);

const player2 = new Player("Zaman", 25, true);
console.log(player2);

const student = new Student("Saif", 26, false);
console.log(student);

// Generics examples
console.log(identity("Saif"));
console.log(addId({ name: "Saif", age: 24, isStudent: true }));

// Types examples
console.log(Direction.UP);

// Enums examples
console.log(Weekdays.MONDAY);


import { Multiply } from "./examples/modules.js";
console.log(Multiply(3, 4));