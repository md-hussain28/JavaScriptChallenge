//Activity 1 :
var num1=6;
console.log(num1);

let num2=10;
console.log(num2);

//Activity 2 :
const bl=true;
console.log(bl);

//Activity 3 :
const a=8;
const b="Chai aur Code";
const c=false;
const d={name:"Saquib", degree:"Btech", college:"IIT Dhanbad"};
const e=[56,true,"Saquib",{a:3,b:5}];

//Activity 4 :
let val=10;
console.log("Initially ",val);
val=20;
console.log("Finally ",val);

//Activity 5 :
const cns=45;
console.log(cns);
// cns=67; ->TypeError: Assignment to constant variable.

//------------------------------------------------------------------------
//Features :

//Variables Types-
let num = 42; // Number
let str = "Hello, World!"; // String
let bool = true; // Boolean
let obj = { name: "John", age: 30 }; // Object
let arr = [1, 2, 3, 4]; // Array

// Log value and type of each variable
console.log(`num: ${num}, type: ${typeof num}`);
console.log(`str: ${str}, type: ${typeof str}`);
console.log(`bool: ${bool}, type: ${typeof bool}`);
console.log(`obj:`, obj, `, type: ${typeof obj}`);
console.log(`arr:`, arr, `, type: ${typeof arr}`);

// Reassignment Demo-

let x = 10;
console.log(`Initial value of x: ${x}`);
x = 20; // Reassignment
console.log(`Updated value of x: ${x}`);

// Using const for reassignment
const y = 100;
console.log(`Initial value of y: ${y}`);
// y = 200; error: TypeError: Assignment to constant variable.
