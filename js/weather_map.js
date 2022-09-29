$(function (){
    const months = ["JAN", "FEB", "MAR","APR", "MAY", "JUN", "JUL", "AUG", "SEP", "OCT", "NOV", "DEC"];

// #################### Mapbox API #################################################
// Original Mapbox API
    //mapboxgl.accessToken = MAPBOX_API_TOKEN;
    //     const map = new mapboxgl.Map({
    //         container: 'map', // container ID
    //         style: 'mapbox://styles/mapbox/streets-v11', // style URL
    //         center: [-74.5, 40], // starting position [lng, lat]
    //         zoom: 9, // starting zoom
    //         projection: 'globe' // display the map as a 3D globe
    //     });

    // Original Mapbox API Call
    //mapboxgl.accessToken = MAPBOX_API_TOKEN;
    //     const map = new mapboxgl.Map({
    //         container: 'map', // container ID
    //         style: 'mapbox://styles/mapbox/streets-v11', // style URL
    //         center: [-74.5, 40], // starting position [lng, lat]
    //         zoom: 9, // starting zoom
    //         projection: 'globe' // display the map as a 3D globe
    //     });

    mapboxgl.accessToken = MAPBOX_API_TOKEN;
    const coordinates = document.getElementById('coordinates');
    const map = new mapboxgl.Map({
        container: 'map',
// Choose from Mapbox's core styles, or make your own style with Mapbox Studio
        style: 'mapbox://styles/mapbox/streets-v11',
        center: [-98.48527, 29.423017],
        zoom: 9
    });

    const marker = new mapboxgl.Marker({
        draggable: true
    }).setLngLat([-98.48527, 29.423017]).addTo(map);

    function onDragEnd() {
        const lngLat = marker.getLngLat();
        coordinates.style.display = 'block';
        coordinates.innerHTML = `Longitude: ${lngLat.lng}<br />Latitude: ${lngLat.lat}`;
        let newCoords = [`${lngLat.lng}`, `${lngLat.lat}`];
        updateWeather(newCoords);
    }

    marker.on('dragend', onDragEnd);

// ####################### Weather Map API ########################################
    $.get("http://api.openweathermap.org/data/2.5/forecast", {
        APPID: OPEN_WEATHER_APPID,
        lat:    29.423017,
        lon:   -98.48527,
        units: "imperial"
    }).done(function(data) {
        $('#currentCity').text(`Current City: ${data.city.name}`);
        // map.setCenter([`${data.lon}`, `${data.lat}`]);
        console.log(data);
        // console.log(data.list[0].weather);
        // console.log(data.list.weather.description)
        data.list.forEach((forecast, index) => {
            console.log(data.list[index]);
            let dailyIndexRate = index % 8 === 0;
            if (dailyIndexRate) {
                $('#forecast-cards-container').append(`
                    <div class="card col-lg-2 col-md-4 forecast-card">
                        <p class="card-header">Date: ${data.list[index].dt_txt.split(' ')[0]}</p>
                        <p>Temperature: ${data.list[index].main.temp}&#8457</p>
                            <div class="wrapper-image">
                                <img src="http://openweathermap.org/img/w/${data.list[index].weather[0].icon}.png">
                            </div>
                        <p>Description:  ${data.list[index].weather[0].description}</p>
                        <hr class="stretchDiv">
                        <p>Humidity:  ${data.list[index].main.humidity}</p>
                        <hr class="stretchDiv">
                        <p>Wind Speed:  ${data.list[index].wind.speed}</p>
                        <hr class="stretchDiv">
                        <p>Pressure:  ${data.list[index].main.pressure}</p>
                    </div>`);
            }
        });
    });
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
    function appendLeadingZeroes(n){
        if(n <= 9){
            return "0" + n;
        }
        return n;
    }
    //converting the given unix time in miliseconds into
    //a human-readable format
    function epochDateConversion(milliseconds){
        let date = new Date(milliseconds * 1000)
        return (`${date.getFullYear()}-${date.getMonth()}-${date.getDay()}`)
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

// ####################### Weather Card Generator Function ##################################################
    // Weather card updater function
    function printWeather(data) {
        $( "#forecast-cards-container" ).empty(); // This will clear the cards before you put a new location
        data.list.forEach((forecast, i) => {
            // console.log(data);
            if (i % 8 === 0) {
                $(`#forecast-cards-container`).append(`
                <div class="card col-lg-2 forecast-card">
                    <p class="card-header"> Date: ${data.list[i].dt_txt.split(' ')[0]}</p>
<!--                    <hr class="stretchDiv">-->
                    <p>Temperature: ${data.list[i].main.temp}&#8457</p>
                    <div class="wrapper-image">
                        <img src="http://openweathermap.org/img/w/${data.list[i].weather[0].icon}.png">
                    </div>
                    <p>Description: ${data.list[i].weather[0].description}</p>
                    <hr class="stretchDiv">
                    <p>Humidity: ${data.list[i].main.humidity}</p>
                    <hr class="stretchDiv">
                    <p>Wind Speed: ${data.list[i].wind.speed}</p> 
                    <hr class="stretchDiv">
                    <p>Pressure: ${data.list[i].main.pressure}</p>
                </div>`);
            }
        });
    }

//  #################################### Update Weather Info With a New API Call #######################################

    function updateWeather(coordinates) {
        $.get("http://api.openweathermap.org/data/2.5/forecast", {
            APPID: OPEN_WEATHER_APPID,
            lat: coordinates[1],
            lon: coordinates[0],
            units: "imperial" // this is fahrenheit
        }).done(function (data) {
            // console.log("completed updateWeather get request");
            printWeather(data);
            $('#currentCity').text(`Current City: ${data.city.name}`);

        });
    }

//  ########################################## Search Bar Updates Map Function #########################################

    // Search Bar
    document.getElementById('find-city-button').addEventListener('click', function (e) {
        e.preventDefault();

        const address = document.getElementById('find-city-input').value;
        console.log(address);

        geocode(address, MAPBOX_API_TOKEN).then(function (coordinates) {

            console.log(coordinates);

            // const userMarker = new mapboxgl.Marker().setLngLat(coordinates).addTo(map);

            map.setCenter(coordinates);
            marker.setLngLat(coordinates);
            updateWeather(coordinates);
            $('#find-city-input').val('');

        });
    });
//  ####################################################################################################################
});