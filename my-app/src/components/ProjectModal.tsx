import React, { useCallback, useEffect, useState } from "react";
import type { Project, ProjectLink } from "../data/portfolioData";
import { ChevronIcon } from "./Icons";
import { ProjectModalContext } from "./projectModalContext";

// ============================================================
// 🪟 PROJECT DETAIL WINDOW
// Click a project card → this opens instead of jumping straight out.
// ============================================================

export const ProjectModalProvider: React.FC<{ children: React.ReactNode }> = ({ children }) => {
  const [project, setProject] = useState<Project | null>(null);

  const open = useCallback((p: Project) => setProject(p), []);
  const close = useCallback(() => setProject(null), []);

  // ESC to dismiss + lock background scroll while open
  useEffect(() => {
    if (!project) return;
    const onKey = (e: KeyboardEvent) => { if (e.key === "Escape") close(); };
    document.addEventListener("keydown", onKey);
    const prevOverflow = document.body.style.overflow;
    document.body.style.overflow = "hidden";
    return () => {
      document.removeEventListener("keydown", onKey);
      document.body.style.overflow = prevOverflow;
    };
  }, [project, close]);

  return (
    <ProjectModalContext.Provider value={{ open, close }}>
      {children}
      {project && <ProjectModal project={project} onClose={close} />}
    </ProjectModalContext.Provider>
  );
};

// ─── Small pieces ──────────────────────────────────────────────────
const SectionHeading: React.FC<{ children: React.ReactNode }> = ({ children }) => (
  <h3 className="font-display font-semibold text-[12px] uppercase tracking-[0.14em] text-violet-400/80 mb-3">
    {children}
  </h3>
);

const SparkIcon: React.FC<{ className?: string }> = ({ className = "" }) => (
  <svg className={className} width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
    <path d="M12 3v4M12 17v4M3 12h4M17 12h4M5.6 5.6l2.8 2.8M15.6 15.6l2.8 2.8M18.4 5.6l-2.8 2.8M8.4 15.6l-2.8 2.8" />
  </svg>
);

const CloseIcon: React.FC<{ className?: string }> = ({ className = "" }) => (
  <svg className={className} width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.2" strokeLinecap="round">
    <path d="M18 6 6 18M6 6l12 12" />
  </svg>
);

const ExternalIcon: React.FC<{ className?: string }> = ({ className = "" }) => (
  <svg className={className} width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.2" strokeLinecap="round" strokeLinejoin="round">
    <path d="M7 17 17 7M8 7h9v9" />
  </svg>
);

const kindStyles: Record<string, string> = {
  live:  "bg-violet-500 text-white hover:bg-violet-400 shadow-[0_6px_24px_rgba(139,92,246,0.35)]",
  paper: "bg-violet-500 text-white hover:bg-violet-400 shadow-[0_6px_24px_rgba(139,92,246,0.35)]",
  repo:  "bg-white/[0.06] text-white/80 border border-white/10 hover:border-violet-400/50 hover:text-violet-300",
  docs:  "bg-white/[0.06] text-white/80 border border-white/10 hover:border-violet-400/50 hover:text-violet-300",
};

