let accessTheDOM = document.getElementById("dc");
let showMe = accessTheDOM.innerHTML;
alert(showMe);

let marvel = document.getElementById("marvel");

let preference = "dc";

let like = document.getElementById("like");
let dontLike = document.getElementById("dontLike");
let output = `${dontLike.innerHTML} ${document.getElementById(preference).innerHTML} movies`;
console.log(output);

// accessTheDOM.innerHTML = accessTheDOM.innerHTML + ' Animated Universe';

accessTheDOM.innerHTML += marvel.innerHTML;

