// let testArray = [21, 50, 98, 33];
// let testArray2 = [13, 44, 34, 19];
// let testArray3 = [8, 4, 7, 9];


// function isNumber (val) {
//     return !((isNaN(val)) || typeof val === "boolean" || val === null);
// }

document.onload(
    alert("Doesn't matter")
);


// function average (array) {
//     let total = 0;
//     for(let i =0; i < array.length; i++) {
//         if (typeof array[i] === "string" || array[i] === NaN) {
//             return false;
//         }
//         for(let j = 0; j < array[i].length; j++) {
//             if (typeof array[j] === "string" || array[j] === NaN) {
//                 return false;
//             }
//             return total = array[i][j] / array.length;
//         }
//         console.log(`array[${j}]: ${array[i]}`);
//     }
// }

// let array1 = [5, 10, 15];
//
// let array2 = [100, 88, 23, 50];
//
// let array3 = ["Apple pie", 90, 80]
//
// function arrayAverage (array) {
//     if (array === undefined) {return false;}
//     let total = 0;
//     array.forEach((element, index) => {
//        total += element;
//     });
//     return total/array.length;
// }

// function average (array) {
//     // an average adds all the elements of an array
//     // and then divides the sum by the number of elements. SIMPLE
//     if (array === undefined) {return false;}
//     let count = 0;
//     let total = 0;
//     array.forEach((element, index) => {
//         // if (typeof parseFloat(index) !== "number") {
//         //     return false;
//         // }
//         total += element;
//         count++;
//     });
//
//     let finalTot = total / count;
//     if (isNaN(finalTot)) {
//         return false
//     } else {
//         return finalTot;
//     }
//
// }

// Write a function that accepts an array of strings and returns the longest string.
// If there are two strings of equal length it returns the one with the lowest index.
// if there are any values that are not strings, return false.

// let stringArray = ["buzzworthy", "Jabba", "Darth Maul", "Hondo"];

// function longestString (array) {
//     if (array === undefined) {return false;}
//     // array.forEach((element, index) => {
//     //     if (!isNaN(element)) {
//     //         return false;
//     //     } else {
//     //
//     //     }
//     // });
//     let longest = '';
//     for(let i =0; i < array.length; i++){
//         if (array[i].length > longest.length) longest = array[i];
//     }
//     return longest;
// }



// Write a function, calculateTotalStudents, that returns the total number of students recorded in the classes array.
// let classes = [
//     {class: "6th grade history", students: 18},
//     {class: "7th grade history", students: 20},
//     {class: "8th grade history", students: 22}
// ];

// console.log("The answer should be " + (18+20+22))
//
// function calculateTotalStudents (array) {
//     if (array === undefined) {return false;}
//     let total = 0;
//     array.forEach((element, index) => {
//         total += element.students;
//     });
//     return total;
// }

// function calculateTotalStudents2 (array) {
//     if (array === undefined) {return false;}
//     let total = 0;
//     for(let i = 0; i < array.length; i++) {
//         total += array[i].students
//     }
//     return total;
// }

// let productOf = [20, 18, 19, 44, 2, 777];

// console.log(`the product answer should be ${(20 * 18 * 19 * 44 * 2 * 777)}`);

// function multiplyAll (array) {
//     if (array === undefined) {return false;}
//     let total = 1;
//     for(let i = 0; i < array.length; i++) {
//         total *= array[i]
//     }
//     return total;
// }

// Write a function called convertToObject that takes in a string that is the name of a class,
// and a number that is the number of students,
// and returns an object with the properties `class` and `students`
//
// convertToObject("Intro to Programming", 20)

// function convertToObject(string, number){
//     return {class: string, number: number};
// }


// var neighborhood1 ={
//     neighborhood: "Lovely Estates",
//     medianHomePrice: 280000,
//     pool: true,
//     tennis: false,
//     crimeRate: "low",
//     schools: [
//         {name: "ES1", rating: 8},
//         {name: "MS2", rating: 6},
//         {name: "HS3", rating: 8}
//     ]
// }

// var neighborhood2 ={
//     neighborhood: "Luminous Estates",
//     medianHomePrice: 270000,
//     pool: true,
//     tennis: false,
//     crimeRate: "low",
//     schools: [
//         {name: "ES1", rating: 8},
//         {name: "MS2", rating: 8},
//         {name: "HS3", rating: 8}
//     ]
// }

