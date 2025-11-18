
import {
  SkillCategory,
  Experience,
  Project,
  Education,
  FutureGoal,
  Certificate,
} from './types';

// For the "About Me" Core Competencies section
export interface CoreCompetency {
  title: string;
  description: string;
  icon: string; // SVG path data
}

export const CORE_COMPETENCIES: CoreCompetency[] = [
  {
    title: 'Agentic AI & Automation',
    description: 'Building intelligent agents and autonomous systems that automate complex workflows, from data parsing to purchase order cycles, using tools like OpenAI, n8n, and Hugging Face.',
    icon: 'M8.25 3v1.5M4.5 8.25H3m18 0h-1.5M4.5 12H3m18 0h-1.5m-15 3.75H3m18 0h-1.5M8.25 19.5V21M12 3v1.5m0 15V21m3.75-18v1.5M12 8.25h.01M16.5 12h.01M12 15.75h.01M4.5 4.5l.75.75M18.75 4.5l-.75.75M4.5 19.5l.75-.75M18.75 19.5l-.75-.75'
  },
  {
    title: 'Scalable Backend Systems',
    description: 'Engineering robust and efficient server-side applications with Python, Django, and Flask. Specializing in microservice architectures for real-time data processing and high availability.',
    icon: 'M6.75 7.5l3 2.25-3 2.25v-4.5zm3.75 0v4.5l3-2.25-3-2.25z'
  },
  {
    title: 'Cloud & DevOps',
    description: 'Deploying and managing resilient applications on AWS and Google Cloud. Proficient in creating CI/CD pipelines and leveraging cloud services to ensure scalability and performance.',
    icon: 'M2.25 12.75l.93-2.642A4.503 4.503 0 016.75 7.5h10.5a4.5 4.5 0 013.568 7.158l.93 2.642a.75.75 0 01-1.432.504l-.93-2.642a3.001 3.001 0 00-2.386-1.764H6.75a3.001 3.001 0 00-2.386 1.764l-.93 2.642a.75.75 0 01-1.432-.504z'
  },
  {
    title: 'Data-Driven Solutions',
    description: 'Creating powerful data extraction pipelines and analysis tools. Utilizing Numpy, Pandas, and various APIs to transform raw data into actionable insights and structured formats.',
    icon: 'M3 13.125C3 12.504 3.504 12 4.125 12h15.75c.621 0 1.125.504 1.125 1.125v6.75C21 20.496 20.496 21 19.875 21H4.125A1.125 1.125 0 013 19.875v-6.75zM12 3v9'
  }
];


export const SKILL_CATEGORIES: SkillCategory[] = [
  {
    name: 'Programming Languages',
    skills: [
      { name: 'Python' }, { name: 'Java' }, { name: 'JavaScript' },
      { name: 'C' }, { name: 'C++' }, { name: 'SQL' }
    ],
    color: 'cyan'
  },
  {
    name: 'Agentic AI & Automation',
    skills: [
      { name: 'n8n' }, { name: 'MS Copilot Studio' }, { name: 'OpenAI API' }, { name: 'Hugging Face' },
      { name: 'Workflow Automation' }, { name: 'AI-Driven Data Extraction' }, { name: 'UiPath' }, { name: 'RPA' }
    ],
    color: 'purple'
  },
  {
    name: 'Frameworks & Tools',
    skills: [
      { name: 'Django' }, { name: 'Flask' }, { name: 'React' }, { name: 'Node.js' },
      { name: 'Bubble.io' }, { name: 'Git & GitHub' }
    ],
    color: 'blue'
  },
  {
    name: 'Cloud & DevOps',
    skills: [
      { name: 'AWS' }, { name: 'Google Cloud APIs' }, { name: 'Gmail API' },
      { name: 'Microservices' }, { name: 'CI/CD' }
    ],
    color: 'orange'
  },
  {
    name: 'Data Analysis & Other',
    skills: [
      { name: 'Numpy' }, { name: 'Pandas' }, { name: 'Matplotlib' },
      { name: 'IoT Data Processing' }, { name: 'UI/UX Design' }, { name: 'Web Scraping' }
    ],
    color: 'green'
  }
];

