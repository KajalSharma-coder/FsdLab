const myBody=document.body;
console.log(myBody);

const box2 = document.getElementById('box-2');
console.log(box2);

const divs = document.getElementsByTagName('p');
console.log(divs);

const box1 = document.getElementById('box-1');
box1.innerHTML = "Hello Box 1";
box1.style.backgroundColor = "lightblue";
box1.style.color = "red";

const boxes = document.getElementsByClassName('box');
for(let i=0; i<boxes.length; i++){
 boxes[i].classList.add('round-border');   
}
box1.classList.remove('round-border');
box2.classList.remove('round-border');

// Creating new Element
const newParagraph = document.createElement('p');
newParagraph.innerHTML = "This is brand new";
newParagraph.classList.add('box');

const container = document.getElementById('container');
container.appendChild(newParagraph);
