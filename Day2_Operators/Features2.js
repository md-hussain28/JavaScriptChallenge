//Arithmetic Operations
let num1 = 10;
let num2 = 5;

console.log(`Addition: ${num1 + num2}`);
console.log(`Subtraction: ${num1 - num2}`);
console.log(`Multiplication: ${num1 * num2}`);
console.log(`Division: ${num1 / num2}`);
console.log(`Remainder: ${num1 % num2}`);


//Comparison and Logical
let a = 15;
let b = 20;

console.log(`a == b: ${a == b}`);
console.log(`a === b: ${a === b}`);
console.log(`a != b: ${a != b}`);
console.log(`a !== b: ${a !== b}`);
console.log(`a > b: ${a > b}`);
console.log(`a >= b: ${a >= b}`);
console.log(`a < b: ${a < b}`);
console.log(`a <= b: ${a <= b}`);

let condition1 = (a < b);
let condition2 = (a > 10);

console.log(`condition1 && condition2: ${condition1 && condition2}`);
console.log(`condition1 || condition2: ${condition1 || condition2}`);
console.log(`!condition1: ${!condition1}`);

//Ternary Operator
let num = -8;
let isPositive = num > 0 ? "Positive" : "Negative";
console.log(`The number is ${isPositive}.`);
