// ============================================================
// 🧑‍🤝‍🧑 FRIENDS PAGE
// To add friends: edit friends array in portfolioData.ts
// ============================================================
import React from "react";
import { friends } from "../data/portfolioData";
import { PageTitle, Reveal } from "../components/Layout";

const FriendsPage: React.FC = () => (
  <>
    <PageTitle emoji="🧑‍🤝‍🧑" title="Friends" subtitle="Cool people on the internet :3" />
    <div className="pt-6 grid grid-cols-1 sm:grid-cols-2 gap-3">
      {friends.map((f, i) => (
        <Reveal key={f.name} delay={i * 50}>
          <a
            href={f.href}
            target="_blank"
            rel="noopener noreferrer"
            className="group flex items-center gap-4 p-4 rounded-xl border border-white/[0.07] bg-[#16161a] hover:border-violet-400/30 hover:bg-[#1e1e24] transition-all duration-200"
          >
            {f.avatar
              ? <img src={f.avatar} alt={f.name} className="w-12 h-12 rounded-xl object-cover border border-white/10 group-hover:border-violet-400/40 transition-colors flex-shrink-0" />
              : <div className="w-12 h-12 rounded-xl flex items-center justify-center font-display font-bold text-xl text-violet-400 bg-violet-400/10 border border-white/10 group-hover:border-violet-400/40 transition-colors flex-shrink-0">
                  {f.name[0].toUpperCase()}
                </div>
            }
            <div className="min-w-0">
              <div className="text-[14px] font-semibold text-white/85 group-hover:text-violet-400 transition-colors">{f.name}</div>
              {f.bio && <div className="text-[12px] text-white/35 mt-0.5 truncate">{f.bio}</div>}
              <div className="text-[11.5px] text-white/25 mt-0.5 truncate">{f.href.replace(/^https?:\/\//, "")}</div>
            </div>
          </a>
        </Reveal>
      ))}
    </div>
  </>
);

export default FriendsPage;