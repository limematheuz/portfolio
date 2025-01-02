import { useContext, useState } from "react";
// import { Link } from "react-router-dom";
import Modal from "../../components/Auth/Modal";
import { ThemeContext } from "../../context/ThemeContext";
import "./FloatingDock.css";

import house from "../../assets/icon/house.svg";
import exp from "../../assets/icon/folder-git-2.svg";
import guitar from "../../assets/icon/guitar.svg";
import user from "../../assets/icon/user.svg";
import moon from "../../assets/icon/sun-moon.svg";
import sun from "../../assets/icon/sun.svg";
import layer from "../../assets/icon/layers.svg";
// import { Modal } from "flowbite-react";

export default function FloatingDock() {
  const themeContext = useContext(ThemeContext);
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [isLoggedIn, setIsLoggedIn] = useState(false);

  const openModal = () => setIsModalOpen(true);
  const closeModal = () => setIsModalOpen(false);

  if (!themeContext) {
    throw new Error("FloatingDock must be used within a ThemeProvider");
  }

  const { theme, toggleTheme } = themeContext;

  return (
    <>
    <section className="dock-container">
      <nav className="dock">
        <ul>
          <li className="dock-navigation controls"> 
            <a href="#">
              <img src={house} />
              <span className="tooltip">Home</span>
            </a>
          </li>
          <li className="dock-navigation controls">
            <a href="#timeLine-container">
              <img src={exp} />
              <span className="tooltip">Experience</span>
            </a>
          </li>
          <li className="dock-navigation controls">
            <a href="#bentoProjects">
              <img src={layer} />
              <span className="tooltip">Projects</span>
            </a>
          </li>
          <li className="dock-navigation controls">
            <a href="">
              <img src={guitar} />
              <span className="tooltip">About me</span>
            </a>
          </li>
          <li className="dock-navigation controls">
            <a onClick={openModal}>
              <img src={user} />
              <span className="tooltip">Profile</span>
            </a>
          </li>
          <li className="dock-navigation controls">
            <a onClick={toggleTheme}>
              <img src={theme === "dark" ? sun : moon} className="dark-mode-dock" />
              <span className="tooltip">Lights</span>
            </a>
          </li>
        </ul>
      </nav>
    </section>
    <Modal isOpen={isModalOpen} onClose={closeModal} isLoggedIn={isLoggedIn} />

    </>

  );
}
