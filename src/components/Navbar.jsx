import { useState, useEffect } from "react";
import { FiMenu, FiX, FiMoon, FiSun } from "react-icons/fi";
import useDarkMode from "../hooks/useDarkMode";

const menus = [
  { name: "Home", link: "#home" },
  { name: "About", link: "#about" },
  { name: "Projects", link: "#projects" },
  { name: "Contact", link: "#contact" },
];

const Navbar = () => {
  const [darkMode, setDarkMode] = useDarkMode();
  const [menuOpen, setMenuOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => setScrolled(window.scrollY > 10);
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <nav
      className={`
        fixed top-0 inset-x-0 z-50
        backdrop-blur-md
        transition-all duration-300
        ${scrolled ? "h-16 shadow-md" : "h-20"}
        bg-white/80 dark:bg-slate-900/80
        border-b border-slate-200/60 dark:border-slate-700/60
      `}
    >
      {/* ===== MAIN BAR ===== */}
      <div className="h-full max-w-7xl mx-auto px-6 lg:px-8 flex items-center justify-between">

        {/* LOGO */}
        <a
          href="#home"
          className="text-xl sm:text-2xl font-bold text-slate-900 dark:text-slate-100"
        >
          Agung<span className="text-indigo-600 dark:text-indigo-400">.</span>
        </a>

        {/* DESKTOP MENU */}
        <ul className="hidden md:flex gap-10 text-sm font-medium">
          {menus.map((menu) => (
            <li key={menu.name}>
              <a
                href={menu.link}
                className="
                  relative group
                  text-slate-600 dark:text-slate-300
                  hover:text-slate-900 dark:hover:text-white
                  transition
                "
              >
                {menu.name}
                <span
                  className="
                    absolute left-0 -bottom-1
                    w-0 h-[2px]
                    bg-indigo-500
                    transition-all duration-300
                    group-hover:w-full
                  "
                />
              </a>
            </li>
          ))}
        </ul>

        {/* ACTIONS */}
        <div className="flex items-center gap-3">

          {/* DARK MODE */}
          <button
            onClick={() => setDarkMode(!darkMode)}
            className="
              w-11 h-11 rounded-full
              flex items-center justify-center
              bg-slate-100 dark:bg-slate-800
              border border-slate-300 dark:border-slate-600
              transition
            "
            aria-label="Toggle dark mode"
          >
            {darkMode ? (
              <FiMoon className="text-indigo-400 text-lg" />
            ) : (
              <FiSun className="text-amber-400 text-lg" />
            )}
          </button>

          {/* MOBILE MENU TOGGLE */}
          <button
            onClick={() => setMenuOpen(!menuOpen)}
            className="
              md:hidden w-11 h-11 rounded-full
              flex items-center justify-center
              bg-slate-100 dark:bg-slate-800
              border border-slate-300 dark:border-slate-600
              transition
            "
            aria-label="Toggle menu"
          >
            {menuOpen ? (
              <FiX className="text-xl text-slate-800 dark:text-slate-100" />
            ) : (
              <FiMenu className="text-xl text-slate-800 dark:text-slate-100" />
            )}
          </button>
        </div>
      </div>

      {/* ===== MOBILE MENU PANEL ===== */}
      <div
        className={`
          md:hidden
          absolute top-full inset-x-0
          bg-white dark:bg-slate-900
          border-t border-slate-200 dark:border-slate-700
          transition-all duration-300
          ${menuOpen ? "opacity-100 translate-y-0" : "opacity-0 -translate-y-3 pointer-events-none"}
        `}
      >
        <ul className="flex flex-col items-center py-8 gap-6">
          {menus.map((menu) => (
            <li key={menu.name}>
              <a
                href={menu.link}
                onClick={() => setMenuOpen(false)}
                className="
                  text-lg font-semibold
                  text-slate-700 dark:text-slate-300
                  hover:text-indigo-600 dark:hover:text-indigo-400
                  transition
                "
              >
                {menu.name}
              </a>
            </li>
          ))}
        </ul>
      </div>
    </nav>
  );
};

export default Navbar;