// var neighborhood3 ={
//     neighborhood: "Ginormous Ego Estates",
//     medianHomePrice: 350000,
//     pool: true,
//     tennis: true,
//     crimeRate: "low",
//     schools: [
//         {name: "ES1", rating: 9},
//         {name: "MS2", rating: 9},
//         {name: "HS3", rating: 9}
//     ]
// }

// Write a function that takes a neighborhood object and determines if it is desirable.
// A neighborhood is desirable if the median home price is less than 300000, crime rates are low,
// and the total rating of schools is at least 24.

// function desirableObject (object) {
//
//     let total = 0;
//
//     for (let i = 0; i < object.schools.length; i++) {
//         total += object.schools[i].rating;
//     }
//     if (object.medianHomePrice < 300000 && object.crimeRate === "low" && total >= 24) {
//         return `${object.neighborhood} is desirable!`;
//     } else {
//         return `${object.neighborhood} is not desirable...`
//     }
// }

// your company just hired your friend from college and paid you a referral bonus.
// To celebrate, you're taking your team out to the terrible dive bar next door
// and using the referral bonus to buy, and build, the largest three-dimensional beer can pyramid you can.

//
// A beer can pyramid will square the number of cans in each level - 1 can in the top level, 4 in the second, 9 in the next, 16, 25...
//
// Complete the beeramid function to return the number of complete levels of a beer can pyramid you can make,
// given the parameters of:
//
//     your referral bonus, and
//
//     the price of a beer can
//
// For example:
//
// beeramid(1500, 2); // should === 12
// beeramid(5000, 3); // should === 16

// what's the cost of each level? level^2 * beerPrice
// need a total cost accumulator variable and some kind of level variable that keeps track of what level I'm on
// I need to keep looping until totalCost > bonus

// function beeramid (bonus, beerPrice) {
//     let total = 0;
//     let levels = 0;
//     while (total < bonus) {
//         total += ((levels**2) * beerPrice);
//         levels++;
//     } return levels;
//
// }

// function beeramid (bonus,price){
//     let total = (bonus - (bonus % price))/price;
//     let x = 0;
//     for (let i = 0; total >= ((1 / 3)*(i**3))+((1 / 2)*(i**2))+((1 / 6)*(i)); i++){
//         x = i;
//     }
//     return x;
// }

// function beeramid (bonus,price){
//     let total = (bonus - (bonus % price))/price; //this line tells you how many cans of beer you can buy
//     let x = 0; //accumulator variable
//     for (let i = 0; total >= ((1 / 3)*(i**3))+((1 / 2)*(i**2))+((1 / 6)*(i)); i++){ //solved for a cubic function
//         x = i; //match the acumulator to the number of levels
//     }
//     return x;
// }




//Write a function, getSimpleUser, that takes in a user object and returns a simplified user object.
//
// Assume the following shape of the user object for the function input:
//
// ```
// {
//   firstName: '...',
//   lastName: '...',
//   email: '...',
//   username: '...',
//   password: '...'
// }
// ```
//
// The shape of the output should be the following:
//
// ```
// {
//   firstName: '...',
//   lastName: '...',
// }
//

// Regardless of the case of the first name and last name input, the output should be in all lower case.

// const attendance = {
//     miami: 32789,
//     buffalo: 45678,
//     portland: 24567
//     // total attendance should be 103034
//     // Avg attendance should be 34344.66
// }




// Given the attendance object, write a function that returns the total attendance across all teams.

// function totalAttendance (passedObject) {
//     let acc = 0;
//     let attendanceArray = Object.values(passedObject);
//     for (let i = 0; i < attendanceArray.length; i++) {
//        acc += attendanceArray[i];
//     // console.log(`${acc} is the accumulated total.`);
//     }
//     console.log(`${acc} is the total`)
// }

// function totalAttendance (attendanceObj){
//     let total =0;
//     for (const prop in attendanceObj) {
//         total += attendanceObj[prop];
//     }
//     return total;
// }

// write a function that returns the average attendance

// function avgAttendance (passedObject) {
//     let total = totalAttendance(passedObject);
//     //need a variable to count the number of properties in object
//     let objectProp = Object.keys(passedObject);
//
//     for (let i = 0; i < objectProp.length; i++) {
//         console.log(`element test: ${i}`)
//         total += objectProp
//     } return {
//         totalAttendance: total,
//         avgAttendance: total/objectProp.length
//     }
//
//      //This prototype doesn't work :)
// }

