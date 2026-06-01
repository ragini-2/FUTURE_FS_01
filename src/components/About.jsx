import "../styles/About.css";

function About() {
  return (
    <section id="about" className="about">

      <div className="about-container">

        <div className="about-image">
          <img
            src="https://images.unsplash.com/photo-1498050108023-c5249f4df085"
            alt="About"
          />
        </div>

        <div className="about-content">
          <h2>About Me</h2>

          <p>
            I am Ragini Iloni, a Computer Science Engineering student at
            SR University, Warangal. I am passionate about web development,
            software engineering, and learning modern technologies.
          </p>

          <p>
            My journey in technology started with programming and has
            expanded into web development, machine learning, and data analysis.
          </p>

          <p>
            I enjoy solving real-world problems, building innovative projects,
            and continuously improving my technical and professional skills.
          </p>

          <p>
            My goal is to secure internship opportunities where I can apply
            my knowledge, gain industry experience, and contribute to
            meaningful projects.
          </p>
        </div>

      </div>

    </section>
  );
}

export default About;