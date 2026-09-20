import { motion } from "framer-motion";
import PortfolioLayout, { Eyebrow } from "../components/PortfolioLayout";

const journey = [
  {
    year: "2023",
    title: "Started B.Tech CSE",
    place: "GEC Ajmer",
    desc: "Joined Government Engineering College Ajmer (BTU) for Computer Science. Fell in love with C, C++ and how computers really work.",
  },
  {
    year: "2024",
    title: "Full Stack & Systems",
    place: "Self-taught + College",
    desc: "Built MERN apps by day, compilers and Unix shells by night. Learned React, Node, Express, MongoDB alongside Linux system calls.",
  },
  {
    year: "2025",
    title: "DSA & Open Source",
    place: "LeetCode · GitHub",
    desc: "Solved 200+ DSA problems (Top 8.6% on LeetCode). Open-sourced compilers, shells and visualizers. CGPA 7.15/10.",
  },
  {
    year: "2026",
    title: "Full Stack Developer Intern",
    place: "Yug3DAI · Remote",
    desc: "Building a 3D-printing quotation platform with Next.js, TypeScript, PostgreSQL and Prisma — auth, CAD uploads, automated pricing, cloud storage. Shipped production-ready.",
  },
];

const pitstops = [
  { org: "Yug3DAI Private Limited", role: "Full Stack Developer Intern", date: "Jun 2026 — Present" },
  { org: "GEC Ajmer", role: "B.Tech Computer Engineering", date: "2023 — 2027" },
  { org: "LeetCode", role: "200+ Problems · Top 8.6%", date: "2024 — Present" },
  { org: "GitHub", role: "Open Source Builder", date: "2024 — Present" },
  { org: "MERN Stack", role: "Full Stack Developer", date: "2024 — Present" },
];

