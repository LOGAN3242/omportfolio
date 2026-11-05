import React from 'react';
import { BUILDING_NOW, OTHER_PROJECTS, PROJECTS, SPECWRITE } from '../constants';
import { type Project } from '../types';
import SectionHeading from './SectionHeading';
import { GithubIcon, ProjectGlyph } from './Icons';

const accentClasses = {
  cyan: { blob: 'bg-cyan-500', icon: 'bg-cyan-500/15 text-cyan-400', chip: 'bg-cyan-500/12 text-cyan-300' },
  purple: { blob: 'bg-violet-500', icon: 'bg-violet-500/15 text-violet-400', chip: 'bg-violet-500/14 text-violet-300' },
};

const Dots: React.FC<{ offset?: number }> = ({ offset = 0 }) => (
  <span className="flex gap-1" aria-hidden="true">
    {[0, 0.2, 0.4].map(d => (
      <span key={d} className="think w-[5px] h-[5px] rounded-full bg-violet-400" style={{ animationDelay: `${d + offset}s` }} />
    ))}
  </span>
);

const AgentFlow: React.FC = () => (
  <div
    className="relative rounded-[18px] px-4 sm:px-6 py-7 flex flex-col items-center text-sm font-semibold bg-[radial-gradient(ellipse_at_50%_45%,rgba(139,92,246,.18),transparent_70%)]"
    role="img"
    aria-label="SpecWrite architecture: documents feed a shared context, four agents analyse in parallel, a referee de-duplicates and ranks, and a gap report goes to the buyer."
  >
    <div className="glassmorphism px-5 py-3 rounded-xl">Procurement docs</div>
    <div className="flow-v w-0.5 h-[34px]" />
    <div className="glow-pulse px-5 py-3 rounded-xl border border-cyan-500 bg-cyan-500/10 text-cyan-300">Shared context</div>
    <div className="flow-v w-0.5 h-[22px]" />
    <div className="flow-h w-[78%] h-0.5" />
    <div className="grid grid-cols-4 gap-2 sm:gap-2.5 w-full">
      {SPECWRITE.agents.map((agent, i) => (
        <div key={agent} className="flex flex-col items-center">
          <div className="flow-v w-0.5 h-5" />
          <div className="glassmorphism w-full px-1 py-3 rounded-xl text-center flex flex-col items-center gap-1.5 text-[11px] sm:text-sm">
            {agent}
            <Dots offset={i * 0.15} />
          </div>
          <div className="flow-v w-0.5 h-5" />
        </div>
      ))}
    </div>
    <div className="flow-h w-[78%] h-0.5" />
    <div className="flow-v w-0.5 h-[22px]" />
    <div className="glow-pulse px-5 py-3 rounded-xl border border-violet-500 bg-violet-500/12 text-violet-300">Referee · dedupe + rank</div>
    <div className="flow-v w-0.5 h-[34px]" />
    <div className="px-5 py-3 rounded-xl bg-gradient-to-r from-violet-500 to-cyan-500 text-white">Gap report → buyer</div>
  </div>
);

const ProjectCard: React.FC<{ project: Project; compact?: boolean }> = ({ project, compact }) => {
  const a = accentClasses[project.accent];
  return (
    <article className="glassmorphism relative overflow-hidden rounded-[20px] p-7 flex flex-col gap-3.5 transition-transform duration-300 hover:-translate-y-1.5">
      <div className={`absolute -right-14 -top-14 w-44 h-44 rounded-full ${a.blob} opacity-[0.18] blur-[50px]`} aria-hidden="true" />
      <div className="flex items-center justify-between gap-3">
        <span className={`w-[46px] h-[46px] rounded-xl flex items-center justify-center ${a.icon}`}>
          <ProjectGlyph icon={project.icon} className="w-[22px] h-[22px]" />
        </span>
        {project.status && (
          <span className="flex items-center gap-2 px-3 py-1 rounded-full border border-amber-400/40 bg-amber-400/10 text-amber-300 text-xs font-semibold">
            <span className="think w-1.5 h-1.5 rounded-full bg-amber-300" aria-hidden="true" />
            {project.status}
          </span>
        )}
      </div>
      <h3 className={`m-0 font-bold ${compact ? 'text-lg' : 'text-[22px]'}`}>{project.title}</h3>
      <p className="m-0 text-gray-400 text-[15px]">{project.summary}</p>
      {project.points && (
        <ul className="m-0 p-0 list-none flex flex-col gap-1.5 text-sm text-gray-300">
          {project.points.map(pt => (
            <li key={pt} className="flex gap-2"><span className="text-cyan-400">▹</span>{pt}</li>
          ))}
        </ul>
      )}
      <div className="flex gap-2 flex-wrap mt-auto pt-1">
        {project.technologies.map(t => (
          <span key={t} className={`px-2.5 py-1 rounded-full text-xs ${a.chip}`}>{t}</span>
        ))}
      </div>
      {(project.note || project.github) && (
        <div className="flex items-center justify-between gap-3 pt-3 border-t border-white/[0.07] text-[13px]">
          {project.note && <span className="font-mono-ui text-gray-500">{project.note}</span>}
          {project.github && (
            <a href={project.github} target="_blank" rel="noopener noreferrer" className="flex items-center gap-1.5 text-cyan-400 hover:text-cyan-300 font-semibold">
              <GithubIcon className="w-4 h-4" /> Follow on GitHub
            </a>
          )}
        </div>
      )}
    </article>
  );
};

