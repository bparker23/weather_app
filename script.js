document.getElementById("weatherSubmit").addEventListener("click", function(event) {
  event.preventDefault();
  const value = document.getElementById("weatherInput").value;
  if (value === "")
    return;
  const url = "http://api.openweathermap.org/data/2.5/weather?q=" + value + ",US&units=imperial" + "&APPID=b4c1c39eaca90626d40cceacfc7e8b8c";
fetch(url)
  .then(function(response) {
    return response.json();
  }).then(function(json) {
  let results = "";
      results += '<h2>Weather in ' + json.name + "</h2><p>(" + json.coord.lat + "&deg;, " + json.coord.lon + "&deg)</p>";
      for (let i=0; i < json.weather.length; i++) {
	results += '<img src="http://openweathermap.org/img/w/' + json.weather[i].icon + '.png"/>';
      }
      results += '<h2>' + json.main.temp + " &deg;F</h2>"
      results += "<p>"
      for (let i=0; i < json.weather.length; i++) {
	results += json.weather[i].description
	if (i !== json.weather.length - 1)
	  results += ", "
      }
      results += "</p>";
      document.getElementById("weatherResults").innerHTML = results;

  });

const currentLocation = "http://api.openweathermap.org/data/2.5/weather?q=" + value + ",US&units=imperial" + "&APPID=b4c1c39eaca90626d40cceacfc7e8b8c";
      fetch(currentLocation)
        .then(function(response) {
          return response.json();
        }).then(function(json) {
          let results = "";
               results += '<p>Current Location: ';
               results += "(" + json.coord.lat + ", " + json.coord.lon + ")" + "</p>"
               results += "<p>"
               results += "</p>";
               document.getElementById("currentLocation").innerHTML = results;
      });

const pressure = "http://api.openweathermap.org/data/2.5/weather?q=" + value + ",US&units=imperial" + "&APPID=b4c1c39eaca90626d40cceacfc7e8b8c";
  fetch(pressure)
    .then(function(response) {
      return response.json();
    }).then(function(json) {
      let results = "";
           results += '<p>Pressure: ';
           results += json.main.pressure + " millibars </p";
           results += "<p>"
           results += "</p>";
           document.getElementById("pressure").innerHTML = results;
  });

const humidity = "http://api.openweathermap.org/data/2.5/weather?q=" + value + ",US&units=imperial" + "&APPID=b4c1c39eaca90626d40cceacfc7e8b8c";
  fetch(humidity)
    .then(function(response) {
      return response.json();
    }).then(function(json) {
      let results = "";
           results += '<p>Humidity: ';
           results += json.main.humidity + "%</p";
           results += "<p>"
           results += "</p>";
           document.getElementById("humidity").innerHTML = results;
  });

const visibility = "http://api.openweathermap.org/data/2.5/weather?q=" + value + ",US&units=imperial" + "&APPID=b4c1c39eaca90626d40cceacfc7e8b8c";
  fetch(visibility)
    .then(function(response) {
      return response.json();
    }).then(function(json) {
      let results = "";
           results += '<p>Visibility: ';
           var vis = json.visibility / 1609.34
           vis = vis.toFixed(2);
           results += vis + " miles</p";
           results += "<p>"
           results += "</p>";
           document.getElementById("visibility").innerHTML = results;
  });

const windSpeed = "http://api.openweathermap.org/data/2.5/weather?q=" + value + ",US&units=imperial" + "&APPID=b4c1c39eaca90626d40cceacfc7e8b8c";
  fetch(windSpeed)
    .then(function(response) {
      return response.json();
    }).then(function(json) {
      let results = "";
           results += '<p>Wind Speed: ';
           results += json.wind.speed + " mph</p";
           results += "<p>"
           results += "</p>";
           document.getElementById("windSpeed").innerHTML = results;
  });

const sunrise = "http://api.openweathermap.org/data/2.5/weather?q=" + value + ",US&units=imperial" + "&APPID=b4c1c39eaca90626d40cceacfc7e8b8c";
  fetch(sunrise)
    .then(function(response) {
      return response.json();
    }).then(function(json) {
      let results = "";
      let unix_timestamp = json.sys.sunrise
      // Create a new JavaScript Date object based on the timestamp
      // multiplied by 1000 so that the argument is in milliseconds, not seconds.
      var date = new Date(unix_timestamp * 1000);
      // Hours part from the timestamp
      var hours = date.getHours();
      // Minutes part from the timestamp
      var minutes = "0" + date.getMinutes();
      // Seconds part from the timestamp
      var seconds = "0" + date.getSeconds();

      // Will display time in 10:30:23 format
      var formattedTime = hours + ':' + minutes.substr(-2);


     results += '<p>Sunrise: ';
     results += formattedTime + " am</p";
     results += "<p>"
     results += "</p>";
     document.getElementById("sunrise").innerHTML = results;
  });

const sunset = "http://api.openweathermap.org/data/2.5/weather?q=" + value + ",US&units=imperial" + "&APPID=b4c1c39eaca90626d40cceacfc7e8b8c";
  fetch(sunset)
    .then(function(response) {
      return response.json();
    }).then(function(json) {
      let results = "";
      let unix_timestamp = json.sys.sunset
      // Create a new JavaScript Date object based on the timestamp
      // multiplied by 1000 so that the argument is in milliseconds, not seconds.
      var date = new Date(unix_timestamp * 1000);
      // Hours part from the timestamp
      var hours = date.getHours();
      // Minutes part from the timestamp
      var minutes = "0" + date.getMinutes();
      // Seconds part from the timestamp
      var seconds = "0" + date.getSeconds();

      // Will display time in 10:30:23 format
      hours = hours - 12;
      var formattedTime = hours + ':' + minutes.substr(-2);


     results += '<p>Sunset: ';
     results += formattedTime + " pm</p";
     results += "<p>"
     results += "</p>";
     document.getElementById("sunset").innerHTML = results;
  });

const feelsLike = "http://api.openweathermap.org/data/2.5/weather?q=" + value + ",US&units=imperial" + "&APPID=b4c1c39eaca90626d40cceacfc7e8b8c";
  fetch(feelsLike)
    .then(function(response) {
      return response.json();
    }).then(function(json) {
      let results = "";
           results += '<p>Feels Like: ';
           results += json.main.feels_like + " &deg;F</p>"
           results += "<p>"
           results += "</p>";
           document.getElementById("feelsLike").innerHTML = results;
  });

const tempMax = "http://api.openweathermap.org/data/2.5/weather?q=" + value + ",US&units=imperial" + "&APPID=b4c1c39eaca90626d40cceacfc7e8b8c";
  fetch(tempMax)
    .then(function(response) {
      return response.json();
    }).then(function(json) {
      let results = "";
           results += '<p>High: ';
           results += json.main.temp_max + " &deg;F</p>"
           results += "<p>"
           results += "</p>";
           document.getElementById("todayHigh").innerHTML = results;
  });

const tempMin = "http://api.openweathermap.org/data/2.5/weather?q=" + value + ",US&units=imperial" + "&APPID=b4c1c39eaca90626d40cceacfc7e8b8c";
  fetch(tempMin)
    .then(function(response) {
      return response.json();
    }).then(function(json) {
      let results = "";
           results += '<p>Low: ';
           results += json.main.temp_min + " &deg;F</p>"
           results += "<p>"
           results += "</p>";
           document.getElementById("todayLow").innerHTML = results;
  });

const url2 = "http://api.openweathermap.org/data/2.5/forecast?q=" + value + ", US&units=imperial" + "&APPID=b4c1c39eaca90626d40cceacfc7e8b8c";
fetch(url2)
 .then(function(response) {
   return response.json();
 }).then(function(json) {
   let day = moment(json.list[0].dt_txt).format('MMMM Do');
   let forecast = "";
   forecast += "<div class =\"container\">";
   forecast += "<div class = \"test\"><h3> Tomorrow </h3></div>"; //
      for (let i=0; i < json.list.length; i++) {

  if (day != moment(json.list[i].dt_txt).format('MMMM Do'))
  {
    forecast += "<div class = \"test\"><h3>" + moment(json.list[i].dt_txt).format('MMMM Do') + "</h3></div>";
    forecast += "<br><br> <div class =\"col\"><h2>" + moment(json.list[i].dt_txt).format('h:mm a') + "</h2>";
    day = moment(json.list[i].dt_txt).format('MMMM Do');

  }
  else
  {
    forecast += "<div class =\"col\"><h2>" + moment(json.list[i].dt_txt).format('h:mm a') + "</h2>";
  }


	forecast += "<p>Temperature: " + json.list[i].main.temp + "</p>";
	forecast += '<img src="http://openweathermap.org/img/w/' + json.list[i].weather[0].icon + '.png"/></div>';

      }
      forecast += "</div>";
      document.getElementById("forecastResults").innerHTML = forecast;
 });
});
