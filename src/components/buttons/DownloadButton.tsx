import React from "react";
import styled from "styled-components";
import { Caption2, SmallText } from "../styles/TextStyles";

interface AppProps {
  title: string;
  subtitle: string;
}

const DownloadButton: React.FC<AppProps> = ({ title, subtitle }) => {
  return (
    <Link
      href="https://drive.google.com/uc?export=download&id=15WSMScOtAdpaciqN7s6Ir5kpj91YvTAv"
      target="_blank"
      rel="noopener noreferrer"
    >
      <Wrapper>
        <IconWrapper>
          <Icon src="images/icons/billing.svg" />
          <Ring src="images/icons/icon-ring.svg" />
        </IconWrapper>
        <TextWrapper>
          <Title>{title}</Title>
          <Subtitle>{subtitle}</Subtitle>
        </TextWrapper>
      </Wrapper>
    </Link>
  );
};

export default DownloadButton;

const Wrapper = styled.div`
  max-width: 280px;
  height: 77px;
  padding: 12px;
  background: linear-gradient(180deg, #ffffff 0%, #d9dfff 100%);
  box-shadow: 0px 1px 3px rgba(0, 0, 0, 0.1),
    0px 20px 40px rgba(23, 0, 102, 0.2),
    inset 0px 0px 0px 0.5px rgba(255, 255, 255, 0.5);
  border-radius: 20px;
  border: 0px;
  display: grid;
  grid-template-columns: 53px auto;
  align-items: center;
  gap: 20px;

  *,
  & {
    //with this all child elements and sub-child elements will have these same properties
    transition: 1s cubic-bezier(0.075, 0.82, 0.165, 1);
  }
  :hover {
    box-shadow: 0px 1px 3px rgba(0, 0, 0, 0.1),
      0px 30px 60px rgba(23, 0, 102, 0.5),
      inset 0px 0px 0px 0.5px rgba(255, 255, 255, 0.5);
    transform: translateY(-3px);
  }

  @media (max-width: 450px) {
    height: 70px;
    a {
      width: 240px;
      height: 70px;
    }
  }
`;

const Link = styled.a`
  width: 280px;

  @media (max-width: 450px) {
    width: 220px;
    height: 70px;
  }
`;

const Title = styled(Caption2)`
  color: black;

  @media (max-width: 450px) {
    font-size: 13px;
  }
`;

const Subtitle = styled(SmallText)`
  color: black;
  opacity: 0.7;
`;

const IconWrapper = styled.div`
  width: 45px;
  height: 45px;
  background: linear-gradient(200.44deg, #4316db 13.57%, #9076e7 98.38%);
  border-radius: 50%;
  display: grid;
  justify-content: center;
  align-items: center;
  justify-self: center;
  position: relative;

  ${Wrapper}:hover & {
    //when hover wrapper do this to IconWrapper
    filter: hue-rotate(10deg) brightness(150%) saturate(120%);
  }

  @media (max-width: 450px) {
    width: 38px;
    height: 38px;
  }
`;

const TextWrapper = styled.div`
  display: grid;
  gap: 4px;
`;

const Icon = styled.img`
  width: 29px;
  height: 29px;

  @media (max-width: 450px) {
    width: 20px;
    height: 20px;
  }
`;

const Ring = styled.img`
  position: absolute;
  top: -15px;
  left: -16px;

  @media (max-width: 450px) {
    top: -16px;
    left: -17px;
    width: 80px;
  }

  ${Wrapper}:hover & {
    //when hover wrapper do this to ring
    transform: rotate(30deg) scale(1.2) translate(1px, 1px);
  }
`;
