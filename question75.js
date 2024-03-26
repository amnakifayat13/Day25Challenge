"use strict";
/* Compound Assignment Operators: Use compound assignment operators to simplify arithmetic operations. Start
with x =4 and perform a series of operations(addition, subtraction, multiplication,division) on x using
compound operators.*/
function compoundOperators() {
    let x = 4;
    console.log(`Initial Value: ${x}`);
    x += 2;
    console.log(`After Addition: ${x}`);
    x -= 2;
    console.log(`After Subtraction: ${x}`);
    x *= 2;
    console.log(`After Multiplication: ${x}`);
    x /= 2;
    console.log(`After Division: ${x}`);
}
compoundOperators();
