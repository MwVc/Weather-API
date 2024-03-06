// Import our custom CSS
import "../scss/styles.scss";

// Import all of Bootstrap's JS
import * as bootstrap from "bootstrap";

(function () {
  const form = document.querySelector("form");
  const searchInput = document.querySelector("#search-input");
  console.log(searchInput.style);

  form.addEventListener("submit", (event) => {
    event.preventDefault();
    if (!(searchInput.value == "")) {
      getWeatherData();
    }
  });
})();

async function getWeatherData() {
  const promise = await fetch(
    "https://api.weatherapi.com/v1/current.json?key=1a5ff743f48f43298ad132819242302&q=mombasa"
  );
  const data = await promise.json();
  console.log(document.getElementById("locationData"));
  console.log(document.getElementById("localTimeData"));
  console.log(document.getElementById("conditionData"));
  console.log(document.getElementById("feelsLikeData"));
  console.log(document.getElementById("humidityData"));
  console.log(document.getElementById("pressureData"));
  console.log(document.getElementById("temperatureData"));
  console.log(document.getElementById("visibilityData"));
  console.log(document.getElementById("windDirectionData"));
  console.log(document.getElementById("windSpeedData"));
  console.log(data);
}
