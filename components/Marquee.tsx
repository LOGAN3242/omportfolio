import React from 'react';
import { MARQUEE_TECH } from '../constants';

const Marquee: React.FC = () => {
  const row = MARQUEE_TECH.flatMap((t, i) => [
    <span key={`t-${i}`}>{t}</span>,
    <span key={`d-${i}`} className={i % 2 ? 'text-cyan-500' : 'text-violet-500'} aria-hidden="true">◆</span>,
  ]);

  return (
    <section aria-label="Tech stack" className="border-y border-white/[0.08] bg-gray-900/40 overflow-hidden py-5">
      <p className="sr-only">{MARQUEE_TECH.join(', ')}</p>
      <div className="marquee-track flex gap-14 w-max font-mono-ui text-[17px] text-gray-400 whitespace-nowrap" aria-hidden="true">
        {row}
        {row.map((el, i) => React.cloneElement(el, { key: `copy-${i}` }))}
      </div>
    </section>
  );
};

export default Marquee;
