import{ Config } from '../../config.js';

let config = new Config();

const API_KEY = config.getKey();

$.get('../../components/header.html', function(response) {
  $('#nav').html(response);
});

// don't show cards until form is submitted with information
$("#weather_info").css('display', 'none');

function convertKelvin(k) {
// F = 9/5 (k -273) + 32
let f = (9/5) * (k - 273) + 32;
return f.toFixed(2);
}

// handle form submission by using jQuery to listen for event
$("#search_weather").submit(event => {
// this stops the page from refreshing on form submission
  event.preventDefault();
  // console.log(event)

  console.log(event);

  let city = $("#city").val();
  console.log(city);

  // creat url variable to store api location
  let url = `http://api.openweathermap.org/data/2.5/weather?q=${city}&APPID=${API_KEY}`;

  console.log(url);

  // use jQuery .get to call API
  $.get(url, function(response) {
    console.log(response);
    $('#weather_info').css('display', 'block');

    // grab data from response and insert into correct id's
    console.log(response.weather[0].main);
    $("#high").html(`${convertKelvin(response.main.temp_max)}&deg;`);
    $("#low").html(`${convertKelvin(response.main.temp_max)}&deg;`);
    $("#forcast").text(response.weather[0].main);
    $("#humidity").html(`${response.main.humidity}%`);
  });
});