export const EXPERIENCES: Experience[] = [
  {
    role: 'Python Backend Developer',
    company: 'Omnisys Solutions',
    period: 'Jun 2024 - Present',
    location: 'Pune, India',
    description: [
      'Implemented Hugging Face and OpenAI API for efficient supplier data retrieval, automated JSON parsing, and streamlining onboarding workflows.',
      'Utilized Microsoft AI for image analysis to extract key fields and applied OpenAI to analyze product conditions, improving data accuracy.',
      'Automated financial analysis, email parsing, and multi-mail dispatch using Gmail API and Bubble.io, significantly reducing manual workload.',
      'Designed an AI-driven assistant with n8n and Copilot Studio to automate the purchase order (PO) cycle, including creation, tracking, and supplier validation.',
      'Developed and tested UiPath RPA workflows to monitor transactional data and dynamically populate ERP forms.'
    ],
    technologies: ['Python', 'OpenAI API', 'Hugging Face', 'n8n', 'MS Copilot Studio', 'Gmail API', 'Bubble.io', 'UiPath', 'RPA']
  },
  {
    role: 'Java Developer',
    company: 'Hackveda Limited',
    period: 'Jan 2024 - Jul 2024',
    location: 'Delhi, India',
    description: [
      'Developed secure and scalable microservices for real-time IoT data processing using Spring.',
      'Created tools for CPU scheduling visualization, summary generation, and divergence detection.',
      'Implemented and analyzed Java systems for financial data management and high-frequency trading.'
    ],
    technologies: ['Java', 'Spring', 'Microservices', 'IoT', 'Data Processing']
  },
  {
    role: 'Full Stack Developer Intern',
    company: 'Rudra Softwares',
    period: 'Jun 2023 - Sep 2023',
    location: 'Rajkot, India',
    description: [
      'Gained expertise in building mobile applications using Flutter with a strong focus on full-stack architecture.',
      'Proficient in crafting intuitive and visually appealing user interfaces for mobile applications.'
    ],
    technologies: ['Flutter', 'UI/UX Design', 'Full-Stack']
  },
  {
      role: 'Junior Web Developer',
      company: 'Craft Box Technologies',
      period: 'Feb 2021 - Oct 2021',
      location: 'Rajkot, India',
      description: [
          'Designed, built, and maintained websites and web applications.',
          'Gained experience working with HTML, CSS, and JavaScript under the guidance of senior developers.',
          'Developed key skills such as collaboration, problem-solving, and attention to detail.'
      ],
      technologies: ['HTML', 'CSS', 'JavaScript', 'System Integration']
  }
];