// ─── The window itself ─────────────────────────────────────────────
const ProjectModal: React.FC<{ project: Project; onClose: () => void }> = ({ project, onClose }) => {
  const links: ProjectLink[] =
    project.links && project.links.length > 0
      ? project.links
      : project.href && project.href !== "#"
        ? [{
            label: project.href.includes("github.com") ? "View Repository" : "Open Live Project",
            href: project.href,
            kind: project.href.includes("github.com") ? "repo" : "live",
          }]
        : [];

  const closeBtn = (
    <button
      onClick={onClose}
      aria-label="Close project details"
      className="absolute top-3.5 right-3.5 z-20 flex items-center justify-center w-8 h-8 rounded-full bg-black/50 backdrop-blur border border-white/15 text-white/60 hover:text-white hover:border-white/40 hover:bg-black/70 transition-all"
    >
      <CloseIcon />
    </button>
  );

  return (
    <div className="fixed inset-0 z-[100] flex items-start sm:items-center justify-center p-3 sm:p-6 overflow-y-auto pm-backdrop" onClick={onClose}>
      <div
        role="dialog"
        aria-modal="true"
        aria-label={project.title}
        className="pm-panel relative w-full max-w-[760px] my-auto rounded-2xl border border-white/[0.1] bg-[#131318] shadow-[0_24px_80px_rgba(0,0,0,0.65)]"
        onClick={e => e.stopPropagation()}
      >
        {closeBtn}

        {/* ── Banner / header ── */}
        <div className="relative h-40 sm:h-52 overflow-hidden rounded-t-2xl bg-gradient-to-br from-[#1b1626] via-[#151320] to-violet-500/[0.18]">
          {project.banner ? (
            <>
              <img src={project.banner} alt="" className="w-full h-full object-cover opacity-70" />
              <div className="absolute inset-0 bg-gradient-to-t from-[#131318] via-[#131318]/40 to-transparent" />
            </>
          ) : (
            <div className="absolute inset-0 flex items-center justify-center">
              <span className="text-[90px] leading-none opacity-[0.07] select-none">◈</span>
            </div>
          )}
          <div className="absolute inset-x-0 bottom-0 h-24 bg-gradient-to-t from-[#131318] to-transparent" />
        </div>

        {/* ── Title block ── */}
        <div className="relative -mt-12 px-5 sm:px-7 pb-5">
          <div className="flex flex-wrap items-center gap-1.5 mb-2.5">
            {project.badge && (
              <span className="text-[10.5px] px-2 py-0.5 rounded-full bg-amber-400/12 text-amber-300 border border-amber-400/20 font-medium">
                {project.badge}
              </span>
            )}
            {project.status && (
              <span className="text-[10.5px] px-2 py-0.5 rounded-full bg-emerald-400/10 text-emerald-300 border border-emerald-400/20 font-medium">
                {project.status}
              </span>
            )}
          </div>

          <h2 className="font-display font-bold text-[clamp(20px,4vw,27px)] leading-tight text-white">{project.title}</h2>

          {project.tagline && (
            <p className="mt-2 text-[14.5px] leading-relaxed text-white/55 max-w-[640px]">{project.tagline}</p>
          )}

          {/* Meta row */}
          <div className="mt-4 grid grid-cols-1 sm:grid-cols-3 gap-2">
            {project.role && (
              <div className="rounded-xl border border-white/[0.07] bg-white/[0.03] px-3 py-2.5">
                <div className="text-[10px] uppercase tracking-[0.12em] text-white/30 mb-0.5">My Role</div>
                <div className="text-[12.5px] text-white/80 leading-snug">{project.role}</div>
              </div>
            )}
            {project.timeline && (
              <div className="rounded-xl border border-white/[0.07] bg-white/[0.03] px-3 py-2.5">
                <div className="text-[10px] uppercase tracking-[0.12em] text-white/30 mb-0.5">Timeline</div>
                <div className="text-[12.5px] text-white/80 leading-snug">{project.timeline}</div>
              </div>
            )}
            {project.badge && (
              <div className="rounded-xl border border-white/[0.07] bg-white/[0.03] px-3 py-2.5">
                <div className="text-[10px] uppercase tracking-[0.12em] text-white/30 mb-0.5">Context</div>
                <div className="text-[12.5px] text-white/80 leading-snug">{project.badge}</div>
              </div>
            )}
          </div>
        </div>

        <div className="h-px bg-white/[0.07]" />

        {/* ── Body ── */}
        <div className="px-5 sm:px-7 py-6 space-y-7">
          {/* Stats */}
          {project.stats && project.stats.length > 0 && (
            <div className="grid grid-cols-2 sm:grid-cols-3 gap-2.5">
              {project.stats.map(s => (
                <div key={s.label} className="rounded-xl border border-violet-400/15 bg-violet-400/[0.06] px-3.5 py-3 text-center">
                  <div className="font-display font-bold text-[17px] text-violet-300 leading-tight">{s.value}</div>
                  <div className="text-[11px] text-white/40 mt-0.5 leading-snug">{s.label}</div>
                </div>
              ))}
            </div>
          )}

          {/* Overview */}
          {project.overview && project.overview.length > 0 && (
            <section>
              <SectionHeading>What it is</SectionHeading>
              <div className="space-y-3">
                {project.overview.map((p, i) => (
                  <p key={i} className="text-[14px] leading-relaxed text-white/60">{p}</p>
                ))}
              </div>
            </section>
          )}

          {!project.overview && (
            <section>
              <SectionHeading>What it is</SectionHeading>
              <p className="text-[14px] leading-relaxed text-white/60 whitespace-pre-line">{project.description}</p>
            </section>
          )}

          {/* Tech stack */}
          {project.techStack && project.techStack.length > 0 && (
            <section>
              <SectionHeading>Tech Stack</SectionHeading>
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-2.5">
                {project.techStack.map(g => (
                  <div key={g.group} className="rounded-xl border border-white/[0.07] bg-white/[0.02] p-3.5">
                    <div className="text-[10.5px] uppercase tracking-[0.12em] text-white/30 mb-2">{g.group}</div>
                    <div className="flex flex-wrap gap-1.5">
                      {g.items.map(item => (
                        <span key={item} className="text-[11.5px] px-2 py-1 rounded-md bg-violet-400/10 text-violet-300 border border-violet-400/15 font-mono">
                          {item}
                        </span>
                      ))}
                    </div>
                  </div>
                ))}
              </div>
            </section>
          )}

          {/* Highlights */}
          {project.highlights && project.highlights.length > 0 && (
            <section>
              <SectionHeading>Highlights & Impact</SectionHeading>
              <ul className="space-y-2.5">
                {project.highlights.map(h => (
                  <li key={h.title} className="flex gap-3 rounded-xl border border-white/[0.06] bg-white/[0.02] px-3.5 py-3">
                    <span className="flex-shrink-0 mt-0.5 text-violet-400"><SparkIcon /></span>
                    <div>
                      <div className="text-[13.5px] text-white/85 font-medium leading-snug">{h.title}</div>
                      {h.detail && <div className="text-[12.5px] text-white/45 mt-0.5 leading-relaxed">{h.detail}</div>}
                    </div>
                  </li>
                ))}
              </ul>
            </section>
          )}

          {/* Tags (fallback stack from the card) */}
          {(!project.techStack || project.techStack.length === 0) && project.tags && project.tags.length > 0 && (
            <section>
              <SectionHeading>Tech Stack</SectionHeading>
              <div className="flex flex-wrap gap-1.5">
                {project.tags.map(t => (
                  <span key={t} className="text-[11.5px] px-2 py-1 rounded-md bg-violet-400/10 text-violet-300 border border-violet-400/15 font-mono">{t}</span>
                ))}
              </div>
            </section>
          )}
        </div>

        {/* ── Sticky CTA footer ── */}
        <div className="sticky bottom-0 z-10 rounded-b-2xl border-t border-white/[0.07] bg-[#131318]/95 backdrop-blur px-5 sm:px-7 py-4 flex flex-wrap items-center gap-2.5">
          {links.length > 0 ? (
            links.map(l => (
              <a
                key={l.href + l.label}
                href={l.href}
                target={l.href.startsWith("#") ? undefined : "_blank"}
                rel="noopener noreferrer"
                className={`group flex items-center gap-2 px-4 py-2 rounded-full text-[13px] font-medium transition-all duration-200 hover:-translate-y-px ${kindStyles[l.kind] || kindStyles.live}`}
              >
                {l.label}
                <ExternalIcon className="opacity-60 group-hover:opacity-100 transition-transform duration-200 group-hover:translate-x-0.5 group-hover:-translate-y-0.5" />
              </a>
            ))
          ) : (
            <span className="text-[12.5px] text-white/35 italic">
              Not publicly deployed — ask me about it and I'll walk you through it.
            </span>
          )}

          <button
            onClick={onClose}
            className="ml-auto flex items-center gap-1.5 px-3.5 py-2 rounded-full text-[13px] text-white/45 hover:text-white/80 hover:bg-white/5 transition-colors"
          >
            Close
            <ChevronIcon className="rotate-180" />
          </button>
        </div>
      </div>

      <style>{`
        .pm-backdrop { animation: pm-fade .18s ease both; background: rgba(5,5,8,0.72); backdrop-filter: blur(6px); }
        .pm-panel    { animation: pm-rise .28s cubic-bezier(.16,1,.3,1) both; }
        @keyframes pm-fade { from { opacity: 0 } to { opacity: 1 } }
        @keyframes pm-rise { from { opacity: 0; transform: translateY(22px) scale(.98) } to { opacity: 1; transform: none } }
        @media (prefers-reduced-motion: reduce) {
          .pm-backdrop, .pm-panel { animation: none }
        }
      `}</style>
    </div>
  );
};

export default ProjectModal;
