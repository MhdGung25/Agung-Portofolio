import { motion } from "framer-motion";
import { FiExternalLink, FiGithub } from "react-icons/fi";

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
    title: "Ebook Blockchain Marketplace",
    description:
      "A decentralized marketplace for buying and selling ebooks using blockchain technology.",
    tech: ["React", "Metamask", "Tailwind CSS"],
    image: "/projects/Ebook-blockhain.jpg",
    demo: "https://sastradesentral.netlify.app/",
    github: "https://github.com/MhdGung25/Sastra-Desentral.git",
  },
  {
    title: "Digital Notes",
    description:
      "A web application for creating, organizing, and managing digital notes with user authentication.",
    tech: ["React", "Tailwind CSS", "JavaScript", "Firebase"],
    image: "/projects/digital-notes.jpg",
    demo: "https://rect-firebase.netlify.app/",
    github: "https://github.com/MhdGung25/rect-firebase.git",
  },
];

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

export default function Projects() {
  return (
    <section
      id="projects"
      className="py-20 md:py-28 bg-slate-50 dark:bg-slate-900 transition-colors"
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">

        {/* TITLE */}
        <motion.div
          variants={fadeUp}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          className="mb-14 text-center lg:text-left"
        >
          <h2 className="text-3xl sm:text-4xl font-black text-slate-900 dark:text-slate-100 mb-4">
            Featured Projects
          </h2>
          <div className="w-20 h-1.5 bg-gradient-to-r from-indigo-500 to-blue-500 rounded mx-auto lg:mx-0" />
        </motion.div>

        {/* GRID */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 md:gap-8">
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
                group flex flex-col overflow-hidden rounded-2xl
                bg-white dark:bg-slate-800
                border border-slate-200 dark:border-slate-700
                shadow-md dark:shadow-none
                hover:shadow-2xl hover:shadow-indigo-500/20
                dark:hover:shadow-indigo-400/10
                transition-all duration-500
              "
            >
              {/* IMAGE */}
              <div className="relative aspect-[16/10] overflow-hidden">
                <img
                  src={project.image}
                  alt={project.title}
                  className="
                    w-full h-full object-cover
                    transition-transform duration-700
                    group-hover:scale-110
                  "
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/30 to-transparent opacity-0 group-hover:opacity-100 transition" />
              </div>

              {/* CONTENT */}
              <div className="p-5 flex flex-col flex-1">
                <h3 className="text-lg font-bold text-slate-900 dark:text-slate-100 mb-2">
                  {project.title}
                </h3>

                <p className="text-sm text-slate-600 dark:text-slate-400 leading-relaxed mb-4 line-clamp-3">
                  {project.description}
                </p>

                {/* TECH */}
                <div className="flex flex-wrap gap-2 mb-6">
                  {project.tech.map((item, i) => (
                    <span
                      key={i}
                      className="
                        text-[11px] px-3 py-1 rounded-full font-semibold
                        bg-indigo-500/10 text-indigo-600
                        dark:bg-indigo-400/10 dark:text-indigo-300
                        border border-indigo-500/20
                      "
                    >
                      {item}
                    </span>
                  ))}
                </div>

                {/* ACTIONS */}
                <div className="mt-auto flex flex-col sm:flex-row gap-3">
                  {project.demo && (
                    <a
                      href={project.demo}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="
                        inline-flex items-center justify-center gap-2
                        px-4 py-2 rounded-xl
                        text-sm font-semibold
                        bg-indigo-600 text-white
                        hover:bg-indigo-500
                        shadow-lg shadow-indigo-500/30
                        transition
                      "
                    >
                      <FiExternalLink className="text-base" />
                      Live Demo
                    </a>
                  )}

                  <a
                    href={project.github}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="
                      inline-flex items-center justify-center gap-2
                      px-4 py-2 rounded-xl
                      text-sm font-semibold
                      border border-slate-300 dark:border-slate-600
                      text-slate-700 dark:text-slate-300
                      hover:border-indigo-500 hover:text-indigo-500
                      dark:hover:border-indigo-400 dark:hover:text-indigo-400
                      transition
                    "
                  >
                    <FiGithub className="text-base" />
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
}
