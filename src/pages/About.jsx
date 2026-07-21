import React from "react";
import { motion } from "framer-motion";
import { useNavigate } from "react-router-dom";
import {
  FaArrowLeft,
  FaGithub,
  FaEnvelope,
  FaLaptopCode,
  FaDatabase,
  FaTerminal,
  FaCode,
  FaGraduationCap,
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
    title: "Full Stack Development",
    desc: "Building full-stack applications with React, Node.js, Express, and MongoDB. From REST APIs to responsive UIs.",
  },
  {
    icon: <FaTerminal />,
    title: "Systems Programming",
    desc: "Building compilers, shells, and low-level systems using C, C++, and Linux system calls. Understanding how things work under the hood.",
  },
  {
    icon: <FaDatabase />,
    title: "DSA & Competitive Programming",
    desc: "Solved 200+ problems on LeetCode (Top 8.6%). Strong foundation in algorithms, data structures, and problem-solving in C++.",
  },
  {
    icon: <FaCode />,
    title: "Software Engineering",
    desc: "Writing clean, maintainable code with strong CS fundamentals — OOP, OS concepts, DBMS, networks, and system design.",
  },
];

const timeline = [
  {
    year: "2023",
    title: "Started B.Tech CSE",
    desc: "Joined Government Engineering College, Ajmer — Bikaner Technical University to pursue Computer Science Engineering.",
    icon: <FaGraduationCap />,
  },
  {
    year: "2024",
    title: "Full Stack & Systems Programming",
    desc: "Built full-stack apps with MERN stack and dived into systems programming — compilers, shells, and Linux internals.",
    icon: <FaCode />,
  },
  {
    year: "2025",
    title: "Competitive Programming & Open Source",
    desc: "Solved 200+ DSA problems across LeetCode, GeeksforGeeks, and CodeStudio. Built and open-sourced multiple projects on GitHub.",
    icon: <FaGithub />,
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
      <section className="max-w-4xl mx-auto px-6 pt-10 pb-12 md:pt-16 md:pb-20 text-center">
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
            B.Tech CSE @ GEC Ajmer &middot; Systems Programming &middot; Full
            Stack Development &middot; DSA in C++
          </p>
          <p className="text-gray-400 text-sm mb-8">
            +91-8690617801 &middot; 0574.jayesh.sharma@gmail.com
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
        <div className="max-w-4xl mx-auto px-6 py-10 md:py-20">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-80px" }}
            transition={{ duration: 0.6 }}
          >
            <p className="text-xs font-semibold tracking-widest text-gray-400 uppercase mb-4">
              About Me
            </p>
            <h2 className="text-2xl sm:text-3xl md:text-4xl font-bold text-gray-900 mb-8">
              A developer who builds things
              <br className="hidden sm:block" /> from the ground up.
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
              Engineering College, Ajmer (Bikaner Technical University) with a
              CGPA of 7.15/10. I'm passionate about understanding how things
              work — from compiler internals to operating system primitives.
            </p>
            <p>
              I specialize in systems programming (C, C++, Linux) and full-stack
              web development (React, Node.js, Express, MongoDB). I've solved
              200+ DSA problems across LeetCode (Top 8.6%), GeeksforGeeks, and
              CodeStudio, with emphasis on arrays, trees, graphs, DP, and greedy
              algorithms.
            </p>
            <p>
              I enjoy building things from scratch — custom compilers, Unix
              shells, algorithm visualizers. Every project teaches me something
              new about how software really works.
            </p>
          </motion.div>
        </div>
      </section>

      {/* WHAT I DO */}
      <section className="max-w-5xl mx-auto px-6 py-10 md:py-20">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-80px" }}
          transition={{ duration: 0.6 }}
          className="text-center mb-10 md:mb-14"
        >
          <p className="text-xs font-semibold tracking-widest text-gray-400 uppercase mb-4">
            What I Do
          </p>
          <h2 className="text-2xl sm:text-3xl md:text-4xl font-bold text-gray-900">
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

      {/* EDUCATION */}
      <section className="bg-gray-50 border-y border-gray-100">
        <div className="max-w-4xl mx-auto px-6 py-10 md:py-20">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-80px" }}
            transition={{ duration: 0.6 }}
            className="text-center mb-10 md:mb-14"
          >
            <p className="text-xs font-semibold tracking-widest text-gray-400 uppercase mb-4">
              Education
            </p>
            <h2 className="text-2xl sm:text-3xl md:text-4xl font-bold text-gray-900">
              My journey so far
            </h2>
          </motion.div>
          <div className="relative">
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
