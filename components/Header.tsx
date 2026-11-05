import React, { useEffect, useState } from 'react';
import { NAV_LINKS, GITHUB_URL, RESUME_URL, RESUME_FILENAME } from '../constants';
import { CloseIcon, DownloadIcon, GithubIcon, MenuIcon } from './Icons';

const Header: React.FC = () => {
  const [open, setOpen] = useState(false);
  const [active, setActive] = useState('');

  // Highlight the section currently in view
  useEffect(() => {
    const ids = NAV_LINKS.map(l => l.href.slice(1));
    const observer = new IntersectionObserver(
      entries => entries.forEach(e => e.isIntersecting && setActive(e.target.id)),
      { rootMargin: '-45% 0px -50% 0px' }
    );
    ids.forEach(id => {
      const el = document.getElementById(id);
      if (el) observer.observe(el);
    });
    return () => observer.disconnect();
  }, []);

  // Close the mobile menu with Escape
  useEffect(() => {
    const onKey = (e: KeyboardEvent) => e.key === 'Escape' && setOpen(false);
    window.addEventListener('keydown', onKey);
    return () => window.removeEventListener('keydown', onKey);
  }, []);

  return (
    <header className="fixed top-0 inset-x-0 z-40 glassmorphism border-x-0 border-t-0">
      <nav className="max-w-[1240px] mx-auto px-5 md:px-8 py-3.5 flex items-center justify-between gap-5" aria-label="Main">
        <a href="#top" className="shimmer-text text-xl md:text-2xl font-extrabold tracking-tight">Om Sarvaiya</a>

        <div className="hidden md:flex items-center gap-7 text-[15px]">
          {NAV_LINKS.map(link => (
            <a
              key={link.href}
              href={link.href}
              className={`transition-colors ${active === link.href.slice(1) ? 'text-cyan-400' : 'text-gray-300 hover:text-white'}`}
            >
              {link.label}
            </a>
          ))}
          <a href={GITHUB_URL} target="_blank" rel="noopener noreferrer" aria-label="GitHub" className="text-gray-300 hover:text-white">
            <GithubIcon />
          </a>
          <a
            href={RESUME_URL}
            download={RESUME_FILENAME}
            className="shine-box flex items-center gap-2 px-4 py-2.5 rounded-[10px] bg-gradient-to-r from-violet-500 to-cyan-500 text-white text-sm font-semibold"
          >
            <DownloadIcon /> Résumé
          </a>
        </div>

        <button
          type="button"
          onClick={() => setOpen(o => !o)}
          aria-label={open ? 'Close menu' : 'Open menu'}
          aria-expanded={open}
          aria-controls="mobile-menu"
          className="md:hidden glassmorphism w-11 h-11 rounded-xl flex items-center justify-center text-gray-100"
        >
          {open ? <CloseIcon /> : <MenuIcon />}
        </button>
      </nav>

      {open && (
        <div id="mobile-menu" className="md:hidden px-3 pb-4">
          <div className="rounded-2xl border border-white/10 bg-[#0d1117]/95 px-5 pt-2 pb-5 flex flex-col">
            {NAV_LINKS.map(link => (
              <a
                key={link.href}
                href={link.href}
                onClick={() => setOpen(false)}
                className="py-3.5 text-lg font-semibold text-gray-100 border-b border-white/[0.07] last:border-0"
              >
                {link.label}
              </a>
            ))}
            <div className="flex gap-2.5 mt-3">
              <a
                href={RESUME_URL}
                download={RESUME_FILENAME}
                className="shine-box flex-1 flex items-center justify-center gap-2 py-3.5 rounded-xl bg-gradient-to-r from-violet-500 to-cyan-500 text-white font-bold"
              >
                <DownloadIcon /> Download Résumé
              </a>
              <a
                href={GITHUB_URL}
                target="_blank"
                rel="noopener noreferrer"
                aria-label="GitHub"
                className="glassmorphism w-[52px] flex items-center justify-center rounded-xl text-gray-100"
              >
                <GithubIcon />
              </a>
            </div>
          </div>
        </div>
      )}
    </header>
  );
};

export default Header;
