// The parts of a function
// 1. function keyword
// 2. The name of the function
// 3. Parentheses with zero or more parameters (separated by commas if more than 1 parameter)
// 5. Curly braces contain the function body
// 6. The function body contains the code that runs when the function is invoked
// 7. [optional but common] return statement
    //
    //
    // function sayHello (greeting, name) {                //function keyword, name of function, (parameter) {
    //     console.log(`${greeting}, ${name}`);            //function body
    // }                                                   // }

// Here the number has global scope
    // let number = 20;        // this is a global variable. All functions have access to this variable since it's listed in root file.
    // function localOrGlobal2 () {
    //     console.log(number);
    // }

    // Here number has local scope
    // function localOrGlobal () {
    //     let number = 20; // this 'let' is a local variable
    // }

    // let number = 20;
    //
    // function localOrGlobal3 () {
    //     let number = 10;
    //     console.log(number)
    // }
    //
    // localOrGlobal3();
    // console.log(number);

// The local scope takes precedence over the global scope. number defined in the function will be printed, whereas the console.log(number) will apply the globally defined number

//function expressions are not hoisted so this won't work:
//     bark();
//
//     const bark = function(){
//         console.log("Woof!");
//     }

//function declarations are hoisted, so this will work:
//     yap();
//     function yap () {
//         console.log("yip yip");
//     }

//function declaration
function add(num1, num2) {
    return num1 + num2;
}

//function expression
const add1 = function (num1, num2) {
    return num1 + num2;
}

//arrow function
const addThree = (num1, num2) => num1 + num2;
    //if there's only one parameter you don't need parentheses
const addTen = number => number + 10;

    //if you have no parameters you use empty parentheses
const helloWorld = () => "Hello World";
