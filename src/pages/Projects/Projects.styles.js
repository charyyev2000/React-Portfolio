import styled from "styled-components";

export const ProjectsStyled = styled.section`
  height: 100%;
`;

export const ProjectContent = styled.div`
  width: 90%;
  margin: 0 auto;
  display: flex;
  align-items: center;
  justify-content: center;
  position: relative;
  margin-top: 150px;
`;

export const ProjectImg = styled.div`
  background: url(${(props) => props.bgImage});
  background-repeat: no-repeat;
  background-position: center;
  background-size: cover;
  width: 100%;
  max-width: 50%;
  height: 350px;
  border-radius: 15px;
  box-shadow: 0px 10px 100px rgba(0, 0, 0, 0.5);
`;

export const ProjectText = styled.div`
  width: 50%;
  margin-left: -150px;

  h1 {
    text-align: right;
    width: 100%;
    font-size: clamp(50px, 5vw, 30px);
    padding-right: 20px;
    color: ${({ theme }) => theme.secondary};
  }

  .projectContent {
    padding: 20px;
    background: rgba(0, 0, 0, 0.5);
    font-size: clamp(25px, 2vw, 20px);
    color: white;
    height: 100%;
    border-radius: 15px;
    box-shadow: 0px 10px 100px rgba(0, 0, 0, 0.5);
    // min-height: 250px;
  }

  .tools {
    color: ${({ theme }) => theme.iconSecondary};
    text-decoration: none;
    font-size: clamp(20px, 2vw, 10px);
    text-align: right;
    list-style: none;
    width: 100%;
    text-align: right;
    display: flex;
    justify-content: end;
    align-items: center;
    margin-top: 10px;
    padding-right: 20px;
  }

  .sources {
    float: right;
    margin-top: 10px;

    a {
      color: ${({ theme }) => theme.secondary};
      font-size: clamp(30px, 2vw, 15px);
      margin-right: 20px;
    }
  }
`;
