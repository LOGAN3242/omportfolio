import { SkillCategory, Experience, Project, Education } from './types';

export const RESUME_URL = '/OmResume.pdf';
export const RESUME_FILENAME = 'Om_Sarvaiya_Resume.pdf';
export const GITHUB_URL = 'https://github.com/LOGAN3242';
export const LINKEDIN_URL = 'https://www.linkedin.com/in/sarvaiyaom';
export const EMAIL = 'omsarvaiya3242@gmail.com';

export const NAV_LINKS = [
  { label: 'Impact', href: '#impact' },
  { label: 'Projects', href: '#projects' },
  { label: 'Experience', href: '#experience' },
  { label: 'Skills', href: '#skills' },
  { label: 'Contact', href: '#contact' },
];

export const ROTATING_ROLES = ['multi-agent systems', 'RAG pipelines', 'LLM evaluations', 'agentic workflows'];

export const ORBIT_TECH = ['LangGraph', 'FastAPI', 'OpenAI', 'LlamaIndex', 'FAISS', 'CrewAI'];

export const MARQUEE_TECH = [
  'Python', 'FastAPI', 'LangChain', 'LangGraph', 'LlamaIndex', 'CrewAI', 'GPT-4o',
  'FAISS', 'ChromaDB', 'PostgreSQL', 'Docker', 'AWS',
];

export const SKILL_CATEGORIES: SkillCategory[] = [
  {
    name: 'Generative AI',
    accent: 'purple',
    skills: ['GPT-4 / GPT-4o', 'RAG', 'Multi-agent systems', 'Tool calling', 'Structured outputs', 'Prompt caching', 'Human-in-the-loop', 'Multimodal & OCR'],
  },
  {
    name: 'Frameworks & vector search',
    accent: 'cyan',
    skills: ['LangChain', 'LangGraph', 'LlamaIndex', 'CrewAI', 'FAISS', 'ChromaDB', 'OpenAI embeddings'],
  },
  {
    name: 'LLM evaluation',
    accent: 'green',
    skills: ['Evaluation harnesses', 'LLM-as-judge', 'pytest', 'Cost optimization'],
  },
  {
    name: 'Backend & cloud',
    accent: 'orange',
    skills: ['Python', 'Java', 'FastAPI', 'Django', 'Spring Boot', 'Pydantic', 'asyncio', 'PostgreSQL', 'Docker', 'AWS EC2', 'CI/CD'],
  },
];

export const EXPERIENCES: Experience[] = [
  {
    role: 'AI Engineer / Python Backend Developer',
    company: 'Omnisys Solutions',
    period: 'Jun 2024 — Present',
    location: 'Pune',
    current: true,
    description: [
      'Built SpecWrite, a 4-agent procurement readiness checker with an LLM evaluation harness (148 tests) at about $0.07 per check.',
      'Cut supplier onboarding time by 40% with a RAG assistant over 500+ supplier documents (92% retrieval accuracy).',
      'Reduced purchase approvals from 3 days to under 4 hours with a tool-calling agent rolled out to 5+ departments.',
      'Built a GPT-4o Vision extraction pipeline with 95%+ accuracy on critical fields across 15+ document types.',
    ],
    technologies: ['Python', 'FastAPI', 'OpenAI', 'LangChain', 'LlamaIndex', 'FAISS'],
  },
  {
    role: 'Java Backend Developer Intern',
    company: 'Hackveda Limited',
    period: 'Jan 2024 — May 2024',
    location: 'Delhi',
    description: [
      'Built real-time IoT data microservices in Spring Boot processing 10,000+ events per hour with sub-second latency.',
      'Developed modules for financial analytics and trading systems with real-time market data feeds.',
    ],
    technologies: ['Java', 'Spring Boot', 'Microservices'],
  },
  {
    role: 'Full Stack Developer Intern',
    company: 'Rudra Softwares',
    period: 'Jun 2023 — Sep 2023',
    location: 'Rajkot',
    description: [
      'Shipped 2 production Flutter mobile apps with REST API integration and real-time data sync.',
      'Built a Django and PostgreSQL backend with secure authentication and production deployment.',
    ],
    technologies: ['Flutter', 'Django', 'PostgreSQL'],
  },
  {
    role: 'Junior Web Developer',
    company: 'Craft Box Technologies',
    period: 'Feb 2021 — Oct 2021',
    location: 'Rajkot',
    description: ['Built and maintained 5+ responsive production websites for corporate and e-commerce clients.'],
    technologies: ['HTML', 'CSS', 'JavaScript'],
  },
];

