import React, { useEffect, useRef, useState } from "react";
import Style from "@/styles/intro2.module.scss";
import { useRouter } from "next/router";

const Intro2 = () => {
  const [x, setX] = useState(0);
  const [innerW, setInnerW] = useState(0);
  const router = useRouter();

  function nextPage(page: string) {
    router.push(`/${page}`);
  }
  function mouseHorizon(e: MouseEvent) {
    setX(e.clientX);
  }
  function inner() {
    setInnerW(window.innerWidth);
  }

  useEffect(() => {
    window.addEventListener("mousemove", mouseHorizon);
    return () => window.removeEventListener("mousemove", mouseHorizon);
  }, []);

  useEffect(() => {
    setInnerW(window.innerWidth);
    setX(window.innerWidth / 2);
    window.addEventListener("resize", inner);
    return () => window.removeEventListener("resize", inner);
  }, []);

  return (
    <main className={Style.intro_main}>
      <section className={Style.intro_section}>
        <h1>{"PIH's Portfolio"}</h1>
        <div className={Style.intro_left}>
          <img src="/img/profile/test/profile_bw.png" style={{ opacity: `${(x / innerW) * 2}` }} />
          <img src="/img/profile/test/2x3_transparent.png" style={{ opacity: `${1 - (x / innerW) * 2}` }} />
          <p onClick={() => nextPage("about")}>{"⬅ About"}</p>
        </div>
        <div className={Style.intro_right}>
          <img src="/img/profile/test/profile_bw.png" style={{ opacity: `${1 - (x / innerW - 0.5) * 2}` }} />
          <img src="/img/profile/test/2x3_transparent.png" style={{ opacity: `${(x / innerW - 0.5) * 2}` }} />
          <p onClick={() => nextPage("projects")}>{"Project ➡"}</p>
        </div>
      </section>
    </main>
  );
};

export default Intro2;
