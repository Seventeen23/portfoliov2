import React, { useState, useEffect, useRef } from "react";
import {
  profile, projectCategories, blogPosts, friends,
  type Project, type ProjectCategory, type BlogPost, type Friend,
} from "./data/portfolioData";

// ─── SVG Icons ─────────────────────────────────────────────────────
const GithubIcon = ({ className = "" }) => (
  <svg className={className} width="18" height="18" viewBox="0 0 24 24" fill="currentColor">
    <path d="M12 0C5.37 0 0 5.37 0 12c0 5.31 3.435 9.795 8.205 11.385.6.105.825-.255.825-.57 0-.285-.015-1.23-.015-2.235-3.015.555-3.795-.735-4.035-1.41-.135-.345-.72-1.41-1.23-1.695-.42-.225-1.02-.78-.015-.795.945-.015 1.62.87 1.845 1.23 1.08 1.815 2.805 1.305 3.495.99.105-.78.42-1.305.765-1.605-2.67-.3-5.46-1.335-5.46-5.925 0-1.305.465-2.385 1.23-3.225-.12-.3-.54-1.53.12-3.18 0 0 1.005-.315 3.3 1.23.96-.27 1.98-.405 3-.405s2.04.135 3 .405c2.295-1.56 3.3-1.23 3.3-1.23.66 1.65.24 2.88.12 3.18.765.84 1.23 1.905 1.23 3.225 0 4.605-2.805 5.625-5.475 5.925.435.375.81 1.095.81 2.22 0 1.605-.015 2.895-.015 3.3 0 .315.225.69.825.57A12.02 12.02 0 0 0 24 12c0-6.63-5.37-12-12-12z"/>
  </svg>
);
const TwitterIcon = ({ className = "" }) => (
  <svg className={className} width="18" height="18" viewBox="0 0 24 24" fill="currentColor">
    <path d="M18.244 2.25h3.308l-7.227 8.26 8.502 11.24H16.17l-5.214-6.817L4.99 21.75H1.68l7.73-8.835L1.254 2.25H8.08l4.713 6.231zm-1.161 17.52h1.833L7.084 4.126H5.117z"/>
  </svg>
);
const BlueskyIcon = ({ className = "" }) => (
  <svg className={className} width="18" height="18" viewBox="0 0 600 530" fill="currentColor">
    <path d="M135.72 44.03C202.216 93.951 273.74 195.17 300 249.49c26.262-54.316 97.782-155.54 164.28-205.46C512.26 8.009 590-19.862 590 68.825c0 17.712-10.155 148.79-16.111 170.07-20.703 73.984-96.144 92.854-163.25 81.433 117.3 19.964 147.14 86.092 82.697 152.22-122.39 125.59-175.91-31.511-189.63-71.766-2.514-7.38-3.69-10.832-3.708-7.896-.017-2.936-1.193.516-3.707 7.896-13.714 40.255-67.233 197.36-189.63 71.766-64.444-66.128-34.605-132.26 82.697-152.22-67.108 11.421-142.55-7.449-163.25-81.433C20.15 217.613 10 86.535 10 68.825c0-88.687 77.742-60.816 125.72-24.795z"/>
  </svg>
);
const DiscordIcon = ({ className = "" }) => (
  <svg className={className} width="18" height="18" viewBox="0 0 24 24" fill="currentColor">
    <path d="M20.317 4.37a19.791 19.791 0 0 0-4.885-1.515.074.074 0 0 0-.079.037c-.21.375-.444.864-.608 1.25a18.27 18.27 0 0 0-5.487 0 12.64 12.64 0 0 0-.617-1.25.077.077 0 0 0-.079-.037A19.736 19.736 0 0 0 3.677 4.37a.07.07 0 0 0-.032.027C.533 9.046-.32 13.58.099 18.057.1 18.08.112 18.1.128 18.11a19.9 19.9 0 0 0 5.993 3.03.078.078 0 0 0 .084-.028c.462-.63.874-1.295 1.226-1.994a.076.076 0 0 0-.041-.106 13.107 13.107 0 0 1-1.872-.892.077.077 0 0 1-.008-.128 10.2 10.2 0 0 0 .372-.292.074.074 0 0 1 .077-.01c3.928 1.793 8.18 1.793 12.062 0a.074.074 0 0 1 .078.01c.12.098.246.198.373.292a.077.077 0 0 1-.006.127 12.299 12.299 0 0 1-1.873.892.077.077 0 0 0-.041.107c.36.698.772 1.362 1.225 1.993a.076.076 0 0 0 .084.028 19.839 19.839 0 0 0 6.002-3.03.077.077 0 0 0 .032-.054c.5-5.177-.838-9.674-3.549-13.66a.061.061 0 0 0-.031-.03zM8.02 15.33c-1.183 0-2.157-1.085-2.157-2.419 0-1.333.956-2.419 2.157-2.419 1.21 0 2.176 1.096 2.157 2.42 0 1.333-.956 2.418-2.157 2.418zm7.975 0c-1.183 0-2.157-1.085-2.157-2.419 0-1.333.955-2.419 2.157-2.419 1.21 0 2.176 1.096 2.157 2.42 0 1.333-.946 2.418-2.157 2.418z"/>
  </svg>
);
const EmailIcon = ({ className = "" }) => (
  <svg className={className} width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
    <rect x="2" y="4" width="20" height="16" rx="2"/>
    <path d="m22 7-8.97 5.7a1.94 1.94 0 0 1-2.06 0L2 7"/>
  </svg>
);
const ItchIcon = ({ className = "" }) => (
  <svg className={className} width="18" height="18" viewBox="0 0 24 24" fill="currentColor">
    <path d="M3.13 1.338C2.08 1.96.02 4.328 0 4.95v1.03c0 1.302 1.22 2.44 2.325 2.44 1.35 0 2.486-1.14 2.486-2.476 0 1.336 1.07 2.476 2.42 2.476s2.42-1.14 2.42-2.476c0 1.336 1.085 2.476 2.435 2.476h.028c1.35 0 2.436-1.14 2.436-2.476 0 1.336.986 2.476 2.337 2.476 1.35 0 2.486-1.14 2.486-2.476 0 1.336 1.07 2.476 2.42 2.476C22.78 8.42 24 7.282 24 5.98V4.95c-.02-.622-2.08-2.99-3.13-3.612C19.22.195 4.95.47 3.13 1.338zM8.5 9.5v.006c-.453.395-.975.6-1.553.6A2.44 2.44 0 0 1 5.125 9.5 2.44 2.44 0 0 1 3.5 10.107c-.56 0-1.06-.2-1.5-.56V18c.195 1.457 1.22 1.962 2.09 1.962H19.93c.87 0 1.896-.505 2.09-1.962V9.547c-.44.36-.94.56-1.5.56a2.44 2.44 0 0 1-1.625-.607 2.44 2.44 0 0 1-1.82.607c-.635 0-1.19-.212-1.625-.558a2.44 2.44 0 0 1-1.624.558c-.636 0-1.2-.218-1.637-.572A2.456 2.456 0 0 1 12 10.107a2.44 2.44 0 0 1-1.623.606 2.44 2.44 0 0 1-1.877-.613zM9 12h6v2H9zm0 3h6v2.5c0 .5-.5 1-1 1h-4c-.5 0-1-.5-1-1z"/>
  </svg>
);
const LinkIcon = ({ className = "" }) => (
  <svg className={className} width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
    <path d="M10 13a5 5 0 0 0 7.54.54l3-3a5 5 0 0 0-7.07-7.07l-1.72 1.71"/>
    <path d="M14 11a5 5 0 0 0-7.54-.54l-3 3a5 5 0 0 0 7.07 7.07l1.71-1.71"/>
  </svg>
);
const ChevronIcon = ({ className = "" }) => (
  <svg className={className} width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round">
    <path d="m9 18 6-6-6-6"/>
  </svg>
);
const SunIcon = () => (
  <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
    <circle cx="12" cy="12" r="4"/>
    <path d="M12 2v2M12 20v2M4.93 4.93l1.41 1.41M17.66 17.66l1.41 1.41M2 12h2M20 12h2M6.34 17.66l-1.41 1.41M19.07 4.93l-1.41 1.41"/>
  </svg>
);
const MoonIcon = () => (
  <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
    <path d="M12 3a6 6 0 0 0 9 9 9 9 0 1 1-9-9z"/>
  </svg>
);
// const CopyIcon = () => (
//   <svg width="13" height="13" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
//     <rect width="14" height="14" x="8" y="8" rx="2" ry="2"/>
//     <path d="M4 16c-1.1 0-2-.9-2-2V4c0-1.1.9-2 2-2h10c1.1 0 2 .9 2 2"/>
//   </svg>
// );
// const CheckIcon = () => (
//   <svg width="13" height="13" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round">
//     <polyline points="20 6 9 17 4 12"/>
//   </svg>
// );

