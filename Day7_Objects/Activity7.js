//Activity 1:Object Creation and Access
//Task 1
let book={
    title:"The Narnia",
    author:"Peter Siddle",
    year:"1998"
}
//Task 2
console.log(book);
let temp="author";
console.log(book.title);
console.log(book[temp]);
console.log(book["year"]);

//Activity 2:Object Methods
//Task 3
book.bookfun=function(){
    return this.title+" "+this.author;
}
console.log(book.bookfun());
//Task 4
book.updateYear=function(year){
     this.year=year;
}
book.updateYear(1990);
console.log(book);

//Activity 3:Nested Objects
//Task 5:
let library={
    name:"The great Library",
    books:[{title:"A",year:"2348"},{title:"B",year:"1892"}]
}
console.log(library);
//Task 6:
for(let i=0;i<library.books.length;i++){
    console.log(library.books[i].title);
}
library.books.map((i)=>{
    console.log(i.title);
})
//Activity 4: The "this" Keyword
//Task 7:
library.giveName=function(){
    return this.name;
}
console.log(library.giveName());

//Activity 5:Object Iteration
//Task 8:
for (i in book){
    console.log(i+" :"+book[i]);
}
//Task 9:
Object.keys(book).forEach(i=>{
    console.log(i+" "+book[i]);
})
Object.values(book).forEach(i=>{
    console.log(i);
})