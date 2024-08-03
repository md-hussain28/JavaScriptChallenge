//Activity 1
//Task 1
let parent = document.getElementsByClassName("div");
let child = parent[0].getElementsByTagName("p");
let but = parent[0].getElementsByTagName("button");
console.log(parent, child, but);
but[0].addEventListener("click", () => {
  child[0].innerText = "Button is clicked";
});

//Task2
let img = document.querySelector(".div>img");
console.log(img);

img.addEventListener("dblclick", () => {
  img.style.display = "none";
});

//Activity 2
//Task 3
let div2 = document.querySelector(".div2");
div2.addEventListener("mouseover", () => {
  div2.style.backgroundColor = "red";
});
//Task 4
div2.addEventListener("mouseout", () => {
  div2.style.backgroundColor = "blue";
});

//Activity 3
//Task 5
let input = document.querySelector(".div3>input");
input.addEventListener("keydown", (e) => {
  console.log(e.key);
});
//Task 6
input.addEventListener("keyup", (e) => {
  let p = document.querySelector(".div3>p");

  let s = p.innerText;
  p.innerText = s + e.key;
});

//Activity 4
//Task 7
let form=document.querySelector('.div4>form')
form.addEventListener('submit',(e)=>{
     e.preventDefault();
     console.log(e);
     let x=form.querySelector('input')
     x.value='';
     console.log(x);
})
//Task 8
let select=form.querySelector('select');
select.addEventListener('change',(e)=>{
    let x=document.querySelector('#select');
    //console.log(e);
    console.log(select.value);
    x.innerHTML=select.value;
    
})

//Activity 5

