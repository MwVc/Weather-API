// Import our custom CSS
import "../scss/styles.scss";

// Import all of Bootstrap's JS
import * as bootstrap from "bootstrap";

(function () {
  const form = document.querySelector("form");
  const searchInput = document.querySelector("#search-input");
  const button = document.getElementById("search-btn");

  form.addEventListener("submit", (event) => {
    event.preventDefault();
    if (!(searchInput.value == "")) {
      getWeatherData;
    } else {
      button.setAttribute("data-bs-toggle", "modal");
      button.setAttribute("data-bs-target", "#exampleModal");
    }
  });
})();

async function getWeatherData() {
  try {
    const promise = await fetch(
      "https://api.weatherapi.com/v1/current.json?key=1a5ff743f48f43298ad132819242302&q=oidfodsd"
    );
    console.log(promise);
    if (promise.ok) {
      const weatherData = await promise.json();
      console.log(weatherData);

      document.getElementById(
        "locationData"
      ).innerText = `${weatherData.location.name}, ${weatherData.location.country}`;
      document.getElementById(
        "localTimeData"
      ).innerText = `${weatherData.location.localtime}`;
      document.getElementById(
        "conditionData"
      ).innerText = `${weatherData.current.condition.text}`;
      document
        .getElementById("conditionDataIcon")
        .setAttribute("src", `${weatherData.current.condition.icon}`);
      document.getElementById(
        "feelsLikeData"
      ).innerText = `${weatherData.current.feelslike_c}°C / ${weatherData.current.feelslike_f}°F`;
      document.getElementById(
        "humidityData"
      ).innerText = `${weatherData.current.humidity}%`;
      document.getElementById(
        "pressureData"
      ).innerText = `${weatherData.current.pressure_in}in / ${weatherData.current.pressure_mb}mb`;
      document.getElementById(
        "temperatureData"
      ).innerText = `${weatherData.current.temp_c}°C / ${weatherData.current.temp_f}°F`;
      document.getElementById(
        "visibilityData"
      ).innerHTML = `${weatherData.current.vis_km} km / ${weatherData.current.vis_miles} miles`;
      document.getElementById(
        "windDirectionData"
      ).innerHTML = `${weatherData.current.wind_dir}`;
      document.getElementById(
        "windSpeedData"
      ).innerHTML = `${weatherData.current.wind_kph} kph / ${weatherData.current.wind_mph} mph`;
    } else {
      if (promise.status === 401 || promise.status === 403) {
        throw new Error("Unauthorized: Check your API key or permissions");
      } else if (promise.status === 400) {
        throw new Error(
          "No location found matchin your location or bad request check permissions"
        );
      } else {
        throw new Error("Unknown error. Please try again later");
      }
    }
  } catch (error) {
    alert(error);
  }
}
