// Template Literals Script
const name = "Vega";
const age = 21;
const city = "Kolkata";

// Using template literals to embed variables and multi-line strings
const message = `Hello, my name is ${name}. 
I am ${age} years old and I live in ${city}.`;

console.log(message);

// Destructuring Script
const person = { name: "Vega", age: 21, city: "Kolkata" };
const { name: personName, age: personAge, city: personCity } = person;

console.log(`Name: ${personName}, Age: ${personAge}, City: ${personCity}`);

const numbers = [1, 2, 3, 4, 5];
const [first, second, ...rest] = numbers;

console.log(`First: ${first}, Second: ${second}, Rest: ${rest}`);

// Spread and Rest Operators Script
const array1 = [1, 2, 3];
const array2 = [4, 5, 6];
const combinedArray = [...array1, ...array2];

console.log(`Combined Array: ${combinedArray}`);

const sum = (...values) => {
    return values.reduce((acc, curr) => acc + curr, 0);
};

console.log(`Sum: ${sum(1, 2, 3, 4, 5)}`);

// Default Parameters Script
const greet = (name = "Guest", greeting = "Hello") => {
    return `${greeting}, ${name}!`;
};

console.log(greet("Vega", "Hi"));
console.log(greet("Vega"));
console.log(greet());

// Enhanced Object Literals Script
const createPerson = (name, age, city) => {
    return {
        name,
        age,
        city,
        greet() {
            return `Hi, I'm ${this.name} from ${this.city}.`;
        },
        ['city_' + city]: true
    };
};

const personObject = createPerson("Vega", 21, "Kolkata");

console.log(personObject);
console.log(personObject.greet());
