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
// Use html and css to create a square with a background color on a html page.
//     Register an event handler and write its code such that when you click on the square, it
// alerts that it is a square ("I am a square") and
// alerts what color it is. ("I am a big hot pink square")

let squareVar = document.querySelector(".square");
// let squareCol = document.querySelector(".square-color")

squareVar.addEventListener("click", function (e){
    alert(`I am a square with the color value: ${window.getComputedStyle(document.querySelector(".square"), null).getPropertyValue("background-color")}`);
    document.getElementById("anotherSquare").style.backgroundColor = getComputedStyle(e.target).backgroundColor;
});

// let textVar = document.querySelector("#theButton");
// textVar.addEventListener("click", function (){
//     document.getElementById("textSquare").innerText = "The sacred TEXT!!";
// }) // My version

let theButtonVar = document.getElementById("theButton");

let buttonClickFunction = function (){
    document.querySelector("p").innerText = "You clicked The Button!";
}
theButtonVar.onclick = buttonClickFunction;

document.querySelector("body").addEventListener('click', function (e){
    console.log(getComputedStyle(e.target).backgroundColor);
});

// document.querySelector('body').addEventListener('mouseout', function (e){
//     alert("Don't you dare leave without claiming this free flashlight!!");
// });

// Get user input from a form field
let formInput = document.getElementById('formInput');

formInput.onkeyup = function (){
    console.log(formInput.value);
}
//

