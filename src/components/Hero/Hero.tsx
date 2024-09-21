import { useRef, useEffect } from "react";
import "./Hero.css";

export default function Hero() {
  const textRef = useRef<HTMLSpanElement | null>(null);

  useEffect(() => {
    const textLoad = () => {
      if (textRef.current) {
        setTimeout(() => {
          if (textRef.current)
            textRef.current.textContent = "Full Stack Developer";
        }, 0);
        setTimeout(() => {
          if (textRef.current) textRef.current.textContent = "Musician";
        }, 4000);
        setTimeout(() => {
          if (textRef.current) textRef.current.textContent = "Freelancer";
        }, 8000);
      }
    };

    textLoad();
    const intervalId = setInterval(textLoad, 12000);

    return () => clearInterval(intervalId);
  }, []);

  return (
    <section className="hero-container">
      <div className="hero-content">
        <h1>Matheus Ribeiro</h1>
        <div className="animated-text">
          <span className="text first-text">I'm a </span>
          <span className="text sec-text" ref={textRef}></span>
        </div>
        <p className="hero-subtitle">
          Soy un desarrollador apasionado por nuevos retos, siempre buscando
          aprender y crecer profesionalmente. Me considero polivalente,
          ambicioso y proactivo.
        </p>
        <p>
          Valoro la colaboración en equipo y me gusta escuchar diferentes
          perspectivas para encontrar soluciones creativas y efectivas.
        </p>
        <div className="hero-buttons">
          <a
            href="https://acrobat.adobe.com/id/urn:aaid:sc:EU:e15522e2-dece-4f45-80f4-60f54b1d7ee8"
            target="_blank"
            rel="noopener noreferrer"
          >
            See resume
          </a>
          <a
            href="https://www.linkedin.com/in/matheus-ribeiro-lima/"
            target="_blank"
            rel="noopener noreferrer"
          >
            LinkedIn
          </a>
        </div>
      </div>
    </section>
  );
}
