// src/pages/Projects.js
import React from 'react';
import "./styles/project.css"

const projects = [
  { title: "Project One", tech: ["React.js", "Node.js"], description: "Description here", link: "#" },
  // More projects...
];

const Projects = () => (
  <section className="projects">
    <h2>Projects</h2>
    <div className="project-list">
      {projects.map((project, index) => (
        <div className="project-card" key={index}>
          <h3>{project.title}</h3>
          <p>{project.description}</p>
          <a href={project.link}>Live Demo</a>
        </div>
      ))}
    </div>
  </section>
);

export default Projects;
