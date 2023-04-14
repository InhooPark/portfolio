import Headmeta from "@/src/Headmeta";
import Intro from "@/src/Intro";
import { useRouter } from "next/router";
import { useEffect, useState } from "react";

export default function Home() {
  const [inW, setInW] = useState(true);
  const router = useRouter();

  useEffect(() => {
    if (window.innerWidth > 1024) {
      setInW(true);
    } else {
      setInW(false);
    }
  }, []);

  if (inW) {
    return (
      <main>
        <Headmeta title="Kestrel's Portfolio"></Headmeta>
        <Intro></Intro>
      </main>
    );
  } else {
    router.push("/about");
  }
}
