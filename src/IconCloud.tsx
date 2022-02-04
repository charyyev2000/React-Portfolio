import React from "react";
import { Cloud } from "react-icon-cloud";
import styledComponents from "styled-components";

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
const IconCloud = () => {
  return (
    <Cloud>
      {skills.map((item, i) => {
        return (
          <a href="" className="skill">
            {item.name}
          </a>
        );
      })}
    </Cloud>
  );
};

export default IconCloud;
