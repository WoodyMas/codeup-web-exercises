// ########################## Lecture for Break & Continue #################################### //

// let string = "";
//
// for (let i = 0; i < 8; i++) {
//     let word = prompt("Let's make a sentence! Enter a word:");
//     string += " " + word;
//     console.log("Your sentence is " + string);
//     if (word === "curses") {
//         console.log("That word is not allowed");
//         break;
//     }
//     string += " " + word;
//     console.log("Your sentence is " + string)
// }
//


    // Number to skip is: 27 (USER NUM)
    //
    // Here is an odd number: 1
    // Here is an odd number: 3
    // Here is an odd number: 5
    // Here is an odd number: 7
    // Here is an odd number: 9
    // Here is an odd number: 11
    // Here is an odd number: 13
    // Here is an odd number: 15
    // Here is an odd number: 17
    // Here is an odd number: 19
    // Here is an odd number: 21
    // Here is an odd number: 23
    // Here is an odd number: 25
    // Yikes! Skipping number: 27
    // Here is an odd number: 29
    // Here is an odd number: 31
    // Here is an odd number: 33
    // Here is an odd number: 35
    // Here is an odd number: 37
    // Here is an odd number: 39
    // Here is an odd number: 41
    // Here is an odd number: 43
    // Here is an odd number: 45
    // Here is an odd number: 47
    // Here is an odd number: 49

// Needs to prompt a user for an odd number between 0 and 50
// Needs to log all odd numbers between 0 and 50
// User's chosen number is the number that will be skipped
// Need a message to inform user of invalid input if the number chosen is even or over 50/ under 0

let userNum = prompt("Please enter an odd number between 0 and 50");

if (userNum < 0 || userNum %2 === 0 || userNum > 50) {
    alert("Sorry but the number you entered is either negative, even, or over 50. Try again.");
} else {
    console.log(`User's chosen number: ${userNum}`);
}

for (let i = 1; i <= 50; i += 2) {

    if(i == userNum) {
        console.log(`User's number: ${userNum} matches the odd number: ${i}. Skipping this list item.`);
        continue;
    } else {
        console.log(`Here is an odd number: ${i}`);
    }
}


