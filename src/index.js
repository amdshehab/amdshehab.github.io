import ready from "domready";

import App from "./scripts/App";
import "./scripts/fade";
import "./index.scss";

window.app = new App();
ready(() => {
  window.app.init();
});
