import { motion } from "framer-motion";
import { FiMail, FiSend, FiInstagram } from "react-icons/fi";
import { FaWhatsapp } from "react-icons/fa";
import { AiFillTikTok } from "react-icons/ai";
import { useState } from "react";

/* ===== ANIMATION ===== */
const sectionUp = {
  hidden: { opacity: 0, y: 24 },
  visible: {
    opacity: 1,
    y: 0,
    transition: { duration: 0.5, ease: "easeOut" },
  },
};

const leftIn = {
  hidden: { opacity: 0, y: 24 },
  visible: {
    opacity: 1,
    y: 0,
    transition: { duration: 0.5, ease: "easeOut" },
  },
};

const rightIn = leftIn;

const Contact = () => {
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
      className="py-20 lg:py-32 bg-slate-50 dark:bg-slate-900"
    >
      <div className="max-w-7xl mx-auto px-6 lg:px-8">

        {/* ===== TITLE ===== */}
        <motion.div
          variants={sectionUp}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          className="mb-14 text-center"
        >
          <h2 className="text-2xl sm:text-3xl md:text-4xl font-bold text-slate-900 dark:text-slate-100 mb-3">
            Get In Touch
          </h2>
          <div className="w-16 h-1 bg-indigo-500 rounded mx-auto" />
        </motion.div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-14 lg:gap-24 items-start">

          {/* ===== LEFT ===== */}
          <motion.div
            variants={leftIn}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            className="text-center lg:text-left"
          >
            <h3 className="text-xl sm:text-2xl font-bold text-slate-900 dark:text-slate-100 mb-4">
              Let’s Connect
            </h3>

            <p className="text-sm sm:text-base text-slate-600 dark:text-slate-400 max-w-md mx-auto lg:mx-0 mb-8 leading-relaxed">
              I’m open to new projects, collaborations, or just a friendly chat.
              Reach me via the form or social platforms below.
            </p>

            {/* SOCIAL ICONS */}
            <div className="flex justify-center lg:justify-start gap-4">
              {[
                {
                  icon: <FiMail size={18} />,
                  href: "mailto:muhammadagung2003@gmail.com",
                },
                {
                  icon: <FaWhatsapp size={18} />,
                  href: "https://wa.me/6281999612344",
                },
                {
                  icon: <FiInstagram size={18} />,
                  href: "https://instagram.com/mhdgengp",
                },
                {
                  icon: <AiFillTikTok size={18} />,
                  href: "https://www.tiktok.com/@artgeng5",
                },
              ].map((item, i) => (
                <a
                  key={i}
                  href={item.href}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="
                    w-11 h-11
                    flex items-center justify-center
                    rounded-full
                    border border-slate-300 dark:border-slate-600
                    bg-white dark:bg-slate-800
                    text-slate-600 dark:text-slate-300
                    hover:text-indigo-500 hover:border-indigo-500
                    transition
                  "
                >
                  {item.icon}
                </a>
              ))}
            </div>
          </motion.div>

          {/* ===== FORM ===== */}
          <motion.form
            onSubmit={handleSubmit}
            variants={rightIn}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            className="
              bg-white dark:bg-slate-800
              border border-slate-200 dark:border-slate-700
              rounded-2xl
              p-6 sm:p-8
              space-y-5
              w-full max-w-md mx-auto
              shadow-md
            "
          >
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
                    w-full px-4 py-3 rounded-lg
                    bg-slate-50 dark:bg-slate-900
                    border border-slate-300 dark:border-slate-600
                    text-sm text-slate-900 dark:text-slate-100
                    focus:border-indigo-500 outline-none
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
                  w-full px-4 py-3 rounded-lg
                  bg-slate-50 dark:bg-slate-900
                  border border-slate-300 dark:border-slate-600
                  text-sm text-slate-900 dark:text-slate-100
                  focus:border-indigo-500 outline-none
                  resize-none transition
                "
              />
            </div>

            <button
              type="submit"
              className="
                w-full flex items-center justify-center gap-2
                py-3 rounded-lg
                font-semibold text-sm
                bg-indigo-500 text-white
                hover:bg-indigo-400
                transition
              "
            >
              <FiSend size={16} />
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
          </motion.form>
        </div>
      </div>
    </section>
  );
};

export default Contact;
