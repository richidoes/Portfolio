import React from "react";
import styled from "styled-components";

import SocialButtons from "../buttons/SocialButtons";
import { H3, MediumText } from "../styles/TextStyles";

const AboutSection: React.FC = () => {
  return (
    <Wrapper>
      <ContentWrapper>
        {/* <Title>Sobre Mi</Title> */}
        <TextWrapper>
          <Text>
            Hola, mi nombre es Ricardo De Leon, soy un desarrollador front-end
            altamente apasionado y profesional.
            <br />
            <br />
            Mi pasion siempre ha sido el desarrollo de software, pero sobre
            todo, que este cuente con un diseño atractivo, que enganche a quien
            lo use y que haga de su experiencia, un recuerdo inolvidable.
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
        {/* <SocialWrapper> */}
        <SocialButtons />
        {/* </SocialWrapper> */}
      </ContentWrapper>
      <img src=""></img>
    </Wrapper>
  );
};

export default AboutSection;

const Wrapper = styled.div`
  position: absolute;
  width: 932px;
  height: 422px; //400
  left: calc(50% - 932px / 2);
  padding: 20px;

  background: rgba(15, 14, 71, 0.3);
  border: 0.5px solid rgba(255, 255, 255, 0.2);
  box-sizing: border-box;
  box-shadow: 0px 50px 100px rgba(0, 0, 0, 0.25);
  backdrop-filter: blur(40px);
  /* Note: backdrop-filter has minimal browser support */

  border-radius: 20px;
`;

const ContentWrapper = styled.div`
  display: grid;
  grid-template-columns: 230px auto;
  margin: 20px 0px;
`;

const Title = styled(H3)`
  position: absolute;
  width: 200px;
  height: 80px;
  left: 45%;
  top: 5px;

  font-family: -apple-system, BlinkMacSystemFont, "Segoe UI", Roboto, Oxygen,
    Ubuntu, Cantarell, "Open Sans", "Helvetica Neue", sans-serif;
  line-height: 130%;

  color: rgba(255, 255, 255, 0.7);
`;

const TextWrapper = styled.div`
  width: 625px;
  height: 345px;
  margin: 0px 8px;
  order: 1;
`;

const Text = styled(MediumText)`
  font-family: -apple-system, BlinkMacSystemFont, "Segoe UI", Roboto, Oxygen,
    Ubuntu, Cantarell, "Open Sans", "Helvetica Neue", sans-serif;
  color: rgba(255, 255, 255, 0.7);
  text-align: justify;
`;

const SocialWrapper = styled.div`
  overflow: hidden;
  display: flex;
  align-items: center;
  justify-content: flex-start;
  width: 200px;
  height: 345px;
`;
