import React from "react";
import styled from "styled-components";
import { Link } from "gatsby";

interface AppProps {
  item: {
    link: string;
    title: string;
    icon: string;
  };
  onClick?: (event: React.MouseEvent<HTMLAnchorElement, MouseEvent>) => void;
}

type Title = {
  title: string;
};

const MenuButton: React.FC<AppProps> = ({ item, onClick }) => {
  return (
    <div>
      <Link to={item.link} onClick={onClick}>
        <MenuItem title={item.title}>
          <img src={item.icon} alt={item.title} />
          {item.title}
        </MenuItem>
      </Link>
    </div>
  );
};

export default MenuButton;

const MenuItem = styled.div`
  color: rgba(255, 255, 255, 0.7);
  display: grid;
  grid-template-columns: 24px auto;
  gap: ${(props: Title) => (props.title ? "10px" : "0px")};
  align-items: center;
  padding: 10px;
  border-radius: 10px;
  transition: 0.5s ease-out;

  :hover {
    background: rgba(255, 255, 255, 0.1);
    box-shadow: 0px 10px 20px rgba(0, 0, 0, 0.1),
      inset 0px 0px 0px 0.5px rgba(255, 255, 255, 0.2);
  }
`;
