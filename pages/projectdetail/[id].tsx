import { Client } from "@notionhq/client";
import React from "react";

type typeParams = {
  params: {
    id: string;
  };
};

const Projectdetail = () => {
  return (
    <>
      <div></div>
    </>
  );
};

export const getStaticPaths = async () => {
  const notion = new Client({
    auth: process.env.NOTION_SECRET,
  });

  const paths = ["t", "e", "s", "t"];
  //   const data = await notion.blocks.children.list({
  //     block_id: process.env.PAGE_ID,
  //   });
  return {
    paths,
    fallback: false,
  };
};
export const getStaticProps = async ({ params: { id } }: typeParams) => {
  return {
    props: {},
  };
};

export default Projectdetail;
