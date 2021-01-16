import React from "react";
import styled from "styled-components";

const NotfoundBackground: React.FC = () => {
  return (
    <Wrapper>
      <Wave src="/images/waves/testimonial-wave5.svg" style={{ top: "50px" }} />
      <BottomWave src="/images/waves/hero-wave3.svg" style={{ top: "250px" }} />
    </Wrapper>
  );
};

export default NotfoundBackground;

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
