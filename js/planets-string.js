(function(){
    "use strict";

    let planetsString = "Mercury|Venus|Earth|Mars|Jupiter|Saturn|Uranus|Neptune";
    let planetsArray;

    /**
     * TODO:
     * Convert planetsString to an array, and save it in a variable named
     * planetsArray.
     * console.log planetsArray to check your work
     */
    planetsArray = planetsString.split("|");

    console.log(planetsArray);

    // console.log(planetsArray);

    /**
     * TODO:
     * Create a string with <br> tags between each planet. console.log() your
     * results. Why might this be useful?
     *
     * BONUS:
     * Create another string that would display your planets in an unordered
     * list. You will need an opening AND closing <ul> tags around the entire
     * string, and <li> tags around each planet.
     */

    let newPlanetString = "Mercury<br>Venus<br>Earth<br>Mars<br>Jupiter<br>Saturn<br>Uranus<br>Neptune"
    let newPlanetArray;

    newPlanetArray = newPlanetString.split(`<br>`);
    // newPlanetArray.join(`<br>`);
    console.log(newPlanetArray.join(`<br>`));

    let planetsDiv = document.getElementById("planetsDiv");
    let listPlanetString = `|Mercury|Venus|Earth|Mars|Jupiter|Saturn|Uranus|Neptune`;
    let newListPlanet = listPlanetString.split(`|`).join(`<li>`);
    newListPlanet.split(``).join(`<ul>`);
    planetsDiv.innerHTML = newListPlanet;




    console.log(newListPlanet)

})();
