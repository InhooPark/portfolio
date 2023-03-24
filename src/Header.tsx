import React from "react";
import Nav from "./Nav";
import Style from "@/styles/layout.module.scss";

const Header = () => {
  return (
    <header className={Style.header}>
      <Nav></Nav>
    </header>
  );
};

export default Header;
