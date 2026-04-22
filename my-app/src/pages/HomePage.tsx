import React, { useState } from "react";
import { Link } from "react-router-dom";
import { profile, projectCategories, blogPosts, friends } from "../data/portfolioData";
import { SocialIcon } from "../components/Icons";
// import { Reveal, CopyButton } from "../components/Layout";
import { Reveal } from "../components/Layout";
import { CategorySection } from "../components/ProjectCard";

// ─── Friend Avatar Chip ────────────────────────────────────────────
const FriendChip: React.FC<{ name: string; href: string; avatar: string; delay: number }> = ({ name, href, avatar, delay }) => {
  const [hovered, setHovered] = useState(false);
  const initials = name.split(/\s+/).map(w => w[0]).join("").toUpperCase().slice(0, 2);

  return (
    <a
      href={href}
      target="_blank"
      rel="noopener noreferrer"
      className="relative flex-shrink-0"
      style={{ animationDelay: `${delay}ms` }}
      onMouseEnter={() => setHovered(true)}
      onMouseLeave={() => setHovered(false)}
    >
      {/* Tooltip */}
      <span
        className="pointer-events-none absolute -top-8 left-1/2 -translate-x-1/2 px-2 py-0.5 rounded-md bg-[#1e1e24] border border-white/10 text-[11px] text-white/70 whitespace-nowrap shadow-lg z-10 transition-all duration-150"
        style={{ opacity: hovered ? 1 : 0, transform: `translateX(-50%) translateY(${hovered ? "0" : "4px"})` }}
      >
        {name}
      </span>

      {/* Avatar */}
      <div
        className="w-12 h-12 rounded-xl overflow-hidden border-2 transition-all duration-200"
        style={{
          borderColor: hovered ? "rgba(192,132,252,0.6)" : "rgba(255,255,255,0.08)",
          boxShadow: hovered ? "0 0 0 3px rgba(192,132,252,0.15)" : "none",
          transform: hovered ? "translateY(-2px) scale(1.08)" : "scale(1)",
        }}
      >
        {avatar
          ? <img src={avatar} alt={name} className="w-full h-full object-cover" />
          : <div className="w-full h-full flex items-center justify-center font-display font-bold text-[11px] text-violet-400 bg-violet-400/10">{initials}</div>
        }
      </div>
    </a>
  );
};

// ─── Hero Avatar ──────────────────────────────────────────────────
const Avatar: React.FC<{ src: string; name: string }> = ({ src, name }) => {
  const initials = name.split(/\s+/).map(w => w[0]).join("").toUpperCase().slice(0, 2);
  return (
    <div className="flex-shrink-0 w-[88px] h-[88px] rounded-full overflow-hidden border-2 border-white/10 ring-4 ring-violet-400/10 hover:ring-violet-400/25 transition-all duration-300 bg-[#16161a]">
      {src
        ? <img src={src} alt={name} className="w-full h-full object-cover" />
        : <div className="w-full h-full flex items-center justify-center font-display font-bold text-2xl text-violet-400 bg-violet-400/10">{initials}</div>
      }
    </div>
  );
};

