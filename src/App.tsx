import { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'motion/react';
import { ActiveSection } from './types';
import Navigation from './components/Navigation';
import HomeSection from './components/HomeSection';
import AboutSection from './components/AboutSection';
import PortfolioSection from './components/PortfolioSection';
import SkillsSection from './components/SkillsSection';
import ExperienceSection from './components/ExperienceSection';
import EducationSection from './components/EducationSection';
import AchievementsSection from './components/AchievementsSection';
import ContactSection from './components/ContactSection';
import { 
  Linkedin, 
  Github, 
  Home, 
  User, 
  Briefcase, 
  Code2, 
  Milestone, 
  GraduationCap, 
  Trophy,
  Send 
} from 'lucide-react';

// Define our beautiful generated portrait path
const gokulPortrait = "/images/hero 1.jpeg";

export default function App() {
  const [activeSection, setActiveSection] = useState<ActiveSection>('home');
  const [mobileOpen, setMobileOpen] = useState(false);

  // Synchronize document body background color to avoid any viewport background spill
  useEffect(() => {
    if (activeSection === 'about') {
      document.body.style.backgroundColor = '#E5E5E5';
    } else {
      document.body.style.backgroundColor = '#ffffff';
    }
  }, [activeSection]);

  // Map state to corresponding component
  const renderSection = () => {
    switch (activeSection) {
      case 'home':
        return <HomeSection onSetSection={setActiveSection} />;
      case 'about':
        return <AboutSection />;
      case 'projects':
        return <PortfolioSection />;
      case 'skills':
        return <SkillsSection />;
      case 'experience':
        return <ExperienceSection />;
      case 'education':
        return <EducationSection />;
      case 'achievements':
        return <AchievementsSection />;
      case 'contact':
        return <ContactSection />;
      default:
        return <HomeSection onSetSection={setActiveSection} />;
    }
  };

  const socialLinks = [
    { icon: Linkedin, url: 'https://www.linkedin.com/in/bala-anandan-5b7420373/', label: 'LinkedIn' },
    { icon: Github, url: 'https://github.com/Bala-0611', label: 'GitHub' }
  ];

  return (
    <div id="main-portfolio-root" className={`min-h-screen text-black font-sans relative antialiased flex flex-col lg:flex-row overflow-x-hidden transition-colors duration-500 ${
      activeSection === 'about' ? 'bg-[#E5E5E5]' : 'bg-white'
    }`}>
      
      {/* 1. LEFT SIDE PERSISTENT COLUMN (Sidebar Menu with image top, gold bottom) */}
      <Navigation 
        activeSection={activeSection} 
        onSetSection={setActiveSection} 
        mobileOpen={mobileOpen} 
        setMobileOpen={setMobileOpen} 
      />

      {/* 2. RIGHT WORKSPACE AREA */}
      <div 
        id="right-workspace-wrapper" 
        className={`flex-grow flex flex-col min-h-screen lg:h-screen lg:overflow-y-auto relative transition-colors duration-500 ${
          activeSection === 'about' ? 'bg-[#E5E5E5]' : 'bg-white'
        }`}
      >
        <div 
          id="split-layout" 
          className={`flex flex-col lg:flex-row flex-grow min-h-full transition-colors duration-500 ${
            activeSection === 'about' ? 'bg-[#E5E5E5]' : 'bg-white'
          }`}
        >
          
          {/* Scrollable text/credentials space */}
          <div 
            id="scrollable-content-col"
            className={`w-full flex flex-col justify-between relative z-20 transition-all duration-500 ease-in-out ${
              activeSection === 'about' 
                ? 'bg-[#E5E5E5] py-6 px-4 xs:px-6 sm:px-10 md:px-16 lg:py-8 lg:px-24' 
                : 'py-8 px-4 xs:px-6 sm:px-10 md:px-12'
            } ${
              activeSection === 'about' ? 'bg-[#E5E5E5]' : 'bg-white'
            } ${
              activeSection === 'home' 
                ? 'lg:w-[62%] lg:pl-10 lg:pr-16 xl:pl-16 xl:pr-24' 
                : 'lg:w-full lg:px-16 xl:px-24'
            }`}
          >
             {/* Header row - Visible on all screens, replacing the dark mobile topbar */}
            <header id="primary-header" className={`flex items-center transition-all duration-500 border-b ${
              activeSection === 'about' 
                ? 'pb-1.5 mb-2.5 border-neutral-300' 
                : 'pb-4 mb-6 md:mb-8 border-neutral-100'
            }`}>
              {/* Desktop view header: "BALA ANANDAN" */}
              <div 
                onClick={() => setActiveSection('home')}
                className="hidden lg:flex items-center gap-2 group cursor-pointer select-none"
              >
                <span className="font-display font-black tracking-widest text-[#111] group-hover:text-gold-500 transition-colors uppercase text-sm sm:text-base">
                  BALA ANANDAN
                </span>
                <span className="w-1.5 h-1.5 rounded-full bg-gold-400 group-hover:scale-150 transition-transform"></span>
                <span className="font-mono text-[10px] text-neutral-800 sm:text-[11px] font-bold tracking-widest hidden sm:inline uppercase">
                  SOFTWARE ENGINEER
                </span>
              </div>

              {/* Mobile/Tablet view header: Replacing "BALA ANANDAN" text with the horizontal golden capsule navbar */}
              <div className="flex lg:hidden w-full justify-center py-2">
                <div className="flex items-center bg-[#E5A93C] rounded-full px-3.5 py-2 xs:px-5 xs:py-2.5 shadow-[0_6px_20px_rgba(0,0,0,0.2)] border border-white/20 select-none w-full max-w-[540px]">
                  <div className="flex items-center justify-between w-full relative">
                    {/* Internal Connective Dashed Line passing through horizontally */}
                    <div className="absolute left-4 right-4 h-[1px] border-t border-dashed border-black/35 z-0 pointer-events-none" />

                    {[
                      { id: 'home' as ActiveSection, label: 'HOME', icon: Home },
                      { id: 'about' as ActiveSection, label: 'ABOUT ME', icon: User },
                      { id: 'skills' as ActiveSection, label: 'SKILLS', icon: Code2 },
                      { id: 'projects' as ActiveSection, label: 'PROJECTS', icon: Briefcase },
                      { id: 'experience' as ActiveSection, label: 'EXPERIENCE', icon: Milestone },
                      { id: 'education' as ActiveSection, label: 'EDUCATION', icon: GraduationCap },
                      { id: 'achievements' as ActiveSection, label: 'ACHIEVEMENTS', icon: Trophy },
                      { id: 'contact' as ActiveSection, label: 'CONTACT', icon: Send },
                    ].map((item) => {
                      const isActive = activeSection === item.id;
                      const Icon = item.icon;
                      return (
                        <button
                          key={item.id}
                          onClick={() => {
                            setActiveSection(item.id);
                            const contentCol = document.getElementById('scrollable-content-col');
                            if (contentCol) {
                              contentCol.scrollTo({ top: 0, behavior: 'smooth' });
                            }
                          }}
                          className={`p-1.5 xs:p-2 sm:p-2.5 rounded-full hover:scale-110 active:scale-95 transition-all duration-300 relative cursor-pointer z-10 ${
                            isActive 
                              ? 'bg-neutral-900 text-white shadow-md border border-neutral-800 scale-105' 
                              : 'text-black/85 hover:text-black hover:bg-white/25'
                          }`}
                          aria-label={`Navigate to ${item.label}`}
                        >
                          <Icon className="w-3.5 h-3.5 xs:w-4 xs:h-4 sm:w-[18px] sm:h-[18px]" />
                        </button>
                      );
                    })}
                  </div>
                </div>
              </div>
            </header>

            {/* Interactive SWAP Component View */}
            <main id="active-panel-workspace" className="flex-grow flex flex-col justify-center">
              <AnimatePresence mode="wait">
                <motion.div
                  key={activeSection}
                  initial={{ opacity: 0, y: 10 }}
                  animate={{ opacity: 1, y: 0 }}
                  exit={{ opacity: 0, y: -10 }}
                  transition={{ duration: 0.3, ease: "easeInOut" }}
                  className="w-full"
                >
                  {renderSection()}
                </motion.div>
              </AnimatePresence>
            </main>

            {/* Footer row */}
            <footer id="primary-footer" className={`flex flex-col items-center justify-center gap-3.5 border-t transition-all duration-500 ${
              activeSection === 'about' 
                ? 'pt-4 mt-6 border-neutral-300' 
                : 'pt-8 mt-10 border-neutral-100'
            }`}>
              <p className="font-sans text-xs md:text-sm text-neutral-800 font-extrabold tracking-widest uppercase text-center">
                © {new Date().getFullYear()} BALA ANANDAN. ALL RIGHTS RESERVED.
              </p>
              
              {/* Highlighted & larger social credentials - Brand-colored short version */}
              {(activeSection === 'home' || activeSection === 'contact') && (
                <div id="footer-social-cluster" className="flex items-center justify-center gap-3">
                  <a
                    href="https://www.linkedin.com/in/bala-anandan-5b7420373/"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex items-center gap-1.5 px-3.5 py-1.5 bg-[#0077b5]/10 text-[#0077b5] hover:bg-[#0077b5] hover:text-white border border-[#0077b5]/20 rounded-full font-sans text-[10px] md:text-xs font-black tracking-wider transition-all duration-300 shadow-sm hover:shadow-md cursor-pointer hover:-translate-y-0.5 active:scale-95"
                    aria-label="LinkedIn Profile"
                    title="LinkedIn"
                  >
                    <Linkedin className="w-3.5 h-3.5" />
                    <span className="inline">LINKEDIN</span>
                  </a>
                  <a
                    href="https://github.com/Bala-0611"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex items-center gap-1.5 px-3.5 py-1.5 bg-[#24292e]/10 text-[#24292e] hover:bg-[#1f2327] hover:text-white border border-neutral-300/40 rounded-full font-sans text-[10px] md:text-xs font-black tracking-wider transition-all duration-300 shadow-sm hover:shadow-md cursor-pointer hover:-translate-y-0.5 active:scale-95"
                    aria-label="GitHub Profile"
                    title="GitHub"
                  >
                    <Github className="w-3.5 h-3.5" />
                    <span className="inline">GITHUB</span>
                  </a>
                </div>
              )}
            </footer>
          </div>

          {/* HOME PAGE PILL: Right side full bleed rectangle photo of Gokul */}
          {activeSection === 'home' && (
            <div 
              id="static-portrait-col"
              className="w-full lg:w-[38%] h-[40vh] sm:h-[45vh] lg:h-full bg-neutral-950 relative overflow-hidden group/portrait border-t lg:border-t-0 lg:border-l border-neutral-100 flex-shrink-0"
            >
              {/* Cover mask */}
              <div className="absolute inset-0 bg-gradient-to-tr from-black/25 via-transparent to-black/5 z-10 pointer-events-none" />
              
              <img
                src={gokulPortrait}
                alt="Bala Anandan Portrait"
                referrerPolicy="no-referrer"
                className="w-full h-full object-cover transition-all duration-1000 group-hover/portrait:scale-102"
              />
            </div>
          )}

        </div>
      </div>

      {/* 3. SLIM FLOATING RIGHT NAVIGATION PILL (Capsule Menu matching screenshot) */}
      <div 
        id="floating-shortcut-navigation-bar"
        className="hidden lg:flex fixed right-3 md:right-5 top-1/2 -translate-y-1/2 z-50 flex-col items-center bg-[#E5A93C] rounded-full py-4 px-2.5 shadow-[0_10px_30px_rgba(0,0,0,0.3)] border border-white/20 select-none"
      >
        <div className="flex flex-col items-center gap-1.5 xs:gap-2 md:gap-2.5 relative">
          
          {/* Internal Connective Dashed Line passing through */}
          <div className="absolute top-3 bottom-3 w-[1px] border-l border-dashed border-black/35 z-0 pointer-events-none" />

          {/* List of navigational shortcuts */}
          {[
            { id: 'home' as ActiveSection, label: 'HOME', icon: Home },
            { id: 'about' as ActiveSection, label: 'ABOUT ME', icon: User },
            { id: 'skills' as ActiveSection, label: 'SKILLS', icon: Code2 },
            { id: 'projects' as ActiveSection, label: 'PROJECTS', icon: Briefcase },
            { id: 'experience' as ActiveSection, label: 'EXPERIENCE', icon: Milestone },
            { id: 'education' as ActiveSection, label: 'EDUCATION', icon: GraduationCap },
            { id: 'achievements' as ActiveSection, label: 'ACHIEVEMENTS', icon: Trophy },
            { id: 'contact' as ActiveSection, label: 'CONTACT', icon: Send },
          ].map((item, idx, arr) => {
            const isActive = activeSection === item.id;
            const Icon = item.icon;
            return (
              <div key={item.id} className="flex flex-col items-center gap-1.5 relative z-10 group/item">
                <button
                  onClick={() => {
                    setActiveSection(item.id);
                    const contentCol = document.getElementById('scrollable-content-col');
                    if (contentCol) {
                      contentCol.scrollTo({ top: 0, behavior: 'smooth' });
                    }
                  }}
                  className={`p-1.5 xs:p-2 rounded-full hover:scale-110 active:scale-95 transition-all duration-300 relative cursor-pointer ${
                    isActive 
                      ? 'bg-neutral-900 text-white shadow-lg border border-neutral-800 scale-105' 
                      : 'text-black/80 hover:text-black hover:bg-white/25'
                  }`}
                  aria-label={`Shortcut: Navigate to ${item.label}`}
                >
                  <Icon className="w-3.5 h-3.5 xs:w-4 xs:h-4" />
                </button>
                
                {/* Floating Tooltip displaying section name */}
                <div className="absolute right-12 top-1/2 -translate-y-1/2 px-2.5 py-1 bg-neutral-950 text-white text-[9px] font-mono tracking-widest uppercase rounded opacity-0 scale-90 group-hover/item:opacity-100 group-hover/item:scale-100 transition-all duration-300 pointer-events-none shadow-xl border border-white/10 whitespace-nowrap hidden sm:block">
                  {item.label}
                </div>

                {/* Micro vertical connector dot */}
                {idx < arr.length - 1 && (
                  <div className="w-1 h-1 rounded-full bg-black/15 my-0.5" />
                )}
              </div>
            );
          })}
        </div>
      </div>

    </div>
  );
}
