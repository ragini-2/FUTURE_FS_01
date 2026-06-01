import "../styles/Education.css";

function Education() {
  return (
    <section id="education" className="education">

      <h2 className="section-title">Education</h2>

      <div className="education-container">

        <div className="education-card">
          <h3>B.Tech Computer Science & Engineering</h3>
          <h4>SR University, Warangal</h4>
          <span>2024 – 2028</span>
          <p>
            Pursuing Bachelor of Technology in Computer Science and
            Engineering with a focus on software development,
            machine learning, data analysis, and web technologies.
          </p>
        </div>

        <div className="education-card">
          <h3>Intermediate (MPC)</h3>
          <h4>Meluha Junior College, Hyderabad</h4>
          <span>2022 – 2024</span>
          <p>
            Completed Intermediate education with an outstanding
            score of <strong>95.6%</strong>.
          </p>
        </div>

        <div className="education-card">
          <h3>Secondary School Education (SSC)</h3>
          <h4>Government High School, Krishna Colony, Warangal</h4>
          <span>2021 – 2022</span>
          <p>
            Completed SSC with an excellent score of
            <strong> 98%</strong>.
          </p>
        </div>

      </div>

    </section>
  );
}

export default Education;