const iconMap: Record<string, React.FC<{ className?: string }>> = {
  github: GithubIcon, twitter: TwitterIcon, bluesky: BlueskyIcon,
  discord: DiscordIcon, email: EmailIcon, itch: ItchIcon,
};
const SocialIcon: React.FC<{ name: string; className?: string }> = ({ name, className }) => {
  const I = iconMap[name] || LinkIcon;
  return <I className={className} />;
};

// ─── Scroll Reveal ──────────────────────────────────────────────────
const Reveal: React.FC<{ children: React.ReactNode; delay?: number }> = ({ children, delay = 0 }) => {
  const ref = useRef<HTMLDivElement>(null);
  const [vis, setVis] = useState(false);
  useEffect(() => {
    const el = ref.current; if (!el) return;
    const obs = new IntersectionObserver(
      ([e]) => { if (e.isIntersecting) { setVis(true); obs.disconnect(); } },
      { threshold: 0.05 }
    );
    obs.observe(el); return () => obs.disconnect();
  }, []);
  return (
    <div
      ref={ref}
      style={{
        transition: `opacity 0.55s ease ${delay}ms, transform 0.55s ease ${delay}ms`,
        opacity: vis ? 1 : 0,
        transform: vis ? "translateY(0)" : "translateY(22px)",
      }}
    >
      {children}
    </div>
  );
};

