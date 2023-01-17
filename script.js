// Get the user's location
navigator.geolocation.getCurrentPosition(function(position) {
  var lat = position.coords.latitude;
  var lon = position.coords.longitude;

  // Calling a weather API to get the current weather for the user's location
  var weatherUrl = "https://api.openweathermap.org/data/2.5/weather?lat=" + lat + "&lon=" + lon + "&appid=cbdc45495c14b8183b290407a50db1e8";
  fetch(weatherUrl)
    .then(function(response) {
      return response.json();
    })
    .then(function(data) {
      // Extract the data we need from the API response
	console.log(data);
      var temperature = Math.round(data.main.temp)-273;
      var description = data.weather[0].description;
      var icon = data.weather[0].icon;

      // Update the HTML to display the weather information
      var weatherDiv = document.getElementById("weather");
      weatherDiv.innerHTML = "<p>" + temperature + "&deg;C</p>";
      weatherDiv.innerHTML += "<p>" + description + "</p>";
      weatherDiv.innerHTML += "<img src='http://openweathermap.org/img/w/" + icon + ".png'>";
    });
});