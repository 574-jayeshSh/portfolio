import { motion } from "framer-motion";
import projectsData from "../data/projects";
import { useGitHubRepos } from "../hooks/useGitHub";
import PortfolioLayout, { Eyebrow } from "../components/PortfolioLayout";
import { FaGithub, FaExternalLinkAlt } from "react-icons/fa";
import imgCompiler from "../assets/project-1.jpeg";
import imgShell from "../assets/project-2.jpeg";
import imgPathfinding from "../assets/about.png";
import imgSudoku from "../assets/contact-image.jpeg";

import imgSmartPtr from "../assets/brush.png";
const imgVector = "/model.png";

// Cover pictures keyed by GitHub repo name + fallback project name.
const PROJECT_IMAGES = {
  "STL-Vector-from-Scratch": imgVector,
  "STL Vector from Scratch (C++)": imgVector,
  "smart-pointer-library": imgSmartPtr,
  "Smart Pointer Library (C++)": imgSmartPtr,
  compiler_cpp: imgCompiler,
  "Custom C++ Compiler with Multi-Phase Analysis": imgCompiler,
  mini_shell: imgShell,
  "Unix-Like Shell with Process Management": imgShell,
  "pathfinding-visualizer": imgPathfinding,
  "Interactive Algorithm Visualization Platform": imgPathfinding,
  sudoku_solver: imgSudoku,
  "Sudoku Solver with Backtracking Visualization": imgSudoku,
};

function getProjectImage(repo) {
  return repo.image || PROJECT_IMAGES[repo.name];
}

const meta = [
  { year: "2026", org: "systems · c++" },
  { year: "2026", org: "systems · c++" },
  { year: "2025", org: "systems · c++" },
  { year: "2025", org: "systems · c" },
  { year: "2024", org: "web · react" },
  { year: "2024", org: "web · react" },
];

export default function Projects() {
  const { repos, loading } = useGitHubRepos();
  const fallback = projectsData.content.map((p, i) => ({
    name: p.name,
    description: p.description,
    language: p.language,
    html_url: p.github,
    homepage: "",
    image: p.image,
    stargazers_count: p.stars,
    forks_count: p.forks,
    ...meta[i % meta.length],
  }));

  const list = (repos.length ? repos : fallback)
    .filter((r) => !["574-jayeshSh", "portfolio"].includes(r.name))
    .slice(0, 12)
    .map((r, i) => ({
      ...r,
      year: r.year || meta[i % meta.length]?.year || "2024",
      org: r.org || r.language?.toLowerCase() || "personal project",
    }));

  return (
    <PortfolioLayout footerNote="More on GitHub">
      <section className="max-w-5xl mx-auto px-6 pt-16 md:pt-24 pb-8 text-center">
        <Eyebrow>Curated collection</Eyebrow>
        <motion.h1
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          className="text-4xl md:text-6xl font-bold tracking-tight"
        >
          Work
        </motion.h1>
        <motion.p
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.15 }}
          className="mt-4 text-gray-500 text-base md:text-lg"
        >
          A curated collection showcasing all my builds — systems, web &amp;
          algorithms.
        </motion.p>
      </section>

      <section className="max-w-5xl mx-auto px-6 pb-20">
        {loading && (
          <div className="grid md:grid-cols-2 gap-5">
            {Array.from({ length: 4 }).map((_, i) => (
              <div key={i} className="rounded-2xl border border-gray-100 p-7 animate-pulse">
                <div className="h-40 bg-gray-100 rounded-xl w-full mb-4" />
                <div className="h-3 bg-gray-100 rounded w-1/3 mb-4" />
                <div className="h-6 bg-gray-100 rounded w-2/3 mb-3" />
                <div className="h-3 bg-gray-50 rounded w-full" />
              </div>
            ))}
          </div>
        )}

        {!loading && (
          <div className="grid md:grid-cols-2 gap-5">
            {list.map((repo, i) => (
              <motion.a
                key={repo.name}
                href={repo.html_url}
                target="_blank"
                rel="noopener noreferrer"
                initial={{ opacity: 0, y: 24 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: "-40px" }}
                transition={{ duration: 0.45, delay: (i % 2) * 0.08 }}
                className="group rounded-2xl border border-gray-100 bg-white p-7 hover:border-gray-300 hover:shadow-lg hover:-translate-y-1 transition-all block"
              >
                <p className="text-xs text-gray-400 mb-3">
                  <span className="font-semibold text-gray-500">{repo.year}</span>
                  {"  ·  "}
                  <span className="lowercase">{repo.org}</span>
                </p>
                {getProjectImage(repo) ? (
                  <img
                    src={getProjectImage(repo)}
                    alt={repo.name}
                    loading="lazy"
                    className="w-full h-44 object-cover rounded-xl mb-4 border border-gray-100"
                  />
                ) : (
                  <div className="w-full h-44 rounded-xl mb-4 bg-gradient-to-br from-gray-100 to-gray-200 border border-gray-100" />
                )}
                <h3 className="text-xl font-bold tracking-tight leading-snug mb-2 group-hover:opacity-70 transition-opacity capitalize">
                  {repo.name.replace(/[-_]/g, " ")}
                </h3>
                <p className="text-sm text-gray-500 leading-relaxed line-clamp-2 mb-5">
                  {repo.description || "No description available."}
                </p>
                <div className="flex items-center gap-4 text-xs text-gray-400">
                  <span className="inline-flex items-center gap-1.5 font-medium text-gray-600">
                    <FaGithub className="w-3.5 h-3.5" /> Code
                  </span>
                  {repo.homepage && (
                    <span className="inline-flex items-center gap-1.5 font-medium text-gray-600">
                      <FaExternalLinkAlt className="w-3 h-3" /> Live
                    </span>
                  )}
                  {repo.language && (
                    <span className="ml-auto px-2.5 py-1 rounded-full bg-gray-50 border border-gray-100 text-gray-600">
                      {repo.language}
                    </span>
                  )}
                </div>
              </motion.a>
            ))}
          </div>
        )}

        <p className="text-center text-sm text-gray-400 mt-12">
          + {projectsData.content.length} featured systems builds documented in detail on GitHub.
        </p>
      </section>
    </PortfolioLayout>
  );
}
