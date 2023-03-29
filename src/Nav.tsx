import React from "react";
import Style from "@/styles/layout.module.scss";
import { useRouter } from "next/router";

const Nav = () => {
  const router = useRouter();

  function toPage(page: string) {
    switch (page) {
      case "ABOUT":
        router.push("/about");
        break;
      case "CONTACT":
        router.push("/contact");
        break;
      case "PROJECT":
        router.push("project");
        break;
      default:
        return;
    }
  }

  return (
    <nav className={Style.nav}>
      <div className={Style.nav_logo_wrap}>
        <button type="button" onClick={() => toPage("ABOUT")}>
          HOME
        </button>
      </div>
      <div className={Style.nav_menu_wrap}>
        <button type="button" onClick={() => toPage("ABOUT")}>
          ABOUT
        </button>
        <button type="button" onClick={() => toPage("PROJECT")}>
          PROJECT
        </button>
      </div>
    </nav>
  );
};

export default Nav;
