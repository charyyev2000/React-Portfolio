import React from "react";
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
const IconCloud = () => {
  return (
    <Cloud>
      {skills.map((item, i) => {
        return <a href="">{item.name}</a>;
      })}
    </Cloud>
  );
};

export default IconCloud;
