import "./Footer.css";
import git from "../../assets/icon/github.svg";
import linkedin from "../../assets/icon/linkedin.svg";
import mail from "../../assets/icon/mail.svg";

export default function Footer() {
  return (
    <footer className="footer-container">
      <h3>Ohhh! You've reached the end of our journey</h3>
      <p>Built with love and a dash of rock by Matheus 🎸🖤</p>
      <div className="footer-social">
        <a
          href="https://github.com/limematheuz"
          target="_blank"
          rel="noopener noreferrer"
        >
          <img src={git} alt="github" />
        </a>
        <a
          href="https://www.linkedin.com/in/matheus-ribeiro-lima/"
          target="_blank"
          rel="noopener noreferrer"
        >
          <img src={linkedin} alt="linkedin" />
        </a>
        <a
          href="mailto:mribeiro17.info@gmail.com"
          target="_blank"
          rel="noopener noreferrer"
        >
          <img src={mail} alt="mail" />
        </a>
      </div>
    </footer>
  );
}
