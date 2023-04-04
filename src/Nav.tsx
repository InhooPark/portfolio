import React, { useEffect, useState } from "react";
import Style from "@/styles/layout.module.scss";
import { useRouter } from "next/router";

const Nav = () => {
  const router = useRouter();

  const [color, setColor] = useState(false);

  function toPage(page: string) {
    switch (page) {
      case "ABOUT":
        router.push("/about");
        break;
      case "CONTACT":
        router.push("/contact");
        break;
      case "PROJECT":
        router.push("/projects");
        break;
      default:
        return;
    }
  }

  useEffect(() => {
    if (location.pathname !== "/about") {
      setColor(true);
    } else {
      setColor(false);
    }
  }, []);

  return (
    <nav className={color ? `${Style.nav} ${Style.color_on}` : Style.nav}>
      <div className={Style.nav_logo_wrap}>
        <button type="button" onClick={() => toPage("ABOUT")}>
          {"PIH's Portfolio"}
        </button>
      </div>
      <div className={Style.nav_menu_wrap}>
        <button type="button" onClick={() => toPage("ABOUT")}>
          {"ABOUT"}
        </button>
        <button type="button" onClick={() => toPage("PROJECT")}>
          {"PROJECT"}
        </button>
      </div>
    </nav>
  );
};

export default Nav;
