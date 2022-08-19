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

// let groceryList = ["bread", "eggs", "butter", "milk"];
// // Element -> E#    // E0   //E1    //E2      //E3
//
// for (let i = 0; i < groceryList.length; i++) {
//     if (i === groceryList.length - 1) {
//         console.log(`I have to buy ${groceryList[i]}.`);
//     } else {
//         console.log(`I have to buy ${groceryList[i]} and `)
//     }
// }

let prices = [32.99, 21.99, 6.99, 4.99, 12.99, 8.98, 5.99];

// forEachLoop takes an anonymous function
// function passed to for each loop has up to three parameters

// 1: array Elements    2: array Index    3: array itself // forEach( function ( element, index, ) )
// 2nd and 3rd parameters are optional

    // prices.forEach(function(price, index) {
    //     console.log(`item number ${index}: ${price}`);
    // });


prices.forEach((price, index) => {
    console.log(`item number ${index}: ${price}`)
});



