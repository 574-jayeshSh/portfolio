import React from 'react';
import { motion } from 'framer-motion';
import { useGitHubProfile } from '../hooks/useGitHub';
import { FaGithub, FaStar, FaUsers, FaCodeBranch } from 'react-icons/fa';
import LoadingSkeleton from './LoadingSkeleton';

export default function GitHubStats() {
  const { profile, loading } = useGitHubProfile();

  if (loading) return <LoadingSkeleton type="stat" />;

  const stats = [
    { label: 'Repos', value: profile?.public_repos || 0, icon: <FaCodeBranch />, color: 'text-blue-500' },
    { label: 'Stars', value: 38, icon: <FaStar />, color: 'text-yellow-500' },
    { label: 'Followers', value: profile?.followers || 0, icon: <FaUsers />, color: 'text-cyan-500' },
    { label: 'Following', value: profile?.following || 0, icon: <FaGithub />, color: 'text-green-500' },
  ];

  return (
    <div className="grid grid-cols-2 gap-3">
      {stats.map((stat, idx) => (
        <motion.div
          key={stat.label}
          initial={{ opacity: 0, y: 10 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: idx * 0.1 }}
          className="p-4 rounded-xl bg-white border border-gray-100 hover:shadow-md transition-all group"
        >
          <div className="flex items-center justify-between mb-2">
            <span className={`${stat.color} text-lg group-hover:scale-110 transition-transform`}>
              {stat.icon}
            </span>
          </div>
          <p className="text-2xl font-black text-gray-900">{stat.value}</p>
          <p className="text-[10px] text-gray-400 uppercase tracking-widest font-bold">{stat.label}</p>
        </motion.div>
      ))}
    </div>
  );
}
