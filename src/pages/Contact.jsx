import React from "react";
import { motion } from "framer-motion";
import { useNavigate } from "react-router-dom";
import SideMenu from "../components/SideMenu";
import MobileMenu from "../components/MobileMenu";
import ContactForm from "../components/ContactForm";
import contactData from "../data/contact";
import resumePdf from "../assets/resume.pdf";
import { FaEnvelope, FaLinkedinIn, FaGithub, FaTwitter, FaDownload } from "react-icons/fa";

export default function Contact() {
  const navigate = useNavigate();

  const socialLinks = [
    { name: "Email", value: contactData.content.email, icon: <FaEnvelope />, link: `mailto:${contactData.content.email}`, color: "from-red-500/20 to-orange-500/20" },
    { name: "LinkedIn", value: "jayesh-sharma", icon: <FaLinkedinIn />, link: contactData.content.linkedin, color: "from-blue-500/20 to-blue-600/20" },
    { name: "GitHub", value: "574-jayeshSh", icon: <FaGithub />, link: contactData.content.github, color: "from-gray-500/20 to-gray-600/20" },
    { name: "Twitter", value: "@574_jayesh", icon: <FaTwitter />, link: contactData.content.twitter, color: "from-sky-500/20 to-sky-600/20" },
  ];

  return (
    <div className="relative w-full min-h-screen overflow-hidden bg-[#0a0f1e] text-white font-outfit">
      {/* BACKGROUND */}
      <div className="absolute inset-0 bg-[linear-gradient(to_right,#1e293b_1px,transparent_1px),linear-gradient(to_bottom,#1e293b_1px,transparent_1px)] bg-[size:40px_40px] opacity-20" />

      {/* TOP BAR */}
      <div className="absolute top-0 left-0 w-full px-4 md:px-8 py-5 flex justify-between items-center z-50 border-b border-[rgba(59,130,246,0.06)] backdrop-blur-sm bg-black/20">
        <div className="flex items-center gap-4">
          <MobileMenu />
          <div onClick={() => navigate("/")} className="w-10 h-10 border border-blue-500/50 rounded-lg items-center justify-center font-black text-blue-500 bg-[rgba(59,130,246,0.03)] cursor-pointer hover:bg-blue-500/10 transition-all hidden md:flex">
            JS
          </div>
          <div>
            <h1 className="text-lg md:text-xl font-black tracking-tighter leading-tight uppercase">Comms_Hub</h1>
            <p className="text-[9px] tracking-[0.3em] text-[rgba(59,130,246,0.5)] font-bold uppercase">Satellite_Link_Active</p>
          </div>
        </div>
        <div className="flex items-center gap-2">
          <div className="w-2 h-2 rounded-full bg-green-500 animate-pulse shadow-[0_0_8px_#22c55e]" />
          <p className="text-[10px] font-black tracking-widest text-white/50 uppercase hidden sm:block">Connection: Stable</p>
        </div>
      </div>

      {/* SIDE MENU - desktop only */}
      <div className="hidden md:block">
        <SideMenu />
      </div>

      {/* CENTER CONTENT */}
      <div className="absolute inset-0 flex items-center justify-center z-10 pt-20 pb-10 md:pt-0">
        <motion.div
          initial={{ scale: 0.95, opacity: 0 }}
          animate={{ scale: 1, opacity: 1 }}
          className="max-w-4xl w-full mx-4 md:mx-20 p-6 md:p-12 lg:p-16 rounded-[2rem] glass-card border border-[rgba(59,130,246,0.08)] backdrop-blur-3xl relative overflow-hidden"
        >
          {/* DECORATIVE CORNERS */}
          <div className="absolute top-6 left-6 w-12 h-12 border-t-2 border-l-2 border-blue-500/20 rounded-tl-2xl" />
          <div className="absolute bottom-6 right-6 w-12 h-12 border-b-2 border-r-2 border-blue-500/20 rounded-br-2xl" />

          <div className="text-center mb-10">
            <h2 className="text-3xl md:text-5xl font-black mb-2 text-white italic tracking-tighter uppercase">Establish_Link</h2>
            <p className="text-[10px] font-bold tracking-[0.6em] text-blue-500/40 uppercase">Initiating secure communication protocol</p>
          </div>

          {/* SOCIAL LINKS */}
          <div className="grid grid-cols-2 md:grid-cols-4 gap-3 md:gap-4 mb-10">
            {socialLinks.map((social, idx) => (
              <a
                key={idx}
                href={social.link}
                target="_blank"
                rel="noopener noreferrer"
                className={`group flex flex-col items-center p-4 md:p-6 rounded-2xl bg-gradient-to-b ${social.color} border border-[rgba(59,130,246,0.06)] hover:border-blue-500/40 transition-all relative overflow-hidden`}
              >
                <div className="absolute inset-0 bg-gradient-to-b from-transparent via-blue-500/10 to-transparent -translate-y-full group-hover:translate-y-full transition-transform duration-1000" />
                <span className="text-2xl md:text-3xl mb-3 md:mb-4 text-blue-500/80 group-hover:scale-125 transition-transform duration-500">
                  {social.icon}
                </span>
                <span className="text-white font-black text-[10px] tracking-[0.2em] uppercase mb-1">{social.name}</span>
                <span className="text-[9px] text-white/30 font-medium truncate w-full text-center">{social.value}</span>
              </a>
            ))}
          </div>

          {/* CONTACT FORM */}
          <div className="mb-10">
            <h3 className="text-[10px] font-black tracking-[0.4em] text-blue-500 mb-6 uppercase text-center">
              Secure_Message_Protocol
            </h3>
            <ContactForm />
          </div>

          {/* RESUME DOWNLOAD */}
          <div className="flex flex-col items-center">
            <a
              href={resumePdf}
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center gap-2 px-12 py-4 rounded-xl bg-[rgba(59,130,246,0.04)] border border-[rgba(59,130,246,0.1)] text-white font-black tracking-[0.3em] uppercase text-xs hover:bg-[rgba(59,130,246,0.08)] hover:border-blue-500/30 transition-all"
            >
              <FaDownload /> Download Resume
            </a>
          </div>
        </motion.div>
      </div>

      {/* AMBIENT EFFECTS */}
      <div className="absolute top-0 right-0 w-[40%] h-[40%] bg-[rgba(59,130,246,0.03)] blur-[120px] pointer-events-none" />
      <div className="absolute bottom-0 left-0 w-[40%] h-[40%] bg-[rgba(59,130,246,0.03)] blur-[120px] pointer-events-none" />
    </div>
  );
}
