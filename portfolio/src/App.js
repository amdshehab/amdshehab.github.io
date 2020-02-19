import React, { useRef, useState, useEffect, useCallback } from "react";
import styled from "styled-components";
import { Parallax, ParallaxLayer } from "react-spring/renderprops-addons";
import ReactVisibilitySensor from "react-visibility-sensor";
import { TextFader } from "./components/TextFader";

import "./App.scss";

const items = ["Engineer", "Creative", "Mentor"];

const App = () => {
  const ref = useRef(null);

  return (
    <div className="Container">
      <div className="Header">
        <TextFader items={items} isVisible></TextFader>
      </div>

      <div className="Content">
        {/* <ReactVisibilitySensor>
          {({ isVisible }) => (
            <TextFader items={items} isVisible={isVisible}></TextFader>
          )}
        </ReactVisibilitySensor> */}
      </div>
    </div>
  );
};
export default App;
