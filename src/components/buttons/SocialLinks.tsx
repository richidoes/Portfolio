import React from "react";
import styled from "styled-components";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faLinkedin, faGithub } from "@fortawesome/free-brands-svg-icons";

const SocialLinks = () => {
  return (
    <Wrapper>
      <a
        href="https://www.linkedin.com/in/ricardo-deleon/"
        target="_blank"
        rel="noopener noreferrer"
      >
        <FontAwesomeIcon icon={faLinkedin} size="2x" color="#0072b1" />
      </a>
      <a
        href="https://github.com/richidoes"
        target="_blank"
        rel="noopener noreferrer"
      >
        <FontAwesomeIcon icon={faGithub} size="2x" color="#6e5494" />
      </a>
    </Wrapper>
  );
};

export default SocialLinks;

const Wrapper = styled.div`
  width: 150px;
  height: 48px;
  display: flex;
  justify-content: space-evenly;

  a {
    transition: 1s cubic-bezier(0.075, 0.82, 0.165, 1);

    :hover {
      transform: translateY(-3px) scale(1.1);
    }
  }
`;
