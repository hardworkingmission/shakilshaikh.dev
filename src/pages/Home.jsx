// src/pages/Home.js
import React from 'react';
import { Typewriter } from 'react-simple-typewriter';

const Home = () => (
  <section id="home" className="home">
    <div className="intro">
      <h1>Md. Shakil Shaikh</h1>
      <p>
        <Typewriter
          words={['Full Stack Developer', 'React | Next | Spring Boot']}
          loop={0} // Set to 0 to loop indefinitely
          cursor
          cursorStyle="|"
          typeSpeed={70}
          deleteSpeed={50}
          delaySpeed={1000}
        />
      </p>
      <div className="buttons">
        <button onClick={() => window.open("resume_link")}>View Resume</button>
        <button onClick={() => window.open("upwork_profile_link")}>Hire Me</button>
      </div>
    </div>
  </section>
);

export default Home;
