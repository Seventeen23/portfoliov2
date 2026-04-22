// ============================================================
// 🙋 ABOUT PAGE
// ============================================================
import React from "react";
import { profile } from "../data/portfolioData";
import { SocialIcon } from "../components/Icons";
import { PageTitle, Reveal } from "../components/Layout";

const AboutPage: React.FC = () => (
  <>
    {/* <PageTitle emoji="🙋" title="About Me" /> */}

    {/* Intro */}
    <Reveal delay={40}>
      <div className="pt-8 pb-8 border-b border-white/[0.06] space-y-6">
  
      {/* Header */}
      <div>
        <h2 className="font-display font-bold text-[22px] text-white/90">
          About Me
        </h2>
        <p className="text-[13px] text-white/40 mt-2 leading-relaxed">
          In construction.
        </p>
      </div>

      {/* Experience */}
      <div>
        <h3 className="text-[14px] text-violet-400 font-semibold mb-2">
          Experience
        </h3>
        <ul className="space-y-2 text-[13px] text-white/50">
          <li>
            • hehe
          </li>
          <li>
            • yep
          </li>
          <li>
            • sure
          </li>
        </ul>
      </div>

      {/* Education */}
      <div>
        <h3 className="text-[14px] text-violet-400 font-semibold mb-2">
          Education
        </h3>
        <p className="text-[13px] text-white/50">
          1 
          <br />
          2
        </p>
      </div>

      {/* Skills */}
      <div>
        <h3 className="text-[14px] text-violet-400 font-semibold mb-2">
          Skills
        </h3>
        <div className="flex flex-wrap gap-2">
          {["Python", "React", "Django", "Machine Learning", "YOLO", "FastAPI"].map(skill => (
            <span
              key={skill}
              className="px-2.5 py-1 text-[12px] rounded-full bg-white/[0.05] text-white/50 border border-white/[0.07]"
            >
              {skill}
            </span>
          ))}
        </div>
      </div>

    </div>
    </Reveal>
  </>
);

export default AboutPage;