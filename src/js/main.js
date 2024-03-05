// Import our custom CSS
import "../scss/styles.scss";

// Import all of Bootstrap's JS
import * as bootstrap from "bootstrap";

const toolTips = document.querySelectorAll(".tt");
toolTips.forEach((t) => {
  new bootstrap.Tooltip(t);
});

// Fetch Functions
async function getWeatherData() {
  const promise = await fetch(
    "https://api.weatherapi.com/v1/current.json?key=1a5ff743f48f43298ad132819242302&q=london"
  );
  const data = await promise.json();
  console.log(data);
}

getWeatherData();
