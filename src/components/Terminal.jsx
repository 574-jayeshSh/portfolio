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
    <div className="w-full h-48 bg-gray-50 border border-gray-200 rounded-xl p-4 font-mono text-[11px] leading-relaxed relative overflow-hidden">
      <div className="flex items-center gap-2 mb-2 border-b border-gray-200 pb-2">
        <div className="w-2 h-2 rounded-full bg-red-400" />
        <div className="w-2 h-2 rounded-full bg-yellow-400" />
        <div className="w-2 h-2 rounded-full bg-green-400" />
        <span className="ml-2 text-gray-400 text-[9px] uppercase tracking-[0.2em]">terminal</span>
      </div>

      <div className="text-gray-700">
        <span className="text-green-600">guest@jayesh:~$</span> cat bio.txt
        <p className="mt-2 text-gray-600 whitespace-pre-wrap">
          {displayedText}
          <motion.span
            animate={{ opacity: [1, 0] }}
            transition={{ repeat: Infinity, duration: 0.8 }}
            className="inline-block w-1.5 h-3 bg-gray-400 ml-1"
          />
        </p>
      </div>

      <div className="absolute bottom-1 right-1 text-[8px] text-gray-300 font-black">
        v2.4.0
      </div>
    </div>
  );
};

export default Terminal;
