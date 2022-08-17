let slices = 4;


//while slices is greater than 0
// while (slices > 0) {
//     console.log("I'll have a slice");
//     slices = slices - 1;
//     console.log(`Now there's ${slices} left.`);
// }
// console.log("No More pizza.");
//
//

// let counter = 100; // where do I begin?
//
// while (counter >= 0) { //How do I continue?
//     console.log(counter);
//     counter--; //Do I increment or decrement in value?
//
// }
//
// let number = 5;
//
// while (number < 200 ) {
//     console.log(number);
//     // number = number * 2;
//     number *= 2;
//
// }

// Ask a user for input -- how much does something cost?
// Assign the user input to a variable
// Declare a variable to hold the total cost
// Tell the user what the total is
// Get the user input for the next item's cost
// There needs to be a way for the user to say when there's no more items

// let total = 0;
//
//
// let priceOfItem = parseFloat(prompt("Enter the price of your item:"));
//
//
//
// total = total + priceOfItem;
// alert(`Your total is ${total}`);

// ############################################## First Draft #######################################################
//
// let userInput = "";
//
// let total = 0;
// let priceOfItem = parseFloat(prompt("Enter the price of your item:"));
// total = priceOfItem + total;
//
// while(userInput !== "stop"){
//     userInput = prompt("Enter the price of your next item:");
//     if(userInput === "stop") {
//         alert(`Your final total is ${total}`);
//     } else {
//         priceOfItem = parseFloat(userInput);
//         total = total + priceOfItem;
//         alert(`Your total is now ${total}`);
//     }
// }


// // CLASS EXAMPLE
// let total = 0;
// let priceOfItem;
// while (true) {
//     let userInput = prompt("Enter the price of your item:" + "\n Enter STOP when you are done");
//     if(userInput === "STOP"){
//         alert(`Your final total is ${total}`);
//         break;
//     } else {
//         priceOfItem = parseInt(userInput);
//         total = total + priceOfItem;
//         alert(`Your total is ${total}`);
//     }
// }