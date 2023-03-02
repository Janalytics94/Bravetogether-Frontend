import React, { useEffect, useLayoutEffect, useState } from "react";
import "./BeBoldCircle.css";

const BeBoldCircle = () => {
  const [position, setPosition] = useState(0);
  const [opacatiyCircle, setOpacatiyCircle] = useState(1);

  useLayoutEffect(() => {
    window.addEventListener("scroll", () => setPosition(window.scrollY));
  }, []);

  useEffect(() => {
    setOpacatiyCircle(1 - position / 100);
  }, [position]);

  return (
    <>
      {position < 100 ? (
        <div className="background_circle" style={{ opacity: opacatiyCircle }}>
          <div className="circle">
            <h1 className="text">BE BRAVE</h1>
          </div>
        </div>
      ) : (
        <div className="background_circle_not">
          <div className="circle_no_display"></div>
        </div>
      )}
    </>
  );
};

export default BeBoldCircle;
