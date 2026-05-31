import React, { useState, useEffect } from "react";
import { motion } from "framer-motion";

const Terminal = ({ text }) => {
  const [displayedText, setDisplayedText] = useState("");
  const [index, setIndex] = useState(0);

  useEffect(() => {
    if (index < text.length) {
      const timeout = setTimeout(() => {
        setDisplayedText((prev) => prev + text[index]);
        setIndex((prev) => prev + 1);
      }, 30);
      return () => clearTimeout(timeout);
    }
  }, [index, text]);

  return (
    <div className="w-full h-48 bg-black/80 border border-blue-500/30 rounded-xl p-4 font-mono text-[11px] leading-relaxed relative overflow-hidden backdrop-blur-md">
      {/* SCANLINE EFFECT */}
      <div className="absolute inset-0 pointer-events-none bg-[linear-gradient(rgba(18,16,16,0)_50%,rgba(0,0,0,0.25)_50%),linear-gradient(90deg,rgba(255,0,0,0.06),rgba(0,255,0,0.02),rgba(0,0,255,0.06))] z-10 bg-[length:100%_2px,3px_100%]" />
      
      <div className="flex items-center gap-2 mb-2 border-b border-blue-500/20 pb-2">
        <div className="w-2 h-2 rounded-full bg-red-500/50" />
        <div className="w-2 h-2 rounded-full bg-yellow-500/50" />
        <div className="w-2 h-2 rounded-full bg-green-500/50" />
        <span className="ml-2 text-blue-500/50 text-[9px] uppercase tracking-[0.2em]">biometric_data_stream</span>
      </div>

      <div className="text-blue-400">
        <span className="text-green-500">guest@jayesh:~$</span> cat bio.txt
        <p className="mt-2 text-white/80 whitespace-pre-wrap">
          {displayedText}
          <motion.span
            animate={{ opacity: [1, 0] }}
            transition={{ repeat: Infinity, duration: 0.8 }}
            className="inline-block w-1.5 h-3 bg-blue-500 ml-1"
          />
        </p>
      </div>

      {/* DECORATIVE CORNER */}
      <div className="absolute bottom-1 right-1 text-[8px] text-blue-500/20 font-black">
        v2.4.0_STABLE
      </div>
    </div>
  );
};

export default Terminal;
