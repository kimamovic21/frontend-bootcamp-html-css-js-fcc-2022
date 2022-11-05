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

