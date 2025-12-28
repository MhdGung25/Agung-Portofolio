import React from "react";
import {
  FaHtml5,
  FaCss3Alt,
  FaJs,
  FaReact,
  FaGitAlt,
  FaPhp,
} from "react-icons/fa";
import { SiTailwindcss, SiLaravel, SiMysql } from "react-icons/si";

const skills = [
  { name: "HTML", icon: FaHtml5, color: "text-orange-500" },
  { name: "CSS", icon: FaCss3Alt, color: "text-blue-500" },
  { name: "JavaScript", icon: FaJs, color: "text-yellow-400" },
  { name: "React", icon: FaReact, color: "text-cyan-400" },
  { name: "Tailwind", icon: SiTailwindcss, color: "text-sky-400" },
  { name: "Laravel", icon: SiLaravel, color: "text-red-500" },
  { name: "PHP", icon: FaPhp, color: "text-indigo-400" },
  { name: "MySQL", icon: SiMysql, color: "text-blue-400" },
  { name: "Git", icon: FaGitAlt, color: "text-orange-600" },
];

const About = () => {
  return (
    <section
      id="about"
      className="relative py-20 lg:py-32 bg-slate-50 dark:bg-[#0a0f1d] overflow-hidden transition-colors duration-700"
    >
      {/* BACKGROUND DECORATION (Orbs) */}
      <div className="absolute top-1/4 -left-20 w-[300px] lg:w-[500px] h-[300px] lg:h-[500px] bg-indigo-500/10 dark:bg-indigo-500/5 rounded-full blur-[100px] -z-10" />
      <div className="absolute bottom-1/4 -right-20 w-[300px] lg:w-[500px] h-[300px] lg:h-[500px] bg-purple-500/10 dark:bg-purple-500/5 rounded-full blur-[100px] -z-10" />

      <div className="relative z-10 max-w-7xl mx-auto px-6 lg:px-12">
        
        {/* HEADER SECTION */}
        <div className="mb-12 lg:mb-20 text-center">
          <span className="inline-block px-4 py-1.5 mb-4 text-[10px] lg:text-xs font-bold uppercase tracking-[0.2em] rounded-full bg-indigo-100 dark:bg-indigo-500/10 text-indigo-600 dark:text-indigo-400 border border-indigo-200 dark:border-indigo-500/20">
            About Me
          </span>
          <h2 className="text-3xl md:text-5xl font-extrabold text-slate-900 dark:text-white tracking-tight">
            Get to know me
          </h2>
        </div>

        {/* MAIN CONTENT GRID - Sejajar di Laptop, Bertumpuk di HP */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-10 lg:gap-16 items-stretch">
          
          {/* LEFT: TEXT CONTENT (Glass Card) */}
          <div className="flex flex-col justify-between bg-white dark:bg-slate-900/50 backdrop-blur-xl border border-slate-200 dark:border-slate-800 rounded-[2rem] lg:rounded-[3rem] p-7 md:p-12 shadow-xl shadow-slate-200/50 dark:shadow-none transition-all duration-500 hover:border-indigo-300 dark:hover:border-indigo-500/30">
            <div>
              <h3 className="text-2xl md:text-3xl font-bold text-slate-900 dark:text-white mb-6">
                Who am I?
              </h3>
              
              <div className="space-y-4 text-slate-600 dark:text-slate-400 leading-relaxed text-base md:text-lg">
                <p>
                  I am an <span className="text-slate-900 dark:text-white font-semibold">Informatics student</span> with a strong passion for web
                  development, focusing on building modern, scalable, and clean
                  applications using <span className="text-indigo-600 dark:text-indigo-400 font-bold">React, Tailwind CSS, and Laravel.</span>
                </p>
                <p>
                  I enjoy transforming complex problems into elegant and intuitive
                  digital experiences with deep attention to performance and UI details.
                </p>
              </div>
            </div>

            {/* BUTTONS - Responsif Flex */}
            <div className="flex flex-col sm:flex-row gap-4 mt-10">
              <a
                href="#contact"
                className="flex-1 lg:flex-none text-center px-8 py-4 rounded-2xl bg-indigo-600 text-white font-bold shadow-lg shadow-indigo-500/25 hover:bg-indigo-500 hover:-translate-y-1 transition-all duration-300"
              >
                Contact Me
              </a>
              <a
                href="#projects"
                className="flex-1 lg:flex-none text-center px-8 py-4 rounded-2xl bg-slate-100 dark:bg-white/5 border border-slate-200 dark:border-white/10 text-slate-700 dark:text-white font-bold hover:bg-slate-200 dark:hover:bg-white/10 transition-all duration-300"
              >
                View Projects
              </a>
            </div>
          </div>

          {/* RIGHT: TECHNICAL SKILLS GRID */}
          <div className="flex flex-col">
            <div className="flex items-center gap-4 mb-8">
              <h3 className="text-2xl font-bold text-slate-900 dark:text-white whitespace-nowrap">
                Technical Skills
              </h3>
              <div className="h-px w-full bg-gradient-to-r from-slate-200 dark:from-slate-800 to-transparent" />
            </div>

            {/* Grid 2 kolom di HP sangat kecil, 3 kolom di HP sedang & Laptop */}
            <div className="grid grid-cols-2 sm:grid-cols-3 gap-3 md:gap-5">
              {skills.map((skill, index) => {
                const Icon = skill.icon;
                return (
                  <div
                    key={index}
                    className="
                      group relative
                      bg-white dark:bg-slate-900/40
                      backdrop-blur-sm
                      border border-slate-200 dark:border-slate-800/50
                      rounded-2xl lg:rounded-3xl
                      px-4 py-5 lg:py-8
                      flex flex-col items-center justify-center gap-3
                      hover:border-indigo-500 dark:hover:border-indigo-500/50
                      hover:shadow-2xl hover:shadow-indigo-500/10
                      hover:-translate-y-1.5
                      transition-all duration-300
                    "
                  >
                    <div className="relative">
                      <Icon className={`text-4xl lg:text-5xl transition-transform duration-500 group-hover:scale-110 ${skill.color}`} />
                      {/* Glow effect behind icon on hover */}
                      <div className={`absolute inset-0 blur-lg opacity-0 group-hover:opacity-30 transition-opacity duration-300 ${skill.color} bg-current`} />
                    </div>
                    
                    <span className="text-xs lg:text-sm font-bold text-slate-700 dark:text-slate-300 tracking-wide uppercase">
                      {skill.name}
                    </span>
                    
                    {/* Subtle Inner Glow on hover */}
                    <div className="absolute inset-0 rounded-2xl lg:rounded-3xl bg-indigo-500/[0.02] opacity-0 group-hover:opacity-100 transition-opacity pointer-events-none" />
                  </div>
                );
              })}
            </div>
          </div>

        </div>
      </div>
    </section>
  );
};

export default About;