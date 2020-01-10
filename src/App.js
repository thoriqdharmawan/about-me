import React, { Fragment } from "react";
import "./App.css";
import HeroImage from "./utils/HeroImage";
import TextHero from "./components/TextHero";
import Contact from "./pages/Contact";
import Bio from "./pages/Bio";

function App() {
  return (
    <Fragment>
      <div className="container mt-thq">
        <div className="row">
          <div className="col-sm">
            <HeroImage />
          </div>
          <div className="col-sm">
            <TextHero />
          </div>
        </div>
      </div>

      <div id="section2" className="container driver ">
        <Bio />
      </div>

      <div className=" mt-5 mb-5 section-2 bg-bottom">
        <Contact />
      </div>
    </Fragment>
  );
}

export default App;
