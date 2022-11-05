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


// video 09:13:50
