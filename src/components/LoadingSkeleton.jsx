import React from 'react';

export default function LoadingSkeleton({ type = 'card' }) {
  if (type === 'card') {
    return (
      <div className="p-6 rounded-2xl bg-black/40 border border-white/5 backdrop-blur-xl space-y-4">
        <div className="skeleton h-4 w-3/4 rounded" />
        <div className="skeleton h-3 w-full rounded" />
        <div className="skeleton h-3 w-5/6 rounded" />
        <div className="flex gap-2 mt-4">
          <div className="skeleton h-6 w-16 rounded" />
          <div className="skeleton h-6 w-16 rounded" />
        </div>
      </div>
    );
  }

  if (type === 'stat') {
    return (
      <div className="space-y-3">
        {[1, 2, 3, 4].map(i => (
          <div key={i} className="flex justify-between items-center">
            <div className="skeleton h-3 w-24 rounded" />
            <div className="skeleton h-3 w-12 rounded" />
          </div>
        ))}
      </div>
    );
  }

  if (type === 'grid') {
    return (
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
        {[1, 2, 3, 4, 5, 6].map(i => (
          <div key={i} className="p-5 rounded-2xl bg-black/40 border border-white/5 space-y-3">
            <div className="skeleton h-5 w-2/3 rounded" />
            <div className="skeleton h-3 w-full rounded" />
            <div className="skeleton h-3 w-4/5 rounded" />
          </div>
        ))}
      </div>
    );
  }

  return null;
}
