
import React from 'react';
import { EXPERIENCES } from '../constants';
import { type Experience as ExperienceType } from '../types';

const ExperienceCard: React.FC<{ experience: ExperienceType, index: number }> = ({ experience, index }) => {
  const alignment = index % 2 === 0 ? 'md:text-left' : 'md:text-right';
  const itemPlacement = index % 2 === 0 ? 'md:items-start' : 'md:items-end';
  const timelineDot = index % 2 === 0 ? 'md:left-[-1px] md:translate-x-[-50%]' : 'md:right-[-1px] md:translate-x-[50%]';
  const timelineConnector = index % 2 === 0 ? 'md:left-0' : 'md:right-0';

  return (
    <div className={`relative flex flex-col ${itemPlacement} md:w-1/2 ${index % 2 === 0 ? 'md:pr-8' : 'md:pl-8 md:self-end'}`}>
       <div className={`absolute top-5 h-5 w-5 rounded-full bg-cyan-500 z-10 hidden md:block ${timelineDot}`}></div>
       <div className={`glassmorphism p-6 rounded-lg shadow-lg w-full mb-8`}>
            <p className="text-sm text-cyan-400 mb-1">{experience.period}</p>
            <h3 className="text-xl font-bold text-white">{experience.role}</h3>
            <p className="text-md font-semibold text-gray-300 mb-3">{experience.company} - {experience.location}</p>
            <ul className="list-disc list-inside text-gray-400 space-y-2">
                {experience.description.map((desc, i) => <li key={i}>{desc}</li>)}
            </ul>
            <div className="mt-4 flex flex-wrap gap-2">
                {experience.technologies.map((tech, i) => (
                    <span key={i} className="bg-gray-700 text-cyan-300 text-xs font-medium px-2.5 py-1 rounded-full">{tech}</span>
                ))}
            </div>
        </div>
    </div>
  );
}

const Experience: React.FC = () => {
    return (
        <section id="experience" className="py-20 bg-[#0a0a0a]">
            <div className="container mx-auto px-6">
                <h2 className="text-4xl font-bold text-center mb-12 gradient-text">Professional Experience</h2>
                <div className="relative flex flex-col items-center">
                    <div className="absolute top-0 h-full w-0.5 bg-gray-700 hidden md:block"></div>
                    {EXPERIENCES.map((exp, index) => (
                        <ExperienceCard key={index} experience={exp} index={index} />
                    ))}
                </div>
            </div>
        </section>
    );
};

export default Experience;
