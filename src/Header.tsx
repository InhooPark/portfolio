import React, { useCallback, useContext, useEffect, useState } from "react";
import Nav from "./Nav";
import Style from "@/styles/layout.module.scss";
import { MyContext } from "@/context/Context";

const Header = () => {
  const [scrollHeight, setScrollHeight] = useState(false);
  const { setWindowHeigth }: any = useContext(MyContext);
  const [inW, setInW] = useState(2000);

  useEffect(() => {
    setWindowHeigth(window.scrollY);
    window.addEventListener("scroll", onScroll);
    return () => {
      window.removeEventListener("scroll", onScroll);
    };
  }, []);

  const onScroll = useCallback(() => {
    setWindowHeigth(window.scrollY);
    if (window.scrollY >= 100) {
      setScrollHeight(true);
    } else setScrollHeight(false);
  }, []);

  useEffect(() => {
    setInW(window.innerWidth);
    function resizeFunc() {
      setInW(window.innerWidth);
    }
    window.addEventListener("resize", resizeFunc);
    return () => window.removeEventListener("resize", resizeFunc);
  }, []);

  if (inW > 1024) {
    return (
      <header className={scrollHeight ? `${Style.header} ${Style.scroll}` : Style.header}>
        <Nav></Nav>
      </header>
    );
  } else {
    return (
      <header className={Style.header}>
        <Nav />
      </header>
    );
  }
};

export default Header;
