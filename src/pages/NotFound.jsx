import React from 'react';
import { useNavigate } from 'react-router-dom';
import { motion } from 'framer-motion';

export default function NotFound() {
  const navigate = useNavigate();
  return (
    <div className="min-h-screen bg-white flex items-center justify-center px-4">
      <motion.div initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} className="text-center">
        <p className="text-[120px] md:text-[180px] font-bold text-gray-100 leading-none select-none">404</p>
        <h1 className="text-2xl md:text-3xl font-bold text-gray-900 -mt-8 mb-3">Page not found</h1>
        <p className="text-gray-500 mb-8 max-w-md">Sorry, the page you're looking for doesn't exist or has been moved.</p>
        <div className="flex gap-3 justify-center">
          <button onClick={() => navigate("/")} className="px-6 py-3 rounded-xl bg-blue-600 text-white font-semibold text-sm hover:bg-blue-700 transition-all shadow-sm">
            Go Home
          </button>
          <button onClick={() => navigate(-1)} className="px-6 py-3 rounded-xl border border-gray-200 text-gray-600 font-semibold text-sm hover:bg-gray-50 transition-all">
            Go Back
          </button>
        </div>
      </motion.div>
    </div>
  );
}
