import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { FaPaperPlane, FaCheckCircle, FaExclamationCircle } from 'react-icons/fa';

export default function ContactForm() {
  const [form, setForm] = useState({ name: '', email: '', subject: '', message: '' });
  const [status, setStatus] = useState(null);

  const handleChange = (e) => setForm({ ...form, [e.target.name]: e.target.value });

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
          <label className="block text-xs font-semibold text-gray-700 mb-1.5">Name *</label>
          <input type="text" name="name" value={form.name} onChange={handleChange} placeholder="Your name"
            className="w-full px-4 py-3 rounded-xl border border-gray-200 text-sm focus:outline-none focus:ring-2 focus:ring-blue-500/20 focus:border-blue-400 transition-all bg-white placeholder:text-gray-300" />
        </div>
        <div>
          <label className="block text-xs font-semibold text-gray-700 mb-1.5">Email *</label>
          <input type="email" name="email" value={form.email} onChange={handleChange} placeholder="your@email.com"
            className="w-full px-4 py-3 rounded-xl border border-gray-200 text-sm focus:outline-none focus:ring-2 focus:ring-blue-500/20 focus:border-blue-400 transition-all bg-white placeholder:text-gray-300" />
        </div>
      </div>
      <div>
        <label className="block text-xs font-semibold text-gray-700 mb-1.5">Subject</label>
        <input type="text" name="subject" value={form.subject} onChange={handleChange} placeholder="What's this about?"
          className="w-full px-4 py-3 rounded-xl border border-gray-200 text-sm focus:outline-none focus:ring-2 focus:ring-blue-500/20 focus:border-blue-400 transition-all bg-white placeholder:text-gray-300" />
      </div>
      <div>
        <label className="block text-xs font-semibold text-gray-700 mb-1.5">Message *</label>
        <textarea name="message" value={form.message} onChange={handleChange} rows={4} placeholder="Type your message..."
          className="w-full px-4 py-3 rounded-xl border border-gray-200 text-sm focus:outline-none focus:ring-2 focus:ring-blue-500/20 focus:border-blue-400 transition-all resize-none bg-white placeholder:text-gray-300" />
      </div>
      <motion.button type="submit" whileHover={{ scale: 1.01 }} whileTap={{ scale: 0.99 }}
        className="w-full py-3.5 rounded-xl bg-blue-600 text-white font-semibold text-sm flex items-center justify-center gap-2 hover:bg-blue-700 transition-all shadow-sm">
        {status === 'sent' ? (<><FaCheckCircle /> Sent!</>) : status === 'error' ? (<><FaExclamationCircle /> Fill required</>) : (<><FaPaperPlane /> Send Message</>)}
      </motion.button>
    </form>
  );
}
