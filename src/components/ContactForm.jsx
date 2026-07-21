import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { FaPaperPlane, FaCheckCircle, FaExclamationCircle } from 'react-icons/fa';

export default function ContactForm() {
  const [form, setForm] = useState({ name: '', email: '', subject: '', message: '' });
  const [status, setStatus] = useState(null);

  const handleChange = (e) => {
    setForm({ ...form, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    if (!form.name || !form.email || !form.message) {
      setStatus('error');
      setTimeout(() => setStatus(null), 3000);
      return;
    }
    const mailto = `mailto:0574.jayesh.sharma@gmail.com?subject=${encodeURIComponent(form.subject || 'Portfolio Contact')}&body=${encodeURIComponent(`Name: ${form.name}\nEmail: ${form.email}\n\n${form.message}`)}`;
    window.location.href = mailto;
    setStatus('sent');
    setTimeout(() => setStatus(null), 3000);
    setForm({ name: '', email: '', subject: '', message: '' });
  };

  return (
    <form onSubmit={handleSubmit} className="space-y-4">
      <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
        <div>
          <label className="block text-[9px] font-black tracking-[0.3em] text-blue-500/60 uppercase mb-2">Name *</label>
          <input
            type="text"
            name="name"
            value={form.name}
            onChange={handleChange}
            placeholder="Your name"
            className="w-full px-4 py-3 rounded-xl bg-white/5 border border-white/10 text-white text-sm focus:outline-none focus:border-blue-500/50 focus:ring-1 focus:ring-blue-500/20 transition-all placeholder:text-white/20"
          />
        </div>
        <div>
          <label className="block text-[9px] font-black tracking-[0.3em] text-blue-500/60 uppercase mb-2">Email *</label>
          <input
            type="email"
            name="email"
            value={form.email}
            onChange={handleChange}
            placeholder="your@email.com"
            className="w-full px-4 py-3 rounded-xl bg-white/5 border border-white/10 text-white text-sm focus:outline-none focus:border-blue-500/50 focus:ring-1 focus:ring-blue-500/20 transition-all placeholder:text-white/20"
          />
        </div>
      </div>
      <div>
        <label className="block text-[9px] font-black tracking-[0.3em] text-blue-500/60 uppercase mb-2">Subject</label>
        <input
          type="text"
          name="subject"
          value={form.subject}
          onChange={handleChange}
          placeholder="What's this about?"
          className="w-full px-4 py-3 rounded-xl bg-white/5 border border-white/10 text-white text-sm focus:outline-none focus:border-blue-500/50 focus:ring-1 focus:ring-blue-500/20 transition-all placeholder:text-white/20"
        />
      </div>
      <div>
        <label className="block text-[9px] font-black tracking-[0.3em] text-blue-500/60 uppercase mb-2">Message *</label>
        <textarea
          name="message"
          value={form.message}
          onChange={handleChange}
          rows={4}
          placeholder="Type your message..."
          className="w-full px-4 py-3 rounded-xl bg-white/5 border border-white/10 text-white text-sm focus:outline-none focus:border-blue-500/50 focus:ring-1 focus:ring-blue-500/20 transition-all resize-none placeholder:text-white/20"
        />
      </div>
      <motion.button
        type="submit"
        whileHover={{ scale: 1.02 }}
        whileTap={{ scale: 0.98 }}
        className="w-full py-4 rounded-xl bg-blue-500 text-white font-black text-xs tracking-[0.3em] uppercase flex items-center justify-center gap-2 hover:bg-blue-600 transition-all shadow-[0_0_30px_rgba(59,130,246,0.2)]"
      >
        {status === 'sent' ? (
          <><FaCheckCircle /> Message Sent</>
        ) : status === 'error' ? (
          <><FaExclamationCircle /> Fill Required Fields</>
        ) : (
          <><FaPaperPlane /> Send Message</>
        )}
      </motion.button>
    </form>
  );
}
