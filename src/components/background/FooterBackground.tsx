import React from "react";
import styled from "styled-components";

const FooterBackground: React.FC = () => {
  return (
    <Wrapper>
      <TopWave src="/images/waves/footer-wave2.svg" />
      <Wave src="/images/waves/footer-wave3.svg" />
    </Wrapper>
  );
};

export default FooterBackground;

const Wrapper = styled.div`
  position: relative;
`;

const Wave = styled.img`
  position: absolute;
  z-index: -1;
  top: 250px;

  @media (min-width: 1440px) {
    width: 100%;
  }
`;

const TopWave = styled(Wave)`
  top: 12px;
  transform: scaleY(0.3) scaleX(-1);

  @media (prefers-color-scheme: dark) {
    content: url("images/waves/footer-wave1.svg");
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
