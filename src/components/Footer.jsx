import "../styles/Footer.css";

function Footer() {
  return (
    <footer className="footer">

      <h3>Ragini Iloni</h3>

      <div className="footer-links">
        <a href="#home">Home</a>
        <a href="#about">About</a>
        <a href="#education">Education</a>
        <a href="#skills">Skills</a>
        <a href="#projects">Projects</a>
        <a href="#contact">Contact</a>
      </div>

      <div className="footer-socials">
        <a
          href="https://github.com/ragini-2"
          target="_blank"
          rel="noreferrer"
        >
          GitHub
        </a>

        <a
          href="https://www.linkedin.com/in/iloni-ragini-8a163b336"
          target="_blank"
          rel="noreferrer"
        >
          LinkedIn
        </a>
      </div>

      <p>
        © 2026 Ragini Iloni. All Rights Reserved.
      </p>

    </footer>
  );
}

export default Footer;