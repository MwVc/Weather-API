// Import our custom CSS
import "../scss/styles.scss";

// Import all of Bootstrap's JS
import * as bootstrap from "bootstrap";

const toolTips = document.querySelectorAll(".tt");
toolTips.forEach((t) => {
  new bootstrap.Tooltip(t);
});

// Fetch Functions
