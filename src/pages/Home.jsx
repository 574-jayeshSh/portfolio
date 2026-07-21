import React, { useState, useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import { motion } from 'framer-motion';
import SearchBox from '../components/SearchBox';
import Name from '../components/Name';
import Footer from '../components/Footer';
import GitHubStats from '../components/GitHubStats';
import { FaUser, FaFolder, FaCode, FaTrophy, FaEnvelope, FaDumbbell } from 'react-icons/fa';

const suggestions = [
  { icon: <FaUser />, label: "about", path: "/pages/about" },
  { icon: <FaFolder />, label: "projects", path: "/pages/projects" },
  { icon: <FaCode />, label: "skills", path: "/pages/skills" },
  { icon: <FaTrophy />, label: "achievements", path: "/pages/achievements" },
  { icon: <FaEnvelope />, label: "contact", path: "/pages/contact" },
];

const taglines = [
  "Push code. Pull weight. Repeat.",
  "Building systems that feel futuristic.",
  "CSE Student | MERN Stack | ML Learner",
  "DSA in C++ | Open Source Enthusiast",
  "Coding x Gym = Perfect Reps",
];

export default function Home() {
  const navigate = useNavigate();
  const [taglineIdx, setTaglineIdx] = useState(0);
  const [displayText, setDisplayText] = useState('');
  const [isDeleting, setIsDeleting] = useState(false);

  useEffect(() => {
    const current = taglines[taglineIdx];
    let timeout;

    if (!isDeleting && displayText === current) {
      timeout = setTimeout(() => setIsDeleting(true), 2500);
    } else if (isDeleting && displayText === '') {
      setIsDeleting(false);
      setTaglineIdx((prev) => (prev + 1) % taglines.length);
    } else {
      timeout = setTimeout(() => {
        setDisplayText(
          isDeleting
            ? current.substring(0, displayText.length - 1)
            : current.substring(0, displayText.length + 1)
        );
      }, isDeleting ? 30 : 60);
    }
    return () => clearTimeout(timeout);
  }, [displayText, isDeleting, taglineIdx]);

  return (
    <div className="min-h-screen flex flex-col bg-white">
      {/* TOP NAV */}
      <div className="flex justify-end items-center px-6 py-3 text-[13px] text-gray-600">
        <a href="mailto:0574.jayesh.sharma@gmail.com" className="hover:underline cursor-pointer mr-4">Gmail</a>
        <a href="https://github.com/574-jayeshSh" target="_blank" rel="noopener noreferrer" className="hover:underline cursor-pointer mr-4">GitHub</a>
        <a href="https://linkedin.com/in/jayesh-sharma-574" target="_blank" rel="noopener noreferrer" className="hover:underline cursor-pointer">LinkedIn</a>
      </div>

      {/* MAIN CONTENT */}
      <div className="flex-1 flex flex-col items-center justify-center px-4 -mt-20">
        <Name />
        
        {/* TYPING TAGLINE */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.5 }}
          className="mt-3 mb-6 h-6"
        >
          <p className="text-sm text-gray-500 font-outfit">
            {displayText}
            <span className="inline-block w-[2px] h-4 bg-blue-500 ml-0.5 animate-pulse" />
          </p>
        </motion.div>

        {/* SEARCH BOX */}
        <SearchBox />

        {/* SUGGESTION BUTTONS */}
        <motion.div
          initial={{ opacity: 0, y: 10 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.8 }}
          className="flex flex-wrap justify-center gap-3 mt-6"
        >
          {suggestions.map((item, idx) => (
            <motion.button
              key={item.label}
              onClick={() => navigate(item.path)}
              whileHover={{ scale: 1.05, y: -2 }}
              whileTap={{ scale: 0.95 }}
              initial={{ opacity: 0, y: 10 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.9 + idx * 0.1 }}
              className="flex items-center gap-2 px-5 py-2.5 rounded-full border border-gray-200 text-sm text-gray-600 hover:bg-gray-50 hover:border-gray-300 hover:shadow-sm transition-all cursor-pointer"
            >
              <span className="text-blue-500">{item.icon}</span>
              <span className="capitalize">{item.label}</span>
            </motion.button>
          ))}
        </motion.div>

        {/* GITHUB STATS CARD */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 1.3 }}
          className="mt-10 w-full max-w-md"
        >
          <p className="text-[10px] text-gray-400 uppercase tracking-[0.3em] text-center mb-3 font-bold">
            Live GitHub Stats
          </p>
          <GitHubStats />
        </motion.div>
      </div>

      {/* FOOTER */}
      <Footer />
    </div>
  );
}