// write a function that returns an object with totalAttendance and averageAttendance properties set to the correct values


/**
 * Convert Address to Object
 * Write a function named convertAddressToObject that accepts a string that contains a street number (as a string)
 * and street name separated by a space characters, and returns an object with properties streetNumber and streetName.
 *
 * Examples
 *
 * >> convertAddressToObject('8646 Sunny Oaks') ➞ {streetNumber: '8646', streetName: 'Sunny Oaks'}
 * >> convertAddressToObject('5408 Villa Nueva') ➞ {streetNumber: '5408', streetName: 'Villa Nueva'}
 **/

// let address = "8646 Sunny Oaks"
// let address2 = "5408 Villa Nueva"

// ##### Example 1
//     function convertAddressToObject (address) {
//         let streetNum = address.substring(0, address.indexOf(' '));
//         let streetName = address.substring(address.indexOf(' ') + 1);
//             // console.log(address);
//             return {
//                 streetNum,
//                 streetName
//             }
//      }

// ##### Example 2
//     function convertAddressToObject (address) {
//         let addressArray = address.split(' ');
//         return {
//             streetNumber: addressArray[0],
//             streetName: addressArray.slice(1, addressArray.length).join(' ')
//         }
//     }

/**
 * Count total pets
 * Write a function named totalPets that accepts an array of objects where each object represents a person, and has a 'pets'
 * property for their owned pets. The function should return the sum of every object's numPets property.
 *
 * Examples
 *
 * >> totalPets([
 *       {name: 'Fernando Mendoza', pets: 1},
 *       {name: 'Douglas Hirsh', pets: 8},
 *       {name: 'Kenneth Howell', pets: 2}
 *    ]) ➞ 11
 */

    // let totalPetsVar = [
    //     {name: 'Fernando Mendoza', pets: 1},
    //     {name: 'Douglas Hirsh', pets: 8},
    //     {name: 'Kenneth Howell', pets: 2}
    // ]

// ###### For Loop
//     function countTotalPets (obj) {
//         let total = 0;
//         // let petProp = obj.pets;
//         for (let i = 0; i < obj.length; i++) {
//             total += obj[i].pets;
//         }
//         return total;
//     }

// ###### forEach Loop
// function countTotalPets (obj) {
//     let total = 0;
//     obj.forEach(function (object) {
//         total += object.pets;
//     });
//     return total;
// }

// ###### reduce Function
// function totalPets (arrayOfObjects) {
//         return arrayOfObjects.reduce(function (acc, currentVal){
//             return acc + currentVal.pets;
//         }, 0)
// }

/**
 * Find the Smallest and Biggest Numbers
 * Create a function named minMax that takes an array of numbers and return both the minimum and maximum numbers, in that order.
 *
 * Examples
 * >> minMax([1, 2, 3, 4, 5]) ➞ [1, 5]
 * >> minMax([2334454, 5]) ➞ [5, 2334454]
 * >> minMax([1]) ➞ [1, 1]
 *
 * Notes
 * All test arrays will have at least one element and are valid.
 */

// let warmupArray = [8, 2, 3, 4, 1, 8, 19, 20];


// function minMax (arrayOfNumbers) {
//     let newArr = [];
//     let min = 0;
//     let max = 0;
//
//
//
//     for (let i = 0; i < arrayOfNumbers.length; i++) {
//     // We need to loop thru an array
//     // We need to log/store each index arrayOfNumbers[i]
//     // We need to compare each index
//
//         console.log(parseInt(arrayOfNumbers[i].sort()));
//
//     min = arrayOfNumbers[i];
//     if (min < arrayOfNumbers[i + 1]) {
//         // console.log(`${min}`);
//         console.log(Math.min(min, arrayOfNumbers[i +1]));
//     }
//
//     }
// }




// function minMax (numArray) {
//     let min = 0;
//     let max = 0;
//     for (let i = 0; i < numArray.length; i++){
//         m
//     }
// }

/**
 * Filter out Strings from an Array
 * Create a function named filterArray that takes an array of non-negative integers and strings and return a new array without the strings.
 *
 * Examples
 *
 * >> filterArray([1, 2, "a", "b"]) ➞ [1, 2]
 * >> filterArray([1, "a", "b", 0, 15]) ➞ [1, 0, 15]
 * >> filterArray([1, 2, "aasf", "1", "123", 123]) ➞ [1, 2, 123]
 *
 * Notes
 * Zero is a non-negative integer.
 * The given array only has integers and strings.
 * Numbers in the array should not repeat.
 * The original order must be maintained.
 */
