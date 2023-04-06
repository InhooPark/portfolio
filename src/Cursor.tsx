import React, { useContext, useEffect, useRef, useState } from "react";
import Style from "@/styles/cursor.module.scss";
import { MyContext } from "@/context/Context";

type typeCursor = {
  x: number;
  y: number;
};
const Cursor = ({ x, y }: typeCursor) => {
  const { windowHeight }: any = useContext(MyContext);
  const cursors: any = useRef([]);
  let ranDeg: number;
  let ranColor: number;
  let preX = 0;
  let preY = 0;
  const color = ["399CA3", "F4BE1D", "F48D20"];
  const [selectColor, setSelectColor] = useState("399CA3");
  const [selectDeg, setSelectDeg] = useState(0);

  function randomSet() {
    ranDeg = Math.random() * 360;
    ranColor = Math.floor(Math.random() * 3);
    setSelectDeg(ranDeg);
    setSelectColor(color[ranColor]);
  }

  useEffect(() => {
    // randomSet();
    cursors.current.map((cursor: any) => {
      cursor.x = 0;
      cursor.y = windowHeight;
    });
  }, []);

  useEffect(() => {
    preX = x;
    preY = y;
    cursors.current.map((cursor: any, index: number) => {
      cursor.style.left = x + "px";
      cursor.style.top = y + windowHeight + "px";
      cursor.style.rotate = `${selectDeg}deg`;
      cursor.style.translate = "-50% -50%";
      cursor.style.opacity = "1";
      cursor.style.transition = "opacity 150ms";
      cursor.style.backgroundImage = `url("/img/testpaint/paint${selectColor}.png")`;
      cursor.x = x;
      cursor.y = y;

      const nextCursor: any = cursors.current[index + 1] || cursors.current[0];
      x += (nextCursor.x - x) * 0.03;
      y += (nextCursor.y - y) * 0.03;
    });
  }, [x, y]);

  let term = setInterval(function timer() {
    if (preX === x && preY === y) {
      cursors.current.map((cursor: any) => {
        if (cursor !== null) {
          cursor.style.opacity = "0";
        }
      });
      randomSet();
    } else {
      clearInterval(term);
    }
  }, 250);
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
      <div ref={(e) => (cursors.current[20] = e)} className={Style.cursor} style={{ backgroundImage: `url('/img/testpaint/paint399CA3.png')` }}></div>
      <div ref={(e) => (cursors.current[21] = e)} className={Style.cursor} style={{ backgroundImage: `url('/img/testpaint/paint399CA3.png')` }}></div>
      <div ref={(e) => (cursors.current[22] = e)} className={Style.cursor} style={{ backgroundImage: `url('/img/testpaint/paint399CA3.png')` }}></div>
      <div ref={(e) => (cursors.current[23] = e)} className={Style.cursor} style={{ backgroundImage: `url('/img/testpaint/paint399CA3.png')` }}></div>
      <div ref={(e) => (cursors.current[24] = e)} className={Style.cursor} style={{ backgroundImage: `url('/img/testpaint/paint399CA3.png')` }}></div>
      <div ref={(e) => (cursors.current[25] = e)} className={Style.cursor} style={{ backgroundImage: `url('/img/testpaint/paint399CA3.png')` }}></div>
      <div ref={(e) => (cursors.current[26] = e)} className={Style.cursor} style={{ backgroundImage: `url('/img/testpaint/paint399CA3.png')` }}></div>
      <div ref={(e) => (cursors.current[27] = e)} className={Style.cursor} style={{ backgroundImage: `url('/img/testpaint/paint399CA3.png')` }}></div>
      <div ref={(e) => (cursors.current[28] = e)} className={Style.cursor} style={{ backgroundImage: `url('/img/testpaint/paint399CA3.png')` }}></div>
      <div ref={(e) => (cursors.current[29] = e)} className={Style.cursor} style={{ backgroundImage: `url('/img/testpaint/paint399CA3.png')` }}></div>
      <div ref={(e) => (cursors.current[30] = e)} className={Style.cursor} style={{ backgroundImage: `url('/img/testpaint/paint399CA3.png')` }}></div>
      <div ref={(e) => (cursors.current[31] = e)} className={Style.cursor} style={{ backgroundImage: `url('/img/testpaint/paint399CA3.png')` }}></div>
      <div ref={(e) => (cursors.current[32] = e)} className={Style.cursor} style={{ backgroundImage: `url('/img/testpaint/paint399CA3.png')` }}></div>
      <div ref={(e) => (cursors.current[33] = e)} className={Style.cursor} style={{ backgroundImage: `url('/img/testpaint/paint399CA3.png')` }}></div>
      <div ref={(e) => (cursors.current[34] = e)} className={Style.cursor} style={{ backgroundImage: `url('/img/testpaint/paint399CA3.png')` }}></div>
      <div ref={(e) => (cursors.current[35] = e)} className={Style.cursor} style={{ backgroundImage: `url('/img/testpaint/paint399CA3.png')` }}></div>
      <div ref={(e) => (cursors.current[36] = e)} className={Style.cursor} style={{ backgroundImage: `url('/img/testpaint/paint399CA3.png')` }}></div>
      <div ref={(e) => (cursors.current[37] = e)} className={Style.cursor} style={{ backgroundImage: `url('/img/testpaint/paint399CA3.png')` }}></div>
      <div ref={(e) => (cursors.current[38] = e)} className={Style.cursor} style={{ backgroundImage: `url('/img/testpaint/paint399CA3.png')` }}></div>
      <div ref={(e) => (cursors.current[39] = e)} className={Style.cursor} style={{ backgroundImage: `url('/img/testpaint/paint399CA3.png')` }}></div>
      <div ref={(e) => (cursors.current[40] = e)} className={Style.cursor} style={{ backgroundImage: `url('/img/testpaint/paint399CA3.png')` }}></div>
      <div ref={(e) => (cursors.current[41] = e)} className={Style.cursor} style={{ backgroundImage: `url('/img/testpaint/paint399CA3.png')` }}></div>
      <div ref={(e) => (cursors.current[42] = e)} className={Style.cursor} style={{ backgroundImage: `url('/img/testpaint/paint399CA3.png')` }}></div>
      <div ref={(e) => (cursors.current[43] = e)} className={Style.cursor} style={{ backgroundImage: `url('/img/testpaint/paint399CA3.png')` }}></div>
      <div ref={(e) => (cursors.current[44] = e)} className={Style.cursor} style={{ backgroundImage: `url('/img/testpaint/paint399CA3.png')` }}></div>
      <div ref={(e) => (cursors.current[45] = e)} className={Style.cursor} style={{ backgroundImage: `url('/img/testpaint/paint399CA3.png')` }}></div>
      <div ref={(e) => (cursors.current[46] = e)} className={Style.cursor} style={{ backgroundImage: `url('/img/testpaint/paint399CA3.png')` }}></div>
      <div ref={(e) => (cursors.current[47] = e)} className={Style.cursor} style={{ backgroundImage: `url('/img/testpaint/paint399CA3.png')` }}></div>
      <div ref={(e) => (cursors.current[48] = e)} className={Style.cursor} style={{ backgroundImage: `url('/img/testpaint/paint399CA3.png')` }}></div>
      <div ref={(e) => (cursors.current[49] = e)} className={Style.cursor} style={{ backgroundImage: `url('/img/testpaint/paint399CA3.png')` }}></div>
      <div ref={(e) => (cursors.current[50] = e)} className={Style.cursor} style={{ backgroundImage: `url('/img/testpaint/paint399CA3.png')` }}></div>
      <div ref={(e) => (cursors.current[51] = e)} className={Style.cursor} style={{ backgroundImage: `url('/img/testpaint/paint399CA3.png')` }}></div>
      <div ref={(e) => (cursors.current[52] = e)} className={Style.cursor} style={{ backgroundImage: `url('/img/testpaint/paint399CA3.png')` }}></div>
      <div ref={(e) => (cursors.current[53] = e)} className={Style.cursor} style={{ backgroundImage: `url('/img/testpaint/paint399CA3.png')` }}></div>
      <div ref={(e) => (cursors.current[54] = e)} className={Style.cursor} style={{ backgroundImage: `url('/img/testpaint/paint399CA3.png')` }}></div>
      <div ref={(e) => (cursors.current[55] = e)} className={Style.cursor} style={{ backgroundImage: `url('/img/testpaint/paint399CA3.png')` }}></div>
      <div ref={(e) => (cursors.current[56] = e)} className={Style.cursor} style={{ backgroundImage: `url('/img/testpaint/paint399CA3.png')` }}></div>
      <div ref={(e) => (cursors.current[57] = e)} className={Style.cursor} style={{ backgroundImage: `url('/img/testpaint/paint399CA3.png')` }}></div>
      <div ref={(e) => (cursors.current[58] = e)} className={Style.cursor} style={{ backgroundImage: `url('/img/testpaint/paint399CA3.png')` }}></div>
      <div ref={(e) => (cursors.current[59] = e)} className={Style.cursor} style={{ backgroundImage: `url('/img/testpaint/paint399CA3.png')` }}></div>
      <div ref={(e) => (cursors.current[60] = e)} className={Style.cursor} style={{ backgroundImage: `url('/img/testpaint/paint399CA3.png')` }}></div>
      <div ref={(e) => (cursors.current[61] = e)} className={Style.cursor} style={{ backgroundImage: `url('/img/testpaint/paint399CA3.png')` }}></div>
      <div ref={(e) => (cursors.current[62] = e)} className={Style.cursor} style={{ backgroundImage: `url('/img/testpaint/paint399CA3.png')` }}></div>
      <div ref={(e) => (cursors.current[63] = e)} className={Style.cursor} style={{ backgroundImage: `url('/img/testpaint/paint399CA3.png')` }}></div>
      <div ref={(e) => (cursors.current[64] = e)} className={Style.cursor} style={{ backgroundImage: `url('/img/testpaint/paint399CA3.png')` }}></div>
      <div ref={(e) => (cursors.current[65] = e)} className={Style.cursor} style={{ backgroundImage: `url('/img/testpaint/paint399CA3.png')` }}></div>
      <div ref={(e) => (cursors.current[66] = e)} className={Style.cursor} style={{ backgroundImage: `url('/img/testpaint/paint399CA3.png')` }}></div>
      <div ref={(e) => (cursors.current[67] = e)} className={Style.cursor} style={{ backgroundImage: `url('/img/testpaint/paint399CA3.png')` }}></div>
      <div ref={(e) => (cursors.current[68] = e)} className={Style.cursor} style={{ backgroundImage: `url('/img/testpaint/paint399CA3.png')` }}></div>
      <div ref={(e) => (cursors.current[69] = e)} className={Style.cursor} style={{ backgroundImage: `url('/img/testpaint/paint399CA3.png')` }}></div>
      <div ref={(e) => (cursors.current[70] = e)} className={Style.cursor} style={{ backgroundImage: `url('/img/testpaint/paint399CA3.png')` }}></div>
      <div ref={(e) => (cursors.current[71] = e)} className={Style.cursor} style={{ backgroundImage: `url('/img/testpaint/paint399CA3.png')` }}></div>
      <div ref={(e) => (cursors.current[72] = e)} className={Style.cursor} style={{ backgroundImage: `url('/img/testpaint/paint399CA3.png')` }}></div>
      <div ref={(e) => (cursors.current[73] = e)} className={Style.cursor} style={{ backgroundImage: `url('/img/testpaint/paint399CA3.png')` }}></div>
      <div ref={(e) => (cursors.current[74] = e)} className={Style.cursor} style={{ backgroundImage: `url('/img/testpaint/paint399CA3.png')` }}></div>
      <div ref={(e) => (cursors.current[75] = e)} className={Style.cursor} style={{ backgroundImage: `url('/img/testpaint/paint399CA3.png')` }}></div>
      <div ref={(e) => (cursors.current[76] = e)} className={Style.cursor} style={{ backgroundImage: `url('/img/testpaint/paint399CA3.png')` }}></div>
      <div ref={(e) => (cursors.current[77] = e)} className={Style.cursor} style={{ backgroundImage: `url('/img/testpaint/paint399CA3.png')` }}></div>
      <div ref={(e) => (cursors.current[78] = e)} className={Style.cursor} style={{ backgroundImage: `url('/img/testpaint/paint399CA3.png')` }}></div>
      <div ref={(e) => (cursors.current[79] = e)} className={Style.cursor} style={{ backgroundImage: `url('/img/testpaint/paint399CA3.png')` }}></div>
      <div ref={(e) => (cursors.current[80] = e)} className={Style.cursor} style={{ backgroundImage: `url('/img/testpaint/paint399CA3.png')` }}></div>
      <div ref={(e) => (cursors.current[81] = e)} className={Style.cursor} style={{ backgroundImage: `url('/img/testpaint/paint399CA3.png')` }}></div>
      <div ref={(e) => (cursors.current[82] = e)} className={Style.cursor} style={{ backgroundImage: `url('/img/testpaint/paint399CA3.png')` }}></div>
      <div ref={(e) => (cursors.current[83] = e)} className={Style.cursor} style={{ backgroundImage: `url('/img/testpaint/paint399CA3.png')` }}></div>
      <div ref={(e) => (cursors.current[84] = e)} className={Style.cursor} style={{ backgroundImage: `url('/img/testpaint/paint399CA3.png')` }}></div>
      <div ref={(e) => (cursors.current[85] = e)} className={Style.cursor} style={{ backgroundImage: `url('/img/testpaint/paint399CA3.png')` }}></div>
      <div ref={(e) => (cursors.current[86] = e)} className={Style.cursor} style={{ backgroundImage: `url('/img/testpaint/paint399CA3.png')` }}></div>
      <div ref={(e) => (cursors.current[87] = e)} className={Style.cursor} style={{ backgroundImage: `url('/img/testpaint/paint399CA3.png')` }}></div>
      <div ref={(e) => (cursors.current[88] = e)} className={Style.cursor} style={{ backgroundImage: `url('/img/testpaint/paint399CA3.png')` }}></div>
      <div ref={(e) => (cursors.current[89] = e)} className={Style.cursor} style={{ backgroundImage: `url('/img/testpaint/paint399CA3.png')` }}></div>
      <div ref={(e) => (cursors.current[90] = e)} className={Style.cursor} style={{ backgroundImage: `url('/img/testpaint/paint399CA3.png')` }}></div>
      <div ref={(e) => (cursors.current[91] = e)} className={Style.cursor} style={{ backgroundImage: `url('/img/testpaint/paint399CA3.png')` }}></div>
      <div ref={(e) => (cursors.current[92] = e)} className={Style.cursor} style={{ backgroundImage: `url('/img/testpaint/paint399CA3.png')` }}></div>
      <div ref={(e) => (cursors.current[93] = e)} className={Style.cursor} style={{ backgroundImage: `url('/img/testpaint/paint399CA3.png')` }}></div>
      <div ref={(e) => (cursors.current[94] = e)} className={Style.cursor} style={{ backgroundImage: `url('/img/testpaint/paint399CA3.png')` }}></div>
      <div ref={(e) => (cursors.current[95] = e)} className={Style.cursor} style={{ backgroundImage: `url('/img/testpaint/paint399CA3.png')` }}></div>
      <div ref={(e) => (cursors.current[96] = e)} className={Style.cursor} style={{ backgroundImage: `url('/img/testpaint/paint399CA3.png')` }}></div>
      <div ref={(e) => (cursors.current[97] = e)} className={Style.cursor} style={{ backgroundImage: `url('/img/testpaint/paint399CA3.png')` }}></div>
      <div ref={(e) => (cursors.current[98] = e)} className={Style.cursor} style={{ backgroundImage: `url('/img/testpaint/paint399CA3.png')` }}></div>
      <div ref={(e) => (cursors.current[99] = e)} className={Style.cursor} style={{ backgroundImage: `url('/img/testpaint/paint399CA3.png')` }}></div>
    </>
  );
};

export default Cursor;
