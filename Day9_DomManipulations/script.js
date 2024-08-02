//Activity 1:Selecting and Manipulating Elements
//Task 1:
setTimeout(()=>{
    let heading=document.getElementById('heading');
    heading.innerHTML="Inner HTML is Changed"
    console.log(heading);
},1000)

//Task 2:
setTimeout(() => {
    let divs=document.getElementsByClassName('div');
    console.log(divs);
    for(i of divs){
        i.style.backgroundColor="blue";
    }
}, 1500);

//Activity 2:Creating and Appending Element
//Task 3:
setTimeout(()=>{
    let x=document.createElement("div")
    x.innerText="YO Bro";
    document.getElementsByTagName('body')[0].appendChild(x);
},2000)

//Task 4:
setTimeout(()=>{
    let x=document.createElement("li")
    x.innerText="Four"
    document.querySelector('ul').appendChild(x);
},2500)

//Activity 3:Removing Element
//Task 5:
setTimeout(() => {
    let x=document.querySelector('li');
    x.remove();
}, 3000);

//Task 6:
setTimeout(() => {
    let x=document.querySelector('ul');
    let l=x.children.length;
    x.children[l-1].remove();
}, 3200);

//Activity 4:Modifying Attriutes and Classes
//Task 7:
setTimeout(() => {
    document.querySelector('img').setAttribute('src','https://www.shutterstock.com/shutterstock/photos/2207222397/display_1500/stock-photo-domain-name-search-find-icon-or-web-server-registration-on-hosting-buy-on-computer-pc-internet-site-2207222397.jpg')
}, 3400);
//Task 8:
setTimeout(() => {
    document.getElementsByClassName('div')[0].classList.add("NewClass");
}, 3800);

//Activity 5:Event Handling
//Task 9:
let butt1=document.getElementById('button1');
console.log(butt1);
butt1.addEventListener('click',()=>{
    document.getElementById('heading1').innerHTML="Text Changed";
    console.log('changed');
});

//Task 10:
let butt2=document.getElementById('button2');

butt2.addEventListener('mouseover',()=>{
      butt2.style.borderColor="red";
      setTimeout(()=>{butt2.style.borderColor="cyan";},100)
})