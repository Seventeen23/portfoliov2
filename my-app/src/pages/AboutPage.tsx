// ============================================================
// 🙋 ABOUT PAGE
// ============================================================
import React from "react";
import { profile } from "../data/portfolioData";
import { SocialIcon } from "../components/Icons";
import { Reveal } from "../components/Layout";

// ─── Stats strip ───────────────────────────────────────────────────
const stats = [
  { value: "15+",     label: "projects shipped across 7 categories" },
  { value: "2",       label: "global challenges — NASA Space Apps & UNDP" },
  { value: "3rd",     label: "place, InnoFiesta 2024 AI & Data Science" },
  { value: "Sept 2026", label: "graduating — open to opportunities" },
];

// ─── Focus areas ───────────────────────────────────────────────────
const focusAreas = [
  {
    emoji: "🧱",
    title: "Full-stack Engineering",
    blurb: "Scalable backends in FastAPI and Django, typed React front ends, and the API contracts that hold them together. I like owning a feature from database schema to the pixel.",
    chips: ["FastAPI", "Django", "React", "TypeScript", "PostgreSQL"],
  },
  {
    emoji: "🧠",
    title: "ML & Computer Vision",
    blurb: "Models that ship — YOLO detectors trained, validated, and deployed onto actual hardware at the edge. Annotation pipelines, evaluation, and the boring data quality work that makes accuracy possible.",
    chips: ["YOLO", "PyTorch", "OpenCV", "XGBoost", "NLP"],
  },
  {
    emoji: "📊",
    title: "Data Science & Visualization",
    blurb: "From messy raw data to a dashboard a stakeholder can read in five seconds. Time series, heatmaps, network analysis, and honest interpretation of what the numbers actually say.",
    chips: ["R", "Shiny", "Tableau", "PowerBI", "Pandas"],
  },
];

// ─── Experience ────────────────────────────────────────────────────
const experience = [
  {
    role: "Software Developer Intern",
    org: "Southern Philippines Medical Center (SPMC) — Davao City",
    meta: "July 2025 – August 2025",
    points: [
      "Owned backend development on the hospital's payroll system — designing and building APIs, shaping database structures, and keeping data flowing correctly between system components.",
      "Shipped inside a real production environment where incorrect data isn't a bug ticket, it's someone's salary.",
      "Walked out with hardened instincts for backend architecture, API design, and code that has to be right.",
    ],
  },
  {
    role: "AI Developer Lead",
    org: "United Nations Development Programme (UNDP) — Davao City",
    meta: "March 2025 – June 2025",
    points: [
      "Led the AI side of a UNDP project: satellite data analysis and a prediction pipeline for marine trash movement.",
      "Built and led the annotation team — wrote the guidelines, trained members, and enforced data quality across the dataset.",
      "Owned training, evaluation, and validation of the YOLO-based detection model end to end.",
      "Grew just as much in leadership as in machine learning: shipping a team's work is its own discipline.",
    ],
  },
  {
    role: "Freelance Developer / Data Assistant",
    org: "Remote / Project-Based",
    meta: "2024 – Present",
    points: [
      "Delivered short-term projects for a rotating cast of clients: frontend fixes, automation, data encoding and cleaning, and product research.",
      "Built simple AI workflow automations and untangled UI/CSS that nobody wanted to touch.",
      "Trained myself to scope fast, communicate clearly, and deliver under ambiguous, fast-moving briefs.",
    ],
  },
];

// ─── Education ─────────────────────────────────────────────────────
const education = [
  {
    degree: "B.S. Computer Science — Major in Data Science",
    school: "University of Southeastern Philippines, Obrero, Davao City",
    meta: "Expected September 2026 · Dean's Lister",
    points: [
      "Coursework across programming paradigms, computer networks, data science, big data, and machine learning — the technical foundation under everything on this site.",
      "Recognized as a Dean's Lister.",
    ],
  },
  {
    degree: "Senior High School — with Honors",
    school: "AMA Computer College of Davao",
    meta: "Graduated with honors",
    points: [
      "First real exposure to programming through Java, MySQL, and programming ethics — the spark that made computer science the obvious choice.",
      "Since then: continuously building, shipping, and learning through projects instead of waiting to be taught.",
    ],
  },
];

