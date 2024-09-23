import "./ToolSlider.css";

import azure from "../../assets/toolsIcons/azure.svg";
import docker from "../../assets/toolsIcons/docker.svg";
import git from "../../assets/toolsIcons/git.svg";
import github from "../../assets/toolsIcons/github.svg";
import trello from "../../assets/toolsIcons/trello.svg";
import figma from "../../assets/toolsIcons/fig.svg";
import sqlserver from "../../assets/toolsIcons/sqlserver.svg";
import node from "../../assets/toolsIcons/node.svg";

export const ToolSlider = () => {
  return (
    <div className="toolSlider-container">
      <img src={azure} alt="" className="toolItem toolItem1" />
      <img src={docker} alt="" className="toolItem toolItem2" />
      <img src={git} alt="" className="toolItem toolItem3" />
      <img src={github} alt="" className="toolItem toolItem4" />
      <img src={trello} alt="" className="toolItem toolItem5" />
      <img src={figma} alt="" className="toolItem toolItem6" />
      <img src={sqlserver} alt="" className="toolItem toolItem7" />
      <img src={node} alt="" className="toolItem toolItem8" />
    </div>
  );
};