import React from "react";
import skillsData from "../data/skills";
import { useGitHubRepos, getLanguageColor } from "../hooks/useGitHub";
import { motion } from "framer-motion";
import { useNavigate } from "react-router-dom";
import { FaCode, FaLayerGroup, FaWrench, FaMicrochip } from "react-icons/fa";

const fadeUp = {
  hidden: { opacity: 0, y: 30 },
  visible: (i = 0) => ({
    opacity: 1,
    y: 0,
    transition: { delay: i * 0.08, duration: 0.5, ease: "easeOut" },
  }),
};

const skillCategories = [
  {
    title: "Frameworks",
    icon: <FaLayerGroup />,
    items: skillsData.content.frameworks,
  },
  {
    title: "Tools",
    icon: <FaWrench />,
    items: skillsData.content.tools,
  },
  {
    title: "Core CS",
    icon: <FaMicrochip />,
    items: skillsData.content.coreConcepts,
  },
  {
    title: "Soft Skills",
    icon: <FaCode />,
    items: skillsData.content.softSkills,
  },
];

export default function Skills() {
  const navigate = useNavigate();
  const { repos } = useGitHubRepos();

  const langCount = {};
  repos.forEach((r) => {
    if (r.language) langCount[r.language] = (langCount[r.language] || 0) + 1;
  });
  const topLangs = Object.entries(langCount)
    .sort((a, b) => b[1] - a[1])
    .slice(0, 7);
  const maxCount = topLangs.length ? topLangs[0][1] : 1;

  return (
    <div className="min-h-screen bg-white text-gray-900 font-inter">
      {/* NAV */}
      <div className="flex items-center justify-between px-6 py-4 border-b border-gray-100">
        <button
          onClick={() => navigate("/")}
          className="text-sm text-gray-500 hover:text-gray-900 transition-colors cursor-pointer flex items-center gap-2"
        >
          <span className="text-lg">&larr;</span> Home
        </button>
        <span className="text-xs text-gray-400 tracking-widest uppercase font-medium">
          Skills &amp; Technologies
        </span>
      </div>

      {/* HERO */}
      <section className="px-6 py-20 text-center">
        <motion.h1
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          className="text-4xl md:text-5xl font-bold text-gray-900 tracking-tight"
        >
          Skills &amp; Technologies
        </motion.h1>
        <motion.p
          initial={{ opacity: 0, y: 15 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.15 }}
          className="mt-4 text-gray-500 text-lg max-w-xl mx-auto leading-relaxed"
        >
          A curated overview of the languages, frameworks, and tools I work with
          — backed by real GitHub activity.
        </motion.p>
      </section>

      {/* LANGUAGES BAR CHART */}
      <section className="px-6 pb-20 max-w-3xl mx-auto">
        <motion.div
          variants={fadeUp}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-60px" }}
        >
          <h2 className="text-xs font-semibold tracking-[0.25em] uppercase text-gray-400 mb-6">
            Languages from GitHub
          </h2>

          {topLangs.length === 0 ? (
            <p className="text-sm text-gray-400">Loading repo data…</p>
          ) : (
            <div className="space-y-4">
              {topLangs.map(([lang, count], i) => (
                <motion.div
                  key={lang}
                  custom={i}
                  variants={fadeUp}
                  initial="hidden"
                  whileInView="visible"
                  viewport={{ once: true }}
                >
                  <div className="flex items-center justify-between mb-1.5">
                    <span className="text-sm font-medium text-gray-700">
                      {lang}
                    </span>
                    <span className="text-xs text-gray-400">
                      {count} {count === 1 ? "repo" : "repos"}
                    </span>
                  </div>
                  <div className="h-2.5 w-full bg-gray-100 rounded-full overflow-hidden">
                    <motion.div
                      initial={{ width: 0 }}
                      whileInView={{ width: `${(count / maxCount) * 100}%` }}
                      viewport={{ once: true }}
                      transition={{ duration: 0.8, delay: i * 0.12, ease: "easeOut" }}
                      className="h-full rounded-full"
                      style={{ backgroundColor: getLanguageColor(lang) }}
                    />
                  </div>
                </motion.div>
              ))}
            </div>
          )}
        </motion.div>
      </section>

      {/* TECH STACK */}
      <section className="bg-gray-50 border-y border-gray-100">
        <div className="max-w-4xl mx-auto px-6 py-20">
          <motion.h2
            variants={fadeUp}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, margin: "-60px" }}
            className="text-xs font-semibold tracking-[0.25em] uppercase text-gray-400 mb-12 text-center"
          >
            Tech Stack
          </motion.h2>

          <div className="grid md:grid-cols-2 gap-8">
            {skillCategories.map((cat, ci) => (
              <motion.div
                key={cat.title}
                custom={ci}
                variants={fadeUp}
                initial="hidden"
                whileInView="visible"
                viewport={{ once: true, margin: "-40px" }}
                className="bg-white rounded-2xl border border-gray-100 p-6 shadow-sm"
              >
                <div className="flex items-center gap-3 mb-5">
                  <span className="text-gray-400 text-lg">{cat.icon}</span>
                  <h3 className="text-sm font-semibold text-gray-900 tracking-wide">
                    {cat.title}
                  </h3>
                </div>
                <div className="flex flex-wrap gap-2">
                  {cat.items.map((skill, si) => (
                    <motion.span
                      key={skill}
                      custom={si}
                      variants={fadeUp}
                      initial="hidden"
                      whileInView="visible"
                      viewport={{ once: true }}
                      className="px-4 py-2 rounded-full text-sm font-medium text-gray-700 bg-gray-50 border border-gray-200 hover:border-blue-300 hover:bg-blue-50 hover:text-blue-700 transition-all cursor-default"
                    >
                      {skill}
                    </motion.span>
                  ))}
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* FOOTER SPACER */}
      <div className="h-20" />
    </div>
  );
}
