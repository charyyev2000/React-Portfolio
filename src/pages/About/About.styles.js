import styled from "styled-components";

export const AboutStyled = styled.section`
  height: 100vh;
  display: flex;
  align-items: center;
  justify-content: center;
`;

export const AboutHeader = styled.h1`
  color: ${({ theme }) => theme.primary};
  font-size: clamp(30px, 4vw, 40px);
  margin-bottom: 10px;

  span {
    color: ${({ theme }) => theme.secondary};
  }
`;

export const AboutText = styled.p`
  color: ${({ theme }) => theme.primary};
  font-size: clamp(15px, 3vw, 30px);

  span {
    color: ${({ theme }) => theme.secondary};
  }

  a {
    color: ${({ theme }) => theme.secondary};
    text-decoration: none;

    &:hover {
      color: #ffffff;
      transition: all 0.3s ease;
      -webkit-transition: all 0.3s ease;
      -moz-transition: all 0.3s ease;
      -ms-transition: all 0.3s ease;
      -o-transition: all 0.3s ease;
    }
  }
`;

export const IconCloud = styled.div`
  width: 50%;
`;
