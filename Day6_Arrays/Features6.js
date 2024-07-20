// Array Manipulation Script
let array = [1, 2, 3, 4, 5];

console.log("Initial array:", array);

// Push method: add an element to the end
array.push(6);
console.log("After push(6):", array);

// Pop method: remove the last element
array.pop();
console.log("After pop():", array);

// Shift method: remove the first element
array.shift();
console.log("After shift():", array);

// Unshift method: add an element to the beginning
array.unshift(0);
console.log("After unshift(0):", array);

// Array Transformation Script
let numbers = [1, 2, 3, 4, 5];

// Map method: create a new array where each number is doubled
let doubled = numbers.map(num => num * 2);
console.log("Doubled array:", doubled);

// Filter method: create a new array with only even numbers
let evens = numbers.filter(num => num % 2 === 0);
console.log("Even numbers array:", evens);

// Reduce method: calculate the sum of all numbers in the array
let sum = numbers.reduce((accumulator, currentValue) => accumulator + currentValue, 0);
console.log("Sum of array:", sum);


// Array Iteration Script
let fruits = ['apple', 'banana', 'cherry'];

// Using for loop
console.log("Using for loop:");
for (let i = 0; i < fruits.length; i++) {
    console.log(fruits[i]);
}

// Using forEach method
console.log("Using forEach method:");
fruits.forEach(fruit => console.log(fruit));

// Two-dimensional Array Script
let grid = [];

// Create a 6x6 two-dimensional array
for (let i = 0; i < 6; i++) {
    grid.push([]);
    for (let j = 0; j < 6; j++) {
        grid[i].push(Math.floor(Math.random() * 100)); // Generate random numbers between 0 and 99
    }
}

// Log the entire array
console.log("Two-dimensional array:");
console.log(grid);

// Access and log a specific element (e.g., element at row 2, column 3)
console.log("Element at row 2, column 3:", grid[2][3]);
