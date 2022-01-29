import styled, { createGlobalStyle, css } from "styled-components";

export const GlobalStyle = createGlobalStyle`
* {
    margin: 0;
    padding: 0;
    box-sizing: border-box;
}

html {
    font-size: 62.5%;
    overflow-x: hidden;
    max-width:100vw;
}

.center {
    width: 80vw;
    margin: 0 auto;

    @media screen and (max-width: 1024px) {
      width: 85vw;
    }

    @media screen and (max-width: 768px) {
      width: 87vw;
    }
}

img {
    width: 100%;
}

body {
     background: ${({ theme }) => theme.body};
     font-family: 'Montserrat', sans-serif;
     transition: background 0.5s ease;
     -webkit-transition: background 0.5s ease;
     -moz-transition: background 0.5s ease;
     -ms-transition: background 0.5s ease;
     -o-transition: background 0.5s ease;
     overflow-x: hidden;
}

`;

export const darkTheme = {
  body: "#053f5e",
  primary: "#ffffff",
  circle: "#115173",
  secondary: "#ffd700",
  icon: "#ffffff",
  iconSecondary: "#ffd700",
  toggle: "#ffffff",
};

export const lightTheme = {
  body: "#F9F3E6",
  primary: "#E8AA8C",
  circle: "#E2DCD5",
  secondary: "#5E616A",
  icon: "#5E616A",
  iconSecondary: "#E8AA8C",
  toggle: "#5E616A",
};

export const Circle = css`
  position: absolute;
  background: ${({ theme }) => theme.circle};
  border-radius: 50%;
  -webkit-border-radius: 50%;
  -moz-border-radius: 50%;
  -ms-border-radius: 50%;
  -o-border-radius: 50%;
  z-index: -1;
  box-shadow: 0px 20px 50px 10px rgba(0, 0, 0, 0.25);
  transition: all 0.5s ease;
  -webkit-transition: all 0.5s ease;
  -moz-transition: all 0.5s ease;
  -ms-transition: all 0.5s ease;
  -o-transition: all 0.5s ease;
`;
