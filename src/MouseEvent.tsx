import React, { useEffect, useState } from "react";
import Cursor from "./Cursor";

const MouseEvent = () => {
  const [mouse, setMouse] = useState({ x: 0, y: 0 });

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

export default MouseEvent;
