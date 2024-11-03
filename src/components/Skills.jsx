// src/components/Skills.js
import React from 'react';

const skills = {
  frontend: ["React.js", "Next.js"],
  backend: ["Nest.js", "Express.js", "Spring Boot"],
  database: ["MySQL", "PostgreSQL"]
};

const Skills = () => (
  <section className="skills">
    <h2>Skills</h2>
    <div className="skill-set">
      {Object.keys(skills).map((category) => (
        <div key={category}>
          <h3>{category.charAt(0).toUpperCase() + category.slice(1)}</h3>
          <ul>
            {skills[category].map((skill) => (
              <li key={skill}>{skill}</li>
            ))}
          </ul>
        </div>
      ))}
    </div>
  </section>
);

export default Skills;
