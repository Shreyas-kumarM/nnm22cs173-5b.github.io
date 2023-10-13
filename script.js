document.addEventListener("DOMContentLoaded", function () {
    const apiKey = "bd5e378503939ddaee76f12ad7a97608";

    const fetchWeatherButton = document.getElementById("fetchWeather");
    const cityInput = document.getElementById("cityInput");
    const weatherResult = document.getElementById("weatherResult");

    fetchWeatherButton.addEventListener("click", function () {
        const city = cityInput.value;
        if (city.trim() === "") {
            alert("Please enter a city name.");
            return;
        }

        const apiUrl = `https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=${apiKey}&units=metric`;

        fetch(apiUrl)
            .then((response) => response.json())
            .then((data) => {
                const temperature = data.main.temp;
                const weatherDescription = data.weather[0].description;

                // Create HTML elements to display the weather information
                const temperatureElement = document.createElement("p");
                temperatureElement.innerHTML = `Temperature: ${temperature} &#8451;`;

                const weatherDescriptionElement = document.createElement("p");
                weatherDescriptionElement.innerHTML = `Weather: ${weatherDescription}`;

                // Clear any previous weather results
                weatherResult.innerHTML = "";

                // Append the new weather information
                weatherResult.appendChild(temperatureElement);
                weatherResult.appendChild(weatherDescriptionElement);
            })
            .catch((error) => {
                console.error("Error fetching weather data:", error);
                weatherResult.innerHTML = "Weather data not available.";
            });
    });
});
