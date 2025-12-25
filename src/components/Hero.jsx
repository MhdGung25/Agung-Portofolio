const Hero = () => {
  return (
    <section
      id="home"
      className="
        min-h-screen
        flex items-center
        bg-slate-50 dark:bg-slate-900
        py-20 lg:py-0
      "
    >
      <div
        className="
          max-w-7xl mx-auto
          px-6 lg:px-8
          grid grid-cols-1 lg:grid-cols-2
          gap-16 lg:gap-24
          items-center
          w-full
        "
      >
        {/* ===== IMAGE ===== */}
        <div className="order-1 lg:order-2 flex justify-center">
          <div
            className="
              w-40 h-40
              sm:w-56 sm:h-56
              lg:w-96 lg:h-96
              rounded-full overflow-hidden
              border-4 border-indigo-500/60
              shadow-lg dark:shadow-indigo-500/30
              transition-transform duration-500
              hover:scale-[1.03]
            "
          >
            <img
              src="/profile.jpg"
              alt="Agung Profile"
              className="w-full h-full object-cover"
            />
          </div>
        </div>

        {/* ===== TEXT ===== */}
        <div className="order-2 lg:order-1 text-center lg:text-left">
          <p className="text-sm sm:text-base font-medium text-indigo-500 dark:text-indigo-400 mb-3">
            👋 Hi, my name is
          </p>

          <h1
            className="
              text-3xl sm:text-4xl lg:text-6xl
              font-extrabold
              text-slate-900 dark:text-slate-100
              mb-4 leading-tight
            "
          >
            Muhammad Agung Pamungkas
          </h1>

          <h2
            className="
              text-base sm:text-lg lg:text-3xl
              font-semibold
              text-slate-600 dark:text-slate-300
              mb-5
            "
          >
            Informatics Student &{" "}
            <span className="text-indigo-500 dark:text-indigo-400">
              Web Developer
            </span>
          </h2>

          <p
            className="
              text-sm sm:text-base
              text-slate-600 dark:text-slate-400
              max-w-md mx-auto lg:mx-0
              mb-8 leading-relaxed
            "
          >
            I build modern, scalable web applications using React and Tailwind
            CSS, focusing on clean logic and intuitive user experiences.
          </p>

          {/* ===== BUTTONS ===== */}
          <div
            className="
              flex flex-col sm:flex-row
              gap-4
              justify-center lg:justify-start
            "
          >
            <a
              href="#projects"
              className="
                w-full sm:w-auto
                px-8 py-3
                text-sm sm:text-base
                font-semibold
                bg-indigo-500 text-white
                rounded-full
                shadow-md hover:shadow-lg
                hover:bg-indigo-400
                transition
              "
            >
              View Projects
            </a>

            <a
              href="#contact"
              className="
                w-full sm:w-auto
                px-8 py-3
                text-sm sm:text-base
                font-semibold
                rounded-full
                border border-indigo-500/70
                text-indigo-500 dark:text-indigo-400
                hover:bg-indigo-500/10
                transition
              "
            >
              Contact Me
            </a>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;
