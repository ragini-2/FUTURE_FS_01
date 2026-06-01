import "../styles/Hero.css";
import { motion } from "framer-motion";
import {ReactTyped} from "react-typed";
import profile from "../assets/profile.jpeg";
import resume from "../assets/resume.pdf";


function Hero() {
  return (
    <section id="home" className="hero">
        <div className="background-animation">
  <span>{"</>"}</span>
  <span>{"{}"}</span>
  <span>{"()"}</span>
  <span>{"[]"}</span>
  <span>{"<>"}</span>
  <span>{"0101"}</span>
  <span>{"C++"}</span>
  <span>{"JS"}</span>
</div>

      <div className="hero-content">

        <div className="hero-text">
          <motion.h1 initial={{ opacity: 0, y: -50 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 1 }}
>
  Ragini Iloni
</motion.h1>

          <h3 className="typing-text">
  <ReactTyped
    strings={[
      "Web Developer",
      "Data Analyst",
      "Quick Learner"
    ]}
    typeSpeed={80}
    backSpeed={50}
    loop
  />
</h3>
          <p>
            Passionate Computer Science Engineering student dedicated
            to building modern web applications and continuously
            learning new technologies to solve real-world problems.
          </p>

          <div className="hero-buttons">
            <button className="btn btn-primary">
              <a href={resume} target="_blank" rel="noreferrer">
                Download Resume
              </a>
            </button>
          </div>
        </div>

        <div className="hero-image">
          <img src={profile} alt="Ragini Iloni" />
        </div>

      </div>

    </section>
  );
}

export default Hero;