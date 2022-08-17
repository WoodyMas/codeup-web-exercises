// Create a file named while.js in the js directory.
//
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

// This is how you get a random number between 50 and 100
let allCones = Math.floor(Math.random() * 50) + 50;

// This expression will generate a random number between 1 and 5
let clientCones = Math.floor(Math.random() * 5) + 1;

let leftOverCones = allCones - clientCones;

do {

    if (leftOverCones === 0 || leftOverCones < 0) {
        alert("You have run out of cones to sell.");
        break;
    } else {
        console.log(`There are ${leftOverCones} cones left to sell.`)
    }

} while (leftOverCones )
alert("All cones have been sold!");