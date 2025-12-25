import { motion } from "framer-motion";
import { FiExternalLink, FiGithub } from "react-icons/fi";

/* ===== DATA PROJECT (Disempurnakan) ===== */
const projects = [
  {
    title: "Library Management System",
    description:
      "Web-based library system with book management, borrowing, returning, and admin approval using Laravel backend.",
    tech: ["Laravel", "MySQL", "Tailwind CSS"], 
    image: "/projects/library.jpg",
    github: "https://github.com/username/library-system",
  },
  {
    title: "Catatan Warung App",
    description:
      "Flutter application for recording daily income and expenses with local storage and clean UI.",
    tech: ["Flutter", "Dart", "Hive"],
    image: "/projects/catatan-warung.jpg",
    github: "https://github.com/MhdGung25/Backend-Catatan-Warung-.git",
    
  },
  {
    title: "Portfolio Website",
    description:
      "Personal portfolio website built with React and Tailwind CSS to showcase projects and skills.",
    tech: ["React", "Tailwind CSS", "JavaScript"], 
    image: "/projects/portfolio.jpg",
    demo: "https://muhammadagungportofolio.netlify.app/",
    github: "https://github.com/MhdGung25/laravel-portfolio.git",
  },
];

/* ===== ANIMATION (Tidak perlu diubah, sudah bagus) ===== */
const fadeUp = {
  hidden: { opacity: 0, y: 40 },
  visible: (i = 1) => ({
    opacity: 1,
    y: 0,
    transition: {
      delay: i * 0.12,
      duration: 0.6,
      ease: "easeOut",
    },
  }),
};

const Projects = () => {
  return (
    <section
      id="projects"
     
      className="py-20 lg:py-32 bg-slate-100 dark:bg-slate-950"
    >
      <div className="max-w-7xl mx-auto px-6 lg:px-8">

        {/* ===== TITLE ===== */}
        <motion.div
          variants={fadeUp}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          
          className="mb-16 md:mb-20 text-center lg:text-left" 
        >
          <h2 className="text-3xl md:text-4xl font-bold text-slate-900 dark:text-white mb-4">
            Featured Projects
          </h2>
          {/* Divider Ungu konsisten */}
          <div className="w-20 h-1 bg-indigo-600 rounded mx-auto lg:mx-0" />
        </motion.div>

        {/* ===== GRID PROYEK ===== */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
          {projects.map((project, index) => (
            <motion.div
              key={index}
              custom={index}
              variants={fadeUp}
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true }}
              whileHover={{ y: -8 }} 
              className="
                bg-white dark:bg-slate-900
                border border-slate-200 dark:border-slate-800
                rounded-xl overflow-hidden
                transition duration-300
                shadow-xl hover:shadow-indigo-500/20 /* Shadow dan hover yang lebih menarik */
              "
            >
              {/* IMAGE */}
              <div className="overflow-hidden">
                <img
                  src={project.image}
                  alt={project.title}
                  className="
                    w-full h-52 object-cover /* Tinggi gambar sedikit ditambah (h-48 -> h-52) */
                    hover:scale-105 transition duration-500
                  "
                />
              </div>

              {/* CONTENT */}
              <div className="p-6">
                <h3 className="text-2xl font-semibold text-slate-900 dark:text-white mb-3 text-center sm:text-left">
                  {project.title}
                </h3>

                <p className="text-base leading-relaxed mb-5 text-slate-600 dark:text-slate-400 text-center sm:text-left">
                  {project.description}
                </p>

                {/* TECH STACK */}
                <div className="flex flex-wrap gap-2 mb-6 justify-center sm:justify-start">
                  {project.tech.map((item, i) => (
                    <span
                      key={i}
                      className="
                        text-xs px-3 py-1 rounded-full font-medium
                        bg-indigo-600/10 text-indigo-700
                        dark:bg-indigo-500/20 dark:text-indigo-400
                        border border-indigo-600/30 dark:border-indigo-500/30
                        whitespace-nowrap /* Mencegah badge terpotong */
                      "
                    >
                      {item}
                    </span>
                  ))}
                </div>

                {/* ACTION BUTTONS */}
                <div className="flex gap-4 justify-center sm:justify-start">
                  
                  {/* LIVE DEMO (Hanya muncul jika ada link demo) */}
                  {project.demo && (
                    <a
                      href={project.demo}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="
                        flex items-center gap-2
                        text-sm font-semibold
                        px-4 py-2 rounded-lg
                        bg-indigo-600 text-white
                        hover:bg-indigo-500
                        transition transform hover:scale-[1.03]
                      "
                    >
                      <FiExternalLink />
                      Live Demo
                    </a>
                  )}

                  {/* GITHUB */}
                  <a
                    href={project.github}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="
                      flex items-center gap-2
                      text-sm font-semibold
                      px-4 py-2 rounded-lg
                      border-2 border-slate-300 dark:border-slate-700
                      text-slate-700 dark:text-slate-300
                      hover:border-indigo-600 hover:text-indigo-600
                      transition transform hover:scale-[1.03]
                    "
                  >
                    <FiGithub />
                    GitHub
                  </a>
                </div>
              </div>
            </motion.div>
          ))}
        </div>

      </div>
    </section>
  );
};

export default Projects;