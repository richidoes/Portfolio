import React from "react";
import styled from "styled-components";

import FooterBackground from "../background/FooterBackground";
import { H2, MediumText } from "../styles/TextStyles";
import { themes } from "../styles/ColorStyles";
import SocialLinks from "../buttons/SocialLinks";

const FooterSection = () => {
  const year = new Date().getFullYear();

  return (
    <Wrapper id="footerSection">
      <FooterBackground />
      <ContentWrapper>
        <Title>Contact me</Title>
        <SocialLinks />
        <Info>
          Built with
          <img src="images/logos/gatsby-logo.svg" alt="gatsby logo" />
          <img src="images/logos/logo-react.svg" alt="react logo" />
          by Ricardo De Leon
          <img src="images/logos/logo-rick.svg" alt="personal logo" />
          {year}
        </Info>
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
  min-height: 100vh;
  margin: 0 auto;
  margin-top: 150px;
  padding: 230px 20px 0px;
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  align-items: center;
`;

const Title = styled(H2)`
  color: ${themes.dark.text2};

  @media (max-width: 550px) {
    font-size: 20px;
  }
`;

const Info = styled(MediumText)`
  padding-bottom: 1rem;
  text-align: center;
  color: ${themes.dark.text2};

  img {
    height: 24px;
    padding: 0 5px;

    @media (max-width: 550px) {
      height: 18px;
    }
  }

  @media (max-width: 550px) {
    font-size: 13px;
  }
`;
