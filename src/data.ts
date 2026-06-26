import { Project, SkillCategory, Testimonial } from './types';

export const PERSONAL_INFO = {
  firstName: "Bala",
  lastName: "Anandan",
  fullName: "BALA ANANDAN",
  profession: "FULL STACK DEVELOPER",
  shortSummary: "Full Stack Developer with hands-on experience in Node.js, Express.js, React.js, MongoDB, and TypeScript. Experienced in building scalable web applications, REST APIs, SaaS workflow automation, and client-facing projects.",
  fullBio: "I am an accomplished Full Stack Developer specializing in robust server-side engineering and responsive user interfaces. Equipped with backend developer internships and a portfolio of active client website deployments, I deliver end-to-end software solutions. Combining academic excellence in computer applications with practical experience in cloud orchestration and SaaS integrations.",
  address: "Chennai, Tamil Nadu",
  email: "balaanandan0623@gmail.com",
  phone: "",
  availablity: "Available for select full-stack opportunities and software consulting",
  stats: [
    { label: "BCA CGPA", value: "8.8" },
    { label: "Deployed Projects", value: "5+" },
    { label: "Tech Stack Tools", value: "12+" },
    { label: "Professional Placements", value: "2" }
  ]
};

export const PROJECTS: Project[] = [
  {
    id: "proj-1",
    title: "Kissflow SaaS Automation Project",
    category: "Web Projects",
    description: "A SaaS-based School Fee Management System integrating automated payment tracking and low-latency Kissflow workflow synchronization.",
    details: [
      "Developed an end-to-end SaaS-based School Fee Management System using Kissflow workflows and automated status triggers.",
      "Automated real-time payment tracking, state transitions, and dynamic email notifications.",
      "Integrated Kissflow REST APIs, Google Forms, and Google Apps Script to synchronize external data streams smoothly."
    ],
    imageUrl: "https://images.unsplash.com/photo-1554224155-8d04cb21cd6c?auto=format&fit=crop&w=800&q=80",
    tags: ["Kissflow Workflows", "REST APIs", "Google Apps Script", "SaaS Automation"],
    year: "2025",
    client: "School Administration",
    githubUrl: "https://github.com/Bala-0611"
  },
  {
    id: "proj-2",
    title: "AI Resume Analyzer",
    category: "AI & ML Systems",
    description: "An AI-powered candidate profiling and resume matching console utilizing Natural Language Processing (NLP) models.",
    details: [
      "Built an AI-powered portal for instant resume analysis, information parsing, and multi-variable candidate scoring.",
      "Extracted technical skill matrices and provided actionable job-match relevance insights using advanced NLP techniques.",
      "Generated structured candidate evaluation reports and analytics cards to optimize recruitment workflow loops."
    ],
    imageUrl: "https://images.unsplash.com/photo-1586281380349-632531db7ed4?auto=format&fit=crop&w=800&q=80",
    tags: ["NLP Parsing", "Candidate Scoring", "Python", "React Integration"],
    year: "2026",
    client: "Talent Acquisition Team",
    githubUrl: "https://github.com/Bala-0611"
  },
  {
    id: "proj-3",
    title: "Brixel Tech Website",
    category: "Web Projects",
    description: "A high-performance corporate platform designed and deployed for Brixel Tech to maximize client engagement.",
    details: [
      "Designed and engineered the official web presence for Brixel Tech with smooth layouts and clean CSS.",
      "Implemented responsive pages and accessibility standards, boosting page optimization metrics significantly.",
      "Optimized deployment architectures for fast loading and low latency on desktop and mobile browsers."
    ],
    imageUrl: "https://images.unsplash.com/photo-1460925895917-afdab827c52f?auto=format&fit=crop&w=800&q=80",
    tags: ["Full Stack Web", "React.js", "Vercel Deployment", "SEO Protocols"],
    year: "2025",
    client: "Brixel Tech Corp",
    githubUrl: "https://github.com/Bala-0611",
    demoUrl: "https://brixeltech.com"
  },
  {
    id: "proj-4",
    title: "Harshus Clinic Portal",
    category: "Web Projects",
    description: "A secure digital gateway and information hub designed for Harshus Clinic, focusing on patient accessibility.",
    details: [
      "Developed a responsive medical web application supporting detailed treatment catalogues and clinic information.",
      "Ensured absolute cross-browser rendering accuracy and touch-target usability across handheld devices.",
      "Configured secure form routing to simplify clinical booking enquiries for patients."
    ],
    imageUrl: "https://images.unsplash.com/photo-1629909613654-28e377c37b09?auto=format&fit=crop&w=800&q=80",
    tags: ["Medical Web", "Tailwind CSS", "Interactive Forms", "UX Optimization"],
    year: "2025",
    client: "Harshus Clinic",
    githubUrl: "https://github.com/Bala-0611",
    demoUrl: "https://harshusclinic.com"
  },
  {
    id: "proj-5",
    title: "Dr Divya Dental Care Platform",
    category: "Web Projects",
    description: "An elegant interactive healthcare showcase designed and deployed for Dr Divya Dental Care clinic.",
    details: [
      "Delivered an end-to-end responsive web experience for a prominent dental care clinic.",
      "Configured automated patient email routing and contact integrations for rapid consultation follow-ups.",
      "Applied premium typographic hierarchies and custom imagery layout to elevate medical branding."
    ],
    imageUrl: "https://images.unsplash.com/photo-1588776814546-1ffcf47267a5?auto=format&fit=crop&w=800&q=80",
    tags: ["Healthcare Platform", "Vite.js", "Clean Styling", "Vercel"],
    year: "2025",
    client: "Dr Divya Dental Care",
    githubUrl: "https://github.com/Bala-0611",
    demoUrl: "https://drdivyadentalcare.com"
  }
];

export const SKILL_CATEGORIES: SkillCategory[] = [
  {
    title: "Backend & Systems Architecture",
    skills: [
      { name: "Node.js Server Engineering", level: 92 },
      { name: "Express.js REST APIs", level: 90 },
      { name: "MongoDB & Mongoose ODM", level: 88 },
      { name: "Database Design & Optimization", level: 85 }
    ]
  },
  {
    title: "Frontend & Web Languages",
    skills: [
      { name: "React.js Framework", level: 89 },
      { name: "TypeScript Programming", level: 85 },
      { name: "JavaScript (ES6+) Development", level: 91 },
      { name: "HTML5 & Tailwind CSS", level: 92 }
    ]
  },
  {
    title: "Tools, Security & DevOps",
    skills: [
      { name: "Stateless JWT Authentication", level: 86 },
      { name: "Git & GitHub Version Control", level: 90 },
      { name: "Web Deployment & Vercel", level: 84 },
      { name: "SaaS Workflow & Kissflow APIs", level: 88 }
    ]
  }
];

export const TESTIMONIALS: Testimonial[] = [
  {
    quote: "Bala demonstrated remarkable talent during his backend development internship. His capacity to build clean, modular REST APIs with Express and structure robust MongoDB schemas was exemplary.",
    author: "Technical Supervisor",
    role: "Senior Backend Developer",
    company: "Zero2Site"
  },
  {
    quote: "Bala delivered high-quality, fully responsive client portals on schedule. His ability to synchronize backend APIs with beautiful React frontends makes him a top-tier asset.",
    author: "Managing Partner",
    role: "Product Coordinator",
    company: "Brixel Tech Client Suite"
  }
];
