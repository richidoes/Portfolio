import React from "react";
import styled from "styled-components";

import SEO from "../components/layout/Seo";
import { GlobalStyle } from "../components/styles/GlobalStyle";
import { H1, H2, Caption } from "../components/styles/TextStyles";
import { themes } from "../components/styles/ColorStyles";
import NotFoundBackground from "../components/background/NotFoundBackground";

const NotFoundPage: React.FC = () => {
  return (
    <Wrapper>
      <GlobalStyle />
      <SEO
        title="Error 404: Not found - Ricardo De Leon"
        description="Default screen for 404 error"
      />
      <NotFoundBackground />
      <Container>
        <Title>404</Title>
        <Message>How did you get here?</Message>
        <Message>It seems you got lost... </Message>
        <a href="/" style={{ width: 320 }}>
          <Link>
            <Button>Go back home</Button>{" "}
          </Link>
        </a>
      </Container>
    </Wrapper>
  );
};

export default NotFoundPage;

const Wrapper = styled.div`
  overflow: hidden;
`;

const Container = styled.div`
  width: 932px;
  height: 422px;
  margin: 100px auto;
  padding: 20px;

  background: rgba(15, 14, 71, 0.25);
  box-shadow: 0 8px 32px 0 rgba(31, 38, 135, 0.37);
  backdrop-filter: blur(4px);
  border: 1px solid rgba(255, 255, 255, 0.18);

  border-radius: 40px;

  @media (prefers-color-scheme: light) {
    background: rgba(255, 255, 255, 0.3);
    border: 0.5px solid rgba(255, 255, 255, 0.5);
    box-shadow: 0px 50px 60px rgba(0, 0, 0, 0.25);
  }
  @media (max-width: 900px) {
    width: 770px;
    height: 520px;
  }
  @media (max-width: 768px) {
    width: 500px;
    height: 620px;
  }
  @media (max-width: 550px) {
    width: 320px;
    height: 420px;
    padding: 0;
  }
  @media (max-width: 322px) {
    width: 270px;
    height: 445px;
  }
`;

const Title = styled(H1)`
  color: ${themes.dark.text1};
  text-align: center;

  @media (prefers-color-scheme: light) {
    color: ${themes.light.text1};
  }
  @media (max-width: 550px) {
    margin-top: 40px;
    font-size: 30px;
  }
`;

const Message = styled(H2)`
  color: ${themes.dark.text2};
  text-align: center;
  margin-top: 40px;

  @media (prefers-color-scheme: light) {
    color: ${themes.light.text2};
  }
  @media (max-width: 768px) {
    margin-top: 100px;
  }
  @media (max-width: 550px) {
    margin-top: 40px;
    font-size: 20px;
  }
`;

const Link = styled.div`
  position: absolute;
  top: 340px;
  left: 315px;

  @media (max-width: 900px) {
    top: 440px;
    left: 230px;
  }
  @media (max-width: 768px) {
    top: 540px;
    left: 88px;
  }
  @media (max-width: 550px) {
    top: 355px;
    left: 60px;
  }
  @media (max-width: 320px) {
    top: 380px;
    left: 33px;
  }
`;

const Button = styled(Caption)`
  width: 320px;
  height: 44px;
  display: flex;
  align-items: center;
  justify-content: center;
  color: ${themes.dark.text2};

  background: linear-gradient(91.4deg, #2fb8ff 0%, #9eecd9 100%);
  box-shadow: 0px 20px 40px rgba(147, 231, 221, 0.3);
  border-radius: 30px;

  @media (prefers-color-scheme: light) {
    color: ${themes.light.text2};
  }
  @media (max-width: 550px) {
    width: 200px;
  }
`;
