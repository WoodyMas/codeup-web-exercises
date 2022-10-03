let listItems = document.getElementsByTagName('li');

// for (let listItem of listItems) {
//     console.log(listItem);
// }

let forOfTestArray = ['papa', 'pizzeria', 1, 5, 19, 'LOL'];

// for (let item of forOfTestArray) {
//     console.log(item);
// }

//######################################## DOM WARMUPS ################################################################

//When user clicks the button that has the text 'change heading', the text of the h1 element changes to read "I pwn the DOM";

$('button').on('click', function (){
    $('h1').text('I pwn the DOM');
});

//// Every time the user enters a character in the input with id "source", that
// // character appears in the <p> element with the id "output"

// let inputSrc = document.getElementById('source');
// let userText = inputSrc.val

// formInput.onkeyup = function (){
//     console.log(formInput.value);
// }

// document.getElementsByTagName('button')[0].addEventListener('click', function (){
//     document.getElementsByTagName('h1')[0].innerText = "I still pwn the DOM w JS";
// });

// $('#source').on('keyup', function (){
//     $('#output').text($('#source').val());
// });
