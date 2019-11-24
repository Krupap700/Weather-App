var city = "Secaucus";
var tempDisplay = document.querySelector("#tempDisplay");
var temp = document.getElementById("temp");
var appTemp = document.getElementById("appTemp");
var windSpeed = document.getElementById("windSpeed");
var windDirection = document.getElementById("windDirection");
var precip = document.getElementById("precip");
var humidity = document.getElementById("humidity");
var submitButton = document.querySelector("#submitButton");
var api = "https://api.weatherbit.io/v2.0/current?city=" + city + "&key=3c17a0ee696f4738bee68dd15fb7c351";

tempDisplay.textContent = city;

fetch(api, {mode: 'cors'})
  .then(function(response){
    return (response.json());
  })
  .then(function(response){
    temp.innerHTML = response.data["0"].temp;
    appTemp.innerHTML = response.data["0"].app_temp;
    windSpeed.innerHTML = response.data["0"].wind_spd;
    windDirection.innerHTML = response.data["0"].wind_cdir;
    precip.innerHTML = response.data["0"].precip;
    humidity.innerHTML = response.data["0"].rh;
  });


submitButton.addEventListener("click", function(){
  var city = document.getElementById("input").value;
  var api = "https://api.weatherbit.io/v2.0/current?city=" + city + "&key=3c17a0ee696f4738bee68dd15fb7c351";
  
  fetch(api, {mode: 'cors'})
  .then(function(response){
    return (response.json());
  })
  .then(function(response){
    tempDisplay.textContent = response.data["0"].city_name;
    temp.innerHTML = response.data["0"].temp;
    appTemp.innerHTML = response.data["0"].app_temp;
    windSpeed.innerHTML = response.data["0"].wind_spd;
    windDirection.innerHTML = response.data["0"].wind_cdir;
    precip.innerHTML = response.data["0"].precip;
    humidity.innerHTML = response.data["0"].rh;
  }); 
});