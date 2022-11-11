// Example - First example in index.html

// console.log(window.document);

// let container = document.getElementById("container");
// let spanElement = document.createElement("span");

// spanElement.style.color = "red";
// spanElement.innerHTML = "Hello";
// spanElement.setAttribute('id', 'my-span');

// container.appendChild(spanElement);

// console.log(container);
// console.log(spanElement);




// Example - second example in index.html

// let btn = document.querySelector('button');
// console.log(btn);
// console.log(typeof(btn));

// let myName = 'Kerim Imamovic';
// console.log(typeof(myName));

// let myYears = 25;
// console.log(typeof(myYears));




// Width and height

// console.log(window.innerHeight);
// console.log(window.outerHeight);
// console.log(window.innerWidth);
// console.log(window.outerWidth);




// Local storage
// localStorage.setItem("firstName", "Kerim");
// localStorage.setItem("lastName", "Imamovic")
// localStorage.getItem("firstName"); 
// localStorage.getItem("lastName");




// Location
// console.log(window.location);




// Scroll X and Y
// console.log(window.scrollX);
// console.log(window.screenY);




// Events
// window.onscroll = function() {
//     console.log('Hi');
// };




// Example
// const obj = {
//     prop1: 'Kerim',
//     prop2: {
//         city: 'Sarajevo',
//     },
// };
// console.log(obj);

// console.log(obj.prop2.city);




// Example
// console.log(document.html.body);
// Uncaught TypeError: Cannot read properties of undefined (reading 'body')




// Example - third example in index.html

// const elementNode = document.createElement('p');
// console.log(elementNode);

// const textNode = document.createTextNode('Text written in Javascript.');
// console.log(textNode);

// const attributeNode = document.createAttribute('class');
// console.log(attributeNode);

// elementNode.appendChild(textNode);
// console.log(elementNode);

// attributeNode.value = 'some-class';
// console.log(attributeNode);

// elementNode.setAttributeNode(attributeNode);
// console.log(elementNode);

// // how to add our p element inside DOM
// document.body.appendChild(elementNode);




// Example - Fourth example in index.html

// let btn = document.querySelector('#btn-1');
// console.log(btn);
// let btn2 = document.querySelector('.btn-2');
// console.log(btn2);
// let btn3 = document.getElementById('btn-3');
// console.log(btn3);


// let btn = document.querySelector('#btn-1');

// function addParagraph() {
//     // console.log('The button is working.');
//     const randomNum = Math.floor(Math.random() * 100);
//     const pContent = 'The random number is: ' + randomNum;
//     console.log(pContent);

//     const newElement = document.createElement('p');
//     console.log(newElement);
//     newElement.textContent = pContent;

//     document.body.appendChild(newElement);
// };




// Example - fifth example in index.html

const list = document.querySelector('ul');
console.log(list);
console.log(list.nodeType);
console.log(list.children);

const listItem = list.children.item(0);
console.log(listItem);
listItem.textContent = 'Some new content';

list.appendChild(document.createElement('li'));
list.children.item(3).textContent = 'Another content';

const pElement = document.querySelectorAll('p').item(1);
console.log(pElement);
const parent = document.querySelector('.main-body');
console.log(parent);
const newP = document.createElement('p');
newP.textContent = 'Programatically added between';
console.log(newP);
parent.insertBefore(newP, pElement); 




// Example 

// const btn = document.getElementById('click-me');
// btn.style.cursor = 'pointer';
// btn.style.backgroundColor = 'rgb(3, 127, 252)';
// btn.style.border= 'none';
// btn.style.borderRadius = '5px';
// btn.style.padding = '10px 20px';
// btn.style.color = '#efefef';

// function clickMe() {
//    console.log('Click me!');
//    const myParagraph = document.createElement('p');
//    myParagraph.textContent = 'I created paragraph in js!';
//    document.body.appendChild(myParagraph);
//    myParagraph.setAttribute('id', 'my-paragraph');
//    myParagraph.style.backgroundColor = '#333';
//    myParagraph.style.color = '#efefef';
//    myParagraph.style.padding = '5px';
//    console.log(myParagraph);
// };

