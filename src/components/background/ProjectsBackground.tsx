import React from "react";
import styled from "styled-components";

const ProjectsBackground: React.FC = () => {
  return (
    <Wrapper>
      <Wave src="/images/waves/certificate-wave2.svg" />
      <MidWave src="/images/waves/certificate-wave3.svg" />
      <BottomWave src="/images/waves/hero-wave3.svg" />
    </Wrapper>
  );
};

export default ProjectsBackground;

const Wrapper = styled.div`
  position: relative;
`;

const Wave = styled.img`
  position: absolute;
  top: 150px;
  z-index: -1;
  transition: 1s cubic-bezier(0.075, 0.82, 0.165, 1);

  @media (min-width: 1440px) {
    width: 100%;
  }
`;

const MidWave = styled(Wave)`
  top: 100px;
  transform: scaleY(0.5);

  @media (prefers-color-scheme: dark) {
    content: url("images/waves/courses-wave1-light.svg");
  }
`;

const BottomWave = styled(Wave)`
  top: 450px;

  @media (prefers-color-scheme: dark) {
    content: url("images/waves/hero-wave3-dark.svg");
  }
`;
