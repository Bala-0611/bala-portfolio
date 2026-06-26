import { FormEvent, useState } from 'react';
import { motion, AnimatePresence } from 'motion/react';
import { Send, CheckCircle2, Mail, RefreshCw, Linkedin, Github, Instagram, Copy, Check } from 'lucide-react';
import { PERSONAL_INFO } from '../data';

export default function ContactSection() {
  const [formSubmitted, setFormSubmitted] = useState(false);
  const [formLoading, setFormLoading] = useState(false);
  const [copied, setCopied] = useState(false);
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    service: 'General Inquiry',
    message: ''
  });

  const messageText = `Hi Bala,\n\nI want to connect with you!\n\nName: ${formData.name}\nEmail: ${formData.email}\nInquiry Type: ${formData.service}\n\nMessage:\n${formData.message}`;
  const instagramUrl = "https://www.instagram.com/iam_bala06?utm_source=ig_web_button_share_sheet&igsh=ZDNlZDc0MzIxNw==";

  const handleSubmit = (e: FormEvent) => {
    e.preventDefault();
    if (!formData.name || !formData.email || !formData.message) return;

    setFormLoading(true);

    setTimeout(() => {
      setFormLoading(false);
      setFormSubmitted(true);
      try {
        window.open(instagramUrl, '_blank', 'noopener,noreferrer');
      } catch (err) {
        window.location.href = instagramUrl;
      }
    }, 1200);
  };

  const handleCopy = () => {
    navigator.clipboard.writeText(messageText);
    setCopied(true);
    setTimeout(() => setCopied(false), 2000);
  };

  return (
    <div id="contact-panel" className="py-2 pr-0 md:pr-4 select-none flex flex-col justify-center min-h-[70vh] md:min-h-[85vh]">
      {/* Contact Header */}
      <div id="contact-header" className="mb-6">
        <h3 className="font-display font-extrabold text-3xl md:text-4xl text-neutral-950 uppercase tracking-tight">
          GET IN TOUCH
        </h3>
        <div className="w-12 h-1 bg-gold-400 mt-2.5 rounded-full" />
      </div>

      <p id="contact-intro-para" className="text-neutral-950 text-sm leading-relaxed mb-8 font-medium max-w-2xl">
        Have any questions, project ideas, or general inquiries? Fill out the form on the left, or connect directly through any of my official details on the right!
      </p>

      {/* Two-Column Responsive Layout */}
      <div className="grid grid-cols-1 lg:grid-cols-5 gap-8 lg:gap-12 items-start">
        
        {/* Left Column: Enquiry Form (Spans 3/5 on large screens) */}
        <div className="lg:col-span-3">
          <div id="form-container-box" className="bg-neutral-50 border border-neutral-100 p-5 md:p-6 rounded-2xl relative overflow-hidden shadow-sm">
            <AnimatePresence mode="wait">
              {!formSubmitted ? (
                <motion.form
                  key="contact-form"
                  onSubmit={handleSubmit}
                  initial={{ opacity: 1, scale: 1 }}
                  exit={{ opacity: 0, scale: 0.96 }}
                  transition={{ duration: 0.3 }}
                  className="space-y-4"
                >
                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                    {/* Name */}
                    <div className="space-y-1.5">
                      <label htmlFor="user-name" className="block font-sans text-xs md:text-sm tracking-wide text-neutral-900 uppercase font-black">
                        YOUR NAME *
                      </label>
                      <input
                        id="user-name"
                        type="text"
                        required
                        value={formData.name}
                        onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                        placeholder=""
                        className="w-full bg-white border border-neutral-200 focus:border-gold-500 rounded-xl px-4 py-3 text-xs outline-none transition-all duration-300 select-text font-semibold text-neutral-500"
                      />
                    </div>

                    {/* Email */}
                    <div className="space-y-1.5">
                      <label htmlFor="user-email" className="block font-sans text-xs md:text-sm tracking-wide text-neutral-900 uppercase font-black">
                        EMAIL ADDRESS *
                      </label>
                      <input
                        id="user-email"
                        type="email"
                        required
                        value={formData.email}
                        onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                        placeholder=""
                        className="w-full bg-white border border-neutral-200 focus:border-gold-500 rounded-xl px-4 py-3 text-xs outline-none transition-all duration-300 select-text font-semibold text-neutral-500"
                      />
                    </div>
                  </div>

                  {/* Message */}
                  <div className="space-y-1.5">
                    <label htmlFor="user-message" className="block font-sans text-xs md:text-sm tracking-wide text-neutral-900 uppercase font-black">
                      DESCRIPTION OF INQUIRY
                    </label>
                    <textarea
                      id="user-message"
                      required
                      rows={6}
                      value={formData.message}
                      onChange={(e) => setFormData({ ...formData, message: e.target.value })}
                      placeholder="Tell me what you have in mind or ask any question..."
                      className="w-full bg-white border border-neutral-200 focus:border-gold-500 rounded-xl px-4 py-3 text-xs outline-none transition-all duration-300 resize-none select-text font-semibold text-neutral-500"
                    />
                  </div>

                  {/* Action Submit */}
                  <button
                    id="submit-form-btn"
                    type="submit"
                    disabled={formLoading}
                    className="w-full bg-black hover:bg-gold-500 hover:text-black text-white py-4 rounded-xl font-sans text-xs font-black tracking-widest uppercase transition-all duration-300 flex items-center justify-center gap-2 cursor-pointer shadow-lg disabled:opacity-50"
                  >
                    {formLoading ? (
                      <>
                        <RefreshCw className="w-4 h-4 animate-spin" />
                        <span> REDIRECTING TO INSTAGRAM... </span>
                      </>
                    ) : (
                      <>
                        <Instagram className="w-4 h-4" />
                        <span> SEND VIA INSTAGRAM DMs </span>
                      </>
                    )}
                  </button>
                </motion.form>
              ) : (
                /* Successful Delivery Receipt card with Instagram redirection */
                <motion.div
                  key="success-card"
                  initial={{ opacity: 0, scale: 0.95 }}
                  animate={{ opacity: 1, scale: 1 }}
                  transition={{ duration: 0.4 }}
                  className="text-center py-6 px-4 flex flex-col items-center gap-4"
                >
                  <div className="bg-gradient-to-tr from-[#f9ce34] via-[#ee2a7b] to-[#6228d7] p-4 rounded-full text-white">
                    <CheckCircle2 className="w-10 h-10" />
                  </div>
                  <h4 className="font-display font-black text-neutral-900 text-xl uppercase tracking-wider">
                    REDIRECTING TO INSTAGRAM
                  </h4>
                  <p className="text-neutral-500 text-xs md:text-sm font-semibold max-w-sm leading-relaxed">
                    Thank you, <span className="font-black text-black">{formData.name}</span>! I've opened my Instagram DMs for you. You can copy the message below so you can easily paste it into the chat!
                  </p>

                  {/* Copy message box */}
                  <div className="w-full bg-white border border-neutral-200 rounded-xl p-4 text-left relative group">
                    <pre className="text-[10px] md:text-xs font-mono text-neutral-600 whitespace-pre-wrap select-text leading-relaxed">
                      {messageText}
                    </pre>
                    <button
                      onClick={handleCopy}
                      className="absolute top-2.5 right-2.5 p-2 bg-neutral-100 hover:bg-neutral-200 text-neutral-700 rounded-lg transition-all active:scale-95 cursor-pointer border border-neutral-300/40"
                      title="Copy message text"
                    >
                      {copied ? <Check className="w-4 h-4 text-emerald-600" /> : <Copy className="w-4 h-4" />}
                    </button>
                  </div>

                  <div className="flex flex-col sm:flex-row gap-3 w-full justify-center mt-2">
                    {/* Manual redirection link */}
                    <a
                      href={instagramUrl}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="inline-flex items-center justify-center gap-2 px-6 py-3.5 bg-gradient-to-r from-[#ee2a7b] to-[#6228d7] text-white font-sans text-xs font-black tracking-wider uppercase rounded-xl shadow-lg transition-all duration-300 hover:opacity-90 active:scale-95"
                    >
                      <Instagram className="w-4 h-4" />
                      <span>OPEN INSTAGRAM DM</span>
                    </a>

                    {/* Reset button */}
                    <button
                      id="redo-form-btn"
                      onClick={() => {
                        setFormData({ name: '', email: '', service: 'General Inquiry', message: '' });
                        setFormSubmitted(false);
                      }}
                      className="inline-flex items-center justify-center gap-2 px-6 py-3.5 bg-neutral-900 hover:bg-neutral-800 text-white font-sans text-xs font-black tracking-wider uppercase rounded-xl shadow transition-all duration-300 cursor-pointer"
                    >
                      <span>SEND ANOTHER</span>
                    </button>
                  </div>
                </motion.div>
              )}
            </AnimatePresence>
          </div>
        </div>

        {/* Right Column: Contact Details (Spans 2/5 on large screens) */}
        <div className="lg:col-span-2 space-y-6">
          <div id="contact-directory-list" className="bg-neutral-50 border border-neutral-200/60 rounded-3xl p-6 shadow-sm space-y-6">
            <h4 className="font-sans text-xs md:text-sm tracking-widest text-[#E5A93C] font-black uppercase block mb-1">
              DIRECT CORE CONTACTS
            </h4>

            {/* Direct Cards Stack - Highly Polished & Interactive */}
            <div className="space-y-4">
              
              {/* Email Card */}
              <motion.a 
                whileHover={{ y: -4, scale: 1.02 }}
                href={`mailto:${PERSONAL_INFO.email}`}
                className="flex items-center gap-4 bg-white border border-neutral-200/50 hover:border-gold-500 p-4 rounded-2xl shadow-sm transition-all duration-300 block"
              >
                <div className="bg-[#FEF6C8] text-neutral-900 p-3.5 rounded-2xl flex-shrink-0 shadow-sm border border-[#fceeac]/30">
                  <Mail className="w-5 h-5 stroke-[2]" />
                </div>
                <div className="overflow-hidden">
                  <span className="block font-sans text-xs md:text-sm uppercase tracking-wide text-neutral-950 font-black">EMAIL ADDRESS</span>
                  <p className="text-[11px] md:text-xs font-semibold text-neutral-500 mt-0.5 truncate">
                    {PERSONAL_INFO.email}
                  </p>
                </div>
              </motion.a>

              {/* LinkedIn Brand Card */}
              <motion.a 
                whileHover={{ y: -4, scale: 1.02 }}
                href="https://www.linkedin.com/in/bala-anandan-5b7420373/"
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center gap-4 bg-white border border-neutral-200/50 hover:border-[#0077b5] p-4 rounded-2xl shadow-sm transition-all duration-300 block cursor-pointer"
              >
                <div className="bg-[#0077b5]/10 text-[#0077b5] p-3.5 rounded-2xl flex-shrink-0 shadow-sm border border-[#0077b5]/20">
                  <Linkedin className="w-5 h-5 stroke-[2]" />
                </div>
                <div>
                  <span className="block font-sans text-xs md:text-sm uppercase tracking-wide text-[#0077b5] font-black">LINKEDIN</span>
                  <p className="text-[11px] md:text-xs font-semibold text-neutral-500 mt-0.5">
                    Bala Anandan
                  </p>
                </div>
              </motion.a>

              {/* Instagram Card */}
              <motion.a 
                whileHover={{ y: -4, scale: 1.02 }}
                href={instagramUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center gap-4 bg-white border border-neutral-200/50 hover:border-[#E1306C] p-4 rounded-2xl shadow-sm transition-all duration-300 block cursor-pointer"
              >
                <div className="bg-[#E1306C]/10 text-[#E1306C] p-3.5 rounded-2xl flex-shrink-0 shadow-sm border border-[#E1306C]/20">
                  <Instagram className="w-5 h-5 stroke-[2]" />
                </div>
                <div>
                  <span className="block font-sans text-xs md:text-sm uppercase tracking-wide text-[#E1306C] font-black">INSTAGRAM</span>
                  <p className="text-[11px] md:text-xs font-semibold text-neutral-500 mt-0.5">
                    @iam_bala06
                  </p>
                </div>
              </motion.a>

              {/* GitHub Brand Card */}
              <motion.a 
                whileHover={{ y: -4, scale: 1.02 }}
                href="https://github.com/Bala-0611"
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center gap-4 bg-white border border-neutral-200/50 hover:border-[#1f2327] p-4 rounded-2xl shadow-sm transition-all duration-300 block cursor-pointer"
              >
                <div className="bg-[#1f2327]/10 text-[#1f2327] p-3.5 rounded-2xl flex-shrink-0 shadow-sm border border-neutral-300/40">
                  <Github className="w-5 h-5 stroke-[2]" />
                </div>
                <div>
                  <span className="block font-sans text-xs md:text-sm uppercase tracking-wide text-neutral-900 font-black">GITHUB</span>
                  <p className="text-[11px] md:text-xs font-semibold text-neutral-500 mt-0.5">
                    Bala-0611
                  </p>
                </div>
              </motion.a>

            </div>

          </div>
        </div>

      </div>

    </div>
  );
}
