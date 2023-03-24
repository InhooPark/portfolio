import React from "react";
import Style from "@/styles/layout.module.scss";

const Nav = () => {
  return (
    <nav className={Style.nav}>
      <div className={Style.nav_logo_wrap}>
        <button type="button">HOME</button>
      </div>
      <div className={Style.nav_menu_wrap}>
        <button type="button">ABOUT</button>
        <button type="button">CONTACT</button>
        <button type="button">PROJECT</button>
      </div>
    </nav>
  );
};

export default Nav;
