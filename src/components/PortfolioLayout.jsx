import { useNavigate, useLocation } from "react-router-dom";

const links = [
  { label: "About", path: "/pages/about" },
  { label: "Work", path: "/pages/projects" },
  { label: "Skills", path: "/pages/skills" },
  { label: "Achievements", path: "/pages/achievements" },
  { label: "Contact", path: "/pages/contact" },
];

export function Eyebrow({ children }) {
  return (
    <p className="text-[11px] md:text-xs font-semibold tracking-[0.25em] uppercase text-gray-400 mb-4">
      {children}
    </p>
  );
}

export default function PortfolioLayout({ children, footerNote = "Thank you for stopping by!" }) {
  const navigate = useNavigate();
  const location = useLocation();

  return (
    <div className="min-h-screen bg-white text-gray-900 font-inter antialiased">
      {/* Top nav — minimal like ayaneshu.com */}
      <nav className="sticky top-0 z-50 bg-white/85 backdrop-blur-md border-b border-gray-100">
        <div className="max-w-5xl mx-auto px-6 h-16 flex items-center justify-between">
          <button
            onClick={() => navigate("/")}
            className="text-sm font-bold tracking-tight hover:opacity-70 transition-opacity cursor-pointer"
          >
            Jayesh Sharma
            <span className="hidden sm:inline font-normal text-gray-400 ml-2">
              Developer
            </span>
          </button>
          <div className="flex items-center gap-5 sm:gap-7">
            {links.map((l) => {
              const active = location.pathname === l.path;
              return (
                <button
                  key={l.path}
                  onClick={() => navigate(l.path)}
                  className={`text-[13px] transition-colors cursor-pointer ${
                    active
                      ? "text-gray-900 font-semibold"
                      : "text-gray-500 hover:text-gray-900"
                  } ${l.label === "Achievements" ? "hidden md:block" : ""}`}
                >
                  {l.label}
                </button>
              );
            })}
          </div>
        </div>
      </nav>

      <main>{children}</main>

      {/* Footer — big Email CTA like his */}
      <footer className="border-t border-gray-100 mt-8">
        <div className="max-w-5xl mx-auto px-6 py-14 md:py-20 text-center">
          <p className="text-xs tracking-[0.25em] uppercase text-gray-400 mb-4">
            {footerNote}
          </p>
          <a
            href="mailto:0574.jayesh.sharma@gmail.com"
            className="text-3xl md:text-5xl font-bold tracking-tight hover:opacity-70 transition-opacity"
          >
            Email Me
          </a>
          <div className="flex flex-wrap justify-center gap-x-7 gap-y-2 mt-10 text-sm text-gray-500">
            {links.map((l) => (
              <button
                key={l.path}
                onClick={() => navigate(l.path)}
                className="hover:text-gray-900 transition-colors cursor-pointer"
              >
                {l.label}
              </button>
            ))}
          </div>
          <p className="mt-8 text-xs text-gray-400">
            © {new Date().getFullYear()} Jayesh Sharma · Ajmer, Rajasthan, India
          </p>
        </div>
      </footer>
    </div>
  );
}
