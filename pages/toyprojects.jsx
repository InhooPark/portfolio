import React from "react";
import Style from "@/styles/toyprojects.module.scss";
import Layout from "@/src/Layout";
import { Client } from "@notionhq/client";
import Headmeta from "@/src/Headmeta";

const Toyprojects = ({ titles, urls, imgurls }) => {
  return (
    <Layout>
      <Headmeta title="Toy Projects" />
      <main className={Style.toy_main}>
        <section className={Style.toy_section}>
          <h2>TOY - PROJECT</h2>
          {titles.map((toy, key) => {
            return (
              <article className={Style.toy_project} key={key}>
                <h4>{toy}</h4>

                <div className={Style.toy_project_img}>
                  <a href={urls[key]} target="_blank">
                    <img src={imgurls[key]} />
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

export const getServerSideProps = async () => {
  const notion = new Client({
    auth: process.env.NOTION_TOY_SECRET,
  });

  const data = await notion.blocks.children.list({
    block_id: process.env.PAGE_TOY_ID,
  });

  const ids = [];
  const urls = [];
  const imgurls = [];
  const titles = [];
  data.results.map((v, k) => {
    ids[k] = v.id;
  });

  const result = ids.map(async (id, key) => {
    const toys = await notion.blocks.children.list({
      block_id: id,
    });

    toys.results.map((toy, k) => {
      if (toy.type === "paragraph") {
        // console.log(toy.paragraph.rich_text[0]);
        if (toy.paragraph.rich_text[0] !== undefined) {
          urls[key] = toy.paragraph.rich_text[0].href;
          titles[key] = toy.paragraph.rich_text[0].plain_text;
        }
      } else if (toy.type === "image") {
        imgurls[key] = toy.image.file.url;
      }
    });
  });

  await Promise.all(result);

  return {
    props: {
      titles: titles,
      urls: urls,
      imgurls: imgurls,
    },
  };
};

export default Toyprojects;
