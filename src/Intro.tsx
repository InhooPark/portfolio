import { useRouter } from "next/router";
import React, { useEffect } from "react";

const Intro = () => {
  const router = useRouter();

  setTimeout(() => {
    router.replace("/about");
  }, 500);

  return <div>Intro</div>;
};

export default Intro;
