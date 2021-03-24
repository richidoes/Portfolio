import styled from "styled-components";

export const H1: HTMLElement = styled.h1`
  font-weight: bold;
  font-size: 60px;
`;

export const H2: HTMLElement = styled.h2`
  font-weight: bold;
  font-size: 40px;

  @media (max-width: 450px) {
    font-size: 28px;
  }
`;
export const H3: HTMLElement = styled.h3`
  font-size: 28px;

  @media (max-width: 450px) {
    font-size: 24px;
  }
`;
export const BodyIntro: HTMLElement = styled.p`
  font-weight: 500;
  font-size: 24px;
  line-height: 140%;
`;
export const BodyMain: HTMLElement = styled.p`
  font-weight: normal;
  font-size: 20px;
  line-height: 140%;
`;
export const MediumText: HTMLElement = styled.p`
  font-weight: normal;
  font-size: 18px;
  line-height: 140%;
`;
export const Caption: HTMLElement = styled.p`
  font-weight: 500;
  font-size: 15px;
  line-height: 18px;
`;
export const Caption2: HTMLElement = styled.p`
  font-weight: 600;
  font-size: 15px;
  line-height: 18px;
  text-transform: uppercase;
`;
export const SmallText: HTMLElement = styled.p`
  font-weight: normal;
  font-size: 13px;
  line-height: 130%;
`;
export const SmallText2: HTMLElement = styled.p`
  font-weight: 600;
  font-size: 13px;
  line-height: 130%;
  text-transform: uppercase;
`;
