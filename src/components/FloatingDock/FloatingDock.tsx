import "./FloatingDock.css";

import house from "../../assets/icon/house.svg";
import exp from "../../assets/icon/folder-git-2.svg";
import guitar from "../../assets/icon/guitar.svg";
import volume from "../../assets/icon/volume-2.svg";
import moon from "../../assets/icon/sun-moon.svg";
import sun from "../../assets/icon/sun.svg";
import layer from "../../assets/icon/layers.svg";
import { useEffect, useState } from "react";

export default function FloatingDock() {
  const [theme, setTheme] = useState("dark");

  useEffect(() => {
    document.documentElement.className = theme;
  }, [theme]);

  const toggleTheme = () => {
    setTheme(theme === "dark" ? "light" : "dark");
  };

  return (
    <section className="dock-container">
      <nav className="dock">
        <ul>
          <li className="dock-navigation controls ">
            <a href="#">
              <img src={house} />
              <span className="tooltip">Home</span>
            </a>
          </li>
          <li className="dock-navigation controls ">
            <a href="#timeLine-container">
              <img src={exp} />
              <span className="tooltip">Experience</span>
            </a>
          </li>
          <li className="dock-navigation controls ">
            <a href="#bentoProjects">
              <img src={layer} />
              <span className="tooltip">Projects</span>
            </a>
          </li>
          <li className="dock-navigation controls ">
            <a href="">
              <img src={guitar} />
              <span className="tooltip">About me</span>
            </a>
          </li>
          <li className="dock-navigation controls ">
            <a href="#">
              <img src={volume} />
              <span className="tooltip">Sound</span>
            </a>
          </li>
          <li className="dock-navigation controls">
            <a onClick={toggleTheme} >
              <img src={theme === "dark" ? moon : sun} className="dark-mode-dock" />
              <span className="tooltip">Lights</span>
            </a>
          </li>
        </ul>
      </nav>
    </section>
  );
}

