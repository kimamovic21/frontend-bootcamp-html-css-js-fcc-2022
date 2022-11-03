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



// Example - Javascript string methods 
// video 07:25:00

