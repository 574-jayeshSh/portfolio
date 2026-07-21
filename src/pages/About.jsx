import React from "react";
import { motion } from "framer-motion";
import { useNavigate } from "react-router-dom";
import {
  FaArrowLeft,
  FaGithub,
  FaEnvelope,
  FaLaptopCode,
  FaDatabase,
  FaBrain,
  FaPenFancy,
  FaGraduationCap,
  FaCode,
  FaDumbbell,
} from "react-icons/fa";

const navLinks = [
  { label: "Home", path: "/" },
  { label: "Projects", path: "/pages/projects" },
  { label: "Skills", path: "/pages/skills" },
  { label: "Contact", path: "/pages/contact" },
];

const whatIDo = [
  {
    icon: <FaLaptopCode />,
    title: "Web Development",
    desc: "Building full-stack applications with the MERN stack. From REST APIs to responsive UIs, I enjoy bringing ideas to life on the web.",
  },
  {
    icon: <FaDatabase />,
    title: "DSA in C++",
    desc: "Solving problems daily with C++. Strong grasp of data structures and algorithms keeps my problem-solving sharp.",
  },
  {
    icon: <FaBrain />,
    title: "Machine Learning",
    desc: "Exploring ML concepts and building models. fascinated by how data can drive intelligent decisions and real-world solutions.",
  },
  {
    icon: <FaPenFancy />,
    title: "Content Creation",
    desc: "Creating content that mixes Coding x Gym. Sharing the journey of a developer who believes in building both code and physique.",
  },
];

const timeline = [
  {
    year: "2022",
    title: "Started B.Tech CSE",
    desc: "Joined Government Engineering College, Ajmer to pursue Computer Science Engineering.",
    icon: <FaGraduationCap />,
  },
  {
    year: "2023",
    title: "MERN Stack Development",
    desc: "Dove deep into MongoDB, Express, React, and Node.js. Built multiple full-stack projects.",
    icon: <FaCode />,
  },
  {
    year: "2024",
    title: "DSA & Competitive Coding",
    desc: "Started solving problems daily in C++. Built strong foundations in algorithms and data structures.",
    icon: <FaCode />,
  },
  {
    year: "2025",
    title: "ML & Content Creation",
    desc: "Explored Machine Learning while building a personal brand around Coding x Gym lifestyle.",
    icon: <FaBrain />,
  },
];

