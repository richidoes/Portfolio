import { Link } from "gatsby";
import React, { useEffect, useState, useRef } from "react";
import styled from "styled-components";

import { navbarData } from "../../data/menuData";
import MenuButton from "../buttons/MenuButton";
import Menutooltip from "../tooltips/Menutooltip";

const Header: React.FC = () => {
  const [isOpen, setIsOpen] = useState(false);
  const ref = useRef<HTMLDivElement>();
  const tooltipRef = useRef<HTMLDivElement>();

  const handleClick = (event: React.MouseEvent) => {
    event.preventDefault();
    setIsOpen(!isOpen);
  };

  const handleClickOutside = (event: any) => {
    if (
      ref.current &&
      !ref.current.contains(event.target) &&
      !tooltipRef.current.contains(event.target)
    ) {
      setIsOpen(false);
    }
  };

  useEffect(() => {
    document.addEventListener("mousedown", handleClickOutside);

    return () => {
      document.removeEventListener("mousedown", handleClickOutside);
    };
  }, []);

  return (
    <>
      <Wrapper>
        <Link to="/">
          <img src="images/logos/logo-rick.svg" alt="Logo" />
        </Link>

        <MenuWrapper count={navbarData.length} ref={ref}>
          {navbarData.map((item, index) => (
            <MenuButton item={item} key={index} />
          ))}
          <HamburgerWrapper>
            <MenuButton
              item={{
                title: "",
                icon: "/images/icons/hamburger.svg",
                link: "/",
              }}
              onClick={(event) => handleClick(event)}
            />
          </HamburgerWrapper>
        </MenuWrapper>
      </Wrapper>
      <div ref={tooltipRef}>
        <Menutooltip isOpen={isOpen} />
      </div>
    </>
  );
};

export default Header;

const Wrapper = styled.div`
  position: absolute;
  display: flex;
  -webkit-box-pack: justify;
  justify-content: space-between;
  max-width: 1234px;
  height: 44px;
  left: 0px;
  right: 0px;
  margin: 0px auto;
  padding: 60px 30px;
`;

const MenuWrapper = styled.div`
  display: grid;
  gap: 30px;
  grid-template-columns: repeat(${(props) => props.count}, auto);

  @media (max-width: 768px) {
    > div {
      //hide divs on menu and only shows hamburger
      display: none;
    }
  }
`;
const HamburgerWrapper = styled.span`
  display: none;
  position: absolute;
  right: 40px;

  @media (max-width: 768px) {
    //turned into span makes the other divs hide and hamburger show
    display: block;
  }
`;
