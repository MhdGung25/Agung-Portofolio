import { motion } from "framer-motion";
import { FiMail, FiSend, FiInstagram } from "react-icons/fi";
import { FaWhatsapp } from "react-icons/fa";
import { useState } from "react";
import { AiFillTikTok } from "react-icons/ai";

/* ===== ANIMATION VARIANTS (Didefinisikan ulang agar tidak tergantung file lain) ===== */
const sectionUp = {
  hidden: { opacity: 0, y: 30 },
  visible: {
    opacity: 1,
    y: 0,
    transition: { duration: 0.6, ease: "easeOut" },
  },
};

const leftIn = {
  hidden: { opacity: 0, x: -40 },
  visible: {
    opacity: 1,
    x: 0,
    transition: { duration: 0.6, ease: "easeOut" },
  },
};

const rightIn = {
  hidden: { opacity: 0, x: 40 },
  visible: {
    opacity: 1,
    x: 0,
    transition: { duration: 0.6, ease: "easeOut" },
  },
};

const Contact = () => {
  const [success, setSuccess] = useState(false);

  const handleSubmit = (e) => {
    e.preventDefault();

    const name = e.target.name.value;
    const email = e.target.email.value;
    const message = e.target.message.value;

    // Aksi: Membuka klien email
    window.open(
      `mailto:muhammadagung2003@gmail.com?subject=Contact from ${name}&body=${message}%0AFrom:%20${email}`,
      "_blank"
    );

    setSuccess(true);
    e.target.reset();
  };

  return (
    <section 
      id="contact" 
      // Menggunakan padding vertikal yang konsisten
      className="py-20 lg:py-32 bg-slate-950"
    >
      <div className="max-w-7xl mx-auto px-6 lg:px-8">

        {/* ===== TITLE ===== */}
        <motion.div
          variants={sectionUp}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          className="mb-16 md:mb-20 text-center"
        >
          <h2 className="text-3xl md:text-4xl font-bold text-white mb-4">
            Get In Touch
          </h2>
          <div className="w-20 h-1 bg-indigo-600 rounded mx-auto" />
        </motion.div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 lg:gap-24 items-center">

          {/* ===== LEFT: INFO & SOCIAL ICONS ===== */}
          <motion.div
            variants={leftIn}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            className="text-center lg:text-left"
          >
            <h3 className="text-3xl font-bold text-white mb-4">
              Let’s Connect & Work Together!
            </h3>

            <p className="text-slate-400 max-w-lg mx-auto lg:mx-0 mb-10 leading-relaxed">
              I’m always open to new project ideas and collaborations. 
              Feel free to reach out via the form or connect through my social media channels below 🚀
            </p>

            {/* ICON CONTACT */}
            <div className="flex justify-center lg:justify-start gap-4">

              {/* GMAIL */}
              <a
                href="mailto:muhammadagung2003@gmail.com"
                className="
                  w-14 h-14 flex items-center justify-center
                  rounded-full border-2 border-slate-800
                  text-slate-300 bg-slate-900
                  hover:text-white hover:bg-indigo-600 
                  transition duration-300 transform hover:scale-105"
                title="Send an Email"
              >
                <FiMail size={22} />
              </a>

              {/* WHATSAPP */}
              <a
                href="https://wa.me/6281999612344"
                target="_blank"
                rel="noopener noreferrer"
                className="
                  w-14 h-14 flex items-center justify-center
                  rounded-full border-2 border-slate-800
                  text-slate-300 bg-slate-900
                  hover:text-white hover:bg-green-600 
                  transition duration-300 transform hover:scale-105"
                title="WhatsApp"
              >
                <FaWhatsapp size={22} />
              </a>

              {/* INSTAGRAM */}
              <a
                href="https://instagram.com/mhdgengp"
                target="_blank"
                rel="noopener noreferrer"
                className="
                  w-14 h-14 flex items-center justify-center
                  rounded-full border-2 border-slate-800
                  text-slate-300 bg-slate-900
                  hover:text-white hover:bg-pink-600
                  transition duration-300 transform hover:scale-105"
                title="Instagram Profile"
              >
                <FiInstagram size={22} />
              </a>
              
              {/* TIKTOK */}
              <a
                href="https://www.tiktok.com/@artgeng5"
                target="_blank"
                rel="noopener noreferrer"
                className="
                  w-14 h-14 flex items-center justify-center
                  rounded-full border-2 border-slate-800
                  text-slate-300 bg-slate-900
                  hover:text-white hover:bg-black
                  transition duration-300 transform hover:scale-105"
                title="TikTok Profile"
              >
                <AiFillTikTok size={22} />
              </a>
            </div>
          </motion.div>

          {/* ===== RIGHT: FORM ===== */}
          <motion.form
            onSubmit={handleSubmit}
            variants={rightIn}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            className="
              bg-slate-900 border border-slate-800
              rounded-2xl p-6 sm:p-10 
              space-y-6
              w-full max-w-lg mx-auto shadow-2xl shadow-indigo-500/10
            "
          >
            {/* Input Name */}
            <div>
              <label className="block text-slate-300 mb-2 text-sm font-medium">Name</label>
              <input
                name="name"
                required
                className="w-full px-4 py-3 rounded-lg bg-slate-950 border border-slate-700 text-white placeholder-slate-500 focus:border-indigo-500 outline-none transition"
                placeholder="Your name"
              />
            </div>

            {/* Input Email */}
            <div>
              <label className="block text-slate-300 mb-2 text-sm font-medium">Email</label>
              <input
                name="email"
                type="email"
                required
                className="w-full px-4 py-3 rounded-lg bg-slate-950 border border-slate-700 text-white placeholder-slate-500 focus:border-indigo-500 outline-none transition"
                placeholder="you@email.com"
              />
            </div>

            {/* Textarea Message */}
            <div>
              <label className="block text-slate-300 mb-2 text-sm font-medium">Message</label>
              <textarea
                name="message"
                rows="5"
                required
                className="w-full px-4 py-3 rounded-lg bg-slate-950 border border-slate-700 text-white placeholder-slate-500 focus:border-indigo-500 outline-none resize-none transition"
                placeholder="Write your message here..."
              />
            </div>

            {/* Submit Button */}
            <button
              type="submit"
              className="flex items-center justify-center gap-2 font-semibold
                         w-full py-3 rounded-lg text-lg
                         bg-indigo-600 text-white shadow-lg shadow-indigo-600/30
                         hover:bg-indigo-500 transition transform hover:scale-[1.01]"
            >
              <FiSend size={18} />
              Send Message
            </button>

            {/* Success Message */}
            {success && (
              <motion.p 
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                className="text-green-400 text-base text-center pt-2"
              >
                ✅ Message sent successfully! Your email client is opening.
              </motion.p>
            )}
          </motion.form>
        </div>
      </div>
    </section>
  );
};

export default Contact;