import { motion } from "framer-motion";
import achievementsData from "../data/achievements";
import PortfolioLayout, { Eyebrow } from "../components/PortfolioLayout";

const stats = [
  { value: "200+", label: "DSA Problems" },
  { value: "Yug3DAI", label: "SDE Intern" },
  { value: "7.15", label: "CGPA / 10" },
  { value: "6+", label: "Major Builds" },
];

export default function Achievements() {
  const sections = achievementsData?.content || [];

  return (
    <PortfolioLayout footerNote="Onwards and upwards">
      <section className="max-w-4xl mx-auto px-6 pt-16 md:pt-24 pb-10 text-center">
        <Eyebrow>Milestones</Eyebrow>
        <motion.h1
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          className="text-4xl md:text-6xl font-bold tracking-tight"
        >
          Achievements
        </motion.h1>
        <p className="mt-4 text-gray-500 text-base md:text-lg">
          Milestones and accomplishments so far.
        </p>
      </section>

      {/* Stats strip — like company logos strip */}
      <section className="max-w-4xl mx-auto px-6 pb-12">
        <div className="grid grid-cols-2 md:grid-cols-4 gap-px bg-gray-100 border border-gray-100 rounded-2xl overflow-hidden">
          {stats.map((s) => (
            <div key={s.label} className="bg-white py-6 text-center">
              <p className="text-2xl font-bold tracking-tight">{s.value}</p>
              <p className="text-xs text-gray-400 uppercase tracking-widest mt-1">
                {s.label}
              </p>
            </div>
          ))}
        </div>
      </section>

      {/* Pitstops list */}
      <section className="max-w-3xl mx-auto px-6 pb-20">
        {sections.map((sec, si) => (
          <motion.div
            key={sec.section}
            initial={{ opacity: 0, y: 24 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-40px" }}
            transition={{ duration: 0.5 }}
            className="py-10 border-t border-gray-100 first:border-t-0"
          >
            <Eyebrow>{`0${si + 1} — ${sec.section}`}</Eyebrow>
            <ul className="space-y-4">
              {sec.items.map((item, i) => (
                <li key={i} className="flex gap-3 text-gray-600 leading-relaxed">
                  <span className="mt-2.5 w-1.5 h-1.5 rounded-full bg-gray-900 shrink-0" />
                  <span className="text-[15px]">{item}</span>
                </li>
              ))}
            </ul>
          </motion.div>
        ))}
      </section>
    </PortfolioLayout>
  );
}
