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
            <div className="bento-tech-badges">
              <div style={{ backgroundColor: "#58c4dc" }}>React</div>
              <div style={{ backgroundColor: "#e9c930" }}>JavaScript</div>
              <div style={{ backgroundColor: "#e44b20" }}>HTML</div>
              <div style={{ backgroundColor: "#254ce3" }}>CSS</div>
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
            <div className="bento-tech-badges">
              <div style={{ backgroundColor: "#58c4dc" }}>React</div>
              <div style={{ backgroundColor: "#e9c930" }}>JavaScript</div>
              <div style={{ backgroundColor: "#6c287e" }}>.Net</div>
              <div style={{ backgroundColor: "black" }}>JWT</div>
              <div style={{ backgroundColor: "#e20f1b" }}>SQLServer</div>
              <div style={{ backgroundColor: "#6c287e" }}>C#</div>
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
            <div className="bento-tech-badges">
              <div style={{ backgroundColor: "#58c4dc" }}>React</div>
              <div style={{ backgroundColor: "#e9c930" }}>JavaScript</div>
              <div style={{ backgroundColor: "#6c287e" }}>.Net</div>
              <div style={{ backgroundColor: "black" }}>JWT</div>
              <div style={{ backgroundColor: "#e20f1b" }}>SQLServer</div>
              <div style={{ backgroundColor: "#6c287e" }}>C#</div>
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
            <div className="bento-tech-badges">
              <div style={{ backgroundColor: "#58c4dc" }}>React</div>
              <div style={{ backgroundColor: "#e9c930" }}>JavaScript</div>
              <div style={{ backgroundColor: "#e44b20" }}>HTML</div>
              <div style={{ backgroundColor: "#254ce3" }}>CSS</div>
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
            <div className="bento-tech-badges">
              <div style={{ backgroundColor: "#58c4dc" }}>React</div>
              <div style={{ backgroundColor: "#e9c930" }}>JavaScript</div>
              <div style={{ backgroundColor: "#e44b20" }}>HTML</div>
              <div style={{ backgroundColor: "#254ce3" }}>CSS</div>
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
            <div className="bento-tech-badges">
              <div style={{ backgroundColor: "#58c4dc" }}>React</div>
              <div style={{ backgroundColor: "#e9c930" }}>JavaScript</div>
              <div style={{ backgroundColor: "#e44b20" }}>HTML</div>
              <div style={{ backgroundColor: "#254ce3" }}>CSS</div>
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
            <div className="bento-tech-badges">
            <div style={{ backgroundColor: "#b73538" }}>Angular</div>
              <div style={{ backgroundColor: "#377cc8" }}>TypeScript</div>
              <div style={{ backgroundColor: "#6c287e" }}>.Net</div>
              <div style={{ backgroundColor: "black" }}>JWT</div>
              <div style={{ backgroundColor: "#376695" }}>PostgreSQL</div>
              <div style={{ backgroundColor: "#6c287e" }}>C#</div>
            </div>
          </span>
        </a>
        <span></span>
      </div>
    </section>
  );
}
