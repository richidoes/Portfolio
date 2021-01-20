import React from "react";
import styled, { keyframes } from "styled-components";

const ProjectsCubes = () => {
  return (
    <Wrapper>
      <Cube1 src="images/animations/cube-blue.png" />
      <Cube2 src="images/animations/cube-red.png" />
      <Cube3 src="images/animations/cube-green.png" />
    </Wrapper>
  );
};

export default ProjectsCubes;

const blueAnimation = keyframes`
  0%{ transform: translateY(30px) translateX(0px) rotate(10deg); }
  50%{ transform: translateY(-30px) translateX(5px) rotate(-15deg); }
  100%{ transform: translateY(30px) translateX(0px) rotate(10deg); }
`;
const redAnimation = keyframes`
  0%{ transform: translateY(45px) translateX(0px) rotate(45deg); }
  50%{ transform: translateY(-45px) translateX(5px) rotate(20deg); }
  100%{ transform: translateY(45px) translateX(0px) rotate(45deg); }
`;
const greenAnimation = keyframes`
  0%{ transform: translateY(70px) translateX(0px) rotate(50deg); }
  50%{ transform: translateY(-45px) translateX(5px) rotate(25deg); }
  100%{ transform: translateY(70px) translateX(0px) rotate(50deg); }
`;

const Wrapper = styled.div`
  position: relative;
`;

const Cube1 = styled.img`
  position: absolute;
  width: 124px;
  height: 124px;
  top: 20px;
  left: 22%;
  /* transform: rotate(10deg); */
  animation: ${blueAnimation} 10s infinite ease-in-out;

  @media (max-width: 750px) {
    width: 95px;
    height: 95px;
    top: 85px;
    left: 10%;
  }
  @media (max-width: 450px) {
    width: 64px;
    height: 64px;
    top: 40px;
    left: 5%;
  }
  @media (max-width: 320px) {
    width: 54px;
    height: 54px;
    top: 10px;
  }
`;

const Cube2 = styled.img`
  position: absolute;
  width: 84px;
  height: 84px;
  top: 25px;
  left: 55%;
  /* transform: rotate(45deg); */
  animation: ${redAnimation} 10s infinite ease-in-out;
  animation-delay: 2s;

  @media (max-width: 750px) {
    width: 65px;
    height: 65px;
    top: 65px;
    left: 45%;
  }
  @media (max-width: 450px) {
    width: 55px;
    height: 55px;
    top: -100px;
    left: 40%;
  }
  @media (max-width: 320px) {
    width: 45px;
    height: 45px;
    top: -90px;
  }
`;

const Cube3 = styled.img`
  position: absolute;
  width: 110px;
  height: 110px;
  top: 70px;
  left: 78%;
  /* transform: rotate(-50deg); */
  animation: ${greenAnimation} 10s infinite ease-in-out;
  animation-delay: 4s;

  @media (max-width: 750px) {
    width: 98px;
    height: 98px;
    top: 95px;
    left: 72%;
  }
  @media (max-width: 450px) {
    width: 70px;
    height: 70px;
    top: 15px;
  }
  @media (max-width: 320px) {
    width: 60px;
    height: 60px;
    top: -50px;
  }
`;
