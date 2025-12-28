import React from 'react';

const Hero = ({ isDarkMode }) => {
  // Catatan: Prop 'isDarkMode' bisa dikirim dari Parent (App.js) 
  // agar sinkron dengan Navbar. Jika kamu hanya pakai class 'dark' di <html>, 
  // kamu tidak butuh prop ini, cukup gunakan Tailwind dark: modifier.

  return (
    <section
      id="home"
      className="relative min-h-screen flex items-center justify-center overflow-hidden transition-colors duration-700 ease-in-out bg-slate-50 dark:bg-[#0a0f1d] px-6 py-20 lg:py-0"
    >
      {/* BACKGROUND ORBS - Menggunakan class dark: agar sinkron dengan Navbar */}
      <div className="absolute top-[-10%] left-[-10%] w-[500px] h-[500px] rounded-full blur-[120px] animate-pulse transition-all duration-1000 bg-indigo-400/20 dark:bg-indigo-600/20" />
      <div className="absolute bottom-[-10%] right-[-10%] w-[400px] h-[400px] rounded-full blur-[100px] transition-all duration-1000 bg-purple-400/10 dark:bg-purple-600/10" />

      <div className="relative z-10 max-w-6xl mx-auto w-full grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-20 items-center">
        
        {/* ===== AVATAR ===== */}
        <div className="order-1 lg:order-2 flex justify-center lg:justify-end">
          <div className="relative group">
            {/* Glow effect yang menyesuaikan mode */}
            <div className="absolute -inset-1 rounded-full blur opacity-30 group-hover:opacity-60 transition duration-1000 bg-gradient-to-tr from-indigo-500 to-purple-600" />
            
            <div className="relative w-48 h-48 sm:w-64 sm:h-64 lg:w-[400px] lg:h-[400px] animate-float">
              <div className="absolute inset-0 rounded-full p-[3px] bg-gradient-to-tr from-indigo-500 via-purple-500 to-cyan-400">
                <div className="w-full h-full rounded-full p-2 transition-colors duration-700 bg-white dark:bg-[#0a0f1d]">
                  <img
                    src="/profile.jpg" 
                    alt="Muhammad Agung Pamungkas"
                    className="rounded-full w-full h-full object-cover transition-all duration-700 grayscale-0 dark:grayscale-[20%] dark:hover:grayscale-0"
                  />
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* ===== TEXT CONTENT ===== */}
        <div className="order-2 lg:order-1 text-center lg:text-left space-y-6">
          {/* BADGE */}
          <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full border backdrop-blur-md transition-all duration-700 bg-indigo-50 border-indigo-200 text-indigo-600 dark:bg-indigo-500/10 dark:border-indigo-500/20 dark:text-indigo-400">
            <span className="text-sm font-semibold dark:font-medium">👋 Hello, I’m</span>
          </div>

          {/* NAME */}
          <div className="space-y-2">
            <h1 className="text-4xl sm:text-5xl lg:text-7xl font-extrabold tracking-tight leading-[1.1] transition-colors duration-700 text-slate-900 dark:text-white">
              Muhammad Agung <br />
              <span className="bg-gradient-to-r from-indigo-600 to-purple-500 dark:from-indigo-400 dark:to-purple-400 bg-clip-text text-transparent">
                Pamungkas
              </span>
            </h1>
          </div>

          {/* ROLE & DESCRIPTION */}
          <div className="space-y-4 max-w-xl mx-auto lg:mx-0">
            <h2 className="text-xl lg:text-2xl font-semibold transition-colors duration-700 text-slate-700 dark:text-slate-200">
              Informatics Student <span className="text-indigo-500 px-2">&bull;</span> 
              <span className="text-indigo-600 dark:text-indigo-400">Web Developer</span>
            </h2>
            <p className="text-base lg:text-lg leading-relaxed font-light transition-colors duration-700 text-slate-600 dark:text-slate-400">
              I design and build modern web applications with a strong focus on 
              <span className="font-medium text-slate-900 dark:text-slate-200"> clean architecture</span>, 
              smooth interactions, and intuitive user experiences.
            </p>
          </div>

          {/* CALL TO ACTION */}
          <div className="flex flex-col sm:flex-row gap-4 pt-4 justify-center lg:justify-start">
            <a
              href="#projects"
              className="px-8 py-4 rounded-2xl bg-indigo-600 text-white font-bold shadow-lg shadow-indigo-500/30 hover:bg-indigo-500 hover:-translate-y-1 transition-all duration-300 text-center"
            >
              View Projects
            </a>

            <a
              href="#contact"
              className="px-8 py-4 rounded-2xl border font-semibold backdrop-blur-sm hover:-translate-y-1 transition-all duration-300 text-center bg-white border-slate-200 text-slate-700 shadow-sm hover:bg-slate-50 dark:bg-white/5 dark:border-white/10 dark:text-white dark:hover:bg-white/10"
            >
              Contact Me
            </a>
          </div>
        </div>
      </div>

      <style jsx>{`
        .animate-float {
          animation: float 5s ease-in-out infinite;
        }
        @keyframes float {
          0%, 100% { transform: translateY(0px); }
          50% { transform: translateY(-20px); }
        }
      `}</style>
    </section>
  );
};

export default Hero;