// ─── Copy Button ────────────────────────────────────────────────────
// const CopyButton: React.FC<{ text: string }> = ({ text }) => {
//   const [copied, setCopied] = useState(false);
//   const handle = () => {
//     navigator.clipboard.writeText(text).then(() => {
//       setCopied(true); setTimeout(() => setCopied(false), 1800);
//     });
//   };
//   return (
//     <button
//       onClick={handle}
//       title="Copy"
//       className="flex items-center p-1.5 rounded border border-white/10 dark:border-white/10 border-black/10 text-white/30 dark:text-white/30 text-black/30 hover:border-violet-400/50 hover:text-violet-400 transition-colors"
//     >
//       {copied ? <CheckIcon /> : <CopyIcon />}
//     </button>
//   );
// };

// ─── Project Card ───────────────────────────────────────────────────
const ProjectCard: React.FC<{ project: Project }> = ({ project }) => (
  <a
    href={project.href}
    target="_blank"
    rel="noopener noreferrer"
    className="rounded-xl group flex flex-col bg-[#16161a] dark:bg-[#16161a] hover:bg-[#1e1e24] dark:hover:bg-[#1e1e24] transition-colors duration-200 overflow-hidden"
  >
    {project.banner && (
      <div className="h-58 overflow-hidden bg-black/20">
        <img
          src={project.banner}
          alt={`${project.title} banner`}
          loading="lazy"
          className="w-full h-full object-fill transition-transform duration-500 group-hover:scale-[1.05]"
        />
      </div>
    )}
    <div className="flex flex-col gap-1.5 p-3.5 flex-1">
      <div className="flex items-center justify-between gap-2">
        <span className="flex items-center flex-wrap gap-1.5 text-[13px] font-semibold text-white/90 dark:text-white/90">
          {project.title}
          {project.isFork && (
            <span className="text-[10px] px-1.5 py-0.5 rounded-full bg-emerald-400/10 text-emerald-400 font-medium">
              Fork
            </span>
          )}
          {project.badge && (
            <span className="text-[10px] px-1.5 py-0.5 rounded-full bg-amber-400/10 text-amber-400 font-medium">
              {project.badge}
            </span>
          )}
        </span>
        <ChevronIcon className="text-white/20 dark:text-white/20 opacity-0 -translate-x-1 group-hover:opacity-100 group-hover:translate-x-0 transition-all duration-200 flex-shrink-0" />
      </div>
      <p className="text-[12.5px] text-white/50 dark:text-white/50 leading-relaxed">
        {project.description}
      </p>
      {project.tags && project.tags.length > 0 && (
        <div className="flex flex-wrap gap-1 mt-1">
          {project.tags.map(tag => (
            <span
              key={tag}
              className="text-[10.5px] px-2 py-0.5 rounded-full bg-violet-400/10 text-violet-400 font-mono"
            >
              {tag}
            </span>
          ))}
        </div>
      )}
    </div>
  </a>
);

