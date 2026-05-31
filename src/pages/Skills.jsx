import React, { useState } from "react";
import { Motion, AnimatePresence } from "framer-motion";
import { useNavigate } from "react-router-dom";
import SideMenu from "../components/SideMenu";
import skillsData from "../data/skills";
import { FaCode, FaLayerGroup, FaWrench, FaMicrochip } from "react-icons/fa";

export default function Skills() {
  const navigate = useNavigate();
  const [catIndex, setCatIndex] = useState(0);

  const categories = [
    { id: "LANGUAGES", label: "Core_Languages", data: skillsData.content.languages, icon: <FaCode /> },
    { id: "FRAMEWORKS", label: "Dev_Frameworks", data: skillsData.content.frameworks, icon: <FaLayerGroup /> },
    { id: "TOOLS", label: "System_Tools", data: skillsData.content.tools, icon: <FaWrench /> },
    { id: "CORE", label: "CS_Fundamentals", data: skillsData.content.coreConcepts, icon: <FaMicrochip /> },
  ];

  const nextCat = () => setCatIndex((prev) => (prev + 1) % categories.length);
  const prevCat = () => setCatIndex((prev) => (prev - 1 + categories.length) % categories.length);

  const currentCategory = categories[catIndex];

  return (
    <div className="relative w-full h-screen overflow-hidden bg-[#020617] text-white font-outfit">
      
      {/* BACKGROUND GRID */}
      <div className="absolute inset-0 bg-[linear-gradient(to_right,#1e293b_1px,transparent_1px),linear-gradient(to_bottom,#1e293b_1px,transparent_1px)] bg-[size:40px_40px] opacity-20" />

      {/* TOP BAR */}
      <div className="absolute top-0 left-0 w-full px-8 py-5 flex justify-between items-center z-50 border-b border-white/5 backdrop-blur-sm bg-black/20">
        <div className="flex items-center gap-4">
          <div onClick={() => navigate("/")} className="w-10 h-10 border border-blue-500/50 rounded-lg flex items-center justify-center font-black text-blue-500 bg-blue-500/5 cursor-pointer">
            JS
          </div>
          <div>
            <h1 className="text-xl font-black tracking-tighter leading-tight uppercase">Ability_Matrix</h1>
            <p className="text-[9px] tracking-[0.3em] text-blue-500/60 font-bold uppercase">Tech_Stack_Verification</p>
          </div>
        </div>
      </div>

      {/* SIDE MENU */}
      <SideMenu />

      {/* CENTER STAGE: NEURAL CORE */}
      <div className="absolute inset-0 flex flex-col items-center justify-center z-10 pl-20 pr-80">
        
        <div className="relative flex items-center justify-center">
          
          {/* NAVIGATION ARROWS */}
          <div className="absolute -left-32 z-30 pointer-events-auto">
            <button 
              onClick={prevCat}
              className="p-4 rounded-full border border-blue-500/20 hover:bg-blue-500/10 transition-all text-blue-500 group"
            >
              <Motion.span animate={{ x: [-2, 2, -2] }} transition={{ repeat: Infinity, duration: 1.5 }} className="block">◀</Motion.span>
            </button>
          </div>

          <div className="absolute -right-32 z-30 pointer-events-auto">
            <button 
              onClick={nextCat}
              className="p-4 rounded-full border border-blue-500/20 hover:bg-blue-500/10 transition-all text-blue-500 group"
            >
              <Motion.span animate={{ x: [2, -2, 2] }} transition={{ repeat: Infinity, duration: 1.5 }} className="block">▶</Motion.span>
            </button>
          </div>

          {/* ROTATING ORBITS */}
          <div className="relative w-[380px] h-[380px] flex items-center justify-center">
            <Motion.div 
              animate={{ rotate: 360 }}
              transition={{ duration: 20, repeat: Infinity, ease: "linear" }}
              className="absolute inset-0 border border-blue-500/10 rounded-full"
            />
            <Motion.div 
              animate={{ rotate: -360 }}
              transition={{ duration: 15, repeat: Infinity, ease: "linear" }}
              className="absolute inset-10 border border-blue-400/5 rounded-full"
            />

            <AnimatePresence mode="wait">
              <Motion.div
                key={catIndex}
                initial={{ opacity: 0, scale: 0.8 }}
                animate={{ opacity: 1, scale: 1 }}
                exit={{ opacity: 0, scale: 1.2 }}
                className="flex flex-col items-center z-20 pointer-events-none"
              >
                <div className="text-6xl mb-4 text-blue-500 drop-shadow-[0_0_20px_rgba(59,130,246,0.6)]">
                  {currentCategory.icon}
                </div>
                <h2 className="text-lg font-black italic text-blue-400 tracking-[0.2em] uppercase text-center">
                  {currentCategory.label}
                </h2>
              </Motion.div>
            </AnimatePresence>

            {/* HOLOGRAPHIC SCAN LINE */}
            <Motion.div 
              animate={{ top: ["20%", "80%", "20%"] }}
              transition={{ duration: 3, repeat: Infinity, ease: "easeInOut" }}
              className="absolute left-10 right-10 h-[1px] bg-blue-400/50 shadow-[0_0_15px_#3b82f6] z-30"
            />
          </div>
        </div>

        {/* SKILL GRID BELOW THE CIRCLE */}
        <div className="mt-8 w-full max-w-xl pointer-events-auto">
          <AnimatePresence mode="wait">
            <Motion.div 
              key={catIndex}
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -20 }}
              className="grid grid-cols-2 gap-3"
            >
              {currentCategory.data.map((skill, idx) => (
                <Motion.div 
                  key={skill}
                  initial={{ opacity: 0, scale: 0.9 }}
                  animate={{ opacity: 1, scale: 1 }}
                  transition={{ delay: idx * 0.05 }}
                  className="p-3 rounded-xl bg-blue-500/5 border border-blue-500/10 backdrop-blur-sm flex items-center gap-3 hover:border-blue-500/40 hover:bg-blue-500/10 transition-all group"
                >
                  <div className="w-1 h-1 rounded-full bg-blue-500 shadow-[0_0_5px_#3b82f6]" />
                  <span className="text-[9px] font-black tracking-widest text-white/70 group-hover:text-white uppercase truncate">
                    {skill}
                  </span>
                </Motion.div>
              ))}
            </Motion.div>
          </AnimatePresence>
        </div>

      </div>

      {/* RIGHT SIDE STAT BARS (THE "SIDE SKILL BAR") */}
      <div className="absolute right-10 top-1/2 -translate-y-1/2 w-72 z-20 space-y-4">
        <div className="p-6 rounded-2xl bg-black/40 border border-blue-500/10 backdrop-blur-xl">
           <h3 className="text-[10px] font-black tracking-[0.4em] text-blue-500 mb-6 uppercase">Sync_Proficiency</h3>
           
           <div className="space-y-6">
             {categories.map((cat, idx) => (
               <div key={cat.id} className="group">
                  <div className="flex justify-between text-[9px] font-black mb-2 tracking-widest text-white/40 group-hover:text-white transition-colors">
                    <span>{cat.id}</span>
                    <span className="text-blue-500">{95 - (idx * 5)}%</span>
                  </div>
                  <div className="h-[2px] w-full bg-white/5 rounded-full overflow-hidden">
                    <Motion.div 
                      initial={{ width: 0 }}
                      animate={{ width: `${95 - (idx * 5)}%` }}
                      transition={{ duration: 1.5, delay: idx * 0.2 }}
                      className={`h-full bg-blue-500 shadow-[0_0_10px_#3b82f6] ${catIndex === idx ? "opacity-100" : "opacity-30"}`} 
                    />
                  </div>
               </div>
             ))}
           </div>

           <div className="mt-8 pt-6 border-t border-white/5">
              <div className="flex items-center gap-3">
                 <div className="w-8 h-8 rounded border border-blue-500/20 flex items-center justify-center text-blue-500 font-black text-xs">
                    XP
                 </div>
                 <div>
                    <p className="text-[8px] font-black text-white/30 uppercase tracking-widest">Total Mastery</p>
                    <p className="text-xs font-black text-blue-500 tracking-tighter">LEVEL_88_SPECIALIST</p>
                 </div>
              </div>
           </div>
        </div>
      </div>

      {/* SYSTEM OVERLAYS */}
      <div className="absolute bottom-10 left-10 opacity-20 font-mono text-[9px] tracking-widest">
        PROTOCOL: ABILITY_SCAN_v4
        <br />
        SYNC_STATUS: ESTABLISHED
      </div>
    </div>
  );
}