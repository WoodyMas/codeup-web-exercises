// #####################################################################################################################
// ############################################# LECTURE NOTES #########################################################
// #####################################################################################################################

console.log(` `)
console.log(`-----------------------------------------------------------------`)
console.log(`----------------------------------------`)
console.log(`WEATHER OBJECT LECTURE vvv`)
console.log(`----------------------------------------`)
console.log(`----------------------------------------`)
let currentWeather = {
    humidity: 77,
    temp: 82.33,
    feels_like: 88.79,
    clouds: 75,
    description: "cloudy"

};
console.log(currentWeather.temp);
console.log(currentWeather.description);
console.log(currentWeather.feels_like);

console.log(currentWeather["humidity"]);
let userChoice = "clouds";

console.log(currentWeather[userChoice]);

// userChoice = "temp";
// console.log(currentWeather[userChoice]);

// console.log(currentWeather.temp);
// console.log(currentWeather["temp"]);

// console.log(`The current weather is ${currentWeather.temp}`);
// if (currentWeather.temp > 95) {
//     console.log(`It's kind of hot.`);
// } else {
//     console.log(`It's cool today for Texas.`);
// }
//
// Loop through an array using for in loop
for (let property in currentWeather) {
    console.log(`${property}: ${currentWeather[property]}`)
}
currentWeather.uvIndex = 9.79;
console.log(currentWeather.uvIndex);

let hourlyWeather = [
    {
        time: "08:00",
        temperature: 78.91,
        feels_like: 78.91
    },
    {
        time: "09:00",
        temperature: 79.57,
        feels_like: 79.57
    },
    {
        time: "10:00",
        temperature: 81.46,
        feels_like: 86.04
    },
    {
        time: "11:00",
        temperature: 84.49,
        feels_like: 89.24
    }
];

// Loop through an array of objects

// using the for loop
// for (let i = 0; i < hourlyWeather.length; i++) {
//     console.log(`At ${hourlyWeather[i].time} the temperature will be ${hourlyWeather[i].temperature} but will feel like ${hourlyWeather[i].feels_like}.`)
// }

// using the forEach method
hourlyWeather.forEach(forecast =>
    console.log(`At ${forecast.time} we can expect a temperature of ${forecast.temperature} which will feel like ${forecast.feels_like}.`)
);

let texasInfo = [
    {
        city: "San Antonio",
        latitude: 29.423017,
        longitude: -98.48527,
        timezone: "America/Chicago",
        currentWeather: {
            humidity: 77,
            temp: 82.33,
            feels_like: 88.79,
            clouds: 75
        }
    },
    {
        city: "Houston",
        latitude: 29.7915,
        longitude: -95.093,
        timezone: "America/Chicago",
        currentWeather: {
            humidity: 68,
            temp: 87.44,
            feels_like: 97.7,
            clouds: 75
        }
    }
];
console.log(`The temperature in ${texasInfo[1].city} is ${texasInfo[1].currentWeather.temp}.`)

console.log(`----------------------------------------`)
console.log(`----------------------------------------`)
console.log(`WEATHER OBJECT LECTURE ^^^`);
console.log(`----------------------------------------`)
console.log(`-----------------------------------------------------------------`)
console.log(` `)
console.log(` \n NEXT LECTURE \n`)
console.log(` `)
console.log(`-----------------------------------------------------------------`)
console.log(`----------------------------------------`)
console.log(`----------------------------------------`)
console.log(`FIGHTER OBJECT LECTURE VVV`);
console.log(`----------------------------------------`)

let fighter = {
    name: "Arata",
    hitPoints: 18,
    maxDamage: 8,
        // Old news attack method, local to this object. Totally inefficient. Comment out for good measure.
    // attack: function (opponent) {
    //     console.log(`${opponent.name} has  ${opponent.hitPoints} HP`)
    //     console.log(this.name + " attacks!");
    //     let damage = Math.ceil(Math.random() * this.maxDamage);
    //     console.log(`${this.name} does ${damage} points of damage!`);
    //     opponent.hitPoints -= damage;
    //     console.log(`${opponent.name} now has ${opponent.hitPoints} HP`)
    // }
}

