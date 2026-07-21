import React, { useState } from 'react';
import { useNavigate, useLocation } from 'react-router-dom';
import { motion, AnimatePresence } from 'framer-motion';
import { FaBars, FaTimes, FaUser, FaCode, FaFolder, FaTrophy, FaEnvelope } from 'react-icons/fa';

const menuItems = [
  { title: "About", icon: <FaUser />, path: "/pages/about" },
  { title: "Skills", icon: <FaCode />, path: "/pages/skills" },
  { title: "Projects", icon: <FaFolder />, path: "/pages/projects" },
  { title: "Achievements", icon: <FaTrophy />, path: "/pages/achievements" },
  { title: "Contact", icon: <FaEnvelope />, path: "/pages/contact" },
];

export default function MobileMenu() {
  const [open, setOpen] = useState(false);
  const navigate = useNavigate();
  const location = useLocation();

  return (
    <div className="md:hidden">
      <button onClick={() => setOpen(true)} className="p-2 rounded-lg text-gray-500 hover:text-gray-900 hover:bg-gray-100 transition-all">
        <FaBars size={18} />
      </button>

      <AnimatePresence>
        {open && (
          <>
            <motion.div initial={{ opacity: 0 }} animate={{ opacity: 1 }} exit={{ opacity: 0 }}
              onClick={() => setOpen(false)} className="fixed inset-0 bg-black/20 backdrop-blur-sm z-[70]"
            />
            <motion.div initial={{ x: '-100%' }} animate={{ x: 0 }} exit={{ x: '-100%' }}
              transition={{ type: 'spring', damping: 25, stiffness: 200 }}
              className="fixed left-0 top-0 h-full w-72 bg-white shadow-2xl z-[80] p-6"
            >
              <div className="flex justify-between items-center mb-8">
                <span className="font-bold text-gray-900 text-lg">Navigation</span>
                <button onClick={() => setOpen(false)} className="p-2 rounded-lg text-gray-400 hover:text-gray-600 hover:bg-gray-100 transition-colors">
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
                      className={`w-full flex items-center gap-3 px-4 py-3 rounded-xl text-sm font-medium transition-all ${
                        isActive ? "bg-blue-50 text-blue-600" : "text-gray-600 hover:bg-gray-50 hover:text-gray-900"
                      }`}
                    >
                      <span>{item.icon}</span>
                      {item.title}
                    </button>
                  );
                })}
              </div>
            </motion.div>
          </>
        )}
      </AnimatePresence>
    </div>
  );
}
