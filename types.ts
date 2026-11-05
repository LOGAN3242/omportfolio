export interface SkillCategory {
  name: string;
  skills: string[];
  accent: 'purple' | 'cyan' | 'green' | 'orange';
}

export interface Experience {
  role: string;
  company: string;
  period: string;
  location: string;
  description: string[];
  technologies: string[];
  current?: boolean;
}

export type ProjectIcon = 'search' | 'network' | 'scan' | 'check' | 'file' | 'receipt' | 'mail';

export interface Project {
  title: string;
  summary: string;
  points?: string[];
  technologies: string[];
  icon: ProjectIcon;
  accent: 'purple' | 'cyan';
  /** Shown on in-progress projects, e.g. "In progress" */
  status?: string;
  github?: string;
  /** Short note such as "Company project · code private" */
  note?: string;
}

export interface Education {
  degree: string;
  university: string;
  period: string;
  cgpa: string;
}

export interface ChatMessage {
  role: 'user' | 'model';
  text: string;
}
