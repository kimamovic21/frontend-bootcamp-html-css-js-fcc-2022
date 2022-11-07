// 10 javascript practice problems


// Example - List with strings filtered out

// first way
// function filterList(numArr) {
//     return numArr.filter(callbackFunction);
// };
// console.log(filterList([1,2,3,'kerim','imamovic',4,5,6]));

// function callbackFunction(arrItem) {
//     // 1. it is a number
//     // 2. it is a positive
//     if(arrItem >= 0 && typeof arrItem === 'number') {
//         return true;
//     }
//     return false;
// };
// console.log(callbackFunction([1,2,3,'kerim','imamovic',4,5,6]));



// second way 
// function filterList(numArr) {
//     return numArr.filter(callbackFunction);
// };
// console.log(filterList([1,2,3,'kerim','imamovic',4,5,6]));

// function callbackFunction(arrItem) {
//     return arrItem >= 0 && typeof arrItem === 'number';
// };
// console.log(callbackFunction([1,2,3,'kerim','imamovic',4,5,6]));



// third way
// function filterList(numArr) {
//   return numArr.filter(arrItem => arrItem >=0 && typeof arrItem ==='number');
// };
// console.log(filterList([1,2,3,'kerim','imamovic',4,5,6]));



// fourth way
// function filter_list(l) {
//     return l.filter(x => typeof x === 'number');
//   }
// console.log(filter_list([1, 'a', 'b', 0, 15]));




// Example - if value a is present b all of its occurrences must be removed from the other

// first way
// function arrayDiff(a,b) {
//     if (a.length === 0) {
//         return [];
//     };
//     if (b.length === 0) {
//         return a;
//     };

//     let newA = a;
//     let newB = b;

//     a.forEach((arrItem, arrIndex) => {

//         const aCopy = newA.slice();
//         const bCopy = newB.slice();

//         // We have found this element in both arrays
//         if (b.includes(arrItem)) {
//             newA = aCopy.filter(item => item !== arrItem);
//             newB = bCopy.filter(item => item !== arrItem);
//         };
//     });
//     // console.log(newA);
//     // console.log(newB);

//     return newA;
// };
// console.log(arrayDiff([1,2,3,4,5], [4,5,6,7,8]));


// second way
// let arr1 = [1,2,3,4,5];
// let arr2 = [4,5,6,7,8];
// let intersection = arr1.filter(x => arr2.includes(x));
// console.log(intersection);




// Example - Format a string of names 

// first way
// function list(names) {

//     let finalString = '';

//     if (names.length === 1) {
//         return names[0].name;
//     }

//     names.forEach((arrItem, arrIndex) => {
//         const name = arrItem.name;

//         if(arrIndex === names.length - 1) {
//             finalString = finalString + ' & ' + name;
//         } else if (arrIndex == names.length - 2){
//             finalString = finalString + name;
//          } else {
//             finalString = finalString + name + ', '
//           };
        
//     });

//     return finalString;
// };
// console.log( list( [ {name:'Kerim'} ] ) );
// console.log( list( [ {name:'Kerim'}, {name: 'John'} ]) );
// console.log( list( [ {name:'Kerim'}, {name: 'John'}, {name: 'Mike'}, ] ) );
// console.log( list( [ {name:'Kerim'}, {name: 'John'}, {name: 'Mike'}, {name:'George'} ] ) );


// second way
// function list(arr){
//     let len = arr.length;
//     if (len == 0) {
//         return ' ';
//     }    
//     return arr.slice(0, len-1).map(p=>p.name).join(", ") + (len > 1 ? ' & ' : '') + arr[len-1].name;
// };
// console.log( list([ {name: 'Bart'}, {name: 'Lisa'}, {name: 'Maggie'} ]) );
// console.log( list([ {name: 'Bart'}, {name: 'Lisa'} ]) );
// console.log( list([ {name: 'Bart'} ]) );
// console.log( list([]) );




// Example - 10 minutes walk
// (https://dev.to/annawijetunga/take-a-ten-minute-walk-javascript-5abd)

// function isValidWalk(walk) {
//     if (walk.length !== 10) {
//         return false;
//     }

