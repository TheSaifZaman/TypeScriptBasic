// let vs var vs const
let letVariable = "I can be reassigned";
letVariable = "New value";

const constVariable = "I cannot be reassigned";
// constVariable = "New value"; // Error

// Block scope with let
{
    let blockScoped = "I exist only in this block";
    // console.log(blockScoped); // Error
}

// Function scope with var
function example() {
    var functionScoped = "I exist throughout the function";
    if (true) {
        var innerVar = "I exist throughout the function";
    }
    console.log(innerVar); // Works
}