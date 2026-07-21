import { motion } from "framer-motion";
import { useNavigate } from "react-router-dom";
import achievementsData from "../data/achievements";
import { FaTrophy, FaMedal, FaCode, FaStar, FaGraduationCap, FaCheckCircle } from "react-icons/fa";

const sectionIcons = {
  "Hackathons & Competitions": { icon: FaTrophy, color: "text-amber-500", ring: "bg-amber-100", line: "bg-amber-400" },
  "Academic & Certifications": { icon: FaGraduationCap, color: "text-blue-500", ring: "bg-blue-100", line: "bg-blue-400" },
  "Open Source & Projects": { icon: FaCode, color: "text-emerald-500", ring: "bg-emerald-100", line: "bg-emerald-400" },
  "Skills & Milestones": { icon: FaStar, color: "text-purple-500", ring: "bg-purple-100", line: "bg-purple-400" },
};

const stats = [
  { label: "13 Repos" },
  { label: "38 Stars" },
  { label: "250+ DSA Problems" },
  { label: "5 Languages" },
];

const containerVariants = {
  hidden: {},
  visible: { transition: { staggerChildren: 0.2 } },
};

const nodeVariants = {
  hidden: { opacity: 0, x: -30 },
  visible: { opacity: 1, x: 0, transition: { duration: 0.5, ease: "easeOut" } },
};

const itemVariants = {
  hidden: { opacity: 0, x: -15 },
  visible: { opacity: 1, x: 0, transition: { duration: 0.35, ease: "easeOut" } },
};

export default function Achievements() {
  const navigate = useNavigate();
  const sections = achievementsData?.content || [];

  return (
    <div className="min-h-screen bg-white">
      {/* Top Nav */}
      <nav className="fixed top-0 left-0 right-0 z-50 bg-white/80 backdrop-blur-md border-b border-gray-100">
        <div className="max-w-5xl mx-auto px-6 h-16 flex items-center justify-between">
          <button
            onClick={() => navigate("/")}
            className="flex items-center gap-2 text-sm font-medium text-gray-600 hover:text-gray-900 transition-colors cursor-pointer"
          >
            <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 19l-7-7 7-7" />
            </svg>
            Back to Home
          </button>
          <div className="flex items-center gap-2 text-amber-500">
            <FaTrophy className="w-4 h-4" />
            <span className="text-sm font-semibold tracking-wide">ACHIEVEMENTS</span>
          </div>
        </div>
      </nav>

      {/* Hero */}
      <section className="pt-32 pb-16 px-6">
        <div className="max-w-5xl mx-auto text-center">
          <motion.h1
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="text-4xl md:text-5xl font-bold text-gray-900 tracking-tight"
          >
            Achievements
          </motion.h1>
          <motion.p
            initial={{ opacity: 0, y: 15 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.15 }}
            className="mt-4 text-lg text-gray-500"
          >
            Milestones and accomplishments
          </motion.p>
        </div>
      </section>

      {/* Timeline */}
      <section className="px-6 pb-24">
        <div className="max-w-4xl mx-auto relative">
          {/* Vertical connecting line */}
          <div className="absolute left-[27px] md:left-[31px] top-0 bottom-0 w-px bg-gray-200" />

          <motion.div
            variants={containerVariants}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, margin: "-50px" }}
            className="flex flex-col gap-12"
          >
            {sections.map((section, sIdx) => {
              const cfg = sectionIcons[section.section] || sectionIcons["Skills & Milestones"];
              const Icon = cfg.icon;

              return (
                <motion.div
                  key={sIdx}
                  variants={nodeVariants}
                  className="relative flex gap-6 md:gap-8"
                >
                  {/* Circle node */}
                  <div className="relative z-10 flex-shrink-0">
                    <div className={`w-14 h-14 rounded-full ${cfg.ring} flex items-center justify-center ring-4 ring-white`}>
                      <Icon className={`w-5 h-5 ${cfg.color}`} />
                    </div>
                  </div>

                  {/* Content card */}
                  <div className="flex-1 bg-gray-50 rounded-xl p-6 border border-gray-100">
                    <h3 className="text-lg font-semibold text-gray-900 mb-4">{section.section}</h3>
                    <motion.ul
                      variants={{ hidden: {}, visible: { transition: { staggerChildren: 0.07, delayChildren: 0.1 } } }}
                      initial="hidden"
                      whileInView="visible"
                      viewport={{ once: true }}
                      className="space-y-2.5"
                    >
                      {section.items.map((item, iIdx) => (
                        <motion.li
                          key={iIdx}
                          variants={itemVariants}
                          className="flex items-start gap-2.5 text-sm text-gray-600 leading-relaxed"
                        >
                          <FaCheckCircle className={`w-3.5 h-3.5 mt-0.5 flex-shrink-0 ${cfg.color}`} />
                          <span>{item}</span>
                        </motion.li>
                      ))}
                    </motion.ul>
                  </div>
                </motion.div>
              );
            })}
          </motion.div>
        </div>
      </section>

      {/* Stats Bar */}
      <motion.section
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.5 }}
        className="px-6 pb-24"
      >
        <div className="max-w-4xl mx-auto">
          <div className="bg-gray-50 border border-gray-100 rounded-2xl py-8 px-6">
            <div className="grid grid-cols-2 md:grid-cols-4 gap-6">
              {stats.map((stat, idx) => (
                <div key={idx} className="text-center">
                  <p className="text-lg font-bold text-gray-900">{stat.label}</p>
                </div>
              ))}
            </div>
          </div>
        </div>
      </motion.section>
    </div>
  );
}
