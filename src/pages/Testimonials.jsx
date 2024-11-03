// src/pages/Testimonials.js
import React from 'react';
import testimonials from '../data/testimonials.json';

const Testimonials = () => (
  <section id="testimonials" className="testimonials">
    <h2>Testimonials</h2>
    <div className="testimonial-list">
      {testimonials.map((testi, index) => (
        <div className="testimonial" key={index}>
          <p>"{testi.feedback}"</p>
          <h4>{testi.name}</h4>
          <small>{testi.role}</small>
        </div>
      ))}
    </div>
  </section>
);

export default Testimonials;