/** SpecWrite is rendered as the featured card in Projects.tsx */
export const SPECWRITE = {
  title: 'SpecWrite',
  summary:
    'An AI procurement readiness checker. Four specialist agents read Word, PDF, Excel and image files, then a referee step merges what they find into one ranked list of gaps, owners and next questions for the buyer.',
  points: [
    'Shared context layer + domain playbooks (cold storage, ERP, building retrofit)',
    'LLM-as-judge evaluation harness — 148 automated tests',
    '~$0.07 per check with usage tracking + prompt caching',
  ],
  technologies: ['Python', 'FastAPI', 'OpenAI API', 'pytest'],
  agents: ['Supplier', 'Sustainability', 'Commercial', 'Scope'],
};

export const PROJECTS: Project[] = [
  {
    title: 'RAG Supplier Onboarding',
    summary: 'FastAPI microservice inside the company ERP, answering from 500+ supplier documents. Deployed with zero downtime.',
    technologies: ['LlamaIndex', 'FAISS', 'GPT-4'],
    icon: 'search',
    accent: 'cyan',
    note: 'Omnisys · code private',
  },
  {
    title: 'Purchase Cycle Orchestrator',
    summary: 'Tool-calling agent that creates POs, checks inventory, routes approvals and emails vendors. Used by 5+ departments.',
    technologies: ['LangChain', 'Tool calling', 'REST APIs'],
    icon: 'network',
    accent: 'purple',
    note: 'Omnisys · code private',
  },
  {
    title: 'Document & Image Extraction',
    summary: 'Multimodal pipeline for invoices, contracts and forms with built-in validation. 500+ documents a month.',
    technologies: ['GPT-4o Vision', 'LlamaIndex', 'OCR'],
    icon: 'scan',
    accent: 'cyan',
    note: 'Omnisys · code private',
  },
];

/**
 * Open-source projects currently in progress.
 * TODO: point `github` at each repo once it is created, and add measured results when done.
 */
export const BUILDING_NOW: Project[] = [
  {
    title: 'EvalOps',
    summary:
      'CI for LLM apps: runs regression tests on prompts and agents on every pull request, scores answers with LLM-as-judge and tracks cost and latency per run.',
    points: ['YAML test cases → runner → judge', 'Results posted as a PR comment', 'Score and cost trends across commits'],
    technologies: ['Python', 'FastAPI', 'pytest', 'MLflow', 'GitHub Actions', 'Docker'],
    icon: 'check',
    accent: 'purple',
    status: 'In progress',
    github: GITHUB_URL,
  },
  {
    title: 'TenderScout',
    summary:
      'Agentic RAG over public government tender documents: extracts eligibility, deadlines and required documents, and answers questions with page citations.',
    points: ['Hybrid search (BM25 + FAISS) with reranking', 'GPT-4o for scanned pages', 'Evaluated with RAGAS'],
    technologies: ['LangGraph', 'LlamaIndex', 'FAISS', 'FastAPI', 'AWS'],
    icon: 'file',
    accent: 'cyan',
    status: 'In progress',
    github: GITHUB_URL,
  },
];

export const OTHER_PROJECTS: Project[] = [
  {
    title: 'Automated Billing System',
    summary: 'Billing app for Sakshi Book Store with n8n invoice automation and PDF bills sent over the WhatsApp API.',
    technologies: ['React', 'Django', 'n8n', 'WhatsApp API'],
    icon: 'receipt',
    accent: 'purple',
  },
  {
    title: 'Email Marketing Automation Tool',
    summary: 'Flask app for personalized bulk email with dynamic attachments and UUID-based delivery tracking.',
    technologies: ['Python', 'Flask', 'PIL'],
    icon: 'mail',
    accent: 'cyan',
  },
];

