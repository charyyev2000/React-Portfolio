import { useState, useEffect } from "react";
import About from "./pages/About/About";
import Home from "./pages/Home/Home";
import { GlobalStyle, lightTheme, darkTheme } from "./globalStyle";
import { ThemeProvider } from "styled-components";

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

  return (
    <>
      <ThemeProvider theme={themeMode}>
        <GlobalStyle />
        <Home theme={theme} toggleTheme={toggleTheme} />
        <About />
      </ThemeProvider>
    </>
  );
}

export default App;
