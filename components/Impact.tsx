import React from 'react';
import SectionHeading from './SectionHeading';
import { useInView, useProgress } from './hooks';

const CIRC = 2 * Math.PI * 52;

const Gauge: React.FC<{ value: number; p: number; label: string; detail: string }> = ({ value, p, label, detail }) => (
  <div className="glassmorphism rounded-[20px] p-7 flex items-center gap-6">
    <div className="relative w-32 h-32 shrink-0">
      <svg width="128" height="128" viewBox="0 0 128 128" aria-hidden="true">
        <circle cx="64" cy="64" r="52" fill="none" stroke="rgba(255,255,255,.08)" strokeWidth="10" />
        <circle
          cx="64" cy="64" r="52" fill="none" stroke="url(#impact-grad)" strokeWidth="10" strokeLinecap="round"
          strokeDasharray={CIRC} strokeDashoffset={CIRC * (1 - (value / 100) * p)} transform="rotate(-90 64 64)"
        />
      </svg>
      <span className="absolute inset-0 flex items-center justify-center text-3xl font-extrabold">
        {Math.round(value * p)}%
      </span>
    </div>
    <div className="flex flex-col gap-1">
      <span className="text-xl font-bold">{label}</span>
      <span className="text-gray-400 text-[15px]">{detail}</span>
    </div>
  </div>
);

const Impact: React.FC = () => {
  const { ref, inView } = useInView<HTMLDivElement>(0.25);
  const p = useProgress(inView);

  return (
    <section id="impact" className="max-w-[1240px] mx-auto px-5 md:px-8 pt-24 md:pt-28 pb-14 flex flex-col gap-11">
      <SectionHeading eyebrow="LIVE IMPACT" title="What my agents changed" subtitle="Measured in production at Omnisys, not in a notebook." />

      {/* shared gradient for the gauges */}
      <svg width="0" height="0" className="absolute" aria-hidden="true">
        <defs>
          <linearGradient id="impact-grad" x1="0" y1="0" x2="1" y2="1">
            <stop offset="0" stopColor="#8b5cf6" />
            <stop offset="1" stopColor="#06b6d4" />
          </linearGradient>
        </defs>
      </svg>

      <div ref={ref} className="grid gap-5 grid-cols-[repeat(auto-fit,minmax(min(100%,340px),1fr))]">
        <Gauge value={40} p={p} label="Faster supplier onboarding" detail="RAG assistant over 500+ supplier documents" />

        <div className="glassmorphism rounded-[20px] p-7 flex flex-col gap-4">
          <div className="flex justify-between items-baseline gap-3 flex-wrap">
            <span className="text-xl font-bold">Purchase approval time</span>
            <span className="font-mono-ui text-[13px] text-green-400">3 days → &lt; 4 hrs</span>
          </div>
          <div className="flex flex-col gap-1.5">
            <div className="flex justify-between text-[13px] text-gray-400"><span>Before</span><span>3 days</span></div>
            <div className="h-3 rounded-md bg-gray-700" />
          </div>
          <div className="flex flex-col gap-1.5">
            <div className="flex justify-between text-[13px] text-gray-200">
              <span>With tool-calling agent</span><span className="font-bold text-cyan-400">&lt; 4 hours</span>
            </div>
            <div className="h-3 rounded-md bg-white/[0.06]">
              <div
                className="h-3 rounded-md bg-gradient-to-r from-violet-500 to-cyan-500 shadow-[0_0_18px_rgba(6,182,212,.6)]"
                style={{ width: `${100 - 94.5 * p}%` }}
              />
            </div>
          </div>
        </div>

        <div className="glassmorphism rounded-[20px] p-7 flex items-end justify-between gap-5">
          <div className="flex flex-col gap-1">
            <span className="text-5xl font-black leading-none tracking-tight">
              {Math.round(200 * p)}+<span className="text-[22px] text-gray-400 font-semibold"> hrs</span>
            </span>
            <span className="text-xl font-bold">Manual review saved / month</span>
          </div>
          <div className="flex items-end gap-1.5 h-[84px]" aria-hidden="true">
            {[0, 0.4, 0.8, 1.2, 1.6, 2].map(d => (
              <span key={d} className="live-bar w-2.5 h-[84px] rounded bg-gradient-to-b from-cyan-400 to-violet-500" style={{ animationDelay: `-${d}s` }} />
            ))}
          </div>
        </div>

        <div className="glassmorphism rounded-[20px] p-7 flex flex-col gap-3">
          <span className="font-mono-ui text-xs text-gray-400 tracking-[0.1em]">COST PER SPECWRITE CHECK</span>
          <span className="font-mono-ui text-5xl font-medium leading-none text-cyan-400 [text-shadow:0_0_24px_rgba(6,182,212,.55)]">
            ${(1 - 0.93 * p).toFixed(2)}
          </span>
          <div className="flex gap-2 flex-wrap text-[13px]">
            <span className="px-2.5 py-1 rounded-full bg-violet-500/15 text-violet-300">usage tracking</span>
            <span className="px-2.5 py-1 rounded-full bg-cyan-500/15 text-cyan-300">prompt caching</span>
          </div>
        </div>

        <Gauge value={92} p={p} label="Retrieval accuracy" detail="LlamaIndex + FAISS pipeline" />
        <Gauge value={95} p={p} label="Extraction accuracy" detail="GPT-4o Vision · 15+ document types" />
      </div>
    </section>
  );
};

export default Impact;
