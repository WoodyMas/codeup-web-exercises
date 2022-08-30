function isNumber (val) {
    return !((isNaN(val)) || typeof val === "boolean" || val === null);
}


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

let array1 = [5, 10, 15];

let array2 = [100, 88, 23, 50];

let array3 = ["Apple pie", 90, 80]

function arrayAverage (array) {
    if (array === undefined) {return false;}
    let total = 0;
    array.forEach((element, index) => {
       total += element;
    });
    return total/array.length;
}

function average (array) {
    // an average adds all the elements of an array
    // and then divides the sum by the number of elements. SIMPLE
    if (array === undefined) {return false;}
    let count = 0;
    let total = 0;
    array.forEach((element, index) => {
        // if (typeof parseFloat(index) !== "number") {
        //     return false;
        // }
        total += element;
        count++;
    });

    let finalTot = total / count;
    if (isNaN(finalTot)) {
        return false
    } else {
        return finalTot;
    }

}

// Write a function that accepts an array of strings and returns the longest string.
// If there are two strings of equal length it returns the one with the lowest index.
// if there are any values that are not strings, return false.

let stringArray = ["buzzworthy", "Jabba", "Darth Maul", "Hondo"];

function longestString (array) {
    if (array === undefined) {return false;}
    // array.forEach((element, index) => {
    //     if (!isNaN(element)) {
    //         return false;
    //     } else {
    //
    //     }
    // });
    let longest = '';
    for(let i =0; i < array.length; i++){
        if (array[i].length > longest.length) longest = array[i];
    }
    return longest;
}



// Write a function, calculateTotalStudents, that returns the total number of students recorded in the classes array.
let classes = [
    {class: "6th grade history", students: 18},
    {class: "7th grade history", students: 20},
    {class: "8th grade history", students: 22}
];

console.log("The answer should be " + (18+20+22))

function calculateTotalStudents (array) {
    if (array === undefined) {return false;}
    let total = 0;
    array.forEach((element, index) => {
        total += element.students;
    });
    return total;
}

function calculateTotalStudents2 (array) {
    if (array === undefined) {return false;}
    let total = 0;
    for(let i = 0; i < array.length; i++) {
        total += array[i].students
    }
    return total;
}

let productOf = [20, 18, 19, 44, 2, 777];

console.log(`the product answer should be ${(20 * 18 * 19 * 44 * 2 * 777)}`);

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
convertToObject("Intro to Programming", 20)

function convertToObject(string, number){
    return {class: string, number: number};
}


var neighborhood1 ={
    neighborhood: "Lovely Estates",
    medianHomePrice: 280000,
    pool: true,
    tennis: false,
    crimeRate: "low",
    schools: [
        {name: "ES1", rating: 8},
        {name: "MS2", rating: 6},
        {name: "HS3", rating: 8}
    ]
}

var neighborhood2 ={
    neighborhood: "Luminous Estates",
    medianHomePrice: 270000,
    pool: true,
    tennis: false,
    crimeRate: "low",
    schools: [
        {name: "ES1", rating: 8},
        {name: "MS2", rating: 8},
        {name: "HS3", rating: 8}
    ]
}

var neighborhood3 ={
    neighborhood: "Ginormous Ego Estates",
    medianHomePrice: 350000,
    pool: true,
    tennis: true,
    crimeRate: "low",
    schools: [
        {name: "ES1", rating: 9},
        {name: "MS2", rating: 9},
        {name: "HS3", rating: 9}
    ]
}

// Write a function that takes a neighborhood object and determines if it is desirable.
// A neighborhood is desirable if the median home price is less than 300000, crime rates are low,
// and the total rating of schools is at least 24.

function desirableObject (object) {

    let total = 0;

    for (let i = 0; i < object.schools.length; i++) {
        total += object.schools[i].rating;
    }
    if (object.medianHomePrice < 300000 && object.crimeRate === "low" && total >= 24) {
        return `${object.neighborhood} is desirable!`;
    } else {
        return `${object.neighborhood} is not desirable...`
    }
}

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

function beeramid (bonus,price){
    let total = (bonus - (bonus % price))/price;
    let x = 0;
    for (let i = 0; total >= ((1 / 3)*(i**3))+((1 / 2)*(i**2))+((1 / 6)*(i)); i++){
        x = i;
    }
    return x;
}

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

