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