let monster = {
    name: "Goblin",
    hitPoints: 8,
    maxDamage: 6,
        // Old news attack method, local to this object. Totally inefficient. Comment out for good measure.
    // attack: function (){
    //     console.log(`${this.name} attacks!`);
    // }
}

// Let's create a controller object to handle anything players or game objects do that affects the state of the game.
// The controller might handle taking user input and calculating the input's effect on the game.

let controller = {
    attack: function (attacker, defender){
        let defenderHPBeforeAttack = defender.hitPoints;
        let damage = Math.ceil(Math.random() * attacker.maxDamage);
        defender.hitPoints -= damage;
        view.displayAttackResults(attacker, defender, defenderHPBeforeAttack, damage);
    }

}

// The view object handles output

let view = {
    displayAttackResults: function (attacker, defender, defenderHPBeforeAttack, damage) {
        console.log(`${defender.name} has ${defenderHPBeforeAttack} HP`);
        console.log(`${attacker.name} attacks!`);
        console.log(`${attacker.name} does ${damage} HP of damage!`);
        console.log(`${defender.name} now has ${defenderHPBeforeAttack - damage} HP`);
        console.log(`------------------------------------------`)
    }
}

let model = {
    fighter: {
        name: "Arata",
        hitPoints: 18,
        maxDamage: 8
    },
    monster: {
        name: "Goblin",
        hitPoints: 8,
        maxDamage: 6
    }
}

controller.attack(model.fighter, model.monster);
controller.attack(model.monster, model.fighter);

// Creating objects

// Define an empty object and create properties dynamically
// let goblin = {};
// goblin.name = "Goblin"

// create a function that returns objects

function makeMonster (name, hitPoints, maxDamage) {
    return {
        name: name, // propertyDefinition: value
        hitPoints: hitPoints,
        maxDamage: maxDamage
    }
}
// model.hobgoblin = makeMonster("Hobgoblin", 11, 11);
// controller.attack(model.hobgoblin, model.fighter);

// Using an object constructor
// Traditionally the name of a constructor is the capitalized name of what object/model is being constructed

function Monster (name, hitPoints, maxDamage) {
    this.name = name;
    this.hitPoints = hitPoints;
    this.maxDamage = maxDamage;
}

model.hobgoblinCaptain = new Monster("Hobgoblin Captain", 39, 14);
controller.attack(model.hobgoblinCaptain, model.fighter);

for (let property in model) {
    console.log(`${property}: ${model[property].name}`);
}

console.log(`----------------------------------------`)
console.log(`----------------------------------------`)
console.log(`FIGHTER OBJECT LECTURE ^^^`);
console.log(`----------------------------------------`)
console.log(`-----------------------------------------------------------------`)
console.log(` `)

