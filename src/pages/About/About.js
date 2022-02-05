import React from "react";
import {
  AboutContent,
  AboutContentHeader,
  AboutContentText,
  AboutStyled,
  IconCloudStyled,
  Tag,
} from "./About.styles";

import { Cloud } from "react-icon-cloud";

const skills = [
  {
    name: "HTML",
  },
  {
    name: "CSS",
  },
  {
    name: "JavaScript",
  },
  {
    name: "SCSS",
  },
  {
    name: "React",
  },
  {
    name: "Redux",
  },
  {
    name: "Tailwind",
  },
  {
    name: "Figma",
  },
  {
    name: "GIT",
  },
  {
    name: "Github",
  },
];

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
      {/* <IconCloudStyled> */}
      {/* <IconCloud /> */}
      <Cloud>
        <ul>
          {skills.map((item, i) => {
            return (
              <Tag
                href=""
                key={i}
                style={{
                  color: "white",
                  fontSize: "50px",
                  height: "40px",
                  fontWeight: 900,
                  fontSize: 100,
                }}
              >
                <a data-weight="100" href="">
                  {item.name}
                </a>
              </Tag>
            );
          })}
        </ul>
      </Cloud>
      {/* </IconCloudStyled> */}
    </AboutStyled>
  );
};

export default About;
