// ============================================================
// 📝 POSTS PAGE
// To add posts: edit blogPosts in portfolioData.ts
// ============================================================
import React, { useState } from "react";
import { blogPosts } from "../data/portfolioData";
import { Reveal } from "../components/Layout";

const PostsPage: React.FC = () => {
  // const allTags = Array.from(new Set(blogPosts.flatMap(p => p.tags ?? [])));
  // const [activeTag, setActiveTag] = useState<string | null>(null);
  const [activeTag] = useState<string | null>(null);
  const filtered = activeTag ? blogPosts.filter(p => p.tags?.includes(activeTag)) : blogPosts;

  return (
    <>
      {/* <PageTitle emoji="📝" title="Posts" subtitle={`${blogPosts.length} articles`} /> */}

      {/* Tag filter
      {allTags.length > 0 && (
        <Reveal delay={40}>
          <div className="flex flex-wrap gap-2 pt-5">
            <button
              onClick={() => setActiveTag(null)}
              className={`text-[12px] px-3 py-1 rounded-full border transition-colors ${
                activeTag === null
                  ? "border-violet-400/60 bg-violet-400/10 text-violet-400"
                  : "border-white/[0.07] text-white/35 hover:border-white/20 hover:text-white/60"
              }`}
            >
              all
            </button>
            {allTags.map(tag => (
              <button
                key={tag}
                onClick={() => setActiveTag(tag === activeTag ? null : tag)}
                className={`text-[12px] px-3 py-1 rounded-full border transition-colors font-mono ${
                  activeTag === tag
                    ? "border-violet-400/60 bg-violet-400/10 text-violet-400"
                    : "border-white/[0.07] text-white/35 hover:border-white/20 hover:text-white/60"
                }`}
              >
                {tag}
              </button>
            ))}
          </div>
        </Reveal>
      )} */}

      <div className="pt-4 flex flex-col gap-px">
        {filtered.map((p, i) => (
          <Reveal key={p.title} delay={i * 30}>
            <a href={p.href} target="_blank" rel="noopener noreferrer"
              className="group flex flex-col sm:flex-row sm:items-baseline gap-1 sm:gap-4 px-4 py-3.5 rounded-xl hover:bg-white/[0.04] transition-colors border border-transparent hover:border-white/[0.06]">
              <span className="flex-shrink-0 font-mono text-[11.5px] text-white/25 sm:w-[100px]">{p.date}</span>
              <div className="flex-1">
                <span className="text-[14px] text-white/75 group-hover:text-violet-400 transition-colors font-medium">{p.title}</span>
                {p.excerpt && <p className="text-[12.5px] text-white/35 mt-0.5 leading-relaxed">{p.excerpt}</p>}
                {p.tags && p.tags.length > 0 && (
                  <div className="flex flex-wrap gap-1 mt-1.5">
                    {p.tags.map(tag => (
                      <span key={tag} className="text-[10.5px] px-2 py-0.5 rounded-full bg-white/5 text-white/30 font-mono">{tag}</span>
                    ))}
                  </div>
                )}
              </div>
            </a>
          </Reveal>
        ))}
      </div>

      {filtered.length === 0 && (
        <div className="pt-16 text-center text-white/25 text-[14px]">No posts found for this tag.</div>
      )}
    </>
  );
};

export default PostsPage;