import styled from "styled-components";
import { Circle } from "../../globalStyle";

export const HomeStyled = styled.nav`
  .home {
    width: 100vw;
    height: 100vh;
    position: relative;

    &_content {
      width: 60vw;
      margin: auto;
      position: absolute;
      left: 50%;
      top: 50%;
      transform: translate(-50%, -50%);
      -webkit-transform: translate(-50%, -50%);
      -moz-transform: translate(-50%, -50%);
      -ms-transform: translate(-50%, -50%);
      -o-transform: translate(-50%, -50%);

      h1 {
        font-size: clamp(50px, 20vw, 120px);
        color: ;
        letter-spacing: 2px;
        text-transform: uppercase;
        line-height: 1;
      }

      h2 {
        color: ;
        font-size: clamp(30px, 12vw, 90px);
        white-space: nowrap;
      }
    }
  }

  .circleFirst {
    ${Circle}
    top: -50%;
    left: -20%;
    width: 1300px;
    height: 1300px;
  }

  .circleSecond {
    ${Circle}
    width: 1000px;
    height: 1000px;
    top: -30%;
    right: -20%;
  }

  .circleThird {
    ${Circle}
    bottom: -40%;
    right: 40%;
    width: 500px;
    height: 500px;
  }
`;

export const NavbarStyled = styled.nav`
  width: 100vw;
  padding: 0 5vw;
  display: flex;
  align-items: center;
  justify-content: space-between;
  position: fixed;
  top: 0;
  left: 0;

  ul {
    display: flex;
    align-items: center;
    list-style: none;

    li {
      margin-right: 20px;
      font-size: clamp(10px, 1.5vw, 20px);

      a {
        color: ${({ theme }) => theme.primary};
        text-decoration: none;
        transition: all 0.2s ease;
        -webkit-transition: all 0.2s ease;
        -moz-transition: all 0.2s ease;
        -ms-transition: all 0.2s ease;
        -o-transition: all 0.2s ease;

        &:hover {
          color: ${({ theme }) => theme.secondary};
        }

        span {
          color: ${({ theme }) => theme.secondary};
          margin-right: 5px;
          font-weight: 700;
        }
      }
    }
  }
`;

export const Logo = styled.h1`
  font-size: clamp(40px, 4vw, 120px);
  color: ${({ theme }) => theme.secondary};
  letter-spacing: 2px;
  font-weight: 900;
`;

export const ContactStyled = styled.div`
  position: fixed;
  top: 80vh;
  left: 5vw;
  line-height: 1;
  display: flex;
  align-items: center;
  flex-direction: column;

  a {
    color: ${({ theme }) =>
      theme === "light" ? theme.primary : theme.secondary};
    font-size: clamp(20px, 4vw, 40px);
    transition: all 0.3s ease;
    -webkit-transition: all 0.3s ease;
    -moz-transition: all 0.3s ease;
    -ms-transition: all 0.3s ease;
    -o-transition: all 0.3s ease;

    &:hover {
      cursor: pointer;
      color: ${({ theme }) =>
        theme === "light" ? theme.secondary : theme.primary};
    }
  }
`;

export const Toggle = styled.div`
  position: fixed;
  top: 90vh;
  right: 5vw;
  color: ${({ theme }) => (theme === "dark" ? "white" : theme.secondary)};
  font-size: clamp(20px, 4vw, 40px);
  transition: all 0.3s ease;
  -webkit-transition: all 0.3s ease;
  -moz-transition: all 0.3s ease;
  -ms-transition: all 0.3s ease;
  -o-transition: all 0.3s ease;

  &:hover {
    cursor: pointer;
    color: ${({ theme }) => theme.primary};
  }
`;
