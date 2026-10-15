import { createContext, useContext } from "react";
import type { Project } from "../data/portfolioData";

// ============================================================
// 🪟 Shared state so any project card can open the detail window
// ============================================================

export interface ProjectModalCtx {
  open: (project: Project) => void;
  close: () => void;
}

export const ProjectModalContext = createContext<ProjectModalCtx>({
  open: () => {},
  close: () => {},
});

export const useProjectModal = () => useContext(ProjectModalContext);
