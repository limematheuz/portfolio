import "./Hero.css";

export default function Hero() {
  return (
    <section className="hero-container">
      <div className="hero-content">
        <h1>
          Matheus
          Ribeiro
        </h1>
        <p className="hero-subtitle">
          I'm a software engineer based in New York City. I specialize in
          building websites, applications, and everything in between. I'm a
          software engineer based in New York City. I specialize in building
          websites, applications, and everything in between.
        </p>
        <div className="hero-buttons">
          <a
            href="https://acrobat.adobe.com/id/urn:aaid:sc:EU:655f4a2e-f991-4309-a430-3da0f33aa4ce"
            target="_blank"
            rel="noopener noreferrer"
          >
            Dowload CV
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

      <span></span>
    </section>
  );
}
