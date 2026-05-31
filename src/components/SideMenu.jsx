import React from "react";
import { useNavigate, useLocation } from "react-router-dom";
import { motion } from "framer-motion";

const SideMenu = () => {
  const navigate = useNavigate();
  const location = useLocation();

  const menuItems = [
    { title: "PROFILE", sub: "OVERVIEW", path: "/pages/about" },
    { title: "SKILLS", sub: "ABILITIES", path: "/pages/skills" },
    { title: "PROJECTS", sub: "WORK", path: "/pages/projects" },
    { title: "MISSIONS", sub: "GOALS", path: "/pages/achievements" },
    { title: "CONTACT", sub: "REACH ME", path: "/pages/contact" },
  ];

  return (
    <div className="fixed left-0 top-1/2 -translate-y-1/2 z-50 flex flex-col gap-1 pl-6">
      {menuItems.map((item) => {
        const isActive = location.pathname === item.path;
        return (
          <button
            key={item.title}
            onClick={() => navigate(item.path)}
            className="group relative flex flex-col items-start py-3 pr-12 transition-all duration-300 outline-none"
          >
            {/* ACTIVE INDICATOR LINE */}
            {isActive && (
              <motion.div
                layoutId="menu-indicator"
                className="absolute left-[-24px] top-0 bottom-0 w-1 bg-blue-500 shadow-[0_0_15px_rgba(59,130,246,0.8)]"
              />
            )}

            {/* HOVER GLOW EFFECT */}
            <div className={`
              absolute inset-0 bg-gradient-to-r from-blue-500/10 to-transparent 
              opacity-0 group-hover:opacity-100 transition-opacity duration-300 -z-10
              ${isActive ? "opacity-100" : ""}
            `} />

            {/* TEXT CONTENT */}
            <div className="flex flex-col items-start">
              <span className={`
                text-xs font-black tracking-[0.2em] transition-all duration-300
                ${isActive ? "text-blue-500 translate-x-2" : "text-white/40 group-hover:text-white group-hover:translate-x-1"}
              `}>
                {item.title}
              </span>
              <span className={`
                text-[8px] font-bold tracking-widest mt-0.5 transition-all duration-300
                ${isActive ? "text-blue-500/60 translate-x-2" : "text-white/20 group-hover:text-white/40 group-hover:translate-x-1"}
              `}>
                {item.sub}
              </span>
            </div>

            {/* BACKGROUND BAR (SUBTLE) */}
            <div className={`
              absolute left-0 right-0 bottom-0 h-[1px] bg-white/5
              ${isActive ? "bg-blue-500/20" : ""}
            `} />
          </button>
        );
      })}
    </div>
  );
};

export default SideMenu;
