import React from "react";
import styled from "styled-components";

import SocialButtonsAbout from "../buttons/SocialButtonsAbout";
import { themes } from "../styles/ColorStyles";
import { H3, MediumText } from "../styles/TextStyles";

const AboutSection: React.FC = () => {
  return (
    <Wrapper>
      <Title>Sobre Mi</Title>
      <Backbox />
      <AboutWrapper>
        <ContentWrapper>
          <TextWrapper>
            <Text>
              Hola, mi nombre es Ricardo De Leon, soy un desarrollador front-end
              altamente apasionado y profesional.
              <br />
              <br />
              Mi pasion siempre ha sido el desarrollo de software, pero sobre
              todo, que este cuente con un diseño atractivo, que enganche a
              quien lo use y que haga de su experiencia, un recuerdo
              inolvidable.
              <br />
              <br />
              Tengo experiencia en desarrollos que van desde sitios construidos
              usando HTML, CSS y Javascript, hasta el desarrollo de aplicaciones
              web con React y aplicaciones móviles multi-plataforma con Expo y
              React Native.
              <br />
              <br />
              Si estas interesado en trabajar conmigo o contratarme, puedes
              contactarme mediante mi correo o mis redes sociales.
              <br />
              <br />
              !Estoy emocionado por que creeemos las aplicaciones del futuro!
            </Text>
          </TextWrapper>
          <SocialButtonsAbout />
        </ContentWrapper>
      </AboutWrapper>
    </Wrapper>
  );
};

export default AboutSection;

const Wrapper = styled.div`
  position: relative;
  max-width: 1234px;
  margin: 0 auto;
  padding: 550px 30px 100px 30px;

  @media (max-width: 770px) {
    padding: 700px 30px 100px 30px;
  }
  @media (max-width: 550px) {
    padding: 480px 30px 100px 30px;
  }
`;

const Backbox = styled.div`
  position: absolute;
  width: 935px;
  height: 420px;
  top: 80px;
  left: calc(50% - 932px / 2);
  background: linear-gradient(180deg, #2fb8ff 0%, #9eecd9 100%);
  backdrop-filter: blur(40px);

  mix-blend-mode: normal;
  border-radius: 60px 60px 60px 60px;
  transform: matrix(1, 0.03, 0, 0.99, 7, 10);
  z-index: -1;

  @media (prefers-color-scheme: dark) {
    background: linear-gradient(200.44deg, #4316db 13.57%, #9076e7 98.38%);
  }

  @media (max-width: 900px) {
    width: 770px;
    height: 520px;
    left: 5%;
    transform: matrix(1, 0.02, 0, 0.99, 25, 12);
  }

  @media (max-width: 768px) {
    width: 500px;
    height: 620px;
  }

  @media (max-width: 550px) {
    width: 328px;
    height: 420px;
    top: 50px;
    transform: matrix(1, 0.04, 0, 0.99, 11, 10);
  }
`;

const AboutWrapper = styled.div`
  position: absolute;
  width: 932px;
  height: 422px;
  top: 80px;
  left: calc(50% - 932px / 2);
  padding: 20px;

  background: rgba(15, 14, 71, 0.25);
  box-shadow: 0 8px 32px 0 rgba(31, 38, 135, 0.37);
  backdrop-filter: blur(40px);
  border: 1px solid rgba(255, 255, 255, 0.18);

  border-radius: 40px;

  @media (prefers-color-scheme: light) {
    background: rgba(255, 255, 255, 0.3);
    border: 0.5px solid rgba(255, 255, 255, 0.5);
    box-shadow: 0px 50px 100px rgba(0, 0, 0, 0.25);
    backdrop-filter: blur(40px);
  }

  @media (max-width: 900px) {
    width: 770px;
    height: 520px;
    left: 5%;
    margin: 0 10px;
  }

  @media (max-width: 768px) {
    width: 500px;
    height: 620px;
  }

  @media (max-width: 550px) {
    width: 320px;
    height: 420px;
    top: 50px;
    padding: 10px;
  }
`;

const ContentWrapper = styled.div`
  display: grid;
  grid-template-columns: 230px auto;
  margin: 20px 0px;

  @media (max-width: 900px) {
    grid-template-columns: auto;
    gap: 30px;
  }

  @media (max-width: 768px) {
    gap: 20px;
  }
`;

const Title = styled(H3)`
  position: absolute;
  width: 140px;
  height: 40px;
  left: 45%;
  top: 5px;

  line-height: 130%;
  color: ${themes.dark.text2};

  @media (prefers-color-scheme: light) {
    color: #3913b8;
  }
  @media (max-width: 768px) {
    left: 33%;
  }
`;

const TextWrapper = styled.div`
  width: 625px;

  margin: 0px 8px;
  order: 1;

  @media (max-width: 900px) {
    width: 712px;
    order: 0;
  }
  @media (max-width: 768px) {
    width: 438px;
  }
  @media (max-width: 550px) {
    width: 280px;
  }
`;

const Text = styled(MediumText)`
  color: ${themes.dark.text2};
  text-align: justify;

  @media (prefers-color-scheme: light) {
    color: rgb(0 0 0 / 90%);
  }
  @media (max-width: 550px) {
    font-size: 12px;
  }
`;
