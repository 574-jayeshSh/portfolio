import React from "react";
import { Motion } from "framer-motion";
import { useNavigate } from "react-router-dom";
import SideMenu from "../components/SideMenu";
import contactData from "../data/contact";
import resumePdf from "../assets/resume.pdf";
import { FaEnvelope, FaLinkedinIn, FaGithub, FaTwitter } from "react-icons/fa";

export default function Contact() {
  const navigate = useNavigate();

  const socialLinks = [
    { name: "Email", value: contactData.content.email, icon: <FaEnvelope />, link: `mailto:${contactData.content.email}` },
    { name: "LinkedIn", value: "jayesh-sharma", icon: <FaLinkedinIn />, link: contactData.content.linkedin },
    { name: "GitHub", value: "574-jayesh", icon: <FaGithub />, link: contactData.content.github },
    { name: "Twitter", value: "@574_jayesh", icon: <FaTwitter />, link: contactData.content.twitter },
  ];

  return (
    <div className="relative w-full h-screen overflow-hidden bg-[#020617] text-white font-outfit">
      
      {/* BACKGROUND GRID */}
      <div className="absolute inset-0 bg-[linear-gradient(to_right,#1e293b_1px,transparent_1px),linear-gradient(to_bottom,#1e293b_1px,transparent_1px)] bg-[size:40px_40px] opacity-20" />

      {/* TOP BAR */}
      <div className="absolute top-0 left-0 w-full px-8 py-5 flex justify-between items-center z-50 border-b border-white/5 backdrop-blur-sm bg-black/20">
        <div className="flex items-center gap-4">
          <div onClick={() => navigate("/")} className="w-10 h-10 border border-blue-500/50 rounded-lg flex items-center justify-center font-black text-blue-500 bg-blue-500/5 cursor-pointer">
            JS
          </div>
          <div>
            <h1 className="text-xl font-black tracking-tighter leading-tight uppercase">Comms_Hub</h1>
            <p className="text-[9px] tracking-[0.3em] text-blue-500/60 font-bold uppercase">Satellite_Link_Active</p>
          </div>
        </div>

        <div className="flex items-center gap-4">
           <div className="flex items-center gap-2">
              <div className="w-2 h-2 rounded-full bg-green-500 animate-pulse shadow-[0_0_8px_#22c55e]" />
              <p className="text-[10px] font-black tracking-widest text-white/50 uppercase">Connection: Stable</p>
           </div>
        </div>
      </div>

      {/* SIDE MENU */}
      <SideMenu />

      {/* CENTER STAGE: COMMS TERMINAL */}
      <div className="absolute inset-0 flex items-center justify-center z-10">
        <Motion.div 
          initial={{ scale: 0.95, opacity: 0 }}
          animate={{ scale: 1, opacity: 1 }}
          className="max-w-4xl w-full mx-20 p-16 rounded-[3rem] bg-black/40 border border-blue-500/10 backdrop-blur-3xl relative overflow-hidden"
        >
          {/* DECORATIVE CORNER BRACKETS */}
          <div className="absolute top-10 left-10 w-20 h-20 border-t-2 border-l-2 border-blue-500/30 rounded-tl-3xl" />
          <div className="absolute bottom-10 right-10 w-20 h-20 border-b-2 border-r-2 border-blue-500/30 rounded-br-3xl" />

          <div className="text-center mb-16">
            <h2 className="text-5xl font-black mb-2 text-white italic tracking-tighter uppercase">Establish_Link</h2>
            <p className="text-[10px] font-bold tracking-[0.6em] text-blue-500/40 uppercase">Initiating secure communication protocol</p>
          </div>
          
          <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-6">
            {socialLinks.map((social, idx) => (
              <a 
                key={idx}
                href={social.link}
                target="_blank"
                rel="noopener noreferrer"
                className="group flex flex-col items-center p-8 rounded-3xl bg-white/0 border border-white/5 hover:border-blue-500/40 hover:bg-blue-500/5 transition-all relative overflow-hidden"
              >
                {/* SCAN LINE ON HOVER */}
                <div className="absolute inset-0 bg-gradient-to-b from-transparent via-blue-500/10 to-transparent -translate-y-full group-hover:translate-y-full transition-transform duration-1000" />
                
                <span className="text-4xl mb-6 text-blue-500/80 group-hover:scale-125 group-hover:rotate-6 transition-transform duration-500 drop-shadow-[0_0_15px_rgba(59,130,246,0.3)]">
                  {social.icon}
                </span>
                <span className="text-white font-black text-[10px] tracking-[0.2em] uppercase mb-1">{social.name}</span>
                <span className="text-[9px] text-white/30 font-medium truncate w-full text-center">{social.value}</span>
              </a>
            ))}
          </div>

          <div className="mt-16 flex flex-col items-center">
            <a
              href={resumePdf}
              target="_blank"
              rel="noopener noreferrer"
              className="px-16 py-5 rounded-2xl bg-blue-500 text-white font-black tracking-[0.5em] uppercase text-xs hover:scale-[1.05] transition-all shadow-[0_0_40px_rgba(59,130,246,0.3)] mb-6 inline-block text-center"
            >
              Download Resume (PDF)
            </a>
            <div className="flex items-center gap-3 text-[9px] font-bold text-white/20 tracking-widest uppercase">
               <span className="animate-pulse">●</span>
               <span>Encryption: 256-Bit AES</span>
               <span className="animate-pulse">●</span>
            </div>
          </div>
        </Motion.div>
      </div>

      {/* AMBIENT EFFECTS */}
      <div className="absolute top-0 right-0 w-[40%] h-[40%] bg-blue-500/5 blur-[120px] pointer-events-none" />
      <div className="absolute bottom-0 left-0 w-[40%] h-[40%] bg-blue-500/5 blur-[120px] pointer-events-none" />
    </div>
  );
}