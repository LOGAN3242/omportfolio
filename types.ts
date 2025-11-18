export interface Skill {
  name: string;
  level?: number;
}

export interface SkillCategory {
  name: string;
  skills: Skill[];
  color: string;
}

export interface Experience {
  role: string;
  company: string;
  period: string;
  location: string;
  description: string[];
  technologies: string[];
}

export interface Project {
  title: string;
  subtitle: string;
  description: string[];
  technologies: string[];
  category: ('AI/ML' | 'Backend' | 'Automation')[];
  gradient: string;
}

export interface Education {
  degree: string;
  university: string;
  cgpa: string;
  description: string;
}

export interface FutureGoal {
  title: string;
  description: string;
  icon: string; // Using SVG path data
}

export interface Certificate {
  name: string;
  organization: string;
  url: string;
}

export interface ChatMessage {
  role: 'user' | 'model';
  text: string;
}
