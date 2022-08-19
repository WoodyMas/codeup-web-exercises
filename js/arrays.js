/*
########################################################################################################################
############################################### Array Lecture  #########################################################
########################################################################################################################
* * */

//declaring an array literal

// let favGames = ["NBA 2k13", "SSBU", "Mount & Blade Bannerlord", "KOTOR", "Dragon's Dogma"]
//
// for (let i = 0; i < favGames.length; i++) {
//
//     if (i === favGames.length - 1) {
//         console.log(`I played ${favGames[i]} very recently.`)
//     } else if (i === favGames[1]) {
//         console.log(`${favGames[i]} is the most recent game I played.`)
//     } else {
//         console.log(`I like the game ${favGames[i]}.`)
//     }
// }

// console.log(` `);
//
// let texasCities = ["San Antonio", "Houston", "Dallas", "El Paso"];
// for (let i = 0; i < texasCities.length; i++){
//
//     if (i % 2 === 1) {
//         console.log(`${texasCities[i]} is an odd city`);
//     } else {
//         console.log(texasCities[i]);
//     }
// } console.log(` `);
//
// function outputArray(array) {
//     for (let i = 0; i < array.length; i++) {
//         console.log(array[i]);
//     }
// }



// Each item in an array is called an element ("bread", "eggs", "butter", "milk")
// Arrays always start with the 0 index, not 1.

let groceryList = ["bread", "eggs", "butter", "milk"];
// // Element -> E#    // E0   //E1    //E2      //E3
groceryList.push("Potatoes", "serranos"); //.push adds an element to the end of an array
console.log(groceryList);
groceryList.pop() // .pop removes an element from the end of an array
console.log(groceryList);

groceryList.unshift("sliced cheddar"); // .unshift adds an element to the beginning of the array
console.log(groceryList);
groceryList.shift(); // removes an element from the beginning of the array
console.log(groceryList);
//

let indexOfButter = groceryList.indexOf("butter"); // finds index of the entered string if string matches with an element
console.log(indexOfButter + " is the index of butter");

groceryList[indexOfButter] = "peanut butter"; // we just changed butter to peanut butter without needing to know the index
console.log(groceryList);

// let bread = groceryList[0];
groceryList[0] = "avocados";
console.log(groceryList)


let firstHalfOfGroceryList = groceryList.slice(0, 2);
console.log(firstHalfOfGroceryList)

let secondHalfOfGroceryList = groceryList.slice(2);
console.log(secondHalfOfGroceryList);

firstHalfOfGroceryList.push("butter");

groceryList = firstHalfOfGroceryList.concat(secondHalfOfGroceryList);
console.log(groceryList);

groceryList.reverse();
console.log(groceryList);

groceryList.sort();
console.log(groceryList);
console.log(groceryList.reverse());

// for (let i = 0; i < groceryList.length; i++) {
//     if (i === groceryList.length - 1) {
//         console.log(`I have to buy ${groceryList[i]}.`);
//     } else {
//         console.log(`I have to buy ${groceryList[i]} and `)
//     }
// }

let prices = [32.99, 21.99, 6.99, 4.99, 12.99, 8.98, 5.99];

prices.sort(function (a, b){
    return a-b;
});
console.log(prices);
groceryList[3] = "Blueberries";
console.log(groceryList);
console.log(groceryList.sort());

let newList = [];
// for (let i =0; i < groceryList.length; i++) {
//     groceryList[i] = groceryList[i].toLowerCase();
// }
// console.log(groceryList.sort());

groceryList.forEach((item, index, array) => {
    array[index] = item.toLowerCase();
});
console.log(groceryList);


// forEachLoop takes an anonymous function
// function passed to for each loop has up to three parameters

// 1: array Elements    2: array Index    3: array itself // forEach( function ( element, index, ) )
// 2nd and 3rd parameters are optional

    // prices.forEach(function(price, index) {
    //     console.log(`item number ${index}: ${price}`);
    // });


// prices.forEach((price, index) => {
//     console.log(`item number ${index}: ${price}`)
// });



