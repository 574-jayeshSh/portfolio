import React, { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { useNavigate } from "react-router-dom";
import SideMenu from "../components/SideMenu";
import Terminal from "../components/Terminal";
import projectsData from "../data/projects";
import { FaFolderOpen } from "react-icons/fa";

export default function Projects() {
  const navigate = useNavigate();
  const [currentIndex, setCurrentIndex] = useState(0);

  const projects = projectsData.content;
  const currentProject = projects[currentIndex];

  const nextProject = () => setCurrentIndex((prev) => (prev + 1) % projects.length);
  const prevProject = () => setCurrentIndex((prev) => (prev - 1 + projects.length) % projects.length);

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
            <h1 className="text-xl font-black tracking-tighter leading-tight uppercase">Mission_Archive</h1>
            <p className="text-[9px] tracking-[0.3em] text-blue-500/60 font-bold uppercase">Deployment_Records_v4.2</p>
          </div>
        </div>

        <div className="flex items-center gap-6">
          <div className="text-right">
             <p className="text-[10px] font-black tracking-widest text-blue-500">MISSION_{currentIndex + 1}/{projects.length}</p>
             <p className="text-[8px] text-white/30 uppercase tracking-[0.4em]">Vault_Access_Active</p>
          </div>
        </div>
      </div>

      {/* SIDE MENU */}
      <SideMenu />

      {/* CENTER STAGE: PROJECT HOLOGRAM */}
      <div className="absolute inset-0 flex items-center justify-center z-10">
        <div className="relative w-full max-w-5xl h-[60vh] flex items-center justify-between px-20">
          
          {/* NAVIGATION BUTTONS */}
          <button onClick={prevProject} className="z-30 p-4 rounded-full border border-blue-500/20 hover:bg-blue-500/10 transition-all text-blue-500 hover:scale-110">
            <motion.span animate={{ x: [-2, 2, -2] }} transition={{ repeat: Infinity, duration: 1.5 }}>◀</motion.span>
          </button>

          <div className="relative flex-1 flex flex-col items-center justify-center">
            <AnimatePresence mode="wait">
              <motion.div
                key={currentIndex}
                initial={{ opacity: 0, y: 50, scale: 0.9 }}
                animate={{ opacity: 1, y: 0, scale: 1 }}
                exit={{ opacity: 0, y: -50, scale: 1.1 }}
                transition={{ duration: 0.5 }}
                className="text-center"
              >
                <div className="w-64 h-64 mx-auto mb-8 relative">
                   {/* WIREFRAME BOX EFFECT */}
                   <div className="absolute inset-0 border-2 border-blue-500/20 rounded-3xl rotate-45 animate-pulse" />
                   <div className="absolute inset-4 border border-blue-400/10 rounded-3xl -rotate-12" />
                   <div className="absolute inset-0 flex items-center justify-center text-8xl text-blue-500/40">
                      <FaFolderOpen />
                   </div>
                   {/* SCAN LINE */}
                   <motion.div 
                      animate={{ top: ["0%", "100%", "0%"] }}
                      transition={{ duration: 3, repeat: Infinity, ease: "linear" }}
                      className="absolute left-0 right-0 h-[1px] bg-blue-500 shadow-[0_0_10px_#3b82f6] z-30"
                   />
                </div>
                <h2 className="text-5xl font-black italic tracking-tighter text-white mb-2 uppercase">
                  {currentProject.name}
                </h2>
                <div className="flex justify-center gap-3">
                  {currentProject.tech.map(t => (
                    <span key={t} className="text-[10px] font-black text-blue-400 border border-blue-400/30 px-2 py-0.5 rounded">
                      {t.toUpperCase()}
                    </span>
                  ))}
                </div>
              </motion.div>
            </AnimatePresence>
          </div>

          <button onClick={nextProject} className="z-30 p-4 rounded-full border border-blue-500/20 hover:bg-blue-500/10 transition-all text-blue-500 hover:scale-110">
            <motion.span animate={{ x: [2, -2, 2] }} transition={{ repeat: Infinity, duration: 1.5 }}>▶</motion.span>
          </button>
        </div>
      </div>

      {/* DATA OVERLAYS */}
      <div className="absolute inset-0 z-20 pointer-events-none">
        
        {/* LEFT: MISSION BRIEFING
        <div className="absolute top-28  right-10 w-96 pointer-events-auto">
          <Terminal text={`MISSION_BRIEFING:\n------------------\n${currentProject.description}\n\nSTATUS: SUCCESSFUL_DEPLOYMENT\nOBJECTIVE: ACHIEVED`} />
        </div> */}

        {/* RIGHT: MISSION DEPLOYMENT */}
        <div className="absolute right-10 bottom-10 w-80 pointer-events-auto text-right">
           <button className="px-10 py-5 rounded-2xl bg-blue-500 text-white font-black tracking-[0.4em] uppercase text-[10px] hover:scale-[1.05] transition-all shadow-[0_0_30px_rgba(59,130,246,0.3)] mb-4">
             Launch_Mission
           </button>
           <p className="text-[8px] font-black text-blue-500/40 tracking-[0.2em] uppercase">WARNING: External Link May Lead to Production Server</p>
        </div>
      </div>
    </div>
  );
}