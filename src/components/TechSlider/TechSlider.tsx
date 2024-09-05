import "./TechSlider.css";

import html from "../../assets/techIcons/html.svg";
import css from "../../assets/techIcons/css.svg";
import js from "../../assets/techIcons/js.svg";
import ts from "../../assets/techIcons/ts.svg";
import csharp from "../../assets/techIcons/csharp.svg";
import react from "../../assets/techIcons/react.svg";
import angular from "../../assets/techIcons/angular.svg";
import node from "../../assets/techIcons/node.svg";


function TecnologiesSlider() {
  return (
      <div className="techSlider-container">
        {/* <h2 className="techSlider-title">Technologies</h2> */}
        <img src={html} alt="" className="techItem techItem1" />
        <img src={css} alt="" className="techItem techItem2" />
        <img src={js} alt="" className="techItem techItem3" />
        <img src={ts} alt="" className="techItem techItem4" />
        <img src={csharp} alt="" className="techItem techItem5" />
        <img src={react} alt="" className="techItem techItem6" />
        <img src={angular} alt="" className="techItem techItem7" />
        <img src={node} alt="" className="techItem techItem8" />
      </div>
  );
}

export default TecnologiesSlider;
