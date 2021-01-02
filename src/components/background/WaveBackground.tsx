import React from "react";
import styled from "styled-components";

const WaveBackground: React.FC = () => {
  return (
    <Wrapper>
      <Background />
      <Wave src="/images/waves/wave1.png" style={{ top: "0px" }} />
      <Wave src="/images/waves/hero-wave2.svg" style={{ top: "350px" }} />
      <BottomWave src="/images/waves/hero-wave3.svg" style={{ top: "550px" }} />
    </Wrapper>
  );
};

export default WaveBackground;

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

const BottomWave = styled(Wave)`
  @media (prefers-color-scheme: dark) {
    content: url("images/waves/hero-wave3-dark.svg");
  }
`;

const Background = styled.div`
  background: linear-gradient(180deg, #4316db 0%, #22c390 100%);
  // #4316db #9076e7
  position: absolute;
  width: 100%;
  height: 800px;
  z-index: -1;
`;
