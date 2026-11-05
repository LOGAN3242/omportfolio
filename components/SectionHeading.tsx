import React from 'react';

const SectionHeading: React.FC<{ eyebrow: string; title: string; subtitle?: string; tone?: 'cyan' | 'violet' }> = ({
  eyebrow,
  title,
  subtitle,
  tone = 'cyan',
}) => (
  <div className="flex flex-col items-center gap-2.5 text-center">
    <span className={`font-mono-ui text-[13px] tracking-[0.14em] ${tone === 'cyan' ? 'text-cyan-400' : 'text-violet-400'}`}>
      {eyebrow}
    </span>
    <h2 className="shimmer-text m-0 font-extrabold text-4xl md:text-[52px] tracking-tight leading-[1.1]">{title}</h2>
    {subtitle && <p className="m-0 text-gray-400 max-w-[560px]">{subtitle}</p>}
  </div>
);

export default SectionHeading;
