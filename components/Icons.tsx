import React from 'react';
import { ProjectIcon } from '../types';

type IconProps = { className?: string };

const base = {
  fill: 'none',
  stroke: 'currentColor',
  strokeWidth: 1.8,
  strokeLinecap: 'round' as const,
  strokeLinejoin: 'round' as const,
  viewBox: '0 0 24 24',
  'aria-hidden': true,
};

export const DownloadIcon: React.FC<IconProps> = ({ className = 'w-4 h-4' }) => (
  <svg {...base} strokeWidth={2.2} className={className}><path d="M12 4v11m0 0l-4-4m4 4l4-4M5 20h14" /></svg>
);

export const EyeIcon: React.FC<IconProps> = ({ className = 'w-4 h-4' }) => (
  <svg {...base} strokeWidth={2} className={className}><path d="M2 12s3.5-7 10-7 10 7 10 7-3.5 7-10 7S2 12 2 12z" /><circle cx="12" cy="12" r="3" /></svg>
);

export const GithubIcon: React.FC<IconProps> = ({ className = 'w-5 h-5' }) => (
  <svg {...base} className={className}>
    <path d="M9 19c-4.3 1.4-4.3-2.5-6-3m12 5v-3.5c0-1 .1-1.4-.5-2 2.8-.3 5.5-1.4 5.5-6a4.6 4.6 0 0 0-1.3-3.2 4.2 4.2 0 0 0-.1-3.2s-1.1-.3-3.5 1.3a12.3 12.3 0 0 0-6.2 0C6.5 2.8 5.4 3.1 5.4 3.1a4.2 4.2 0 0 0-.1 3.2A4.6 4.6 0 0 0 4 9.5c0 4.6 2.7 5.7 5.5 6-.6.6-.6 1.2-.5 2V21" />
  </svg>
);

export const LinkedinIcon: React.FC<IconProps> = ({ className = 'w-5 h-5' }) => (
  <svg {...base} className={className}><rect x="3" y="3" width="18" height="18" rx="3" /><path d="M8 10v7M8 7v.01M12 17v-4a2 2 0 0 1 4 0v4M12 10v7" /></svg>
);

export const MailIcon: React.FC<IconProps> = ({ className = 'w-5 h-5' }) => (
  <svg {...base} className={className}><rect x="3" y="5" width="18" height="14" rx="2" /><path d="M3 7l9 6 9-6" /></svg>
);

export const MenuIcon: React.FC<IconProps> = ({ className = 'w-5 h-5' }) => (
  <svg {...base} strokeWidth={2} className={className}><path d="M4 7h16M4 12h10M4 17h16" /></svg>
);

export const CloseIcon: React.FC<IconProps> = ({ className = 'w-5 h-5' }) => (
  <svg {...base} strokeWidth={2} className={className}><path d="M6 6l12 12M18 6L6 18" /></svg>
);

export const CheckIcon: React.FC<IconProps> = ({ className = 'w-5 h-5' }) => (
  <svg {...base} strokeWidth={2.4} className={className}><path d="M5 12l5 5L20 7" /></svg>
);

export const SendIcon: React.FC<IconProps> = ({ className = 'w-5 h-5' }) => (
  <svg {...base} strokeWidth={2.2} className={className}><path d="M5 12h14M13 6l6 6-6 6" /></svg>
);

const projectPaths: Record<ProjectIcon, React.ReactNode> = {
  search: <><circle cx="11" cy="11" r="7" /><path d="M20 20l-3.5-3.5M8 11h6M11 8v6" /></>,
  network: <><circle cx="5" cy="12" r="2" /><circle cx="19" cy="6" r="2" /><circle cx="19" cy="18" r="2" /><path d="M7 11l10-4M7 13l10 4" /></>,
  scan: <path d="M4 7V5a1 1 0 0 1 1-1h2M17 4h2a1 1 0 0 1 1 1v2M20 17v2a1 1 0 0 1-1 1h-2M7 20H5a1 1 0 0 1-1-1v-2M8 12h8" />,
  check: <><path d="M9 11l3 3 8-8" /><path d="M20 12v6a2 2 0 0 1-2 2H6a2 2 0 0 1-2-2V6a2 2 0 0 1 2-2h9" /></>,
  file: <><path d="M14 3H7a2 2 0 0 0-2 2v14a2 2 0 0 0 2 2h10a2 2 0 0 0 2-2V8z" /><path d="M14 3v5h5M9 13h6M9 17h4" /></>,
  receipt: <><path d="M6 3h12v18l-3-2-3 2-3-2-3 2z" /><path d="M9 8h6M9 12h6" /></>,
  mail: <><rect x="3" y="5" width="18" height="14" rx="2" /><path d="M3 7l9 6 9-6" /></>,
};

export const ProjectGlyph: React.FC<{ icon: ProjectIcon; className?: string }> = ({ icon, className = 'w-6 h-6' }) => (
  <svg {...base} className={className}>{projectPaths[icon]}</svg>
);
