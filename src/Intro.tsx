import { useRouter } from "next/router";
import React, { useEffect } from "react";
import Style from "@/styles/intro.module.scss";

const Intro = () => {
  const router = useRouter();

  setTimeout(() => {
    router.replace("/about");
  }, 2000);

  return (
    <main className={Style.intro_main}>
      <section className={Style.intro_section}>
        <h1>박인후 포트폴리오</h1>
      </section>
    </main>
  );
};

export default Intro;
