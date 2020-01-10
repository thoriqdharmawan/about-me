import React from "react";
import "../App.css";
import Welcome from "../pages/welcome";

const TextHero = () => {
  return (
    <>
      <Welcome />
      <p className="paragraph ml-thq">
        lorem asfasf sdgasdg asdgasd asdgasdg asfasf sdgasdg asdgasd asdgasdg
        asfasf sdgasdg asdgasd asdgasdg asfasf sdgasdg asdgasd asdgasdg
      </p>
      <div className="box-s box-one"></div>
      <div className="box-t box-two"></div>
      <a href="#section2" className="btn secondary ml-thq p-btn mt-3">
        Get Started
      </a>
    </>
  );
};

export default TextHero;
