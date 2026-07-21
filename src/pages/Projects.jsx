import React, { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { useNavigate } from "react-router-dom";
import SideMenu from "../components/SideMenu";
import MobileMenu from "../components/MobileMenu";
import projectsData from "../data/projects";
import { useGitHubRepos, getLanguageColor } from "../hooks/useGitHub";
import { FaFolderOpen, FaExternalLinkAlt, FaStar } from "react-icons/fa";

export default function Projects() {
  const navigate = useNavigate();
  const [currentIndex, setCurrentIndex] = useState(0);
  const { repos, loading } = useGitHubRepos();

  // Merge static data with live GitHub data
  const projects = repos
    .filter(r => r.name !== "574-jayeshSh" && r.name !== "portfolio")
    .map(repo => {
      const staticProject = projectsData.content.find(p =>
        p.name.toLowerCase().replace(/\s+/g, '_') === repo.name.toLowerCase() ||
        p.name.toLowerCase().replace(/\s+/g, '') === repo.name.toLowerCase()
      );
      return {
        name: repo.name.replace(/_/g, ' ').replace(/-/g, ' '),
        description: staticProject?.description || repo.description || "No description available.",
        tech: repo.language ? [repo.language] : staticProject?.tech || [],
        link: repo.homepage || repo.html_url,
        github: repo.html_url,
        stars: repo.stargazers_count,
        forks: repo.forks_count,
        updated: repo.updated_at,
        color: getLanguageColor(repo.language),
      };
    });

  const currentProject = projects[currentIndex] || projects[0];
  const nextProject = () => setCurrentIndex((prev) => (prev + 1) % projects.length);
  const prevProject = () => setCurrentIndex((prev) => (prev - 1 + projects.length) % projects.length);

  if (loading) {
    return (
      <div className="relative w-full h-screen overflow-hidden bg-[#020617] text-white flex items-center justify-center">
        <div className="text-center">
          <div className="w-16 h-16 border-2 border-blue-500/20 border-t-blue-500 rounded-full animate-spin mx-auto mb-4" />
          <p className="text-[10px] text-white/40 tracking-[0.3em] uppercase">Loading Mission Data...</p>
        </div>
      </div>
    );
  }

  return (
    <div className="relative w-full min-h-screen md:h-screen overflow-auto md:overflow-hidden bg-[#020617] text-white font-outfit">
      {/* BACKGROUND */}
      <div className="absolute inset-0 bg-[linear-gradient(to_right,#1e293b_1px,transparent_1px),linear-gradient(to_bottom,#1e293b_1px,transparent_1px)] bg-[size:40px_40px] opacity-20" />

      {/* TOP BAR */}
      <div className="absolute top-0 left-0 w-full px-4 md:px-8 py-5 flex justify-between items-center z-50 border-b border-white/5 backdrop-blur-sm bg-black/20">
        <div className="flex items-center gap-4">
          <MobileMenu />
          <div onClick={() => navigate("/")} className="w-10 h-10 border border-blue-500/50 rounded-lg items-center justify-center font-black text-blue-500 bg-blue-500/5 cursor-pointer hover:bg-blue-500/10 transition-all hidden md:flex">
            JS
          </div>
          <div>
            <h1 className="text-lg md:text-xl font-black tracking-tighter leading-tight uppercase">Mission_Archive</h1>
            <p className="text-[9px] tracking-[0.3em] text-blue-500/60 font-bold uppercase">Deployment_Records_v4.2</p>
          </div>
        </div>
        <div className="text-right">
          <p className="text-[10px] font-black tracking-widest text-blue-500">MISSION_{currentIndex + 1}/{projects.length}</p>
          <p className="text-[8px] text-white/30 uppercase tracking-[0.4em] hidden sm:block">Vault_Access_Active</p>
        </div>
      </div>

      {/* SIDE MENU - desktop */}
      <div className="hidden md:block">
        <SideMenu />
      </div>

      {/* CENTER STAGE */}
      <div className="absolute inset-0 flex items-center justify-center z-10 pt-24 pb-20 md:pt-0 md:pb-0">
        <div className="relative w-full max-w-5xl h-auto md:h-[60vh] flex flex-col md:flex-row items-center justify-between px-4 md:px-20 gap-6">
          
          {/* PREV */}
          <button onClick={prevProject} className="z-30 p-3 md:p-4 rounded-full border border-blue-500/20 hover:bg-blue-500/10 transition-all text-blue-500 hover:scale-110 order-2 md:order-1">
            <motion.span animate={{ x: [-2, 2, -2] }} transition={{ repeat: Infinity, duration: 1.5 }} className="text-sm">◀</motion.span>
          </button>

          {/* PROJECT DISPLAY */}
          <div className="relative flex-1 flex flex-col items-center justify-center order-1 md:order-2">
            <AnimatePresence mode="wait">
              <motion.div key={currentIndex} initial={{ opacity: 0, y: 50, scale: 0.9 }} animate={{ opacity: 1, y: 0, scale: 1 }} exit={{ opacity: 0, y: -50, scale: 1.1 }} transition={{ duration: 0.5 }} className="text-center w-full">
                <div className="w-40 h-40 md:w-64 md:h-64 mx-auto mb-6 md:mb-8 relative">
                  <div className="absolute inset-0 border-2 border-blue-500/20 rounded-3xl rotate-45 animate-pulse" />
                  <div className="absolute inset-4 border border-blue-400/10 rounded-3xl -rotate-12" />
                  <div className="absolute inset-0 flex items-center justify-center text-6xl md:text-8xl" style={{ color: currentProject.color + '66' }}>
                    <FaFolderOpen />
                  </div>
                  <motion.div animate={{ top: ["0%", "100%", "0%"] }} transition={{ duration: 3, repeat: Infinity, ease: "linear" }}
                    className="absolute left-0 right-0 h-[1px] bg-blue-500 shadow-[0_0_10px_#3b82f6] z-30"
                  />
                </div>
                <h2 className="text-3xl md:text-5xl font-black italic tracking-tighter text-white mb-2 uppercase">
                  {currentProject.name}
                </h2>
                <p className="text-xs text-white/40 mb-4 max-w-md mx-auto line-clamp-2">{currentProject.description}</p>
                <div className="flex justify-center gap-2 flex-wrap mb-4">
                  {currentProject.tech.map(t => (
                    <span key={t} className="text-[10px] font-black border border-blue-400/30 px-2 py-0.5 rounded" style={{ color: currentProject.color }}>
                      {t.toUpperCase()}
                    </span>
                  ))}
                </div>
                {(currentProject.stars > 0 || currentProject.forks > 0) && (
                  <div className="flex justify-center gap-4 text-[10px] text-white/30">
                    {currentProject.stars > 0 && <span className="flex items-center gap-1"><FaStar className="text-yellow-500" /> {currentProject.stars}</span>}
                    {currentProject.forks > 0 && <span>Forks: {currentProject.forks}</span>}
                  </div>
                )}
              </motion.div>
            </AnimatePresence>
          </div>

          {/* NEXT */}
          <button onClick={nextProject} className="z-30 p-3 md:p-4 rounded-full border border-blue-500/20 hover:bg-blue-500/10 transition-all text-blue-500 hover:scale-110 order-3">
            <motion.span animate={{ x: [2, -2, 2] }} transition={{ repeat: Infinity, duration: 1.5 }} className="text-sm">▶</motion.span>
          </button>
        </div>
      </div>

      {/* BOTTOM ACTIONS */}
      <div className="absolute bottom-6 md:bottom-10 left-4 right-4 md:left-auto md:right-10 md:w-80 z-20 flex flex-col md:items-end gap-3">
        <div className="flex gap-3 w-full md:w-auto">
          <a href={currentProject?.github} target="_blank" rel="noopener noreferrer"
            className="flex-1 md:flex-none px-6 py-3 md:py-4 rounded-xl bg-blue-500 text-white font-black tracking-[0.3em] uppercase text-[10px] hover:scale-[1.05] transition-all shadow-[0_0_30px_rgba(59,130,246,0.3)] flex items-center justify-center gap-2"
          >
            <FaExternalLinkAlt /> Launch_Mission
          </a>
        </div>
        <p className="text-[8px] font-black text-blue-500/40 tracking-[0.2em] uppercase text-center md:text-right">
          Link leads to GitHub repository
        </p>
      </div>
    </div>
  );
}