// #####################################################################################################################
// ############################################ OBJECTS EXERCISE #######################################################
// #####################################################################################################################
console.log(` \n      ------- `)
console.log(` \n | OBJECTS EXERCISE | \n`)
console.log(` \n      ------- `)
console.log(` `)
/**
     * TODO:
     * Create an object with firstName and lastName properties that are strings
     * with your first and last name. Store this object in a variable named
     * `person`.
     *
     * Example:
     *  > console.log(person.firstName) // "Rick"
     *  > console.log(person.lastName) // "Sanchez"
     */

    let person = {
        firstName: "Mason",
        lastName: "Wudtee",
        sayHello: function () {
            return `Hello from ${this.firstName} ${this.lastName}`;
        }

    }
    console.log(person.firstName);
    console.log(person.lastName);

    /**
     * TODO:
     * Add a sayHello method to the person object that returns a greeting using
     * the firstName and lastName properties.
     * console.log the returned message to check your work
     *
     * Example
     * > console.log(person.sayHello()) // "Hello from Rick Sanchez!"
     */

    // function sayHello(name) {
    //     return `Hello from ` + name;
    // }

    console.log(person.sayHello());

    /** TODO:
     * HEB has an offer for the shoppers that buy products amounting to
     * more than $200. If a shopper spends more than $200, they get a 12%
     * discount. Write a JS program, using conditionals, that logs to the
     * browser, how much Ryan, Cameron and George need to pay. We know that
     * Cameron bought $180, Ryan $250 and George $320. Your program will have to
     * display a line with the name of the person, the amount before the
     * discount, the discount, if any, and the amount after the discount.
     *
     * Uncomment the lines below to create an array of objects where each object
     * represents one shopper. Use a foreach loop to iterate through the array,
     * and console.log the relevant messages for each person
     */
    let shoppers = [
        {name: 'Cameron', amount: 180},
        {name: 'Ryan', amount: 250},
        {name: 'George', amount: 320}
    ];

    // if else check price
    // log remain


    shoppers.forEach(function (val, i){
        let shopAmount = shoppers[i].amount;
        let discountPref = shoppers[i].amount > 200;
        if (discountPref) {
            console.log(`${shoppers[i].name} is eligible for a discount.`);
        } else {
            console.log(`${shoppers[i].name} is not eligible for a discount. ${shoppers[i].name} needs $${200 - shopAmount} more in purchases in order to be eligible.`);
        }
    })
console.log(` `);

    // for (let i = 0; i < shoppers.length; i++) {
    //     let shopAmount = shoppers[i].amount;
    //     let discountPref = shoppers[i].amount > 200;
    //
    //     if (discountPref) {
    //         console.log(`${shoppers[i].name} is eligible for a discount.`)
    //         shopAmount = shopAmount * .12;
    //         console.log(`${shoppers[i].name} will save $${shopAmount} after the 12% discount is applied!`)
    //     } else {
    //         console.log(`${shoppers[i].name} is not eligible for a discount. ${shoppers[i].name} needs $${200 - shopAmount} more in purchases in order to be eligible.`)
    //     }
    // }


    /** TODO:
     * Create an array of objects that represent books and store it in a
     * variable named `books`. Each object should have a title and an author
     * property. The author property should be an object with properties
     * `firstName` and `lastName`. Be creative and add at least 5 books to the
     * array
     *
     * Example:
     * > console.log(books[0].title) // "The Salmon of Doubt"
     * > console.log(books[0].author.firstName) // "Douglas"
     * > console.log(books[0].author.lastName) // "Adams"
     */

    /**
     * Bonus:
     * - Create a function named `createBook` that accepts a title and author
     *   name and returns a book object with the properties described
     *   previously. Refactor your code that creates the books array to instead
     *   use your function.
     * - Create a function named `showBookInfo` that accepts a book object and
     *   outputs the information described above. Refactor your loop to use your
     *   `showBookInfo` function.
     */

    let books = [
        {title: "The book of John", author: {firstName: "John", lastName: "The Apostle"}},
        {title: "The Amazing Spider-Man", author: {firstName: "Stan", lastName: "Lee"}},
        {title: "The Total Money Makeover", author: {firstName: "Dave", lastName: "Ramsey"}},
        {title: "Wounded Tiger", author: {firstName: "T Martin", lastName: "Bennett"}},
        {title: "Praying From the Heavenly Realms", author: {firstName: "Kevin", lastName: "Zadai"}},
    ]

    console.log(books[0].title)
    console.log(books[1].author.firstName)
    console.log(books[books.length-1].author.lastName)
    /**
     * TODO:
     * Loop through the books array and output the following information about
     * each book:
     * - the book number (use the index of the book in the array)
     * - the book title
     * - author's full name (first name + last name)
     *
     * Example Console Output:
     *
     *      Book # 1
     *      Title: The Salmon of Doubt
     *      Author: Douglas Adams
     *      ---
     *      Book # 2
     *      Title: Walkaway
     *      Author: Cory Doctorow
     *      ---
     *      Book # 3
     *      Title: A Brief History of Time
     *      Author: Stephen Hawking
     *      ---
     *      ...
     */
    console.log(` `)
    for (let i = 0; i < books.length; i++) {
        if (i === books.length-1) {
            console.log(`Book # ${i + 1} \n Title: ${books[i].title} \n Author: ${books[i].author.firstName} ${books[i].author.lastName}`);
        } else {
            console.log(`Book # ${i + 1} \n Title: ${books[i].title} \n Author: ${books[i].author.firstName} ${books[i].author.lastName}\n ---`);
        }
    }

    // look into for (let "i" in [array]) {};

    /**
     * Bonus:
     * - Create a function named `createBook` that accepts a title and author
     *   name and returns a book object with the properties described
     *   previously. Refactor your code that creates the books array to instead
     *   use your function.
     * - Create a function named `showBookInfo` that accepts a book object and
     *   outputs the information described above. Refactor your loop to use your
     *   `showBookInfo` function.
     */

    // let books = [
    //
    //     {title: "The book of John", author: {firstName: "John", lastName: "The Apostle"}},
    //     {title: "The Amazing Spider-Man", author: {firstName: "Stan", lastName: "Lee"}},
    //     {title: "The Total Money Makeover", author: {firstName: "Dave", lastName: "Ramsey"}},
    //     {title: "Wounded Tiger", author: {firstName: "T Martin", lastName: "Bennett"}},
    //     {title: "Praying From the Heavenly Realms", author: {firstName: "Kevin", lastName: "Zadai"}},
    // ]

    // function createBook (title,authorFirstName,authorLastName){
        //     books.push({
        //         author: {firstName: authorFirstName,
        //             lastName: authorLastName
        //         },
        //         title: title})
        //     return {
        //         author: {firstName: authorFirstName,
        //             lastName: authorLastName
        //         },
        //         title: title}
        // }

    function createBook (title, authorFirstName, authorLastName) {
        books.push({
            title: title,
            author: {firstName: authorFirstName,
            lastName: authorLastName
            }
        })
        // return {
        //     title: title,
        //     author: {firstName: authorFirstName,
        //     lastName: authorLastName
        //     }
        // }
    }

    // model.hobgoblinCaptain = new Monster("Hobgoblin Captain", 39, 14);
    createBook("Hobgoblin's Handbook", "Samuel", "Dickens");


