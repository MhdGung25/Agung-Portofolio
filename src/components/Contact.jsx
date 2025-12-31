import { motion } from "framer-motion";
import { FiMail, FiSend, FiInstagram } from "react-icons/fi"; // FiMessageCircle dihapus dari sini
import { FaWhatsapp } from "react-icons/fa";
import { AiFillTikTok } from "react-icons/ai";
import { useState } from "react";

const fadeUp = {
  hidden: { opacity: 0, y: 30 },
  visible: (i = 1) => ({
    opacity: 1,
    y: 0,
    transition: { delay: i * 0.12, duration: 0.6, ease: "easeOut" },
  }),
};

export default function Contact() {
  const [success, setSuccess] = useState(false);

  const handleSubmit = (e) => {
    e.preventDefault();
    const { name, email, message } = e.target;

    window.open(
      `mailto:muhammadagung2003@gmail.com?subject=Project Inquiry from ${name.value}&body=${message.value}%0A%0A---%0AReply to: ${email.value}`,
      "_blank"
    );

    setSuccess(true);
    setTimeout(() => setSuccess(false), 5000);
    e.target.reset();
  };

  return (
    <section
      id="contact"
      className="relative py-24 md:py-32 overflow-hidden bg-slate-50 dark:bg-slate-950 transition-colors duration-500"
    >
      {/* Background Ornaments */}
      <div className="absolute top-0 left-1/4 w-72 h-72 bg-indigo-500/10 blur-[120px] rounded-full" />
      <div className="absolute bottom-0 right-1/4 w-96 h-96 bg-blue-500/10 blur-[150px] rounded-full" />

      <div className="max-w-7xl mx-auto px-6 relative z-10">
        
        {/* HEADER SECTION */}
        <motion.div
          variants={fadeUp}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          className="max-w-3xl mx-auto text-center mb-16 md:mb-24"
        >
          <h2 className="text-3xl md:text-5xl font-black text-slate-900 dark:text-white mb-6 tracking-tight">
            Get In <span className="text-indigo-600 dark:text-indigo-400">Touch</span>
          </h2>
          <div className="h-1.5 w-20 bg-indigo-600 mx-auto rounded-full mb-6" />
          <p className="text-base md:text-lg text-slate-600 dark:text-slate-400 leading-relaxed">
            Punya ide menarik atau ingin berkolaborasi? Saya selalu terbuka untuk diskusi 
            proyek baru, peluang kreatif, atau sekadar menyapa.
          </p>
        </motion.div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-24 items-start">
          
          {/* LEFT COLUMN - INFO & SOCIALS */}
          <motion.div
            variants={fadeUp}
            custom={1}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            className="order-2 lg:order-1"
          >
            <div className="space-y-8 text-center lg:text-left">
              <div>
                <h3 className="text-2xl font-bold text-slate-800 dark:text-slate-100 mb-4">
                  Mari Terhubung 🤝
                </h3>
                <p className="text-slate-600 dark:text-slate-400 leading-relaxed max-w-md mx-auto lg:mx-0">
                  Saya biasanya merespons dalam waktu kurang dari 24 jam. Pilih platform 
                  yang paling nyaman bagi Anda.
                </p>
              </div>

              {/* SOCIAL CARDS */}
              <div className="grid grid-cols-2 sm:grid-cols-4 lg:grid-cols-2 gap-4">
                {[
                  { icon: <FiMail />, label: "Email", href: "mailto:muhammadagung2003@gmail.com", color: "hover:bg-red-500" },
                  { icon: <FaWhatsapp />, label: "WhatsApp", href: "https://wa.me/6281999612344", color: "hover:bg-green-500" },
                  { icon: <FiInstagram />, label: "Instagram", href: "https://instagram.com/mhdgengp", color: "hover:bg-pink-600" },
                  { icon: <AiFillTikTok />, label: "TikTok", href: "https://www.tiktok.com/@artgeng5", color: "hover:bg-black" },
                ].map((item, i) => (
                  <a
                    key={i}
                    href={item.href}
                    target="_blank"
                    rel="noopener noreferrer"
                    className={`
                      flex items-center gap-3 p-4 rounded-2xl
                      bg-white/50 dark:bg-slate-900/50 
                      border border-slate-200 dark:border-slate-800
                      text-slate-700 dark:text-slate-300
                      transition-all duration-300 hover:text-white
                      ${item.color} hover:scale-105 hover:shadow-lg
                    `}
                  >
                    <span className="text-xl">{item.icon}</span>
                    <span className="text-sm font-bold">{item.label}</span>
                  </a>
                ))}
              </div>
            </div>
          </motion.div>

          {/* RIGHT COLUMN - CONTACT FORM */}
          <motion.div
            variants={fadeUp}
            custom={2}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            className="order-1 lg:order-2"
          >
            <form
              onSubmit={handleSubmit}
              className="
                p-8 md:p-10 rounded-[2.5rem]
                bg-white/70 dark:bg-slate-900/70
                backdrop-blur-2xl
                border border-white dark:border-slate-800
                shadow-2xl shadow-slate-200/50 dark:shadow-none
              "
            >
              <div className="space-y-6">
                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                  <div>
                    <label className="block text-xs font-bold uppercase tracking-widest text-slate-500 dark:text-slate-400 mb-2 ml-1">
                      Name
                    </label>
                    <input
                      name="name"
                      type="text"
                      required
                      placeholder="Agung..."
                      className="w-full px-5 py-4 rounded-2xl bg-slate-100 dark:bg-slate-800 border-none focus:ring-2 focus:ring-indigo-500 text-slate-900 dark:text-white transition-all outline-none"
                    />
                  </div>
                  <div>
                    <label className="block text-xs font-bold uppercase tracking-widest text-slate-500 dark:text-slate-400 mb-2 ml-1">
                      Email
                    </label>
                    <input
                      name="email"
                      type="email"
                      required
                      placeholder="agung@example.com"
                      className="w-full px-5 py-4 rounded-2xl bg-slate-100 dark:bg-slate-800 border-none focus:ring-2 focus:ring-indigo-500 text-slate-900 dark:text-white transition-all outline-none"
                    />
                  </div>
                </div>

                <div>
                  <label className="block text-xs font-bold uppercase tracking-widest text-slate-500 dark:text-slate-400 mb-2 ml-1">
                    Your Message
                  </label>
                  <textarea
                    name="message"
                    rows="5"
                    required
                    placeholder="Halo, saya ingin bertanya tentang..."
                    className="w-full px-5 py-4 rounded-2xl bg-slate-100 dark:bg-slate-800 border-none focus:ring-2 focus:ring-indigo-500 text-slate-900 dark:text-white transition-all outline-none resize-none"
                  />
                </div>

                <button
                  type="submit"
                  className="
                    w-full flex items-center justify-center gap-3
                    py-4 rounded-2xl font-bold text-white
                    bg-gradient-to-r from-indigo-600 to-blue-600
                    hover:from-indigo-700 hover:to-blue-700
                    shadow-xl shadow-indigo-500/20
                    hover:scale-[1.02] active:scale-95
                    transition-all duration-300
                  "
                >
                  <FiSend className="text-lg" />
                  Kirim Pesan Sekarang
                </button>

                {success && (
                  <motion.div
                    initial={{ opacity: 0, y: 10 }}
                    animate={{ opacity: 1, y: 0 }}
                    className="p-4 rounded-xl bg-green-500/10 border border-green-500/20 text-green-600 dark:text-green-400 text-sm text-center font-medium"
                  >
                    🚀 Membuka aplikasi email Anda...
                  </motion.div>
                )}
              </div>
            </form>
          </motion.div>
        </div>
      </div>
    </section>
  );
}