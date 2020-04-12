import ready from "domready";

import App from "./scripts/App";
import "./index.scss";
import "./scripts/cursor";
import { animationComplete } from "./scripts/boxReveal";

ready(() => {
  window.app = new App();
  window.app.init(animationComplete);
  // animationComplete.then((res) => {
  //   window.app.postInitialAnimate();
  // });
});
