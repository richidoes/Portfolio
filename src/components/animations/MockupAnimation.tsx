import React from "react";
import styled from "styled-components";

const MockupAnimation: React.FC = () => {
  return (
    <Wrapper>
      <div className="mockup1" />
      <div className="mockup2" />
      <div className="mockup3" />
      <div className="mockup4" />
      <div className="mockup5" />
    </Wrapper>
  );
};
export default MockupAnimation;

const Wrapper = styled.div`
  position: relative;
  perspective: 5000;

  @media (max-width: 768px) {
    transform: scale(0.6);
    transform-origin: top left;
  }

  @media (max-width: 660px) {
    display: none;
  }

  div {
    transform: rotateY(-20deg) rotateX(20deg);
    transform-origin: bottom left;
  }
  * {
    transition: 1s cubic-bezier(0.075, 0.82, 0.165, 1);
  }

  :hover div {
    //hover divs
    transform: rotateY(0deg) rotateX(0deg);
    // hover specific
    &.mockup1 {
      transition-delay: 0.1s;
      transform: translate(-30px, -30px);
    }
    &.mockup2 {
      transition-delay: 0.2s;
      transform: translate(0px, -30px);
    }
    &.mockup3 {
      transition-delay: 0s;
    }
    &.mockup4 {
      transition-delay: 0.1s;
      transform: translate(-120px, 30px);
    }
    &.mockup5 {
      transition-delay: 0.2s;
      /* transform: translate(-90px, 30px); */
      transform: translate(5px, 8px);
    }
    :hover {
      //self
      filter: brightness(150%) saturate(120%);
    }
  }

  .mockup1 {
    position: absolute;
    width: 183px;
    height: 120px;
    left: 0px;
    top: 0px;

    background: url("images/animations/mockup1.svg"),
      linear-gradient(200.42deg, #844ffc 13.57%, #491eb8 98.35%);
    border: 0.5px solid rgba(255, 255, 255, 0.3);

    box-shadow: 0px 16.3881px 32.7761px rgba(99, 30, 187, 0.5);
    backdrop-filter: blur(21.8507px);
    /* Note: backdrop-filter has minimal browser support */

    border-radius: 16px;
  }
  .mockup2 {
    position: absolute;
    width: 183px;
    height: 120px;
    left: 214px;
    top: 0px;

    background: url("images/animations/mockup2.svg"),
      linear-gradient(184.82deg, #29a69e 3.89%, #75d1cc 96.11%);
    border: 0.5px solid rgba(255, 255, 255, 0.3);

    box-shadow: 0px 8.19119px 16.3824px rgba(0, 0, 0, 0.1),
      0px 16.3824px 32.7648px rgba(0, 0, 0, 0.15);
    backdrop-filter: blur(21.8432px);
    /* Note: backdrop-filter has minimal browser support */

    border-radius: 16px;
  }

  .mockup3 {
    position: absolute;
    width: 701px;
    height: 428px;
    left: 37px;
    top: 60px;

    background: url("images/animations/mockup3.svg"), rgba(23, 12, 61, 0.5);
    box-shadow: inset 0px 0px 0px 0.5px rgba(255, 255, 255, 0.2);
    backdrop-filter: blur(27.3844px);
    /* Note: backdrop-filter has minimal browser support */

    border-radius: 8px;
  }

  .mockup4 {
    position: absolute;
    width: 399px;
    height: 274px;
    left: 78px;
    top: 228px;

    background: url("images/animations/mockup4.svg"), rgba(39, 20, 62, 0.3);
    box-shadow: inset 0px 0px 0px 0.5px rgba(255, 255, 255, 0.2);
    backdrop-filter: blur(20px);
    /* Note: backdrop-filter has minimal browser support */

    border-radius: 8px;
  }

  .mockup5 {
    position: absolute;
    width: 412px;
    height: 274px;
    left: 375px;
    top: 250px;

    background: url("images/animations/mockup5.svg"), rgba(39, 20, 62, 0.3);
    box-shadow: inset 0px 0px 0px 0.5px rgba(255, 255, 255, 0.2);
    backdrop-filter: blur(20px);
    /* Note: backdrop-filter has minimal browser support */

    border-radius: 8px;
  }
`;
