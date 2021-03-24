import React from "react";
import styled from "styled-components";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import Slider from "react-slick";

import { skills } from "../../data/skillsData";

const SkillsSlider = () => {
  let settings = {
    arrows: false,
    infinite: true,
    slidesToShow: 5,
    slidesToScroll: 1,
    autoplay: true,
    speed: 1500,
    autoplaySpeed: 0,
    cssEase: "linear",
    responsive: [
      {
        breakpoint: 900,
        settings: {
          slidesToShow: 4,
          slidesToScroll: 1,
        },
      },
      {
        breakpoint: 750,
        settings: {
          slidesToShow: 3,
          slidesToScroll: 1,
        },
      },
      {
        breakpoint: 425,
        settings: {
          slidesToShow: 2,
          slidesToScroll: 1,
        },
      },
    ],
  };

  return (
    <Wrapper>
      <Slider {...settings}>
        {skills.map(({ logo, alt }, index) => (
          <Slide key={index}>
            <img src={logo} alt={alt} />
          </Slide>
        ))}
      </Slider>
    </Wrapper>
  );
};

export default SkillsSlider;

const Wrapper = styled.div`
  //container styles
  max-width: 1634px;
  height: 150px;
  margin: 0 auto;
  margin-top: 30px;
  position: relative;

  .slick-list {
    ::before,
    ::after {
      content: "";
      position: absolute;
      width: 15%;
      height: 100%;
      z-index: 2;

      background: linear-gradient(
        to right,
        #1f1f47 0%,
        rgba(255, 255, 255, 0) 100%
      );

      @media (prefers-color-scheme: light) {
        background: linear-gradient(
          to right,
          #f2f6ff 0%,
          rgba(255, 255, 255, 0) 100%
        );
      }
    }

    ::before {
      top: 0;
      left: 0;
    }
    ::after {
      top: 0;
      right: 0;
      transform: rotateZ(180deg);
    }
  }

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
  @media (max-width: 425px) {
    width: 250px;
  }
`;

const Slide = styled.div`
  width: 150px;
  margin-top: 40px;
  margin-left: 40px;
  margin-bottom: 40px;
  img {
    height: 70px;
    transition: 1s cubic-bezier(0.075, 0.82, 0.165, 1);

    :hover {
      transform: scale(1.1);
    }
  }
`;