// ─── Category Section ───────────────────────────────────────────────
const CategorySection: React.FC<ProjectCategory> = ({ emoji, title, projects }) => {
  const [open, setOpen] = useState(false);
  return (
    <div className="mb-2.5 border border-white/[0.07] dark:border-white/[0.07] border-black/[0.07] rounded-xl overflow-hidden hover:border-white/[0.14] dark:hover:border-white/[0.14] hover:border-black/[0.12] transition-colors">
      <button
        onClick={() => setOpen(!open)}
        className="w-full flex items-center gap-2.5 px-4 py-3 bg-[#16161a] dark:bg-[#16161a] hover:bg-[#1e1e24] dark:hover:bg-[#1e1e24] transition-colors text-left"
      >
        <span className="text-[16px]">{emoji}</span>
        <span className="flex-1 font-display font-semibold text-[13.5px] text-white/90 dark:text-white/90">{title}</span>
        <span className="text-[12px] font-mono px-2 py-0.5 rounded-full bg-white/5 dark:bg-white/5 text-white/30 dark:text-violet-400">
          {projects.length}
        </span>
        <ChevronIcon className={`text-white/30 dark:text-white/30 transition-transform duration-250 ${open ? "rotate-90" : ""}`} />
      </button>
      {open && (
        <div className="p-2 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-2 gap-3 bg-white/[0.05] dark:bg-white/[0.05]">
          {projects.map(p => <ProjectCard key={p.title} project={p} />)}
        </div>
      )}
    </div>
  );
};

// ─── Avatar ────────────────────────────────────────────────────────
const Avatar: React.FC<{ src: string; name: string }> = ({ src, name }) => {
  const initials = name.split(/\s+/).map(w => w[0]).join("").toUpperCase().slice(0, 2);
  return (
    <div className="relative flex-shrink-0 w-[88px] h-[88px] rounded-full overflow-hidden border-2 border-white/10 dark:border-white/10 ring-4 ring-violet-400/10 hover:ring-violet-400/25 transition-all duration-300 bg-[#16161a]">
      {src
        ? <img src={src} alt={name} className="w-full h-full object-cover" />
        : (
          <div className="w-full h-full flex items-center justify-center font-display font-bold text-2xl text-violet-400 bg-violet-400/10">
            {initials}
          </div>
        )
      }
    </div>
  );
};

