import Layout from "@/src/Layout";
import React, { useEffect, useState } from "react";
import Style from "@/styles/about.module.scss";
import Link from "next/link";
import Archive from "@/json/archive.json";

const About = () => {
  const [myAge, setMyAge] = useState(Number);

  const today = new Date();
  const birth = new Date(1994, 7, 22);

  const ageFunc = () => {
    let age = today.getFullYear() - birth.getFullYear();
    const m = today.getMonth() - birth.getMonth();
    if (m < 0 || (m === 0 && today.getDate() < birth.getDate())) {
      age--;
    }

    return age;
  };

  useEffect(() => {
    let age = ageFunc();
    setMyAge(age);
  }, [myAge]);

  return (
    <Layout>
      <main className={Style.about_main}>
        <section className={Style.title_section}>
          <div className={Style.title_visual_img_wrap}>
            <img src="/img/visual.jpg" alt="about visual image"></img>
          </div>
          <div className={Style.title_text}>
            <h1>박인후 포트폴리오</h1>
            <p>
              안녕하세요. 게임이 좋아 개발을 시작하게된
              <br />
              그래서 즐겁게 프로그래밍 공부중인 박인후입니다.
            </p>
          </div>
        </section>
        <section className={Style.profile_section}>
          <h2> Profile </h2>

          <article className={Style.profile_info}>
            <p>
              <b>{"Name"}</b>
              <br />
              {"박인후"} <br />
              <small>{"(Inhoo Park)"}</small>
            </p>
            <p>
              <b>{"Age"}</b>
              <br />
              {myAge}
              <br /> <small>{"(22.07.1994)"}</small>
            </p>
            <p>
              <b>{"Location"}</b>
              <br />
              {"경기도 의정부시"} <br />
              <small>{"Uijeongbu-si, Gyeonggi-do, Republic of Korea"}</small>
            </p>
          </article>

          <article className={Style.profile_about}>
            <figure>
              <div className={Style.profile_img_wrap}>
                <img src="/img/profile/300.png" alt="profile image"></img>
              </div>
              <figcaption className={Style.profile_info_container}>
                <p>1</p>
              </figcaption>
            </figure>
          </article>
        </section>
        {/* to project router */}

        <section className={Style.archive_section}>
          <h2>Archive</h2>
          {Archive.map((arc) => {
            return (
              <article key={arc.name}>
                <Link className={Style.archive_a_deco} href={arc.href} target="_blank">
                  <figure>
                    <div className={Style.archive_logo_img_wrap}>
                      <svg viewBox={arc.viewbox}>
                        <path d={arc.path}></path>
                      </svg>
                      <span>{arc.name}</span>
                    </div>
                    <figcaption>
                      <p>{arc.href}</p>
                      <p>
                        <b>{arc.title}</b> 입니다.
                      </p>
                      <ul>
                        {arc.content.map((content, key) => {
                          return <li key={key}>{content}</li>;
                        })}
                      </ul>
                    </figcaption>
                  </figure>
                </Link>
              </article>
            );
          })}
        </section>
      </main>
    </Layout>
  );
};

export default About;
