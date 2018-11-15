const API_KEY = "c65ba5ee31c4d247ab9b8e0c314afb04"

function handleFormSubmit(event) {
  event.preventDefault()
  console.log('Submitted!');
}

document.addEventListener("DOMContentLoaded", function(){
  document.getElementById("cityForm").addEventListener("submit", handleFormSubmit)
})

function fetchCurrentWeather(city) {
  fetch(`https://api.openweathermap.org/data/2.5/weather?q=${city}$APPID=${API_KEY}$units=metrics`)
  .then(function(response) {
    return response.json();
  })
  .then(function(myJson) {
    console.log(JSON.stringify(myJson));
  });
}


function getWeather(city) {
    var weather = 'http://api.openweathermap.org/data/2.5/forecast?lat=51.5072&lon=0.1275&units=metric';
    $.ajax({
      dataType: "jsonp",
      url: weather,
      success: callback
    });
}



function displayCurrentWeather(json) {
  //render current weather data to the DOM using provided IDs and json from API
}


function fetchFiveDayForecast(city) {
  //fetch five day forecast data based on city
}

function displayFiveDayForecast(json) {
  //render five day forecast data to the DOM using provided IDs and json from API
}

function createChart(json) {
  //Bonus: render temperature chart using five day forecast data and ChartJS
}

document.addEventListener('DOMContentLoaded', function() {
  //add event listener here for form submission
})
