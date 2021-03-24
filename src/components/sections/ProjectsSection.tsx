import React from "react";
import styled from "styled-components";

import { H2 } from "../styles/TextStyles";
import { themes } from "../styles/ColorStyles";
import SkillsBackground from "../background/SkillsBackground";
import Cards from "../layout/Cards";

const ProjectsSection = () => {
  return (
    <Wrapper id="projectsSection">
      <SkillsBackground />
      <Container>
        <Title>Proyectos</Title>
        <Cards />
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
`;

const Title = styled(H2)`
  color: ${themes.dark.text2};

  @media (prefers-color-scheme: light) {
    color: #3913b8;
  }
`;
