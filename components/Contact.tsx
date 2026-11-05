import React, { useState } from 'react';
import { EMAIL, GITHUB_URL, LINKEDIN_URL } from '../constants';
import { GithubIcon, LinkedinIcon, MailIcon } from './Icons';

const Contact: React.FC = () => {
  const [copied, setCopied] = useState(false);

  const copyEmail = async () => {
    try {
      await navigator.clipboard.writeText(EMAIL);
      setCopied(true);
      setTimeout(() => setCopied(false), 2000);
    } catch {
      /* clipboard blocked: the mailto link still works */
    }
  };

  const links = [
    { href: LINKEDIN_URL, label: 'linkedin.com/in/sarvaiyaom', Icon: LinkedinIcon },
    { href: GITHUB_URL, label: 'github.com/LOGAN3242', Icon: GithubIcon },
  ];

  return (
    <section id="contact" className="relative max-w-[1240px] mx-auto px-5 md:px-8 pb-24 md:pb-28">
      <div className="reveal glassmorphism relative overflow-hidden rounded-[26px] p-8 sm:p-12 flex flex-col lg:flex-row gap-10">
        <div className="aurora-a absolute -left-24 -bottom-24 w-[380px] h-[380px] rounded-full bg-violet-500 opacity-20 blur-[100px]" aria-hidden="true" />
        <div className="relative flex-1 min-w-0 flex flex-col gap-4">
          <span className="font-mono-ui text-[13px] tracking-[0.14em] text-violet-400">CONTACT</span>
          <h2 className="shimmer-text m-0 font-black text-4xl md:text-[54px] tracking-tight leading-[1.02]">Let's build an agent together.</h2>
          <p className="m-0 text-gray-400 text-[17px]">
            Open to AI Engineer roles — remote, hybrid or on-site. Happy to relocate. The chat button in the corner answers questions about my work.
          </p>
        </div>
        <div className="relative flex-1 min-w-0 flex flex-col gap-3 justify-center">
          <div className="glassmorphism flex items-center gap-3.5 px-5 py-4 rounded-2xl">
            <MailIcon className="w-5 h-5 text-cyan-400 shrink-0" />
            <a href={`mailto:${EMAIL}`} className="text-gray-100 hover:text-cyan-300 truncate">{EMAIL}</a>
            <button
              type="button"
              onClick={copyEmail}
              className="ml-auto shrink-0 text-xs bg-gray-800 hover:bg-gray-700 text-gray-300 px-3 py-1.5 rounded-full"
            >
              {copied ? 'Copied!' : 'Copy'}
            </button>
          </div>
          {links.map(({ href, label, Icon }) => (
            <a
              key={href}
              href={href}
              target="_blank"
              rel="noopener noreferrer"
              className="glassmorphism flex items-center gap-3.5 px-5 py-4 rounded-2xl text-gray-100 hover:!border-cyan-500/50 transition-colors"
            >
              <Icon className="w-5 h-5 text-cyan-400 shrink-0" /> {label}
            </a>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Contact;
