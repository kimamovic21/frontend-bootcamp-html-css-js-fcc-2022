// Example
// const myArray = [ 2, 4, 6, 8];

// function myCustomMapOperationCallback(itemFromArray) {
//     return itemFromArray * 2; 
// };
// console.log(myCustomMapOperationCallback());

// const newArray = myArray.map(myCustomMapOperationCallback);
// console.log(newArray);



// Example
// const stringArray = ['Hello', 'world', 'my', 'name', 'is', 'Kerim'];

// const newStringArray = stringArray.map(itemFromArray => itemFromArray[0]);
// console.log(newStringArray);




// Javascript primitives

// Example 
// const string1 = new String('Hello world');
// const string2 = 'Hello world';
// console.log(string1 === string2); // false
// console.log(string1 == string2); // true


// Example
// let string = 'Kerim'.toUpperCase();
// console.log(string);



// Example - Dates
// const myDate = new Date();
// console.log(myDate);
// console.log(myDate.valueOf());
// console.log(myDate.toString());
// console.log(myDate.toISOString());
// console.log(myDate.getDay());
// console.log(myDate.getMonth());
// console.log(myDate.getFullYear());




// Example - Regular expressions
// const emailValidatorRegex = new RegExp('^.+@.+\..+$');
// console.log(emailValidatorRegex);
// const userInput = 'invalidemail@g';
// console.log(userInput);
// const isValid = emailValidatorRegex.test(userInput);
// console.log(isValid);


// Identifiers, Quantifiers
// const regex = new RegExp('g');
// const string1 = 'My name is Kerim Imamovic. I like vanilla.';
// const string2 = 'I am thinking about vanilla Javascript';
// console.log(regex.test(string1));
// console.log(regex.test(string2));

// const regex2 = new RegExp('vanilla');
// console.log(regex2.test(string1));
// console.log(regex2.test(string2));


// case sensitive
// Example
// const regex3 = new RegExp('KeriM')
// const string = 'I am Kerim';
// const string2 = '062345678';
// console.log(regex3.test(string));


// Example
// console.log(/[A-Z]/.test(string));
// console.log(/[A-Z]/.test(string2));


// Example
// const string  = 'hello world, 2022 @ more of a string';
// console.log(/^[a-z ]+,[0-9 ]+@[a-z ]+$/.exec(string));




// Javascript string methods
// Example - replaceAll() 
// const myString = 'I am playing with a Dog.';
// console.log(myString);
// const newString = myString.replaceAll('Dog', 'Cat');
// console.log(newString);
// const correctString = myString.replaceAll(/[Dd]{1}og/g, 'cat')
// console.log(correctString);



// Example - toUpperCase()
// const myString = 'Some string';
// const newString = myString.toUpperCase();
// console.log(newString);



// toUpperCase() first letter capitalized
// const myString = 'Some string';
// const result = myString[0].toUpperCase() + myString.substring(1);
// console.log(result);



// Example - substring()
// const myString = 'Some string';
// const newString = myString.substring(5, 8);
// console.log(newString);



// Example - trim() 
// const myString = '     Hello   world      ';
// console.log(myString);
// const newString = myString.trim();
// console.log(newString);



// Example - trim()
// const externalData = [
//     {
//         title: '   How to code   ',
//         author: 'Zach',
//     },
//     {
//         title: '   What is Vim ?   ',
//         author: 'Zach',
//     },
//     {
//         title: '    How do loops work in Javascript   ',
//         author: 'Zach',
//     },
// ];

// for (let i = 0; i < externalData.length; i++) {
//     const currentTitles = externalData[i].title;
//     const currentAuthor = externalData[i].author;
//     externalData[i].title = currentTitles.trim();
//     externalData[i].author = currentAuthor.trim();
// };

// console.log(externalData);



// Example - match()
// const regex = /[a-z]+/;
// console.log(regex);
// const string = 'qwertzuiop123456789asdfghjklyxcvbnm';
// console.log(string);
// const result = string.match(regex);
// console.log(result);



// Example - match()
// const regex2 = '123456789';
// console.log(regex2)
// const string2 = 'qwertzuiop123456789asdfghjklyxcvbnm'
// const result2 = string2.match(regex2);
// console.log(result2)




// Array methods
// Example - push()
// const array = [1,2,3,4,5,6,7];
// console.log(array);
// array.pop();
// console.log(array);
// array.push(7,8,9);
// console.log(array);



// Example - slice()
// const array = [1,2,3,4,5,6,7];
// console.log(array);
// const copyArray = array.slice();
// console.log(copyArray);
// console.log(array === copyArray);
// const anotherCopy = array.slice(3);
// console.log(anotherCopy);



// Example - splice()
// const array = [1,2,3,'Kerim',5,6,7];
// console.log(array);
// const removedItem = array.splice(3, 1, 4);
// console.log(removedItem);
// console.log(array);



// Example - findIndex()
// const array = [1,2,3,4,5,6,7];
// const indexOf = array.indexOf(1);
// console.log(indexOf);



// Example - findIndex()
// const moreComplexArr = [
//     {
//         firstName : 'Bob',
//         lastName : 'Smith',
//     },
//     {
//         firstName : 'Alice',
//         lastName : 'Smith',
//     },
//     {
//         firstName : 'John',
//         lastName : 'Smith',
//     },
//     {
//         firstName : 'John',
//         lastName : 'Doe',
//     },
// ];