//
// * Drink Sorting
// * You will be given an array of drinks, with each drink being an object with two properties: name and price.
// * Create a function named sortDrinkByPrice that has the drinks array as an
// * argument and return the drinks objects sorted by price in ascending order.
// *
// * Assume that the following array of drink objects needs to be sorted:
//      drinks = [
//          {name: "lemonade", price: 50},
//          {name: "lime", price: 10},
//          {name: "juice", price: 3},
//          {name: "soda", price: 15},
//          {name: "sparkling water", price: 8},
//          {name: "water", price: 1},
//
//  ];
// console.log(...drinks);
// Examples
// sortDrinkByPrice(drinks) ➞ [{name: "lime", price: 10}, {name: "lemonade", price: 50}];

// function sortDrinkByPrice (drinks) {
//     let acc = 0;
//     for (let i = 0; i < drinks.length; i++) {
//         // console.log(`i is ${i}`);
//         let priceTag = drinks[i].price;
//
//         console.log(`drinks price? ${priceTag}`)
//     }
// }

// ################################### Simple for-loop practice ############################

// make a function that outputs 1-10

// function oneToTen (count) {
//     for(let i = 0; i <= count; i++) {
//         console.log(i)
//     }
// }

// let testArr = [3, 8, 9, 32, 45];
//
// function getMinimum(array) {
//     console.log(...array);
//     return (Math.min(...array));
// }
//
// function getMaximum(array) {
//     return (Math.max(...array));
// }
//
// function minMax(newArr) {
//     let minVal = getMinimum(newArr);
//     let maxVal = getMaximum(newArr);
//
//     newArr = [minVal, maxVal];
//     console.log(newArr);
// }

//// 3. Write a function printEven() prints all the even numbers of an array using for loops.

// let arrayEven = [13,23,12,45,22,48,66,100]

// function printEven(array) {
//     for (let i = 0; i < array.length; i++) {
//         if (array[i] %2 === 0){
//             console.log(array[i]);
//         }
//     }
// }

// 2. Write a function printArray() prints all elements of 2D array using nested for loops

// let printArrayVar = [
//     [1, 2],
//     [3, 4],
//     [5, 6]
//     ];
//
// function printArray(array){
//     // first for loop cycles through each element
//     for (let i = 0; i < array.length; i++) {
//         // second for loop cycles through each index
//         for (let j = 0; j < array[i].length; j++){
//             console.log(array[i][j]);
//         }
//     }
// }

// var isColdOutside = true;
//
// var clothingToWear;
//
// if (isColdOutside) {
//     clothingToWear = 'sweater and a jacket';
// } else {
//     clothingToWear = 'shorts and a t-shirt';
// }
//
// var clothingToWear = isColdOutside ? 'sweater and a jacket' : 'shorts and a t-shirt';



// -- Write a function that takes in an input, checks that input, and returns true or false depending on some feature of
// the input (what kind of number, what kind of string, what type of data it is)


// -- Write a function that takes in an input, does something to it, and returns the modified data (do a mathematical
// operation on it, do a string method to modify it, use an array method to modify an array)

function doubleNumber (input) {
    return input * 2;
}

function upperCase(string) {
    return string.toUpperCase();
}

function doubleString (string) {
    return string.concat(string);
}


// -- Write a function that takes in an array and returns the array modified in some way -- certain elements removed,
// certain elements modified in a regular way (example, every numerical value doubled, every string upper-cased)

// -- Write a function that accepts an array of objects where each object has at least one property with a numeric
// value, be able to return the total or average of the numeric values

// -- Write a function that accepts a string, breaks down the string into components, and returns an object where each
// component of the string has become the value of a property

// -- Write a function that analyzes a string, returning the results of the analysis, example, return the length of
// the string

// -- Write a function that analyzes a string, returning an object that contains several properties with information
// about the string, example, length, firstLetter, and lastLetter properties


// -- Write a function that takes in a string and modifies it in some way.  Example write a function that takes in a
// string and replaces every instance of the letter e with the number 3, and every instance of the letter i with the
// number 1, and every instance of the
// letter o with the number 0, and a with 4.  Write a function that capitalizes every other letter in the string
// starting with the first letter, counting blank spaces as characters.  Try the same not counting blank spaces as
// characters.  Write a function that capitalizes the last letters of every word in a string.

