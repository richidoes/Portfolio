import React from "react";
import styled from "styled-components";

const AboutBubbles = () => {
  return (
    <>
      <Bubble />
      <Bubble2 />
      <Bubble3 />
    </>
  );
};

export default AboutBubbles;

const Bubble = styled.div`
  position: absolute;
  width: 450px;
  height: 450px;
  top: 110px;
  left: 15%;
  z-index: -1;
  transition: 500ms;

  background: linear-gradient(180deg, #2fb8ff 0%, #9eecd9 100%);
  border-radius: 50%;

  @media (prefers-color-scheme: dark) {
    background: linear-gradient(200.44deg, #4316db 13.57%, #9076e7 98.38%);
  }
  @media (max-width: 950px) {
    left: 10%;
  }
  @media (max-width: 650px) {
    width: 350px;
    height: 350px;
    top: 150px;
    left: 8%;
  }
  @media (max-width: 485px) {
    width: 250px;
    height: 250px;
  }

  @media (max-width: 350px) {
    width: 200px;
    height: 200px;
  }
`;

const Bubble2 = styled(Bubble)`
  width: 250px;
  height: 250px;
  top: 132px;
  left: 61%;

  @media (max-width: 650px) {
    top: 180px;
    left: 55%;
  }
  @media (max-width: 575px) {
    width: 210px;
    height: 210px;
    top: 170px;
  }
  @media (max-width: 485px) {
    width: 150px;
    height: 150px;
    top: 310px;
  }
  @media (max-width: 350px) {
    width: 110px;
    height: 110px;
  }
`;

const Bubble3 = styled(Bubble)`
  width: 230px;
  height: 230px;
  top: 65%;
  left: 55%;

  @media (max-width: 650px) {
    top: 68%;
    left: 36%;
  }
  @media (max-width: 575px) {
    width: 260px;
    height: 260px;
    top: 62%;
    left: 28%;
  }
  @media (max-width: 485px) {
    width: 250px;
    height: 250px;
    top: 62%;
    left: 8%;
  }
  @media (max-width: 350px) {
    width: 200px;
    height: 200px;
  }
`;