export const EDUCATION: Education[] = [
  {
    degree: 'Master of Computer Applications (MCA)',
    university: 'MIT World Peace University, Pune',
    period: 'Jun 2022 — May 2024',
    cgpa: '7.98 / 10',
  },
  {
    degree: 'Bachelor of Computer Applications (BCA)',
    university: 'Saurashtra University, Rajkot',
    period: 'Aug 2019 — Apr 2022',
    cgpa: '7.67 / 10',
  },
];

export const CHAT_SUGGESTIONS = ['What is SpecWrite?', 'What is his tech stack?', 'Is Om open to relocation?'];

export const PORTFOLIO_CONTEXT = `
You are the AI assistant on Om Sarvaiya's portfolio website. Answer questions about Om using only the facts below.
Be friendly, concise (2–4 sentences) and professional. If something is not covered here, say you don't know and suggest emailing Om.

About:
- AI Engineer (Generative AI, LLM & Agentic AI) with 3+ years of experience, based in Pune, India.
- Open to AI Engineer roles: remote, hybrid or on-site, and open to relocation.
- Builds production LLM applications, multi-agent systems, RAG pipelines and enterprise automation with Python, FastAPI, LangChain, LangGraph and LlamaIndex.

Experience:
- AI Engineer / Python Backend Developer, Omnisys Solutions, Pune (Jun 2024 – present):
  - SpecWrite: 4-agent procurement readiness checker (Supplier, Sustainability, Commercial, Scope agents) for Word, PDF, Excel and image files. Shared context layer, a referee step that de-duplicates and ranks findings, domain playbooks for cold storage, ERP and building retrofit. LLM evaluation harness with LLM-as-judge and 148 automated tests; about $0.07 per check through usage tracking and prompt caching.
  - RAG Supplier Onboarding Assistant (LlamaIndex, FAISS, GPT-4, FastAPI): 40% faster onboarding, 500+ documents, 92% retrieval accuracy, deployed in the ERP with zero downtime.
  - Agentic Purchase Cycle Orchestrator (LangChain, GPT-4 tool calling): approvals from 3 days to under 4 hours, rolled out across 5+ departments, 30% shorter purchase cycle.
  - AI Document & Image Extraction (GPT-4o Vision): 95%+ accuracy on critical fields across 15+ document types, 500+ documents per month.
  - Overall: saved 200+ hours per month of manual review.
- Java Backend Developer Intern, Hackveda Limited, Delhi (Jan 2024 – May 2024): Spring Boot IoT microservices, 10,000+ events per hour, sub-second latency.
- Full Stack Developer Intern, Rudra Softwares, Rajkot (Jun 2023 – Sep 2023): 2 production Flutter apps, Django + PostgreSQL backend.
- Junior Web Developer, Craft Box Technologies, Rajkot (Feb 2021 – Oct 2021): 5+ production websites.

Currently building (open source, in progress — not finished yet):
- EvalOps: CI for LLM apps with LLM-as-judge regression tests, cost and latency tracking (Python, FastAPI, pytest, MLflow, GitHub Actions).
- TenderScout: agentic RAG over public government tender documents with citations (LangGraph, LlamaIndex, FAISS).

Other projects: Automated Billing System for Sakshi Book Store (React, Django, n8n, WhatsApp API); Email Marketing Automation Tool (Flask).

Skills: Python, Java, JavaScript, SQL; GPT-4/GPT-4o, RAG, AI agents, multi-agent systems, tool calling, structured outputs, prompt caching, human-in-the-loop; LLM-as-judge, pytest; LangChain, LangGraph, LlamaIndex, CrewAI; FAISS, ChromaDB; FastAPI, Django, Flask, Spring Boot, PostgreSQL; AWS EC2, Docker, Git, CI/CD.

Education: MCA, MIT World Peace University, Pune (2022–2024, CGPA 7.98/10); BCA, Saurashtra University, Rajkot (2019–2022, CGPA 7.67/10).

Contact: ${EMAIL} · ${LINKEDIN_URL} · ${GITHUB_URL}. Résumé can be downloaded from the site.
`;