//     let nOffset = 0;
//     let wOffset = 0;
//     let eOffset = 0;
//     let sOffset = 0;

//    walk.forEach(direction => {
//     switch (direction) {
//         case 'n':
//             nOffset = nOffset + 1;
//             break;
//         case 'w':
//             wOffset = wOffset + 1;
//             break;     
//         case 'e':
//             eOffset = eOffset + 1;
//             break; 
//         case 's':
//             sOffset = sOffset + 1;
//             break;  
//      };
//   });

//   return nOffset - sOffset === 0 && wOffset - eOffset === 0
   
// };

// console.log(isValidWalk(['n','s','n','s','n','s','n','s','n','s']), 'should return true');
// console.log(isValidWalk(['w','e','w','e','w','e','w','e','w','e','w','e']), 'should return false');
// console.log(isValidWalk(['w']), 'should return false');
// console.log(isValidWalk(['n','n','n','s','n','s','n','s','n','s']), 'should return false');




// Example - write a function persistence that takes in a positive parameter num and returns its multiplicative persistence, which is the number of times you must multiply the digits in num until you reach a single digit.

// first way
// function persistence(num) {
//     if (num < 10) {
//         return 0;
//     }
//     const stringVersion = num.toString();
//     console.log(stringVersion);
//     const arrayVersion = stringVersion.split("");
//     console.log(arrayVersion);
//     const multiplicationValue = arrayVersion.reduce((acc, num) => acc = acc * num);
//     console.log(multiplicationValue, 'console.log');

//     return multiplicationValue;
// };

// console.log(persistence(1234));



// second way 
// function persistence(num) {
//     if (num.toString().length === 1) {
//       return 0;
//     }
//    let mult = 1;
//    let splitStr = num.toString().split("");
//     for (let i = 0; i < splitStr.length; i++) {
//       mult *= parseFloat(splitStr[i])
//     }
//     return 1 + persistence(parseFloat(mult));
// };
  
// console.log(persistence(999));   // 4
// console.log(persistence(39));    // 3
// console.log(persistence(4));     // 0




// Example - Regex validate PIN code

// first way
// function validatePIN(pin) {
//     const fourDigitsRegex = /(^[0-9]{4}$)/;
//     const sixDigitsRegex = /(^[0-9]{6}$)/;

//     const result1 = pin.match(fourDigitsRegex);
//     const result2 = pin.match(sixDigitsRegex);
    
//     return !(!result1 && !result2);
// };
// console.log(validatePIN('1234'));
// console.log(validatePIN('12345'));
// console.log(validatePIN('123'));
// console.log(validatePIN(''));



// second way 
// function validatePIN (pin) {
//     return /^(\d{4}|\d{6})$/.test(pin);
// }

// console.log(validatePIN('1234'));   // > true
// console.log(validatePIN('123456')); // > true
// console.log(validatePIN('123'));    // > false
// console.log(validatePIN('12345'));  // > false




// Example - Regex count lowercase letters

// first way
// function lowerCaseCount(string) {
//     const result = string.match(/[a-z]/g, '')
//     return result ? result.length : 0;
// };
// console.log(lowerCaseCount('Kerim Imamovic'));



// second way
// var s = "thisIsAstring";
// var numUpper = s.length - s.replace(/[A-Z]/g, '').length;  
// console.log(numUpper); // 2
// var numLower = s.length - s.replace(/[a-z]/g, '').length;  
// console.log(numLower); // 11




// Example - is Today date function

// first way
// function isToday(date) {
//     const checkDay = date.getDate();
//     const checkMonth = date.getMonth();
//     const checkYear = date.getFullYear();

//     const today = new Date();

//     const todayDay = today.getDate();
//     const todayMonth = today.getMonth();
//     const todayYear = today.getFullYear();

//     return checkDay === todayDay && checkMonth && todayMonth && checkYear === todayYear;
// };
// console.log ( isToday( new Date() ) ); 
// console.log ( isToday( new Date('11-07-2022') ) );



// second way
// function isToday(date) {
//     return new Date().toDateString() === date.toDateString();
// };
// console.log(isToday( new Date('11.07.2022')));




// video 09:46:46
