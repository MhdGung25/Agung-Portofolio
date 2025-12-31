import React from "react";
import { motion } from "framer-motion";
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
  { name: "HTML", icon: FaHtml5, color: "text-orange-500", glow: "group-hover:shadow-orange-500/20" },
  { name: "CSS", icon: FaCss3Alt, color: "text-blue-500", glow: "group-hover:shadow-blue-500/20" },
  { name: "JavaScript", icon: FaJs, color: "text-yellow-400", glow: "group-hover:shadow-yellow-400/20" },
  { name: "React", icon: FaReact, color: "text-cyan-400", glow: "group-hover:shadow-cyan-400/20" },
  { name: "Tailwind", icon: SiTailwindcss, color: "text-sky-400", glow: "group-hover:shadow-sky-400/20" },
  { name: "Laravel", icon: SiLaravel, color: "text-red-500", glow: "group-hover:shadow-red-500/20" },
  { name: "PHP", icon: FaPhp, color: "text-indigo-400", glow: "group-hover:shadow-indigo-400/20" },
  { name: "MySQL", icon: SiMysql, color: "text-blue-400", glow: "group-hover:shadow-blue-400/20" },
  { name: "Git", icon: FaGitAlt, color: "text-orange-600", glow: "group-hover:shadow-orange-600/20" },
];

const About = () => {
  return (
    <section
      id="about"
      className="relative py-24 md:py-32 bg-slate-50 dark:bg-slate-950 overflow-hidden transition-colors duration-700"
    >
      {/* BACKGROUND ELEMENTS */}
      <div className="absolute top-0 left-0 w-full h-full overflow-hidden pointer-events-none">
        <div className="absolute top-1/4 -left-20 w-[300px] md:w-[600px] h-[300px] md:h-[600px] bg-indigo-500/10 dark:bg-indigo-500/5 rounded-full blur-[120px]" />
        <div className="absolute bottom-1/4 -right-20 w-[300px] md:w-[600px] h-[300px] md:h-[600px] bg-purple-500/10 dark:bg-purple-500/5 rounded-full blur-[120px]" />
      </div>

      <div className="relative z-10 max-w-7xl mx-auto px-6 lg:px-12">
        
        {/* SECTION HEADER */}
        <motion.div 
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="mb-16 md:mb-24 text-center lg:text-left"
        >
          <h2 className="text-sm md:text-base font-bold uppercase tracking-[0.3em] text-indigo-600 dark:text-indigo-400 mb-4">
            About Me
          </h2>
          <h3 className="text-3xl md:text-5xl font-black text-slate-900 dark:text-white">
            Transforming ideas into <br className="hidden md:block" />
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-indigo-600 to-purple-500">
              Digital Reality
            </span>
          </h3>
        </motion.div>

        {/* CONTENT GRID */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-20 items-start">
          
          {/* LEFT: THE STORY (Glass Card) */}
          <motion.div 
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            className="lg:col-span-5 flex flex-col"
          >
            <div className="bg-white/80 dark:bg-slate-900/50 backdrop-blur-2xl border border-slate-200 dark:border-slate-800 p-8 md:p-12 rounded-[2.5rem] shadow-xl shadow-slate-200/40 dark:shadow-none transition-all duration-500 hover:border-indigo-400/30">
              <h4 className="text-2xl font-bold text-slate-900 dark:text-white mb-6">
                Who am I?
              </h4>
              <div className="space-y-5 text-slate-600 dark:text-slate-400 leading-relaxed text-base md:text-lg">
                <p>
                  Saya adalah seorang <span className="text-slate-900 dark:text-white font-bold">Informatics Student</span> yang berfokus pada pengembangan aplikasi web modern. Saya memiliki ketertarikan mendalam pada teknologi yang memungkinkan pembangunan sistem yang bersih, terukur, dan performan.
                </p>
                <p>
                  Keahlian utama saya terletak pada ekosistem <span className="text-indigo-600 dark:text-indigo-400 font-bold italic">React, Tailwind CSS, dan Laravel.</span> Saya percaya bahwa setiap detail dalam UI/UX menentukan kesuksesan sebuah produk digital.
                </p>
                <div className="pt-4 flex items-center gap-4 text-slate-900 dark:text-white font-semibold italic">
                  <div className="w-12 h-[2px] bg-indigo-600" />
                  Enjoy the process, master the craft.
                </div>
              </div>
            </div>
          </motion.div>

          {/* RIGHT: SKILLS GRID */}
          <motion.div 
            initial={{ opacity: 0, x: 30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            className="lg:col-span-7"
          >
            <div className="flex items-center gap-4 mb-10">
              <h4 className="text-xl font-bold text-slate-900 dark:text-white whitespace-nowrap">
                Technical Mastery
              </h4>
              <div className="h-px w-full bg-gradient-to-r from-slate-200 dark:from-slate-800 to-transparent" />
            </div>

            <div className="grid grid-cols-2 sm:grid-cols-3 gap-4 md:gap-6">
              {skills.map((skill, index) => {
                const Icon = skill.icon;
                return (
                  <motion.div
                    key={index}
                    whileHover={{ y: -8 }}
                    className={`
                      group relative overflow-hidden
                      bg-white/50 dark:bg-slate-900/40
                      backdrop-blur-md
                      border border-slate-200 dark:border-slate-800/50
                      rounded-3xl p-6 md:p-8
                      flex flex-col items-center justify-center gap-4
                      transition-all duration-300 ${skill.glow} hover:shadow-2xl
                      hover:border-indigo-500/50
                    `}
                  >
                    {/* Hover Decoration */}
                    <div className={`absolute top-0 right-0 w-2 h-2 rounded-full m-3 opacity-0 group-hover:opacity-100 transition-opacity ${skill.color} bg-current`} />
                    
                    <div className="relative">
                      <Icon className={`text-4xl md:text-5xl transition-all duration-500 group-hover:scale-110 ${skill.color}`} />
                      <div className={`absolute inset-0 blur-xl opacity-0 group-hover:opacity-40 transition-opacity duration-300 ${skill.color} bg-current`} />
                    </div>
                    
                    <span className="text-xs md:text-sm font-black text-slate-700 dark:text-slate-300 tracking-widest uppercase">
                      {skill.name}
                    </span>
                  </motion.div>
                );
              })}
            </div>
          </motion.div>

        </div>
      </div>
    </section>
  );
};

export default About;