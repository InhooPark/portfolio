import { Client } from "@notionhq/client";

const Portfolio = ({ page, portfolio, image }) => {
  return (
    <>
      <pre>{JSON.stringify(portfolio, null, 2)}</pre>
      {image.map((img) => {
        return <img src={img} alt="img" />;
      })}
    </>
  );
};

export const getStaticPaths = async () => {
  const notion = new Client({
    auth: process.env.NOTION_SECRET,
  });

  const data = await notion.blocks.children.list({
    block_id: process.env.PAGE_ID,
  });

  const paths = [];
  data.results.forEach((result) => {
    if (result.type === "child_page") {
      paths.push({
        params: {
          id: result.id,
        },
      });
    }
  });

  return {
    paths,
    fallback: false,
  };
};
export const getStaticProps = async ({ params: { id } }) => {
  // fetch detail for portfolio

  const notion = new Client({
    auth: process.env.NOTION_SECRET,
  });

  const pages = await notion.pages.retrieve({
    page_id: id,
  });

  const blocks = await notion.blocks.children.list({
    block_id: id,
  });

  let title = "";
  let imgID = "";
  const images = [];

  blocks.results.forEach((block) => {
    if (block.child_page.title === "이미지") {
      imgID = block.id;
    }
  });

  const imageblocks = await notion.blocks.children.list({
    block_id: imgID,
  });
  imageblocks.results.forEach((img) => {
    images.push(img.image.file.url);
  });

  return {
    props: {
      page: pages,
      portfolio: blocks,
      image: images,
    },
  };
};

export default Portfolio;
