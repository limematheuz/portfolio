import { useRef, useEffect } from "react";
// import check from "../../assets/icon/check.svg";
import "./Hero.css";
// import music from "../../assets/bgsvg/pngwing.com.svg";

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
        <h2>Hello I'm </h2>
        <h1>Matheus Ribeiro</h1>
        <div className="animated-text">
          <span className="text first-text">a </span>
          <span className="text sec-text" ref={textRef}></span>
        </div>
        <p className="hero-subtitle">
          who loves learning new things and taking on
          challenges. I'm excited about new opportunities and always looking to
          grow both personally and professionally.
        </p>
        <div className="hero-buttons">
          <a
            href="https://acrobat.adobe.com/id/urn:aaid:sc:EU:a615683e-2132-47c7-8bd3-c7462449494c"
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
        <div className="hero-badge">
          <h3>Shut up and let's work</h3>
          {/* <img src={check} alt="" /> */}
        </div>
      </div>
    </section>
  );
}
