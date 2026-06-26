import { useState, ReactNode } from 'react';
import { motion, AnimatePresence } from 'motion/react';
import { 
   X, 
   Settings, 
   ArrowUpRight, 
   CheckCircle2 
} from 'lucide-react';

interface TechSkill {
  name: string;
  level: number;
  color: string;
  desc: string;
  category: 'Languages' | 'Frontend' | 'Data Science' | 'Cloud & Backend' | 'Workflow';
  tags: string[];
  logo: ReactNode;
}

export default function SkillsSection() {
  const [selectedSkill, setSelectedSkill] = useState<TechSkill | null>(null);

  const techSkills: TechSkill[] = [
    {
      name: "NODE.JS",
      level: 92,
      color: "#68A063",
      category: "Cloud & Backend",
      tags: ["Asynchronous", "Event Loop", "V8 Engine", "API Routing"],
      desc: "Core runtime used to engineer fast, scalable server-side systems and real-time backend routers. Extensively used during corporate internships to build modular APIs.",
      logo: (
        <svg className="w-16 h-16 transition-transform duration-300 group-hover:scale-105" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
          <rect width="24" height="24" rx="4" fill="#0F172A" stroke="#68A063" strokeWidth="1.5" />
          <path d="M12 4L4.5 8.3v7.4L12 20l7.5-4.3V8.3L12 4zm5.5 10.7l-5.5 3.1-5.5-3.1V9.3l5.5-3.1 5.5 3.1v5.4z" fill="#68A063"/>
        </svg>
      )
    },
    {
      name: "EXPRESS.JS",
      level: 90,
      color: "#38bdf8",
      category: "Cloud & Backend",
      tags: ["RESTful", "Middleware", "JSON Routing", "Error Handlers"],
      desc: "Robust minimalist web framework used to construct low-latency JSON REST APIs, validate payload schemas, and configure request body-parsers securely.",
      logo: (
        <svg className="w-16 h-16 transition-transform duration-300 group-hover:scale-105" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
          <rect width="24" height="24" rx="4" fill="#0F172A" stroke="#38bdf8" strokeWidth="1.5" />
          <text x="12" y="12" dominantBaseline="central" textAnchor="middle" fill="#38bdf8" fontFamily="'JetBrains Mono', monospace" fontSize="8" fontWeight="black">EXP</text>
        </svg>
      )
    },
    {
      name: "REACT.JS",
      level: 89,
      color: "#61DAFB",
      category: "Frontend",
      tags: ["Vite.js", "Hooks", "Component Lifecycle", "State Management"],
      desc: "Building highly interactive, reusable client interfaces and single-page applications optimized with robust rendering hooks and responsive layouts.",
      logo: (
        <svg className="w-16 h-16 transition-transform duration-300 group-hover:scale-105" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
          <circle cx="12" cy="12" r="2" fill="#61DAFB" />
          <path d="M12 7c3.866 0 7 2.239 7 5s-3.134 5-7 5-7-2.239-7-5 3.134-5 7-5z" stroke="#61DAFB" strokeWidth="1" fill="none" transform="rotate(30 12 12)" />
          <path d="M12 7c3.866 0 7 2.239 7 5s-3.134 5-7 5-7-2.239-7-5 3.134-5 7-5z" stroke="#61DAFB" strokeWidth="1" fill="none" transform="rotate(90 12 12)" />
          <path d="M12 7c3.866 0 7 2.239 7 5s-3.134 5-7 5-7-2.239-7-5 3.134-5 7-5z" stroke="#61DAFB" strokeWidth="1" fill="none" transform="rotate(150 12 12)" />
        </svg>
      )
    },
    {
      name: "TYPESCRIPT",
      level: 85,
      color: "#3178C6",
      category: "Languages",
      tags: ["Static Typing", "Interfaces", "Enums", "Type Safety"],
      desc: "Writing highly maintainable and clean, self-documenting code with robust compiler guarantees, strict object types, and zero runtime reference failures.",
      logo: (
        <svg className="w-16 h-16 rounded-lg overflow-hidden transition-transform duration-300 group-hover:scale-105" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
          <rect width="24" height="24" fill="#3178C6" />
          <text x="12" y="12" dominantBaseline="central" textAnchor="middle" fill="#FFFFFF" fontFamily="'Inter', sans-serif" fontSize="11" fontWeight="black">TS</text>
        </svg>
      )
    },
    {
      name: "JAVASCRIPT",
      level: 91,
      color: "#F7DF1E",
      category: "Languages",
      tags: ["ES6+", "Async / Await", "Promises", "Closures"],
      desc: "Comprehensive logic foundations utilizing standard event listeners, object manipulations, dynamic loops, and high-performance client functions.",
      logo: (
        <svg className="w-16 h-16 rounded-lg overflow-hidden transition-transform duration-300 group-hover:scale-105" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
          <rect width="24" height="24" fill="#F7DF1E" />
          <text x="12" y="12" dominantBaseline="central" textAnchor="middle" fill="#000000" fontFamily="'Inter', sans-serif" fontSize="11" fontWeight="black">JS</text>
        </svg>
      )
    },
    {
      name: "MONGODB",
      level: 88,
      color: "#47A248",
      category: "Cloud & Backend",
      tags: ["Mongoose ODM", "NoSQL Documents", "Atlas Clusters", "Aggregation"],
      desc: "Structuring fast, scalable document schemas. Experienced with setting up Atlas clusters, designing robust relations, and optimization modeling.",
      logo: (
        <svg className="w-16 h-16 transition-transform duration-300 group-hover:scale-105" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
          <rect width="24" height="24" rx="4" fill="#0F172A" stroke="#47A248" strokeWidth="1.5" />
          <path d="M12 3c-1.5 2-2 4.5-2 6 0 2.5 1 4.5 2 6 1-1.5 2-3.5 2-6 0-1.5-.5-4-2-6z" fill="#47A248"/>
          <path d="M12 15c-.5.5-1 1-1 1.5 0 .8.4 1.5 1 2 .6-.5 1-1.2 1-2 0-.5-.5-1-1-1.5z" fill="#3F8041"/>
        </svg>
      )
    },
    {
      name: "REST APIS",
      level: 93,
      color: "#E29D24",
      category: "Cloud & Backend",
      tags: ["Postman Verification", "Payload Formatting", "CORS Configurations", "Secure Headers"],
      desc: "Designing secure, modular API routes following uniform resource identifiers and returning well-formatted, standard JSON payloads.",
      logo: (
        <svg className="w-16 h-16 transition-transform duration-300 group-hover:scale-105" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
          <rect width="24" height="24" rx="4" fill="#0F172A" stroke="#E29D24" strokeWidth="1.5" />
          <text x="12" y="12" dominantBaseline="central" textAnchor="middle" fill="#E29D24" fontFamily="'JetBrains Mono', monospace" fontSize="8" fontWeight="black">API</text>
        </svg>
      )
    },
    {
      name: "TAILWIND CSS",
      level: 92,
      color: "#06B6D4",
      category: "Frontend",
      tags: ["Utility-First", "Fluid Grid", "Eye-Safe Themes", "Hover Interactivity"],
      desc: "Crafting modern layouts using mobile-first responsive prefixes, strict color contrasts, and fully accessible typography alignments.",
      logo: (
        <svg className="w-16 h-16 transition-transform duration-300 group-hover:scale-105" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
          <path d="M12 6.5c-2.5 0-4 1.25-4.5 3.75 1.25-1.25 2.5-1.75 3.75-1.5.71.14 1.22.66 1.79 1.23C13.97 10.93 15.13 12 17.5 12c2.5 0 4-1.25 4-3.75-1.25 1.25-2.5 1.75-3.75 1.5-.71-.14-1.22-.66-1.79-1.23C15.03 7.57 13.87 6.5 12 6.5z" fill="#06B6D4"/>
        </svg>
      )
    },
    {
      name: "AUTHENTICATION",
      level: 86,
      color: "#EC4899",
      category: "Workflow",
      tags: ["JWT Tokens", "Stateless Security", "Role Guarding", "Password Encryption"],
      desc: "Implementing secure stateless sign-in flows and session handling. Protecting server endpoints with robust custom token verifying middleware.",
      logo: (
        <svg className="w-16 h-16 transition-transform duration-300 group-hover:scale-105" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
          <rect x="5" y="10" width="14" height="10" rx="2" stroke="#EC4899" strokeWidth="2" fill="none" />
          <path d="M8 10V7a4 4 0 018 0v3" stroke="#EC4899" strokeWidth="2" fill="none" />
        </svg>
      )
    },
    {
      name: "WEB DEPLOYMENT",
      level: 84,
      color: "#FFFFFF",
      category: "Workflow",
      tags: ["Vercel Hosting", "Continuous Deployment", "DNS Optimization", "SSL Handshakes"],
      desc: "Delivering end-to-end full stack products and static portals onto commercial hosts securely connected with custom domains and DNS mapping.",
      logo: (
        <svg className="w-16 h-16 transition-transform duration-300 group-hover:scale-105" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
          <rect width="24" height="24" rx="4" fill="#0F172A" stroke="#FFFFFF" strokeWidth="1.5" />
          <path d="M12 4L4 18h16L12 4z" fill="#FFFFFF"/>
        </svg>
      )
    },
    {
      name: "FIGMA",
      level: 80,
      color: "#F24E1E",
      category: "Frontend",
      tags: ["Atomic Design", "Mockup Wireframes", "UX Prototyping", "Design Tokens"],
      desc: "Prototyping responsive UI wireframes, client-facing dashboard components, visual branding kits, and user interaction maps.",
      logo: (
        <svg className="w-16 h-16 transition-transform duration-300 group-hover:scale-105" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
          <path d="M8 4a4 4 0 00-4 4 4 4 0 004 4h4V4H8z" fill="#F24E1E"/>
          <path d="M12 4h4a4 4 0 010 8h-4V4z" fill="#FF7262"/>
          <path d="M8 12a4 4 0 00-4 4 4 4 0 004 4h4v-8H8z" fill="#A259FF"/>
          <path d="M12 12a4 4 0 014-4 4 4 0 010 8h-4v-4z" fill="#1ABCFE"/>
          <path d="M8 20a4 4 0 00-4 4a4 4 0 004 4a4 4 0 004-4v-4H8z" fill="#0ACF83"/>
        </svg>
      )
    },
    {
      name: "GIT & GITHUB",
      level: 90,
      color: "#F05032",
      category: "Workflow",
      tags: ["Branch Merging", "Pull Requests", "Commit Logs", "Collaborative Pipelines"],
      desc: "Maintaining clean branch structures, conducting code reviews, handling push/pull cycles, and synchronizing distributed developer updates safely.",
      logo: (
        <svg className="w-16 h-16 transition-transform duration-300 group-hover:scale-105" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
          <path d="M12 0C5.37 0 0 5.37 0 12c0 5.3 3.438 9.8 8.205 11.385.6.113.82-.258.82-.577 0-.285-.01-1.04-.015-2.04-3.338.724-4.042-1.61-4.042-1.61C4.422 18.07 3.633 17.7 3.633 17.7c-1.087-.744.084-.729.084-.729 1.205.084 1.838 1.236 1.838 1.236 1.07 1.835 2.809 1.305 3.495.998.108-.776.417-1.305.76-1.605-2.665-.3-5.466-1.332-5.466-5.93 0-1.31.465-2.38 1.235-3.22-.135-.303-.54-1.523.105-3.176 0 0 1.005-.322 3.3 1.23.96-.267 1.98-.399 3-.405 1.02.006 2.04.138 3 .405 2.28-1.552 3.285-1.23 3.285-1.23.645 1.653.24 2.873.12 3.176.765.84 1.23 1.91 1.23 3.22 0 4.61-2.805 5.625-5.475 5.92.42.36.81 1.096.81 2.22 0 1.606-.015 2.896-.015 3.286 0 .315.21.69.825.57C20.565 21.795 24 17.3 24 12c0-6.63-5.37-12-12-12z" fill="#FFFFFF"/>
        </svg>
      )
    }
  ];

  return (
    <div id="skills-brand-showcase" className="w-full max-w-6xl mx-auto py-10 px-4 select-none relative text-left">
      
      {/* 1. Header Specifying Title */}
      <div className="relative z-10 flex flex-col md:flex-row md:items-end justify-between gap-6 mb-10 pb-6 border-b border-neutral-200">
        <div>
          <span className="font-mono text-[10px] tracking-widest text-[#E5A93C] font-bold uppercase block mb-1">
            02 / TECH MATRIX
          </span>
          <h3 className="font-sans font-black text-3xl md:text-5xl text-neutral-950 uppercase tracking-tight leading-none">
            TECHNICAL EXPERTISE
          </h3>
          <p className="font-sans text-neutral-700 text-sm md:text-[15px] mt-3.5 max-w-2xl leading-relaxed font-semibold pl-3 border-l-2 border-[#E5A93C]">
            Tap on any technology tile inside the brand catalog block to review full execution contexts, capability stats, and specialized development parameters.
          </p>
        </div>
      </div>

      {/* 2. Brand Grid Layout */}
      <div className="grid grid-cols-2 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6 mb-10">
        {techSkills.map((tech) => (
          <motion.div
            key={tech.name}
            onClick={() => setSelectedSkill(tech)}
            whileHover={{ y: -4, scale: 1.015 }}
            whileTap={{ scale: 0.985 }}
            className="group relative bg-[#0a1128] border-2 border-[#15234f] rounded-lg p-6 hover:bg-[#0f1d46] hover:border-[#1e3477] transition-all duration-300 cursor-pointer overflow-hidden flex flex-col items-center justify-center min-h-[160px] shadow-[0_4px_16px_rgba(0,0,0,0.5)]"
            style={{
              boxShadow: `inset 0 1px 0 rgba(255,255,255,0.03)`
            }}
          >
            {/* Top-Right Mini Status Dot indicator */}
            <div className="absolute top-2 right-2.5 flex items-center gap-1.5 opacity-0 group-hover:opacity-100 transition-opacity">
              <span className="h-1.5 w-1.5 rounded-full bg-emerald-500 animate-pulse" />
              <span className="text-[7.5px] font-mono tracking-widest text-[#38bdf8] font-bold">INFO</span>
            </div>

            {/* Centered High Fidelity Logo */}
            <div className="flex-1 flex items-center justify-center pb-5 pt-2">
              <div className="transition-transform duration-300">
                {tech.logo}
              </div>
            </div>

            {/* Bottom-Left technology text */}
            <span className="absolute bottom-3.5 left-4 text-[11px] font-mono font-black tracking-widest text-[#7E8FBA] group-hover:text-white transition-colors uppercase select-none">
              {tech.name}
            </span>

            {/* Card inner subtle glowing halo */}
            <div 
              className="absolute inset-0 opacity-0 group-hover:opacity-[0.14] transition-opacity duration-300 pointer-events-none"
              style={{
                background: `radial-gradient(circle at center, ${tech.color} 0%, transparent 75%)`
              }} 
            />
          </motion.div>
        ))}
      </div>

      {/* 3. Glass-Morphism Specification Overlay Panel */}
      <AnimatePresence>
        {selectedSkill && (
          <motion.div 
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/80 backdrop-blur-md"
            onClick={() => setSelectedSkill(null)}
          >
            <motion.div 
              initial={{ scale: 0.94, y: 15 }}
              animate={{ scale: 1, y: 0 }}
              exit={{ scale: 0.94, y: 15 }}
              transition={{ type: "spring", damping: 25, stiffness: 350 }}
              className="bg-[#0b1430] border-2 border-[#1c2e64] p-6 sm:p-8 rounded-[28px] max-w-lg w-full relative overflow-hidden shadow-2xl text-left"
              onClick={(e) => e.stopPropagation()}
            >
              {/* Overlay engineering blueprints */}
              <div className="absolute inset-0 bg-[radial-gradient(rgba(255,255,255,0.015)_1.5px,transparent_1.5px)] bg-[size:16px_16px] pointer-events-none" />

              {/* Close Button */}
              <button 
                onClick={() => setSelectedSkill(null)}
                className="absolute top-4.5 right-4.5 p-2 rounded-full hover:bg-white/10 text-neutral-400 hover:text-white transition-colors cursor-pointer"
              >
                <X className="w-5 h-5" />
              </button>

              {/* Specification Header */}
              <div className="flex items-center gap-4.5 border-b border-[#13224f]/60 pb-5 mb-5 select-none">
                <div className="p-2 bg-[#060b1b] border border-[#1b2f67] rounded-xl shrink-0">
                  {selectedSkill.logo}
                </div>
                <div>
                  <span className="font-mono text-[9px] uppercase tracking-widest text-[#38bdf8] font-black block mb-0.5">
                    {selectedSkill.category} System Calibration
                  </span>
                  <h4 className="font-sans font-black text-2.5xl text-white tracking-tight uppercase leading-none mt-1">
                    {selectedSkill.name}
                  </h4>
                </div>
              </div>

              {/* Level indicator slider metrics */}
              <div className="mb-5 select-none">
                <div className="flex justify-between items-baseline mb-2">
                  <span className="font-mono text-[10px] text-neutral-400 uppercase tracking-widest font-black">
                    Expertise Calibration Meter
                  </span>
                  <span className="font-mono text-xl text-[#38bdf8] font-extrabold">{selectedSkill.level}%</span>
                </div>
                <div className="w-full bg-[#060b1b] h-2.5 rounded-full overflow-hidden border border-[#1b2a56]">
                  <motion.div 
                    initial={{ width: 0 }}
                    animate={{ width: `${selectedSkill.level}%` }}
                    transition={{ duration: 0.65, ease: "easeOut" }}
                    className="h-full rounded-full"
                    style={{ backgroundColor: selectedSkill.color }}
                  />
                </div>
              </div>

              {/* Descriptive deployment specifications */}
              <div className="space-y-4">
                <span className="font-mono text-[9px] uppercase tracking-wider text-neutral-500 font-extrabold block">Deployment Context</span>
                <p className="text-neutral-300 font-sans text-sm leading-relaxed font-semibold">
                  {selectedSkill.desc}
                </p>
              </div>

              {/* Associated Tags list */}
              <div className="space-y-2 mt-5 select-none">
                <span className="font-mono text-[9px] uppercase tracking-wider text-neutral-500 font-extrabold block">Associated Tools</span>
                <div className="flex flex-wrap gap-1.5">
                  {selectedSkill.tags.map((tag) => (
                    <span 
                      key={tag} 
                      className="text-[10px] font-mono text-neutral-200 bg-[#060c1d] border border-[#162758] px-2.5 py-1 rounded-lg font-bold"
                    >
                      # {tag}
                    </span>
                  ))}
                </div>
              </div>

              {/* Bottom footer button actions */}
              <div className="border-t border-[#13224f]/60 pt-5 mt-6 flex justify-between items-center text-[10.5px] font-mono select-none">
                <span className="text-neutral-400 font-bold flex items-center gap-1.5">
                  <CheckCircle2 className="w-4 h-4 text-emerald-500" /> REPOSITORY STABLE
                </span>
                <span className="text-[#38bdf8] font-black uppercase tracking-wider flex items-center gap-0.5">
                  READY <ArrowUpRight className="w-4 h-4" />
                </span>
              </div>

            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>

      {/* 4. Footnote */}
      <footer className="relative z-10 p-4.5 bg-[#0a112f]/80 border border-[#1a2b64]/60 rounded-xl flex flex-col sm:flex-row justify-between items-start sm:items-center gap-3 text-left">
        <div className="flex items-center gap-2.5">
          <Settings className="w-4 h-4 text-blue-500 hidden sm:block shrink-0 animate-spin" style={{ animationDuration: '6s' }} />
          <p className="text-[12px] font-sans text-neutral-400 font-medium">
            Brand directory is built using high-performance vector graphics rendering directly onto modern layout grids.
          </p>
        </div>
        <span className="text-[9px] uppercase font-mono tracking-widest font-black text-[#38bdf8] bg-[#060b1b] border border-[#1c2e64] px-3 py-1.5 rounded-lg inline-block shrink-0 select-none">
          ESTABLISHED STANDARD
        </span>
      </footer>

    </div>
  );
}
