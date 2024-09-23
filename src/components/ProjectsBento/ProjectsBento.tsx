import "./ProjectsBento.css";

import tablet from "../../assets/img/11.png";
import movies from "../../assets/img/3.png";
import rrjTablet from "../../assets/img/9.png";
import pedro from "../../assets/img/2.png";
// import phone from "../../assets/img/5.png";
import rrj from "../../assets/img/10.png";
import remodeling from "../../assets/img/6.png";


export default function ProjectsBento(){
    return (
        <section id="bentoProjects" className="bentoProjects-container" >
            <h2>Projects</h2>
            <div className="projectsBento-container">            
                <a href="https://pedrosremodelingnc.com/" target="_blank" rel="noopener noreferrer" className="bento-item item1">
                    <img className="small-img bento-img" src={tablet} alt="Imagen 1" />
                    <span></span>
                </a >
                <a href="https://matflix-react.vercel.app/" target="_blank" rel="noopener noreferrer" className="bento-item item2">
                    <img className="small-img bento-img" src={movies} alt="Imagen 2" />
                    <span></span>
                </a >
                <a href="https://pedrosremodelingnc.com/" target="_blank" rel="noopener noreferrer" className="bento-item item3">
                    <img className="small-img bento-img" src={pedro} alt="Imagen 3" />
                    <span></span>
                </a >
                <a href="https://rrjremodeling.com/" target="_blank" rel="noopener noreferrer" className="bento-item item4">
                    <img className="big-img bento-img" src={rrjTablet} alt="Imagen 4" />
                    <span></span>
                </a >
                <a href="https://pedrosremodelingnc.com/" target="_blank" rel="noopener noreferrer" className="bento-item item5">
                    <img className="small-img bento-img" src={tablet} alt="Imagen 5" />
                    <span></span>
                </a >
                <a href="https://rrjremodeling.com/" target="_blank" rel="noopener noreferrer" className="bento-item item6">
                    <img className="small-img bento-img" src={rrj} alt="Imagen 6" />
                    <span></span>
                </a >
                <a href="https://light-eyes-client.vercel.app/" target="_blank" rel="noopener noreferrer" className="bento-item item7">
                    <img className="big-img bento-img" src={remodeling} alt="Imagen 7" />
                    <span></span>
                </a >
            <span></span>
            </div>
        </section>
    );
};
