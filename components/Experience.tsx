import React from 'react';
import { EXPERIENCES } from '../constants';
import SectionHeading from './SectionHeading';

const Experience: React.FC = () => (
  <section id="experience" className="bg-gray-900/35 border-y border-white/[0.06]">
    <div className="max-w-[1000px] mx-auto px-5 md:px-8 py-20 md:py-24 flex flex-col gap-11">
      <SectionHeading eyebrow="EXPERIENCE" title="From websites to agents" />

      <ol className="reveal relative m-0 p-0 list-none flex flex-col gap-5 pl-11">
        <div className="flow-v absolute left-[11px] top-2 bottom-2 w-0.5 opacity-80" aria-hidden="true" />
        {EXPERIENCES.map(exp => (
          <li key={exp.company} className="relative">
            {exp.current ? (
              <span className="absolute -left-11 top-[22px] w-6 h-6" aria-hidden="true">
                <span className="ping-soft absolute inset-0 rounded-full bg-cyan-500" />
                <span className="absolute inset-1 rounded-full bg-cyan-500 shadow-[0_0_16px_#06b6d4]" />
              </span>
            ) : (
              <span className="absolute -left-10 top-[26px] w-4 h-4 rounded-full bg-[#0a0a0a] border-2 border-violet-500" aria-hidden="true" />
            )}
            <div className={`glassmorphism rounded-[18px] px-6 sm:px-7 py-6 flex flex-col gap-2 ${exp.current ? '!border-cyan-500/45' : ''}`}>
              <div className="flex justify-between gap-x-3 gap-y-1 flex-wrap">
                <h3 className="m-0 text-xl font-bold">{exp.role}</h3>
                <span className={`font-mono-ui text-[13px] ${exp.current ? 'text-cyan-400' : 'text-violet-400'}`}>{exp.period}</span>
              </div>
              <span className="text-gray-300 font-semibold">{exp.company} · {exp.location}</span>
              <ul className="m-0 mt-1 pl-0 list-none flex flex-col gap-1.5 text-gray-400 text-[15px]">
                {exp.description.map(d => (
                  <li key={d} className="flex gap-2.5"><span className="text-cyan-400/80">▹</span>{d}</li>
                ))}
              </ul>
              <div className="flex gap-2 flex-wrap mt-2">
                {exp.technologies.map(t => (
                  <span key={t} className="bg-gray-800 text-cyan-300 text-xs font-medium px-2.5 py-1 rounded-full">{t}</span>
                ))}
              </div>
            </div>
          </li>
        ))}
      </ol>
    </div>
  </section>
);

export default Experience;
