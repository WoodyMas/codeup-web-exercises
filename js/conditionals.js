"use strict";

/* ########################################################################## */

// let flavor = prompt("What flavor ice cream do you like?");
//
// flavor = flavor.toLowerCase();
//
// switch (flavor) {
//     case("chocolate"):
//         alert("One chocolate coming up.");
//         break;
//     case("vanilla"):
//         alert("One vanilla coming right up.");
//         break;
//     case("strawberry"):
//         alert("One strawberry coming right up.");
//         break;
//     default:
//         alert("We do not have that flavor. Sorry! :|");
// }


// alert(decision);
// if (decision) {
//     alert("Ok, closing the page now.");
// } else {
//     alert("Ok, keeping page open.");
// }
// let decision = confirm("Are you absolutely sure you want to close this page?");
// (decision)?alert("Closing the page"):alert("Keeping the page open.");

// let number = prompt("Enter a number!");

// function divisibleByFive(number) {
//     if (number %5 === 0 && number !== null && number !== "") {
//         alert("That number is divisible by 5.");
//     } else {
//         alert("That number isn't divisible by 5.");
//     }
// }

// function divisibleByFive(number) {
//     number %5 === 0?alert("That number is divisible by 5."):alert("That number isn't divisible by 5.");
// }
// function divisibleByFive(number) {
//     alert(number %5 === 0? "That number is divisible by 5.": alert("That number isn't divisible by 5."));
//     console.log(number);
// }
// divisibleByFive(prompt("Enter a number!"));
//
// function alertMVPCustomer (purchaseTotal) {
//     (purchaseTotal >= 1000)? alert("MVP Customer!!"): alert("Budget customer.");
// }
// alertMVPCustomer(100);

// function isMVP(purchaseTotal) {
//     return purchaseTotal > 1000;
// }
// let customer1purchase = 1001;
//
// if (isMVP(customer1purchase)) {
//     alert("MVP!")
//
// }


// if (flavor === "chocolate") {
//     alert("One chocolate coming right up!");
// } else if (flavor === "vanilla") {
//     alert("One vanilla coming right up!");
// }
// else {
//     alert("There is only chocolate. Try again.");
// }

/**
 * TODO:
 * Create a function named `analyzeColor` that accepts a string that is a color
 * name as input. This function should return a message which relates to the
 * color stated in the argument of the function. For colors you do not have
 * responses written for, return a string stating so
 *
 * Example:
 *  > analyzeColor('blue') // returns "blue is the color of the sky"
 *  > analyzeColor('red') // returns "Strawberries are red"
 *
 *
 *  > analyzeColor('cyan') // returns "I don't know anything about cyan"
 *
 * You should use an if-else-if-else block to return different messages.
 *
 * Test your function by passing various string literals to it and
 * console.logging the function's return value
 */
// function analyzeColor (string) {
//     string = prompt("Enter your favorite color!");
//     string = string.toLowerCase()
//     if (string === "red") {
//         console.log("Red is the color of rage, I hear.");
//     } else if (string === "orange") {
//         console.log("Orange is the color of Thanksgiving.");
//     } else if (string === "yellow") {
//         console.log("Yellow is the color of caution.");
//     } else if (string === "green") {
//         console.log("Green is the color of the tree tops.");
//     } else if (string === "blue") {
//         console.log("Blue is the color of the ocean.");
//     } else if (string === "indigo") {
//         console.log("Indigo is the color of the jean dye.");
//     } else if (string === "violet") {
//         console.log("Violet is the color of lavender I think?")
//     } else {
//         console.log("Is that a real color?");
//     }
// }

// Don't change the next two lines!
// These lines create two variables for you:
// - `colors`: a list of the colors of the rainbow
// - `randomColor`: contains a single random color value from the list (this
//                  will contain a different color every time the page loads)
let colors = ['red', 'orange', 'yellow', 'green', 'blue', 'indigo', 'violet'];
let randomColor = console.log(colors[Math.floor(Math.random() * colors.length)] + " is your random color.");
/**
 * TODO:
 * Pass the `randomColor` variable to your 'analyzeColor' function and console.log the results.
 * You should see a different message every time you refresh the page
 */

console.log(analyzeColor(randomColor));
/**
 * TODO:
 * Comment out the code above, and refactor your function to use a switch-case statement
 */
// function analyzeColor (string) {
//     string = prompt("Enter your favorite color.");
//     string = string.toLowerCase()
//     switch(string) {
//         case("red"):
//             return "Red is the color of unbridled rage... or so I'm told.";
//             break;
//         case("blue"):
//             return "Blue is the color of the ocean.";
//             break;
//         case("green"):
//             return "Green is the color of the Forest";
//             break;
//         case("orange"):
//             return "Orange is the color of Thanksgiving.";
//             break;
//         case("yellow"):
//             return "Yellow is the color of caution.";
//             break;
//         case("violet"):
//             return "Violet is the color of lavender? Idk dude.";
//             break;
//         case("indigo"):
//             return "Indigo is the color of the jean-dye if I'm not mistaken.";
//             break;
//         default:
//             alert("Is that a real color?");
//     }
// }


/**
 * TODO:
 * Prompt the user for a color when the page loads, and pass the input from the
 * user to your `analyzeColor` function. Alert the return value from your
 * function to show it to the user.
 */

