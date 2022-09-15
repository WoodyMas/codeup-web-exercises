// The three steps of handling events

// 1. Get a reference to the element that will trigger the event
// let theButton = document.querySelector("button");

// 2. Write the function that will be triggered by the event
//      A function is a set of instructions. This kind of function that is triggered by an event is called an event handler
//      also called a callback
//      The function contains the instructions that will run when the event is triggered

// let theButton = document.querySelector("button");
// function eventHandler () {
//     alert("you clicked me!");
// }

// 3. Register the handler

// We can use addEventListener with the type of event and the function that will be triggered

// theButton.addEventListener("click", eventHandler);

// theButton.onclick = eventHandler;

// document.querySelector("button").addEventListener("click", function(){
//     alert("You clicked me!");
// })






// Mini-exercise:
// Use html and css to create a square with a background color on an html page.
//     Register an event handler and write its code such that when you click on the square, it
// alerts that it is a square ("I am a square") and
// alerts what color it is. ("I am a big hot pink square")

let squareVar = document.querySelector(".square");
// let squareCol = document.querySelector(".square-color")

squareVar.addEventListener("click", function (){
    alert(`I am a square with the color value: ${window.getComputedStyle(document.querySelector(".square"), null).getPropertyValue("background-color")}`);
});