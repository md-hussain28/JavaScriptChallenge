//Activity 1: For Loop
//Task 1
for(let i=1;i<=10;i++){
    console.log(i);
}
//Task 2
for(let i=5;i<=50;i+=5){
    console.log(i);
}

//Activity 2: While Loop
//Task 3
let n=1,sum=0;
while(n<11){sum+=n; n++;}
console.log(`Sum upto ${n-1} is =${sum}`);

//Task 4
n=10;
while(n>0){
    console.log(n); n--;
}

//Activity 3: Do...While Loop
//Task 5
n=1;
do{
  console.log(n); n++;
}while(n<6)

//Task 6
n=1; 
let f=1;
do{
    f*=n; n++;
}while(n<6)
console.log("Factorial upto ",n-1,"=",f);

//Activity 4: Nested Loops
//Task 7
for(let i=1;i<n;i++){
    let k='';
    for(let j=1;j<=i;j++){
       k+='*';
    }
    console.log(k);
}

//Activity 5: Loop Control Statements
//Task 8
for(let i=1;i<=10;i++){
    if(i==5){continue;}
    console.log(i);
}
//Task 9
for(let i=1;i<11;i++){
    if(i==7){break;}
    console.log(i);
}