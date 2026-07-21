import React from 'react';
import { motion } from 'framer-motion';
import { useGitHubEvents } from '../hooks/useGitHub';
import { FaCodeCommit, FaCodeBranch, FaStar, FaCode } from 'react-icons/fa';
import LoadingSkeleton from './LoadingSkeleton';

function formatTime(dateStr) {
  const d = new Date(dateStr);
  const now = new Date();
  const diff = Math.floor((now - d) / 1000);
  if (diff < 60) return 'just now';
  if (diff < 3600) return `${Math.floor(diff / 60)}m ago`;
  if (diff < 86400) return `${Math.floor(diff / 3600)}h ago`;
  return `${Math.floor(diff / 86400)}d ago`;
}

function getEventIcon(type) {
  switch (type) {
    case 'PushEvent': return <FaCodeCommit className="text-green-500" />;
    case 'CreateEvent': return <FaCodeBranch className="text-blue-500" />;
    case 'StarEvent': return <FaStar className="text-yellow-500" />;
    case 'ForkEvent': return <FaCode className="text-purple-500" />;
    default: return <FaCode className="text-gray-500" />;
  }
}

function getEventText(event) {
  switch (event.type) {
    case 'PushEvent':
      return `Pushed ${event.payload?.commits?.length || 0} commit(s) to ${event.repo?.name?.split('/')[1]}`;
    case 'CreateEvent':
      return `Created ${event.payload?.ref_type} ${event.payload?.ref || ''} in ${event.repo?.name?.split('/')[1]}`;
    case 'StarEvent':
      return `Starred ${event.repo?.name?.split('/')[1]}`;
    case 'ForkEvent':
      return `Forked ${event.repo?.name?.split('/')[1]}`;
    default:
      return event.type?.replace('Event', '') || 'Activity';
  }
}

export default function RecentActivity() {
  const { events, loading } = useGitHubEvents();

  if (loading) return <LoadingSkeleton type="stat" />;

  const displayEvents = events.slice(0, 6);

  if (displayEvents.length === 0) {
    return (
      <div className="text-center py-8 text-gray-400 text-sm">
        No recent activity found
      </div>
    );
  }

  return (
    <div className="space-y-2">
      {displayEvents.map((event, idx) => (
        <motion.div
          key={event.id || idx}
          initial={{ opacity: 0, x: -10 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ delay: idx * 0.05 }}
          className="flex items-start gap-3 p-3 rounded-xl hover:bg-[rgba(59,130,246,0.04)] transition-colors group"
        >
          <div className="mt-0.5 text-sm group-hover:scale-110 transition-transform">
            {getEventIcon(event.type)}
          </div>
          <div className="flex-1 min-w-0">
            <p className="text-sm text-gray-700 truncate">{getEventText(event)}</p>
            <p className="text-[11px] text-gray-400">{formatTime(event.created_at)}</p>
          </div>
        </motion.div>
      ))}
    </div>
  );
}
