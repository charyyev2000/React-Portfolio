import React from "react";
// import "./Home.scss";
import { Icon } from "@iconify/react";
import {
  ContactStyled,
  HomeContent,
  HomeStyled,
  Links,
  Logo,
  NavbarLink,
  NavbarStyled,
  Toggle,
} from "./Home.styles";
import { Link } from "react-scroll";

const links = [
  {
    no: "01.",
    id: "home",
    name: "Home",
  },
  {
    no: "02.",
    id: "about",
    name: "About",
  },
  {
    no: "03.",
    id: "experience",
    name: "Experience",
  },
  {
    no: "04.",
    id: "projects",
    name: "Projects",
  },
];

const Home = ({ theme, toggleTheme }) => {
  return (
    <HomeStyled className="home" id="home">
      <NavbarStyled className="navbar">
        <Logo className="logo">Sh</Logo>
        <Links>
          {links.map((link) => {
            return (
              <Link
                activeClass="active"
                to={link.id}
                spy={true}
                smooth={true}
                hashSpy={true}
                duration={500}
                isDynamic={true}
                ignoreCancelEvents={false}
              >
                <h1>
                  <span>{link.no}</span>
                  {link.name}
                </h1>
              </Link>
            );
          })}
        </Links>
        {/* <ul>
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
        </ul> */}
      </NavbarStyled>

      <HomeContent>
        <h1>name</h1>
        <h1>last</h1>
        <h2>Front-End Developer</h2>
      </HomeContent>

      <ContactStyled className="home_aside">
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
      </ContactStyled>

      <Toggle onClick={toggleTheme}>
        {theme === "light" ? (
          <Icon icon="icomoon-free:sun" />
        ) : (
          <Icon icon="bx:bx-moon" />
        )}
      </Toggle>
      <div className="circleFirst"></div>
      <div className="circleSecond"></div>
      <div className="circleThird"></div>
    </HomeStyled>
  );
};

export default Home;
