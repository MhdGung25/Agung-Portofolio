const Hero = () => {
  return (
    <section
      id="home"
      // Container utama, memastikan tinggi minimum layar dan centering konten
      className="
        min-h-screen
        flex items-center justify-center 
        bg-gray-50 dark:bg-gray-900
        py-16 md:py-0
      "
    >
      <div
        // Grid container, responsif dari 1 kolom ke 2 kolom (di lg)
        className="
          max-w-7xl mx-auto px-6 lg:px-8
          grid grid-cols-1 lg:grid-cols-2
          gap-12 lg:gap-24
          items-center 
          w-full
        "
      >
        {/* ===== TEXT & CONTENT | KIRI (Order 2 di mobile, Order 1 di desktop) ===== */}
        <div
          className="
            order-2 lg:order-1
            text-center lg:text-left
            animate-fadeInUp [animation-delay:0.2s]
          "
        >
          {/* Sapaan dengan Emoticon */}
          <p className="text-xl text-indigo-600 dark:text-indigo-400 font-medium mb-4">
            <span role="img" aria-label="waving hand">👋</span> Hi, MY Name
          </p>

          {/* Judul Utama: Nama */}
          <h1
            className="
              text-5xl sm:text-6xl lg:text-7xl
              font-extrabold
              text-gray-900 dark:text-white
              mb-4 leading-tight
            "
          >
            Muhammad Agung Pamungkas
          </h1>

          {/* Sub Judul: Profesi */}
          <h2
            className="
              text-2xl sm:text-3xl lg:text-4xl
              font-semibold
              text-gray-600 dark:text-gray-300
              mb-6
            "
          >
            Mahasiswa Informatika & <span className="text-indigo-600 dark:text-indigo-400">Web Developer</span>
          </h2>

          {/* Deskripsi */}
          <p
            className="
              text-lg
              text-gray-700 dark:text-gray-400
              max-w-xl mx-auto lg:mx-0
              mb-10 leading-relaxed
            "
          >
           Saya membangun aplikasi web modern menggunakan React, Tailwind CSS, dengan logika yang bersih dan solid.
          </p>

          {/* ===== BUTTONS (Grup Tombol) ===== */}
          <div className="flex flex-col sm:flex-row gap-5 justify-center lg:justify-start animate-fadeInUp [animation-delay:0.4s]">
            {/* Tombol Utama (Primary) */}
            <a
              href="#projects"
              className="
                px-8 py-3 text-lg font-semibold
                bg-indigo-600 text-white
                rounded-full shadow-xl shadow-indigo-600/50 
                hover:bg-indigo-700
                transition duration-300 transform hover:scale-105
              "
            >
              View Projects
            </a>

            {/* Tombol Sekunder (Outline) */}
            <a
              href="#contact"
              className="
                px-8 py-3 text-lg font-semibold
                border-2 border-indigo-600 dark:border-indigo-400
                text-indigo-600 dark:text-indigo-400
                rounded-full
                hover:bg-indigo-50 dark:hover:bg-gray-800
                transition duration-300 transform hover:scale-105
              "
            >
              Contact Me
            </a>
          </div>
        </div>

        {/* ===== IMAGE | KANAN (Order 1 di mobile, Order 2 di desktop) ===== */}
        <div className="flex justify-center order-1 lg:order-2 animate-fadeInUp [animation-delay:0.6s] pt-12 lg:pt-0">
          <div
            className="
              w-64 h-64 sm:w-80 sm:h-80 lg:w-96 lg:h-96
              rounded-full overflow-hidden
              border-[6px] border-indigo-500
              shadow-2xl shadow-indigo-500/50 dark:shadow-indigo-500/30
              transition-all duration-500
              hover:scale-[1.02] hover:shadow-indigo-500/70
              relative
            "
          >
            <img
              src="/profile.jpg"
              alt="Agung Profile"
              className="w-full h-full object-cover object-center"
            />
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;