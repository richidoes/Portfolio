import React from "react";
import styled from "styled-components";

import { projects } from "../../data/projectsData";
import { Caption, H3 } from "../styles/TextStyles";

const ProjectsCards = () => {
  return (
    <Wrapper>
      {projects.map((project, index) => (
        <Card key={index}>
          <ImgContainer>
            <img src={project.img} alt={project.alt} />
          </ImgContainer>
          <Content>
            <Title>{project.title}</Title>
            <hr />
            <Description>{project.desc}</Description>
            <LogosContainer>
              {project.techs.map((tech, index) => (
                <img key={index} src={tech.logo} alt={tech.alt} />
              ))}
            </LogosContainer>
            <LinksContainer>
              <a
                href={project.getApp}
                target="_blank"
                rel="noopener noreferrer"
              >
                Demo
              </a>
              <a
                href={project.github}
                target="_blank"
                rel="noopener noreferrer"
              >
                Code
              </a>
            </LinksContainer>
          </Content>
        </Card>
      ))}
    </Wrapper>
  );
};

export default ProjectsCards;

const Wrapper = styled.div`
  margin-top: 150px;
  margin-bottom: 40px;
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(320px, 1fr));
  gap: 2rem;
`;

const Card = styled.article`
  width: 300px;
  height: 450px;
  margin: 0 auto;
  background: white;
  border-radius: 10px;
  box-shadow: 0 12px 9px -5px rgb(0 0 0 / 12%),
    0 10px 32px 0 rgb(0 29 124 / 12%);
  transition: 1s cubic-bezier(0.075, 0.82, 0.165, 1);

  :hover {
    transform: translateY(-4px);
    box-shadow: -2px 2px 10px 3px rgba(0, 0, 0, 0.3);
  }
`;

const ImgContainer = styled.div`
  width: 300px;
  height: 170px;
  overflow: hidden;
  border-radius: 10px 10px 0 0;

  img {
    width: 300px;
  }
`;

const Content = styled.div`
  max-height: 62%;
  padding: 1rem;

  hr {
    width: 70%;
    float: left;
    opacity: 0.7;
  }
`;

const Title = styled(H3)``;

const Description = styled(Caption)`
  clear: both;
  color: rgba(0, 0, 0, 0.8);
  height: 125px;
`;

const LogosContainer = styled.div`
  margin-top: 1rem;

  img {
    padding-left: 1rem;
  }
`;

const LinksContainer = styled.div`
  display: flex;
  width: 70%;
  margin-top: 0.5rem;
  justify-content: space-between;

  a {
    color: white;
    padding: 5px 20px;
    border-radius: 30px;
    background: #0071e3;
    box-shadow: 0px 4px 10px rgba(0, 0, 0, 0.3);
  }
`;
