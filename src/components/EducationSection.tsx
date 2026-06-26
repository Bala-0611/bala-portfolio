import { motion } from 'motion/react';
import { GraduationCap, Calendar, MapPin } from 'lucide-react';

interface EducationItem {
  degree: string;
  institution: string;
  gpa: string;
  duration: string;
  location: string;
  highlights: string[];
}

function EducationCard({ edu, delay, compact = false }: { edu: EducationItem; delay: number; compact?: boolean }) {
  return (
    <motion.div
      initial={{ opacity: 0, scale: 0.96, y: 20 }}
      animate={{ opacity: 1, scale: 1, y: 0 }}
      transition={{ type: "spring", stiffness: 300, damping: 20, delay }}
      whileHover={{ y: -4, scale: 1.015, borderColor: "#E5A93C", boxShadow: "0 25px 30px -10px rgba(0,0,0,0.08)" }}
      className={`border-2 border-neutral-200 bg-neutral-50/50 hover:bg-white ${compact ? 'p-5' : 'p-6'} rounded-3xl relative transition-all duration-300 group shadow-md flex flex-col h-full`}
    >
      <div className={`absolute right-4 top-4 bg-gold-500/10 text-gold-500 ${compact ? 'p-2' : 'p-3'} rounded-xl shadow-sm border border-gold-300/30`}>
        <GraduationCap className={`${compact ? 'w-5 h-5' : 'w-6 h-6'}`} />
      </div>

      <div className="flex">
        <span className="inline-flex items-center gap-1.5 font-mono text-[9px] tracking-wider text-gold-650 uppercase bg-gold-400/20 px-3 py-1 rounded-full font-black mb-3">
          <Calendar className="w-2.5 h-2.5" />
          {edu.duration}
        </span>
      </div>

      <h4 className={`font-display font-black ${compact ? 'text-base' : 'text-xl'} text-neutral-950 uppercase leading-snug group-hover:text-gold-500 transition-colors`}>
        {edu.degree}
      </h4>
      
      <p className={`text-neutral-900 ${compact ? 'text-xs' : 'text-sm'} font-extrabold mt-1 uppercase tracking-wide`}>
        {edu.institution}
      </p>

      <div className="flex flex-wrap gap-2.5 items-center mt-3 text-xs text-neutral-900 font-mono">
        <span className="flex items-center gap-1 font-bold">
          <MapPin className="w-3 h-3 text-neutral-500" />
          {edu.location}
        </span>
        <span className="bg-neutral-950 text-white text-[9.5px] font-black px-2 py-0.5 rounded shadow-sm border border-neutral-800">
          {edu.gpa}
        </span>
      </div>

      <div className={`mt-4 pt-3 border-t border-neutral-200 space-y-2 flex-grow ${compact ? 'text-xs' : 'text-[13px]'}`}>
        {edu.highlights.map((hl, hlIdx) => (
          <p key={hlIdx} className="text-neutral-950 leading-relaxed flex items-start gap-2 font-sans font-medium">
            <span className="text-gold-500 font-black mt-0.5">•</span>
            <span>{hl}</span>
          </p>
        ))}
      </div>
    </motion.div>
  );
}

export default function EducationSection() {
  const educationDetails = [
    {
      degree: "Bachelor of Computer Applications (BCA)",
      institution: "Hindustan University",
      gpa: "CGPA: 8.8 / 10",
      duration: "2023 - 2026",
      location: "Chennai, Tamil Nadu",
      highlights: [
        "Advanced course work in Web Applications Design, Backend Architectures, and Relational Database Systems.",
        "Hands-on practice in constructing RESTful APIs, securing client portals, and integrating cloud hosting models.",
        "Strong scholarly metrics with a deep interest in software engineering pipelines and modern web systems."
      ]
    },
    {
      degree: "Higher Secondary Certificate (HSC)",
      institution: "Little Flower Matric Hr Sec School",
      gpa: "Percentage: 74.5%",
      duration: "2022 - 2023",
      location: "Chennai, Tamil Nadu",
      highlights: [
        "Completed Higher Secondary studies focusing on Computer Science, Mathematics, and Physical Sciences.",
        "Participated in regional academic science challenges and software presentations."
      ]
    }
  ];

  return (
    <div id="education-panel" className="py-2 pr-0 select-none flex flex-col justify-center min-h-[70vh] md:min-h-[85vh]">
      {/* Title block */}
      <div id="education-header" className="mb-6">
        <span className="font-mono text-[10px] tracking-widest text-gold-500 font-bold uppercase block mb-1">
          07 / QUALIFICATIONS
        </span>
        <h3 className="font-display font-extrabold text-3xl md:text-4xl text-neutral-950 uppercase tracking-tight">
          EDUCATION & MERIT
        </h3>
        <div className="w-12 h-1 bg-gold-400 mt-2.5 rounded-full" />
      </div>

      {/* Main Educational Timeline */}
      <div className="space-y-6 mt-4 max-w-4xl mx-auto w-full">
        {/* Main Undergraduate (BCA) Card */}
        {educationDetails[0] && (
          <EducationCard edu={educationDetails[0]} delay={0} />
        )}

        {/* Schooling Qualifications */}
        {educationDetails[1] && (
          <EducationCard edu={educationDetails[1]} delay={0.1} compact />
        )}
      </div>
    </div>
  );
}
