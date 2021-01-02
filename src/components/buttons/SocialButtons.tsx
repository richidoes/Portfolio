import React from "react";
import styled from "styled-components";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faLinkedinIn, faGithub } from "@fortawesome/free-brands-svg-icons";
import { faDownload } from "@fortawesome/free-solid-svg-icons";

import { SmallText } from "../styles/TextStyles";

const SocialButtons = () => {
  return (
    <Wrapper>
      <li className="linkedinIcon">
        <FontAwesomeIcon icon={faLinkedinIn} />{" "}
      </li>
      <li className="githubIcon">
        <FontAwesomeIcon icon={faGithub} />{" "}
      </li>
      <li className="downloadIcon">
        <a href="/">
          <FontAwesomeIcon icon={faDownload} />
          <Text>Descargar CV</Text>
        </a>
      </li>
    </Wrapper>
  );
};

export default SocialButtons;

const Wrapper = styled.ul`
  display: flex;
  flex-direction: column;
  height: 100%;
  width: 200px;
  justify-content: space-evenly;
  text-align: center;

  li {
    color: #666;
    font-size: 30px;
    height: 60px;
    width: 60px;
    background: #171515;
    line-height: 60px;
    border-radius: 50%;
    margin: 0 15px;
  }

  a {
    color: #666;
  }
`;

const Text = styled.div`
  font-size: 13px;
  position: absolute;
  left: 100px;
  top: 285px;
`;
