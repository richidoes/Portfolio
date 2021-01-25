import React from "react";
import styled from "styled-components";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faLinkedinIn, faGithub } from "@fortawesome/free-brands-svg-icons";
import { faDownload } from "@fortawesome/free-solid-svg-icons";

const SocialButtons: React.FC = () => {
  return (
    <Wrapper>
      <a
        href="https://www.linkedin.com/in/ricardo-deleon/"
        target="_blank"
        rel="noopener noreferrer"
      >
        <li className="linkedinIcon">
          <FontAwesomeIcon icon={faLinkedinIn} />{" "}
        </li>
      </a>

      <a
        href="https://github.com/richidoes"
        target="_blank"
        rel="noopener noreferrer"
      >
        <li className="githubIcon">
          <FontAwesomeIcon icon={faGithub} />{" "}
        </li>
      </a>

      <a
        href="https://drive.google.com/uc?export=download&id=1I6Wml9-NifW9KOjHwA7K9rQIy0D6idzf"
        target="_blank"
        rel="noopener noreferrer"
      >
        <li className="downloadIcon">
          <DownloadWrap>
            <FontAwesomeIcon icon={faDownload} />
            <Text>Descargar CV</Text>
          </DownloadWrap>
        </li>
      </a>
    </Wrapper>
  );
};
export default SocialButtons;

const Wrapper = styled.ul`
  display: flex;
  flex-direction: column;
  height: 100%;
  justify-content: space-evenly;
  text-align: center;

  a {
    position: relative;
    display: block;
    color: rgba(255, 255, 255, 0.8);
    font-size: 30px;
    height: 60px;
    width: 60px;
    background: #171515;
    line-height: 60px;
    border-radius: 50%;
    margin: 0 15px;
    cursor: pointer;
    transition: 0.5s;
  }

  a :before {
    position: absolute;
    content: "";
    top: 0;
    left: 0;
    height: 100%;
    width: 100%;
    border-radius: 50%;
    z-index: -1;
    transform: scale(0.9);
    transition: 0.5s;
  }

  a :nth-child(1):before {
    background: #0e76a8;
  }
  a :nth-child(2):before {
    background: #8e2de2;
  }
  a :nth-child(3):before {
    background: #25d366;
  }

  a :hover:before {
    filter: blur(3px);
    transform: scale(1.2);
  }

  a :nth-child(1):hover:before {
    box-shadow: 0 0 15px #0e76a8;
  }
  a :nth-child(2):hover:before {
    box-shadow: 0 0 15px #8e2de2;
  }
  a :nth-child(3):hover:before {
    box-shadow: 0 0 15px #25d366;
  }

  a :nth-child(1):hover {
    color: #0e76a8;
    box-shadow: 0 0 15px #0e76a8;
    text-shadow: 0 0 15px #0e76a8;
  }
  a :nth-child(2):hover {
    color: #8e2de2;
    box-shadow: 0 0 15px #8e2de2;
    text-shadow: 0 0 15px #8e2de2;
  }
  a :nth-child(3):hover {
    color: #25d366;
    box-shadow: 0 0 15px #25d366;
    text-shadow: 0 0 15px #25d366;
  }

  @media (prefers-color-scheme: light) {
    a {
      color: rgb(255 255 255 / 85%);
      background: #171515;
    }
  }
  @media (max-width: 900px) {
    flex-direction: row;
    justify-content: start;
  }
  @media (max-width: 550px) {
    a {
      font-size: 15px;
      height: 30px;
      width: 30px;
      line-height: 30px;
    }
  }
`;

const DownloadWrap = styled.div`
  width: 182px;
  display: flex;
  align-items: center;
  justify-content: space-around;

  @media (max-width: 550px) {
    width: 105px;
  }
`;

const Text = styled.div`
  font-size: 15px;

  @media (prefers-color-scheme: light) {
    color: rgb(0 0 0 / 85%);
  }
  @media (max-width: 550px) {
    font-size: 10px;
  }
`;
