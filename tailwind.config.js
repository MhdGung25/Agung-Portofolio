/** @type {import('tailwindcss').Config} */
module.exports = {
  // Aktifkan Dark Mode berdasarkan class di body/html
  darkMode: "class",

  // Tentukan file mana saja yang berisi class Tailwind
  content: [
    "./src/**/*.{js,jsx,ts,tsx}",
  ],

  // Definisi tema dan konfigurasi kustom
  theme: {
    extend: {
      // ===== Kustomisasi Animasi =====
      keyframes: {
        // Mendefinisikan keyframe untuk animasi 'fadeInUp'
        fadeInUp: {
          '0%': { opacity: 0, transform: 'translateY(20px)' },
          '100%': { opacity: 1, transform: 'translateY(0)' },
        },
        // Tambahkan keyframes lain di sini jika diperlukan
      },
      animation: {
        // Menetapkan durasi, timing function, dan mode pengisian untuk animasi
        fadeInUp: 'fadeInUp 0.6s ease-out forwards',
        // Tambahkan animasi lain di sini jika diperlukan
      },
      // ===== Kustomisasi Delay Animasi (Opsional tapi berguna untuk staggered animation) =====
      transitionDelay: {
         '400': '400ms',
         '500': '500ms',
         '600': '600ms',
         // Anda dapat menambahkan lebih banyak nilai di sini
      }
    },
  },

  // Plugins yang digunakan
  plugins: [],
};