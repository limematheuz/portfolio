import "./ProjectsBento.css";

import pedro from "../../assets/img/1.png";
import movies from "../../assets/img/2.png";
import lighteyes from "../../assets/img/3.png";
import tablet from "../../assets/img/11.png";
import rrjTablet from "../../assets/img/9.png";
import phone from "../../assets/img/6.png";
import rrj from "../../assets/img/10.png";

export default function ProjectsBento() {
  return (
    <section id="bentoProjects" className="bentoProjects-container">
      <h2>Projects</h2>
      <div className="projectsBento-container">
        <a
          href="https://pedrosremodelingnc.com/"
          target="_blank"
          rel="noopener noreferrer"
          className="bento-item item1"
        >
          <img className="small-img bento-img" src={pedro} alt="Imagen 1" />
          <span className="bento-about-projects">
            <p>Pedro's Remodeling</p>
            <div className="bento-tech-badges">
              <div style={{ backgroundColor: "#58c4dc45", color: "#58c4dc" }}>
                React
              </div>
              <div style={{ backgroundColor: "#e9ca304e", color: "#ffd500" }}>
                JavaScript
              </div>
              <div style={{ backgroundColor: "#e44a2050", color: "#fd3700" }}>
                HTML
              </div>
              <div style={{ backgroundColor: "#254be351", color: "#005eff" }}>
                CSS
              </div>
            </div>
          </span>
        </a>
        <a
          href="https://matflix-react.vercel.app/"
          target="_blank"
          rel="noopener noreferrer"
          className="bento-item item2"
        >
          <img className="small-img bento-img" src={movies} alt="Imagen 2" />
          <span className="bento-about-projects">
            <p>MatFlix</p>
            <div className="bento-tech-badges">
              <div style={{ backgroundColor: "#58c4dc45", color: "#58c4dc" }}>
                React
              </div>
              <div style={{ backgroundColor: "#e9ca304e", color: "#ffd500" }}>
                JavaScript
              </div>
              <div style={{ backgroundColor: "#6b287e54", color: "#c800ff" }}>
                .Net
              </div>
              <div style={{ backgroundColor: "#00000050", color: "#cacaca" }}>
                JWT
              </div>
              <div style={{ backgroundColor: "#e20f1949", color: "#ff000d" }}>
                SQLServer
              </div>
              <div style={{ backgroundColor: "#6b287e54", color: "#c800ff" }}>
                C#
              </div>
            </div>
          </span>
        </a>
        <a
          href="https://matflix-react.vercel.app/"
          target="_blank"
          rel="noopener noreferrer"
          className="bento-item item3"
        >
          <img className="small-img bento-img" src={rrj} alt="Imagen 3" />
          <span className="bento-about-projects">
            <p>MatFlix</p>
            <div className="bento-tech-badges">
              <div style={{ backgroundColor: "#58c4dc45", color: "#58c4dc" }}>
                React
              </div>
              <div style={{ backgroundColor: "#e9ca304e", color: "#ffd500" }}>
                JavaScript
              </div>
              <div style={{ backgroundColor: "#6b287e54", color: "#c800ff" }}>
                .Net
              </div>
              <div style={{ backgroundColor: "#00000050", color: "#cacaca" }}>
                JWT
              </div>
              <div style={{ backgroundColor: "#e20f1949", color: "#ff000d" }}>
                SQLServer
              </div>
              <div style={{ backgroundColor: "#6b287e54", color: "#c800ff" }}>
                C#
              </div>
            </div>
          </span>
        </a>
        <a
          href="https://rrjremodeling.com/"
          target="_blank"
          rel="noopener noreferrer"
          className="bento-item item4"
        >
          <img className="big-img bento-img" src={rrjTablet} alt="Imagen 4" />
          <span className="bento-about-projects">
            <p>RRJ Remodeling</p>
            <div className="bento-tech-badges">
              <div style={{ backgroundColor: "#58c4dc45", color: "#58c4dc" }}>
                React
              </div>
              <div style={{ backgroundColor: "#e9ca304e", color: "#ffd500" }}>
                JavaScript
              </div>
              <div style={{ backgroundColor: "#e44a2050", color: "#fd3700" }}>
                HTML
              </div>
              <div style={{ backgroundColor: "#254be351", color: "#005eff" }}>
                CSS
              </div>
            </div>
          </span>
        </a>
        <a
          href="https://pedrosremodelingnc.com/"
          target="_blank"
          rel="noopener noreferrer"
          className="bento-item item5"
        >
          <img className="small-img bento-img" src={tablet} alt="Imagen 5" />
          <span className="bento-about-projects">
            <p>Pedro's Remodeling</p>
            <div className="bento-tech-badges">
              <div style={{ backgroundColor: "#58c4dc45", color: "#58c4dc" }}>
                React
              </div>
              <div style={{ backgroundColor: "#e9ca304e", color: "#ffd500" }}>
                JavaScript
              </div>
              <div style={{ backgroundColor: "#e44a2050", color: "#fd3700" }}>
                HTML
              </div>
              <div style={{ backgroundColor: "#254be351", color: "#005eff" }}>
                CSS
              </div>
            </div>
          </span>
        </a>
        <a
          href="https://rrjremodeling.com/"
          target="_blank"
          rel="noopener noreferrer"
          className="bento-item item6"
        >
          <img className="small-img bento-img" src={phone} alt="Imagen 6" />
          <span className="bento-about-projects">
            <p>RRJ Remodeling</p>
            <div className="bento-tech-badges">
              <div style={{ backgroundColor: "#58c4dc45", color: "#58c4dc" }}>
                React
              </div>
              <div style={{ backgroundColor: "#e9ca304e", color: "#ffd500" }}>
                JavaScript
              </div>
              <div style={{ backgroundColor: "#e44a2050", color: "#fd3700" }}>
                HTML
              </div>
              <div style={{ backgroundColor: "#254be351", color: "#005eff" }}>
                CSS
              </div>
            </div>
          </span>
        </a>
        <a
          href="https://light-eyes-client.vercel.app/"
          target="_blank"
          rel="noopener noreferrer"
          className="bento-item item7"
        >
          <img className="big-img bento-img" src={lighteyes} alt="Imagen 7" />
          <span className="bento-about-projects">
            <p>Light Eyes</p>
            <div className="bento-tech-badges">
              <div style={{ backgroundColor: "#b735374f", color: "#ff0004" }}>
                Angular
              </div>
              <div style={{ backgroundColor: "#377dc84c", color: "#007bfe" }}>
                TypeScript
              </div>
              <div style={{ backgroundColor: "#6b287e54", color: "#c800ff" }}>
                .Net
              </div>
              <div style={{ backgroundColor: "#00000050", color: "#cacaca" }}>
                JWT
              </div>
              <div style={{ backgroundColor: "#37669543", color: "#0080ff" }}>
                PostgreSQL
              </div>
              <div style={{ backgroundColor: "#6b287e54", color: "#c800ff" }}>
                C#
              </div>
            </div>
          </span>
        </a>
        <span></span>
      </div>
    </section>
  );
}
