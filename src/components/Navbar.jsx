import { useState, useEffect } from "react";
import { FiMoon, FiSun } from "react-icons/fi";
import {
  FiHome,
  FiUser,
  FiFolder,
  FiMail
} from "react-icons/fi";
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

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 20);
    window.addEventListener("scroll", onScroll);
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  return (
    <>
      {/* ================= DESKTOP NAVBAR ================= */}
      <nav className="hidden md:flex fixed top-4 inset-x-0 z-50 justify-center px-4">
        <div
          className={`
            w-full max-w-6xl
            h-16 px-6
            flex items-center justify-between
            rounded-2xl
            backdrop-blur-xl
            border border-white/30 dark:border-slate-700/50
            transition-all duration-500
            ${
              scrolled
                ? "bg-white/80 dark:bg-slate-900/80 shadow-xl"
                : "bg-white/60 dark:bg-slate-900/60 shadow-lg"
            }
          `}
        >
          {/* LOGO */}
          <a
            href="#home"
            className="text-xl font-semibold text-slate-900 dark:text-white"
          >
            Agung<span className="text-indigo-500">.</span>
          </a>

          {/* MENU */}
          <ul className="flex items-center gap-2">
            {menus.map((menu) => {
              const Icon = menu.icon;
              return (
                <li key={menu.name}>
                  <a
                    href={menu.link}
                    className="
                      flex items-center gap-2
                      px-4 py-2
                      rounded-full
                      text-sm font-medium
                      text-slate-700 dark:text-slate-300
                      hover:bg-indigo-500 hover:text-white
                      transition-all duration-300
                      hover:-translate-y-0.5
                    "
                  >
                    <Icon className="text-lg" />
                    {menu.name}
                  </a>
                </li>
              );
            })}
          </ul>

          {/* DARK MODE */}
          <button
            onClick={() => setDarkMode(!darkMode)}
            className="
              w-10 h-10 rounded-full
              flex items-center justify-center
              bg-white/70 dark:bg-slate-800/70
              border border-white/40 dark:border-slate-700
              backdrop-blur
              hover:scale-105 transition
            "
          >
            {darkMode ? (
              <FiMoon className="text-indigo-400" />
            ) : (
              <FiSun className="text-amber-400" />
            )}
          </button>
        </div>
      </nav>

      {/* ================= MOBILE BOTTOM NAVBAR ================= */}
      <nav className="md:hidden fixed bottom-4 inset-x-0 z-50 px-4">
        <div
          className="
            mx-auto max-w-md
            bg-white/80 dark:bg-slate-900/80
            backdrop-blur-xl
            border border-white/30 dark:border-slate-700/50
            rounded-2xl
            shadow-2xl
          "
        >
          <ul className="flex justify-around items-center py-3">
            {menus.map((menu) => {
              const Icon = menu.icon;
              return (
                <li key={menu.name}>
                  <a
                    href={menu.link}
                    className="
                      flex flex-col items-center gap-1
                      text-xs font-medium
                      text-slate-700 dark:text-slate-300
                      hover:text-indigo-500
                      transition
                    "
                  >
                    <span
                      className="
                        w-10 h-10
                        flex items-center justify-center
                        rounded-full
                        bg-white/60 dark:bg-slate-800/60
                        shadow-md
                      "
                    >
                      <Icon className="text-lg" />
                    </span>
                    {menu.name}
                  </a>
                </li>
              );
            })}
          </ul>
        </div>
      </nav>
    </>
  );
};

export default Navbar;
