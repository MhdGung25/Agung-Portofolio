import { motion } from "framer-motion";
import { FiMail, FiSend, FiInstagram } from "react-icons/fi";
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
      `mailto:muhammadagung2003@gmail.com?subject=Contact from ${name.value}&body=${message.value}%0AFrom:%20${email.value}`,
      "_blank"
    );

    setSuccess(true);
    e.target.reset();
  };

  return (
    <section
      id="contact"
      className="py-28 bg-gradient-to-b from-slate-50 to-slate-100 dark:from-slate-900 dark:to-slate-950"
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
            Get In Touch
          </h2>
          <p className="text-slate-600 dark:text-slate-400 max-w-xl mx-auto">
            Let’s build something meaningful together.
          </p>
        </motion.div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-20 items-center">

          {/* LEFT – INFO */}
          <motion.div
            variants={fadeUp}
            custom={1}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            className="text-center lg:text-left"
          >
            <h3 className="text-2xl font-bold text-slate-900 dark:text-white mb-4">
              Let’s Connect 🤝
            </h3>

            <p className="text-slate-600 dark:text-slate-400 max-w-md mx-auto lg:mx-0 mb-10 leading-relaxed">
              Open for projects, collaboration, or just a friendly conversation.
              Reach out via email or social platforms.
            </p>

            {/* SOCIAL BUBBLES */}
            <div className="flex justify-center lg:justify-start gap-4">
              {[
                { icon: <FiMail />, href: "mailto:muhammadagung2003@gmail.com" },
                { icon: <FaWhatsapp />, href: "https://wa.me/6281999612344" },
                { icon: <FiInstagram />, href: "https://instagram.com/mhdgengp" },
                { icon: <AiFillTikTok />, href: "https://www.tiktok.com/@artgeng5" },
              ].map((item, i) => (
                <a
                  key={i}
                  href={item.href}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="
                    group relative
                    w-12 h-12
                    flex items-center justify-center
                    rounded-full
                    bg-white/60 dark:bg-slate-900/60
                    backdrop-blur-xl
                    border border-white/30 dark:border-slate-700/50
                    text-slate-700 dark:text-slate-300
                    shadow-lg
                    hover:-translate-y-1
                    hover:text-white
                    transition
                  "
                >
                  <span className="relative z-10 text-lg">{item.icon}</span>

                  {/* glow */}
                  <span className="
                    absolute inset-0 rounded-full
                    bg-gradient-to-r from-indigo-500 to-blue-500
                    opacity-0 group-hover:opacity-100
                    blur-lg transition
                  " />
                </a>
              ))}
            </div>
          </motion.div>

          {/* RIGHT – FORM */}
          <motion.form
            onSubmit={handleSubmit}
            variants={fadeUp}
            custom={2}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            className="
              relative
              bg-white/60 dark:bg-slate-900/60
              backdrop-blur-xl
              border border-white/30 dark:border-slate-700/40
              rounded-3xl
              p-8 sm:p-10
              max-w-md mx-auto
              shadow-[0_20px_60px_rgba(0,0,0,0.15)]
            "
          >
            {/* glow */}
            <div className="
              absolute -inset-0.5 rounded-3xl
              bg-gradient-to-r from-indigo-500/30 to-blue-500/30
              blur-xl opacity-40
            " />

            <div className="relative space-y-5">
              {[
                { label: "Name", name: "name", type: "text", placeholder: "Your name" },
                { label: "Email", name: "email", type: "email", placeholder: "you@email.com" },
              ].map((field, i) => (
                <div key={i}>
                  <label className="block text-sm font-medium text-slate-700 dark:text-slate-300 mb-2">
                    {field.label}
                  </label>
                  <input
                    {...field}
                    required
                    className="
                      w-full px-4 py-3 rounded-xl
                      bg-white/70 dark:bg-slate-800/70
                      border border-white/40 dark:border-slate-700
                      text-sm text-slate-900 dark:text-white
                      outline-none
                      focus:ring-2 focus:ring-indigo-500
                      transition
                    "
                  />
                </div>
              ))}

              <div>
                <label className="block text-sm font-medium text-slate-700 dark:text-slate-300 mb-2">
                  Message
                </label>
                <textarea
                  name="message"
                  rows="4"
                  required
                  placeholder="Write your message..."
                  className="
                    w-full px-4 py-3 rounded-xl
                    bg-white/70 dark:bg-slate-800/70
                    border border-white/40 dark:border-slate-700
                    text-sm text-slate-900 dark:text-white
                    outline-none resize-none
                    focus:ring-2 focus:ring-indigo-500
                    transition
                  "
                />
              </div>

              <button
                type="submit"
                className="
                  w-full flex items-center justify-center gap-2
                  py-3 rounded-xl
                  font-semibold text-sm text-white
                  bg-gradient-to-r from-indigo-500 to-blue-500
                  shadow-lg shadow-indigo-500/40
                  hover:scale-[1.03]
                  transition
                "
              >
                <FiSend />
                Send Message
              </button>

              {success && (
                <motion.p
                  initial={{ opacity: 0 }}
                  animate={{ opacity: 1 }}
                  className="text-green-500 text-xs text-center"
                >
                  ✅ Email client opened successfully
                </motion.p>
              )}
            </div>
          </motion.form>
        </div>
      </div>
    </section>
  );
}
