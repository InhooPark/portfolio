import { useRouter } from "next/router";
import React, { useState } from "react";
import Style from "@/styles/intro.module.scss";

const Intro = () => {
  const router = useRouter();
  const [maskimg, setMaskimg] = useState("00.jpg");
  const [bgcolor, setBgcolor] = useState("EEEAEB");
  const [appealText, setAppealText] = useState("");
  const [checkHover, setCheckHover] = useState(false);

  const color = ["F4BE1D", "399CA3", "F48D20", "57ABAD"];
  const img = ["cook.gif", "swim.gif", "game.gif", "matrix.gif"];
  const appeal = ["Diligence", "Patience", "Creative", "Effort"];

  function profileOver(quadrant: number) {
    setBgcolor(color[quadrant - 1]);
    setMaskimg(img[quadrant - 1]);
    setAppealText(appeal[quadrant - 1]);
    setCheckHover(true);
  }
  function profileLeave(quadrant: number) {
    setMaskimg("00.jpg");
    setBgcolor("EEEAEB");
    setAppealText("");
    setCheckHover(false);
  }
  function toAbout() {
    router.push("/about");
  }

  return (
    <main className={Style.intro_main}>
      <section className={Style.intro_section}>
        <div className={Style.intro_left_block} style={{ backgroundColor: `#${bgcolor}` }}>
          <div className={Style.intro_left_block_img_wrap} onMouseEnter={() => profileOver(4)} onMouseLeave={() => profileLeave(4)}>
            <img src="" alt="profile image program" />
          </div>
          <div className={Style.intro_left_block_img_wrap} onMouseEnter={() => profileOver(1)} onMouseLeave={() => profileLeave(1)}>
            <img src="" alt="profile image cook" />
          </div>
          <div className={Style.intro_left_block_img_wrap} onMouseEnter={() => profileOver(3)} onMouseLeave={() => profileLeave(3)}>
            <img src="" alt="profile image game" />
          </div>
          <div className={Style.intro_left_block_img_wrap} onMouseEnter={() => profileOver(2)} onMouseLeave={() => profileLeave(2)}>
            <img src="" alt="profile image swim" />
          </div>
        </div>
        <div className={Style.intro_right_block} style={{ backgroundColor: `#${bgcolor}` }}>
          {
            <h1 style={{ backgroundImage: `url("/img/testimg/${maskimg}")` }}>
              {"PIH's"} <br />
              {"Portfolio"}
              <br />
              <span className={checkHover ? `${Style.appeal} ${Style.on}` : Style.appeal}>{appealText}</span>
              <br />
              <span onClick={toAbout}>{"➡"}</span>
            </h1>
          }
        </div>
      </section>
    </main>
  );
};

export default Intro;
