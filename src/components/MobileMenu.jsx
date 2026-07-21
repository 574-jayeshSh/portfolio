import React, { useState } from 'react';
import { useNavigate, useLocation } from 'react-router-dom';
import { motion, AnimatePresence } from 'framer-motion';
import { FaBars, FaTimes } from 'react-icons/fa';

const menuItems = [
  { title: "PROFILE", sub: "OVERVIEW", path: "/pages/about" },
  { title: "SKILLS", sub: "ABILITIES", path: "/pages/skills" },
  { title: "PROJECTS", sub: "WORK", path: "/pages/projects" },
  { title: "MISSIONS", sub: "GOALS", path: "/pages/achievements" },
  { title: "CONTACT", sub: "REACH ME", path: "/pages/contact" },
];

export default function MobileMenu() {
  const [open, setOpen] = useState(false);
  const navigate = useNavigate();
  const location = useLocation();

  return (
    <div className="md:hidden">
      <button
        onClick={() => setOpen(true)}
        className="p-2 rounded-lg text-white/60 hover:text-white hover:bg-white/5 transition-all z-[60] relative"
      >
        <FaBars size={18} />
      </button>

      <AnimatePresence>
        {open && (
          <>
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              onClick={() => setOpen(false)}
              className="fixed inset-0 bg-black/60 backdrop-blur-sm z-[70]"
            />
            <motion.div
              initial={{ x: '-100%' }}
              animate={{ x: 0 }}
              exit={{ x: '-100%' }}
              transition={{ type: 'spring', damping: 25, stiffness: 200 }}
              className="fixed left-0 top-0 h-full w-64 bg-[#0a0f1e] border-r border-[rgba(59,130,246,0.08)] z-[80] p-6"
            >
              <div className="flex justify-between items-center mb-8">
                <div className="w-8 h-8 border border-[rgba(59,130,246,0.25)] rounded-lg flex items-center justify-center font-black text-blue-500 text-xs bg-[rgba(59,130,246,0.03)]">
                  JS
                </div>
                <button onClick={() => setOpen(false)} className="text-white/40 hover:text-white transition-colors">
                  <FaTimes />
                </button>
              </div>
              <div className="space-y-1">
                {menuItems.map((item) => {
                  const isActive = location.pathname === item.path;
                  return (
                    <button
                      key={item.title}
                      onClick={() => { navigate(item.path); setOpen(false); }}
                      className={`w-full text-left py-3 px-4 rounded-xl transition-all ${
                        isActive
                          ? 'bg-[rgba(59,130,246,0.06)] text-blue-500 border-l-2 border-blue-500'
                          : 'text-white/40 hover:text-white hover:bg-white/5'
                      }`}
                    >
                      <p className="text-xs font-black tracking-[0.2em]">{item.title}</p>
                      <p className="text-[8px] tracking-widest text-white/20 mt-0.5">{item.sub}</p>
                    </button>
                  );
                })}
              </div>
              <div className="absolute bottom-6 left-6 right-6">
                <div className="h-[1px] bg-white/5 mb-4" />
                <p className="text-[8px] text-white/10 tracking-widest uppercase">Terminal OS v2.0</p>
              </div>
            </motion.div>
          </>
        )}
      </AnimatePresence>
    </div>
  );
}
