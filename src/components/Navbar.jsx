import { useState, useEffect } from "react";
import { FiMenu, FiX, FiMoon, FiSun } from "react-icons/fi";
// Import useDarkMode dari path yang benar
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

  /* ===== SCROLL EFFECT ===== */
  useEffect(() => {
    const handleScroll = () => setScrolled(window.scrollY > 20);
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  // Fungsi untuk menutup menu saat item dipilih (hanya untuk mobile)
  const handleLinkClick = () => {
    setMenuOpen(false);
  };

  return (
    <nav
      className={`
        fixed top-0 left-0 w-full z-50
        transition-all duration-300
        ${scrolled ? "py-3 shadow-xl" : "py-5"} /* Mengubah padding saat scroll */
        bg-white/90 dark:bg-slate-950/90 /* Latar belakang lebih gelap di dark mode */
        backdrop-blur-sm
        border-b border-slate-200 dark:border-slate-800
      `}
    >
      <div className="max-w-7xl mx-auto px-6 lg:px-8 flex items-center justify-between">
        
        {/* ===== LOGO ===== */}
        <a
          href="#home"
          className="
            text-2xl font-extrabold tracking-tight
            text-slate-900 dark:text-white
            drop-shadow-sm
            dark:drop-shadow-[0_2px_10px_rgba(99,102,241,0.45)]
            hover:scale-[1.03]
            transition duration-300
          "
        >
          MyPortfolio
          <span
            className="
              text-indigo-600 dark:text-indigo-400
              drop-shadow-[0_2px_6px_rgba(99,102,241,0.6)]
            "
          >
            
          </span>
        </a>

        {/* ===== DESKTOP MENU (Link-link Navigasi) ===== */}
        <ul className="hidden md:flex gap-10 text-sm font-medium text-slate-600 dark:text-slate-300">
          {menus.map((menu) => (
            <li key={menu.name}>
              <a
                href={menu.link}
                className="
                  relative group
                  py-1 /* Menambahkan padding y untuk area klik yang lebih baik */
                  text-base /* Mengubah ukuran teks dari sm ke base */
                  hover:text-slate-900 dark:hover:text-white
                  transition
                "
              >
                {menu.name}
                {/* Underline Hover Effect */}
                <span
                  className="
                    absolute left-0 -bottom-0.5 /* Posisi underline lebih rendah */
                    w-0 h-0.5 bg-indigo-600 dark:bg-indigo-400
                    transition-all duration-300
                    group-hover:w-full
                  "
                />
              </a>
            </li>
          ))}
        </ul>

        {/* ===== RIGHT ACTION (Dark Mode & Hamburger) ===== */}
        <div className="flex items-center gap-3">

          {/* DARK MODE TOGGLE */}
          <button
            onClick={() => setDarkMode(!darkMode)}
            className="
              w-10 h-10 flex items-center justify-center
              rounded-full border
              border-slate-300 dark:border-slate-700
              bg-white dark:bg-slate-800 /* Warna background default */
              hover:bg-slate-100 dark:hover:bg-slate-700
              transition transform hover:scale-105
            "
            aria-label="Toggle dark mode"
          >
            {darkMode ? (
              <FiMoon className="text-white text-lg" />
            ) : (
              <FiSun className="text-yellow-500 text-lg" />
            )}
          </button>

          {/* HAMBURGER TOGGLE (Mobile Only) */}
          <button
            onClick={() => setMenuOpen(!menuOpen)}
            className="
              md:hidden
              w-10 h-10 flex items-center justify-center
              rounded-full border
              border-slate-300 dark:border-slate-700
              bg-white dark:bg-slate-800 /* Warna background default */
              hover:bg-slate-100 dark:hover:bg-slate-700
              transition
            "
            aria-label="Toggle menu"
          >
            {menuOpen ? (
              <FiX className="text-xl text-slate-800 dark:text-white" />
            ) : (
              <FiMenu className="text-xl text-slate-800 dark:text-white" />
            )}
          </button>

        </div>
      </div>

      {/* ===== MOBILE MENU (Dropdown) ===== */}
      <div
        className={`
          md:hidden overflow-hidden
          transition-all duration-300 ease-in-out
          ${menuOpen ? "max-h-96 opacity-100" : "max-h-0 opacity-0"}
          bg-white dark:bg-slate-950 /* Latar belakang sama dengan nav bar */
          border-t border-slate-200 dark:border-slate-800
        `}
      >
        <ul className="flex flex-col items-center py-6 gap-6">
          {menus.map((menu) => (
            <li key={menu.name}>
              <a
                href={menu.link}
                onClick={handleLinkClick}
                className="
                  text-lg font-medium /* Teks menu mobile lebih besar */
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