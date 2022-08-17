// Create a while loop that uses console.log() to create the output shown below.

// 2
// 4
// 8
// 16
// 32
// 64
// 128
// 256
// 512
// 1024
// 2048
// 4096
// 8192
// 16384
// 32768
// 65536 (16th Power)

//console.log(Math.pow(num, 16)); // See if 2 to 16th Power is 65536


// let num = 2;
// let powr = 1;
//
//
// while (powr <= 16) {
//     let newNum = Math.pow(num, powr);
//     console.log(newNum);
//     powr++;
// }





// let number = Math.ceil(Math.random() * 6);
// let guess;
// console.log(guess)
//
// do {
//     guess = parseInt(prompt("Enter a number between 1 and 6"));
//     console.log(`Guessed number ${guess}, random number ${number}`);
//
// } while (guess !== number);
// console.log(`Guessed number ${guess}, random number ${number}`);
// alert(`Your guess of ${guess} matches the number ${number}`)

// An ice cream seller can't go home until she sells all of her cones.
// First write enough code that generates a random number between 50 and 100 representing the amount of cones to sell before you start your loop.
// Inside of the loop your code should generate another random number between 1 and 5, simulating the amount of cones being bought by her clients.
// Use a do-while loop to log to the console the amount of cones sold to each person.
// The below code shows how to get the random numbers for this exercise.
//
// // This is how you get a random number between 50 and 100
// let allCones = Math.floor(Math.random() * 51) + 50;
//
// // This expression will generate a random number between 1 and 5
// let clientCones = Math.floor(Math.random() * 5) + 1;
//
// let leftOverCones = allCones - clientCones;
//
// do {
//
//     console.log(`You have ${leftOverCones} cones remaining.`);
//
//     //If the cones left are less than what is ordered
//     if (clientCones < leftOverCones) {
//         console.log(`You have sold ${clientCones} cones. You now have ${leftOverCones} cones remaining.`);
//
//     } else if (clientCones > leftOverCones ){
//         console.log(`You cannot sell ${clientCones} cones because you only have ${leftOverCones} cones.`)
//     } else {
//         continue;
//     }
//
// } while (leftOverCones > 0);
// console.log(`You sold all all ${allCones} cones!`);


// let client = 1;



// console.log(`You have ${allCones} left.`);
//     do {
//         leftOverCones = allCones - clientCones;
//         console.log(`A customer has bought ${clientCones} cones, leaving you with ${leftOverCones} cones remaining.`)
//         // If leftOverCones is less than clientCones, log the message and break.
//         if (leftOverCones < clientCones) {
//             console.log(`You cannot sell ${clientCones} cones, because you only have ${leftOverCones} cones remaining.`);
//             leftOverCones = leftOverCones - clientCones;
//
//             break;
//         } else {
//             continue;
//         }
//
//
//
//     } while (leftOverCones > 0); // Do while allCones is more than 0


// I need to use the variable allCones as the starting #
/* clientCones will equal a random num from 1 - 5, but I need another variable to log which customer applies to each
 instance of the clientCone being re-rolled */

// console.log(`You have ${allCones} left.`);
// do {
//     console.log(`There are ${leftOverCones} left.`);
//     if (leftOverCones > clientCones) {
//         console.log(`A customer has bought ${clientCones} cones, which leaves you with ${leftOverCones} cones.`)
//
//     } else {
//         console.log(`You cannot sell ${clientCones} cones because you only have ${leftOverCones} cones left.`)
//         break;
//     }
//     console.log(`There are ${leftOverCones} left.`)
//
// } while (leftOverCones > 0);
//
// console.log(`All ${allCones} cones sold! Congratulations!`);

//
// let allCones = Math.floor(Math.random() * 51) + 50;
// do {
//     let conesWanted = Math.floor(Math.random() * 5) + 1;
//
//         if (conesWanted > allCones) {
//             console.log(`Cannot sell ${conesWanted} cones because you have ${allCones}`);
//         } else {
//             console.log(`${conesWanted} cones sold...`);
//             allCones = allCones - conesWanted;
//         }
//     console.log(`${allCones} cones left.`)
// } while (allCones > 0);
// console.log(`All cones sold!`);