console.log(` `)
console.log(` `)
console.log(`showBookInfo proof of concept VVV \n`);
console.log(` `)

// function showBookInfo(bookObject){
//     for (let i = 0; i < bookObject.length; i++) {
//         console.log(`Book #${i +1} \n Title: ${bookObject[i].title} \n Author: ${bookObject[i].author.firstName} ${bookObject[i].author.lastName}\n ---`);
//     }
// }

function showBookInfo(bookObject, index) {
    // for (let i = 0; i < bookObject.length; i++) {
    //     // if (i === bookObject.length-1) {
    //         console.log(`Book # ${i + 1} \n Title: ${bookObject[i].title} \n Author: ${bookObject[i].author.firstName} ${bookObject[i].author.lastName}\n ---`);
    //     // } else {
    //     //     console.log(`Book # ${i + 1} \n Title: ${bookObject[i].title} \n Author: ${bookObject[i].author.firstName} ${bookObject[i].author.lastName}\n ---`);
    //     // }
    // }
    if (index !== undefined) {
        console.log(`Book # ${index+1} \n Title: ${bookObject[index].title} \n Author: ${bookObject[index].author.firstName} ${bookObject[index].author.lastName} \n ---`);
    } else {
        console.log(`You didn't specify an index.`)
    }

}

showBookInfo(books, 4);

showBookInfo(books);



// * - Create a function named `showBookInfo` that accepts a book object and
// *   outputs the information described above. Refactor your loop to use your
// *   `showBookInfo` function.
// */