export const PROJECTS: Project[] = [
  {
    title: 'Agentic Financial Analyst',
    subtitle: 'An AI agent for automated financial statement analysis and reporting.',
    description: [
      'Developed a multi-agent system using LangChain that can ingest financial documents (PDFs, CSVs).',
      'Agents collaborate to extract key metrics, perform ratio analysis, identify trends, and generate summary reports.',
      'Integrated with OpenAI API for natural language understanding and generation, providing insightful, human-readable analysis.',
      'Utilized vector stores for efficient document retrieval and context management.'
    ],
    technologies: ['Agentic AI', 'LangChain', 'OpenAI API', 'Python', 'Vector DB', 'Flask'],
    category: ['AI/ML', 'Automation'],
    gradient: 'from-purple-600 to-indigo-600'
  },
  {
    title: 'Interactive AI Language Tutor',
    subtitle: 'A personalized platform to learn any language using generative AI.',
    description: [
      'Built a conversational AI tutor powered by the Gemini API to provide an immersive language learning experience.',
      'Features dynamic difficulty levels (Beginner, Intermediate, Advanced) that adapt to user progress.',
      'Offers real-time feedback on grammar, vocabulary, and sentence structure to help users improve their English skills effectively.',
      'Engineered a scalable backend with Flask to manage user sessions and interactions with the Gemini model.'
    ],
    technologies: ['Gemini API', 'React', 'Python', 'Flask', 'Natural Language Processing', 'AI/ML'],
    category: ['AI/ML', 'Automation'],
    gradient: 'from-green-500 to-teal-500'
  },
  {
    title: 'Real-time Fraud Detection System',
    subtitle: 'A scalable microservice-based system to detect fraudulent transactions in real-time.',
    description: [
      'Engineered an event-driven architecture using Kafka for high-throughput data ingestion.',
      'Trained a TensorFlow model on historical transaction data to identify anomalous patterns.',
      'Built a Flask-based prediction service containerized with Docker for seamless deployment.',
      'Achieved sub-100ms latency for fraud scoring, enabling immediate action on suspicious activities.'
    ],
    technologies: ['Python', 'TensorFlow', 'Flask', 'Docker', 'Kafka', 'Microservices'],
    category: ['AI/ML', 'Backend'],
    gradient: 'from-red-500 to-orange-500'
  },
  {
    title: 'Intelligent Document Processing Pipeline',
    subtitle: 'Automated data extraction and processing from unstructured documents like invoices and POs.',
    description: [
      'Utilized Google Vision API and Hugging Face models for OCR and text extraction from scanned images and PDFs.',
      'Fine-tuned a BERT-based model for Named Entity Recognition (NER) to accurately identify fields like invoice number, date, and total amount.',
      'Created an automated workflow with n8n that routes extracted data to appropriate databases and triggers follow-up actions.',
      'Reduced manual data entry time by over 85% and significantly improved data accuracy.'
    ],
    technologies: ['Hugging Face', 'Google Vision API', 'NLP', 'n8n', 'Python', 'Automation'],
    category: ['AI/ML', 'Automation'],
    gradient: 'from-sky-500 to-indigo-500'
  },
  {
    title: 'Personalized Content Recommendation Engine',
    subtitle: 'A deep learning system to deliver tailored content recommendations.',
    description: [
      'Developed a hybrid recommendation engine using collaborative and content-based filtering methods to capture diverse user preferences.',
      'Built and trained a deep neural network with TensorFlow to model complex user-item interactions and improve prediction accuracy.',
      'Engineered a scalable data pipeline for preprocessing and vectorizing large datasets of user behavior and item metadata.',
      'Deployed the model via a Flask REST API, enabling real-time recommendations and boosting user engagement metrics.'
    ],
    technologies: ['Python', 'TensorFlow', 'Scikit-learn', 'Pandas', 'Flask', 'API Development'],
    category: ['AI/ML', 'Backend'],
    gradient: 'from-yellow-500 to-amber-500'
  },
  {
    title: 'Automated Billing System Assistant',
    subtitle: 'AI-powered billing system for Sakshi Book Store.',
    description: [
      'Developed an AI-powered billing system using Python and React to manage book sales, with add, edit, delete, and tracking functionalities.',
      'Designed a responsive frontend with Tailwind CSS for intuitive user interactions across all devices.',
      'Implemented a secure Django backend with a SQL database, ensuring high uptime and robust data integrity.',
      'Automated invoice generation using n8n and integrated WhatsApp API for sending PDF bills to enhance customer communication.'
    ],
    technologies: ['Python', 'React', 'Django', 'SQL', 'n8n', 'WhatsApp API'],
    category: ['Backend', 'Automation'],
    gradient: 'from-cyan-500 to-blue-500'
  },
  {
    title: 'Email Marketing Automation Tool',
    subtitle: 'A Flask-based web application for efficient bulk email campaigns.',
    description: [
      'Developed a Flask-based application enabling businesses to send personalized bulk emails efficiently.',
      'Implemented features for dynamic attachments and email content customization for better engagement.',
      'Built a robust email-sending pipeline using Python libraries to ensure reliable, structured email delivery.',
      'Integrated comprehensive logging and UUID tracking to monitor delivery status and detect failures.'
    ],
    technologies: ['Python', 'Flask', 'Automation', 'Email Marketing', 'API'],
    category: ['Backend', 'Automation'],
    gradient: 'from-rose-500 to-pink-500'
  }
];

export const EDUCATION: Education[] = [
  {
    degree: 'Master of Computer Application',
    university: 'MIT World Peace University, Pune',
    cgpa: 'CGPA: 7.98',
    description: 'Specialized in Advanced AI, Machine Learning, and Cloud Computing. My final year project focused on building a multi-agent system for financial analysis.'
  },
  {
    degree: 'Bachelor of Computer Application',
    university: 'Saurastra University, Rajkot',
    cgpa: 'CGPA: 7.67',
    description: 'Developed a strong foundation in software engineering, database management, and web technologies, building several full-stack applications.'
  }
];

