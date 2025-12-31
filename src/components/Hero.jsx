import React from "react";
import { motion } from "framer-motion";
import { FiArrowRight, } from "react-icons/fi";

const Hero = () => {
  return (
    <section
      id="home"
      className="relative min-h-screen flex items-center justify-center overflow-hidden bg-slate-50 dark:bg-slate-950 transition-colors duration-700 px-6 py-24 lg:py-0"
    >
      {/* BACKGROUND ORBS - Animasi halus di latar belakang */}
      <div className="absolute top-0 left-0 w-full h-full overflow-hidden pointer-events-none">
        <motion.div 
          animate={{ 
            scale: [1, 1.2, 1],
            opacity: [0.15, 0.25, 0.15] 
          }}
          transition={{ duration: 8, repeat: Infinity }}
          className="absolute top-[-10%] left-[-10%] w-[300px] md:w-[600px] h-[300px] md:h-[600px] rounded-full blur-[120px] bg-indigo-500/30" 
        />
        <motion.div 
          animate={{ 
            scale: [1, 1.3, 1],
            opacity: [0.1, 0.2, 0.1] 
          }}
          transition={{ duration: 10, repeat: Infinity, delay: 1 }}
          className="absolute bottom-[-10%] right-[-10%] w-[250px] md:w-[500px] h-[250px] md:h-[500px] rounded-full blur-[100px] bg-purple-500/20" 
        />
      </div>

      <div className="relative z-10 max-w-7xl mx-auto w-full">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 lg:gap-8 items-center">
          
          {/* ===== LEFT: TEXT CONTENT ===== */}
          <motion.div 
            initial={{ opacity: 0, x: -50 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8 }}
            className="text-center lg:text-left order-2 lg:order-1"
          >
            {/* BADGE */}
            <motion.div 
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.2 }}
              className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-indigo-50 dark:bg-indigo-500/10 border border-indigo-100 dark:border-indigo-500/20 text-indigo-600 dark:text-indigo-400 mb-8"
            >
              <span className="relative flex h-2 w-2">
                <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-indigo-400 opacity-75"></span>
                <span className="relative inline-flex rounded-full h-2 w-2 bg-indigo-500"></span>
              </span>
              <span className="text-xs md:text-sm font-bold tracking-wide uppercase">Open for Collaboration</span>
            </motion.div>

            {/* MAIN HEADING */}
            <h1 className="text-4xl sm:text-6xl lg:text-8xl font-black text-slate-900 dark:text-white leading-[1.1] mb-6">
              Hi, I'm <br />
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-indigo-600 via-purple-500 to-blue-500 animate-gradient">
                Muhammad Agung Pamungkas
              </span>
            </h1>

            {/* DESCRIPTION */}
            <p className="max-w-xl mx-auto lg:mx-0 text-base md:text-xl text-slate-600 dark:text-slate-400 leading-relaxed mb-10 font-medium">
              A passionate <span className="text-slate-900 dark:text-slate-100 font-bold underline decoration-indigo-500/30">Informatics Student</span> and Web Developer specialized in crafting 
              exceptional digital experiences with React & Laravel.
            </p>

            {/* BUTTONS GROUP */}
            <div className="flex flex-col sm:flex-row items-center justify-center lg:justify-start gap-4">
              <a
                href="#projects"
                className="group w-full sm:w-auto flex items-center justify-center gap-2 px-8 py-4 rounded-2xl bg-indigo-600 text-white font-bold shadow-xl shadow-indigo-500/25 hover:bg-indigo-700 hover:-translate-y-1 transition-all duration-300"
              >
                View Projects
                <FiArrowRight className="group-hover:translate-x-1 transition-transform" />
              </a>
            </div>
          </motion.div>

          {/* ===== RIGHT: AVATAR SECTION ===== */}
          <motion.div 
            initial={{ opacity: 0, scale: 0.8 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.8 }}
            className="flex justify-center lg:justify-end order-1 lg:order-2"
          >
            <div className="relative">
              {/* Decorative Rings */}
              <div className="absolute inset-0 rounded-full border-2 border-dashed border-indigo-500/20 animate-[spin_20s_linear_infinite]" />
              <div className="absolute -inset-4 rounded-full border border-purple-500/10 animate-[spin_15s_linear_infinite_reverse]" />

              {/* Main Profile Image Container */}
              <div className="relative w-56 h-56 sm:w-72 sm:h-72 lg:w-[450px] lg:h-[450px]">
                <div className="absolute inset-0 bg-gradient-to-tr from-indigo-500 via-purple-500 to-blue-400 rounded-[3rem] rotate-6 opacity-20 group-hover:rotate-12 transition-transform duration-500" />
                
                <div className="relative w-full h-full rounded-[2.5rem] overflow-hidden border-2 border-white dark:border-slate-800 shadow-2xl animate-float">
                  <img
                    src="/profile.jpg" // Pastikan file ada di folder public
                    alt="Profile"
                    className="w-full h-full object-cover grayscale-[20%] hover:grayscale-0 transition-all duration-500 scale-110 hover:scale-100"
                  />
                </div>
              </div>
            </div>
          </motion.div>

        </div>
      </div>

      <style jsx>{`
        @keyframes float {
          0%, 100% { transform: translateY(0px) rotate(0deg); }
          50% { transform: translateY(-20px) rotate(2deg); }
        }
        .animate-float {
          animation: float 6s ease-in-out infinite;
        }
        .animate-gradient {
          background-size: 200% auto;
          animation: gradient 4s linear infinite;
        }
        @keyframes gradient {
          to { background-position: 200% center; }
        }
      `}</style>
    </section>
  );
};

export default Hero;