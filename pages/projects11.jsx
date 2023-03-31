// import { Client } from "@notionhq/client";
// import Project from "@/src/Project";
// import Layout from "@/src/Layout";
// import Style from "@/styles/project.module.scss";
// import { useEffect } from "react";

// const Projects = ({ dbid }) => {
//   return (
//     <Layout>
//       <main className={Style.project_main}>
//         <section className={Style.project_section}>
//           {dbid.map((obj, key) => {
//             return <Project obj={obj} key={key} />;
//           })}
//         </section>
//       </main>
//     </Layout>
//   );
// };

// export const getStaticProps = async () => {
//   const notion = new Client({
//     auth: process.env.NOTION_SECRET,
//   });

//   const data = await notion.blocks.children.list({
//     block_id: process.env.PAGE_ID,
//   });

//   const dbid = [];

//   let delay = data.results.map(async (v, k) => {
//     const dbblock = await notion.blocks.children.list({
//       block_id: v.id,
//     });

//     dbblock.results.map(async (val, key) => {
//       if (val.type === "child_database") {
//         // const db = await notion.databases.query({
//         //   database_id: v.id,
//         // });
//         // dbid.push({ title: v.child_page.title, id: val.id });
//         dbid[k] = { title: v.child_page.title, id: val.id };

//         // db.results.map((v, k) => {
//         //   // console.log("----------", v.properties.Name.title[0].plain_text, "----------");
//         //   test[k] = { ...test[k], title: v.properties.Name.title[0].plain_text };
//         //   v.properties.Text.rich_text.map((txt, key) => {
//         //     test[k] = { ...test[k], content: txt.plain_text };
//         //     // console.log(txt.plain_text);
//         //   });
//         // });
//       }
//     });
//   });

//   await Promise.all(delay);

//   // test.results.map(async (obj) => {
//   //   if (obj.type === "child_database") {
//   //     const testdb = await notion.databases.query({
//   //       database_id: obj.id,
//   //     });

//   //     testdb.results.map((obj) => {
//   //       obj.properties.Text.rich_text.map((v) => {
//   //         // console.log(v.plain_text);
//   //       });
//   //     });
//   //   }
//   // });

//   // data.results.forEach((result) => {
//   //   if (result.type === "child_page") {
//   //     titles.push(result.child_page.title);
//   //     ids.push(result.id);
//   //   }
//   // });

//   // summarys.results.forEach((summary) => {
//   //   console.log(summary);
//   // });

//   // const test = ids.map(async (id) => {
//   //   const blocks = await notion.blocks.children.list({
//   //     block_id: id,
//   //   });

//   //   const imgID = [];

//   //   blocks.results.map(async (block) => {
//   //     if (block !== undefined && block.child_page !== undefined && block.child_page.title === "이미지") {
//   //       imgID.push(block.id);
//   //     }
//   //   });

//   //   imgID.map(async (id) => {
//   //     const imageblocks = await notion.blocks.children.list({
//   //       block_id: id,
//   //     });

//   //     const images = [];

//   //     imageblocks.results.map((img) => {
//   //       if (img.image !== undefined && img.image !== null && img.image.file !== undefined && img.image.file !== null) {
//   //         images.push(img.image.file.url);
//   //       }
//   //     });
//   //     imagesArr.push(images);
//   //   });
//   // });

//   // await Promise.all(test);

//   return {
//     props: {
//       data: data,
//       dbid: dbid,
//     },
//   };
// };

// export default Projects;

import React from "react";

const Projects11 = () => {
  return <div>projects11</div>;
};

export default Projects11;
