import React, { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { useNavigate } from "react-router-dom";
import SideMenu from "../components/SideMenu";
import MobileMenu from "../components/MobileMenu";
import Terminal from "../components/Terminal";
import GitHubStats from "../components/GitHubStats";
import RecentActivity from "../components/RecentActivity";
import aboutData from "../data/about";
import { useGitHubProfile } from "../hooks/useGitHub";

export default function AboutPage() {
  const [activeTab, setActiveTab] = useState("CORE");
  const navigate = useNavigate();
  const { profile } = useGitHubProfile();

  const systemLogs = [
    "LOG: Memory initialized...",
    "LOG: Neural networks active...",
    "LOG: MERN drivers loaded...",
    "LOG: AI/ML module stand-by...",
    "LOG: Gym playlist synced...",
  ];

  const coreAttributes = [
    { label: "Algorithms", val: "95%" },
    { label: "Architecture", val: "88%" },
    { label: "Integration", val: "92%" },
    { label: "Gym x Code", val: "100%" },
  ];

  return (
    <div className="relative w-full min-h-screen md:h-screen overflow-auto md:overflow-hidden bg-[#0a0f1e] text-white">
      {/* FIXED GRID BG */}
      <div className="fixed inset-0 pointer-events-none opacity-20 z-0 bg-[linear-gradient(to_right,#1e293b_1px,transparent_1px),linear-gradient(to_bottom,#1e293b_1px,transparent_1px)] bg-[size:40px_40px] [mask-image:radial-gradient(ellipse_60%_50%_at_50%_0%,#000_70%,transparent_100%)]" />

      {/* HERO SECTION */}
      <section className="relative min-h-screen md:h-screen overflow-hidden flex items-center justify-center z-10">
        {/* TOP BAR */}
        <div className="absolute top-0 left-0 w-full px-4 md:px-8 py-5 flex justify-between items-center z-50 border-b border-white/5 backdrop-blur-sm bg-black/20">
          <div className="flex items-center gap-4">
            <MobileMenu />
            <div onClick={() => navigate("/")} className="w-10 h-10 border border-blue-500/50 rounded-lg items-center justify-center font-black text-blue-500 bg-[rgba(59,130,246,0.03)] cursor-pointer hover:bg-blue-500/10 transition-all hidden md:flex">
              JS
            </div>
            <div>
              <h3 className="text-lg md:text-xl font-black font-commissioner">Jayesh Sharma</h3>
              <p className="text-gray-500 text-xs md:text-sm">{aboutData.tagline}</p>
            </div>
          </div>
          <div className="flex gap-1">
            {["CORE", "STATS", "INTEL"].map((tab) => (
              <button key={tab} onClick={() => setActiveTab(tab)}
                className={`px-3 md:px-6 py-2 rounded-md text-[10px] font-black tracking-[0.2em] transition-all duration-300 ${
                  activeTab === tab
                    ? "bg-blue-500 text-white shadow-[0_0_15px_rgba(59,130,246,0.15)]"
                    : "text-white/40 hover:text-white hover:bg-white/5"
                }`}
              >
                {tab}
              </button>
            ))}
          </div>
        </div>

        {/* SIDE MENU - desktop */}
        <div className="hidden md:block">
          <SideMenu />
        </div>

        {/* CENTER MODEL */}
        <div className="relative z-20 flex items-center justify-center px-4">
          <div className="relative h-[50vh] md:h-[85vh] aspect-[2/3] max-w-[300px] md:max-w-none">
            <motion.div animate={{ top: ["0%", "100%", "0%"] }} transition={{ duration: 4, repeat: Infinity, ease: "linear" }}
              className="absolute left-0 right-0 h-[2px] bg-blue-400 shadow-[0_0_15px_#3b82f6] z-30 opacity-50"
            />
            <motion.img src="/model.png" alt="specialist" initial={{ opacity: 0, scale: 0.8 }} animate={{ opacity: 1, scale: 1 }} transition={{ duration: 1 }}
              className="h-full w-full object-contain drop-shadow-[0_0_50px_rgba(59,130,246,0.3)] opacity-90 grayscale-[0.2] contrast-125"
            />
            <div className="absolute bottom-0 left-1/2 -translate-x-1/2 w-[80%] h-20 bg-[rgba(59,130,246,0.04)] blur-[60px] rounded-full" />
          </div>
        </div>

        {/* LEFT TERMINAL */}
        <div className="hidden lg:block absolute left-20 bottom-10 z-30 w-96">
          <Terminal text={aboutData.bio} />
        </div>

        {/* RIGHT PANEL */}
        <div className="absolute right-4 md:right-10 top-28 md:top-32 z-30 w-72 md:w-80 space-y-4 md:space-y-6">
          <AnimatePresence mode="wait">
            {activeTab === "CORE" && (
              <motion.div key="CORE" initial={{ opacity: 0, x: 20 }} animate={{ opacity: 1, x: 0 }} exit={{ opacity: 0, x: -20 }} className="space-y-4">
                <div className="p-5 md:p-6 rounded-2xl glass-card border border-[rgba(59,130,246,0.08)] backdrop-blur-xl">
                  <h3 className="text-[10px] font-black tracking-[0.4em] text-blue-500 mb-5 uppercase">System_Attributes</h3>
                  {coreAttributes.map((attr) => (
                    <div key={attr.label} className="mb-3">
                      <div className="flex justify-between text-[9px] font-bold mb-1 text-white/50 uppercase tracking-widest">
                        <span>{attr.label}</span>
                        <span className="text-blue-400">{attr.val}</span>
                      </div>
                      <div className="h-[2px] w-full bg-white/5 rounded-full overflow-hidden">
                        <motion.div initial={{ width: 0 }} animate={{ width: attr.val }} transition={{ duration: 1.5, ease: "circOut" }}
                          className="h-full bg-blue-500 shadow-[0_0_10px_#3b82f6]"
                        />
                      </div>
                    </div>
                  ))}
                </div>
              </motion.div>
            )}
            {activeTab === "STATS" && (
              <motion.div key="STATS" initial={{ opacity: 0, x: 20 }} animate={{ opacity: 1, x: 0 }} exit={{ opacity: 0, x: -20 }}>
                <div className="p-5 md:p-6 rounded-2xl glass-card border border-[rgba(59,130,246,0.08)] backdrop-blur-xl">
                  <h3 className="text-[10px] font-black tracking-[0.4em] text-blue-500 mb-5 uppercase">Github_Analytics</h3>
                  <GitHubStats />
                </div>
              </motion.div>
            )}
            {activeTab === "INTEL" && (
              <motion.div key="INTEL" initial={{ opacity: 0, x: 20 }} animate={{ opacity: 1, x: 0 }} exit={{ opacity: 0, x: -20 }}>
                <div className="p-5 md:p-6 rounded-2xl glass-card border border-[rgba(59,130,246,0.08)] backdrop-blur-xl">
                  <h3 className="text-[10px] font-black tracking-[0.4em] text-blue-500 mb-5 uppercase">Recent_Activity</h3>
                  <RecentActivity />
                </div>
              </motion.div>
            )}
          </AnimatePresence>

          <button onClick={() => navigate("/pages/contact")}
            className="w-full py-4 md:py-5 rounded-2xl bg-blue-500 text-white font-black tracking-[0.4em] uppercase text-[10px] hover:scale-[1.02] transition-all shadow-[0_0_20px_rgba(59,130,246,0.12)] cursor-pointer"
          >
            Deploy_Specialist
          </button>
        </div>

        {/* LOGS */}
        <div className="hidden md:block absolute right-10 bottom-10 z-30 text-right space-y-1">
          {systemLogs.map((log, i) => (
            <motion.p key={i} initial={{ opacity: 0 }} animate={{ opacity: 0.3 }} transition={{ delay: i * 0.5 }}
              className="text-[9px] font-mono tracking-tighter"
            >
              {log}
            </motion.p>
          ))}
        </div>
      </section>

      {/* ABOUT SECTION */}
      <section className="relative py-20 md:py-40 px-4 md:px-10 z-20">
        <div className="max-w-7xl mx-auto grid lg:grid-cols-2 gap-12 md:gap-24 items-center">
          <motion.div initial={{ opacity: 0, x: -100 }} whileInView={{ opacity: 1, x: 0 }} transition={{ duration: 1 }} viewport={{ once: true }}>
            <p className="text-blue-500 uppercase tracking-[0.4em] text-sm mb-6">Vision</p>
            <h2 className="text-4xl md:text-5xl lg:text-7xl font-black leading-tight mb-10">
              More than a developer.
            </h2>
            <div className="space-y-6 md:space-y-8 text-white/50 leading-relaxed text-base md:text-lg">
              <p>
                B.Tech CSE student at GEC Ajmer, building projects in MERN, ML, and Python.
                I believe in learning by building - every project teaches something new.
              </p>
              <p>
                My journey started with frontend development, but evolved into system programming,
                algorithm design, machine learning, and full-stack web development.
              </p>
              <p>
                When I'm not coding, you'll find me at the gym. I mix coding logic with gym discipline -
                Push code. Pull weight. Repeat.
              </p>
            </div>
            <div className="mt-8 flex items-center gap-4">
              <a href="https://github.com/574-jayeshSh" target="_blank" rel="noopener noreferrer"
                className="px-6 py-3 rounded-xl bg-blue-500 text-white font-black text-xs tracking-[0.2em] uppercase hover:bg-blue-600 transition-all">
                View GitHub
              </a>
              <a href="mailto:0574.jayesh.sharma@gmail.com"
                className="px-6 py-3 rounded-xl border border-white/10 text-white/60 font-black text-xs tracking-[0.2em] uppercase hover:bg-white/5 transition-all">
                Email Me
              </a>
            </div>
          </motion.div>
          <motion.div initial={{ opacity: 0, y: 100 }} whileInView={{ opacity: 1, y: 0 }} transition={{ duration: 1 }} viewport={{ once: true }} className="relative">
            <div className="absolute inset-0 bg-blue-500/20 blur-[120px] rounded-full" />
            <img src="/model.png" alt="model" className="relative z-10 w-full object-contain drop-shadow-[0_0_60px_rgba(59,130,246,0.4)]" />
          </motion.div>
        </div>
      </section>
    </div>
  );
}
