import React, { useCallback, useEffect, useState } from "react";
import Nav from "./Nav";
import Style from "@/styles/layout.module.scss";

const Header = () => {
  const [scrollHeight, setScrollHeight] = useState(false);

  useEffect(() => {
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => {
      window.removeEventListener("scroll", onScroll);
    };
  }, []);

  const onScroll = useCallback(() => {
    if (window.scrollY >= 100) {
      setScrollHeight(true);
    } else setScrollHeight(false);
  }, []);

  return (
    <header className={scrollHeight ? `${Style.header} ${Style.scroll}` : Style.header}>
      <Nav></Nav>
    </header>
  );
};

export default Header;