export const FUTURE_GOALS: FutureGoal[] = [
    {
        title: 'Architecting End-to-End AI Solutions',
        description: 'Transitioning from feature development to designing complete, scalable AI systems, from data ingestion and model training to deployment and monitoring.',
        icon: 'M3.055 11H5a2 2 0 012 2v1a2 2 0 002 2 2 2 0 012 2v2.945M8 3.935V5.5A2.5 2.5 0 0010.5 8h.5a2 2 0 012 2 2 2 0 104 0 2 2 0 012-2h.5A2.5 2.5 0 0021.5 5.5V3.935m-18 0A2.5 2.5 0 015.5 1.5h13A2.5 2.5 0 0121.5 3.935'
    },
    {
        title: 'Specializing in Generative AI & LLMs',
        description: 'Deepening my expertise in large language models, fine-tuning techniques, and multi-modal AI to build cutting-edge conversational and content generation agents.',
        icon: 'M17 20h5v-2a3 3 0 00-5.356-1.857M17 20H7m10 0v-2c0-.656-.126-1.283-.356-1.857M7 20H2v-2a3 3 0 015.356-1.857M7 20v-2c0-.656.126-1.283.356-1.857m0 0a5.002 5.002 0 019.288 0M15 7a3 3 0 11-6 0 3 3 0 016 0zm6 3a2 2 0 11-4 0 2 2 0 014 0zM7 10a2 2 0 11-4 0 2 2 0 014 0z'
    },
    {
        title: 'Driving Open-Source Innovation',
        description: 'Becoming a key contributor to prominent open-source AI libraries, particularly in the agentic AI and MLOps space, to shape the tools of the future.',
        icon: 'M13 10V3L4 14h7v7l9-11h-7z'
    }
];

export const CERTIFICATES: Certificate[] = [
  {
    name: 'AWS Certified Cloud Practitioner',
    organization: 'Amazon Web Services',
    url: 'https://aws.amazon.com/certification/certified-cloud-practitioner/',
  },
  {
    name: 'Microsoft Certified: Azure AI Fundamentals',
    organization: 'Microsoft',
    url: 'https://learn.microsoft.com/en-us/credentials/certification/ai-fundamentals/',
  },
  {
    name: 'Machine Learning Specialization',
    organization: 'DeepLearning.AI & Stanford Online',
    url: 'https://www.coursera.org/specializations/machine-learning-introduction',
  },
  {
    name: 'Professional Certificate in Python Data Science',
    organization: 'IBM Skills Network',
    url: 'https://www.coursera.org/professional-certificates/ibm-data-science',
  },
];

export const PORTFOLIO_CONTEXT = `
You are an AI assistant for Om Sarvaiya's portfolio website. Your goal is to answer questions about him based on the provided context. Be friendly, concise, and professional.

**About Om Sarvaiya:**
- A results-driven Software Developer with over 2 years of experience in backend development, specializing in Python, Django, Flask, and Agentic AI workflows.
- Expert in designing and implementing AI-driven automation solutions using n8n, Microsoft Copilot Studio, and OpenAI APIs.
- Proficient in AWS for scalable application deployment, SQL for data management, and data analysis with Numpy and Pandas.

**Skills:**
- Programming Languages: Python, Java, JavaScript, C, C++, SQL.
- Agentic AI & Automation: n8n, Microsoft Copilot Studio, OpenAI API, Hugging Face, Workflow Automation, AI-Driven Data Extraction, UiPath, RPA.
- Frameworks & Tools: Django, Flask, React, Node.js, Bubble.io.
- Cloud & DevOps: AWS, Google Cloud APIs, Gmail API.
- Data Analysis: Numpy, Pandas, Matplotlib.
- Other: Microservices, IoT Data Processing, UI/UX Design, Web Scraping.

**Experience:**
- **Python Backend Developer at Omnisys Solutions (Jun 2024 - Present):** Implemented Hugging Face and OpenAI for supplier data management, automated financial analysis workflows, designed an AI assistant for purchase order cycles using n8n and MS Copilot Studio, and developed UiPath RPA solutions for ERP integration.
- **Java Developer at Hackveda Limited (Jan 2024 - Jul 2024):** Developed microservices for real-time IoT data processing using Spring and created tools for system analysis.
- **Full Stack Developer Intern at Rudra Softwares (Jun 2023 - Sep 2023):** Built mobile applications using Flutter.
- **Junior Web Developer at Craft Box Technologies (Feb 2021 - Oct 2021):** Designed and maintained websites using HTML, CSS, and JavaScript.

**Projects:**
- **Agentic Financial Analyst:** A multi-agent system using LangChain to automate financial statement analysis and reporting.
- **Real-time Fraud Detection System:** A microservice-based system with TensorFlow and Kafka to detect fraudulent transactions.
- **Intelligent Document Processing Pipeline:** An automated workflow using Google Vision API and Hugging Face to extract data from documents.
- **Automated Billing System Assistant:** An AI-powered billing system using Python, React, and Django.
- **Email Marketing Automation Tool:** A Flask-based web application for bulk email campaigns.

**Education:**
- Master of Computer Application from MIT World Peace University, Pune.
- Bachelor of Computer Application from Saurastra University, Rajkot.

**Contact Info:**
- Email: omsarvaiya3242@gmail.com
- Phone: +91 7600312342
`;