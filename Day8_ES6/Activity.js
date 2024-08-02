//Activity 1:Template Literals
//Task 1:
let name="Md Saquib",age=23;
console.log(`Name is ${name} and age is${age}`);

//Taske 2:
console.log(`
    Introduction :
    Name :${name}
    Age :${age}
`);


//Activity 2:Destructuring
//Task 3:
let arr=["A","B","C",28,45,456,45,345,54]
let [a,b,c]=arr;
console.log(a,b,c);

//Task 4:
let obj={title:"The Notebook",author:"1998"}
let {title:Title,author}=obj;
console.log(Title,author);


//Activity 3: Spread and Rest Operator
//Task 5:
let arr1=['A',34,"sfd",{A:'b',c:'D'},67.8]
let arr2=["Saquib",...arr1];
console.log(arr2);

//Task 6:
let sum=(...val)=>{
    let s=0; console.log(val);
    val.map((i)=>{
        s+=i;
    })
    return s;
}
console.log(sum(34,546,23,2,23,2,43,34));


//Activity 4:Default Parameters
//Task 7:
let product=(a,b=1)=>{
    return a*b;
}
console.log(product(45,6));
console.log(product(5));

//Activity 5:Enhanced Object Literals
//Task 8:
let Name="Saquib",Age="23";
const obj3={
    Name,
    Age,
    greet(){
        console.log(`${Name} is ${Age} years old`);
    }
}
console.log(obj3);
obj3.greet();

//Task 9:
let prop="Name";
let obj4={
    [prop]:"Saquib"
}
console.log(obj4["Name"]);