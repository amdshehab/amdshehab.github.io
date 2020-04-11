import ready from "domready";

import App from "./scripts/App";
import "./index.scss";
import "./scripts/cursor";

ready(() => {
  window.app = new App();
  window.app.init();
});
