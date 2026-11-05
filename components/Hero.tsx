import React from 'react';
import { ORBIT_TECH, RESUME_URL, RESUME_FILENAME, ROTATING_ROLES } from '../constants';
import { CheckIcon, DownloadIcon } from './Icons';

// Positions on the orbit circle (0°, 60°, 120° … 300°), as % of the ring box
const ORBIT_POSITIONS = [
  { top: '0%', left: '50%' },
  { top: '25%', left: '93.3%' },
  { top: '75%', left: '93.3%' },
  { top: '100%', left: '50%' },
  { top: '75%', left: '6.7%' },
  { top: '25%', left: '6.7%' },
];

const ThinkingDots: React.FC<{ size?: string; color?: string }> = ({ size = 'w-2 h-2', color = 'bg-cyan-400' }) => (
  <span className="flex gap-1" aria-hidden="true">
    {[0, 0.2, 0.4, 0.6].map(d => (
      <span key={d} className={`think rounded-full ${size} ${color}`} style={{ animationDelay: `${d}s` }} />
    ))}
  </span>
);

const Hero: React.FC = () => {
  // First word repeated at the end so the loop wraps seamlessly
  const words = [...ROTATING_ROLES, ROTATING_ROLES[0]];

  return (
    <section id="top" className="relative min-h-screen overflow-hidden pt-[72px]">
      {/* Live background */}
      <div className="grid-floor absolute inset-0" aria-hidden="true" />
      <div className="aurora-a absolute -left-32 -top-20 w-[560px] h-[560px] rounded-full bg-violet-500 opacity-[0.28] blur-[110px]" aria-hidden="true" />
      <div className="aurora-b absolute -right-40 top-44 w-[620px] h-[620px] rounded-full bg-cyan-500 opacity-[0.22] blur-[120px]" aria-hidden="true" />

      <div className="relative max-w-[1240px] mx-auto px-5 md:px-8 pt-12 md:pt-20 pb-16 flex flex-col-reverse lg:flex-row items-center gap-12 lg:gap-10">
        {/* Text */}
        <div className="hero-in flex-1 min-w-0 flex flex-col gap-6 text-center lg:text-left items-center lg:items-start">
          <div className="glassmorphism inline-flex items-center gap-2.5 pl-3 pr-4 py-2 rounded-full text-sm text-gray-300">
            <span className="relative w-2.5 h-2.5" aria-hidden="true">
              <span className="ping-soft absolute inset-0 rounded-full bg-green-400" />
              <span className="absolute inset-0 rounded-full bg-green-400" />
            </span>
            Available for AI Engineer roles · Pune
          </div>

          <div className="flex flex-col gap-1">
            <span className="font-mono-ui text-[15px] text-gray-400">&gt; hello, I'm</span>
            <h1 className="shimmer-text m-0 font-black text-5xl sm:text-6xl md:text-7xl xl:text-[88px] leading-none tracking-[-0.035em]">
              Om Sarvaiya
            </h1>
          </div>

          <p className="m-0 flex flex-wrap items-baseline justify-center lg:justify-start gap-x-3 text-2xl md:text-[32px] font-bold text-gray-100 leading-tight">
            <span>I architect</span>
            <span className="inline-block h-[1.25em] overflow-hidden align-bottom">
              <span className="rotating-words flex flex-col">
                {words.map((w, i) => (
                  <span key={i} className={`h-[1.25em] ${i % 2 ? 'text-violet-400' : 'text-cyan-400'}`}>{w}</span>
                ))}
              </span>
            </span>
            <span className="caret hidden sm:inline-block w-[3px] h-[1.05em] bg-cyan-400 self-center" aria-hidden="true" />
          </p>

          <p className="m-0 text-lg text-gray-400 max-w-[560px]">
            AI Engineer at Omnisys Solutions. I turn messy enterprise documents and workflows into LLM systems that are
            evaluated, cost-tracked and running in production.
          </p>

          <div className="flex flex-wrap justify-center lg:justify-start gap-3.5">
            <a href="#projects" className="px-7 py-4 rounded-xl bg-cyan-500 hover:bg-cyan-600 text-white font-semibold transition-colors">
              View my work
            </a>
            <a
              href={RESUME_URL}
              download={RESUME_FILENAME}
              className="glassmorphism flex items-center gap-2.5 px-6 py-4 rounded-xl text-white font-semibold !border-cyan-500/60 hover:bg-cyan-500/10 transition-colors"
            >
              <DownloadIcon className="w-[18px] h-[18px]" /> Download CV
            </a>
            <a href="#contact" className="px-5 py-4 rounded-xl text-gray-300 hover:text-white font-medium">Let's talk →</a>
          </div>
        </div>

        {/* Agent orbit around the photo */}
        <div className="shrink-0 w-[250px] h-[250px] mt-4 sm:mt-0 sm:w-[440px] sm:h-[440px] xl:w-[540px] xl:h-[540px] relative">
          <div className="orbit absolute inset-0 rounded-full border border-violet-500/35">
            {ORBIT_TECH.map((tech, i) => (
              <div key={tech} className="absolute -translate-x-1/2 -translate-y-1/2" style={ORBIT_POSITIONS[i]}>
                <span className="orbit-counter glassmorphism block px-2.5 sm:px-3.5 py-1 sm:py-2 rounded-full text-[11px] sm:text-[13px] font-semibold text-gray-200 whitespace-nowrap">
                  {tech}
                </span>
              </div>
            ))}
          </div>

          <div className="orbit-inner absolute inset-[13%] rounded-full border border-dashed border-cyan-500/45" aria-hidden="true">
            <span className="absolute -top-[5px] left-[calc(50%-5px)] w-2.5 h-2.5 rounded-full bg-cyan-400 shadow-[0_0_16px_#22d3ee]" />
            <span className="absolute -bottom-[5px] left-[calc(50%-5px)] w-2.5 h-2.5 rounded-full bg-violet-400 shadow-[0_0_16px_#a78bfa]" />
            <span className="absolute top-[calc(50%-4px)] -right-1 w-2 h-2 rounded-full bg-cyan-400 shadow-[0_0_12px_#22d3ee]" />
          </div>

          <div className="absolute inset-[22%] rounded-full">
            <div className="spin-6 absolute -inset-1.5 rounded-full bg-[conic-gradient(from_0deg,#8b5cf6,#06b6d4,transparent_45%,transparent_55%,#8b5cf6)]" aria-hidden="true" />
            <div className="spin-6 absolute -inset-1.5 rounded-full bg-[conic-gradient(from_0deg,#8b5cf6,#06b6d4,transparent_45%,transparent_55%,#8b5cf6)] blur-[22px] opacity-70" aria-hidden="true" />
            <img
              src="/3323.jpg"
              alt="Om Sarvaiya"
              width={300}
              height={300}
              className="absolute inset-0 w-full h-full object-cover rounded-full border-[5px] border-[#0a0a0a]"
            />
          </div>

          <div className="floaty glassmorphism hidden sm:flex absolute -left-6 top-[17%] px-4 py-3 rounded-2xl flex-col gap-1.5 min-w-[190px]">
            <span className="font-mono-ui text-[11px] text-gray-400 tracking-[0.08em]">SPECWRITE</span>
            <span className="flex items-center gap-2 text-sm font-semibold">
              <ThinkingDots /> 4 agents reasoning
            </span>
          </div>

          <div className="floaty-delayed glassmorphism hidden sm:flex absolute -right-5 bottom-[18%] px-4 py-3 rounded-2xl items-center gap-3">
            <span className="w-[34px] h-[34px] rounded-[10px] bg-green-400/15 text-green-400 flex items-center justify-center">
              <CheckIcon className="w-[18px] h-[18px]" />
            </span>
            <span className="flex flex-col leading-tight">
              <span className="font-bold text-[15px]">148 / 148</span>
              <span className="text-xs text-gray-400">eval tests passing</span>
            </span>
          </div>
        </div>
      </div>
    </section>
  );
};

export { ThinkingDots };
export default Hero;