// ─── Skills ────────────────────────────────────────────────────────
const skillGroups = [
  { emoji: "⌨️",  label: "Languages",        items: ["Python", "TypeScript", "JavaScript", "Java", "PHP", "R", "SQL"] },
  { emoji: "🌐",  label: "Web & Backend",    items: ["React", "FastAPI", "Django", "Flask", "Tailwind CSS", "PostgreSQL", "MariaDB", "MongoDB"] },
  { emoji: "🧠",  label: "AI & Machine Learning", items: ["Machine Learning", "PyTorch", "YOLO", "OpenCV", "XGBoost", "NLP", "Prompt Engineering"] },
  { emoji: "📊",  label: "Data & Analytics", items: ["Data Analysis & Visualization", "Data Cleaning", "Tableau", "PowerBI", "Shiny"] },
  { emoji: "🛠️",  label: "Tools & Infra",    items: ["Git", "Docker", "Linux", "Vercel", "Android Studio", "Raspberry Pi"] },
];

// ─── Interests ─────────────────────────────────────────────────────
const interests = [
  { emoji: "📺", label: "Anime / Manga / Manhua" },
  { emoji: "🎮", label: "Video Games" },
  { emoji: "♟️", label: "Chess" },
  { emoji: "🕹️", label: "Game Development" },
  { emoji: "👁️", label: "Computer Vision" },
  { emoji: "🤖", label: "Machine Learning" },
  { emoji: "🧩", label: "Web Development" },
  { emoji: "🔐", label: "Cyber Security" },
  { emoji: "⚡", label: "Pokémon" },
];

// ─── Contact cards ─────────────────────────────────────────────────
const contacts = [
  { label: "LinkedIn", value: "matthew-feri-tanutan", href: "https://www.linkedin.com/in/matthew-feri-tanutan-2676332a0/", icon: "linkedin" },
  { label: "GitHub",   value: "github.com/Seventeen23", href: "https://github.com/Seventeen23", icon: "github" },
  { label: "X / Twitter", value: "@MatthewTanutan", href: "https://x.com/MatthewTanutan", icon: "twitter" },
  { label: "Email",    value: "matthewtanutan17@gmail.com", href: "mailto:matthewtanutan17@gmail.com", icon: "email" },
];

// ─── Shared section shell ──────────────────────────────────────────
const Section: React.FC<{ emoji: string; title: string; delay?: number; children: React.ReactNode }> = ({ emoji, title, delay = 0, children }) => (
  <Reveal delay={delay}>
    <section className="pt-9">
      <div className="flex items-center gap-2.5 mb-4">
        <span className="text-lg">{emoji}</span>
        <h2 className="font-display font-bold text-[17px] text-white/90">{title}</h2>
        <div className="flex-1 h-px bg-gradient-to-r from-white/10 to-transparent" />
      </div>
      {children}
    </section>
  </Reveal>
);

// ─── Timeline item ─────────────────────────────────────────────────
const TimelineItem: React.FC<{ title: string; subtitle: string; meta: string; points: string[]; last?: boolean }> = ({ title, subtitle, meta, points, last }) => (
  <li className="relative pl-7 pb-7 last:pb-0">
    {!last && <span className="absolute left-[5px] top-4 bottom-0 w-px bg-gradient-to-b from-violet-400/50 to-white/10" />}
    <span className="absolute left-0 top-1.5 w-[11px] h-[11px] rounded-full bg-violet-400 ring-4 ring-violet-400/15 shadow-[0_0_12px_rgba(192,132,252,0.5)]" />
    <div className="rounded-2xl border border-white/[0.07] bg-[#16161a] p-4 hover:border-violet-400/25 transition-colors">
      <div className="flex flex-wrap items-baseline justify-between gap-x-3 gap-y-1">
        <h3 className="font-display font-semibold text-[14.5px] text-white/90">{title}</h3>
        <span className="font-mono text-[11px] text-violet-300/70">{meta}</span>
      </div>
      <p className="text-[12.5px] text-white/45 mt-0.5">{subtitle}</p>
      <ul className="mt-3 space-y-2">
        {points.map(p => (
          <li key={p} className="flex gap-2.5 text-[13px] leading-relaxed text-white/55">
            <span className="text-violet-400/70 mt-[3px] flex-shrink-0">▸</span>
            <span>{p}</span>
          </li>
        ))}
      </ul>
    </div>
  </li>
);

