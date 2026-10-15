import React, { useState } from "react";
import type { Project, ProjectCategory } from "../data/portfolioData";
import { ChevronIcon } from "./Icons";
import { useProjectModal } from "./projectModalContext";

const ExternalIcon: React.FC<{ className?: string }> = ({ className = "" }) => (
  <svg className={className} width="13" height="13" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.2" strokeLinecap="round" strokeLinejoin="round">
    <path d="M7 17 17 7M8 7h9v9" />
  </svg>
);

export const ProjectCard: React.FC<{ project: Project }> = ({ project }) => {
  const { open } = useProjectModal();
  const [hovered, setHovered] = useState(false);

  // Direct link (for the small ↗ button) — "#" means nothing public to link to
  const directHref = project.links?.[0]?.href ?? (project.href !== "#" ? project.href : "");
  const isExternal = directHref.startsWith("http");

  return (
    <div
      role="button"
      tabIndex={0}
      aria-label={`View details for ${project.title}`}
      onClick={() => open(project)}
      onKeyDown={e => { if (e.key === "Enter" || e.key === " ") { e.preventDefault(); open(project); } }}
      onMouseEnter={() => setHovered(true)}
      onMouseLeave={() => setHovered(false)}
      className="group flex flex-col rounded-2xl border border-white/[0.07] bg-[#16161a] hover:border-violet-400/30 hover:bg-[#1a1a20] overflow-hidden transition-all duration-300 hover:-translate-y-0.5 hover:shadow-[0_8px_32px_rgba(0,0,0,0.4)] cursor-pointer focus:outline-none focus-visible:ring-2 focus-visible:ring-violet-400/60"
    >
      {/* Banner — always shown, placeholder gradient if no image */}
      <div className="relative h-44 overflow-hidden bg-gradient-to-br from-white/[0.03] to-violet-400/[0.06] flex-shrink-0">
        {project.banner ? (
          <img
            src={project.banner}
            alt={`${project.title} banner`}
            loading="lazy"
            className="w-full h-full object-fill"
          />
        ) : (
          /* Decorative placeholder when no banner is set */
          <div className="w-full h-full flex items-center justify-center">
            <span className="text-5xl opacity-20 select-none">
              {project.isFork ? "⑂" : "◈"}
            </span>
          </div>
        )}
        {/* Subtle bottom fade so text sits cleanly on any image */}
        <div className="absolute inset-x-0 bottom-0 h-16 bg-gradient-to-t from-[#16161a] to-transparent" />

        {/* "Details" affordance */}
        <span
          className="absolute top-2.5 left-2.5 text-[10px] px-2 py-1 rounded-full bg-black/55 backdrop-blur border border-white/10 text-white/70 font-medium transition-all duration-200"
          style={{ opacity: hovered ? 1 : 0, transform: hovered ? "translateY(0)" : "translateY(-4px)" }}
        >
          View details →
        </span>
      </div>

      {/* Body */}
      <div className="flex flex-col gap-2 px-4 pb-4 pt-3 -mt-1 flex-1">
        <div className="flex items-start justify-between gap-2">
          <span className="flex items-center flex-wrap gap-1.5 font-display font-semibold text-[13.5px] text-white/90 leading-snug">
            {project.title}
            {project.isFork && (
              <span className="text-[10px] px-1.5 py-0.5 rounded-full bg-emerald-400/10 text-emerald-400 font-medium">Fork</span>
            )}
            {project.badge && (
              <span className="text-[10px] px-1.5 py-0.5 rounded-full bg-amber-400/10 text-amber-400 font-medium">{project.badge}</span>
            )}
          </span>

          <span className="flex items-center gap-1.5 flex-shrink-0 mt-0.5">
            {/* Quick escape hatch — open the real thing directly */}
            {directHref && (
              <a
                href={directHref}
                target={isExternal ? "_blank" : undefined}
                rel="noopener noreferrer"
                title={isExternal ? "Open live project" : "Open"}
                onClick={e => e.stopPropagation()}
                className="p-1 rounded-md border border-white/10 text-white/35 opacity-0 group-hover:opacity-100 hover:border-violet-400/50 hover:text-violet-400 transition-all duration-200"
              >
                <ExternalIcon />
              </a>
            )}
            <ChevronIcon className="flex-shrink-0 text-white/20 opacity-0 -translate-x-1 group-hover:opacity-100 group-hover:translate-x-0 transition-all duration-200" />
          </span>
        </div>

        <p className="text-[12.5px] text-white/45 leading-relaxed flex-1 whitespace-pre-line line-clamp-3">{project.description}</p>

        {project.tags && project.tags.length > 0 && (
          <div className="flex flex-wrap gap-1 pt-1">
            {project.tags.map(tag => (
              <span key={tag} className="text-[10.5px] px-2 py-0.5 rounded-full bg-violet-400/10 text-violet-400 font-mono">
                {tag}
              </span>
            ))}
          </div>
        )}
      </div>
    </div>
  );
};

export const CategorySection: React.FC<ProjectCategory> = ({ emoji, title, projects }) => {
  const [open, setOpen] = useState(true);
  return (
    <div className="mb-3 border border-white/[0.07] rounded-2xl overflow-hidden hover:border-white/[0.12] transition-colors">
      <button
        onClick={() => setOpen(!open)}
        className="w-full flex items-center gap-2.5 px-4 py-3.5 bg-[#16161a] hover:bg-[#1e1e24] transition-colors text-left"
      >
        <span className="text-base">{emoji}</span>
        <span className="flex-1 font-display font-semibold text-[13.5px] text-white/90">{title}</span>
        <span className="text-[11px] font-mono px-2 py-0.5 rounded-full bg-white/5 text-white/30">{projects.length}</span>
        <ChevronIcon className={`text-white/30 transition-transform duration-200 ${open ? "rotate-90" : ""}`} />
      </button>
      {open && (
        <div className="grid grid-cols-1 sm:grid-cols-2 gap-3 p-3 bg-[#0e0e11]">
          {projects.map(p => <ProjectCard key={p.title} project={p} />)}
        </div>
      )}
    </div>
  );
};
