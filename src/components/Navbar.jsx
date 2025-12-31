import { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { FiMoon, FiSun, FiHome, FiUser, FiFolder, FiMail } from "react-icons/fi";
import useDarkMode from "../hooks/useDarkMode";

const menus = [
  { name: "Home", link: "#home", icon: FiHome },
  { name: "About", link: "#about", icon: FiUser },
  { name: "Projects", link: "#projects", icon: FiFolder },
  { name: "Contact", link: "#contact", icon: FiMail },
];

const Navbar = () => {
  const [darkMode, setDarkMode] = useDarkMode();
  const [scrolled, setScrolled] = useState(false);
  const [activeSection, setActiveSection] = useState("Home");

  // 1. Logika Scroll Handling
  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 20);

      // Logika deteksi section aktif untuk indikator navbar
      const sections = menus.map(m => m.name.toLowerCase());
      for (const section of sections) {
        const element = document.getElementById(section);
        if (element) {
          const rect = element.getBoundingClientRect();
          if (rect.top >= 0 && rect.top <= 300) {
            setActiveSection(section.charAt(0).toUpperCase() + section.slice(1));
          }
        }
      }
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <>
      {/* ================= DESKTOP NAVBAR ================= */}
      <motion.nav 
        initial={{ y: -100, opacity: 0 }}
        animate={{ y: 0, opacity: 1 }}
        className="hidden md:flex fixed top-6 inset-x-0 z-50 justify-center px-4"
      >
        <div
          className={`
            relative w-full max-w-5xl h-16 px-8
            flex items-center justify-between
            rounded-2xl transition-all duration-500
            backdrop-blur-xl border
            ${
              scrolled
                ? "bg-white/70 dark:bg-slate-900/70 border-white/40 dark:border-slate-700/50 shadow-[0_8px_32px_rgba(0,0,0,0.12)]"
                : "bg-transparent border-transparent"
            }
          `}
        >
          {/* LOGO */}
          <a
            href="#home"
            className="group flex items-center gap-1 text-xl font-black tracking-tighter text-slate-900 dark:text-white"
          >
            <span className="group-hover:text-indigo-500 transition-colors">AGUNG</span>
            <span className="text-indigo-500 group-hover:animate-bounce">.</span>
          </a>

          {/* MENU BOX */}
          <div className="flex items-center gap-6">
            <ul className="flex items-center bg-slate-200/50 dark:bg-slate-800/50 p-1.5 rounded-xl border border-white/20 dark:border-slate-700/30">
              {menus.map((menu) => {
                const Icon = menu.icon;
                const isActive = activeSection === menu.name;
                return (
                  <li key={menu.name} className="relative">
                    <a
                      href={menu.link}
                      className={`
                        relative z-10 flex items-center gap-2 px-5 py-2
                        text-sm font-bold transition-all duration-300 rounded-lg
                        ${isActive 
                          ? "text-white" 
                          : "text-slate-600 dark:text-slate-400 hover:text-slate-900 dark:hover:text-white"}
                      `}
                      onClick={() => setActiveSection(menu.name)}
                    >
                      <Icon className={`text-lg ${isActive ? "scale-110" : ""}`} />
                      {menu.name}
                      
                      {/* Active Indicator Background */}
                      {isActive && (
                        <motion.div 
                          layoutId="activeTab"
                          className="absolute inset-0 bg-indigo-600 rounded-lg -z-10 shadow-lg shadow-indigo-500/40"
                          transition={{ type: "spring", stiffness: 380, damping: 30 }}
                        />
                      )}
                    </a>
                  </li>
                );
              })}
            </ul>

            {/* DARK MODE TOGGLE */}
            <button
              onClick={() => setDarkMode(!darkMode)}
              className="
                w-10 h-10 rounded-xl
                flex items-center justify-center
                bg-white dark:bg-slate-800
                border border-slate-200 dark:border-slate-700
                shadow-sm hover:shadow-md hover:-translate-y-0.5
                active:scale-95 transition-all
              "
            >
              <AnimatePresence mode="wait">
                {darkMode ? (
                  <motion.div
                    key="moon"
                    initial={{ rotate: -45, opacity: 0 }}
                    animate={{ rotate: 0, opacity: 1 }}
                    exit={{ rotate: 45, opacity: 0 }}
                  >
                    <FiMoon className="text-indigo-400 text-xl" />
                  </motion.div>
                ) : (
                  <motion.div
                    key="sun"
                    initial={{ rotate: -45, opacity: 0 }}
                    animate={{ rotate: 0, opacity: 1 }}
                    exit={{ rotate: 45, opacity: 0 }}
                  >
                    <FiSun className="text-amber-500 text-xl" />
                  </motion.div>
                )}
              </AnimatePresence>
            </button>
          </div>
        </div>
      </motion.nav>

      {/* ================= MOBILE BOTTOM NAVBAR ================= */}
      <motion.nav 
        initial={{ y: 100 }}
        animate={{ y: 0 }}
        className="md:hidden fixed bottom-6 inset-x-0 z-50 px-6"
      >
        <div
          className="
            mx-auto max-w-md h-20
            bg-white/80 dark:bg-slate-900/90
            backdrop-blur-2xl
            border border-white/40 dark:border-slate-700/50
            rounded-[24px]
            shadow-[0_-10px_40px_rgba(0,0,0,0.1)]
            flex items-center justify-around px-2
          "
        >
          {menus.map((menu) => {
            const Icon = menu.icon;
            const isActive = activeSection === menu.name;
            return (
              <a
                key={menu.name}
                href={menu.link}
                onClick={() => setActiveSection(menu.name)}
                className="relative flex flex-col items-center justify-center w-16 h-full"
              >
                {/* Active Glow Effect for Mobile */}
                {isActive && (
                  <motion.span 
                    layoutId="mobileActive"
                    className="absolute top-0 w-8 h-1 bg-indigo-500 rounded-full"
                  />
                )}
                
                <div className={`
                  flex flex-col items-center gap-1 transition-all duration-300
                  ${isActive ? "text-indigo-600 dark:text-indigo-400 scale-110" : "text-slate-400"}
                `}>
                  <div className={`
                    p-2 rounded-2xl transition-colors
                    ${isActive ? "bg-indigo-50 dark:bg-indigo-500/10" : "bg-transparent"}
                  `}>
                    <Icon className="text-2xl" />
                  </div>
                  <span className="text-[10px] font-bold uppercase tracking-tighter">
                    {menu.name}
                  </span>
                </div>
              </a>
            );
          })}
          
          {/* Floating Action Button for Dark Mode on Mobile */}
          <div className="w-[1px] h-8 bg-slate-200 dark:bg-slate-700 mx-1" />
          
          <button
            onClick={() => setDarkMode(!darkMode)}
            className="w-12 h-12 flex items-center justify-center rounded-2xl bg-indigo-600 shadow-lg shadow-indigo-500/40"
          >
            {darkMode ? <FiMoon className="text-white" /> : <FiSun className="text-white" />}
          </button>
        </div>
      </motion.nav>
    </>
  );
};

export default Navbar;