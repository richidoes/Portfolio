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
  top: 290px;

  @media (min-width: 1440px) {
    width: 100%;
  }
`;

const TopWave = styled(Wave)`
  top: 50px;
  transform: scaleY(0.3) scaleX(-1);

  @media (prefers-color-scheme: dark) {
    content: url("images/waves/footer-wave1.svg");
  }
`;
