import React, { useEffect, useRef, useState } from "react";
import Style from "@/styles/test.module.scss";
const Cursor = () => {
  const coords = { x: 0, y: 0 };
  const cursors = useRef([]);

  return (
    <>
      <div ref={(e) => (cursors[0] = e)} className={Style.cursor}>
        1
      </div>
      <div ref={(e) => (cursors[0] = e)} className={Style.cursor}>
        2
      </div>
      <div ref={(e) => (cursors[0] = e)} className={Style.cursor}>
        3
      </div>
      <div ref={(e) => (cursors[0] = e)} className={Style.cursor}>
        4
      </div>
      <div ref={(e) => (cursors[0] = e)} className={Style.cursor}>
        5
      </div>
    </>
  );
};

export default Cursor;
