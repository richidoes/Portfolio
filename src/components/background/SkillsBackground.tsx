import React from "react";
import styled from "styled-components";

const SkillsBackground: React.FC = () => {
  return (
    <Wrapper>
      <Wave src="/images/waves/certificate-wave2.svg" style={{ top: "0px" }} />
      <MidWave src="/images/waves/certificate-wave3.svg" />
      <BottomWave src="/images/waves/hero-wave3.svg" />
    </Wrapper>
  );
};

export default SkillsBackground;

const Wrapper = styled.div`
  position: relative;
`;

const Wave = styled.img`
  position: absolute;
  z-index: -1;

  @media (min-width: 1440px) {
    width: 100%;
  }
`;

const MidWave = styled(Wave)`
  top: -180px;
  transform: scaleY(0.5);

  @media (prefers-color-scheme: dark) {
    content: url("images/waves/courses-wave1-light.svg");
  }
  @media (max-width: 1600px) {
    top: -40px;
  }
`;

const BottomWave = styled(Wave)`
  top: 250px;

  @media (prefers-color-scheme: dark) {
    content: url("images/waves/hero-wave3-dark.svg");
  }
  /* @media(max-width: 1200px){

  } */
`;
