import { useRef, useEffect } from "react";
import "./Hero.css";

export default function Hero() {
  const textRef = useRef<HTMLSpanElement | null>(null);

  useEffect(() => {
    const textLoad = () => {
      if (textRef.current) {
        setTimeout(() => {
          if (textRef.current) textRef.current.textContent = "Full Stack Developer";
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
          I'm a software engineer, with a focus on web development and
          JavaScript. I'm passionate about technology and I love to learn new
          things.
        </p>
        <div className="hero-buttons">
          <a
            href="https://acrobat.adobe.com/id/urn:aaid:sc:EU:655f4a2e-f991-4309-a430-3da0f33aa4ce"
            target="_blank"
            rel="noopener noreferrer"
          >
            Download CV
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