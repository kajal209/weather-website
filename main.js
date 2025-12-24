const apiKey = "50fa0c0994fae4b482d723a69840c8e7";   
const defaultCity = "Kathmandu";

const searchInput = document.querySelector(".search input");
const searchButton = document.querySelector(".search button");

const cityElement = document.querySelector(".city");
const tempElement = document.querySelector(".temp");
const humidityElement = document.querySelector(".humidity");
const windElement = document.querySelector(".wind");
const weatherIcon = document.querySelector(".weather-icon");


async function fetchWeatherData(city = defaultCity) {
    try {
        const apiUrl = `https://api.openweathermap.org/data/2.5/weather?q=${city}&units=metric&appid=${apiKey}`;

        const response = await fetch(apiUrl);

        if (!response.ok) {
            alert("City not found!");
            return;
        }

        const data = await response.json();
        console.log(data); 

        cityElement.innerHTML = data.name;
        tempElement.innerHTML = Math.round(data.main.temp) + "°C";
        humidityElement.innerHTML = data.main.humidity + "%";
        windElement.innerHTML = data.wind.speed + " km/h";

  
        //const iconCode = data.weather[0].icon;
        //weatherIcon.src = `https://openweathermap.org/img/wn/${iconCode}@2x.png`;

    } catch (error) {
        console.log(error);
    }
}

searchButton.addEventListener("click", () => {
    const city = searchInput.value.trim();

    if (city !== "") {
        fetchWeatherData(city);
        searchInput.value = "";
    }
});

fetchWeatherData();