function analyzeColor (string) {
    string = prompt("Enter your favorite color.");
    string = string.toLowerCase()
    switch(string) {
        case("red"):
            alert("Red is the color of unbridled rage... or so I'm told.");
            break;
        case("blue"):
            alert("Blue is the color of the ocean.");
            break;
        case("green"):
            alert("Green is the color of the Forest");
            break;
        case("orange"):
            alert("Orange is the color of Thanksgiving.");
            break;
        case("yellow"):
            alert("Yellow is the color of caution.");
            break;
        case("violet"):
            alert("Violet is the color of lavender? Idk dude.");
            break;
        case("indigo"):
            alert("Indigo is the color of the jean-dye if I'm not mistaken.");
            break;
        default:
            alert("Is that a real color?");
    }
    console.log(string + " is the input color");
}



/* ########################################################################## */

/**
 * TODO:
 * Suppose there's a promotion in Walmart, each customer is given a randomly
 * generated "lucky number" between 0 and 5. If your lucky number is 0 you have
 * no discount, if your lucky number is 1 you'll get a 10% discount, if it's 2,
 * the discount is 25%, if it's 3, 35%, if it's 4, 50%, and if it's 5 you'll get
 * everything for free!.
 *
 * Write a function named `calculateTotal` which accepts a lucky number and total
 * amount, and returns the discounted price.
 *
 * Example:
 * calculateTotal(0, 100) // returns 100
 * calculateTotal(4, 100) // returns 50
 * calculateTotal(5, 100) // returns 0
 *
 * Test your function by passing it various values and checking for the expected
 * return value.
 */
function calculateTotal (luckyNum, totalAmount) {
    switch(luckyNum){
        case(0):
            return totalAmount   + ". No discount has been applied :( ";
            break;
        case(1):
            return totalAmount - (totalAmount * 0.1)  + " after the 10% discount! ";
            break;
        case(2):
            return totalAmount - (totalAmount * 0.25)  + " after the 25% discount! ";
            break;
        case(3):
            return totalAmount - (totalAmount * 0.35)  + " after the 35% discount! ";
            break;
        case(4):
            return totalAmount - (totalAmount * 0.5)  + " after the 50% discount! ";
            break;
        case(5):
            return totalAmount - (totalAmount * 1) + ". A 100% discount has been applied!";
            break;
        default:
            return "You don't want a discount??";

    }
}


/**
 * TODO:
 * Uncomment the line below to generate a random number between 0 and 5.
 * (In this line of code, 0 is inclusive, and 6 is exclusive)
 * Prompt the user for their total bill, then use your `calculateTotal` function
 * and alerts to display to the user what their lucky number was, what their
 * price before the discount was, and what their price after the discount is.
 */
// Generate a random number between 0 and 6
let luckyNumber =  Math.floor(Math.random() * 6);
console.log(luckyNumber + " is the lucky number");
let totalBill = prompt("Please enter your bill, and possibly win a discount!");

alert(`Your original bill was ${totalBill}, but with a lucky number of ${luckyNumber}, Your new discounted price is ${calculateTotal(luckyNumber, totalBill)}`);

calculateTotal(luckyNumber, totalBill);


console.log(totalBill);







/**
 * TODO:
 * Write some JavaScript that uses a `confirm` dialog to ask the user if they
 * would like to enter a number. If they click 'Ok', prompt the user for a
 * number, then use 3 separate alerts to tell the user:
 *
 * - whether the number is even or odd
 * - what the number plus 100 is
 * - if the number is negative or positive
 *
 * Do *NOT* display any of the above information
 * if the user enters a value that is not of the number data type.
 * Instead, use an alert to inform them of the incorrect input data type.
 *
 *
 * Can you refactor your code to use functions?
 * HINT: The way we prompt for a value could be improved
 */

let decision = confirm("Would you like to enter a number?")? parseFloat(prompt("Please enter a number.")): alert("You don't want to enter a number I see...");

function isNumber (value) {
    if (parseFloat(value) !== NaN || typeof (parseFloat(value)) === "boolean") {
        return value;
    } else {
        alert("The input value is not a number")
    }
}

function userDecision (userNum) {
    let num1 = isNumber(userNum)
    if (num1 > 0) {
        alert("The number you entered is positive.");
    } else if (num1 < 0) {
        alert("The number is negative.");

    } else {
        alert("The number isn't negative or positive.");
    }
    alert(`Your number + 100 is ${(num1 + 100)}`);

    if (num1 %2 === 0 && num1 !== 0) {
        alert("The number is even.");
    } else if (num1 === 0) {
        alert("The number is 0, and would destroy the fabric of reality if we tried to determine whether or not it is even or odd.");
    }
    else {
        alert("The number is odd.");
    }
}

userDecision(decision);
//
//     git add .
//     git commit -m "your comment here"
//     git push origin main


// if (parseFloat(userNumber) === NaN) {
//     alert("The entered value is not a number.");
// } else if (parseFloat(userNumber) === !NaN) {
//     switch (userNumber) {
//         case(userNumber %2 === 0):
//             alert("The number is even");
//         case(userNumber %2 !== 0):
//             alert("The number isn't even");
//             break;
//         case(userNumber > 0):
//             alert("Your number is positive");
//         case(userNumber < 0):
//             alert("Your number is negative");
//             break;
//         alert(`your number + 100 = ${userNumber+100}`);
//     }
// }


// switch (userNumber !== NaN) {
//     case(userNumber %2 === 0):
//         alert("Your number is even");
//         alert(`your number + 100 is ${parseFloat(userNumber + 100)}`);
//         break;
//     case(userNumber > 0):
//         alert(`your number + 100 is ${userNumber + 100}`);
//         break;
//         alert(`your number is a positive number`);
//         break;
// }