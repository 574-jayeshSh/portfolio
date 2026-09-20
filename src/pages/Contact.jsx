import { motion } from "framer-motion";
import ContactForm from "../components/ContactForm";
import contactData from "../data/contact";
import PortfolioLayout, { Eyebrow } from "../components/PortfolioLayout";
import { FaGithub, FaLinkedinIn, FaEnvelope, FaPhone, FaMapMarkerAlt } from "react-icons/fa";

const cards = [
  { label: "Email", value: contactData.content.email, href: `mailto:${contactData.content.email}`, icon: <FaEnvelope /> },
  { label: "Phone", value: contactData.content.phone, href: `tel:${contactData.content.phone}`, icon: <FaPhone /> },
  { label: "GitHub", value: "574-jayeshSh", href: contactData.content.github, icon: <FaGithub /> },
  { label: "LinkedIn", value: "jayesh-sharma-geca", href: contactData.content.linkedin, icon: <FaLinkedinIn /> },
];

export default function Contact() {
  return (
    <PortfolioLayout footerNote="Let's talk">
      {/* Hero like his homepage: "Hey, I'm Ayaneshu!" */}
      <section className="max-w-4xl mx-auto px-6 pt-16 md:pt-24 pb-10 text-center">
        <Eyebrow>Contact</Eyebrow>
        <motion.h1
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          className="text-4xl md:text-6xl font-bold tracking-tight"
        >
          Hey, I&apos;m Jayesh!
        </motion.h1>
        <p className="mt-4 text-gray-500 text-base md:text-lg max-w-xl mx-auto">
          I&apos;m a developer with a love for systems &amp; web. Currently in
          Ajmer — open to internships, collaborations and chai chats.
        </p>
        <div className="mt-4 flex items-center justify-center gap-1.5 text-sm text-gray-400">
          <FaMapMarkerAlt />
          <span>Ajmer, Rajasthan, India</span>
        </div>
      </section>

      <section className="max-w-5xl mx-auto px-6 pb-20 grid lg:grid-cols-5 gap-8">
        {/* Form */}
        <motion.div
          initial={{ opacity: 0, y: 24 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.1 }}
          className="lg:col-span-3 rounded-2xl border border-gray-200 p-6 sm:p-8"
        >
          <h2 className="text-lg font-bold tracking-tight mb-1">Send a message</h2>
          <p className="text-sm text-gray-400 mb-6">
            I usually reply within a day.
          </p>
          <ContactForm />
        </motion.div>

        {/* Direct links */}
        <div className="lg:col-span-2 space-y-3">
          {cards.map((c, i) => (
            <motion.a
              key={c.label}
              href={c.href}
              target={c.href.startsWith("http") ? "_blank" : undefined}
              rel="noopener noreferrer"
              initial={{ opacity: 0, y: 16 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.4, delay: 0.15 + i * 0.07 }}
              className="flex items-center gap-4 p-5 rounded-2xl border border-gray-100 hover:border-gray-300 hover:shadow-md transition-all group"
            >
              <span className="w-10 h-10 rounded-full bg-gray-50 border border-gray-100 flex items-center justify-center text-gray-600 group-hover:text-gray-900">
                {c.icon}
              </span>
              <span className="min-w-0">
                <span className="block text-[11px] uppercase tracking-widest text-gray-400">
                  {c.label}
                </span>
                <span className="block text-sm font-semibold truncate">{c.value}</span>
              </span>
            </motion.a>
          ))}
          <a
            href="/resume.pdf"
            target="_blank"
            rel="noopener noreferrer"
            className="block text-center text-sm font-semibold bg-gray-900 text-white rounded-full py-3.5 hover:bg-gray-700 transition-colors"
          >
            View Resume
          </a>
        </div>
      </section>
    </PortfolioLayout>
  );
}
