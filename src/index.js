import ready from "domready";
import App from "./scripts/App";
import "./scripts/fade";
import "./index.scss";

window.app = new App();
const el = document.querySelector(".sk-cube-grid");

ready(() => {
  el.style.display = "none";
  window.app.init();
});
