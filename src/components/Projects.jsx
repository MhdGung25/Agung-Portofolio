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
    title: "Portfolio Website",
    description:
      "Personal portfolio website built with React and Tailwind CSS to showcase projects and skills.",
    tech: ["React", "Tailwind CSS", "JavaScript"],
    image: "/projects/portfolio.jpg",
    demo: "https://muhammadagungportofolio.netlify.app/",
    github: "https://github.com/MhdGung25/laravel-portfolio.git",
  },
];

const fadeUp = {
  hidden: { opacity: 0, y: 30 },
  visible: (i = 1) => ({
    opacity: 1,
    y: 0,
    transition: {
      delay: i * 0.1,
      duration: 0.5,
      ease: "easeOut",
    },
  }),
};

const Projects = () => {
  return (
    <section
      id="projects"
      className="py-16 md:py-24 bg-slate-50 dark:bg-slate-900"
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">

        {/* TITLE */}
        <motion.div
          variants={fadeUp}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          className="mb-12 md:mb-16 text-center lg:text-left"
        >
          <h2 className="text-2xl sm:text-3xl md:text-4xl font-bold text-slate-900 dark:text-slate-100 mb-3">
            Featured Projects
          </h2>
          <div className="w-16 h-1 bg-indigo-500 rounded mx-auto lg:mx-0" />
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
              className="
                bg-white dark:bg-slate-800
                border border-slate-200 dark:border-slate-700
                rounded-xl overflow-hidden
                shadow-sm hover:shadow-lg
                transition
                flex flex-col
              "
            >
              {/* IMAGE */}
              <div className="aspect-[16/10] overflow-hidden">
                <img
                  src={project.image}
                  alt={project.title}
                  className="w-full h-full object-cover hover:scale-105 transition-transform duration-500"
                />
              </div>

              {/* CONTENT */}
              <div className="p-4 sm:p-5 flex flex-col flex-1">
                <h3 className="text-lg font-semibold text-slate-900 dark:text-slate-100 mb-2">
                  {project.title}
                </h3>

                <p className="text-sm text-slate-600 dark:text-slate-400 leading-relaxed mb-4 line-clamp-3">
                  {project.description}
                </p>

                {/* TECH */}
                <div className="flex flex-wrap gap-2 mb-5">
                  {project.tech.map((item, i) => (
                    <span
                      key={i}
                      className="
                        text-[11px] px-2.5 py-1 rounded-full font-medium
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
                        text-sm font-medium
                        px-4 py-2 rounded-lg
                        bg-indigo-500 text-white
                        hover:bg-indigo-400
                        transition
                      "
                    >
                      <FiExternalLink />
                      Live Demo
                    </a>
                  )}

                  <a
                    href={project.github}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="
                      inline-flex items-center justify-center gap-2
                      text-sm font-medium
                      px-4 py-2 rounded-lg
                      border border-slate-300 dark:border-slate-600
                      text-slate-700 dark:text-slate-300
                      hover:border-indigo-500 hover:text-indigo-500
                      transition
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
