// Object Destructuring

const car = {
    make: "Toyota",
    model: "Tacoma",
    year: 2019,
    mileage: 12657
}

// let make = car.make;
// let carModel = car.model;
//
// console.log(make);
// console.log(carModel);
//
// const {make, model, mileage, year} = car;
//
// console.log(model);
// console.log(mileage);
// console.log(year);

const outputCarInfo = ({make, model, year, mileage} = car) => {
    console.log(`${year} ${make} ${model} with ${mileage} miles.`)
}
outputCarInfo(car);

// #####################################################################################################################
// ############################################# LECTURE NOTES #########################################################
// #####################################################################################################################
//
// console.log(` `)
// console.log(`-----------------------------------------------------------------`)
// console.log(`----------------------------------------`)
// console.log(`WEATHER OBJECT LECTURE vvv`)
// console.log(`----------------------------------------`)
// console.log(`----------------------------------------`)
// let currentWeather = {
//     humidity: 77,
//     temp: 82.33,
//     feels_like: 88.79,
//     clouds: 75,
//     description: "cloudy"
//
// };
// console.log(currentWeather.temp);
// console.log(currentWeather.description);
// console.log(currentWeather.feels_like);
//
// console.log(currentWeather["humidity"]);
// let userChoice = "clouds";
//
// console.log(currentWeather[userChoice]);
//
// // userChoice = "temp";
// // console.log(currentWeather[userChoice]);
//
// // console.log(currentWeather.temp);
// // console.log(currentWeather["temp"]);
//
// // console.log(`The current weather is ${currentWeather.temp}`);
// // if (currentWeather.temp > 95) {
// //     console.log(`It's kind of hot.`);
// // } else {
// //     console.log(`It's cool today for Texas.`);
// // }
// //
// // Loop through an array using for in loop
// for (let property in currentWeather) {
//     console.log(`${property}: ${currentWeather[property]}`)
// }
// currentWeather.uvIndex = 9.79;
// console.log(currentWeather.uvIndex);
//
// let hourlyWeather = [
//     {
//         time: "08:00",
//         temperature: 78.91,
//         feels_like: 78.91
//     },
//     {
//         time: "09:00",
//         temperature: 79.57,
//         feels_like: 79.57
//     },
//     {
//         time: "10:00",
//         temperature: 81.46,
//         feels_like: 86.04
//     },
//     {
//         time: "11:00",
//         temperature: 84.49,
//         feels_like: 89.24
//     }
// ];
//
// // Loop through an array of objects
//
// // using the for loop
// // for (let i = 0; i < hourlyWeather.length; i++) {
// //     console.log(`At ${hourlyWeather[i].time} the temperature will be ${hourlyWeather[i].temperature} but will feel like ${hourlyWeather[i].feels_like}.`)
// // }
//
// // using the forEach method
// hourlyWeather.forEach(forecast =>
//     console.log(`At ${forecast.time} we can expect a temperature of ${forecast.temperature} which will feel like ${forecast.feels_like}.`)
// );
//
// let texasInfo = [
//     {
//         city: "San Antonio",
//         latitude: 29.423017,
//         longitude: -98.48527,
//         timezone: "America/Chicago",
//         currentWeather: {
//             humidity: 77,
//             temp: 82.33,
//             feels_like: 88.79,
//             clouds: 75
//         }
//     },
//     {
//         city: "Houston",
//         latitude: 29.7915,
//         longitude: -95.093,
//         timezone: "America/Chicago",
//         currentWeather: {
//             humidity: 68,
//             temp: 87.44,
//             feels_like: 97.7,
//             clouds: 75
//         }
//     }
// ];
// console.log(`The temperature in ${texasInfo[1].city} is ${texasInfo[1].currentWeather.temp}.`)
//
// console.log(`----------------------------------------`)
// console.log(`----------------------------------------`)
// console.log(`WEATHER OBJECT LECTURE ^^^`);
// console.log(`----------------------------------------`)
// console.log(`-----------------------------------------------------------------`)
// console.log(` `)
// console.log(` \n NEXT LECTURE \n`)
// console.log(` `)
// console.log(`-----------------------------------------------------------------`)
// console.log(`----------------------------------------`)
// console.log(`----------------------------------------`)
// console.log(`FIGHTER OBJECT LECTURE VVV`);
// console.log(`----------------------------------------`)
//
// let fighter = {
//     name: "Arata",
//     hitPoints: 18,
//     maxDamage: 8,
//     // Old news attack method, local to this object. Totally inefficient. Comment out for good measure.
//     // attack: function (opponent) {
//     //     console.log(`${opponent.name} has  ${opponent.hitPoints} HP`)
//     //     console.log(this.name + " attacks!");
//     //     let damage = Math.ceil(Math.random() * this.maxDamage);
//     //     console.log(`${this.name} does ${damage} points of damage!`);
//     //     opponent.hitPoints -= damage;
//     //     console.log(`${opponent.name} now has ${opponent.hitPoints} HP`)
//     // }
// }
//
// let monster = {
//     name: "Goblin",
//     hitPoints: 8,
//     maxDamage: 6,
//     // Old news attack method, local to this object. Totally inefficient. Comment out for good measure.
//     // attack: function (){
//     //     console.log(`${this.name} attacks!`);
//     // }
// }
//
// // Let's create a controller object to handle anything players or game objects do that affects the state of the game.
// // The controller might handle taking user input and calculating the input's effect on the game.
//
// let controller = {
//     attack: function (attacker, defender){
//         let defenderHPBeforeAttack = defender.hitPoints;
//         let damage = Math.ceil(Math.random() * attacker.maxDamage);
//         defender.hitPoints -= damage;
//         view.displayAttackResults(attacker, defender, defenderHPBeforeAttack, damage);
//     }
//
// }
//
// // The view object handles output
//
// let view = {
//     displayAttackResults: function (attacker, defender, defenderHPBeforeAttack, damage) {
//         console.log(`${defender.name} has ${defenderHPBeforeAttack} HP`);
//         console.log(`${attacker.name} attacks!`);
//         console.log(`${attacker.name} does ${damage} HP of damage!`);
//         console.log(`${defender.name} now has ${defenderHPBeforeAttack - damage} HP`);
//         console.log(`------------------------------------------`)
//     }
// }
//
// let model = {
//     fighter: {
//         name: "Arata",
//         hitPoints: 18,
//         maxDamage: 8
//     },
//     monster: {
//         name: "Goblin",
//         hitPoints: 8,
//         maxDamage: 6
//     }
// }
//
// controller.attack(model.fighter, model.monster);
// controller.attack(model.monster, model.fighter);
//
// // Creating objects
//
// // Define an empty object and create properties dynamically
// // let goblin = {};
// // goblin.name = "Goblin"
//
// // create a function that returns objects
//
// function makeMonster (name, hitPoints, maxDamage) {
//     return {
//         name: name, // propertyDefinition: value
//         hitPoints: hitPoints,
//         maxDamage: maxDamage
//     }
// }
// // model.hobgoblin = makeMonster("Hobgoblin", 11, 11);
// // controller.attack(model.hobgoblin, model.fighter);
//
// // Using an object constructor
// // Traditionally the name of a constructor is the capitalized name of what object/model is being constructed
//
// function Monster (name, hitPoints, maxDamage) {
//     this.name = name;
//     this.hitPoints = hitPoints;
//     this.maxDamage = maxDamage;
// }
//
// model.hobgoblinCaptain = new Monster("Hobgoblin Captain", 39, 14);
// controller.attack(model.hobgoblinCaptain, model.fighter);
//
// for (let property in model) {
//     console.log(`${property}: ${model[property].name}`);
// }
//
// console.log(`----------------------------------------`)
// console.log(`----------------------------------------`)
// console.log(`FIGHTER OBJECT LECTURE ^^^`);
// console.log(`----------------------------------------`)
// console.log(`-----------------------------------------------------------------`)
// console.log(` `)