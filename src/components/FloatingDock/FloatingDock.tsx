import "./FloatingDock.css";

import house from "../../assets/icon/house.svg";
import exp from "../../assets/icon/folder-git-2.svg";
import guitar from "../../assets/icon/guitar.svg";
import volume from "../../assets/icon/volume-2.svg";
import moon from "../../assets/icon/sun-moon.svg";
import layer from "../../assets/icon/layers.svg";

export default function FloatingDock() {
  return (
    <section className="dock-container">
    <nav className="dock">
    <ul>
      <li className="dock-navigation controls" >
        <a href="#" >
          <img src={house} />
          <span className="tooltip">Home</span>
        </a>
      </li>
      <li className="dock-navigation controls" >
        <a href="#timeLine-container">
          <img src={exp} />
          <span className="tooltip">Experience</span>
        </a>
      </li>
      <li className="dock-navigation controls" >
        <a href="#bentoProjects" >
          <img src={layer} />
          <span className="tooltip">Projects</span>
        </a>
      </li>
      <li className="dock-navigation controls" >
        <a href="" >
          <img src={guitar} />
          <span className="tooltip">About me</span>
        </a>
      </li>
      <li className="dock-navigation controls" >
        <a href="#" >
          <img src={volume} />
          <span className="tooltip">Sound</span>
        </a>
      </li>
      <li className="dock-navigation controls" >
        <a href="" >
          <img src={moon} />
          <span className="tooltip">Ligths</span>
        </a>
      </li>
    </ul>
  </nav>
  </section>
  )
}
