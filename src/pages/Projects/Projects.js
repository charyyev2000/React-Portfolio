import React, { useEffect, useRef } from "react";
import {
  ProjectContent,
  ProjectImg,
  ProjectsStyled,
  ProjectText,
} from "./Projects.styles";
// import Image from "../e-blilim.jpg";
import { Data } from "../../data";
import { useIntersection } from "react-use";
import gsap from "gsap";

const Projects = () => {
  // const ref = useRef(null);

  // gsap.to(".projectImg", {
  //   scale: 0.95,
  //   delay: 2,
  //   duration: 5,
  //   scrollTrigger: {
  //     trigger: ".projectImg",
  //     start: "center center",
  //     end: "top 100px",
  //     scrub: true,
  //     markers: true,
  //   },
  // });

  // gsap
  //   .timeline({
  //     scrollTrigger: {
  //       trigger: ".projectImg",
  //       scrub: true,
  //       start: "center center",
  //       end: " top 100px",
  //       markers: true,
  //     },
  //   })
  //   .fromTo(
  //     ".projectImg",
  //     {
  //       y: 300,
  //       opacity: 0,
  //     },
  //     {
  //       y: 0,
  //       opacity: 1,
  //       duration: 1,
  //       delay: 1,
  //       ease: "none",
  //     }
  //   );

  return (
    <ProjectsStyled className="center" id="projects">
      {Data.map((item, id) => {
        return (
          <ProjectContent key={id}>
            <ProjectImg
              className="projectImg"
              bgImage={process.env.PUBLIC_URL + `/images/${item.name}.jpg`}
            />
            <ProjectText className="fadeOut">
              <h1 href={item.link}>{item.name}</h1>
              <p className="projectContent">{item.description}</p>

              <div className="tools">
                {item.tools.map((tool, i) => (
                  <p key={i}>{tool}</p>
                ))}
              </div>
              <div className="sources">
                <a href="">
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    aria-hidden="true"
                    role="img"
                    width="1em"
                    height="1em"
                    preserveAspectRatio="xMidYMid meet"
                    viewBox="0 0 24 24"
                  >
                    <path
                      fill="currentColor"
                      d="M16.24 22a1 1 0 0 1-1-1v-2.6a2.15 2.15 0 0 0-.54-1.66a1 1 0 0 1 .61-1.67C17.75 14.78 20 14 20 9.77a4 4 0 0 0-.67-2.22a2.75 2.75 0 0 1-.41-2.06a3.71 3.71 0 0 0 0-1.41a7.65 7.65 0 0 0-2.09 1.09a1 1 0 0 1-.84.15a10.15 10.15 0 0 0-5.52 0a1 1 0 0 1-.84-.15a7.4 7.4 0 0 0-2.11-1.09a3.52 3.52 0 0 0 0 1.41a2.84 2.84 0 0 1-.43 2.08a4.07 4.07 0 0 0-.67 2.23c0 3.89 1.88 4.93 4.7 5.29a1 1 0 0 1 .82.66a1 1 0 0 1-.21 1a2.06 2.06 0 0 0-.55 1.56V21a1 1 0 0 1-2 0v-.57a6 6 0 0 1-5.27-2.09a3.9 3.9 0 0 0-1.16-.88a1 1 0 1 1 .5-1.94a4.93 4.93 0 0 1 2 1.36c1 1 2 1.88 3.9 1.52a3.89 3.89 0 0 1 .23-1.58c-2.06-.52-5-2-5-7a6 6 0 0 1 1-3.33a.85.85 0 0 0 .13-.62a5.69 5.69 0 0 1 .33-3.21a1 1 0 0 1 .63-.57c.34-.1 1.56-.3 3.87 1.2a12.16 12.16 0 0 1 5.69 0c2.31-1.5 3.53-1.31 3.86-1.2a1 1 0 0 1 .63.57a5.71 5.71 0 0 1 .33 3.22a.75.75 0 0 0 .11.57a6 6 0 0 1 1 3.34c0 5.07-2.92 6.54-5 7a4.28 4.28 0 0 1 .22 1.67V21a1 1 0 0 1-.94 1z"
                    />
                  </svg>
                </a>
                <a href="">
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    aria-hidden="true"
                    role="img"
                    width="1em"
                    height="1em"
                    preserveAspectRatio="xMidYMid meet"
                    viewBox="0 0 24 24"
                  >
                    <g fill="none">
                      <path
                        d="M13.5 10.5L21 3"
                        stroke="currentColor"
                        strokeWidth="2"
                        strokeLinecap="round"
                        strokeLinejoin="round"
                      />
                      <path
                        d="M16 3h5v5"
                        stroke="currentColor"
                        strokeWidth="2"
                        strokeLinecap="round"
                        strokeLinejoin="round"
                      />
                      <path
                        d="M21 14v5a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V5a2 2 0 0 1 2-2h5"
                        stroke="currentColor"
                        strokeWidth="2"
                        strokeLinecap="round"
                        strokeLinejoin="round"
                      />
                    </g>
                  </svg>
                </a>
              </div>
            </ProjectText>
          </ProjectContent>
        );
      })}
    </ProjectsStyled>
  );
};

export default Projects;
