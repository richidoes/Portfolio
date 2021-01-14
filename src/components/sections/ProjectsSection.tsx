import React from "react";
import styled from "styled-components";

import { H3 } from "../styles/TextStyles";
import { themes } from "../styles/ColorStyles";
import Projects from "../layout/Projects";

const ProjectsSection = () => {
  return (
    <Wrapper>
      <Title>Proyectos</Title>
      <Projects />
    </Wrapper>
  );
};

export default ProjectsSection;

const Wrapper = styled.div`
  position: relative;
  margin-top: 150px;
`;

const Title = styled(H3)`
  width: 140px;
  height: 40px;
  margin: 0 auto;
  margin-bottom: 30px;

  line-height: 130%;

  color: ${themes.dark.text2};

  @media (prefers-color-scheme: light) {
    color: #3913b8;
  }
`;
