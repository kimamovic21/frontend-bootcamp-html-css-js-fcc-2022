// Loops in javascript

// const blogPosts = [
//     {
//         title: 'Title 1',
//         author: 'Name1 and surname1',
//         publishDate: '01.01.2001.'
//     },
//     {
//         title: 'Title 2',
//         author: 'Name2 and surname2',
//         publishDate: '02.02.2002.'
//     },
//     {
//         title: 'Title 3',
//         author: 'Name3 and surname3',
//         publishDate: '03.03.2003.'
//     },
// ];

// Manual way
// const postTitle = blogPosts[0].title;
// const postAuthor = blogPosts[0].author;
// const postPublishDate = blogPosts[0].publishDate;

// console.log(postTitle);
// console.log(postAuthor);
// console.log(postPublishDate);

// For loop
// for (let i = 0; i < blogPosts.length; i++) {

//     const postTitle = blogPosts[i].title;
//     const postAuthor = blogPosts[i].author;
//     const postPublishDate = blogPosts[i].publishDate;
    
//     console.log(postTitle);
//     console.log(postAuthor);
//     console.log(postPublishDate);
// };



// Loops example
// for (let i = 0; i <= 10; i++) {
//     console.log(i);
// };



// Loops example
// const arr = ['Sarajevo', 'Tuzla', 'Banja Luka', 1, 2, 3, 4, 5, 'Zenica', 'Mostar', 'Bihac', 'Gorazde'];
// console.log(arr);

// // for (let i = 0; i < arr.length; i++) {
// //     console.log(arr.length);
// // };

// for (let i = 0; i < arr.length; i++) {
//     if (typeof arr[i] === 'number') {
//         console.log(arr[i]);
//     };
// };
// loop through an entire array, look at the values, see if it is a number, if it is, it will print them to the console




// Functions in Javascript
// function myFunction() {
//     console.log('Hello world');
// };
// myFunction();



// Parameters and arguments
// function myFunction(param1, param2) {
//     console.log(param1);
//     console.log(param2);
// };
// myFunction(1,2);



// Scopes in javascript
// function myFunction() {
//     let result = 'Hello world';
//     console.log(result);
// }
// myFunction();



// Arrow functions
// const arrowFunction = () => {
//     console.log('I am an arrow function.');
// };
// arrowFunction();



// return values in functions
// const returnFunction = () => {
//     const a = 20;
//     return a > 30;
// };
// const result = returnFunction();
// console.log(result);


// Example
// const myFunction = () => {
//     let myNumber = 20;
//     return myNumber;
//     myNumber = 50;
// }
// console.log(myFunction());



// Example
// const myNumber = 20;
// let myFunction = () => {
//     if(myNumber < 50) {
//         return 'Returned the function early';
//     };
//     return 40;
// };
// console.log(myFunction());



// Example
// function myFunction() {
//     return 20;
// }
// console.log(myFunction());

// const aliasVariable = myFunction;
// console.log(aliasVariable());

// const myObj = {
//     prop1: 50,
//     prop2: myFunction,
// };
// console.log(myObj);

// console.log(myObj.prop2);




// Javascript built-in functions

// replace()

// const myString = 'Kerim';
// myString.replace('K', 'M');
// const newName = myString.replace('K', 'M');
// console.log(newName);

// letter K is replaced with letter M


// toUpperCase() , split(" ") , indexOf();

// let string = 'Hello world';

// let newString = string.toUpperCase();
// console.log(newString);

// let splitString = newString.split(" ");
// console.log(splitString);

// let indexOfString = string.indexOf('H');
// console.log(indexOfString);

