import React from "react";
import styled from "styled-components";

import FooterBackground from "../background/FooterBackground";
import { BodyIntro, MediumText } from "../styles/TextStyles";
import { themes } from "../styles/ColorStyles";
import SocialButtonsFooter from "../buttons/SocialButtonsFooter";

const FooterSection = () => {
  return (
    <Wrapper id="footerSection">
      <FooterBackground />
      <ContentWrapper>
        <Text id="contact">Contactame</Text>
        <SocialButtonsFooter />
        <Info id="owner">Ricardo De Leon &copy; 2021</Info>
      </ContentWrapper>
    </Wrapper>
  );
};

export default FooterSection;

const Wrapper = styled.div`
  overflow: hidden;
`;

const ContentWrapper = styled.div`
  max-width: 1234px;
  margin: 0 auto;
  margin-top: 150px;
  padding: 200px 30px 100px 30px;
  display: grid;

  #owner {
    align-items: flex-end;
    height: 150px;
  }
`;

const Text = styled(BodyIntro)`
  display: flex;
  height: 100px;
  margin-bottom: 25px;
  justify-content: center;
  align-items: center;
  color: ${themes.dark.text2};

  @media (max-width: 750px) {
    font-size: 20px;
  }
`;
const Info = styled(MediumText)`
  display: flex;
  height: 100px;
  justify-content: center;
  align-items: center;
  color: ${themes.dark.text2};

  @media (max-width: 750px) {
    font-size: 15px;
  }
`;
