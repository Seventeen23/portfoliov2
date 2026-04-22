// ============================================================
// 📂 PROJECTS PAGE
// To add a new category: edit projectCategories in portfolioData.ts
// ============================================================
import React from "react";
import { projectCategories } from "../data/portfolioData";
import { Reveal } from "../components/Layout";
import { CategorySection } from "../components/ProjectCard";

const ProjectsPage: React.FC = () => (
  <>
    {/* <PageTitle emoji="📂" title="Projects" subtitle={`${projectCategories.reduce((a, c) => a + c.projects.length, 0)} projects across ${projectCategories.length} categories`} /> */}
    <div className="pt-6">
      {projectCategories.map((cat, i) => (
        <Reveal key={cat.title} delay={i * 40}>
          <CategorySection {...cat} />
        </Reveal>
      ))}
    </div>
  </>
);

export default ProjectsPage;