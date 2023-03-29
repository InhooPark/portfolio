import Layout from "@/src/Layout";
import React from "react";
import Style from "@/styles/project.module.scss";
import Product from "@/json/project.json";

const Project = () => {
  return (
    <Layout>
      <main className={Style.project_main}>
        <section className={Style.project_section}>
          <h2>Project</h2>
          {Product.map((pro, key) => {
            return (
              <article key={key}>
                <h4>{pro.title}</h4>
                <figure>
                  <div className={Style.project_img_wrap}>
                    {pro.img.map((image) => {
                      return <img src={image} alt="project image" />;
                    })}
                  </div>
                  <figcaption></figcaption>
                </figure>
              </article>
            );
          })}
        </section>
      </main>
    </Layout>
  );
};

export default Project;
