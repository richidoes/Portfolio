import React from "react";
import styled from "styled-components";

import { H2 } from "../styles/TextStyles";
import { themes } from "../styles/ColorStyles";
import ProjectsBackground from "../background/ProjectsBackground";
import ProjectsCards from "../layout/ProjectsCards";

const ProjectsSection = () => {
  return (
    <Wrapper id="projectsSection">
      <ProjectsBackground />
      <Container>
        <Title>Projects</Title>
        <ProjectsCards />
      </Container>
    </Wrapper>
  );
};

export default ProjectsSection;

const Wrapper = styled.div`
  margin-top: 60px;
  overflow: hidden;
`;

const Container = styled.div`
  max-width: 1234px;
  min-height: 100vh;
  margin: 0 auto;
  padding: 60px 20px 0px;

  h2 {
    text-align: center;
  }

  @media (max-width: 450px) {
    padding: 60px 0px 0px;
  }
`;

const Title = styled(H2)`
  color: ${themes.dark.text2};

  @media (prefers-color-scheme: light) {
    color: #3913b8;
  }
`;
