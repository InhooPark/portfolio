import React from "react";
import Style from "@/styles/toyprojects.module.scss";
import Layout from "@/src/Layout";

const Toyprojects = () => {
  const projects = [
    "https://naver.com",
    "https://google.com",
    "https://github.com",
    "https://github.com",
    "https://github.com",
    "https://github.com",
    "https://github.com",
  ];

  return (
    <Layout>
      <main className={Style.toy_main}>
        <section className={Style.toy_section}>
          <h2>TOY - PROJECT</h2>
          {projects.map((project) => {
            return (
              <article className={Style.toy_project}>
                <a href={project}>PROJECT</a>
              </article>
            );
          })}
        </section>
      </main>
    </Layout>
  );
};

export default Toyprojects;
