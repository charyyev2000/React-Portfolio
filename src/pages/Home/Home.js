import React from "react";
import "./Home.scss";
import { Icon } from "@iconify/react";

const Home = () => {
  return (
    <section className="home">
      <nav className="navbar center">
        <h1 className="logo">Sh</h1>
        <ul>
          <li>
            <a href="">
              <span>01.</span>Home
            </a>
          </li>
          <li>
            <a href="">
              <span>02.</span>About
            </a>
          </li>
          <li>
            <a href="">
              <span>03.</span>Experience
            </a>
          </li>
          <li>
            <a href="">
              <span>04.</span>Projects
            </a>
          </li>
        </ul>
      </nav>

      <div className="home_content">
        <h1>name</h1>
        <h1>last</h1>
        <h2>Front-End Developer</h2>
      </div>

      <aside className="home_aside">
        <a
          href="https://github.com/ShatlykBerdiyew"
          title="Github"
          target="_blank"
          rel="noopener noreferrer"
        >
          <Icon icon="iconoir:github-outline" />
        </a>
        <a
          href="https://t.me/shatlykberdiyev"
          title="Telegram"
          target="_blank"
          rel="noopener noreferrer"
        >
          <Icon icon="tabler:brand-telegram" />
        </a>
        <a
          href="mailto:ShatlykBerdiev@gmail.com"
          target="_blank"
          rel="noopener noreferrer"
        >
          <Icon icon="codicon:mail" />
        </a>
      </aside>

      <aside className="home_toggle">
        <Icon icon="icomoon-free:sun" />
      </aside>
      <div className="circleFirst"></div>
      <div className="circleSecond"></div>
      <div className="circleThird"></div>
    </section>
  );
};

export default Home;
