import React from "react";
import Style from "@/styles/toyprojects.module.scss";
import Layout from "@/src/Layout";
import Headmeta from "@/src/Headmeta";
import ToyData from "@/json/toy.json";

const Toyprojects = () => {
  return (
    <Layout>
      <Headmeta title="Toy Projects" />
      <main className={Style.toy_main}>
        <section className={Style.toy_section}>
          <h2>TOY - PROJECT</h2>

          {ToyData.data.map((value, key) => {
            return (
              <article className={Style.toy_project} key={key}>
                <h4>{value.title}</h4>

                <div className={Style.toy_project_img}>
                  <a href={value.url} target="_blank">
                    <img src={value.img} />
                  </a>
                </div>
              </article>
            );
          })}
        </section>
      </main>
    </Layout>
  );
};

export default Toyprojects;
