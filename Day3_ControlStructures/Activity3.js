//Activity 1 : If Else Statements
//Task 1
let a=10;
if(a>0)
    {console.log('Number is Positive');}
else if(a<0)
    {console.log('Number is Negative');}
else
    {console.log('Number is zero');}

//Task 2
let age=35;
if(age>18)
  {console.log("Applicable to Vote");}
else
  {console.log('Not applicable to vote');}

//Activity 2: Nested If-Else Statements
//Task 3
let b=98,c=87;
console.log(`Largest number among :${a},${b},${c} is :`);
if(a>b){
    if(a>c){console.log(a);}
    else{console.log(c);}
}else{
    if(b>c){console.log(b);}
    else{console.log(c);}
}

//Activity 3: Switch Case 
//Task 4
let n=2;

switch (n) {
    case 1:
        console.log("Monday");
        
        break;
    case 2:
        console.log("Tuesday");
        n=28;
        break;
    case 3:
        console.log("Wednesday");
        break;
    case 4:
        console.log("Thursday");
        break;
    case 5:
        console.log("Friday");
        break;
    case 6:
        console.log("Saturday");
        break;
    case 7:
        console.log("Sunday");
        break;
    default:
        console.log("None");
        break;
}
console.log(n);
//Task 5
let score=64;

switch(true){
     case (score>90):
        console.log("Grade is A");
        break;
    case (score>70):
        console.log("Grade is B");
        break;
    case (score>60):
        console.log("Grade is C");
        break;
    case (score>40):
        console.log("Grade is D");
        break;
    default :
         console.log("Grade is F");
         break;
}

//Activity 4:Conditional (Ternary) Operator
//Task 6
let val=9;
console.log(`The number ${val} is ${(val%2==0)?"Even":"Odd"}`)

//Activity 5: Combining Conditions
//Task 7
let year=1900;

if(year%400==0)
   {console.log(`${year} :is a Leap year`);}
else if(year%4==0&&year%100!=0)
   {console.log(`${year} :is a Leap year`);}
else
   {console.log(`${year} :is not a Leap year`);}
