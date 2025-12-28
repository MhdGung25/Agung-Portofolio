import React from "react";
import { FiGithub, FiInstagram, FiMail } from "react-icons/fi";
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
    { icon: <FiGithub />, href: "https://github.com/MhdGung25", label: "Github" },
    { icon: <FiInstagram />, href: "https://instagram.com/mhdgengp", label: "Instagram" },
    { icon: <FaWhatsapp />, href: "https://wa.me/6281999612344", label: "WhatsApp" },
    { icon: <FiMail />, href: "mailto:muhammadagung2003@gmail.com", label: "Email" },
  ];

  return (
    <footer className="relative mt-20 pb-10 overflow-hidden">
      {/* BACKGROUND DECORATION */}
      <div className="absolute bottom-0 left-1/2 -translate-x-1/2 w-[600px] h-[300px] bg-indigo-500/10 blur-[120px] rounded-full -z-10" />

      <div className="max-w-6xl mx-auto px-6">
        {/* MAIN CONTAINER */}
        <div className="bg-white/5 dark:bg-slate-900/40 backdrop-blur-xl border border-white/10 dark:border-slate-800/50 rounded-[2.5rem] p-8 md:p-12 shadow-2xl">
          
          <div className="flex flex-col items-center text-center">
            {/* BRAND SECTION */}
            <div className="mb-8">
              <h3 className="text-2xl font-bold text-slate-900 dark:text-white tracking-tight">
                Muhammad Agung<span className="text-indigo-500">.</span>
              </h3>
              <p className="text-slate-500 dark:text-slate-400 mt-3 max-w-md leading-relaxed">
                Informatics Student & Web Developer dedicated to building 
                exceptional digital experiences.
              </p>
            </div>

            {/* NAVIGATION LINKS */}
            <nav className="mb-10">
              <ul className="flex flex-wrap justify-center gap-x-8 gap-y-4 text-sm font-medium">
                {navLinks.map((item, i) => (
                  <li key={i}>
                    <a
                      href={item.link}
                      className="text-slate-600 dark:text-slate-400 hover:text-indigo-500 dark:hover:text-indigo-400 transition-colors duration-300"
                    >
                      {item.name}
                    </a>
                  </li>
                ))}
              </ul>
            </nav>

            {/* SOCIAL MEDIA */}
            <div className="flex gap-4">
              {socialLinks.map((item, i) => (
                <a
                  key={i}
                  href={item.href}
                  target="_blank"
                  rel="noopener noreferrer"
                  aria-label={item.label}
                  className="
                    group relative
                    w-12 h-12
                    flex items-center justify-center
                    rounded-2xl
                    bg-slate-100 dark:bg-slate-800/50
                    text-slate-600 dark:text-slate-400
                    border border-slate-200 dark:border-slate-700/50
                    hover:bg-indigo-500 dark:hover:bg-indigo-600
                    hover:text-white hover:border-indigo-500
                    hover:-translate-y-1
                    transition-all duration-300
                  "
                >
                  <span className="text-xl relative z-10">{item.icon}</span>
                  {/* Subtle Glow on Hover */}
                  <div className="absolute inset-0 rounded-2xl bg-indigo-500 blur-lg opacity-0 group-hover:opacity-40 transition-opacity" />
                </a>
              ))}
            </div>
          </div>

          {/* DIVIDER */}
          <div className="my-10 h-px bg-gradient-to-r from-transparent via-slate-200 dark:via-slate-700 to-transparent" />

          {/* BOTTOM SECTION */}
          <div className="flex flex-col md:flex-row justify-between items-center gap-4">
            <p className="text-xs text-slate-500 dark:text-slate-500 font-medium">
              © {currentYear} Muhammad Agung Pamungkas. All rights reserved.
            </p>
            <p className="text-[10px] uppercase tracking-widest text-slate-400 dark:text-slate-600">
              Crafted with <span className="text-red-500/80 mx-1">❤️</span> using React & Tailwind
            </p>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;