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
      className="py-20 lg:py-32 bg-slate-100 dark:bg-slate-950"
    >
      <div className="max-w-7xl mx-auto px-6 lg:px-8">

        {/* ===== TITLE ===== */}
        <div className="mb-14 text-center animate-fadeInUp">
          <h2 className="text-2xl sm:text-3xl md:text-4xl font-bold text-slate-900 dark:text-white mb-3">
            About Me
          </h2>
          <div className="w-16 h-1 bg-indigo-600 rounded mx-auto" />
        </div>

        {/* ===== CONTENT ===== */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-14 lg:gap-20 items-start">

          {/* ===== LEFT ===== */}
          <div className="space-y-5 text-center lg:text-left animate-fadeInUp [animation-delay:0.2s]">
            <h3 className="text-xl sm:text-2xl font-semibold text-slate-900 dark:text-white">
              Siapa Saya?
            </h3>

            <p className="text-sm sm:text-base text-slate-600 dark:text-slate-400 leading-relaxed max-w-md mx-auto lg:mx-0">
              I am an Informatics student who is passionate about web development,
              especially building modern and scalable applications using
              React, Tailwind CSS, and Laravel.
            </p>

            <p className="text-sm sm:text-base text-slate-600 dark:text-slate-400 leading-relaxed max-w-md mx-auto lg:mx-0">
              I enjoy turning complex problems into simple, beautiful,
              and intuitive solutions with clean code and good UI/UX.
            </p>

            {/* BUTTONS */}
            <div className="flex flex-col sm:flex-row gap-4 pt-4 justify-center lg:justify-start">
              <a
                href="#contact"
                className="
                  w-full sm:w-auto
                  px-6 py-3
                  bg-indigo-600 text-white font-semibold
                  rounded-lg shadow-md
                  hover:bg-indigo-700
                  transition
                "
              >
                Contact Me
              </a>

              <a
                href="#projects"
                className="
                  w-full sm:w-auto
                  px-6 py-3
                  border-2 border-slate-300 dark:border-slate-700
                  text-slate-700 dark:text-slate-300 font-semibold
                  rounded-lg
                  hover:border-indigo-600 hover:text-indigo-600
                  transition
                "
              >
                My Projects
              </a>
            </div>
          </div>

          {/* ===== RIGHT : SKILLS ===== */}
          <div className="animate-fadeInUp [animation-delay:0.4s]">
            <h3 className="text-xl sm:text-2xl font-semibold text-slate-900 dark:text-white mb-5 text-center lg:text-left">
              Technical Skills
            </h3>

            <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 gap-4">
              {skills.map((skill, index) => {
                const Icon = skill.icon;
                return (
                  <div
                    key={index}
                    className="
                      bg-white dark:bg-slate-800
                      border border-slate-200 dark:border-slate-700
                      rounded-xl px-3 py-5
                      flex flex-col items-center gap-2
                      shadow-sm
                      hover:shadow-indigo-500/10
                      transition
                    "
                  >
                    <Icon className={`text-4xl ${skill.color}`} />
                    <span className="text-xs sm:text-sm font-medium text-slate-700 dark:text-slate-300">
                      {skill.name}
                    </span>
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
