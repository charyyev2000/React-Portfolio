import React from "react";
import {
  AboutContent,
  AboutContentHeader,
  AboutContentText,
  AboutStyled,
  IconCloudStyled,
} from "./About.styles";
import { Cloud } from "react-icon-cloud";

const About = () => {
  return (
    <AboutStyled className="center" id="about">
      <AboutContent>
        <AboutContentHeader className="about_header">
          More about me <span>. . .</span>
        </AboutContentHeader>
        <AboutContentText>
          I am <span>Front-End Developer</span> building the Front-End Websites
          and Web Applications that leads to the success of the overall product.
          Check out some of my work in the <a href="#projects">Projects </a>
          section<span>.</span>
        </AboutContentText>
      </AboutContent>
      <IconCloudStyled></IconCloudStyled>
    </AboutStyled>
  );
};

export default About;
