import React from 'react';
import { EDUCATION } from '../constants';

const Education: React.FC = () => (
  <section id="education" className="max-w-[1240px] mx-auto px-5 md:px-8 pb-20 flex flex-col gap-6">
    <h2 className="m-0 font-mono-ui text-[13px] tracking-[0.14em] text-cyan-400 font-normal text-center">EDUCATION</h2>
    <div className="reveal grid gap-5 grid-cols-[repeat(auto-fit,minmax(min(100%,380px),1fr))]">
      {EDUCATION.map(edu => (
        <div key={edu.degree} className="glassmorphism rounded-[20px] p-6 flex items-center gap-5">
          <span className="w-12 h-12 shrink-0 rounded-xl bg-violet-500/15 text-violet-300 flex items-center justify-center" aria-hidden="true">
            <svg className="w-6 h-6" fill="none" stroke="currentColor" strokeWidth={1.8} strokeLinecap="round" strokeLinejoin="round" viewBox="0 0 24 24">
              <path d="M2 9l10-5 10 5-10 5z" /><path d="M6 11v5c3 2 9 2 12 0v-5" />
            </svg>
          </span>
          <div className="flex flex-col gap-0.5 min-w-0">
            <h3 className="m-0 text-lg font-bold">{edu.degree}</h3>
            <span className="text-gray-300">{edu.university}</span>
            <span className="font-mono-ui text-[13px] text-gray-500">{edu.period} · CGPA {edu.cgpa}</span>
          </div>
        </div>
      ))}
    </div>
  </section>
);

export default Education;
