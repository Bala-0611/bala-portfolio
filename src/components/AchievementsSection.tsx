import { motion } from 'motion/react';
import { Trophy, Globe, Instagram, ArrowUpRight, Calendar } from 'lucide-react';

export default function AchievementsSection() {
  return (
    <div id="achievements-panel" className="py-2 pr-0 select-none flex flex-col justify-center min-h-[70vh] md:min-h-[85vh]">
      <div id="achievements-header" className="mb-6">
        <span className="font-mono text-[10px] tracking-widest text-gold-500 font-bold uppercase block mb-1">
          08 / MILESTONES
        </span>
        <h3 className="font-display font-extrabold text-3xl md:text-4xl text-neutral-950 uppercase tracking-tight">
          BRIXEL TECH SHOWCASE
        </h3>
        <p className="text-neutral-500 text-sm mt-1 max-w-xl font-medium">
          Highlighting founder leadership, strategic milestones, and technological innovation.
        </p>
        <div className="w-12 h-1 bg-gold-400 mt-2.5 rounded-full" />
      </div>

      {/* Brixel Tech - Featured Founder Showcase */}
      <motion.div
        initial={{ opacity: 0, y: 30 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ type: "spring", stiffness: 100, damping: 15, delay: 0.05 }}
        whileHover={{ scale: 1.005 }}
        className="max-w-4xl mx-auto w-full border-2 border-gold-500/30 bg-neutral-950 text-white p-5 md:p-7 rounded-3xl relative overflow-hidden shadow-2xl mb-4 flex flex-col md:flex-row gap-6 items-center group transition-colors duration-500"
      >
        {/* Subtle glowing radial background effect */}
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_top_right,rgba(229,169,60,0.1),transparent_60%)] pointer-events-none" />
        <div className="absolute -bottom-24 -left-24 w-48 h-48 bg-gold-500/5 rounded-full blur-3xl pointer-events-none" />

        {/* Left Side: Image Container */}
        <div className="w-full md:w-5/12 aspect-[4/3] md:aspect-square rounded-2xl overflow-hidden relative shadow-lg shrink-0 border border-neutral-800">
          <img 
            src="/images/ceo and founder.png" 
            alt="Brixel Tech Creative Design Agency" 
            referrerPolicy="no-referrer"
            className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105 filter brightness-[0.85] contrast-105"
          />
          {/* Elegant gold/dark gradient overlay */}
          <div className="absolute inset-0 bg-gradient-to-t from-neutral-950 via-neutral-950/30 to-transparent opacity-90" />
          
          {/* Logo badge over image */}
          <div className="absolute bottom-4 left-4 right-4 bg-black/80 backdrop-blur-md px-3.5 py-2.5 rounded-xl border border-white/10 flex items-center gap-3">
            <div className="w-9 h-9 bg-[#E5A93C] rounded-lg flex items-center justify-center font-black text-black text-sm tracking-tighter">
              BT
            </div>
            <div>
              <p className="font-mono text-[9px] text-[#E5A93C] font-black tracking-widest uppercase">FOUNDED</p>
              <h5 className="font-display font-black text-[11px] text-white uppercase tracking-wider">OCTOBER 2025</h5>
            </div>
          </div>
        </div>

        {/* Right Side: Short & Neat Layout with Enhancements */}
        <div className="w-full md:w-7/12 flex flex-col justify-between h-full">
          <div>
            <div className="flex flex-wrap items-center gap-2 mb-2.5">
              <span className="inline-flex items-center gap-1 font-mono text-[9px] tracking-wider text-black bg-[#E5A93C] px-3 py-1 rounded-full font-black uppercase">
                <Trophy className="w-2.5 h-2.5" />
                FOUNDER & CEO
              </span>
              <span className="inline-flex items-center gap-1 font-mono text-[9px] tracking-wider text-white/70 bg-white/10 px-2.5 py-1 rounded-full font-medium">
                <Calendar className="w-2.5 h-2.5 text-gold-400" />
                EST. OCT 2025
              </span>
            </div>

            <h4 className="font-display font-black text-xl md:text-2xl text-white uppercase tracking-tight leading-tight">
              Brixel Tech
            </h4>
            
            <p className="text-[#E5A93C] font-mono text-[10px] tracking-widest uppercase font-bold mt-0.5">
              Next-Gen Software & Creative Studio
            </p>

            <p className="text-neutral-300 text-xs md:text-[13px] leading-relaxed mt-3 font-sans font-medium">
              As Founder and CEO of Brixel Tech, I lead the architecture and direction of state-of-the-art automation workflows, modern full-stack web products, and beautiful bespoke visual platforms tailored for global scalability.
            </p>

            {/* Enhancements List */}
            <div className="grid grid-cols-2 gap-2.5 mt-4 border-t border-neutral-800 pt-3.5 mb-5">
              <div className="flex items-center gap-2">
                <div className="w-1.5 h-1.5 bg-[#E5A93C] rounded-full shrink-0" />
                <span className="text-neutral-400 font-sans font-medium text-[11px] md:text-xs">SaaS Automation</span>
              </div>
              <div className="flex items-center gap-2">
                <div className="w-1.5 h-1.5 bg-[#E5A93C] rounded-full shrink-0" />
                <span className="text-neutral-400 font-sans font-medium text-[11px] md:text-xs">Elite Custom Web Apps</span>
              </div>
              <div className="flex items-center gap-2">
                <div className="w-1.5 h-1.5 bg-[#E5A93C] rounded-full shrink-0" />
                <span className="text-neutral-400 font-sans font-medium text-[11px] md:text-xs">Workflow Optimization</span>
              </div>
              <div className="flex items-center gap-2">
                <div className="w-1.5 h-1.5 bg-[#E5A93C] rounded-full shrink-0" />
                <span className="text-neutral-400 font-sans font-medium text-[11px] md:text-xs">Founder-Led Agency</span>
              </div>
            </div>
          </div>

          {/* Social & Web Actions */}
          <div className="flex flex-wrap items-center gap-3 mt-auto">
            <a 
              href="https://brixeltech.com" 
              target="_blank" 
              rel="noopener noreferrer"
              className="inline-flex items-center gap-1.5 bg-white text-neutral-950 font-mono text-[10px] font-black px-4 py-2.5 rounded-xl hover:bg-[#E5A93C] hover:text-black hover:scale-105 active:scale-95 transition-all duration-300 shadow-md uppercase cursor-pointer"
            >
              <Globe className="w-3.5 h-3.5" />
              brixeltech.com
              <ArrowUpRight className="w-3 h-3" />
            </a>

            <a 
              href="https://www.instagram.com/brixeltech?utm_source=ig_web_button_share_sheet&igsh=ZDNlZDc0MzIxNw==" 
              target="_blank" 
              rel="noopener noreferrer"
              className="inline-flex items-center gap-1.5 bg-neutral-900 border border-neutral-850 text-neutral-300 font-mono text-[10px] font-bold px-4 py-2.5 rounded-xl hover:text-white hover:bg-neutral-850 hover:border-neutral-700 hover:scale-105 active:scale-95 transition-all duration-300 uppercase cursor-pointer"
            >
              <Instagram className="w-3.5 h-3.5 text-[#E5A93C]" />
              instagram
              <ArrowUpRight className="w-3 h-3 text-neutral-500" />
            </a>
          </div>
        </div>
      </motion.div>
    </div>
  );
}
