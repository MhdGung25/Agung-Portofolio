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
    demo: "https://sastra-desentral.vercel.app/",
    github: "https://github.com/MhdGung25/Sastra-Desentral.git",
  },
  {
    title: "Catatan Digital",
    description:
      "A web application for creating, organizing, and managing digital notes with user authentication.",
    tech: ["React", "Tailwind CSS", "Firebase"],
    image: "/projects/Catatan-Digital.jpg",
    demo: "https://rect-firebase.vercel.app/",
    github: "https://github.com/MhdGung25/rect-firebase.git",
  },
  {
    title: "Warung Digital",
    description:
      "A simple and responsive web application for recording daily income and expenses of small businesses (warung). Built to help UMKM manage finances efficiently.",
    tech: ["React", "JavaScript", "Tailwind CSS", "Firebase"],
    image: "/projects/Warung-Digital.jpg",
    demo: "https://catatan-warung.vercel.app/",
    github: "https://github.com/MhdGung25/catatan-warung.git",
  },
];

const fadeUp = {
  hidden: { opacity: 0, y: 30 },
  visible: (i = 1) => ({
    opacity: 1,
    y: 0,
    transition: { delay: i * 0.1, duration: 0.5, ease: "easeOut" },
  }),
};

export default function Projects() {
  return (
    <section
      id="projects"
      className="py-20 bg-gradient-to-b from-slate-50 to-slate-100 dark:from-slate-900 dark:to-slate-950"
    >
      <div className="max-w-7xl mx-auto px-5">
        
        {/* TITLE */}
        <motion.div
          variants={fadeUp}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          className="mb-16 text-center"
        >
          <h2 className="text-3xl md:text-4xl font-black text-slate-900 dark:text-white mb-4">
            Selected Projects
          </h2>
          <div className="w-16 h-1 bg-indigo-500 mx-auto mb-6 rounded-full"></div>
          <p className="text-slate-600 dark:text-slate-400 max-w-xl mx-auto text-sm md:text-base">
            Crafted with clean architecture, smooth interactions, and modern UI principles.
          </p>
        </motion.div>

        {/* GRID */}
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
                relative group rounded-[2rem] flex flex-col h-full
                bg-white dark:bg-slate-900
                border border-slate-200 dark:border-slate-800
                shadow-xl shadow-slate-200/50 dark:shadow-none
                overflow-hidden transition-all duration-300
              "
            >
              {/* IMAGE CONTAINER - PERBAIKAN UTAMA DISINI */}
              <div className="relative p-3">
                <div className="
                  relative overflow-hidden rounded-2xl
                  bg-slate-100 dark:bg-slate-800
                  aspect-[16/10] md:aspect-video
                  ring-1 ring-slate-200 dark:ring-slate-700
                ">
                  <img
                    src={project.image}
                    alt={project.title}
                    className="
                      w-full h-full 
                      object-contain md:object-cover 
                      group-hover:scale-105 transition-transform duration-500
                    "
                  />
                  {/* Overlay shadow untuk memperjelas gambar */}
                  <div className="absolute inset-0 bg-black/5 group-hover:bg-transparent transition-colors" />
                </div>
              </div>

              {/* CONTENT */}
              <div className="flex flex-col flex-1 p-6 pt-2">
                <h3 className="text-lg font-bold text-slate-900 dark:text-white mb-2 group-hover:text-indigo-500 transition-colors">
                  {project.title}
                </h3>

                <p className="text-sm text-slate-600 dark:text-slate-400 leading-relaxed mb-5 line-clamp-3">
                  {project.description}
                </p>

                {/* TECH TAGS */}
                <div className="flex flex-wrap gap-1.5 mb-6">
                  {project.tech.map((item, i) => (
                    <span
                      key={i}
                      className="
                        px-2.5 py-1 text-[10px] font-bold uppercase tracking-wider rounded-md
                        bg-slate-100 dark:bg-slate-800
                        text-slate-600 dark:text-slate-400
                        border border-slate-200 dark:border-slate-700
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
                        px-4 py-2.5 rounded-xl
                        text-xs font-bold uppercase tracking-widest text-white
                        bg-indigo-600 hover:bg-indigo-700
                        shadow-lg shadow-indigo-500/30
                        active:scale-95 transition-all
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
                      px-4 py-2.5 rounded-xl
                      text-xs font-bold uppercase tracking-widest
                      bg-slate-100 dark:bg-slate-800
                      text-slate-800 dark:text-slate-200
                      border border-slate-200 dark:border-slate-700
                      hover:bg-slate-200 dark:hover:bg-slate-700
                      active:scale-95 transition-all
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