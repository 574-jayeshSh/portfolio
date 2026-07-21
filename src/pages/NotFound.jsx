import React from 'react';
import { useNavigate } from 'react-router-dom';
import { motion } from 'framer-motion';

export default function NotFound() {
  const navigate = useNavigate();

  return (
    <div className="relative w-full h-screen overflow-hidden bg-[#0a0f1e] text-white flex items-center justify-center">
      <div className="absolute inset-0 bg-[linear-gradient(to_right,#1e293b_1px,transparent_1px),linear-gradient(to_bottom,#1e293b_1px,transparent_1px)] bg-[size:40px_40px] opacity-10" />
      
      <motion.div 
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        className="text-center z-10 px-4"
      >
        <motion.div
          animate={{ scale: [1, 1.05, 1] }}
          transition={{ duration: 2, repeat: Infinity }}
          className="text-[180px] font-black leading-none bg-gradient-to-r from-blue-500 via-cyan-400 to-blue-500 bg-clip-text text-transparent"
        >
          404
        </motion.div>
        <p className="text-xl text-white/40 mt-4 mb-8 font-outfit">
          SYSTEM ERROR: Route not found in navigation matrix
        </p>
        <div className="flex gap-4 justify-center">
          <button
            onClick={() => navigate("/")}
            className="px-8 py-3 rounded-xl bg-blue-500 text-white font-black text-xs tracking-[0.3em] uppercase hover:bg-blue-600 transition-all shadow-[0_0_15px_rgba(59,130,246,0.15)]"
          >
            Return_Home
          </button>
          <button
            onClick={() => navigate(-1)}
            className="px-8 py-3 rounded-xl border border-white/10 text-white/60 font-black text-xs tracking-[0.3em] uppercase hover:bg-white/5 hover:text-white transition-all"
          >
            Go_Back
          </button>
        </div>
      </motion.div>
    </div>
  );
}