export default function About() {
  const navigate = useNavigate();

  return (
    <div className="min-h-screen bg-white text-gray-800 font-inter">
      {/* NAVBAR */}
      <nav className="sticky top-0 z-50 bg-white/80 backdrop-blur-md border-b border-gray-100">
        <div className="max-w-5xl mx-auto px-6 py-4 flex items-center justify-between">
          <button
            onClick={() => navigate("/")}
            className="flex items-center gap-2 text-sm text-gray-500 hover:text-gray-900 transition-colors cursor-pointer"
          >
            <FaArrowLeft className="text-xs" />
            <span>Home</span>
          </button>
          <div className="hidden sm:flex items-center gap-6">
            {navLinks.map((link) => (
              <button
                key={link.label}
                onClick={() => navigate(link.path)}
                className="text-sm text-gray-500 hover:text-gray-900 transition-colors cursor-pointer"
              >
                {link.label}
              </button>
            ))}
          </div>
        </div>
      </nav>

      {/* HERO */}
      <section className="max-w-4xl mx-auto px-6 pt-16 pb-20 text-center">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="flex flex-col items-center"
        >
          <img
            src="https://avatars.githubusercontent.com/u/202250730?v=4"
            alt="Jayesh Sharma"
            className="w-28 h-28 rounded-full object-cover shadow-lg border-4 border-gray-100 mb-6"
          />
          <h1 className="text-4xl sm:text-5xl font-bold text-gray-900 mb-3">
            Jayesh Sharma
          </h1>
          <p className="text-gray-500 text-base sm:text-lg max-w-xl mb-2">
            B.Tech CSE @ GEC Ajmer &middot; MERN Stack Developer &middot; ML
            Learner &middot; DSA in C++
          </p>
          <p className="text-gray-400 text-sm mb-8">
            Building code &amp; building physique — Coding x Gym
          </p>
          <div className="flex flex-wrap justify-center gap-3">
            <a
              href="mailto:0574.jayesh.sharma@gmail.com"
              className="inline-flex items-center gap-2 px-5 py-2.5 bg-gray-900 text-white text-sm font-medium rounded-full hover:bg-gray-800 transition-colors"
            >
              <FaEnvelope className="text-xs" />
              Get in Touch
            </a>
            <a
              href="https://github.com/574-jayeshSh"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2 px-5 py-2.5 border border-gray-200 text-sm font-medium text-gray-700 rounded-full hover:bg-gray-50 transition-colors"
            >
              <FaGithub className="text-xs" />
              GitHub
            </a>
          </div>
        </motion.div>
      </section>

      {/* ABOUT ME */}
      <section className="bg-gray-50 border-y border-gray-100">
        <div className="max-w-4xl mx-auto px-6 py-20">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-80px" }}
            transition={{ duration: 0.6 }}
          >
            <p className="text-xs font-semibold tracking-widest text-gray-400 uppercase mb-4">
              About Me
            </p>
            <h2 className="text-3xl sm:text-4xl font-bold text-gray-900 mb-8">
              A developer who believes in
              <br className="hidden sm:block" /> learning by building.
            </h2>
          </motion.div>
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-80px" }}
            transition={{ duration: 0.6, delay: 0.15 }}
            className="space-y-5 text-gray-600 leading-relaxed text-base sm:text-lg max-w-3xl"
          >
            <p>
              I'm Jayesh, a B.Tech Computer Science student at Government
              Engineering College, Ajmer. I'm passionate about software
              development and spend most of my time building projects, solving
              problems, and exploring new technologies.
            </p>
            <p>
              My primary stack is MERN — I enjoy building full-stack applications
              from scratch. Alongside web development, I practice DSA daily in C++
              and have been exploring Machine Learning to understand how data and
              algorithms can solve real-world problems.
            </p>
            <p>
              Outside of code, I'm a gym enthusiast. I believe the discipline
              from fitness translates directly into focused, consistent coding.
              That's where the idea of Coding x Gym comes from — push code, pull
              weight, repeat.
            </p>
          </motion.div>
        </div>
      </section>

      {/* WHAT I DO */}
      <section className="max-w-5xl mx-auto px-6 py-20">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-80px" }}
          transition={{ duration: 0.6 }}
          className="text-center mb-14"
        >
          <p className="text-xs font-semibold tracking-widest text-gray-400 uppercase mb-4">
            What I Do
          </p>
          <h2 className="text-3xl sm:text-4xl font-bold text-gray-900">
            Things I spend my time on
          </h2>
        </motion.div>
        <div className="grid sm:grid-cols-2 gap-5">
          {whatIDo.map((item, idx) => (
            <motion.div
              key={item.title}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-60px" }}
              transition={{ duration: 0.5, delay: idx * 0.1 }}
              className="p-7 rounded-2xl bg-white border border-gray-100 shadow-sm hover:shadow-md transition-shadow"
            >
              <div className="w-11 h-11 rounded-xl bg-gray-100 flex items-center justify-center text-gray-700 text-lg mb-5">
                {item.icon}
              </div>
              <h3 className="text-lg font-semibold text-gray-900 mb-2">
                {item.title}
              </h3>
              <p className="text-gray-500 text-sm leading-relaxed">
                {item.desc}
              </p>
            </motion.div>
          ))}
        </div>
      </section>

      {/* TIMELINE */}
      <section className="bg-gray-50 border-y border-gray-100">
        <div className="max-w-4xl mx-auto px-6 py-20">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-80px" }}
            transition={{ duration: 0.6 }}
            className="text-center mb-14"
          >
            <p className="text-xs font-semibold tracking-widest text-gray-400 uppercase mb-4">
              Journey
            </p>
            <h2 className="text-3xl sm:text-4xl font-bold text-gray-900">
              My timeline so far
            </h2>
          </motion.div>
          <div className="relative">
            {/* vertical line */}
            <div className="absolute left-5 sm:left-6 top-0 bottom-0 w-px bg-gray-200" />
            <div className="space-y-10">
              {timeline.map((item, idx) => (
                <motion.div
                  key={item.year}
                  initial={{ opacity: 0, x: -20 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  viewport={{ once: true, margin: "-60px" }}
                  transition={{ duration: 0.5, delay: idx * 0.1 }}
                  className="relative pl-14 sm:pl-16"
                >
                  {/* dot */}
                  <div className="absolute left-3 sm:left-4 top-1 w-5 h-5 rounded-full bg-white border-2 border-gray-300 flex items-center justify-center">
                    <div className="w-2 h-2 rounded-full bg-gray-400" />
                  </div>
                  <span className="inline-block text-xs font-bold tracking-widest text-gray-400 uppercase mb-1">
                    {item.year}
                  </span>
                  <h3 className="text-lg font-semibold text-gray-900 mb-1">
                    {item.title}
                  </h3>
                  <p className="text-gray-500 text-sm leading-relaxed max-w-lg">
                    {item.desc}
                  </p>
                </motion.div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* FOOTER */}
      <footer className="max-w-5xl mx-auto px-6 py-12 text-center text-gray-400 text-sm">
        <p>&copy; {new Date().getFullYear()} Jayesh Sharma. All rights reserved.</p>
      </footer>
    </div>
  );
}
