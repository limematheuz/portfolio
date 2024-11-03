import "./Footer.css";

export default function Footer() {
  return (
    <footer className="footer-container">
      <h3>Ohhh! You've reached the end of our journey 🌌</h3>
      <p>Built with love and a dash of rock by Matheus 🎸🖤</p>
      <p>But hey, let's keep in touch!</p>
      <div className="footer-social">
        <a
          href="https://www.linkedin.com/in/matheus-fernandes-aa2b8b1b7/"
          target="_blank"
          rel="noopener noreferrer"
        >
          <i className="fab fa-linkedin"></i>
        </a>
      </div>
    </footer>
  );
}
