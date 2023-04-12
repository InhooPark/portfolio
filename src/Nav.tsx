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

  const { randomBrushType, randomBrushColor }: any = useContext(MyContext);

  const [brushcolor, setBrushcolor] = useState("");
  const [brushtype, setBrushtype] = useState("");

  function setbrush() {
    let color = randomBrushColor();
    let type = randomBrushType();
    setBrushcolor(color);
    setBrushtype(type);
  }

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

  useEffect(() => {
    setbrush();
    if (location.pathname !== "/about") {
      setColor(true);
    } else {
      setColor(false);
    }
  }, []);

  return (
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
        <button type="button" onClick={() => toPage("ABOUT")} onMouseEnter={() => menuEnter("ABOUT")} onMouseLeave={() => menuLeave("ABOUT")}>
          <div className={aboutBrush ? `${Style.on}` : ""}>
            <svg width="100%" viewBox="0 0 907.2 198.45" fill={`#${brushcolor}`}>
              <path d={`${brushtype}`} />
            </svg>
          </div>
          <p>{"About me"}</p>
        </button>
        <button type="button" onClick={() => toPage("PROJECT")} onMouseEnter={() => menuEnter("PROJECT")} onMouseLeave={() => menuLeave("PROJECT")}>
          <div className={projectBrush ? `${Style.on}` : ""}>
            <svg width="100%" viewBox="0 0 907.2 198.45" fill={`#${brushcolor}`}>
              <path d={`${brushtype}`} />
            </svg>
          </div>
          <p>{"Projects"}</p>
        </button>

        <button type="button" onClick={() => toPage("TOY")} onMouseEnter={() => menuEnter("TOY")} onMouseLeave={() => menuLeave("TOY")}>
          <div className={toyBrush ? `${Style.on}` : ""}>
            <svg width="100%" viewBox="0 0 907.2 198.45" fill={`#${brushcolor}`}>
              <path d={`${brushtype}`} />
            </svg>
          </div>
          <p>{"Toy Projects"}</p>
        </button>
      </div>
    </nav>
  );
};

export default Nav;
