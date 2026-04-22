import React, { useState, useEffect, useRef } from "react";
import { NavLink, useLocation } from "react-router-dom";
import { profile } from "../data/portfolioData";
// import { SocialIcon, SunIcon, MoonIcon } from "./Icons";
import { Analytics } from "@vercel/analytics/react";

// ─── Scroll Reveal (exported for use in pages) ─────────────────────
export const Reveal: React.FC<{ children: React.ReactNode; delay?: number }> = ({ children, delay = 0 }) => {
  const ref = useRef<HTMLDivElement>(null);
  const [vis, setVis] = useState(false);
  useEffect(() => {
    const el = ref.current; if (!el) return;
    const obs = new IntersectionObserver(
      ([e]) => { if (e.isIntersecting) { setVis(true); obs.disconnect(); } },
      { threshold: 0.04 }
    );
    obs.observe(el); return () => obs.disconnect();
  }, []);
  return (
    <div ref={ref} style={{
      transition: `opacity 0.5s ease ${delay}ms, transform 0.5s ease ${delay}ms`,
      opacity: vis ? 1 : 0,
      transform: vis ? "translateY(0)" : "translateY(18px)",
    }}>
      {children}
    </div>
  );
};

// ─── Page Title helper ─────────────────────────────────────────────
export const PageTitle: React.FC<{ emoji: string; title: string; subtitle?: string }> = ({ emoji, title, subtitle }) => (
  <div className="pt-12 pb-8 border-b border-white/[0.07]">
    <Reveal>
      <div className="flex items-center gap-3 mb-2">
        <span className="text-2xl">{emoji}</span>
        <h1 className="font-display font-bold text-2xl text-white/90">{title}</h1>
      </div>
      {subtitle && <p className="text-[14px] text-white/40 ml-10">{subtitle}</p>}
    </Reveal>
  </div>
);

// ─── Copy Button ───────────────────────────────────────────────────
export const CopyButton: React.FC<{ text: string }> = ({ text }) => {
  const [copied, setCopied] = useState(false);
  const handle = () => { navigator.clipboard.writeText(text).then(() => { setCopied(true); setTimeout(() => setCopied(false), 1800); }); };
  return (
    <button onClick={handle} title="Copy" className="flex items-center p-1.5 rounded border border-white/10 text-white/30 hover:border-violet-400/50 hover:text-violet-400 transition-colors">
      {copied
        ? <svg width="13" height="13" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round"><polyline points="20 6 9 17 4 12"/></svg>
        : <svg width="13" height="13" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><rect width="14" height="14" x="8" y="8" rx="2" ry="2"/><path d="M4 16c-1.1 0-2-.9-2-2V4c0-1.1.9-2 2-2h10c1.1 0 2 .9 2 2"/></svg>
      }
    </button>
  );
};

// ─── Nav links config — ADD NEW PAGES HERE ─────────────────────────
export const navLinks = [
  { to: "/",            label: "home"     },
  { to: "/projects",   label: "projects" },
  { to: "/posts",      label: "posts"    },
  { to: "/about",      label: "about"    },
  // To add a new page: { to: "/newpage", label: "newpage" }
];

// ─── Layout ────────────────────────────────────────────────────────
const Layout: React.FC<{ children: React.ReactNode }> = ({ children }) => {
  const [dark, setDark] = useState(true);
  const location = useLocation();

  useEffect(() => {
    document.documentElement.classList.toggle("dark", dark);
  }, [dark]);

  // Reset scroll on page change
  useEffect(() => { window.scrollTo(0, 0); }, [location.pathname]);

  return (
    <div className="min-h-screen flex flex-col bg-[#0e0e11] text-white/90 transition-colors duration-300">
      <Analytics />
      {/* Nav */}
      <header className="sticky top-0 z-50 flex items-center justify-between h-[52px] px-6 bg-[#0e0e11]/90 backdrop-blur-xl border-b border-white/[0.07]"
        style={{ paddingLeft: "max(24px, calc((100% - 820px) / 2))", paddingRight: "max(24px, calc((100% - 820px) / 2))" }}
      >
        <NavLink to="/" className="flex items-center gap-2 font-display font-semibold text-[15px] text-white/90 hover:text-violet-400 transition-colors">
          <span className="w-2 h-2 rounded-full bg-violet-400 shadow-[0_0_8px_rgba(192,132,252,0.5)]"
            style={{ animation: "pulse-dot 2.4s ease-in-out infinite" }} />
          {profile.name}
        </NavLink>

        <nav className="flex items-center gap-1">
          {navLinks.map(({ to, label }) => (
            <NavLink
              key={to}
              to={to}
              end={to === "/"}
              className={({ isActive }) =>
                `px-3 py-1.5 rounded-lg text-[13px] font-medium transition-colors ${
                  isActive
                    ? "bg-violet-400/10 text-violet-400"
                    : "text-white/45 hover:text-white/80 hover:bg-white/5"
                }`
              }
            >
              {label}
            </NavLink>
          ))}
          {/* <button
            onClick={() => setDark(!dark)}
            aria-label="Toggle theme"
            className="ml-2 flex items-center p-1.5 rounded-md border border-white/[0.07] text-white/40 hover:border-violet-400/40 hover:text-violet-400 hover:bg-violet-400/5 transition-all"
          >
            {dark ? <SunIcon /> : <MoonIcon />}
          </button> */} 
          {/* I Don't wanna have light mode I changed my mind but maybe in the future */}
        </nav>
      </header>

      {/* Page content */}
      <main className="flex-1 w-full max-w-[820px] mx-auto px-6 pb-20">
        {children}
      </main>

      {/* Footer */}
      <footer className="border-t border-white/[0.06] py-4 flex items-center justify-center gap-2.5 text-[12px] text-white/25">
        <span>© {new Date().getFullYear()} {profile.name}</span>
        <span className="opacity-40">·</span>
        <span>Built with React, TypeScript & Tailwind</span>
      </footer>

      <style>{`
        @keyframes pulse-dot {
          0%, 100% { opacity: 1; transform: scale(1); }
          50% { opacity: 0.4; transform: scale(0.6); }
        }
      `}</style>
    </div>
  );
};

export default Layout;