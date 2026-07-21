import React from "react";
import { motion } from "framer-motion";
import { useNavigate } from "react-router-dom";
import ContactForm from "../components/ContactForm";
import contactData from "../data/contact";
import { FaEnvelope, FaLinkedinIn, FaGithub, FaPhone, FaDownload, FaMapMarkerAlt } from "react-icons/fa";

const cardVariants = {
  hidden: { opacity: 0, y: 30 },
  visible: (i) => ({
    opacity: 1,
    y: 0,
    transition: { delay: i * 0.1, duration: 0.5, ease: "easeOut" },
  }),
};

const infoCards = [
  {
    label: "Email",
    value: contactData.content.email,
    icon: <FaEnvelope className="text-red-500" />,
    href: `mailto:${contactData.content.email}`,
    external: false,
  },
  {
    label: "Phone",
    value: contactData.content.phone,
    icon: <FaPhone className="text-green-500" />,
    href: `tel:${contactData.content.phone}`,
    external: false,
  },
  {
    label: "GitHub",
    value: "574-jayeshSh",
    icon: <FaGithub className="text-gray-800" />,
    href: contactData.content.github,
    external: true,
  },
  {
    label: "LinkedIn",
    value: "jayesh-sharma-geca",
    icon: <FaLinkedinIn className="text-blue-600" />,
    href: contactData.content.linkedin,
    external: true,
  },
  {
    label: "Resume",
    value: "View / Download PDF",
    icon: <FaDownload className="text-blue-500" />,
    href: "/resume.pdf",
    external: true,
  },
];

export default function Contact() {
  const navigate = useNavigate();

  return (
    <div className="min-h-screen bg-white font-sans text-gray-900">
      {/* TOP NAV */}
      <nav className="sticky top-0 z-50 bg-white/80 backdrop-blur-md border-b border-gray-100">
        <div className="max-w-6xl mx-auto px-6 py-4 flex items-center justify-between">
          <button
            onClick={() => navigate("/")}
            className="text-sm font-semibold text-gray-500 hover:text-gray-900 transition-colors cursor-pointer"
          >
            &larr; Home
          </button>
          <span className="text-sm font-semibold text-gray-900 tracking-tight">Contact</span>
        </div>
      </nav>

      {/* HERO */}
      <section className="max-w-6xl mx-auto px-6 pt-20 pb-16 md:pt-28 md:pb-24 text-center">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
        >
          <h1 className="text-4xl md:text-5xl font-bold tracking-tight text-gray-900 mb-4">
            Get in Touch
          </h1>
          <p className="text-lg text-gray-500 mb-6">
            Let&apos;s build something together
          </p>
          <div className="flex items-center justify-center gap-1.5 text-sm text-gray-400 mb-6">
            <FaMapMarkerAlt className="text-gray-400" />
            <span>Ajmer, Rajasthan, India</span>
          </div>
          <a
            href="/resume.pdf"
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-2 px-6 py-3 bg-blue-600 text-white text-sm font-semibold rounded-full hover:bg-blue-700 transition-colors shadow-sm"
          >
            <FaDownload className="text-xs" />
            View Resume
          </a>
        </motion.div>
      </section>

      {/* MAIN CONTENT */}
      <section className="max-w-6xl mx-auto px-6 pb-24">
        <div className="grid lg:grid-cols-5 gap-10 lg:gap-12">
          {/* LEFT - FORM */}
          <motion.div
            className="lg:col-span-3"
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
          >
            <div className="bg-white rounded-2xl border border-gray-200 p-8 md:p-10 shadow-sm">
              <h2 className="text-xl font-bold text-gray-900 mb-6">Send a Message</h2>
              <ContactForm />
            </div>
          </motion.div>

          {/* RIGHT - INFO CARDS */}
          <div className="lg:col-span-2 space-y-4">
            {infoCards.map((card, i) => (
              <motion.a
                key={card.label}
                href={card.href}
                target={card.external ? "_blank" : undefined}
                rel={card.external ? "noopener noreferrer" : undefined}
                custom={i}
                variants={cardVariants}
                initial="hidden"
                whileInView="visible"
                viewport={{ once: true }}
                whileHover={{ y: -3 }}
                className="flex items-center gap-4 p-5 bg-white rounded-xl border border-gray-200 shadow-sm hover:shadow-md transition-all block"
              >
                <div className="w-10 h-10 rounded-lg bg-gray-50 border border-gray-100 flex items-center justify-center text-lg shrink-0">
                  {card.icon}
                </div>
                <div className="min-w-0">
                  <p className="text-xs font-medium text-gray-400 uppercase tracking-wide">{card.label}</p>
                  <p className="text-sm font-semibold text-gray-900 truncate">{card.value}</p>
                </div>
              </motion.a>
            ))}
          </div>
        </div>
      </section>
    </div>
  );
}