export default function About() {
  return (
    <PortfolioLayout footerNote="Thanks for reading my story!">
      {/* Philosophy — like his "It's the details..." */}
      <section className="max-w-4xl mx-auto px-6 pt-16 md:pt-24 pb-12 text-center">
        <Eyebrow>Engineering Philosophy</Eyebrow>
        <motion.h1
          initial={{ opacity: 0, y: 24 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="text-3xl sm:text-4xl md:text-6xl font-bold tracking-tight leading-[1.1]"
        >
          &ldquo;Build from scratch,
          <br />
          understand every layer.&rdquo;
        </motion.h1>
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.3 }}
          className="mt-8 flex flex-col items-center"
        >
          <img
            src="https://avatars.githubusercontent.com/u/202250730?v=4"
            alt="Jayesh Sharma"
            className="w-20 h-20 rounded-full object-cover border border-gray-200 mb-4"
          />
          <p className="text-sm text-gray-500">
            Hey, I&apos;m Jayesh! — Full Stack Developer Intern @ Yug3DAI
          </p>
        </motion.div>
      </section>

      {/* Where I am from */}
      <section className="max-w-3xl mx-auto px-6 py-12 md:py-16">
        <Eyebrow>Where I am from</Eyebrow>
        <h2 className="text-2xl md:text-3xl font-bold tracking-tight mb-6">
          Born and raised in Ajmer, Rajasthan.
        </h2>
        <div className="space-y-5 text-gray-600 leading-relaxed text-base md:text-lg">
          <p>
            Growing up I was the curious kid — taking things apart, sketching,
            playing cricket, and spending way too much time on the family
            computer wondering how it all worked.
          </p>
          <p>
            Like many Indian middle-class kids, I was expected to follow the
            engineering path. I got into Government Engineering College Ajmer
            in 2023 — and to my surprise, my love for building software sparked
            in the first semester itself.
          </p>
          <p>
            Since childhood I&apos;ve had a liking for{" "}
            <span className="text-gray-900 font-medium">chai</span>. So if you
            ever want to grab my attention, a simple tea invitation will do
            the trick.
          </p>
        </div>
      </section>

      {/* How I started */}
      <section className="bg-gray-50 border-y border-gray-100">
        <div className="max-w-3xl mx-auto px-6 py-12 md:py-16">
          <Eyebrow>How I started building</Eyebrow>
          <h2 className="text-2xl md:text-3xl font-bold tracking-tight mb-6">
            From &ldquo;Hello World&rdquo; to compilers.
          </h2>
          <div className="space-y-5 text-gray-600 leading-relaxed text-base md:text-lg">
            <p>
              It all began with C++ and DSA. One problem a day turned into
              200+ problems across LeetCode, GeeksforGeeks and CodeStudio —
              arrays, trees, graphs, DP and greedy.
            </p>
            <p>
              But I didn&apos;t want to just solve problems. I wanted to know
              how things work under the hood. So I built a custom C++ compiler
              with lexical analysis, parsing and code generation — and then a
              Unix-like shell with fork, exec and process management.
            </p>
            <p>
              When I needed a break from systems, I built for the web — a
              pathfinding visualizer, a Sudoku solver with backtracking
              animation, full-stack MERN apps with auth, REST APIs and
              real-time features.
            </p>
          </div>
        </div>
      </section>

      {/* Spare time */}
      <section className="max-w-3xl mx-auto px-6 py-12 md:py-16">
        <Eyebrow>In my spare time</Eyebrow>
        <p className="text-gray-600 leading-relaxed text-base md:text-lg">
          You can catch me experimenting with Linux ricing, reading OS
          internals, or visualising algorithms. Apart from that, you&apos;ll
          often find me playing cricket, travelling across Rajasthan, hitting
          the gym, and staying up to date with the latest in AI and dev
          tools.
        </p>
        <p className="mt-8 text-xl md:text-2xl font-bold tracking-tight">
          Thank you for listening to my story!
        </p>
      </section>

      {/* Journey timeline */}
      <section className="bg-gray-50 border-y border-gray-100">
        <div className="max-w-4xl mx-auto px-6 py-12 md:py-20">
          <div className="text-center mb-12">
            <Eyebrow>My journey so far</Eyebrow>
            <h2 className="text-2xl md:text-4xl font-bold tracking-tight">
              Where it all started
            </h2>
          </div>
          <div className="relative">
            <div className="absolute left-4 top-0 bottom-0 w-px bg-gray-200" />
            <div className="space-y-10">
              {journey.map((j, i) => (
                <motion.div
                  key={j.year}
                  initial={{ opacity: 0, x: -20 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.5, delay: i * 0.08 }}
                  className="relative pl-12"
                >
                  <div className="absolute left-2.5 top-1.5 w-3 h-3 rounded-full bg-gray-900" />
                  <p className="text-xs font-bold tracking-widest text-gray-400 uppercase">
                    {j.year} · {j.place}
                  </p>
                  <h3 className="text-lg font-semibold mt-1">{j.title}</h3>
                  <p className="text-sm text-gray-500 leading-relaxed mt-1 max-w-xl">
                    {j.desc}
                  </p>
                </motion.div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Professional pitstops — like his Work Experience */}
      <section className="max-w-4xl mx-auto px-6 py-12 md:py-20">
        <Eyebrow>Professional pitstops</Eyebrow>
        <h2 className="text-2xl md:text-4xl font-bold tracking-tight mb-10">
          Work &amp; Milestones
        </h2>
        <div className="divide-y divide-gray-100 border-y border-gray-100">
          {pitstops.map((p) => (
            <div
              key={p.org}
              className="py-5 flex flex-col sm:flex-row sm:items-center justify-between gap-1"
            >
              <div>
                <p className="font-semibold">{p.org}</p>
                <p className="text-sm text-gray-500">{p.role}</p>
              </div>
              <p className="text-sm text-gray-400 shrink-0">{p.date}</p>
            </div>
          ))}
        </div>
      </section>
    </PortfolioLayout>
  );
}
