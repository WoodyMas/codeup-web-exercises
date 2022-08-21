// let currentWeather = {
//     humidity: 77,
//     temp: 82.33,
//     feels_like: 88.79,
//     clouds: 75
// };
// console.log(currentWeather.temp);
//

    "use strict";

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


    for (let i = 0; i < shoppers.length; i++) {
        let shopAmount = shoppers[i].amount;
        let discountPref = shoppers[i].amount > 200;

        if (discountPref) {
            console.log(`${shoppers[i].name} is eligible for a discount.`)
            shopAmount = shopAmount * .12;
            console.log(`${shoppers[i].name} will save $${shopAmount} after the 12% discount is applied!`)
        } else {
            console.log(`${shoppers[i].name} is not eligible for a discount. ${shoppers[i].name} needs $${200 - shopAmount} more in purchases in order to be eligible.`)
        }
    }


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
     function createBook (title, author, book) {

     }

