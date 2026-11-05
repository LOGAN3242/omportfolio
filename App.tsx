import React, { useEffect } from 'react';
import Header from './components/Header';
import Hero from './components/Hero';
import Marquee from './components/Marquee';
import Impact from './components/Impact';
import Projects from './components/Projects';
import Experience from './components/Experience';
import Skills from './components/Skills';
import Education from './components/Education';
import Resume from './components/Resume';
import Contact from './components/Contact';
import Chatbot from './components/Chatbot';
import { GITHUB_URL, LINKEDIN_URL } from './constants';
import { GithubIcon, LinkedinIcon } from './components/Icons';
import './index.css';

const App: React.FC = () => {
  // Scroll reveal for elements marked .reveal (content is visible without JS)
  useEffect(() => {
    const els = document.querySelectorAll('.reveal');
    if (!('IntersectionObserver' in window)) {
      els.forEach(el => el.classList.add('is-visible'));
      return;
    }
    const observer = new IntersectionObserver(
      entries =>
        entries.forEach(entry => {
          if (entry.isIntersecting) {
            entry.target.classList.add('is-visible');
            observer.unobserve(entry.target);
          }
        }),
      { threshold: 0.1 }
    );
    els.forEach(el => observer.observe(el));
    return () => observer.disconnect();
  }, []);

  return (
    <div className="bg-[#0a0a0a] text-gray-200 overflow-x-hidden">
      <Header />
      <main>
        <Hero />
        <Marquee />
        <Impact />
        <Projects />
        <Experience />
        <Skills />
        <Education />
        <Resume />
        <Contact />
      </main>
      <Chatbot />
      <footer className="border-t border-white/[0.08]">
        <div className="max-w-[1240px] mx-auto px-5 md:px-8 py-7 flex flex-wrap gap-4 justify-between items-center text-sm text-gray-400">
          <span>&copy; {new Date().getFullYear()} Om Sarvaiya</span>
          <div className="flex items-center gap-4">
            <a href={LINKEDIN_URL} target="_blank" rel="noopener noreferrer" aria-label="LinkedIn" className="hover:text-cyan-400"><LinkedinIcon /></a>
            <a href={GITHUB_URL} target="_blank" rel="noopener noreferrer" aria-label="GitHub" className="hover:text-cyan-400"><GithubIcon /></a>
          </div>
        </div>
      </footer>
    </div>
  );
};

export default App;