// ─── App ────────────────────────────────────────────────────────────
const App: React.FC = () => {
  const [dark, setDark] = useState(true);

  useEffect(() => {
    document.documentElement.classList.toggle("dark", dark);
  }, [dark]);

  // For dark-only palette we force dark bg always (matches reference site)
  const pageBg = dark ? "bg-[#0e0e11]" : "bg-[#f5f5f8]";
  const textBase = dark ? "text-white/90" : "text-gray-900";
  const textMuted = dark ? "text-white/50" : "text-gray-500";
  const textFaint = dark ? "text-white/25" : "text-gray-400";
  const borderBase = dark ? "border-white/[0.07]" : "border-black/[0.07]";
  const navBg = dark ? "bg-[#0e0e11]/90" : "bg-[#f5f5f8]/90";
  const cardBg = dark ? "bg-[#16161a]" : "bg-white";

  return (
    <div className={`min-h-screen flex flex-col ${pageBg} ${textBase} transition-colors duration-300`}>

      {/* ── Nav ── */}
      <header className={`sticky top-0 z-50 flex items-center justify-between px-6 h-[52px] ${navBg} backdrop-blur-xl border-b ${borderBase} transition-colors duration-300`}
        style={{ paddingLeft: "max(24px, calc((100% - 820px) / 2))", paddingRight: "max(24px, calc((100% - 820px) / 2))" }}
      >
        <a href="/" className={`flex items-center gap-2 font-display font-semibold text-[15px] ${textBase} hover:text-violet-400 transition-colors`}>
          <span className="w-2 h-2 rounded-full bg-violet-400 shadow-[0_0_8px_rgba(192,132,252,0.5)] animate-[pulse-dot_2.4s_ease-in-out_infinite]" />
          {profile.name}
        </a>
        <nav className="flex items-center gap-5">
          {["projects", "posts", "friends"].map(id => (
            <a key={id} href={`#${id}`} className={`text-[13.5px] ${textMuted} hover:${textBase} transition-colors`}>{id}</a>
          ))}
          <button
            onClick={() => setDark(!dark)}
            aria-label="Toggle theme"
            className={`flex items-center p-1.5 rounded-md border ${borderBase} ${textMuted} hover:border-violet-400/40 hover:text-violet-400 hover:bg-violet-400/5 transition-all`}
          >
            {dark ? <SunIcon /> : <MoonIcon />}
          </button>
        </nav>
      </header>

      {/* ── Main ── */}
      <main
        id="main"
        className="flex-1 w-full max-w-[820px] mx-auto px-6 pb-20"
      >

        {/* Hero */}
        <section className={`flex items-start gap-7 pt-14 pb-12 border-b ${borderBase}`}>
          <Reveal>
            <Avatar src={profile.avatar} name={profile.name} />
          </Reveal>
          <div className="flex-1 min-w-0">
            <Reveal delay={60}>
              <h1 className="font-display font-bold text-[clamp(22px,5vw,30px)] leading-tight mb-1.5">
                Hi, I'm{" "}
                <span className="text-violet-400 relative inline-block after:absolute after:bottom-[-2px] after:left-0 after:right-0 after:h-[2px] after:bg-gradient-to-r after:from-violet-400 after:to-transparent after:rounded-full">
                  {profile.name}
                </span>
              </h1>
              <div className="flex flex-wrap gap-1 mt-1">
                {profile.displayNames.map(n => (
                  <span key={n} className={`text-[11.5px] px-2 py-0.5 rounded ${textFaint} bg-white/5`}>{n}</span>
                ))}
              </div>
              <p className={`text-[12px] ${textFaint} mt-1.5`}>{profile.pronouns}</p>
            </Reveal>
            <Reveal delay={120}>
              <p className={`mt-3 text-[14.5px] ${textMuted} max-w-[480px] leading-relaxed`}>
                {profile.tagline}
              </p>
            </Reveal>
            <Reveal delay={180}>
              <div className="flex flex-wrap gap-1.5 mt-4">
                {profile.socials.filter(s => s.href).map(s => (
                  <a
                    key={s.label}
                    href={s.href}
                    target="_blank"
                    rel="noopener noreferrer"
                    title={s.label}
                    className={`group flex items-center gap-1.5 px-3 py-1.5 rounded-full border ${borderBase} ${cardBg} ${textMuted} hover:border-violet-400/60 hover:text-violet-400 hover:bg-violet-400/5 transition-all duration-200 hover:-translate-y-px text-[13px]`}
                  >
                    <SocialIcon name={s.icon} />
                    <span className="font-medium hidden sm:inline">{s.label}</span>
                  </a>
                ))}
              </div>
            </Reveal>
          </div>
        </section>

        {/* Public Keys
        {publicKeys.length > 0 && (
          <section className="pt-11">
            <Reveal>
              <h2 className={`font-display font-semibold text-[18px] ${textBase} mb-4`}>Public keys</h2>
              <div className="flex flex-col gap-2">
                {publicKeys.map((k: PublicKey) => (
                  <div key={k.label} className={`flex items-center gap-3 px-3.5 py-2.5 rounded-lg border ${borderBase} ${cardBg} flex-wrap`}>
                    <span className="text-[10.5px] font-bold text-violet-400 uppercase tracking-widest min-w-[46px]">{k.label}</span>
                    <code className={`flex-1 font-mono text-[11.5px] ${textMuted} bg-white/5 px-2 py-0.5 rounded truncate`}>{k.value}</code>
                    <CopyButton text={k.value} />
                    {k.downloadHref && (
                      <a href={k.downloadHref} className="text-[12px] text-violet-400/70 hover:text-violet-400 transition-colors">download</a>
                    )}
                  </div>
                ))}
              </div>
            </Reveal>
          </section>
        )} */}

        {/* Blog Posts */}
        {blogPosts.length > 0 && (
          <section className="pt-11" id="posts">
            <Reveal>
              <div className="flex items-baseline justify-between mb-4">
                <h2 className={`font-display font-semibold text-[18px] ${textBase}`}>Posts</h2>
                <a href="/posts" className="text-[13px] text-violet-400/70 hover:text-violet-400 transition-colors">View all →</a>
              </div>
              <div className="flex flex-col gap-0.5">
                {blogPosts.map((p: BlogPost) => (
                  <a
                    key={p.title}
                    href={p.href}
                    target="_blank"
                    rel="noopener noreferrer"
                    className={`group flex items-baseline gap-3.5 px-3 py-2.5 rounded-lg hover:bg-white/[0.04] transition-colors`}
                  >
                    <span className={`flex-shrink-0 font-mono text-[11.5px] ${textFaint} w-[92px]`}>{p.date}</span>
                    <span className={`text-[13.5px] ${textMuted} group-hover:text-violet-400 transition-colors`}>{p.title}</span>
                  </a>
                ))}
              </div>
            </Reveal>
          </section>
        )}

        {/* Projects */}
        <section className="whitespace-pre-line pt-11" id="projects">
          <Reveal>
            <h2 className={`font-display font-semibold text-[18px] ${textBase} mb-4`}>Projects</h2>
          </Reveal>
          {projectCategories.map((cat, i) => (
            <Reveal key={cat.title} delay={i * 40}>
              <CategorySection {...cat} />
            </Reveal>
          ))}
        </section>

        {/* Friends */}
        {friends.length > 0 && (
          <section className="pt-11" id="friends">
            <Reveal>
              <h2 className={`font-display font-semibold text-[18px] ${textBase} mb-4`}>Friends :3</h2>
              <div className="flex flex-wrap gap-4">
                {friends.map((f: Friend) => (
                  <a
                    key={f.name}
                    href={f.href}
                    target="_blank"
                    rel="noopener noreferrer"
                    title={f.name}
                    className="group flex flex-col items-center gap-1.5 hover:-translate-y-1 transition-transform duration-200"
                  >
                    {f.avatar
                      ? (
                        <img
                          src={f.avatar}
                          alt={f.name}
                          className={`w-[52px] h-[52px] rounded-xl object-cover border-2 ${borderBase} group-hover:border-violet-400/50 group-hover:ring-2 group-hover:ring-violet-400/15 transition-all`}
                        />
                      )
                      : (
                        <div className={`w-[52px] h-[52px] rounded-xl border-2 ${borderBase} flex items-center justify-center font-display font-bold text-xl text-violet-400 bg-violet-400/10 group-hover:border-violet-400/50 transition-colors`}>
                          {f.name[0].toUpperCase()}
                        </div>
                      )
                    }
                    <span className={`text-[11px] ${textFaint} max-w-[60px] truncate text-center`}>{f.name}</span>
                  </a>
                ))}
              </div>
            </Reveal>
          </section>
        )}
      </main>

      {/* Footer */}
      <footer className={`border-t ${borderBase} py-4 flex items-center justify-center gap-2.5 text-[12px] ${textFaint}`}>
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

export default App;
