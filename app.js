const apiKey = "9df11f51ca4b6cfd21261d4d3cc19f00";
function getWeather(){
let city = document.getElementById("city").value;

fetch(`https://api.openweathermap.org/data/2.5/weather?q=${city}&units=metric&appid=${apiKey}`)
.then(response => response.json())
.then(data => {
document.getElementById("cityName").innerText = data.name;
document.getElementById("temp").innerText = data.main.temp + "°C";
document.getElementById("minTemp").innerText = data.main.temp_min + "°C";
document.getElementById("maxTemp").innerText = data.main.temp_max + "°C";
document.getElementById("humidity").innerText = data.main.humidity + "%";
document.getElementById("humidity2").innerText = data.main.humidity + "%";
document.getElementById("feels").innerText = data.main.feels_like + "°C";
document.getElementById("wind").innerText = data.wind.speed + " km/hr";
document.getElementById("sunrise").innerText = new Date(data.sys.sunrise * 1000).toLocaleTimeString();
document.getElementById("sunset").innerText = new Date(data.sys.sunset * 1000).toLocaleTimeString();
})
.catch(() => {
alert("City not found");
});

}
function updateCity(city,prefix){
fetch(`https://api.openweathermap.org/data/2.5/weather?q=${city}&units=metric&appid=${apiKey}`)
.then(res => res.json())
.then(data => {
document.getElementById(prefix+"_temp").innerText = data.main.temp;
document.getElementById(prefix+"_feels").innerText = data.main.feels_like;
document.getElementById(prefix+"_humidity").innerText = data.main.humidity;
document.getElementById(prefix+"_max").innerText = data.main.temp_max;
document.getElementById(prefix+"_min").innerText = data.main.temp_min;
document.getElementById(prefix+"_wind").innerText = data.wind.speed;
document.getElementById(prefix+"_cloud").innerText = data.clouds.all;
document.getElementById(prefix+"_sunrise").innerText =
new Date(data.sys.sunrise * 1000).toLocaleTimeString();
document.getElementById(prefix+"_sunset").innerText =
new Date(data.sys.sunset * 1000).toLocaleTimeString();
});
}
updateCity("Shanghai","sh");
updateCity("Boston","bo");
updateCity("Lucknow","lu");