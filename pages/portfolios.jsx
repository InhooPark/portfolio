import { Client } from "@notionhq/client";
import Link from "next/link";

const Portfolios = ({ portfolios }) => {
  3;

  return portfolios.map((portfolio) => (
    <p key={portfolio.id}>
      <Link href={`/portfolios/${portfolio.id}`}>{portfolio.title}</Link>
    </p>
  ));
};

export const getStaticProps = async () => {
  const notion = new Client({
    auth: process.env.NOTION_SECRET,
  });

  const data = await notion.blocks.children.list({
    block_id: process.env.PAGE_ID,
  });

  const portfolios = [];
  data.results.forEach((result) => {
    if (result.type === "child_page") {
      portfolios.push({
        id: result.id,
        title: result.child_page.title,
      });
    }
  });
  return {
    props: {
      portfolios: portfolios,
    },
  };
};

export default Portfolios;
