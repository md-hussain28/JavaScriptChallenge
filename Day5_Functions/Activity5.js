//Activity 1: Function Declaration
//Task 1
function parity(v){
    if(v%2==0){console.log(v," is even");}
    else{ console.log(v," is Odd");}
}

parity(5)
parity(10)

//Task 2
function square(v){
    console.log("Square of ",v,"=",v*v);
}
square(6)
square(99)

//Activity 2: Function Expression
//Task 3
const max= function (a,b){
      const c=(a>b)?a:b;
      console.log(`Maximum of${a} and ${b} is ${c}`);
}
max(6,9);
max(326,65);

//Task 4
const concatenate=function (a,b){
    if(typeof(a)!=typeof("x")||typeof(b)!=typeof("c")){
        console.log("Enter only string values");
        return " "
    }
    return a+b;
}
console.log(concatenate("i am","Batman"));
console.log(concatenate("i am",8));

//Activity 3: Arrow Functions
//Task 5
const sum=(a,b)=>(a+b)
console.log("Sum is ",sum(12,32));

//Task 6
const check=(s,a="")=>{
    for(let i=0;i<s.length;i++){
       if(s[i]===a){
        return true;
       }
    }
    return false;
}

console.log(check("sfsfsfeasxe","k"));

//Activity 4: Function Parameters and Default Values
//Task 7
const multiply=(a,b=1)=>(a*b)
console.log(multiply(55));

//Task 8
const greet=(name,age)=>{
    console.log(`Hello ${name}`);
}
greet("lily");

//Activity 5: Higher-Order Functions
//Task 9
const fun=(i)=>(i*i)
const higher=(fun,n)=>{
    for(let i=0;i<n;i++){
        console.log(fun(i));
    }
}
higher(fun,6);

//Task 10 
const fun1=(i)=>(i*i+1)
const fun2=(i)=>(i/2-1)

const higher2=(fun1,fun2,i)=>{
      const c=fun1(i);
      return fun2(c);
}
console.log(higher2(fun1,fun2,90));
