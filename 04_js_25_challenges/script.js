// Reversed array

// let string = "Kerim is name my"
// console.log(string);

// function mySolution () {
//     let arr = string.split(" ");
//     console.log(arr);
//     let reversed = arr.reverse();
//     console.log(reversed);
//     let joined = reversed.join(" ");
//     console.log(joined);
//     let firstCapitalizeLetter = joined.charAt(0).toUpperCase() + joined.slice(1, joined.length)
//     console.log(firstCapitalizeLetter);
// };
// mySolution();


// function capitalizeFirstLetter(string) {
//     return string.charAt(0).toUpperCase() + string.slice(1);
//   }
  
//   console.log(capitalizeFirstLetter('foo')); // Foo



// Even or odd number

// First way
// function oddOrEvenNumber(number) {
//     if (number % 2 === 0) {
//         console.log('Even number')
//     } 
//      else {
//         console.log('Odd number')
//     }
// };

// oddOrEvenNumber(10);


// Second way
// const oddOrEvenNumber = number => number % 2 ? 'Even' : 'Odd';
// console.log(oddOrEvenNumber(14));



// Example - vowel Counter in a string with small regex

// function getVowels(string) {
//     var vowelCounter = string.match(/[aeiou]/gi);
//     return vowelCounter === null ? 0 : vowelCounter.length;
// }

// console.log(getVowels('Kerim Imamovic'));


// Example
// function getCount(str) {
//     let vowelCount = 0;
//     const vowels = ['a', 'e', 'i', 'o', 'u'];
//     for (let char of str) {
//         if (vowels.includes(char)) {
//             vowelCount++;
//         };
//     };
//     return vowelCount;
// };

// console.log(getCount('Kerim Imamovic'));



// Example
// function greet(name) {
//     if(name === 'Kerim') {
//         return 'Hello Kerim, how are you today ?'
//     } 
//     else {
//         return 'Hi ' + name + "!";
//     }
// };

// console.log(greet('Kerim'));



// Example
// function isDivisible(n, x, y) {

//     const result1 = n / x;
//     const result2 = n / y;

//     if (result1 % 1 === 0 && result2 % 1 === 0) {
//         return true;
//     } 
//     else {
//         return false;
//     }
// };

// console.log(isDivisible(10,2,5));



// Example
// function makeNegative(num) {
//     if(num < 0) {
//         return num;
//     }
//     else {
//         return num * -1;
//     }
// }
// console.log(makeNegative(-2));



// Example
// function smallestInteger() {
//     const arr = [14, 58, 20, 77, 66, 82, 42, 67, 42, 4]
//     const min = Math.min(...arr)
//     return min;
// };
// console.log(smallestInteger());



// Example
// function numberSum(number) {
//     let total = 0;
//       for (let i = 1; i <= number; i++) {
//         total = total + i;
//       }
//       return total;
// }

// console.log(numberSum(4));



// Example
const average = list => list.reduce((prev, curr) => prev + curr) / list.length;

const list = [0, 10, 20, 30]
console.log(average(list)); // 15

// video 5:00:00
