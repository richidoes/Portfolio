import React from "react";
import styled from "styled-components";

import { H3 } from "../styles/TextStyles";
import { themes } from "../styles/ColorStyles";
import Carousel from "../tooltips/Carousel";

const SkillsSection = () => {
  return (
    <Wrapper>
      <Title>Habilidades</Title>
      <Carousel />
    </Wrapper>
  );
};

export default SkillsSection;

const Wrapper = styled.div`
  position: relative;
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
  @media (max-width: 450px) {
    margin-bottom: 0;
  }
`;
