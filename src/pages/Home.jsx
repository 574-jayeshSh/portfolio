import React from 'react';
import { useNavigate } from 'react-router-dom';
import { motion } from 'framer-motion';
import SearchBox from '../components/SearchBox';
import Name from '../components/Name';
import Footer from '../components/Footer';
import SideMenu from '../components/SideMenu';
import MobileMenu from '../components/MobileMenu';
import { FaUser, FaFolder, FaCode, FaTrophy, FaEnvelope } from 'react-icons/fa';

const suggestions = [
  { icon: <FaUser />, label: "About", path: "/pages/about" },
  { icon: <FaFolder />, label: "Projects", path: "/pages/projects" },
  { icon: <FaCode />, label: "Skills", path: "/pages/skills" },
  { icon: <FaTrophy />, label: "Achievements", path: "/pages/achievements" },
  { icon: <FaEnvelope />, label: "Contact", path: "/pages/contact" },
];

export default function Home() {
  const navigate = useNavigate();

  return (
    <div className="min-h-screen flex flex-col bg-white md:pl-16 lg:pl-56">
      <SideMenu />
      {/* TOP NAV - Google style */}
      <div className="flex justify-end items-center px-4 md:px-6 py-3 text-[13px] text-gray-600 font-inter">
        <MobileMenu />
        <a href="https://github.com/574-jayeshSh" target="_blank" rel="noopener noreferrer" className="hover:underline cursor-pointer mr-4 hidden sm:inline">GitHub</a>
        <a href="https://linkedin.com/in/jayesh-sharma-geca" target="_blank" rel="noopener noreferrer" className="hover:underline cursor-pointer mr-4 hidden sm:inline">LinkedIn</a>
        <a href="mailto:0574.jayesh.sharma@gmail.com" className="hover:underline cursor-pointer">Gmail</a>
      </div>

      {/* MAIN - Centered like Google */}
      <div className="flex-1 flex flex-col items-center justify-center px-4 -mt-16">
        <Name />
        <div className="mt-8 w-full max-w-[584px]">
          <SearchBox />
        </div>

        {/* SUGGESTION BUTTONS */}
        <motion.div
          initial={{ opacity: 0, y: 10 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.3 }}
          className="flex flex-wrap justify-center gap-3 mt-8"
        >
          {suggestions.map((item) => (
            <button
              key={item.label}
              onClick={() => navigate(item.path)}
              className="flex items-center gap-2 px-4 py-2 rounded-full border border-gray-200 text-sm text-gray-600 hover:border-gray-300 hover:bg-gray-50 hover:shadow-sm transition-all cursor-pointer font-inter"
            >
              <span className="text-gray-400">{item.icon}</span>
              {item.label}
            </button>
          ))}
        </motion.div>

        {/* LANGUAGE OFFER - Google style */}
        <div className="mt-6 text-xs text-gray-400">
          Developer Portfolio: MERN | C++ | Python | ML
        </div>
      </div>

      <Footer />
    </div>
  );
}