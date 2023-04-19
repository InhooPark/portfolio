import Headmeta from "@/src/Headmeta";
import Intro from "@/src/Intro";
import { useEffect, useState } from "react";

export default function Home() {
  const [inW, setInW] = useState(2000);

  useEffect(() => {
    setInW(window.innerWidth);
    function resizeFunc() {
      setInW(window.innerWidth);
    }
    window.addEventListener("resize", resizeFunc);
    return () => window.removeEventListener("resize", resizeFunc);
  });

  if (inW > 1024) {
    return (
      <main>
        <Headmeta title="Kestrel's Portfolio"></Headmeta>
        <Intro></Intro>
      </main>
    );
  } else {
    location.replace("/about");
  }
}
