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
    tech: ["React", "Tailwind CSS", "Firebase"],
    image: "/projects/digital-notes.jpg",
    demo: "https://rect-firebase.netlify.app/",
    github: "https://github.com/MhdGung25/rect-firebase.git",
  },
  {
    title: "Catatan Warung",
    description:
      ".",
    tech: ["React" ,"js", "Tailwind CSS", "Firebase"],
    image: "/projects/catatan-warung.jpg",
    demo: "https://catatan-warung.netlify.app/",
    github: "https://github.com/MhdGung25/catatan-warung.git",
  },
];

const fadeUp = {
  hidden: { opacity: 0, y: 40 },
  visible: (i = 1) => ({
    opacity: 1,
    y: 0,
    transition: { delay: i * 0.12, duration: 0.6, ease: "easeOut" },
  }),
};

export default function Projects() {
  return (
    <section
      id="projects"
      className="py-24 bg-gradient-to-b from-slate-50 to-slate-100 dark:from-slate-900 dark:to-slate-950"
    >
      <div className="max-w-7xl mx-auto px-6">

        {/* TITLE */}
        <motion.div
          variants={fadeUp}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          className="mb-20 text-center"
        >
          <h2 className="text-4xl font-black text-slate-900 dark:text-white mb-4">
            Selected Projects
          </h2>
          <p className="text-slate-600 dark:text-slate-400 max-w-xl mx-auto">
            Crafted with clean architecture, smooth interactions, and modern UI principles.
          </p>
        </motion.div>

        {/* GRID */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-10">
          {projects.map((project, index) => (
            <motion.div
              key={index}
              custom={index}
              variants={fadeUp}
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true }}
              whileHover={{ y: -10 }}
              className="
                relative group rounded-3xl
                bg-white/60 dark:bg-slate-900/60
                backdrop-blur-xl
                border border-white/30 dark:border-slate-700/40
                shadow-[0_20px_60px_rgba(0,0,0,0.12)]
                dark:shadow-[0_20px_60px_rgba(99,102,241,0.15)]
                transition-all duration-500
              "
            >
              {/* GLOW */}
              <div className="
                absolute -inset-0.5 rounded-3xl
                bg-gradient-to-r from-indigo-500/30 to-blue-500/30
                opacity-0 group-hover:opacity-100
                blur-xl transition
              " />

              {/* CONTENT */}
              <div className="relative p-6 flex flex-col h-full">

                {/* IMAGE */}
                <div className="relative mb-6">
                  <div className="
                    rounded-2xl overflow-hidden
                    ring-1 ring-white/30
                    shadow-lg
                  ">
                    <img
                      src={project.image}
                      alt={project.title}
                      className="
                        w-full aspect-[16/10] object-cover
                        transition-transform duration-700
                        group-hover:scale-105
                      "
                    />
                  </div>
                </div>

                {/* TEXT */}
                <h3 className="text-xl font-bold text-slate-900 dark:text-white mb-2">
                  {project.title}
                </h3>

                <p className="text-sm text-slate-600 dark:text-slate-400 leading-relaxed mb-5">
                  {project.description}
                </p>

                {/* TECH */}
                <div className="flex flex-wrap gap-2 mb-6">
                  {project.tech.map((item, i) => (
                    <span
                      key={i}
                      className="
                        px-3 py-1 text-[11px] font-semibold rounded-full
                        bg-white/70 dark:bg-slate-800/70
                        border border-white/40 dark:border-slate-700
                        text-slate-700 dark:text-slate-300
                      "
                    >
                      {item}
                    </span>
                  ))}
                </div>

                {/* ACTIONS */}
                <div className="mt-auto flex gap-3">
                  {project.demo && (
                    <a
                      href={project.demo}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="
                        flex-1 inline-flex items-center justify-center gap-2
                        px-4 py-2 rounded-xl
                        text-sm font-semibold text-white
                        bg-gradient-to-r from-indigo-500 to-blue-500
                        shadow-lg shadow-indigo-500/40
                        hover:scale-[1.03] transition
                      "
                    >
                      <FiExternalLink />
                      Live
                    </a>
                  )}

                  <a
                    href={project.github}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="
                      flex-1 inline-flex items-center justify-center gap-2
                      px-4 py-2 rounded-xl
                      text-sm font-semibold
                      bg-white/60 dark:bg-slate-800/60
                      border border-white/40 dark:border-slate-700
                      text-slate-800 dark:text-slate-300
                      hover:text-indigo-500
                      transition
                    "
                  >
                    <FiGithub />
                    Code
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
