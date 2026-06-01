import "../styles/Skills.css";

function Skills() {
  const skillGroups = {
    "Programming Languages": [
      "C Programming",
      "Python",
      "JavaScript"
    ],

    "Frontend Development": [
      "Frontend Development",
      "HTML",
      "CSS",
      "React.js"
    ],

    "Data Science & Machine Learning": [
      "Machine Learning",
      "Data Analysis",
      "Data Visualization",
      "Data Cleaning",
      "Data Preprocessing"
    ],

    "Cloud Computing": [
      "Amazon Web Services (AWS)",
      "Cloud Computing"
    ],

    "Core Computer Science": [
      "Data Structures",
      "Computer Networks"
    ],

    "Tools & Platforms": [
      "Google Colab",
      "Canva",
      "Git",
      "GitHub",
      "VS Code"
    ]
  };

  return (
    <section id="skills" className="skills">
      <h2 className="section-title">Skills</h2>

      {Object.entries(skillGroups).map(([category, skills]) => (
        <div className="skill-group" key={category}>
          <h3>{category}</h3>

          <div className="skills-grid">
            {skills.map((skill) => (
              <div className="skill-card" key={skill}>
                {skill}
              </div>
            ))}
          </div>
        </div>
      ))}
    </section>
  );
}

export default Skills;