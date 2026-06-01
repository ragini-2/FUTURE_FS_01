import { useState } from "react";
import "../styles/Projects.css";

function Projects() {

  const [selectedProject, setSelectedProject] = useState(null);

  const projects = [
    {
      title: "Student Management System",
      tech: "C Programming",
      image:
        "https://images.unsplash.com/photo-1516321318423-f06f85e504b3",
      shortDesc:
        "Manage student records efficiently.",
      fullDesc:
        "A C Programming based system that allows users to add, update, delete and display student records.",
      features: [
        "Add Student",
        "Update Student",
        "Delete Student",
        "Display Records"
      ]
    },

    {
      title: "Library Management System",
      tech: "Figma, UI/UX",
      image:
        "https://images.unsplash.com/photo-1507842217343-583bb7270b66",
      shortDesc:
        "Modern library management prototype.",
      fullDesc:
        "Designed a user-friendly library management system prototype using Figma focusing on user experience.",
      features: [
        "Book Management",
        "Student Dashboard",
        "Easy Navigation",
        "Modern UI"
      ]
    },

    {
      title: "Plant Health Detection by Colours",
      tech: "Python, Machine Learning",
      image:
        "https://images.unsplash.com/photo-1466692476868-aef1dfb1e735",
      shortDesc:
        "Detect plant health using color analysis.",
      fullDesc:
        "Machine Learning project that identifies plant health conditions using color pattern recognition.",
      features: [
        "Color Detection",
        "Health Prediction",
        "Image Processing",
        "ML Model"
      ]
    },

    {
      title: "Impact of Screen Time on Mental Health",
      tech: "Python, Data Analysis",
      image:
        "https://images.unsplash.com/photo-1516321497487-e288fb19713f",
      shortDesc:
        "Analyze screen time trends.",
      fullDesc:
        "Analyzes relationships between screen usage and mental health indicators using machine learning and data analysis.",
      features: [
        "Data Cleaning",
        "Visualization",
        "Machine Learning",
        "Trend Analysis"
      ]
    },

    {
      title: "Personal Portfolio Website",
      tech: "React.js, CSS",
      image:
        "https://images.unsplash.com/photo-1498050108023-c5249f4df085",
      shortDesc:
        "Modern responsive portfolio website.",
      fullDesc:
        "A professional portfolio website developed using React.js with responsive design and modern UI principles.",
      features: [
        "Responsive Design",
        "Modern UI",
        "React Components",
        "Interactive Sections"
      ]
    }
  ];

  return (
    <section id="projects" className="projects">

      <h2 className="section-title">Projects</h2>

      <div className="projects-grid">

        {projects.map((project, index) => (
          <div className="project-card" key={index}>

            <img
              src={project.image}
              alt={project.title}
              onClick={() => setSelectedProject(project)}
            />

            <div className="project-content">

              <h3>{project.title}</h3>

              <span>{project.tech}</span>

              <p>{project.shortDesc}</p>

              <button
                className="project-btn"
                onClick={() => setSelectedProject(project)}
              >
                View Details
              </button>

            </div>

          </div>
        ))}

      </div>

      {selectedProject && (
        <div
          className="modal-overlay"
          onClick={() => setSelectedProject(null)}
        >
          <div
            className="modal-content"
            onClick={(e) => e.stopPropagation()}
          >

            <h2>{selectedProject.title}</h2>

            <img
              src={selectedProject.image}
              alt={selectedProject.title}
            />

            <p>{selectedProject.fullDesc}</p>

            <h3>Features</h3>

            <ul>
              {selectedProject.features.map((feature, i) => (
                <li key={i}>{feature}</li>
              ))}
            </ul>

            <button
              className="close-btn"
              onClick={() => setSelectedProject(null)}
            >
              Close
            </button>

          </div>
        </div>
      )}

    </section>
  );
}

export default Projects;