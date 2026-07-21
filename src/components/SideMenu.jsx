import React from "react";
import { useNavigate, useLocation } from "react-router-dom";
import { motion } from "framer-motion";
import { FaUser, FaCode, FaFolder, FaTrophy, FaEnvelope } from "react-icons/fa";

const menuItems = [
  { title: "About", icon: <FaUser />, path: "/pages/about" },
  { title: "Skills", icon: <FaCode />, path: "/pages/skills" },
  { title: "Projects", icon: <FaFolder />, path: "/pages/projects" },
  { title: "Achievements", icon: <FaTrophy />, path: "/pages/achievements" },
  { title: "Contact", icon: <FaEnvelope />, path: "/pages/contact" },
];

export default function SideMenu() {
  const navigate = useNavigate();
  const location = useLocation();

  return (
    <div className="hidden md:flex fixed left-0 top-0 h-full w-16 lg:w-56 flex-col border-r border-gray-100 bg-white z-50 py-4">
      {/* Logo */}
      <div className="px-4 mb-6">
        <button onClick={() => navigate("/")} className="w-10 h-10 rounded-xl bg-blue-50 flex items-center justify-center font-bold text-blue-600 text-sm hover:bg-blue-100 transition-colors cursor-pointer">
          JS
        </button>
      </div>

      {/* Nav Items */}
      <nav className="flex-1 px-2 space-y-1">
        {menuItems.map((item) => {
          const isActive = location.pathname === item.path;
          return (
            <button
              key={item.title}
              onClick={() => navigate(item.path)}
              className={`w-full flex items-center gap-3 px-3 py-2.5 rounded-xl text-sm font-medium transition-all cursor-pointer ${
                isActive
                  ? "bg-blue-50 text-blue-600"
                  : "text-gray-500 hover:bg-gray-50 hover:text-gray-900"
              }`}
            >
              <span className="text-base">{item.icon}</span>
              <span className="hidden lg:inline">{item.title}</span>
              {isActive && (
                <motion.div
                  layoutId="side-indicator"
                  className="absolute left-0 w-0.5 h-6 bg-blue-600 rounded-r"
                />
              )}
            </button>
          );
        })}
      </nav>

      {/* Footer */}
      <div className="px-4 pt-4 border-t border-gray-100">
        <p className="text-[10px] text-gray-300 tracking-wider hidden lg:block">Portfolio v2.0</p>
      </div>
    </div>
  );
}
