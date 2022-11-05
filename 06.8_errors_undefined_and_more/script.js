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