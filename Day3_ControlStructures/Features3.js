// Generate a random number between -100 and 100
const number = Math.floor(Math.random() * 201) - 100;

console.log(`Generated number: ${number}`);
if (number > 0) {
    console.log("The number is positive.");
} else if (number < 0) {
    console.log("The number is negative.");
} else {
    console.log("The number is zero.");
}

// Generate a random age between 0 and 100
const age = Math.floor(Math.random() * 101);

console.log(`Generated age: ${age}`);
if (age >= 18) {
    console.log("You are eligible to vote.");
} else {
    console.log("You are not eligible to vote.");
}

// Generate three random numbers between -100 and 100
const num1 = Math.floor(Math.random() * 201) - 100;
const num2 = Math.floor(Math.random() * 201) - 100;
const num3 = Math.floor(Math.random() * 201) - 100;

console.log(`Generated numbers: ${num1}, ${num2}, ${num3}`);

if (num1 >= num2) {
    if (num1 >= num3) {
        console.log("The largest number is: " + num1);
    } else {
        console.log("The largest number is: " + num3);
    }
} else {
    if (num2 >= num3) {
        console.log("The largest number is: " + num2);
    } else {
        console.log("The largest number is: " + num3);
    }
}

// Generate a random number between 1 and 7
const dayNumber = Math.floor(Math.random() * 7) + 1;

console.log(`Generated day number: ${dayNumber}`);

switch (dayNumber) {
    case 1:
        console.log("Sunday");
        break;
    case 2:
        console.log("Monday");
        break;
    case 3:
        console.log("Tuesday");
        break;
    case 4:
        console.log("Wednesday");
        break;
    case 5:
        console.log("Thursday");
        break;
    case 6:
        console.log("Friday");
        break;
    case 7:
        console.log("Saturday");
        break;
    default:
        console.log("Invalid number. Please enter a number between 1 and 7.");
}

// Generate a random score between 0 and 100
const score = Math.floor(Math.random() * 101);

console.log(`Generated score: ${score}`);

switch (true) {
    case (score >= 90):
        console.log("Grade: A");
        break;
    case (score >= 80):
        console.log("Grade: B");
        break;
    case (score >= 70):
        console.log("Grade: C");
        break;
    case (score >= 60):
        console.log("Grade: D");
        break;
    default:
        console.log("Grade: F");
}


// Generate a random number between -100 and 100
const num = Math.floor(Math.random() * 201) - 100;

console.log(`Generated number: ${num}`);

const result = (num % 2 === 0) ? "The number is even." : "The number is odd.";
console.log(result);


// Generate a random year between 0 2024
const year = Math.floor(Math.random() * (2025)) ;

console.log(`Generated year: ${year}`);

if ((year % 4 === 0 && year % 100 !== 0) || year % 400 === 0) {
    console.log(year , " is a leap year.");
} else {
    console.log(year , " is not a leap year.");
}

