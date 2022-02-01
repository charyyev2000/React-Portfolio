import React from "react";
import { ExperieneStyled } from "./Experience.styles";

const Experience = () => {
  return (
    <ExperieneStyled className="center" id="experience">
      <div className="experience_content">
        <div className="experience">
          <div>
            <h1>Belli Creative Studio</h1>
            <a href="https://bellicreative.com/" target="_blank">
              bellicreative.com
            </a>
          </div>
          <span className="span"></span>
          <div className="experience_time">
            <h2>
              Jul<span>.</span>2020
            </h2>
            <h2>
              Apr<span>.</span>2021
            </h2>
          </div>
        </div>
        <div className="experience">
          <div>
            <h1>Sanly-achar</h1>
            <a href="https://sanly-achar.com/" target="_blank">
              sanly-achar.com
            </a>
          </div>
          <span className="span"></span>
          <div className="experience_time">
            <h2>
              Apr<span>.</span>2021
            </h2>
            <h2>Current</h2>
          </div>
        </div>
      </div>
    </ExperieneStyled>
  );
};

export default Experience;
