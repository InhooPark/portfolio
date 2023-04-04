import React, { useContext, useEffect, useState } from "react";
import Style from "@/Styles/test.module.scss";
import { MyContext } from "@/context/Context.tsx";

const Test = () => {
  const { randomBrushType, randomBrushColor } = useContext(MyContext);
  // width = "해당 컨텐츠 크기 아마도 100%?"
  // viewBox = "0 0 907.2 198.45"
  // fill = `${randomBrushColor}`
  // path d = `${randomBrushType}`
  const [brushcolor, setBrushcolor] = useState();
  const [brushtype, setBrushtype] = useState();

  useEffect(() => {
    let color = randomBrushColor();
    let type = randomBrushType();
    setBrushcolor(color);
    setBrushtype(type);
  }, []);

  if (brushtype !== undefined && brushcolor !== undefined) {
    return (
      <main className={Style.test_main}>
        <div className={Style.test}>
          <svg width="100%" viewBox="0 0 907.2 198.45" fill={`#${brushcolor}`}>
            <path d={`${brushtype}`} />
          </svg>
        </div>
      </main>
    );
  }
};

export default Test;
