import React from "react";
import styled, { keyframes } from "styled-components";
import { H1, MediumText } from "../styles/TextStyles";
import { themes } from "../styles/ColorStyles";

import MockupAnimation from "../animations/MockupAnimation";
import WaveBackground from "../background/WaveBackground";
import DownloadButton from "../buttons/DownloadButton";
import SocialLinks from "../buttons/SocialLinks";

const AuthorSection: React.FC = () => {
  return (
    <Wrapper>
      <WaveBackground />
      <ContentWrapper>
        <TextWrapper>
          <Title>
            Ricardo <br />
            De Leon <br />
            <span>
              Front-end
              <br />
              Developer
            </span>
          </Title>
          <Description>
            Development of web sites and applications, as well as cross-platform
            mobile applications.
          </Description>
          <DownloadButton title="Resume (cv)" subtitle="Download" />
          <SocialLinks />
        </TextWrapper>
        <MockupAnimation />
      </ContentWrapper>
    </Wrapper>
  );
};

export default AuthorSection;

const animation = keyframes`
  from { opacity: 0; transform: translateY(-10px); filter: blur(10px); }
  to { opacity: 1; transform: translateY(0px); filter: blur(0px); }
`;

const Wrapper = styled.div`
  overflow: hidden;
`;

const ContentWrapper = styled.div`
  max-width: 1234px;
  min-height: 100vh;
  margin: 0 auto;
  padding: 200px 20px 50px 20px;
  display: grid;
  grid-template-columns: repeat(auto-fill, minmax(300px, 1fr));
  gap: 80px;

  @media (max-width: 768px) {
    gap: unset;
  }
  @media (max-width: 650px) {
    grid-template-columns: unset;
    place-items: center;
  }
`;

const TextWrapper = styled.div`
  display: grid;
  gap: 30px;

  > * {
    //apply to immediate children
    opacity: 0;
    animation: ${animation} 1s forwards;

    :nth-child(1) {
      animation-delay: 0s;
    }
    :nth-child(2) {
      animation-delay: 0.2s;
    }
    :nth-child(3) {
      animation-delay: 0.4s;
    }
  }

  @media (max-width: 650px) {
    a,
    div {
      margin: auto;
    }
  }
`;

const Title = styled(H1)`
  color: ${themes.dark.text1};
  background: linear-gradient(180deg, #730040 0%, #301cbe 100%);
  background-clip: text;
  -webkit-background-clip: text;
  color: transparent;

  span {
    background: linear-gradient(180deg, #ffd7ff 0%, #ffb6ff 100%);
    background-clip: text;
    -webkit-background-clip: text;
    color: transparent;
  }

  @media (max-width: 768px) {
    font-size: 50px;
  }
  @media (max-width: 650px) {
    font-size: 60px;
    text-align: center;
  }
  @media (max-width: 450px) {
    font-size: 45px;
  }
  @media (max-width: 350px) {
    font-size: 34px;
  }
`;

const Description = styled(MediumText)`
  @media (max-width: 650px) {
    width: 420px;
    text-align: center;
  }
  @media (max-width: 450px) {
    width: unset;
    font-size: 16px;
  }
  @media (max-width: 350px) {
    font-size: 14px;
  }
`;
