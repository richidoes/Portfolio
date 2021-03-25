import React from "react";
import styled from "styled-components";

import { H2 } from "../styles/TextStyles";
import { themes } from "../styles/ColorStyles";
import SkillsSlider from "../animations/SkillsSlider";

const SkillsSection = () => {
  return (
    <Wrapper id="skillsSection">
      <Container>
        <Title>Skills</Title>
        <SkillsSlider />
      </Container>
    </Wrapper>
  );
};

export default SkillsSection;

const Wrapper = styled.div`
  max-width: 1234px;
  min-height: 60vh;
  margin: 0 auto;
  margin-top: 60px;
  display: flex;
  flex-direction: row;
  justify-content: center;
`;

const Container = styled.div`
  padding: 60px 20px 0px;

  h2 {
    text-align: center;
    align-self: flex-start;
  }
`;

const Title = styled(H2)`
  color: ${themes.dark.text2};

  @media (prefers-color-scheme: light) {
    color: #3913b8;
  }
`;
