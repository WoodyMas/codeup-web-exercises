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

// ############################################ Oct 4 2022 ######################################

// When the mouse enters the h2 with the text "Lorem Generator",
// A paragraph contain lorem appears in the div with the id of loremParagraphs

const loremVar = `<p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Amet consectetur corporis delectus
    deserunt, earum hic ipsa maxime quos? A aliquid atque dolores expedita facilis fugiat maxime minus necessitatibus,
    nulla quas.</p>`;

$('#loremParagraphs').mouseenter(function (){
    $(this).append(loremVar);
});

$('#hotPinkIt').on('click', function (){
   $('#loremParagraphs').toggleClass('hotpink');

});

// $('#blinkPink').on('click', function (){
//     setInterval(function (){
//
//     }, 1300)
// })


// When the user clicks on the "Hot Pink It" button, all the text in the div with the id of loremParagraphs becomes hotpink if it's black, or black if it's hotpink.