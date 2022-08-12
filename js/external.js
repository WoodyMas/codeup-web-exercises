console.log("Hello from external JavaScript");

// alert("Welcome to my Website!");
// let userColor = prompt("What's your favorite color?");
// console.log(userColor);
//
// alert(`Awesome! ${userColor} is my favorite color too.`);

// Write some JavaScript code, that is, variables and operators, to describe the following scenarios. Do not worry about the real operations to get the values, the goal of these exercises is to understand how real world conditions can be represented with code.
//
//     You have rented some movies for your kids: The little mermaid (for 3 days), Brother Bear (for 5 days, they love it), and Hercules (1 day, you don't know yet if they're going to like it). If price for a movie per day is $3, how much will you have to pay?



// function moviePrice (mov1, mov2, mov3) {
//     let days = 1;
//     let price = 3;
//     let total = 0;
//
//     let mov1 = (days * 3) * price;
//     let mov2 = (days * 5) * price;
//     let mov3 = days * price;
//
//     total = mov1 + mov2 + mov3;
//
// console.log(total);
//
// }

        // Little Mermaid Movie Night
        // let mov1 = "The Little Mermaid";
        // let mov2 = "Brother Bear";
        // let mov3 = "Hercules";
        //
        // let mov1Response = parseFloat(prompt(`How long will you rent ${mov1}?`));
        // console.log(mov1Response + " days for " + mov1);
        // let mov2Response = parseFloat(prompt(`How long will you rent ${mov2}?`));
        // console.log(mov2Response + " days for " + mov2 );
        // let mov3Response = parseFloat(prompt(`How long will you rent ${mov3}?`));
        // console.log(mov3Response + " days for " + mov3);
        //
        // let pricePerNight = parseFloat(prompt("What's the price per night?"));
        // console.log("$" + pricePerNight + " per night");
        //
        // console.log(((mov1Response * pricePerNight) + (mov2Response * pricePerNight) + (mov3Response * pricePerNight)));

// Hours and Pay

        let comp3 = "Google";
        let comp2 = "Amazon";
        let comp1 = "Facebook";

        let googRate = "";
        let amRate = "";
        let fbRate = "";
        let totalSal;

        let comp1Hours = parseFloat(prompt(`How many hours have you worked at ${comp1}?`));
        console.log(comp1Hours + " hours for " + comp1);
        let comp2Hours = parseFloat(prompt(`How many hours have you worked at ${comp2}?`));
        console.log(comp2Hours + " hours for " + comp2 );
        let comp3Hours = parseFloat(prompt(`How many hours have you worked at ${comp3}?`));
        console.log(comp3Hours + " hours for " + comp3);

        let comp1Rate = parseFloat(prompt(`What is the hourly rate at ${comp3}?`));
        console.log(comp1Rate + " per hour for " + comp3);
        let comp2Rate = parseFloat(prompt(`What is the hourly rate at ${comp2}?`));
        console.log(comp2Hours + " per hour for " + comp2 );
        let comp3Rate = parseFloat(prompt(`What is the hourly rate at ${comp1}?`));
        console.log(comp3Hours + " per hour for " + comp1);

        totalSal = ((comp1Hours * comp1Rate) + (comp2Hours * comp2Rate) + (comp3Hours * comp3Rate));

        alert(`Your total salary should be ${totalSal}`);
        console.log("Total salary is " + totalSal);

// Enroll

// let classFull = confirm("Is the class full?");
//
// let ScheduleConflict = confirm("Is there a scheduling conflict?");
//
// let canEnroll = !classFull && !ScheduleConflict;
//
// if (canEnroll) {
//     alert("You can enroll!");
// } else {
//     alert("You cannot enroll");
// }


// Product Offer
let numberOfItemsBought = prompt("How many items did the customer buy?");
let offerExpired = confirm("Has the offer expired?");
let userPremium = confirm("Is the customer a premium member");

let makeProductOffer = (userPremium || numberOfItemsBought > 2) && !offerExpired;

if (makeProductOffer) {
    alert("You get a product offer!");
} else {
    alert("You are a budget shopper no doubt...");
}

//     Suppose you're working as a contractor for 3 companies: Google, Amazon and Facebook, they pay you a different rate per hour. Google pays $400, Amazon $380, and Facebook $350. How much will you receive in payment for this week? You worked 10 hours for Facebook, 6 hours for Google and 4 hours for Amazon.
// A student can be enrolled in a class only if the class is not full and the class schedule does not conflict with her current schedule.
//     A product offer can be applied only if a person buys more than 2 items, and the offer has not expired. Premium members do not need to buy a specific amount of products.