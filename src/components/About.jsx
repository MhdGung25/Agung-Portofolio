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

/* ===== ANIMATION VARIANTS (Tidak perlu diubah) ===== */
const fadeUp = {
  hidden: { opacity: 0, y: 40 },
  visible: {
    opacity: 1,
    y: 0,
    transition: { duration: 0.6, ease: "easeOut" },
  },
};

const stagger = {
  hidden: {},
  visible: {
    transition: {
      staggerChildren: 0.12,
    },
  },
};

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
      // Mengubah padding vertikal agar konsisten dan membedakan dari Hero
      className="py-20 lg:py-32 bg-slate-100 dark:bg-slate-950"
    >
      <div className="max-w-7xl mx-auto px-6 lg:px-8">
        {/* ===== TITLE & HEADING ===== */}
        <motion.div
          variants={fadeUp}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          className="mb-16 md:mb-20 text-center" // Centering Judul di Mobile
        >
          <h2 className="text-3xl md:text-4xl font-bold text-slate-900 dark:text-white mb-4">
            About Me
          </h2>
          {/* Divider Ungu di tengah */}
          <div className="w-20 h-1 bg-indigo-600 rounded mx-auto" />
        </motion.div>

        {/* ===== CONTENT (GRID) ===== */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-start">
          
          {/* ===== LEFT : ABOUT TEXT & BUTTONS ===== */}
          <motion.div
            variants={fadeUp}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            className="space-y-6" // Menggunakan space-y untuk jarak paragraf yang rapi
          >
            <h3 className="text-2xl font-semibold text-slate-900 dark:text-white">
                Siapa Saya?
            </h3>
            
            <p className="text-slate-600 dark:text-slate-400 leading-relaxed">
              I am an Informatics student who is passionate about web development,
              especially building modern and scalable applications using
              React, Tailwind CSS, and Laravel.
            </p>

            <p className="text-slate-600 dark:text-slate-400 leading-relaxed">
              I enjoy turning complex problems into simple, beautiful,
              and intuitive solutions with clean code and good UI/UX. I am constantly
              learning new technologies to stay current in the fast-paced development landscape.
            </p>

            {/* Tombol dipisahkan di luar space-y agar jaraknya ke paragraf lebih terkontrol */}
            <div className="flex flex-wrap gap-4 pt-4">
              {/* Tombol Contact Me (Primary Style, konsisten dengan Hero) */}
              <a
                href="#contact"
                className="px-6 py-3 bg-indigo-600 text-white font-semibold
                           rounded-lg shadow-md hover:bg-indigo-700 
                           transition transform hover:scale-105"
              >
                Contact Me
              </a>

              {/* Tombol My Projects (Secondary Style, konsisten dengan Hero) */}
              <a
                href="#projects"
                className="px-6 py-3 border-2 border-slate-300 dark:border-slate-700
                           text-slate-700 dark:text-slate-300 font-semibold
                           rounded-lg hover:border-indigo-600 hover:text-indigo-600
                           transition transform hover:scale-105"
              >
                My Projects
              </a>
            </div>
          </motion.div>

          {/* ===== RIGHT : SKILLS GRID ===== */}
          <motion.div
            variants={stagger}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
          >
            <motion.h3
              variants={fadeUp}
              className="text-2xl font-semibold text-slate-900 dark:text-white mb-6"
            >
              Technical Skills
            </motion.h3>

            <div className="grid grid-cols-3 sm:grid-cols-4 lg:grid-cols-3 xl:grid-cols-4 gap-4"> 
              {/* Grid 3-4 kolom agar fleksibel dan padat */}
              {skills.map((skill, index) => {
                const Icon = skill.icon;
                return (
                  <motion.div
                    key={index}
                    variants={fadeUp}
                    whileHover={{ y: -6, scale: 1.05 }}
                    // Mengubah latar belakang dan border agar lebih menonjol
                    className="
                      bg-white dark:bg-slate-800
                      border border-slate-200 dark:border-slate-700
                      rounded-xl px-4 py-6
                      flex flex-col items-center gap-2
                      shadow-lg hover:shadow-indigo-500/10 
                      transition duration-300 cursor-pointer
                    "
                  >
                    {/* Ikon lebih besar */}
                    <Icon className={`text-5xl ${skill.color}`} /> 
                    <span className="text-sm font-medium text-slate-700 dark:text-slate-300 text-center mt-1">
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