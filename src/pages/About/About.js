import React from "react";
import {
  AboutContent,
  AboutHeader,
  AboutStyled,
  AboutText,
  IconCloud,
} from "./About.styles";

const About = () => {
  return (
    <AboutStyled className="center">
      <div style={{ width: "50%" }}>
        <AboutHeader className="about_header">
          More about me <span>. . .</span>
        </AboutHeader>
        <AboutText>
          I am <span>Front-End Developer</span> building the Front-End Websites
          and Web Applications that leads to the success of the overall product.
          Check out some of my work in the <a href="#projects">Projects </a>
          section<span>.</span>
        </AboutText>
      </div>
      <IconCloud></IconCloud>
    </AboutStyled>
  );
};

export default About;
