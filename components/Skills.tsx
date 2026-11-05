import React from 'react';
import { SKILL_CATEGORIES } from '../constants';
import SectionHeading from './SectionHeading';

const accent = {
  purple: { border: '!border-violet-500/45', title: 'text-violet-300' },
  cyan: { border: '!border-cyan-500/45', title: 'text-cyan-300' },
  green: { border: '!border-green-400/40', title: 'text-green-300' },
  orange: { border: '!border-orange-400/40', title: 'text-orange-300' },
};

const Skills: React.FC = () => (
  <section id="skills" className="max-w-[1240px] mx-auto px-5 md:px-8 py-20 md:py-24 flex flex-col gap-11">
    <SectionHeading eyebrow="SKILLS" title="The agent toolkit" tone="violet" />
    <div className="reveal grid gap-[18px] grid-cols-[repeat(auto-fit,minmax(min(100%,280px),1fr))]">
      {SKILL_CATEGORIES.map(cat => (
        <div key={cat.name} className={`glassmorphism rounded-[20px] p-6 flex flex-col gap-4 transition-transform hover:-translate-y-1 ${accent[cat.accent].border}`}>
          <h3 className={`m-0 text-[19px] font-bold ${accent[cat.accent].title}`}>{cat.name}</h3>
          <div className="flex flex-wrap gap-2 text-sm">
            {cat.skills.map(s => (
              <span key={s} className="px-3 py-1.5 rounded-full bg-gray-800 text-gray-200">{s}</span>
            ))}
          </div>
        </div>
      ))}
    </div>
  </section>
);

export default Skills;
