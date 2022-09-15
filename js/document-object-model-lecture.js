// let accessTheDOM = document.getElementById("dc");
// let showMe = accessTheDOM.innerHTML;
// // alert(showMe);
//
// let marvel = document.getElementById("marvel");
//
// let preference = "dc";
//
// let like = document.getElementById("like");
// let dontLike = document.getElementById("dontLike");
// let output = `${dontLike.innerHTML} ${document.getElementById(preference).innerHTML} movies`;
// console.log(output);
//
// // accessTheDOM.innerHTML = accessTheDOM.innerHTML + ' Animated Universe';
//
// accessTheDOM.innerHTML += marvel.innerHTML;
//
// marvel.setAttribute('class', 'hotpink');
//
// let hotPinks = document.getElementsByClassName('hotpink');
//
// for (let i = 0; i < hotPinks.length; i++) {
//     hotPinks[i].style.fontSize = '2em';
// }



// For Each Loop doesn't yet work
// hotPinks.forEach(function(node, index, array) {
//     array = [...hotPinks];
//     console.log(index);
// })

// let submitButton = document.getElementById('colorSubmission');
// submitButton.onclick = function (){
//     let colorInput = document.getElementById("colorPreference");
//     let paragraphs = document.getElementsByTagName("p");
//     for (let i = 0; i < paragraphs.length; i++) {
//         paragraphs[i].style.color = colorInput.value;
//     }
// }

// <p id="hulk" data-state="hulk" data-strength="super" data-intelligence="low">The Hulk</p>

let theHulk = document.getElementById("hulk");
// let hulkState = theHulk.getAttribute("data-state");
let hulkState = theHulk.dataset.state;
let hulkStrength = theHulk.dataset.strength;
let hulkIntelligence = theHulk.dataset.intelligence;
let hulkSummary = `The hulk is in ${hulkState} state. His strength is ${hulkStrength} and his intelligence is ${hulkIntelligence}.`
// theHulk.innerText = hulkSummary;

let transformButton = document.getElementById("transformHulk");
transformButton.onclick = function () {
    // alert("Hulk smash")
    let theHulk = document.getElementById("hulk");
    let hulkState = theHulk.dataset.state;
    let hulkStrength = theHulk.dataset.strength;
    let hulkIntelligence = theHulk.dataset.intelligence;
    if (hulkState === "hulk") {
        theHulk.dataset.state = "Bruce Banner";
    } else {
        theHulk.dataset.state = "hulk";
    }
    theHulk.innerText = `The Hulk is in ${hulkState} state.`
}