// const result = moreComplexArr.findIndex((arrItem) => {
//     return arrItem.lastName !== 'Smith';
// })

// console.log(result);



// Example - map()
// const blogPostsFromDatabase = [
//     {   
//         title: 'How to use the map() function',
//         category: 'uncategorized',
//     },
//     {
//         title: 'What is Javascript',
//         category: 'uncategorized',
//     },
//     {
//         title: 'Why are you crazy enough to learn to code ?',
//         category: 'uncategorized',
//     },
// ];

// let category = blogPostsFromDatabase[0].category;
// console.log(category);

// const result = blogPostsFromDatabase.map((arrItem) => {
//     arrItem.category = 'Web Development';
//     return arrItem;
// });

// console.log(result);




// Example
// const array = [1,2,3];
// for (let i = 0; i < array.length; i++) {
//     console.log(array[i])
// };



// Example - forEach()
// const array = [1,2,3];
// array.forEach(arrItem => console.log(arrItem));



// Example
// const array = [1,2,3];
// array.forEach((arrItem, index) => {
//     console.log(arrItem);
//     console.log(index);
// });



// Example 
// const myColors = ['blue', 'red', 'purple', 'orange', 'green'];
// let orangeExists = false;
// myColors.forEach(color => {
//     if(color === 'orange') {
//         orangeExists = true;
//     }
// });
// console.log(orangeExists);



// Example - includes()
// const myColors = ['blue', 'red', 'purple', 'orange', 'green'];
// const includesColor = myColors.includes('orange');
// console.log(includesColor);
// const indexOfColor = myColors.indexOf('orange');
// console.log(indexOfColor);




// Example - filter()
// const allOrders = [
//     {
//         productName : 'Tea pot',
//         isDigital: false,
//         isCancelled: false,
//         isOpen: false,
//     },
//     {
//         productName : 'Blue Gildan Mens Hoodie',
//         isDigital: false,
//         isCancelled: true,
//         isOpen: false,
//     },
//     {
//         productName : 'Code Complete Kindle Book',
//         isDigital: true,
//         isCancelled: true,
//         isOpen: false,
//     },
//     {
//         productName : 'Atomic Habits Kindle Book',
//         isDigital: true,
//         isCancelled: false,
//         isOpen: false,
//     },
// ];

// const digitalOrders = allOrders.filter(arrItem => {
//     return arrItem.isDigital;
// });
// console.log(digitalOrders);

// const digitialAndCancelledOrders = allOrders.filter((orderItem) => {
//     return orderItem.isDigital && orderItem.isCancelled;
// });
// console.log(digitialAndCancelledOrders);



// Example - reduce()
// const array = [1, 2, 3, 4, 5, 6, 7, 8, 9]
// function reducerCallback(sum, arrItem) {
//     return sum = sum + arrItem;
// };
// const result = array.reduce(reducerCallback, 0);
// console.log(result);



// Example 
// const array = [1, 2, 3, 4, 5, 6, 7, 8, 9];
// const result = array.reduce((sum, arrItem) => sum = sum + arrItem,0 );
// console.log(result);



// Math utilities
// console.log(Math.PI);
// console.log(Math.E);
// console.log(Math.abs(-10));
// console.log(Math.ceil(Math.PI));
// console.log(Math.floor(Math.PI));
// console.log(Math.round(Math.PI));
// console.log(Math.min(1,2,3));
// console.log(Math.max(7,8,9));
// console.log(Math.random());



// Example
// const randomNumber = Math.random();
// const numberBetweenZeroAndFive = randomNumber * 5; // number between 0 and 5
// console.log(randomNumber);
// console.log(numberBetweenZeroAndFive);
// const floorNumber = Math.floor(numberBetweenZeroAndFive);
// console.log(floorNumber);



// Example - Get a random item from a JavaScript array
// const array = ['My', 'name', 'is', 'Kerim'];
// const randomIndex = Math.floor(Math.random() * array.length);
// console.log(randomIndex);
// const randomWord = array[randomIndex];
// console.log(randomWord);




// Javascript errors, undefined and more

// myVariable;
// Uncaught ReferenceError: myVariable is not defined


// const myObj = {
//     prop1: 'value 1';
//     prop2: 'value 2';
// };
// console.log(myObj);
// Uncaught SyntaxError: Unexpected token ';' 


// const obj1 = { prop1: 10};
// const obj2 = { prop1: 20};
// const result = obj1 + obj2;
// console.log(result);
// [object Object][object Object]


// const number = 10;
// number.toUpperCase();
// console.log(number);
// Uncaught TypeError: number.toUpperCase is not a function



// try - catch block (error handling)
// try {
//     const num = 20;
//     num.toUpperCase();
// }
// catch (error) {
//     console.log(error instanceof TypeError);
//     console.log(error.message);
// };



// NaN
// const myString = 'some string';
// const stringToNumber = Number(myString);
// console.log(stringToNumber);

// const numberString = '100'
// console.log(numberString);
// console.log(typeof(numberString));

// const number = Number(numberString);
// console.log(number);
// console.log(typeof(number));



// null
// let num = null;
// console.log(num);
// if (num) {
//     console.log('This will not be reached.');
// } 
// else {
//     console.log('This will be reached.');
// };



// undefined
// let myString;
// console.log(myString);

// video 08:39:15