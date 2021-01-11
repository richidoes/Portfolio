import React from "react";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import styled from "styled-components";

import { skills } from "../../data/cardsData";
import { H3 } from "../styles/TextStyles";
import { themes } from "../styles/ColorStyles";

const Carousel: React.FC = () => {
  let settings = {
    dots: true,
    infinite: true,
    speed: 900,
    slidesToShow: 4,
    slidesToScroll: 4,
    responsive: [
      {
        breakpoint: 1350,
        settings: {
          slidesToShow: 3,
          slidesToScroll: 3,
          speed: 900,
        },
      },
      {
        breakpoint: 900,
        settings: {
          slidesToShow: 2,
          slidesToScroll: 2,
          speed: 700,
        },
      },
      {
        breakpoint: 750,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1,
          initialSlide: 1,
          speed: 500,
        },
      },
    ],
  };

  return (
    <Wrapper>
      <Slider {...settings}>
        {skills.map((card, index) => (
          <Container key={index}>
            <BackBox style={{ background: card.background }} />
            <CardWrapper>
              <Cover>
                <Image src={card.logo} resizeMode="contain" />
                <Title>{card.title}</Title>
              </Cover>
              <Knowledge>
                {card.knowledge.map((item, index) => (
                  <li key={index}>{item.title}</li>
                ))}
              </Knowledge>
            </CardWrapper>
          </Container>
        ))}
      </Slider>
    </Wrapper>
  );
};

export default Carousel;

const Wrapper = styled.div`
  //container styles
  max-width: 1634px;
  height: 450px;
  margin: 0 auto;

  @media (max-width: 1650px) {
    width: 1350px;
  }
  @media (max-width: 1350px) {
    width: 900px;
  }
  @media (max-width: 900px) {
    width: 600px;
  }
  @media (max-width: 750px) {
    width: 325px;
  }

  //slider styles
  .slick-slider {
    .slick-dots {
      bottom: -2.5vw;
      li {
        button {
          width: 20px;
          height: 20px;
          border: 1px solid #fff;
          border-radius: 20px;

          @media (prefers-color-scheme: light) {
            border: 1px solid #000;
          }
          &:before {
            position: absolute;
            top: 50%;
            left: 50%;
            width: 10px;
            height: 10px;
            border-radius: 10px;
            content: "";
            text-align: center;
            opacity: 0.5;
            color: #fff;
            background-color: #fff;
            transform: translate(-50%, -50%);
            transition: all 0.3s ease-in-out;

            @media (prefers-color-scheme: light) {
              background-color: #000;
            }
          }
        }
        &.slick-active,
        &:hover {
          button {
            border-color: tomato;
            &:before {
              background-color: tomato;
              opacity: 1;
            }
          }
        }
      }
    }

    .slick-prev:hover,
    .slick-prev:focus,
    .slick-next:hover,
    .slick-next:focus {
      color: #000;
      outline: none;
    }
    .slick-prev:before,
    .slick-next:before {
      color: ${themes.dark.text2};
      font-size: 35px;

      @media (prefers-color-scheme: light) {
        color: ${themes.light.text2};
      }
    }
    .slick-next {
      right: -25px;
    }
    .slick-prev {
      left: -40px;
    }
  }
`;

const Container = styled.div`
  position: relative;
  margin-top: 30px;
  margin-left: 40px;
  margin-bottom: 40px;
`;

const BackBox = styled.div`
  position: absolute;
  z-index: -1;
  width: 240px;
  height: 340px;

  border-radius: 40px;
  transform: matrix(1, 0.03, 0, 0.99, 7, 10);
`;

const CardWrapper = styled.div`
  width: 240px;
  height: 340px;
  background: rgba(15, 14, 71, 0.25);
  box-shadow: 0 8px 32px 0 rgba(31, 38, 135, 0.37);
  backdrop-filter: blur(4px);
  border: 1px solid rgba(255, 255, 255, 0.18);
  border-radius: 40px;

  @media (prefers-color-scheme: light) {
    background: rgba(255, 255, 255, 0.25);
    box-shadow: 0 8px 32px 0 rgba(31, 38, 135, 0.37);
    backdrop-filter: blur(4px);
  }
`;

const Cover = styled.div`
  padding: 20px;
  width: 100%;
  height: 200px;
`;

const Image = styled.img`
  margin: 0 auto;
  width: 100px;
  height: 95px;
`;

const Title = styled(H3)`
  color: ${themes.dark.text1};
  text-align: center;
  margin-top: 20px;

  @media (prefers-color-scheme: light) {
    color: rgb(0 0 0 / 90%);
  }
`;

const Knowledge = styled.ul`
  height: 135px;
  display: flex;
  flex-direction: column;
  justify-content: space-evenly;
  text-align: center;

  li {
    color: ${themes.dark.text1};
    font-size: 1.1rem;

    @media (prefers-color-scheme: light) {
      color: rgb(0 0 0 / 90%);
    }
  }
`;
