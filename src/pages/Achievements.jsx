import React from "react";
import { Motion } from "framer-motion";
import { useNavigate } from "react-router-dom";
import SideMenu from "../components/SideMenu";
import achievementsData from "../data/achievements";
import { FaTrophy } from "react-icons/fa";

export default function Achievements() {
  const navigate = useNavigate();

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
            <h1 className="text-xl font-black tracking-tighter leading-tight uppercase">Hall_of_Fame</h1>
            <p className="text-[9px] tracking-[0.3em] text-blue-500/60 font-bold uppercase">Achievement_Protocol_v2</p>
          </div>
        </div>

        <div className="flex gap-4 items-center">
           <div className="h-2 w-32 bg-white/5 rounded-full overflow-hidden">
             <Motion.div animate={{ width: "85%" }} transition={{ duration: 2 }} className="h-full bg-blue-500 shadow-[0_0_10px_#3b82f6]" />
           </div>
           <p className="text-[10px] font-black tracking-widest text-blue-500">LEVEL_85</p>
        </div>
      </div>

      {/* SIDE MENU */}
      <SideMenu />

      {/* CENTER CONTENT */}
      <div className="absolute left-64 right-10 top-32 bottom-10 z-20 overflow-y-auto custom-scrollbar pr-10">
        <Motion.div initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }}>
          
          <div className="space-y-16">
            {achievementsData.content.map((section, idx) => (
              <div key={idx} className="relative">
                <h3 className="text-[10px] font-black mb-8 text-blue-400 flex items-center gap-6 tracking-[0.5em] uppercase">
                   <span className="bg-blue-500/10 px-3 py-1 rounded border border-blue-500/20">{section.section}</span>
                   <div className="h-[1px] flex-1 bg-gradient-to-r from-blue-500/20 to-transparent" />
                </h3>

                <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                  {section.items.map((item, iIdx) => (
                    <Motion.div 
                      key={iIdx}
                      whileHover={{ x: 10, backgroundColor: "rgba(59,130,246,0.03)" }}
                      className="relative flex items-center gap-8 p-6 rounded-2xl bg-black/40 border border-white/5 hover:border-blue-500/30 transition-all cursor-default group overflow-hidden"
                    >
                      {/* HOLO ICON */}
                      <div className="relative w-16 h-16 rounded-2xl bg-blue-500/5 flex items-center justify-center text-3xl text-blue-500/80 group-hover:scale-110 transition-transform">
                        <div className="absolute inset-0 rounded-2xl border border-blue-400/10 rotate-45 group-hover:rotate-90 transition-transform duration-700" />
                        <div className="absolute inset-0 rounded-2xl border border-blue-500/20 -rotate-12 group-hover:-rotate-45 transition-transform duration-700" />
                        <FaTrophy />
                      </div>

                      <div className="flex-1">
                        <span className="text-gray-300 font-black text-sm tracking-tight group-hover:text-white transition-colors block mb-1 uppercase italic">
                          {item}
                        </span>
                        <div className="flex items-center gap-2">
                           <div className="h-1 w-20 bg-white/5 rounded-full overflow-hidden">
                             <div className="h-full bg-blue-500/40 w-full" />
                           </div>
                           <span className="text-[8px] font-bold text-blue-500/50 uppercase">VERIFIED_LOG</span>
                        </div>
                      </div>

                      {/* DECORATIVE SCAN LINE */}
                      <Motion.div 
                        animate={{ left: ["-100%", "200%"] }}
                        transition={{ duration: 5, repeat: Infinity, ease: "linear" }}
                        className="absolute top-0 bottom-0 w-20 bg-gradient-to-r from-transparent via-blue-500/5 to-transparent skew-x-12"
                      />
                    </Motion.div>
                  ))}
                </div>
              </div>
            ))}
          </div>
        </Motion.div>
      </div>

      {/* FOOTER DATA */}
      <div className="absolute bottom-4 left-64 text-[9px] font-bold text-white/10 tracking-[0.3em] uppercase">
        TOTAL_RECORDS_FOUND: {achievementsData.content.reduce((acc, s) => acc + s.items.length, 0)} | SYSTEM_STATUS: SECURE
      </div>
    </div>
  );
}