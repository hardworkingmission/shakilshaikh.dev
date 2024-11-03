import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Home from './pages/Home';
import Skills from './components/Skills';
import Projects from './pages/Projects';
import Testimonials from './pages/Testimonials';
import Contact from './pages/Contact';
import NotFound from './pages/NotFound';
import Layout from './pages/Layout';
import './styles.css';


const App = () => (
  <Router>
  <Layout>
    <Routes>
      <Route path="/" element={<Home />} />
      <Route path="/skills" element={<Skills />} />
      <Route path="/projects" element={<Projects />} />
      <Route path="/testimonials" element={<Testimonials />} />
      <Route path="/contact" element={<Contact />} />
      <Route path="*" element={<NotFound />} />
    </Routes>
  </Layout>
  </Router>
);

export default App;
