// Function Declaration
function checkEvenOdd(number) {
    if (number % 2 === 0) {
        console.log(`${number} is even.`);
    } else {
        console.log(`${number} is odd.`);
    }
}
// Example Usage
checkEvenOdd(4); // 4 is even.
checkEvenOdd(7); // 7 is odd.

// Function Declaration
function calculateSquare(number) {
    return number * number;
}
// Example Usage
console.log(calculateSquare(4)); // 16
console.log(calculateSquare(7)); // 49

// Function Expression
const concatenateStrings = function(str1, str2) {
    return str1 + str2;
};

// Example Usage
console.log(concatenateStrings("Hello, ", "World!")); // Hello, World!
console.log(concatenateStrings("Foo", "Bar")); // FooBar

// Arrow Function
const calculateSum = (num1, num2) => num1 + num2;

// Example Usage
console.log(calculateSum(5, 3)); // 8
console.log(calculateSum(10, 15)); // 25

// Higher-Order Function
function applyFunctionMultipleTimes(func, times) {
    return function(value) {
        for (let i = 0; i < times; i++) {
            value = func(value);
        }
        return value;
    };
}

// Example Functions to Use
const increment = num => num + 1;
const double = num => num * 2;

// Applying increment 3 times
const incrementThrice = applyFunctionMultipleTimes(increment, 3);
console.log(incrementThrice(5)); // 8 (5+1+1+1)

// Applying double 2 times
const doubleTwice = applyFunctionMultipleTimes(double, 2);
console.log(doubleTwice(3)); // 12 (3*2*2)