const HomePage: React.FC = () => (
  <>
    {/* Hero */}
    <section className="flex items-start gap-7 pt-14 pb-12 border-b border-white/[0.07]">
      <Reveal><Avatar src={profile.avatar} name={profile.name} /></Reveal>
      <div className="flex-1 min-w-0">
        <Reveal delay={60}>
          <h1 className="font-display font-bold text-[clamp(22px,5vw,30px)] leading-tight mb-1.5">
            Hi, I'm{" "}
            <span className="text-violet-400 relative inline-block after:absolute after:bottom-[-2px] after:left-0 after:right-0 after:h-[2px] after:bg-gradient-to-r after:from-violet-400 after:to-transparent after:rounded-full">
              {profile.name}
            </span>
          </h1>
          <div className="flex flex-wrap gap-1 mt-1">
            {profile.displayNames.map(n => <span key={n} className="text-[11.5px] px-2 py-0.5 rounded text-white/25 bg-white/5">{n}</span>)}
          </div>
          <p className="text-[12px] text-white/25 mt-1.5">{profile.pronouns}</p>
        </Reveal>
        <Reveal delay={120}>
          <p className="mt-3 text-[14.5px] text-white/50 max-w-[480px] leading-relaxed">{profile.tagline}</p>
        </Reveal>
        <Reveal delay={180}>
          <div className="flex flex-wrap gap-1.5 mt-4">
            {profile.socials.filter(s => s.href).map(s => (
              <a key={s.label} href={s.href} target="_blank" rel="noopener noreferrer" title={s.label}
                className="group flex items-center gap-1.5 px-3 py-1.5 rounded-full border border-white/[0.07] bg-[#16161a] text-white/50 hover:border-violet-400/60 hover:text-violet-400 hover:bg-violet-400/5 transition-all duration-200 hover:-translate-y-px text-[13px]">
                <SocialIcon name={s.icon} />
                <span className="font-medium hidden sm:inline">{s.label}</span>
              </a>
            ))}
          </div>
        </Reveal>
      </div>
    </section>
    
    {/* Recent Posts */}
    {blogPosts.length > 0 && (
      <section className="pt-10">
        <Reveal>
          <div className="flex items-baseline justify-between mb-3">
            <h2 className="font-display font-semibold text-[17px] text-white/90">Recent Posts</h2>
            <Link to="/posts" className="text-[13px] text-violet-400/60 hover:text-violet-400 transition-colors">View all →</Link>
          </div>
          <div className="flex flex-col gap-0.5">
            {blogPosts.slice(0, 3).map(p => (
              <a key={p.title} href={p.href} target="_blank" rel="noopener noreferrer"
                className="group flex items-baseline gap-3.5 px-3 py-2.5 rounded-lg hover:bg-white/[0.04] transition-colors">
                <span className="flex-shrink-0 font-mono text-[11.5px] text-white/25 w-[92px]">{p.date}</span>
                <span className="text-[13.5px] text-white/55 group-hover:text-violet-400 transition-colors">{p.title}</span>
              </a>
            ))}
          </div>
        </Reveal>
      </section>
    )}

    {/* Projects preview */}
    <section className="pt-10">
      <Reveal>
        <div className="flex items-baseline justify-between mb-3">
          <h2 className="font-display font-semibold text-[17px] text-white/90">Projects</h2>
          <Link to="/projects" className="text-[13px] text-violet-400/60 hover:text-violet-400 transition-colors">View all →</Link>
        </div>
      </Reveal>
      {projectCategories
        .filter((_, idx) => [0, 3, 4].includes(idx))
        .map((cat, i) => (
          <Reveal key={cat.title} delay={i * 40}>
            <CategorySection {...cat} />
          </Reveal>
      ))}
      {projectCategories.length > 3 && (
        <Reveal delay={120}>
          <Link to="/projects"
            className="mt-2 flex items-center justify-center gap-2 py-3 rounded-xl border border-white/[0.07] hover:border-violet-400/30 text-[13px] text-white/30 hover:text-violet-400 hover:bg-violet-400/5 transition-all">
            View {projectCategories.length - 3} more categories →
          </Link>
        </Reveal>
      )}
    </section>

    {/* Friends */}
    {friends.length > 0 && (
      <section className="pt-10">
        <Reveal>
          <div className="flex items-center justify-between mb-3">
            <h2 className="font-display font-semibold text-[17px] text-white/90">Friends</h2>
            <Link to="/friends" className="text-[13px] text-violet-400/60 hover:text-violet-400 transition-colors">View all →</Link>
          </div>
          <div className="flex items-center gap-4 flex-wrap q">
            {friends.map((f, i) => (
              <FriendChip key={f.name} name={f.name} href={f.href} avatar={f.avatar} delay={i * 40} />
            ))}
          </div>
        </Reveal>
      </section>
    )}
  </>
);

export default HomePage;