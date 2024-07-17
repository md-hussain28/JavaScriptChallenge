//Feature 1
console.log("Printing numbers from 1 to 10 using a for loop:");
for (let i = 1; i <= 10; i++) {
    console.log(i);
}

console.log(); // Blank line for separation

// Using a While Loop
console.log("Printing numbers from 1 to 10 using a while loop:");
let j = 1;
while (j <= 10) {
    console.log(j);
    j++;
}

//Feature 2
const multiplier = 5;

console.log(`Multiplication table of ${multiplier}:`);
for (let i = 1; i <= 10; i++) {
    console.log(`${multiplier} * ${i} = ${multiplier * i}`);
}

//Feature 3
console.log("Pattern printing using nested loops:");
for (let i = 1; i <= 5; i++) {
    let row = '';
    for (let j = 1; j <= i; j++) {
        row += '* ';
    }
    console.log(row);
}

//Feature 4
console.log("Calculating sum of numbers from 1 to 10 using a while loop:");
let sum = 0;
let k = 1;
while (k <= 10) {
    sum += k;
    k++;
}
console.log("Sum:", sum);

//Feature 5
function factorial(n) {
    let result = 1;
    let i = 1;
    do {
        result *= i;
        i++;
    } while (i <= n);
    return result;
}

// Example usage:
const number = 5;
console.log(`Factorial of ${number} is: ${factorial(number)}`);

