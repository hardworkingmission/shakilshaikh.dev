// src/pages/Contact.js
import React, { useState } from 'react';
import './styles/contact.css'

const Contact = () => {
  const [formData, setFormData] = useState({ name: '', email: '', message: '' });
  const [isSubmitted, setIsSubmitted] = useState(false);

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prev) => ({ ...prev, [name]: value }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    // Normally, here you'd send the data to an API or email service
    console.log('Form submitted:', formData);
    setIsSubmitted(true);
    setFormData({ name: '', email: '', message: '' });
  };

  return (
    <section id="contact" className="contact">
      <h2>Contact Me</h2>
      {isSubmitted ? (
        <p className="success-message">Thank you for reaching out! I will get back to you soon.</p>
      ) : (
        <form onSubmit={handleSubmit} className="contact-form">
          <label>
            Name:
            <input
              type="text"
              name="name"
              value={formData.name}
              onChange={handleChange}
              required
            />
          </label>
          <label>
            Email:
            <input
              type="email"
              name="email"
              value={formData.email}
              onChange={handleChange}
              required
            />
          </label>
          <label>
            Message:
            <textarea
              name="message"
              value={formData.message}
              onChange={handleChange}
              required
            />
          </label>
          <button type="submit">Send Message</button>
        </form>
      )}
      <div className="contact-info">
        <h3>Connect with me</h3>
        <div className="social-links">
          <a href="https://www.linkedin.com/in/md-shakil-shaikh" target="_blank" rel="noopener noreferrer">LinkedIn</a>
          <a href="https://github.com/shakilshaikh" target="_blank" rel="noopener noreferrer">GitHub</a>
        </div>
      </div>
    </section>
  );
};

export default Contact;
