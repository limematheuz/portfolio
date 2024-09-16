import "./ProjectsBento.css";

import tablet from "../../assets/img/8.png";

export default function ProjectsBento(){
    return (
        <section className="projectsBento-container">
        
                <div className="bento-item item1">
                    <img className="small-img bento-img" src={tablet} alt="Imagen 1" />
                </div>
                <div className="bento-item item2">
                    <img className="small-img bento-img" src={tablet} alt="Imagen 2" />
                </div>
                <div className="bento-item item3">
                    <img className="small-img bento-img" src={tablet} alt="Imagen 3" />
                </div>
                <div className="bento-item item4">
                    <img className="big-img bento-img" src={tablet} alt="Imagen 4" />
                </div>
                <div className="bento-item item5">
                    <img className="small-img bento-img" src={tablet} alt="Imagen 5" />
                </div>
                <div className="bento-item item6">
                    <img className="small-img bento-img" src={tablet} alt="Imagen 6" />
                </div>
                <div className="bento-item item7">
                    <img className="big-img bento-img" src={tablet} alt="Imagen 7" />
                </div>

        </section>
    );
};

{/* <section className="projectsBento-container">
<div className="bento-col-left">
  <div className="bentoImg-container">
    <img src="imagen1.jpg" alt="Imagen 1" />
  </div>
  <div className="bentoImg-container">
    <img src="imagen2.jpg" alt="Imagen 2" />
  </div>
</div>
<div className="bento-col-right">
  <div className="bentoImg-container">
    <img src="imagen4.jpg" alt="Imagen 4" />
  </div>
  <div className="bentoImg-container">
    <img src="imagen5.jpg" alt="Imagen 5" />
  </div>
  <div className="bentoImg-container">
    <img src="imagen6.jpg" alt="Imagen 6" />
  </div>
</div>
</section> */}