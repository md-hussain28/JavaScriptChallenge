//Activity 1: Array Creation and Access
//Task 1
let arr=[1,2,3,4,5]
console.log(arr);

//Task 2
console.log(arr[0]);
console.log(arr[4]);

//Activity 2: Array Methods (Basic)
//Task 3
arr.push(6)
console.log(arr);
//Task 4
arr.pop()
console.log(arr);
//Task 5
arr.shift()
console.log(arr);
//Task 6
arr.unshift(6)
console.log(arr);

//Activity 3: Array Methods (Intermediate)
//Task 7
let double=arr.map((i)=>(i*i))
console.log(double);

//Task 8
let odd=arr.filter((i)=>i%2===1);
console.log(odd);

//Task 9
let sum=arr.reduce((s,i)=>{s+=i; return (s)},0);
console.log(sum);

//Activity 4: Array Iteration
//Task 10
for(let i=0;i<arr.length;i++){
    console.log(arr[i]);
}
//Task 11
arr.forEach(element =>{console.log(element)})
    
//Activity 5: Multi-dimensional Arrays
//Task 12
let grid=[];
for(let i=0;i<6;i++){
    grid.push([]);
    for(let j=0;j<6;j++){
        grid[i].push(Math.ceil(Math.random()*100))
    }
}
console.log(grid);
//Task 13
console.log(grid[0][5]);
console.log(grid[3][4]);