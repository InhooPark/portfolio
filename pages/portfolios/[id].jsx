import { Client } from "@notionhq/client";

const Portfolio = ({ portfolio, subtitle, title, content }) => {
  return <pre>{JSON.stringify(content, null, 2)}</pre>;
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

  const page = await notion.pages.retrieve({
    page_id: id,
  });

  const blocks = await notion.blocks.children.list({
    block_id: id,
  });

  let title = [];
  const subtitle = [];
  const content = [];

  blocks.results.forEach((block) => {
    if (block.type == "heading_1") {
      title = block.heading_1.rich_text[0].plain_text;
    }

    if (block.type === "heading_2") {
      block.heading_2.rich_text.map((v) => {
        subtitle.push(v.plain_text);
      });
    }

    if (block.type === "paragraph") {
      block.paragraph.rich_text.map((v) => {
        content.push(v.plain_text);
      });
    }
  });

  return {
    props: {
      portfolio: blocks,
      subtitle: subtitle,
      title: title,
      content: content,
    },
  };
};

export default Portfolio;
