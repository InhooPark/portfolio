import React, { useEffect, useRef } from "react";
import Style from "@/styles/test.module.scss";

type typeCursor = {
  x: number;
  y: number;
};
const Cursor = ({ x, y }: typeCursor) => {
  const cursors: any = useRef([]);

  useEffect(() => {
    cursors.current.map((cursor: any) => {
      cursor.x = 0;
      cursor.y = 0;
    });
  }, []);

  useEffect(() => {
    cursors.current.map((cursor: any, index: number) => {
      cursor.style.left = x + "px";
      cursor.style.top = y + "px";
      cursor.x = x;
      cursor.y = y;

      const nextCursor: any = cursors.current[index + 1] || cursors.current[0];
      x += (nextCursor.x - x) * 0.05;
      y += (nextCursor.y - y) * 0.05;
    });
  }, [x, y]);

  return (
    <>
      <div ref={(e) => (cursors.current[0] = e)} className={Style.cursor} style={{ backgroundImage: `url('/img/testpaint/paint399CA3.png')` }}></div>
      <div ref={(e) => (cursors.current[1] = e)} className={Style.cursor} style={{ backgroundImage: `url('/img/testpaint/paint399CA3.png')` }}></div>
      <div ref={(e) => (cursors.current[2] = e)} className={Style.cursor} style={{ backgroundImage: `url('/img/testpaint/paint399CA3.png')` }}></div>
      <div ref={(e) => (cursors.current[3] = e)} className={Style.cursor} style={{ backgroundImage: `url('/img/testpaint/paint399CA3.png')` }}></div>
      <div ref={(e) => (cursors.current[4] = e)} className={Style.cursor} style={{ backgroundImage: `url('/img/testpaint/paint399CA3.png')` }}></div>
      <div ref={(e) => (cursors.current[5] = e)} className={Style.cursor} style={{ backgroundImage: `url('/img/testpaint/paint399CA3.png')` }}></div>
      <div ref={(e) => (cursors.current[6] = e)} className={Style.cursor} style={{ backgroundImage: `url('/img/testpaint/paint399CA3.png')` }}></div>
      <div ref={(e) => (cursors.current[7] = e)} className={Style.cursor} style={{ backgroundImage: `url('/img/testpaint/paint399CA3.png')` }}></div>
      <div ref={(e) => (cursors.current[8] = e)} className={Style.cursor} style={{ backgroundImage: `url('/img/testpaint/paint399CA3.png')` }}></div>
      <div ref={(e) => (cursors.current[9] = e)} className={Style.cursor} style={{ backgroundImage: `url('/img/testpaint/paint399CA3.png')` }}></div>
      <div ref={(e) => (cursors.current[10] = e)} className={Style.cursor} style={{ backgroundImage: `url('/img/testpaint/paint399CA3.png')` }}></div>
      <div ref={(e) => (cursors.current[11] = e)} className={Style.cursor} style={{ backgroundImage: `url('/img/testpaint/paint399CA3.png')` }}></div>
      <div ref={(e) => (cursors.current[12] = e)} className={Style.cursor} style={{ backgroundImage: `url('/img/testpaint/paint399CA3.png')` }}></div>
      <div ref={(e) => (cursors.current[13] = e)} className={Style.cursor} style={{ backgroundImage: `url('/img/testpaint/paint399CA3.png')` }}></div>
      <div ref={(e) => (cursors.current[14] = e)} className={Style.cursor} style={{ backgroundImage: `url('/img/testpaint/paint399CA3.png')` }}></div>
      <div ref={(e) => (cursors.current[15] = e)} className={Style.cursor} style={{ backgroundImage: `url('/img/testpaint/paint399CA3.png')` }}></div>
      <div ref={(e) => (cursors.current[16] = e)} className={Style.cursor} style={{ backgroundImage: `url('/img/testpaint/paint399CA3.png')` }}></div>
      <div ref={(e) => (cursors.current[17] = e)} className={Style.cursor} style={{ backgroundImage: `url('/img/testpaint/paint399CA3.png')` }}></div>
      <div ref={(e) => (cursors.current[18] = e)} className={Style.cursor} style={{ backgroundImage: `url('/img/testpaint/paint399CA3.png')` }}></div>
      <div ref={(e) => (cursors.current[19] = e)} className={Style.cursor} style={{ backgroundImage: `url('/img/testpaint/paint399CA3.png')` }}></div>
    </>
  );
};

export default Cursor;
