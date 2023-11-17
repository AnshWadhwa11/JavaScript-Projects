const apiKey = "2058dcde427ded61d10ee3323e3f5bf8";
const apilink = "https://api.openweathermap.org/data/2.5/weather?units=metric&q="
const cityName = document.querySelector("#userInput");
const search = document.querySelector("#searchButton");
var temp = document.querySelector(".temp")
var cname = document.querySelector(".city")
var humidity = document.querySelector("#humidityValue")
var wind = document.querySelector("#windValue")
var image = document.querySelector(".images");

async function checkWeather(city){
    const response = await fetch(apilink + city + `&appid=${apiKey}`);
    if(response.status == 404){
        document.querySelector(".errormeassage").style.display = "block";
        document.querySelector(".weather").style.display = "none";
    }
    var data = await response.json();    
    temp.innerHTML = Math.round(data.main.temp) + ` &#176; C`;
    cname.innerHTML = data.name;
    humidity.innerHTML = data.main.humidity + "%";
    wind.innerHTML = Math.round(data.wind.speed * 3.6) + " Km/h";

    if(data.weather[0].main == "Clear") image.src = "images/clear.png";
    else if(data.weather[0].main == "Clouds") image.src = "images/clouds.png";
    else if(data.weather[0].main == "Drizzle") image.src = "images/drizzle.png";
    else if(data.weather[0].main == "Mist") image.src = "images/mist.png";
    else if(data.weather[0].main == "Snow") image.src = "images/snow.png";
    else if(data.weather[0].main == "Rain") image.src = "images/rain.png";

    document.querySelector(".weather").style.display = "block";
    document.querySelector(".errormeassage").style.display = "none";
}

search.addEventListener('click',(e)=>{
    var value = cityName.value;
    checkWeather(value);
})
