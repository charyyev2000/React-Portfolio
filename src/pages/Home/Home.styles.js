import { Link } from "react-scroll";
import styled from "styled-components";
import { Circle } from "../../globalStyle";

// export const s = {
//   xxl: "1536px",
//   xl: "1280px",
//   lg: "1024px",
//   md: "768px",
//   sm: "640px",
//   xs: "475px",
// };

export const HomeStyled = styled.section`
  width: 100vw;
  height: 100vh;
  position: relative;

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

export const Links = styled.h1`
  display: flex;
  align-items: center;
  list-style: none;

  .active {
    color: red;
  }

  h1 {
    margin-right: 20px;
    font-size: clamp(10px, 1.5vw, 20px);
    cursor: pointer;
    font-weight: 500;

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
    li {
      a {
        span {
        }
      }
    }
  }
`;

export const HomeContent = styled.div`
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
    color: ${({ theme }) => theme.primary};
    letter-spacing: 2px;
    font-weight: 800;
    text-transform: uppercase;
    line-height: 1;
  }

  h2 {
    color: ${({ theme }) => theme.secondary};
    font-size: clamp(30px, 12vw, 90px);
    white-space: nowrap;
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
    color: ${({ theme }) => theme.icon};
    font-size: clamp(20px, 4vw, 40px);
    transition: all 0.3s ease;
    -webkit-transition: all 0.3s ease;
    -moz-transition: all 0.3s ease;
    -ms-transition: all 0.3s ease;
    -o-transition: all 0.3s ease;

    &:hover {
      cursor: pointer;
      color: ${({ theme }) => theme.iconSecondary};
    }
  }
`;

export const Toggle = styled.div`
  position: fixed;
  top: 90vh;
  right: 5vw;
  color: ${({ theme }) => theme.icon};
  font-size: clamp(20px, 4vw, 40px);
  transition: all 0.3s ease;
  -webkit-transition: all 0.3s ease;
  -moz-transition: all 0.3s ease;
  -ms-transition: all 0.3s ease;
  -o-transition: all 0.3s ease;

  &:hover {
    cursor: pointer;
    color: ${({ theme }) => theme.iconSecondary};
  }
`;
