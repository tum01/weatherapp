const apiKey = "8c04feacec40b8fe074edf9b711ad8a1";
const url = "https://api.openweathermap.org/data/2.5/weather?units=metric";

const searchBox = document.querySelector(".search input");
const searchBtn = document.querySelector(".search button");
const weatherImg = document.querySelector(".weather-icon");
async function checkWeather(city)
{
    const response = await fetch(url + `&appid=${apiKey}&q=${city}`);
    var data = await response.json();
    if(data.cod === 200)
    {
        document.querySelector('.city').innerHTML = data.name;
        document.querySelector('.temp').innerHTML = Math.round(data.main.temp) + " °C";
        document.querySelector('.humidity').innerHTML = data.main.humidity + "%";
        document.querySelector('.wind').innerHTML = Math.round(data.wind.speed) + "km/hr";
        weatherImg.src = "images/"+data.weather[0].main.toLowerCase() + ".png";
        const x = document.querySelector('.weather').style.display = "block";
        console.log(x);
    }
    else
    {
        alert("City not found!");
    }
}
searchBtn.addEventListener("click", () =>{
    const city = searchBox.value;
    console.log(city);
    if(city === "")
    {
        alert("Please enter a city name");
    }
    else checkWeather(city);
});


