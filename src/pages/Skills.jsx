import React, { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { useNavigate } from "react-router-dom";
import SideMenu from "../components/SideMenu";
import MobileMenu from "../components/MobileMenu";
import skillsData from "../data/skills";
import { useGitHubRepos, getLanguageColor } from "../hooks/useGitHub";
import { FaCode, FaLayerGroup, FaWrench, FaMicrochip } from "react-icons/fa";

export default function Skills() {
  const navigate = useNavigate();
  const [catIndex, setCatIndex] = useState(0);
  const { repos } = useGitHubRepos();

  const categories = [
    { id: "LANGUAGES", label: "Core_Languages", data: skillsData.content.languages, icon: <FaCode /> },
    { id: "FRAMEWORKS", label: "Dev_Frameworks", data: skillsData.content.frameworks, icon: <FaLayerGroup /> },
    { id: "TOOLS", label: "System_Tools", data: skillsData.content.tools, icon: <FaWrench /> },
    { id: "CORE", label: "CS_Fundamentals", data: skillsData.content.coreConcepts, icon: <FaMicrochip /> },
  ];

  const nextCat = () => setCatIndex((prev) => (prev + 1) % categories.length);
  const prevCat = () => setCatIndex((prev) => (prev - 1 + categories.length) % categories.length);
  const currentCategory = categories[catIndex];

  const langCount = {};
  repos.forEach(r => { if (r.language) langCount[r.language] = (langCount[r.language] || 0) + 1; });
  const topLangs = Object.entries(langCount).sort((a, b) => b[1] - a[1]).slice(0, 6);
  const totalRepos = repos.length || 1;

  return (
    <div className="relative w-full min-h-screen md:h-screen overflow-auto md:overflow-hidden bg-[#020617] text-white font-outfit">
      <div className="absolute inset-0 bg-[linear-gradient(to_right,#1e293b_1px,transparent_1px),linear-gradient(to_bottom,#1e293b_1px,transparent_1px)] bg-[size:40px_40px] opacity-20" />

      <div className="absolute top-0 left-0 w-full px-4 md:px-8 py-5 flex justify-between items-center z-50 border-b border-white/5 backdrop-blur-sm bg-black/20">
        <div className="flex items-center gap-4">
          <MobileMenu />
          <div onClick={() => navigate("/")} className="w-10 h-10 border border-blue-500/50 rounded-lg items-center justify-center font-black text-blue-500 bg-blue-500/5 cursor-pointer hover:bg-blue-500/10 transition-all hidden md:flex">
            JS
          </div>
          <div>
            <h1 className="text-lg md:text-xl font-black tracking-tighter leading-tight uppercase">Ability_Matrix</h1>
            <p className="text-[9px] tracking-[0.3em] text-blue-500/60 font-bold uppercase">Tech_Stack_Verification</p>
          </div>
        </div>
      </div>

      <div className="hidden md:block">
        <SideMenu />
      </div>

      <div className="pt-24 pb-10 px-4 md:px-0 md:pt-0 flex flex-col items-center justify-center min-h-screen md:h-screen md:pl-20 md:pr-80 z-10 relative">
        <div className="flex items-center gap-4 mb-6">
          <button onClick={prevCat} className="p-3 rounded-full border border-blue-500/20 hover:bg-blue-500/10 transition-all text-blue-500">
            <span className="block text-sm">◀</span>
          </button>

          <div className="relative w-[280px] h-[280px] md:w-[350px] md:h-[350px] flex items-center justify-center">
            <motion.div animate={{ rotate: 360 }} transition={{ duration: 20, repeat: Infinity, ease: "linear" }} className="absolute inset-0 border border-blue-500/10 rounded-full" />
            <motion.div animate={{ rotate: -360 }} transition={{ duration: 15, repeat: Infinity, ease: "linear" }} className="absolute inset-10 border border-blue-400/5 rounded-full" />
            <AnimatePresence mode="wait">
              <motion.div key={catIndex} initial={{ opacity: 0, scale: 0.8 }} animate={{ opacity: 1, scale: 1 }} exit={{ opacity: 0, scale: 1.2 }} className="flex flex-col items-center z-20">
                <div className="text-5xl md:text-6xl mb-4 text-blue-500 drop-shadow-[0_0_20px_rgba(59,130,246,0.6)]">
                  {currentCategory.icon}
                </div>
                <h2 className="text-sm md:text-lg font-black italic text-blue-400 tracking-[0.2em] uppercase text-center">
                  {currentCategory.label}
                </h2>
              </motion.div>
            </AnimatePresence>
            <motion.div animate={{ top: ["20%", "80%", "20%"] }} transition={{ duration: 3, repeat: Infinity, ease: "easeInOut" }} className="absolute left-10 right-10 h-[1px] bg-blue-400/50 shadow-[0_0_15px_#3b82f6] z-30" />
          </div>

          <button onClick={nextCat} className="p-3 rounded-full border border-blue-500/20 hover:bg-blue-500/10 transition-all text-blue-500">
            <span className="block text-sm">▶</span>
          </button>
        </div>

        <div className="w-full max-w-lg">
          <AnimatePresence mode="wait">
            <motion.div key={catIndex} initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} exit={{ opacity: 0, y: -20 }} className="grid grid-cols-2 gap-2">
              {currentCategory.data.map((skill, idx) => (
                <motion.div key={skill} initial={{ opacity: 0, scale: 0.9 }} animate={{ opacity: 1, scale: 1 }} transition={{ delay: idx * 0.05 }}
                  className="p-3 rounded-xl bg-blue-500/5 border border-blue-500/10 flex items-center gap-3 hover:border-blue-500/40 hover:bg-blue-500/10 transition-all group"
                >
                  <div className="w-1.5 h-1.5 rounded-full bg-blue-500 shadow-[0_0_5px_#3b82f6]" />
                  <span className="text-[9px] font-black tracking-widest text-white/70 group-hover:text-white uppercase truncate">{skill}</span>
                </motion.div>
              ))}
            </motion.div>
          </AnimatePresence>
        </div>
      </div>

      <div className="hidden md:block absolute right-10 top-1/2 -translate-y-1/2 w-72 z-20 space-y-4">
        <div className="p-6 rounded-2xl bg-black/40 border border-blue-500/10 backdrop-blur-xl">
          <h3 className="text-[10px] font-black tracking-[0.4em] text-blue-500 mb-6 uppercase">Language_Distribution</h3>
          <div className="space-y-4">
            {topLangs.map(([lang, count], idx) => (
              <div key={lang}>
                <div className="flex justify-between text-[9px] font-black mb-1.5 tracking-widest text-white/40">
                  <span>{lang}</span>
                  <span style={{ color: getLanguageColor(lang) }}>{Math.round((count / totalRepos) * 100)}%</span>
                </div>
                <div className="h-[3px] w-full bg-white/5 rounded-full overflow-hidden">
                  <motion.div initial={{ width: 0 }} animate={{ width: (count / totalRepos) * 100 + '%' }} transition={{ duration: 1.5, delay: idx * 0.2 }}
                    className="h-full rounded-full shadow-[0_0_8px_currentColor]" style={{ backgroundColor: getLanguageColor(lang) }}
                  />
                </div>
              </div>
            ))}
          </div>
          <div className="mt-6 pt-4 border-t border-white/5">
            <div className="flex items-center gap-3">
              <div className="w-8 h-8 rounded border border-blue-500/20 flex items-center justify-center text-blue-500 font-black text-xs">XP</div>
              <div>
                <p className="text-[8px] font-black text-white/30 uppercase tracking-widest">Total Mastery</p>
                <p className="text-xs font-black text-blue-500 tracking-tighter">LEVEL_{Math.min(50 + repos.length * 3, 99)}_SPECIALIST</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
