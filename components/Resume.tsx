import React from 'react';
import { RESUME_URL, RESUME_FILENAME } from '../constants';
import { DownloadIcon, EyeIcon } from './Icons';

const lines = ['92%', '84%', '88%', '60%', '90%', '76%', '82%'];

const Resume: React.FC = () => (
  <section id="resume" className="max-w-[1240px] mx-auto px-5 md:px-8 pb-20 md:pb-24">
    <div className="reveal border-spin rounded-[28px]">
      <div className="border-spin-inner rounded-[27px] bg-[#0d1117] p-7 sm:p-12 flex flex-col sm:flex-row items-center gap-10 sm:gap-11">
        {/* Résumé preview with an AI scan line */}
        <div className="relative shrink-0 w-[170px] h-[220px] rounded-[14px] bg-gray-900 border border-white/[0.12] px-[18px] py-[22px] flex flex-col gap-2.5 overflow-hidden" aria-hidden="true">
          <span className="h-2.5 w-[70%] rounded bg-gray-700" />
          <span className="h-1.5 w-1/2 rounded bg-gray-600" />
          {lines.map((w, i) => (
            <span key={i} className={`h-1.5 rounded bg-gray-800 ${i === 0 || i === 4 ? 'mt-2' : ''}`} style={{ width: w }} />
          ))}
          <span className="scan-line absolute inset-x-0 h-[3px] bg-cyan-400 shadow-[0_0_18px_4px_rgba(6,182,212,.7)]" />
          <span className="absolute right-2.5 bottom-2.5 px-2 py-0.5 rounded-md bg-violet-500 text-white text-[11px] font-bold">PDF</span>
        </div>

        <div className="flex-1 min-w-0 flex flex-col gap-3.5 text-center sm:text-left">
          <span className="font-mono-ui text-[13px] tracking-[0.14em] text-cyan-400">RÉSUMÉ</span>
          <h2 className="m-0 font-extrabold text-3xl md:text-[40px] tracking-tight leading-tight">Take the full story with you</h2>
          <p className="m-0 text-gray-400 text-[17px]">AI Engineer · Generative AI, LLM &amp; Agentic AI · one page PDF</p>
          <div className="flex gap-3.5 flex-wrap justify-center sm:justify-start mt-1.5">
            <a
              href={RESUME_URL}
              download={RESUME_FILENAME}
              className="shine-box flex items-center gap-2.5 px-7 py-4 rounded-xl bg-gradient-to-r from-violet-500 to-cyan-500 text-white font-bold"
            >
              <DownloadIcon className="w-[18px] h-[18px]" /> Download PDF
            </a>
            <a
              href={RESUME_URL}
              target="_blank"
              rel="noopener noreferrer"
              className="glassmorphism flex items-center gap-2.5 px-6 py-4 rounded-xl text-white font-semibold hover:bg-white/5"
            >
              <EyeIcon className="w-[18px] h-[18px]" /> View in browser
            </a>
          </div>
        </div>
      </div>
    </div>
  </section>
);

export default Resume;