const AboutPage: React.FC = () => (
  <>
    {/* ── Hero ── */}
    <Reveal>
      <section className="pt-10 pb-8">
        <div className="flex items-start gap-3 mb-4">
          <span className="text-2xl">🙋</span>
          <h1 className="font-display font-bold text-[clamp(22px,5vw,28px)] text-white/90">About Me</h1>
        </div>

        <div className="rounded-2xl border border-white/[0.07] bg-gradient-to-br from-[#16161a] to-violet-500/[0.05] overflow-hidden">
          <div className="h-20 bg-gradient-to-r from-violet-500/20 via-fuchsia-500/10 to-transparent" />
          <div className="px-5 pb-5 -mt-9">
            <div className="flex flex-wrap items-end gap-4">
              <div className="w-[76px] h-[76px] rounded-2xl overflow-hidden border-2 border-white/15 ring-4 ring-violet-400/10 bg-[#16161a]">
                <img src={profile.avatar} alt={profile.name} className="w-full h-full object-cover" />
              </div>
              <div className="min-w-0 pb-1">
                <h2 className="font-display font-bold text-[20px] text-white/90 leading-tight">Matthew Feri Tanutan</h2>
                <div className="flex flex-wrap items-center gap-1.5 mt-1.5">
                  <span className="text-[11.5px] px-2 py-0.5 rounded bg-white/5 text-white/40">"Seventeen"</span>
                  <span className="text-[11.5px] px-2 py-0.5 rounded bg-white/5 text-white/40">{profile.pronouns}</span>
                  <span className="inline-flex items-center gap-1.5 text-[11.5px] px-2 py-0.5 rounded bg-emerald-400/10 text-emerald-300 border border-emerald-400/20">
                    <span className="w-1.5 h-1.5 rounded-full bg-emerald-400" />
                    Open to opportunities
                  </span>
                </div>
              </div>
            </div>

            <p className="mt-4 text-[14.5px] leading-relaxed text-white/60">
              Computer Science student at USeP majoring in <span className="text-violet-300">Data Science</span>, and a
              full-stack developer who has shipped for the <span className="text-violet-300">United Nations</span>,
              <span className="text-violet-300"> NASA's Space Apps</span>, and paying clients — often all before graduating.
              I build backend systems that hold up, machine learning models that leave the notebook, and interfaces
              people actually enjoy using.
            </p>
            <p className="mt-2.5 text-[14.5px] leading-relaxed text-white/60">
              Graduating <span className="text-white/85">September 2026</span> and actively looking for a team where I can
              contribute, learn loudly, and grow into the kind of engineer people remember.
            </p>
          </div>
        </div>
      </section>
    </Reveal>

    {/* ── Stats ── */}
    <Reveal delay={80}>
      <div className="grid grid-cols-2 sm:grid-cols-4 gap-2.5">
        {stats.map(s => (
          <div key={s.label} className="rounded-xl border border-white/[0.07] bg-[#16161a] px-3 py-3.5 text-center hover:border-violet-400/30 transition-colors">
            <div className="font-display font-bold text-[19px] text-violet-400 leading-tight">{s.value}</div>
            <div className="text-[11px] text-white/40 mt-1 leading-snug">{s.label}</div>
          </div>
        ))}
      </div>
    </Reveal>

    {/* ── Focus areas ── */}
    <Section emoji="🎯" title="What I Do" delay={40}>
      <div className="grid grid-cols-1 sm:grid-cols-3 gap-2.5">
        {focusAreas.map(a => (
          <div key={a.title} className="rounded-2xl border border-white/[0.07] bg-[#16161a] p-4 hover:border-violet-400/25 hover:-translate-y-0.5 transition-all duration-300">
            <div className="text-xl mb-2">{a.emoji}</div>
            <h3 className="font-display font-semibold text-[13.5px] text-white/90 mb-1.5">{a.title}</h3>
            <p className="text-[12.5px] leading-relaxed text-white/45">{a.blurb}</p>
            <div className="flex flex-wrap gap-1 mt-3">
              {a.chips.map(c => (
                <span key={c} className="text-[10.5px] px-2 py-0.5 rounded-full bg-violet-400/10 text-violet-300 font-mono">{c}</span>
              ))}
            </div>
          </div>
        ))}
      </div>
    </Section>

    {/* ── Experience ── */}
    <Section emoji="🕒" title="Experience" delay={40}>
      <ul>
        {experience.map((e, i) => (
          <TimelineItem
            key={e.role}
            title={e.role}
            subtitle={e.org}
            meta={e.meta}
            points={e.points}
            last={i === experience.length - 1}
          />
        ))}
      </ul>
    </Section>

    {/* ── Education ── */}
    <Section emoji="🎓" title="Education" delay={40}>
      <ul>
        {education.map((e, i) => (
          <TimelineItem
            key={e.degree}
            title={e.degree}
            subtitle={e.school}
            meta={e.meta}
            points={e.points}
            last={i === education.length - 1}
          />
        ))}
      </ul>
    </Section>

    {/* ── Skills ── */}
    <Section emoji="🧠" title="Skills & Tooling" delay={40}>
      <div className="flex flex-col gap-2.5">
        {skillGroups.map(g => (
          <div key={g.label} className="rounded-2xl border border-white/[0.07] bg-[#16161a] px-4 py-3.5 hover:border-violet-400/25 transition-colors">
            <div className="flex items-center gap-2 mb-2.5">
              <span className="text-[13px]">{g.emoji}</span>
              <span className="font-display font-semibold text-[12.5px] text-white/80">{g.label}</span>
            </div>
            <div className="flex flex-wrap gap-1.5">
              {g.items.map(s => (
                <span key={s} className="text-[11.5px] px-2.5 py-1 rounded-lg bg-white/[0.05] border border-white/[0.07] text-white/60 hover:border-violet-400/40 hover:text-violet-300 hover:bg-violet-400/5 transition-all duration-200 cursor-default">
                  {s}
                </span>
              ))}
            </div>
          </div>
        ))}
      </div>
    </Section>

    {/* ── Interests ── */}
    <Section emoji="🎨" title="Interests" delay={40}>
      <div className="flex flex-wrap gap-2">
        {interests.map(i => (
          <span key={i.label} className="inline-flex items-center gap-1.5 text-[12.5px] px-3 py-1.5 rounded-full border border-white/[0.07] bg-[#16161a] text-white/55 hover:border-violet-400/35 hover:text-white/80 transition-all duration-200">
            <span>{i.emoji}</span>
            {i.label}
          </span>
        ))}
      </div>
    </Section>

    {/* ── Contact ── */}
    <Section emoji="📞" title="Get in Touch" delay={40}>
      <div className="grid grid-cols-1 sm:grid-cols-2 gap-2.5">
        {contacts.map(c => (
          <a
            key={c.label}
            href={c.href}
            target={c.href.startsWith("mailto:") ? undefined : "_blank"}
            rel="noopener noreferrer"
            className="group flex items-center gap-3 rounded-2xl border border-white/[0.07] bg-[#16161a] px-4 py-3.5 hover:border-violet-400/40 hover:bg-violet-400/[0.05] transition-all duration-200 hover:-translate-y-0.5"
          >
            <span className="flex items-center justify-center w-9 h-9 rounded-xl bg-white/[0.05] border border-white/[0.07] text-white/45 group-hover:text-violet-400 group-hover:border-violet-400/30 transition-colors">
              <SocialIcon name={c.icon} />
            </span>
            <span className="min-w-0">
              <span className="block text-[11px] uppercase tracking-[0.1em] text-white/30">{c.label}</span>
              <span className="block text-[13px] text-white/70 truncate group-hover:text-violet-300 transition-colors">{c.value}</span>
            </span>
            <span className="ml-auto text-white/20 group-hover:text-violet-400 group-hover:translate-x-0.5 transition-all">→</span>
          </a>
        ))}
      </div>
    </Section>
  </>
);

export default AboutPage;
