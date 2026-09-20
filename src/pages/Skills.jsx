import { motion } from "framer-motion";
import skillsData from "../data/skills";
import PortfolioLayout, { Eyebrow } from "../components/PortfolioLayout";

const groups = [
  { eyebrow: "Languages", items: skillsData.content.languages, note: "What I write daily" },
  { eyebrow: "Frameworks & Libraries", items: skillsData.content.frameworks, note: "What I build with" },
  { eyebrow: "Databases", items: skillsData.content.databases, note: "Where I store things" },
  { eyebrow: "Tools & Platforms", items: skillsData.content.tools, note: "How I ship" },
  { eyebrow: "Core CS", items: skillsData.content.coreConcepts, note: "How I think" },
];

export default function Skills() {
  return (
    <PortfolioLayout footerNote="Always learning">
      <section className="max-w-4xl mx-auto px-6 pt-16 md:pt-24 pb-10 text-center">
        <Eyebrow>Creative suite · Tech stack</Eyebrow>
        <motion.h1
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          className="text-4xl md:text-6xl font-bold tracking-tight"
        >
          Skills
        </motion.h1>
        <p className="mt-4 text-gray-500 text-base md:text-lg max-w-xl mx-auto">
          An experimental space of languages, frameworks and CS fundamentals
          I enjoy exploring.
        </p>
      </section>

      <section className="max-w-4xl mx-auto px-6 pb-20 space-y-12">
        {groups.map((g, gi) => (
          <motion.div
            key={g.eyebrow}
            initial={{ opacity: 0, y: 24 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-40px" }}
            transition={{ duration: 0.5, delay: gi * 0.05 }}
          >
            <div className="flex items-baseline justify-between mb-5 border-b border-gray-100 pb-3">
              <h2 className="text-sm font-bold tracking-[0.2em] uppercase">
                {g.eyebrow}
              </h2>
              <span className="text-xs text-gray-400 hidden sm:block">{g.note}</span>
            </div>
            <div className="flex flex-wrap gap-2.5">
              {g.items.map((s) => (
                <span
                  key={s}
                  className="px-4 py-2 rounded-full text-sm text-gray-700 bg-gray-50 border border-gray-200 hover:border-gray-900 hover:text-gray-900 transition-colors cursor-default"
                >
                  {s}
                </span>
              ))}
            </div>
          </motion.div>
        ))}
      </section>
    </PortfolioLayout>
  );
}
