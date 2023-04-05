import React, { useEffect, useRef, useState } from "react";
import Cursor from "./Cursor";

const Test = () => {
  const [mouse, setMouse] = useState({ x: 0, y: 0 });
  const timer = useRef(null);

  useEffect(() => {
    function trackMouse(e: MouseEvent) {
      setMouse({ x: e.clientX, y: e.clientY });
    }
    window.addEventListener("mousemove", trackMouse);
    return () => window.removeEventListener("mousemove", trackMouse);
  }, []);
  return (
    <div>
      <Cursor x={mouse.x} y={mouse.y}></Cursor>
    </div>
  );
};

export default Test;
