import { motion } from 'motion/react';
import { Download, Globe, Smartphone, Cpu } from 'lucide-react';
import { PERSONAL_INFO } from '../data';
import { jsPDF } from 'jspdf';

export default function AboutSection() {

  const downloadResume = async () => {
    try {
      // Check if a static PDF file has been uploaded to the public directory
      const response = await fetch('/Bala_Anandan_Resume.pdf', { method: 'HEAD' });
      if (response.ok) {
        const link = document.createElement('a');
        link.href = 'public/resume/Bala Anandan Resume.pdf';
        link.download = 'Bala_Anandan_Resume.pdf';
        document.body.appendChild(link);
        link.click();
        document.body.removeChild(link);
        return;
      }
    } catch (err) {
      console.log('Error checking static PDF, falling back to dynamic PDF:', err);
    }

    // Instantiate jsPDF with standard margins and professional styling
    const doc = new jsPDF({
      orientation: 'portrait',
      unit: 'pt',
      format: 'a4'
    });

    const pageWidth = doc.internal.pageSize.getWidth();
    const margin = 40;
    const contentWidth = pageWidth - (margin * 2);
    let y = 30;

    // Custom utility for rendering section headers with a classic horizontal rule underneath
    const drawSectionHeader = (title: string) => {
      y += 12; // spacing above section (compact)
      doc.setFont('helvetica', 'bold');
      doc.setFontSize(10);
      doc.text(title.toUpperCase(), margin, y);
      y += 3; // slight offset to horizontal line
      doc.setDrawColor(120, 120, 120);
      doc.setLineWidth(0.8);
      doc.line(margin, y, pageWidth - margin, y);
      y += 9; // spacing below line
    };

    // Custom utility to render a two-column row (item title on left, metadata like date/location on right)
    const drawTwoColumnHeader = (leftText: string, rightText: string, isBoldLeft = true, size = 9) => {
      doc.setFont('helvetica', isBoldLeft ? 'bold' : 'normal');
      doc.setFontSize(size);
      doc.text(leftText, margin, y);
      doc.setFont('helvetica', 'normal');
      doc.text(rightText, pageWidth - margin, y, { align: 'right' });
      y += 11;
    };

    // Custom bullet renderer that handles multi-line wrapping elegantly
    const drawBulletPoint = (text: string, indent = 15, size = 8.5) => {
      doc.setFont('helvetica', 'normal');
      doc.setFontSize(size);
      
      // Draw a perfect vector solid black dot bullet point using circle layout
      doc.setFillColor(60, 60, 60);
      doc.circle(margin + 8, y - 3, 1.8, 'F');
      
      const textWidth = contentWidth - indent;
      const lines: string[] = doc.splitTextToSize(text, textWidth);
      
      lines.forEach((line) => {
        doc.text(line, margin + indent, y);
        y += 10.5; // compact leading for clean visual rhythm
      });
      y += 2; // subtle separator space
    };

    // 1. PRIMARY CONTACT HEADER BLOCK (Centered, Helvetica, executive finish)
    doc.setFont('helvetica', 'bold');
    doc.setFontSize(16);
    doc.text("BALA ANANDAN", pageWidth / 2, y, { align: 'center' });
    y += 14;

    doc.setFont('helvetica', 'normal');
    doc.setFontSize(9);
    doc.text("balaanandan0623@gmail.com", pageWidth / 2, y, { align: 'center' });
    y += 11;

    doc.text("LinkedIn: https://www.linkedin.com/in/bala-anandan-5b7420373/ | GitHub: https://github.com/Bala-0611", pageWidth / 2, y, { align: 'center' });
    y += 10;

    // Helper to dynamically manage page overflow during text layout drawing
    const ensureSpace = (spaceNeeded: number) => {
      if (y + spaceNeeded > 780) {
        doc.addPage();
        y = 40;
      }
    };

    // 1.5 OBJECTIVES
    ensureSpace(120);
    drawSectionHeader("PROFESSIONAL SUMMARY");
    
    doc.setFont('helvetica', 'normal');
    doc.setFontSize(8.5);
    const coLines = doc.splitTextToSize("Full Stack Developer with hands-on experience in Node.js, Express.js, React.js, MongoDB, and TypeScript. Experienced in building scalable web applications, REST APIs, SaaS workflow automation, and client-facing projects. Completed backend development internships and freelance projects, with a strong interest in software engineering and modern web technologies.", contentWidth);
    coLines.forEach((line: string) => {
      doc.text(line, margin, y);
      y += 11;
    });
    y += 4;

    // 2. EDUCATION SECTION
    ensureSpace(90);
    drawSectionHeader("EDUCATION");
    
    // Hindustan University Row
    drawTwoColumnHeader("HINDUSTAN UNIVERSITY", "2023 - 2026", true, 9.5);
    drawTwoColumnHeader("Bachelor of Computer Applications (BCA)", "CGPA : 8.8 / 10", false, 9);
    y += 4;

    // Little Flower Row
    ensureSpace(50);
    drawTwoColumnHeader("LITTLE FLOWER MATRIC HR SEC SCHOOL", "2022 - 2023", true, 9.5);
    drawTwoColumnHeader("Higher Secondary Certificate (HSC)", "Score : 74.5%", false, 9);
    y += 4;

    // 3. WORK EXPERIENCE SECTION
    ensureSpace(160);
    drawSectionHeader("WORK EXPERIENCE");

    // Zero2Site Row
    drawTwoColumnHeader("Zero2Site - Backend Developer Intern", "May 2025 - June 2025", true, 9.5);
    drawBulletPoint("Built secure backend REST APIs and query routers using Node.js, Express.js, and MongoDB.");
    drawBulletPoint("Collaborated on entity-relationship database design, schema indexations, and backend payload optimization.");
    y += 4;

    // Freelance
    ensureSpace(90);
    drawTwoColumnHeader("Freelance Full Stack Web Developer", "Nov 2025 - Apr 2026", true, 9.5);
    drawBulletPoint("Developed and deployed fully responsive websites for multiple local businesses and clinical portals.");
    drawBulletPoint("Delivered end-to-end web architectures including continuous deployment on Vercel hosts.");
    y += 4;

    // 4. PROJECTS SECTION
    ensureSpace(125);
    drawSectionHeader("PROJECTS");
    
    // Kissflow
    doc.setFont('helvetica', 'bold');
    doc.setFontSize(9.5);
    doc.text("Kissflow SaaS Automation Project", margin, y);
    y += 12;
    drawBulletPoint("Developed a SaaS-based School Fee Management System utilizing complex Kissflow workflows and status triggers.");
    drawBulletPoint("Automated real-time fee tracking, status state updates, and dynamic email triggers to minimize processing latency.");
    drawBulletPoint("Integrated Kissflow REST APIs, Google Forms, and Google Apps Script for low-overhead database syncing.");
    y += 3;

    // AI Resume
    ensureSpace(70);
    doc.setFont('helvetica', 'bold');
    doc.setFontSize(9.5);
    doc.text("AI Resume Analyzer", margin, y);
    y += 12;
    drawBulletPoint("Built an AI-powered portal for parsing, candidate ranking, and multidimensional resume analysis.");
    drawBulletPoint("Extracted technical skills and provided job-match relevance insights using advanced NLP techniques.");
    drawBulletPoint("Generated structured candidate evaluation reports and recruiter analytics cards.");
    y += 3;

    // Clinic platforms
    ensureSpace(60);
    doc.setFont('helvetica', 'bold');
    doc.setFontSize(9.5);
    doc.text("Active Client Portals (Brixel Tech, Harshus Clinic, Dr Divya Dental Care)", margin, y);
    y += 12;
    drawBulletPoint("Constructed fully responsive, highly optimized web layouts with React.js, Tailwind CSS, and Vercel hosting.");

    // 5. TECHNICAL SKILLS SECTION
    ensureSpace(100);
    drawSectionHeader("TECHNICAL SKILLS & TOOLS");
    
    const drawTechnicalSkillLine = (category: string, skills: string) => {
      doc.setFont('helvetica', 'bold');
      doc.setFontSize(9);
      doc.text(category + ": ", margin, y);
      
      const labelWidth = doc.getTextWidth(category + ": ");
      doc.setFont('helvetica', 'normal');
      doc.setFontSize(9);
      
      const limitW = contentWidth - labelWidth - 5;
      const lines: string[] = doc.splitTextToSize(skills, limitW);
      lines.forEach((line, idx) => {
        doc.text(line, margin + labelWidth + 5, y);
        if (idx < lines.length - 1) y += 11.5;
      });
      y += 12;
    };

    drawTechnicalSkillLine("Backend & APIs", "Node.js, Express.js, REST APIs, Authentication");
    drawTechnicalSkillLine("Frontend Technologies", "React.js with Vite, HTML, Tailwind CSS, JavaScript, TypeScript");
    drawTechnicalSkillLine("Databases & Storage", "MongoDB, Mongoose, MongoDB Atlas");
    drawTechnicalSkillLine("Tools & Platforms", "VS Code, Git, GitHub, Postman, Figma, Canva, Vercel");
    drawTechnicalSkillLine("SaaS Automation", "Kissflow Workflows, Google Apps Script, Google Forms");

    // 8. DECLARATION SECTION
    ensureSpace(45);
    drawSectionHeader("DECLARATION");
    doc.setFont('helvetica', 'normal');
    doc.setFontSize(9);
    doc.text("I Bala Anandan, declare that the information stated above is accurate to the best of my knowledge.", margin, y);

    // Trigger direct in-browser download of the finalized PDF file
    doc.save('Bala_Anandan_Resume.pdf');
  };

  return (
    <div id="about-panel" className="py-0.5 select-none flex flex-col justify-center w-full max-w-full">
      {/* 1. Dashboard title in clean dashed border frame */}
      <div 
        id="about-dashed-header" 
        className="border-[1.5px] border-dashed border-neutral-400 bg-neutral-200/25 py-3 px-4 md:py-4 md:px-8 mb-3 rounded-none text-center select-none cursor-default"
      >
        <h3 className="font-sans font-black text-3.5xl sm:text-4.5xl md:text-[50px] text-black uppercase tracking-[0.22em] leading-none mb-0 select-none">
          ABOUT ME
        </h3>
      </div>

      {/* 2. Subtitle with clean formatting: Name, Role */}
      <h4 id="about-subtitle" className="font-sans text-base sm:text-lg md:text-[19px] mb-3.5 leading-snug text-center sm:text-left select-none">
        <span className="text-black font-semibold">I'm </span>
        <span className="font-black text-black">Bala Anandan,</span>{" "}
        <span className="font-bold text-neutral-800">Full Stack Developer</span>
      </h4>

      {/* 3. Biography text block */}
      <p id="about-bio-text" className="text-neutral-950 text-[13.5px] sm:text-base md:text-[16.5px] leading-relaxed mb-4.5 font-sans font-semibold text-center sm:text-left tracking-wide">
        {PERSONAL_INFO.fullBio}
      </p>

      {/* 4. Action Bar containing Resume PDF Download Button with Premium architectural 3D depth shadow */}
      <div id="about-action-bar" className="flex items-center justify-between gap-3 mb-4 pb-2 border-b border-neutral-300">
        <div>
          <motion.button
            onClick={downloadResume}
            whileHover={{ scale: 1.02 }}
            whileTap={{ scale: 0.98 }}
            className="inline-flex items-center gap-2 bg-[#E5A93C] hover:bg-neutral-950 text-neutral-950 hover:text-white py-2 px-5 sm:py-2.5 sm:px-6 rounded-none font-sans text-[11px] tracking-widest font-black uppercase transition-all duration-300 shadow-[3px_3px_0px_rgba(0,0,0,1)] hover:shadow-none hover:translate-x-[2px] hover:translate-y-[2px] cursor-pointer border border-neutral-900"
          >
            <Download className="w-3.5 h-3.5 stroke-[2.5]" />
            <span>DOWNLOAD RESUME (PDF)</span>
          </motion.button>
        </div>
      </div>

      {/* 5. Dual split details (Metrics Box vs capabilities) */}
      <div id="about-split-details" className="grid grid-cols-1 lg:grid-cols-12 gap-4 lg:gap-6 items-stretch">
        
        {/* Left Side: Dark box containing Key Performance Metrics */}
        <div id="about-metrics-col" className="md:col-span-12 lg:col-span-7 flex flex-col justify-stretch">
          <div className="bg-black text-white p-6 sm:p-8 rounded-none shadow-xl relative overflow-hidden flex-grow flex flex-col justify-center min-h-[220px] lg:min-h-0 border border-neutral-900">
            {/* Subtle mesh background visual dot pattern in gorgeous dark gold */}
            <div className="absolute inset-0 bg-[radial-gradient(#E5A93C_1.5px,transparent_1.5px)] [background-size:18px_18px] opacity-15 pointer-events-none" />
            
            {/* 2x2 Grid with absolute crosshair grid lines */}
            <div className="grid grid-cols-2 gap-y-7 gap-x-4 relative z-10 my-auto py-2">
              {/* Vertical Cross Divider */}
              <div className="absolute top-0 bottom-0 left-1/2 border-l border-dashed border-neutral-700/60 -translate-x-1/2" />
              {/* Horizontal Cross Divider */}
              <div className="absolute left-0 right-0 top-1/2 border-t border-dashed border-neutral-700/60 -translate-y-1/2" />
              
              {/* Metric 1 */}
              <div className="flex flex-col items-center justify-center text-center p-2">
                <span className="text-[#E5A93C] font-sans font-black text-3.5xl sm:text-4.5xl lg:text-[46px] tracking-tight leading-none mb-1.5 select-none">
                  8.8
                </span>
                <span className="font-sans text-[8.5px] lg:text-[9.5px] tracking-[0.15em] text-neutral-300 font-bold uppercase leading-tight select-none">
                  BCA CGPA
                </span>
              </div>

              {/* Metric 2 */}
              <div className="flex flex-col items-center justify-center text-center p-2">
                <span className="text-[#E5A93C] font-sans font-black text-3.5xl sm:text-4.5xl lg:text-[46px] tracking-tight leading-none mb-1.5 select-none">
                  5+
                </span>
                <span className="font-sans text-[8.5px] lg:text-[9.5px] tracking-[0.15em] text-neutral-300 font-bold uppercase leading-tight select-none">
                  DEPLOYED PROJECTS
                </span>
              </div>

              {/* Metric 3 */}
              <div className="flex flex-col items-center justify-center text-center p-2 pt-3">
                <span className="text-[#E5A93C] font-sans font-black text-3.5xl sm:text-4.5xl lg:text-[46px] tracking-tight leading-none mb-1.5 select-none">
                  12+
                </span>
                <span className="font-sans text-[8.5px] lg:text-[9.5px] tracking-[0.15em] text-neutral-300 font-bold uppercase leading-tight select-none">
                  TECH STACK TOOLS
                </span>
              </div>

              {/* Metric 4 */}
              <div className="flex flex-col items-center justify-center text-center p-2 pt-3">
                <span className="text-[#E5A93C] font-sans font-black text-3.5xl sm:text-4.5xl lg:text-[46px] tracking-tight leading-none mb-1.5 select-none">
                  2
                </span>
                <span className="font-sans text-[8.5px] lg:text-[9.5px] tracking-[0.15em] text-neutral-300 font-bold uppercase leading-tight select-none">
                  PROF. PLACEMENTS
                </span>
              </div>
            </div>
          </div>
        </div>

        {/* Right Side: What I Do list */}
        <div id="about-info-col" className="md:col-span-12 lg:col-span-5 flex flex-col justify-center">
          <h5 className="font-sans font-black text-black text-[15px] sm:text-[17px] md:text-lg tracking-wide uppercase mb-3 pb-1 border-b-2 border-black/95 flex items-center justify-between select-none">
            <span>What I Do?</span>
          </h5>

          <div className="space-y-3">
            {/* Capability 1: BACKEND DEVELOPMENT */}
            <div className="flex items-start gap-3 p-1 rounded-none transition-all duration-300 group border border-transparent">
              <div className="p-0.5 text-neutral-950 rounded-none flex-shrink-0 group-hover:text-[#E5A93C] transition-colors duration-300">
                <Cpu className="w-5.5 h-5.5 sm:w-6 sm:h-6 stroke-[1.5]" />
              </div>
              <div>
                <h6 className="font-sans font-black text-neutral-950 text-[11.5px] sm:text-xs md:text-[12.5px] tracking-wide uppercase mb-0.5 leading-tight">
                  Backend API Development
                </h6>
                <p className="text-neutral-900 text-[10.5px] sm:text-[11px] md:text-xs leading-relaxed font-medium">
                  Designing robust, optimized backend solutions using Node.js, Express.js, and MongoDB, with modular entity structures, secure data transactions, and rapid query response indexing.
                </p>
              </div>
            </div>

            {/* Capability 2: FRONTEND PLATFORMS */}
            <div className="flex items-start gap-3 p-1 rounded-none transition-all duration-300 group border border-transparent">
              <div className="p-0.5 text-neutral-950 rounded-none flex-shrink-0 group-hover:text-[#E5A93C] transition-colors duration-300">
                <Globe className="w-5.5 h-5.5 sm:w-6 sm:h-6 stroke-[1.5]" />
              </div>
              <div>
                <h6 className="font-sans font-black text-neutral-950 text-[11.5px] sm:text-xs md:text-[12.5px] tracking-wide uppercase mb-0.5 leading-tight">
                  Frontend Engineering
                </h6>
                <p className="text-neutral-900 text-[10.5px] sm:text-[11px] md:text-xs leading-relaxed font-medium">
                  Developing lightweight, accessible client applications using React, Vite, and Tailwind CSS. Crafting interactive components, clean state management loops, and custom-designed visual themes.
                </p>
              </div>
            </div>

            {/* Capability 3: SAAS AUTOMATION */}
            <div className="flex items-start gap-3 p-1 rounded-none transition-all duration-300 group border border-transparent">
              <div className="p-0.5 text-neutral-950 rounded-none flex-shrink-0 group-hover:text-[#E5A93C] transition-colors duration-300">
                <Smartphone className="w-5.5 h-5.5 sm:w-6 sm:h-6 stroke-[1.5]" />
              </div>
              <div>
                <h6 className="font-sans font-black text-neutral-950 text-[11.5px] sm:text-xs md:text-[12.5px] tracking-wide uppercase mb-0.5 leading-tight">
                  SaaS & Workflow Automation
                </h6>
                <p className="text-neutral-900 text-[10.5px] sm:text-[11px] md:text-xs leading-relaxed font-medium">
                  Automating repetitive business administrative and database operations by creating secure REST API webhooks, Kissflow workflows, Google Forms trackers, and Google Apps Script triggers.
                </p>
              </div>
            </div>
          </div>
        </div>

      </div>
    </div>
  );
}
