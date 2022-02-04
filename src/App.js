import { useState, useEffect, useRef } from "react";
import About from "./pages/About/About";
import Home from "./pages/Home/Home";
import { GlobalStyle, lightTheme, darkTheme } from "./globalStyle";
import { ThemeProvider } from "styled-components";
import Experience from "./pages/Experience/Experience";
import Projects from "./pages/Projects/Projects";
import gsap from "gsap/all";
import locomotiveScroll from "locomotive-scroll";
import Navbar from "./pages/Navbar/Navbar";

function App() {
  const [theme, setTheme] = useState("dark");

  const setMode = (mode) => {
    window.localStorage.setItem("theme", mode);
    setTheme(mode);
  };

  const toggleTheme = () => {
    theme === "dark" ? setMode("light") : setMode("dark");
  };

  useEffect(() => {
    const localTheme = window.localStorage.getItem("theme");
    localTheme ? setTheme(localTheme) : setMode("dark");
  }, []);

  const themeMode = theme === "light" ? lightTheme : darkTheme;

  const scrollRef = useRef();

  useEffect(() => {
    const scroll = new locomotiveScroll({
      el: document.querySelector("#container"),
      smooth: true,
      lerp: 0.06,
      multiplier: 0.5,
    });
  }, []);

  return (
    <>
      <ThemeProvider theme={themeMode}>
        <GlobalStyle />
        <Navbar
          theme={theme}
          toggleTheme={toggleTheme}
          // data-scroll
          // data-scroll-sticky
          // data-scroll-target
        />
        <div
          id="container"
          className="scroll"
          ref={scrollRef}
          data-scroll-speed="2"
          style={{ padding: "0 0 10vh" }}
        >
          <Home />
          <About />
          <Experience />
          <Projects />
          <footer className="footer">
            <h1>Designed & Built by Myrat Charyyev</h1>
          </footer>
        </div>
      </ThemeProvider>
    </>
  );
}

export default App;
