$(function (){

// #################### Mapbox API #################################################

    mapboxgl.accessToken = MAPBOX_API_TOKEN;
    const map = new mapboxgl.Map({
        container: 'map', // container ID
        style: 'mapbox://styles/mapbox/streets-v11', // style URL
        center: [-74.5, 40], // starting position [lng, lat]
        zoom: 9, // starting zoom
        projection: 'globe' // display the map as a 3D globe
    });

// ####################### Weather Map API ########################################


    // $.get("http://api.openweathermap.org/data/2.5/weather", {
    //     APPID: OPEN_WEATHER_APPID,
    //     lat: 29.423017,
    //     lon: -98.48527,
    //     units: 'imperial'
    // }).done(function(data) {
    //     console.log('current weather:')
    //     console.log(data);
    //     console.log(windCardinalDirection(data.wind.deg));
    // });

    // $.get("https://api.openweathermap.org/data/2.5/weather", {
    //     APPID: OPEN_WEATHER_APPID,
    //     q:     "San Antonio, US"
    // }).done(function(data) {
    //     console.log(data);
    // });

    // $.get("http://api.openweathermap.org/data/2.5/onecall", {
    //     APPID: OPEN_WEATHER_APPID,
    //     lat: 29.423017,
    //     lon: -98.48527
    // }).done(function(data) {
    //     console.log(data);
    // });

    // $.get("http://api.openweathermap.org/data/2.5/onecall", {
    //     APPID: OPEN_WEATHER_APPID,
    //     lat:    29.423017,
    //     lon:   -98.48527,
    //     units: "imperial"
    // }).done(function(data) {
    //     console.log('The entire response:', data);
    //     console.log('Diving in - here is current information: ', data.current);
    //     console.log('A step further - information for tomorrow: ', data.daily[1]);
    // });

    $.get("http://api.openweathermap.org/data/2.5/forecast", {
        APPID: OPEN_WEATHER_APPID,
        // San Antonio
        lat: 29.423017,
        lon: -98.48527,

        // Houston
        // lat: 29.77159537828818,
        // lon: -95.42468488722787,

        // Pyeongtaek
        // lat: 37.00023056197412,
        // lon: 126.96437808817802,

        // p: 'Houston',
        units: "imperial"
    }).done(function(data) {
        // console.log(data);
        // console.log(data.list[0].weather);
        // console.log(data.list.weather.description)
        data.list.forEach((forecast, index) => {

            let dailyIndexRate = index % 8 === 0;

            // if (index % 8 === 0) {
            //     console.log(forecast.dt_txt);
            // }
            if (dailyIndexRate) {
                // console.log(data.list[index]);
                updateMapWithUserInput();
                printWeatherCards();
            }

        });

    });
    function printWeatherCards() {
        $('#forecast-cards-container').append(`<div class="card col-2 forecast-card">
                    <p>Date: ${data.list[index].dt_txt}</p>
                    <hr class="stretchDiv">
                    <p>Temperature: ${data.list[index].main.temp}</p>
                    <hr class="stretchDiv">
                    <p>Description: ${data.list[index].weather[0].description}</p>
                    <hr class="stretchDiv">
                    <p>Humidity: ${data.list[index].main.humidity}</p>
                    <hr class="stretchDiv">
                    <p>Wind Speed: ${data.list[index].wind.speed}</p>
                    <hr class="stretchDiv">
                    <p>Pressure: ${data.list[index].main.pressure}</p>
                    </div>`);
    }

    function windCardinalDirection(degrees){
        let cardinalDirection = '';
        if ((degrees > 348.75 && degrees <= 360) || (degrees >=0 && degrees <= 11.25)){
            cardinalDirection = "N";
        } else if (degrees > 11.25 && degrees  <= 33.75) {
            cardinalDirection = "NNE";
        } else if (degrees > 33.75 && degrees <= 56.25) {
            cardinalDirection = "NE";
        } else if (degrees > 56.25 && degrees <= 78.75) {
            cardinalDirection = "ENE";
        } else if (degrees > 78.75 && degrees <= 101.25) {
            cardinalDirection = "E";
        } else if (degrees > 101.25 && degrees <= 123.75) {
            cardinalDirection = "ESE";
        } else if (degrees > 123.75 && degrees <= 146.25) {
            cardinalDirection = "SE";
        } else if (degrees > 146.25 && degrees <= 168.75) {
            cardinalDirection = "SSE";
        } else if (degrees > 168.75 && degrees <= 191.25) {
            cardinalDirection = "S";
        } else  if (degrees > 191.25 && degrees <= 213.75) {
            cardinalDirection = "SSW";
        } else if (degrees > 213.75 && degrees <= 236.25)  {
            cardinalDirection = "SW";
        } else if (degrees > 236.25 && degrees <= 258.75) {
            cardinalDirection = "WSW";
        } else if (degrees > 258.75 && degrees <= 281.25) {
            cardinalDirection = "W";
        } else if (degrees > 281.25 && degrees <= 303.75) {
            cardinalDirection = "WNW";
        } else if (degrees > 303.75 && degrees <= 326.25) {
            cardinalDirection = "NW";
        } else if (degrees > 326.75 && degrees <= 348.75) {
            cardinalDirection = "NNW";
        }
        return cardinalDirection;
    }


    function appendLeadingZeroes(n){
        if(n <= 9){
            return "0" + n;
        }
        return n;
    }

    const months = ["JAN", "FEB", "MAR","APR", "MAY", "JUN", "JUL", "AUG", "SEP", "OCT", "NOV", "DEC"];

    function formatTime(timeStamp){
        let dateTime = new Date(timeStamp * 1000);
        let year = dateTime.getFullYear();
        let month = months[dateTime.getMonth()];
        let day = dateTime.getDate();
        let hour = appendLeadingZeroes(dateTime.getHours());
        let minutes = appendLeadingZeroes(dateTime.getMinutes());
        let seconds = appendLeadingZeroes(dateTime.getSeconds());
        let formattedDateTime = month + " " + day + " " + year + " " + hour + ":" + minutes + ":" + seconds;
        return formattedDateTime;
    }

    //converting the given unix time in miliseconds into
    //a human-readable format
    function epochDateConversion(milliseconds){
        let date = new Date(milliseconds * 1000)
        return (`${date.getFullYear()}-${date.getMonth()}-${date.getDay()}`)
    }

    function getCoords(address, token){
        geocode(address, token).then(function (coordinates){
            console.log(coordinates);
            // coords = coordinates;
        });
    }




    // document.getElementById('find-city-button').addEventListener('click', function (e){
    //     e.preventDefault();
    //     const address = document.getElementById('find-city-input').value;
    //     console.log(address);
    //     geocode(address, MAPBOX_API_TOKEN).then(function (coordinates){
    //         console.log(coordinates);
    //         const userMarker = new mapboxgl.Marker().setLngLat(coordinates).addTo(map);
    //         map.setCenter(coordinates);
    //         console.log(coordinates);
    //     });
    // });





//     betterRestaurantInfo.forEach((element, index) =>{
// // const codeupPopup = new mapboxgl.Popup().setHTML('<p class="mt-3" style="width: 200px;">Codeup</p>');
// // codeupMarker.setPopup(codeupPopup);
//         let allMarker = new mapboxgl.Marker().setLngLat(betterRestaurantInfo[index].lngLat).addTo(map);
//         let allPopInfo = new mapboxgl.Popup().setHTML(`<div class="card mt-3 d-flex row" style="overflow-y: scroll;"><div class="icon-wrapper justify-content-center col-12">${betterRestaurantInfo[index].image}</div> <p class="mt-3 col-12" style="width: 200px;">${betterRestaurantInfo[index].bio}</p></div>`);
//         allMarker.setPopup(allPopInfo);
//
//
// // let allPop = new mapboxgl.Popup().setHTML(`<p class="mt-3" style="width: 230px;">${betterRestaurantInfo[index].bio}</p>`);
//
//
//         console.log(betterRestaurantInfo[index].lngLat);
//         console.log(betterRestaurantInfo[index].name);
//     });

    // $('.forecast-card').append(`<p>Temperature data: ${data} </p>`).;

    function updateMapWithUserInput () {
        document.getElementById('find-city-button').addEventListener('click', function (e) {
            e.preventDefault();
            const address = document.getElementById('find-city-input').value;
            console.log(address);
            geocode(address, MAPBOX_API_TOKEN).then(function (coordinates) {
                console.log(coordinates);
                const userMarker = new mapboxgl.Marker().setLngLat(coordinates).addTo(map);
                map.setCenter(coordinates);
                console.log(coordinates);
            });
        });
    }


});