/**
 * Get Sum of People's Budget
 * Create the function named getBudgets that takes an array with objects and returns the sum of people's budgets.
 *
 * Examples
 *
 * >> getBudgets([
 *        { name: "John", age: 21, budget: 23000 },
 *        { name: "Steve",  age: 32, budget: 40000 },
 *        { name: "Martin",  age: 16, budget: 2700 }
 *    ]) ➞ 65700
 * >> getBudgets([
 *        { name: "John",  age: 21, budget: 29000 },
 *        { name: "Steve",  age: 32, budget: 32000 },
 *        { name: "Martin",  age: 16, budget: 1600 }
 *    ]) ➞ 62600
 */


/**
 * Get Student Top Notes
 * Create a function named getStudentTopNotes that takes an array of students and returns an array of their top notes.
 * If the student does not have notes then let's assume their top note is equal to 0.
 *
 * Examples
 *
 * >> getStudentTopNotes([
 *      {
 *         id: 1,
 *         name: "Jacek",
 *         notes: [5, 3, 4, 2, 5, 5]
 *       },
 *      {
 *         id: 2,
 *         name: "Ewa",
 *         notes: [2, 3, 3, 3, 2, 5]
 *       },
 *      {
 *         id: 3,
 *         name: "Zygmunt",
 *         notes: [2, 2, 4, 4, 3, 3]
 *       }
 *    ]) ➞ [5, 5, 4]
 */
let students =[
    {
        id: 1,
        name: "Jacek",
        notes: [5, 3, 4, 2, 5, 5]
    },
    {
        id: 2,
        name: "Ewa",
        notes: [2, 3, 3, 3, 2, 5]
    },
    {
        id: 3,
        name: "Zygmunt",
        notes: [2, 2, 4, 4, 3, 3]
    }
];

// function getStudentTopNotes (arrayOfStudentsObjects) {
//     const topNotes = [];
//     arrayOfStudentsObjects.forEach(studentObj => {
//         topNotes.push(Math.max(...studentObj.notes));
//     });
//     console.log(topNotes);
// }




/**
 * TODO:
 * Remove the Letters ABC
 * Create a function named removeABC that will remove the letters "a", "b" and "c" from the given string and return the modified version. If the given string does not contain "a", "b", or "c", return null.
 *
 * Examples
 * >> removeABC("This might be a bit hard") ➞ "This might e  it hrd"
 * >> removeABC("hello world!") ➞ null
 * >> removeABC("") ➞ null
 *
 * Notes
 * If the given string does not contain "a", "b", or "c", return null.
 */


// Write a function called removeBs that takes in an array of strings and returns an array of strings
// with all b's removed from each string. Assume the array contains only string elements.

// Examples...

// removeBs(['abc', 'ab', 'cat', 'Bay']) // returns ['ac', 'a', 'cat', 'ay']





// Write a function that accepts the top three bowling scores and returns the average.
//
//     Write a function that accepts the top three bowling scores and returns the average.
// 1. write a function
// 2. pass in parameters
// 3. 3 scores ( variables)
// 4. return something (number)

// Modify the function to accept an array of bowling scores and return the average

// Write a function that accepts an array of bowling scores and returns the highest

// Write a function that accepts an array of bowling scores and returns true if the highest score is divisible by 3

// let cityState = "San Antonio, Texas";
//
// function cityAndState (cityAndState) {
//     return {
//         city: cityAndState.split(', ')[0],
//         state: cityAndState.split(', ')[1]
//     }
// }

function analyzeString (string){
    return {
        length: string.length,
        'first character': string.charAt(0),
        'last character' : string.charAt(string.length-1),
    };
}

let testArr = [0, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10];

// write a function that removes every odd number from an array of numbers

function removeOdds (array) {
    let newArr = [];
    for (let i = 0; i < array.length; i++){
        if (array[i] %2 === 0) {
            newArr.push(array[i]);
        }
    } return newArr;
}

// write a function that takes an array of numeric values and returns an array of all those values doubled

function doubleArrayVals (array) {
    let newArr = [];
    for (let i = 0; i < array.length; i++){
            newArr.push(array[i] * 2);
    } return newArr;
}

const Test = {
    name: 'Mason',
    oldSyntax: function (){
        console.log('Old Syntax works');
    },

    //Doesn't work because arrow functions don't play well with Methods
    outputName: ()=>{
        console.log(this.name);
    }
}

// Test.outputName();
// Test.oldSyntax();