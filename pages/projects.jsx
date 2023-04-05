import { Client } from "@notionhq/client";
import Layout from "@/src/Layout";
import Project from "@/src/Project";
import Style from "@/styles/project.module.scss";

// type typeProjects = {
//   titles: string[];
//   callouts: string[];
//   images: any;
//   ids: string[];
// };

const Projects = ({ titles, callouts, images, ids }) => {
  return (
    <Layout>
      <main className={Style.project_main}>
        <section className={Style.project_section}>
          {titles.map((title, key) => {
            return <Project key={key} title={title} callout={callouts[key]} images={images[key]} id={ids[key]}></Project>;
          })}
        </section>
      </main>
    </Layout>
  );
};

export const getStaticProps = async () => {
  const notion = new Client({
    auth: process.env.NOTION_SECRET,
  });

  const data = await notion.blocks.children.list({
    block_id: process.env.PAGE_ID,
  });

  const ids = [];
  const callouts = [];
  const titles = [];
  const imageids = [];
  let images = [];
  const imagesArr = [];
  const summaryids = [];

  data.results.map((value, key) => {
    ids[key] = data.results[key].id;
    titles[key] = value.child_page.title;
  });

  let idDelay = ids.map(async (id, key) => {
    const calls = await notion.blocks.children.list({
      block_id: id,
    });

    calls.results.map((callout) => {
      if (callout.type === "callout") {
        callouts[key] = callout.callout.rich_text[0].plain_text;
      }
      if (callout.type === "child_page") {
        if (callout.child_page.title === "이미지") {
          imageids[key] = callout.id;
        }
      }
    });
  });
  await Promise.all(idDelay);

  let imageDelay = imageids.map(async (id, key) => {
    const imgs = await notion.blocks.children.list({
      block_id: id,
    });
    imgs.results.map((img, k) => {
      images[k] = img.image.file.url;
    });
    imagesArr[key] = images;
    images = [];
  });
  await Promise.all(imageDelay);

  return {
    props: {
      titles: titles,
      callouts: callouts,
      images: imagesArr,
      ids: ids,
    },
  };
};

export default Projects;
