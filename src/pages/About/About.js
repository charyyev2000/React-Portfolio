import React from "react";
import "./About.scss";

const About = () => {
  return (
    <div className="about center">
      <div className="about_content">
        <h1 className="about_content_header">
          More about me <span>. . .</span>
        </h1>
        <p className="about_content_text">
          I am <span>Front-End Developer</span> building the Front-End Websites
          and Web Applications that leads to the success of the overall product.
          Check out some of my work in the{" "}
          <span>
            <a href="#projects">Projects </a>
          </span>
          section<span>.</span>
        </p>
      </div>
      <div className="about_icons"></div>
    </div>
  );
};

export default About;
