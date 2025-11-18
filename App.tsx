
import React, { useEffect } from 'react';
import Hero from './components/Hero';
import About from './components/About';
import Skills from './components/Skills';
import Experience from './components/Experience';
import Projects from './components/Projects';
import FutureGoals from './components/FutureGoals';
import Education from './components/Education';
import Certificates from './components/Certificates';
import Contact from './components/Contact';
import Chatbot from './components/Chatbot';
import './index.css';

const Header: React.FC = () => {
  const navLinks = ['About', 'Skills', 'Experience', 'Projects', 'Education', 'Certificates', 'Goals', 'Contact'];
  const hrefs = ['#about', '#skills', '#experience', '#projects', '#education', '#certificates', '#future-goals', '#contact'];

  return (
    <header className="fixed top-0 left-0 right-0 z-40 glassmorphism">
      <nav className="container mx-auto px-6 py-4 flex justify-between items-center">
        <a href="#hero" className="text-2xl font-bold gradient-text">Om Sarvaiya</a>
        <div className="hidden md:flex space-x-6">
          {navLinks.map((link, index) => (
            <a key={link} href={hrefs[index]} className="text-gray-300 hover:text-cyan-400 transition-colors duration-300">
              {link}
            </a>
          ))}
        </div>
      </nav>
    </header>
  );
};

const App: React.FC = () => {
  useEffect(() => {
    const observer = new IntersectionObserver((entries) => {
      entries.forEach(entry => {
        if (entry.isIntersecting) {
          entry.target.classList.add('is-visible');
        }
      });
    }, { threshold: 0.1 });

    const sections = document.querySelectorAll('section');
    sections.forEach(section => {
        observer.observe(section);
    });
    
    return () => {
      sections.forEach(section => observer.unobserve(section));
    }
  }, []);

  return (
    <div className="bg-[#0a0a0a] text-gray-200">
      <Header />
      <main>
        <Hero />
        <section id="about" className="fade-in-section"><About /></section>
        <section id="skills" className="fade-in-section"><Skills /></section>
        <section id="experience" className="fade-in-section"><Experience /></section>
        <section id="projects" className="fade-in-section"><Projects /></section>
        <section id="education" className="fade-in-section"><Education /></section>
        <section id="certificates" className="fade-in-section"><Certificates /></section>
        <section id="future-goals" className="fade-in-section"><FutureGoals /></section>
        <section id="contact" className="fade-in-section"><Contact /></section>
      </main>
      <Chatbot />
      <footer className="text-center py-8 border-t border-gray-800">
        <div className="flex justify-center items-center space-x-4 mb-4">
            <a href="https://www.linkedin.com/in/sarvaiya-om" target="_blank" rel="noopener noreferrer" className="text-gray-400 hover:text-cyan-400 transition-colors duration-300">
                <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="currentColor" viewBox="0 0 24 24">
                    <path d="M16 8a6 6 0 0 1 6 6v7h-4v-7a2 2 0 0 0-2-2 2 2 0 0 0-2 2v7h-4v-7a6 6 0 0 1 6-6zM6 9H2V21h4V9zM4 6a2 2 0 1 0 0-4 2 2 0 0 0 0 4z" />
                </svg>
            </a>
        </div>
        <p>&copy; {new Date().getFullYear()} Om Sarvaiya. All rights reserved.</p>
      </footer>
    </div>
  );
};

export default App;
