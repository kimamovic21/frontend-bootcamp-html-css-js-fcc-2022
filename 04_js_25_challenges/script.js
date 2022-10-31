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
// const average = list => list.reduce((prev, curr) => prev + curr) / list.length;

// const list = [0, 10, 20, 30]
// console.log(average(list)); // 15




// Example - Average grades
// function getAverage(scoreArray) {

//     const count = scoreArray.length;
//     let sum = 0;

//     for (let i = 0; i < count; i++) {
//         sum = sum + scoreArray[i];
//     };

//     const average = sum / count;
//     const roundedDown = Math.floor(average);

//     return roundedDown;
// };

// console.log(getAverage([1,2,3,4,5]));




// Example - Rock, paper, scissors game

/*
    Rock - r
    Paper - p 
    Scissors - s

    Playe1          Playe2           Result
      r                 r               Draw
      r                 p               p2
      r                 s               p1
      p                 r               p1
      p                 p               Draw
      p                 s               p2
      s                 r               p2
      s                 p               p1
      s                 s               Draw
*/

// const rockPapperScissors = (player1, player2) => {

//     if (player1 === 'rock') {
//         if (player2 === 'rock') {
//             return 'Draw!';
//         }
//         if (player2 === 'paper') {
//             return 'Player 2 won!';
//         }
//         if (player2 === 'scissors') {
//             return 'Player 1 won!';
//         }
//     }

//     if (player1 === 'paper') {
//         if (player2 === 'rock') {
//             return 'Player 1 won!';
//         }
//         if (player2 === 'paper') {
//             return 'Draw!';
//         }
//         if (player2 === 'scissors') {
//             return 'Player 2 won!';
//         }
//     }

//     if (player1 === 'scissors') {
//         if (player2 === 'scissors') {
//             return 'Draw!';
//         }
//         if (player2 === 'paper') {
//             return 'Player 2  won!';
//         }
//         if (player2 === 'rock') {
//             return 'Player 1 won!';
//         }
//     }
// };

// console.log(rockPapperScissors('paper', 'scissors'));



// Example - Remove strings - substr()
// function removeChar (string) {
//     const lengthOfString = string.length;
//     return string.substr(1, lengthOfString - 2);
// };

// console.log(removeChar('Imamovic'));




// Example - Return the sum of all positives numbers in array
// function positiveSum(arr) {
//     let sum = 0;
//     for (let i = 0; i < arr.length; i++) {
//         if (arr[i] > 0) {
//             sum = sum + arr[i];
//         };
//     };
//     return sum;
// };
// console.log(positiveSum([-2,-1,0,1,2,3,4]));




// Example - Basic math operations
// First way

// function basicOperations(operation, value1, value2) {
//     let result;
//     switch(operation) {
//         case '+':
//             result = value1 + value2;
//             break;
//         case '-': 
//             result = value1 - value2;
//             break;
//         case '*':
//             result = value1 * value2;
//             break;
//         case '/':
//             result = value1 / value2;
//             break;
//     };
//     return result;
// };

// console.log(basicOperations('+', 1, 2));



// Second way
// Javascript eval built in function
// function evalFunction(operation, value1, value2) {
//     const operationString = value1 + operation + value2;
//     const result = eval(operationString);
//     return result;
// }
// console.log(evalFunction('-', 10, 3));




// Example - Function that repeats given string n number of times
// First way
// function repeatString(numberOfRepeats, string) {
//     let starterString = '';
//     for (let i = 0; i < numberOfRepeats; i++); {
//         starterString = starterString + string;
//     }; 
//     return starterString;
// };
// console.log(repeatString(5, 'Kerim'));



// Second way - repeat()
// function repeatStr(number, string) {
//     return string.repeat(number);
// };
// console.log(repeatStr(10, ' Kerim'));



// Example - Convert a string to an array
// function stringToArray(string) {
//     return string.split(" ")
// };
// console.log(stringToArray('I really like arrays.'))

// video 5:33:00

