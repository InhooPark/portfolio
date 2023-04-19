import React, { useContext, useEffect, useState } from "react";
import Style from "@/styles/layout.module.scss";
import { useRouter } from "next/router";
import { MyContext } from "@/context/Context";

const Nav = () => {
  const router = useRouter();

  const [color, setColor] = useState(false);

  const [logoBrush, setLogoBrush] = useState(false);
  const [aboutBrush, setAboutBrush] = useState(false);
  const [projectBrush, setProjectBrush] = useState(false);
  const [toyBrush, setToyBrush] = useState(false);
  const [here, setHere] = useState("");

  const { randomBrushType, randomBrushColor }: any = useContext(MyContext);

  const [brushcolor, setBrushcolor] = useState("");
  const [brushtype, setBrushtype] = useState("");
  const [burger, setBurger] = useState(false);

  function setbrush() {
    let color = randomBrushColor();
    let type = randomBrushType();
    setBrushcolor(color);
    setBrushtype(type);
  }

  function toPage(page: string) {
    const bodyEl = document.querySelector("body");
    if (bodyEl !== null) bodyEl.style.overflow = "auto";
    switch (page) {
      case "ABOUT":
        setBurger(false);
        router.push("/about");
        break;
      case "PROJECT":
        router.push("/projects");
        break;
      case "TOY":
        router.push("/toyprojects");
        break;
      default:
        return;
    }
  }
  function menuEnter(menu: string) {
    setbrush();
    switch (menu) {
      case "LOGO":
        setLogoBrush(true);
        break;
      case "ABOUT":
        setAboutBrush(true);
        break;
      case "PROJECT":
        setProjectBrush(true);
        break;
      case "TOY":
        setToyBrush(true);
      default:
        return;
    }
  }
  function menuLeave(menu: string) {
    switch (menu) {
      case "LOGO":
        setLogoBrush(false);
        break;
      case "ABOUT":
        setAboutBrush(false);
        break;
      case "PROJECT":
        setProjectBrush(false);
        break;
      case "TOY":
        setToyBrush(false);
        break;
      default:
        return;
    }
  }
  function hereis() {
    setHere(location.pathname);
  }
  function burgerOn() {
    setBurger(!burger);

    if (burger) {
      const bodyEl = document.querySelector("body");
      if (bodyEl !== null) bodyEl.style.overflow = "auto";
    } else {
      const bodyEl = document.querySelector("body");
      if (bodyEl !== null) bodyEl.style.overflow = "hidden";
    }
  }

  useEffect(() => {
    setbrush();
    if (location.pathname !== "/about") {
      setColor(true);
    } else {
      setColor(false);
    }
  }, []);

  useEffect(() => {
    hereis();
  }, []);

  return (
    <>
      <nav className={color ? `${Style.nav} ${Style.color_on}` : Style.nav}>
        <div className={Style.nav_logo_wrap}>
          <button type="button" onClick={() => toPage("ABOUT")} onMouseEnter={() => menuEnter("LOGO")} onMouseLeave={() => menuLeave("LOGO")}>
            <div className={logoBrush ? `${Style.on}` : ""}>
              <svg width="100%" viewBox="0 0 907.2 198.45" fill={`#${brushcolor}`}>
                <path d={`${brushtype}`} />
              </svg>
            </div>
            <p>{"PIH's Portfolio"}</p>
          </button>
        </div>
        <div className={Style.nav_menu_wrap}>
          <button
            className={here === "/about" ? Style.here : ""}
            type="button"
            onClick={() => toPage("ABOUT")}
            onMouseEnter={() => menuEnter("ABOUT")}
            onMouseLeave={() => menuLeave("ABOUT")}
          >
            <div className={aboutBrush ? `${Style.on}` : ""}>
              <svg width="100%" viewBox="0 0 907.2 198.45" fill={`#${brushcolor}`}>
                <path d={`${brushtype}`} />
              </svg>
            </div>
            <p>{"About me"}</p>
          </button>

          <button
            className={here === "/projects" ? Style.here : ""}
            type="button"
            onClick={() => toPage("PROJECT")}
            onMouseEnter={() => menuEnter("PROJECT")}
            onMouseLeave={() => menuLeave("PROJECT")}
          >
            <div className={projectBrush ? `${Style.on}` : ""}>
              <svg width="100%" viewBox="0 0 907.2 198.45" fill={`#${brushcolor}`}>
                <path d={`${brushtype}`} />
              </svg>
            </div>
            <p>{"Projects"}</p>
          </button>

          <button
            className={here === "/toyprojects" ? Style.here : ""}
            type="button"
            onClick={() => toPage("TOY")}
            onMouseEnter={() => menuEnter("TOY")}
            onMouseLeave={() => menuLeave("TOY")}
          >
            <div className={toyBrush ? `${Style.on}` : ""}>
              <svg width="100%" viewBox="0 0 907.2 198.45" fill={`#${brushcolor}`}>
                <path d={`${brushtype}`} />
              </svg>
            </div>
            <p>{"Toy Projects"}</p>
          </button>
        </div>
      </nav>
      <nav className={burger ? `${Style.m_nav} ${Style.on}` : Style.m_nav}>
        <div className={Style.m_nav_logo}>
          <button type="button" onClick={() => toPage("ABOUT")}>
            <p>{"PIH's"}</p>
          </button>
        </div>
        <div className={burger ? `${Style.m_nav_burger} ${Style.on}` : Style.m_nav_burger}>
          <button type="button" onClick={burgerOn}>
            <span></span>
            <span></span>
            <span></span>
          </button>

          <div className={Style.burger}>
            <button type="button" onClick={() => toPage("ABOUT")}>
              Home
            </button>
            <button type="button" onClick={() => toPage("PROJECT")}>
              Project
            </button>
            <button type="button" onClick={() => toPage("TOY")}>
              Toy-Project
            </button>
          </div>
        </div>
      </nav>
    </>
  );
};

export default Nav;
