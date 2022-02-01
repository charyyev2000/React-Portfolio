import React, { useState } from "react";
import { Link } from "react-scroll";
import {
  BurgerButton,
  ContactStyled,
  Links,
  Logo,
  NavbarStyled,
  Toggle,
} from "./Navbar.styles";
import { Icon } from "@iconify/react";

const Navbar = ({ theme, toggleTheme }) => {
  const [open, setOpen] = useState(false);

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

  return (
    <NavbarStyled className="navbar" data-scroll-sticky>
      <Logo className="logo">Sh</Logo>
      <Links open={open} setOpen={setOpen}>
        {links.map((link, id) => {
          return (
            <Link
              activeClass="active"
              to={link.id}
              key={id}
              spy={true}
              smooth={true}
              hashSpy={true}
              duration={500}
              isDynamic={true}
              ignoreCancelEvents={false}
            >
              <h1 onClick={() => setOpen(!open)}>
                <span>{link.no}</span>
                {link.name}
              </h1>
            </Link>
          );
        })}
      </Links>
      <BurgerButton
        open={open}
        onClick={() => setOpen(!open)}
        className="toggle"
      >
        <span className="box"></span>
        <span className="rectangle rectangle-top rectangle-small"></span>
        <span className="rectangle rectangle-middle"></span>
        <span className="rectangle rectangle-bottom rectangle-small"></span>
      </BurgerButton>

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
    </NavbarStyled>
  );
};

export default Navbar;
