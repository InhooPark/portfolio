import React, { useEffect, useState } from "react";
import Cursor from "./Cursor";

const MouseEvent = () => {
  const [mouse, setMouse] = useState({ x: 0, y: 0 });
  const [inW, setInW] = useState(1920);

  useEffect(() => {
    function trackMouse(e: MouseEvent) {
      setMouse({ x: e.clientX, y: e.clientY });
    }
    window.addEventListener("mousemove", trackMouse);
    return () => window.removeEventListener("mousemove", trackMouse);
  }, []);

  useEffect(() => {
    setInW(window.innerWidth);
    function resizeFunc() {
      setInW(window.innerWidth);
    }
    window.addEventListener("resize", resizeFunc);
    return () => window.removeEventListener("resize", resizeFunc);
  });

  return <div>{inW > 1024 ? <Cursor x={mouse.x} y={mouse.y}></Cursor> : <></>}</div>;
};

export default MouseEvent;
