import React from "react";
import { GlobalStyle } from "../styles/GlobalStyle";
import Header from "./Header";
import "./design.css";

const Layout: React.FC = ({ children }) => {
  return (
    <>
      <GlobalStyle />
      <Header />
      <main>{children}</main>
    </>
  );
};

export default Layout;
