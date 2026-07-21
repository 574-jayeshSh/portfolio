import { useNavigate } from "react-router-dom";
import { motion } from "framer-motion";
import projectsData from "../data/projects";
import { useGitHubRepos, getLanguageColor } from "../hooks/useGitHub";
import {
  FaExternalLinkAlt,
  FaGithub,
  FaStar,
  FaCodeBranch,
} from "react-icons/fa";

const EXCLUDED_REPOS = ["574-jayeshSh", "portfolio"];

function SkeletonCard() {
  return (
    <div className="bg-white rounded-2xl border border-gray-100 p-6 animate-pulse">
      <div className="h-5 bg-gray-200 rounded w-2/3 mb-4" />
      <div className="space-y-2 mb-6">
        <div className="h-3 bg-gray-100 rounded w-full" />
        <div className="h-3 bg-gray-100 rounded w-4/5" />
      </div>
      <div className="flex items-center gap-3 mb-6">
        <div className="h-6 bg-gray-100 rounded-full w-20" />
      </div>
      <div className="flex items-center gap-4 mb-6">
        <div className="h-3 bg-gray-100 rounded w-14" />
        <div className="h-3 bg-gray-100 rounded w-14" />
      </div>
      <div className="flex gap-3">
        <div className="h-8 bg-gray-100 rounded w-24" />
        <div className="h-8 bg-gray-100 rounded w-20" />
      </div>
    </div>
  );
}

export default function Projects() {
  const navigate = useNavigate();
  const { repos, loading } = useGitHubRepos();

  const filteredRepos = (repos.length ? repos : projectsData.content).filter(
    (repo) => !EXCLUDED_REPOS.includes(repo.name)
  );

  const languages = filteredRepos.reduce((acc, repo) => {
    const lang = repo.language;
    if (lang) {
      acc[lang] = (acc[lang] || 0) + 1;
    }
    return acc;
  }, {});

  return (
    <div className="min-h-screen bg-white">
      {/* Nav */}
      <nav className="sticky top-0 z-50 bg-white/80 backdrop-blur-md border-b border-gray-100">
        <div className="max-w-6xl mx-auto px-6 h-16 flex items-center justify-between">
          <button
            onClick={() => navigate("/")}
            className="text-sm font-medium text-gray-600 hover:text-gray-900 transition-colors"
          >
            &larr; Home
          </button>
          <div className="flex items-center gap-6">
            <button
              onClick={() => navigate("/projects")}
              className="text-sm font-medium text-gray-900"
            >
              Projects
            </button>
            <button
              onClick={() => navigate("/about")}
              className="text-sm font-medium text-gray-500 hover:text-gray-900 transition-colors"
            >
              About
            </button>
            <button
              onClick={() => navigate("/contact")}
              className="text-sm font-medium text-gray-500 hover:text-gray-900 transition-colors"
            >
              Contact
            </button>
          </div>
        </div>
      </nav>

      {/* Header */}
      <section className="max-w-6xl mx-auto px-6 pt-20 pb-10">
        <motion.h1
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          className="text-4xl md:text-5xl font-bold text-gray-900 mb-3"
        >
          Projects
        </motion.h1>
        <motion.p
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.1 }}
          className="text-lg text-gray-500"
        >
          Things I&apos;ve built
        </motion.p>
      </section>

      {/* Language filter bar */}
      <section className="max-w-6xl mx-auto px-6 pb-10">
        <motion.div
          initial={{ opacity: 0, y: 10 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.4, delay: 0.2 }}
          className="flex flex-wrap gap-2"
        >
          <span className="px-3 py-1.5 text-xs font-medium rounded-full bg-gray-900 text-white">
            All ({filteredRepos.length})
          </span>
          {Object.entries(languages)
            .sort((a, b) => b[1] - a[1])
            .map(([lang, count]) => (
              <span
                key={lang}
                className="px-3 py-1.5 text-xs font-medium rounded-full bg-gray-100 text-gray-600 flex items-center gap-1.5"
              >
                <span
                  className="w-2 h-2 rounded-full"
                  style={{ backgroundColor: getLanguageColor(lang) }}
                />
                {lang} ({count})
              </span>
            ))}
        </motion.div>
      </section>

      {/* Project grid */}
      <section className="max-w-6xl mx-auto px-6 pb-24">
        {loading ? (
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {Array.from({ length: 6 }).map((_, i) => (
              <SkeletonCard key={i} />
            ))}
          </div>
        ) : (
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {filteredRepos.map((repo, i) => (
              <motion.div
                key={repo.name}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: "-50px" }}
                transition={{ duration: 0.4, delay: i * 0.05 }}
                className="group bg-white rounded-2xl border border-gray-100 p-6 shadow-sm hover:shadow-md hover:-translate-y-1 transition-all duration-300"
              >
                <h3 className="text-base font-semibold text-gray-900 mb-2 group-hover:text-blue-600 transition-colors truncate">
                  {repo.name}
                </h3>
                <p className="text-sm text-gray-500 leading-relaxed mb-5 line-clamp-2 min-h-[2.5rem]">
                  {repo.description || "No description available."}
                </p>

                {repo.language && (
                  <div className="mb-4">
                    <span className="inline-flex items-center gap-1.5 px-2.5 py-1 text-xs font-medium rounded-full bg-gray-50 text-gray-700 border border-gray-100">
                      <span
                        className="w-2 h-2 rounded-full"
                        style={{
                          backgroundColor: getLanguageColor(repo.language),
                        }}
                      />
                      {repo.language}
                    </span>
                  </div>
                )}

                <div className="flex items-center gap-4 text-xs text-gray-400 mb-5">
                  <span className="flex items-center gap-1">
                    <FaStar className="w-3.5 h-3.5" />
                    {repo.stargazers_count}
                  </span>
                  <span className="flex items-center gap-1">
                    <FaCodeBranch className="w-3.5 h-3.5" />
                    {repo.forks_count}
                  </span>
                </div>

                <div className="flex items-center gap-2">
                  <a
                    href={repo.html_url}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-flex items-center gap-1.5 px-3 py-1.5 text-xs font-medium text-gray-700 bg-gray-50 hover:bg-gray-100 rounded-lg transition-colors border border-gray-100"
                  >
                    <FaGithub className="w-3.5 h-3.5" />
                    Code
                  </a>
                  {repo.homepage && (
                    <a
                      href={repo.homepage}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="inline-flex items-center gap-1.5 px-3 py-1.5 text-xs font-medium text-gray-700 bg-gray-50 hover:bg-gray-100 rounded-lg transition-colors border border-gray-100"
                    >
                      <FaExternalLinkAlt className="w-3.5 h-3.5" />
                      Live
                    </a>
                  )}
                </div>
              </motion.div>
            ))}
          </div>
        )}

        {!loading && filteredRepos.length === 0 && (
          <div className="text-center py-20">
            <p className="text-gray-400 text-sm">No projects found.</p>
          </div>
        )}
      </section>
    </div>
  );
}
