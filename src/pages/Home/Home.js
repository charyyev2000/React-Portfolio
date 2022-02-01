import React, { useEffect, useRef, useState } from "react";
// import "./Home.scss";
import { ContactStyled, HomeContent, HomeStyled, Toggle } from "./Home.styles";
import gsap from "gsap";

const Home = () => {
  const ref = useRef(null);

  // useEffect(() => {
  //   gsap.to(".circleFirst", {
  //     scale: 1,
  //     duration: 1,
  //     delay: 1
  //   });
  // }, []);

  return (
    <HomeStyled className="home" id="home">
      <HomeContent>
        <h1 className="name">name</h1>
        <h1 className="last">last</h1>
        <h2>Front-End Developer</h2>
      </HomeContent>

      <div className="circleFirst" ref={ref}></div>
      <div className="circleSecond"></div>
      <div className="circleThird"></div>
    </HomeStyled>
  );
};

export default Home;