const Projects: React.FC = () => (
  <section id="projects" className="max-w-[1240px] mx-auto px-5 md:px-8 py-20 md:py-24 flex flex-col gap-11">
    <SectionHeading eyebrow="PROJECTS" title="Agents in production" tone="violet" />

    {/* Featured: SpecWrite */}
    <div className="reveal border-spin rounded-[26px]">
      <div className="border-spin-inner rounded-[25px] bg-[#0d1117] p-6 sm:p-10 lg:p-12 flex flex-col lg:flex-row gap-10 lg:gap-12">
        <div className="flex-1 min-w-0 flex flex-col gap-4">
          <div className="flex gap-2.5 flex-wrap text-[13px] font-semibold">
            <span className="px-3 py-1.5 rounded-full bg-gradient-to-r from-violet-500 to-cyan-500 text-white">Featured</span>
            <span className="glassmorphism px-3 py-1.5 rounded-full text-gray-300">Multi-agent · sole developer</span>
          </div>
          <h3 className="m-0 font-extrabold text-4xl md:text-[44px] tracking-tight">{SPECWRITE.title}</h3>
          <p className="m-0 text-lg text-gray-400">{SPECWRITE.summary}</p>
          <ul className="m-0 p-0 list-none flex flex-col gap-2.5 text-gray-300 text-[15px]">
            {SPECWRITE.points.map(pt => (
              <li key={pt} className="flex gap-2.5"><span className="text-cyan-400">▹</span>{pt}</li>
            ))}
          </ul>
          <div className="flex gap-2 flex-wrap mt-1">
            {SPECWRITE.technologies.map(t => (
              <span key={t} className="glassmorphism px-3 py-1.5 rounded-full text-[13px] text-cyan-300">{t}</span>
            ))}
          </div>
          <span className="font-mono-ui text-[13px] text-gray-500">Omnisys · code private · architecture walkthrough on request</span>
        </div>
        <div className="flex-1 min-w-0"><AgentFlow /></div>
      </div>
    </div>

    <div className="reveal grid gap-5 grid-cols-[repeat(auto-fit,minmax(min(100%,320px),1fr))]">
      {PROJECTS.map(p => <ProjectCard key={p.title} project={p} />)}
    </div>

    {/* Building now */}
    <div className="reveal flex flex-col gap-5 mt-6">
      <div className="flex items-end justify-between gap-4 flex-wrap">
        <div>
          <span className="font-mono-ui text-[13px] tracking-[0.14em] text-amber-300">BUILDING NOW · OPEN SOURCE</span>
          <h3 className="m-0 mt-1 text-2xl md:text-3xl font-extrabold">What I'm working on next</h3>
        </div>
      </div>
      <div className="grid gap-5 grid-cols-[repeat(auto-fit,minmax(min(100%,380px),1fr))]">
        {BUILDING_NOW.map(p => <ProjectCard key={p.title} project={p} />)}
      </div>
    </div>

    {/* Other projects */}
    <div className="reveal flex flex-col gap-5 mt-6">
      <h3 className="m-0 text-xl font-bold text-gray-300">Other projects</h3>
      <div className="grid gap-5 grid-cols-[repeat(auto-fit,minmax(min(100%,320px),1fr))]">
        {OTHER_PROJECTS.map(p => <ProjectCard key={p.title} project={p} compact />)}
      </div>
    </div>
  </section>
);

export default Projects;
