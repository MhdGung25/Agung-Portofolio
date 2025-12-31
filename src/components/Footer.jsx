import React from "react";
import { motion } from "framer-motion";
import { FiGithub, FiInstagram, FiMail, FiArrowUp } from "react-icons/fi";
import { FaWhatsapp } from "react-icons/fa";

const Footer = () => {
  const currentYear = new Date().getFullYear();

  const navLinks = [
    { name: "Home", link: "#home" },
    { name: "About", link: "#about" },
    { name: "Projects", link: "#projects" },
    { name: "Contact", link: "#contact" },
  ];

  const socialLinks = [
    { icon: <FiGithub />, href: "https://github.com/MhdGung25", label: "Github", color: "hover:bg-slate-800" },
    { icon: <FiInstagram />, href: "https://instagram.com/mhdgengp", label: "Instagram", color: "hover:bg-pink-600" },
    { icon: <FaWhatsapp />, href: "https://wa.me/6281999612344", label: "WhatsApp", color: "hover:bg-green-600" },
    { icon: <FiMail />, href: "mailto:muhammadagung2003@gmail.com", label: "Email", color: "hover:bg-indigo-600" },
  ];

  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: "smooth" });
  };

  return (
    <footer className="relative mt-20 pb-12 overflow-hidden bg-slate-50 dark:bg-slate-950 transition-colors duration-700">
      {/* BACKGROUND DECORATION */}
      <div className="absolute top-0 left-1/2 -translate-x-1/2 w-full h-full pointer-events-none">
        <div className="absolute bottom-[-50px] left-1/2 -translate-x-1/2 w-[300px] md:w-[600px] h-[300px] bg-indigo-500/10 dark:bg-indigo-500/5 blur-[100px] rounded-full" />
      </div>

      <div className="max-w-7xl mx-auto px-6 relative z-10">
        {/* MAIN GLASS CARD */}
        <motion.div 
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="bg-white/70 dark:bg-slate-900/40 backdrop-blur-2xl border border-white dark:border-slate-800/50 rounded-[2.5rem] md:rounded-[4rem] p-10 md:p-16 shadow-2xl shadow-slate-200/50 dark:shadow-none"
        >
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            
            {/* BRAND & DESC */}
            <div className="text-center lg:text-left space-y-6">
              <h3 className="text-3xl font-black text-slate-900 dark:text-white tracking-tighter">
                Agung<span className="text-indigo-600">.</span>
              </h3>
              <p className="text-slate-600 dark:text-slate-400 max-w-sm mx-auto lg:mx-0 leading-relaxed font-medium">
                Membangun solusi digital masa depan dengan kode yang bersih dan desain yang intuitif.
              </p>
              
              {/* SOCIAL MEDIA */}
              <div className="flex justify-center lg:justify-start gap-4">
                {socialLinks.map((item, i) => (
                  <a
                    key={i}
                    href={item.href}
                    target="_blank"
                    rel="noopener noreferrer"
                    aria-label={item.label}
                    className={`
                      group relative w-12 h-12 flex items-center justify-center rounded-2xl
                      bg-slate-100 dark:bg-slate-800/50 text-slate-600 dark:text-slate-400
                      border border-slate-200 dark:border-slate-700/50
                      transition-all duration-300 hover:-translate-y-1 hover:text-white ${item.color}
                    `}
                  >
                    <span className="text-xl relative z-10">{item.icon}</span>
                    <div className="absolute inset-0 rounded-2xl bg-current blur-lg opacity-0 group-hover:opacity-20 transition-opacity" />
                  </a>
                ))}
              </div>
            </div>

            {/* QUICK LINKS & ACTION */}
            <div className="flex flex-col items-center lg:items-end gap-8">
              <nav>
                <ul className="flex flex-wrap justify-center lg:justify-end gap-x-8 gap-y-4">
                  {navLinks.map((item, i) => (
                    <li key={i}>
                      <a
                        href={item.link}
                        className="text-sm font-bold uppercase tracking-widest text-slate-500 dark:text-slate-400 hover:text-indigo-600 dark:hover:text-indigo-400 transition-all"
                      >
                        {item.name}
                      </a>
                    </li>
                  ))}
                </ul>
              </nav>

              <button 
                onClick={scrollToTop}
                className="group flex items-center gap-3 px-6 py-3 rounded-full bg-slate-900 dark:bg-white text-white dark:text-slate-900 font-bold text-xs uppercase tracking-widest hover:scale-105 active:scale-95 transition-all"
              >
                Back to Top
                <FiArrowUp className="group-hover:-translate-y-1 transition-transform" />
              </button>
            </div>
          </div>

          {/* DIVIDER */}
          <div className="my-12 h-px bg-gradient-to-r from-transparent via-slate-200 dark:via-slate-800 to-transparent" />

          {/* COPYRIGHT SECTION */}
          <div className="flex flex-col md:flex-row justify-between items-center gap-6">
            <div className="text-center md:text-left">
              <p className="text-sm text-slate-500 dark:text-slate-500 font-bold">
                © {currentYear} Muhammad Agung Pamungkas
              </p>
              <p className="text-[10px] text-slate-400 dark:text-slate-600 uppercase tracking-[0.2em] mt-1">
                All Rights Reserved
              </p>
            </div>
            
            <div className="flex items-center gap-2 px-5 py-2 rounded-full bg-slate-100 dark:bg-slate-800/50 border border-slate-200 dark:border-slate-700/50">
              <span className="text-[10px] font-black uppercase tracking-widest text-slate-500 dark:text-slate-400">
                Built with
              </span>
              <div className="flex gap-2">
                <span className="w-2 h-2 rounded-full bg-cyan-400 animate-pulse" title="React" />
                <span className="w-2 h-2 rounded-full bg-sky-400 animate-pulse" title="Tailwind" />
                <span className="w-2 h-2 rounded-full bg-orange-500 animate-pulse" title="Framer Motion" />
              </div>
            </div>
          </div>
        </motion.div>
        
        {/* FOOTER NOTE */}
        <p className="text-center mt-10 text-[10px] text-slate-400 dark:text-slate-600 uppercase tracking-[0.3em]">
          Designed & Coded by Agung
        </p>
      </div>
    </footer>
  );
};

export default Footer;