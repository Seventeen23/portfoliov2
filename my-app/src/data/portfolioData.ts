// ============================================================
// 🎨 PORTFOLIO DATA — Edit everything here!
// ============================================================

import avatar         from "../assets/avatars/avatar.png"; // Profile Picture
import giver_avatar   from "../assets/avatars/giver_avatar.png"; // Friend's Avatar
import des_avatar     from "../assets/avatars/des_avatar.jpg"; // Friend's Avatar
import pj_avatar      from "../assets/avatars/pj_avatar.jpg"; // Friend's Avatar

import undp_banner     from "../assets/banners/undp_banner.png"; // Project Banner
import mciis_banner    from "../assets/banners/mciis_banner.png"; // Project Banner
import isdaknow_banner from "../assets/banners/isdaknow_banner.png"; // Project Banner
import dengueph_banner from "../assets/banners/dengueph_banner.png"; // Project Banner
import gards_banner    from "../assets/banners/gards_banner.png"; // Project Banner
import robotskie_banner from "../assets/banners/robotskie_banner.png"; // Project Banner
import gumzy_banner    from "../assets/banners/gumzy_banner.png"; // Project Banner
import davaofare_banner from "../assets/banners/davaofare_banner.png"; // Project Banner

export const profile = {
  name: "Seventeen",
  displayNames: ["Matthew Feri Tanutan (en)","Seventeen (en)", "実佳 (jp)"],
  pronouns: "(He/Him)",
  tagline: "Full-stack | Data Scientist crafting web experiences & open-source tools. Aspiring game developer, AI researcher & developer.",
  avatar: avatar, // URL to your avatar image, leave empty for initials fallback
  socials: [
    { label: "Resume",    href: "/Resume.pdf",                                icon: "resume",     download: true },
    { label: "GitHub",    href: "https://github.com/Seventeen23",             icon: "github"  },
    { label: "Twitter",   href: "https://x.com/MatthewTanutan",               icon: "twitter" },
    // { label: "Bluesky",   href: "https://bsky.app/profile/you.bsky.social",  icon: "bluesky" },
    // { label: "Discord",   href: "https://discord.gg/yourserver",             icon: "discord" },
    { label: "Email",     href: "mailto:matthewtanutan17@gmail.com",          icon: "email"   },
    // { label: "itch.io",   href: "https://yourname.itch.io",                  icon: "itch"    },
  ],
};

// ============================================================
// 📂 PROJECT CATEGORIES
// ============================================================

export type LinkKind = "live" | "repo" | "paper" | "docs";

export interface ProjectLink {
  label: string;
  href: string;
  kind: LinkKind;
}

export interface TechGroup {
  group: string;
  items: string[];
}

export interface Highlight {
  title: string;
  detail?: string;
}

export interface Project {
  title: string;
  href: string;
  description: string;
  banner?: string;   // URL to banner image (optional)
  tags?: string[];
  isFork?: boolean;
  badge?: string;    // e.g. "WIP", "CoRL 2025"

  // ── Detail window (project modal) ──────────────────────
  tagline?: string;                 // one-line hype summary shown big
  role?: string;                    // your exact role on it
  timeline?: string;                // when you built it
  status?: string;                  // shipped / wip / unpublished
  overview?: string[];              // paragraphs — what it is & why it matters
  techStack?: TechGroup[];          // grouped stack, e.g. [{ group: "Backend", items: [...] }]
  highlights?: Highlight[];         // accomplishments, improvements, wins
  stats?: { value: string; label: string }[]; // big brag numbers
  links?: ProjectLink[];            // CTAs in the modal (live / repo / paper)
}

export interface ProjectCategory {
  emoji: string;
  title: string;
  projects: Project[];
}

export const projectCategories: ProjectCategory[] = [
  {
    emoji: "🌐",
    title: "Web Projects",
    projects: [
      {
        title: "UNDP WasteWatch",
        href: "https://github.com/Team2-UNDP/.github",
        description: "A full-stack web app designed to track, predict, and simulate trash movement and accumulation Davao Golf. \n\nBuilt with Python, FastAPI, Raspberry Pi4, YOLO11, and MongoDB.",
        tags: ["FastAPI", "Object Detection", "MongoDB", "Data Analysis & Visualization"],
        banner: undp_banner,
        badge: "United Nations Development Programme 2025 Challenge",
        tagline: "Edge AI + computer vision turned a golf course into a live, self-monitoring waste pipeline for the United Nations.",
        role: "AI Developer Lead — team lead, model owner & full-stack contributor",
        timeline: "March – June 2025",
        status: "Shipped · UNDP 2025 Challenge",
        overview: [
          "WasteWatch is a full-stack system that tracks, predicts, and simulates how trash moves and piles up around Davao Golf Club — combining on-device object detection with a forecasting pipeline and a web dashboard so operators can see the problem before it becomes one.",
          "I led the AI side end-to-end: I designed the annotation guidelines, trained the team up on dataset labeling, and owned the training, evaluation, and validation of the YOLO11 detection model. On top of that I built the FastAPI services and MongoDB data layer that everything else talks to, and wired the whole thing to run on a Raspberry Pi 4 at the edge.",
          "It was the kind of project where the data doesn't exist yet, the hardware is unforgiving, and the deadline is real — and it shipped anyway.",
        ],
        techStack: [
          { group: "Backend",     items: ["Python", "FastAPI", "MongoDB"] },
          { group: "Computer Vision", items: ["YOLO11", "Ultralytics", "Object Detection"] },
          { group: "Edge & Hardware", items: ["Raspberry Pi 4", "Edge Inference"] },
          { group: "Data",        items: ["Data Annotation", "Analysis & Visualization", "Forecasting"] },
        ],
        highlights: [
          { title: "Led the AI team", detail: "Trained teammates on dataset annotation and enforced data quality standards across the whole labeling pipeline." },
          { title: "Owned the model lifecycle", detail: "Training, evaluation, and validation of the YOLO11 detector used across the project." },
          { title: "Ran inference at the edge", detail: "Deployed detection onto a Raspberry Pi 4 so the system works where the network doesn't." },
          { title: "Built the prediction & simulation layer", detail: "Modeled trash movement and accumulation so accumulation can be forecast, not just observed." },
          { title: "Delivered under a UN challenge brief", detail: "Full-stack delivery for a United Nations Development Programme 2025 challenge." },
        ],
        stats: [
          { value: "YOLO11", label: "detection model owned end-to-end" },
          { value: "Pi 4", label: "on-device edge inference" },
          { value: "Lead", label: "AI team of annotators & devs" },
        ],
        links: [
          { label: "View Repository", href: "https://github.com/Team2-UNDP/.github", kind: "repo" },
        ],
      },
      {
        title: "GARDS: NASA Space Knowledge Engine",
        href: "https://gard-nasa-hackathon.vercel.app/",
        description: "An AI-powered repository equipped with a search engine using NLP, clustering, and embeddings. \n\nDeveloped during the NASA Space Apps Challenge 2024 and Built with FastAPI, React, LMStudio, and Gemini.",
        tags: ["NLP", "Python", "React", "Search Engine", "Prompt Engineering"],
        banner: gards_banner,
        badge: "NASA Space Apps Challenge 2024",
        tagline: "A semantic search engine that actually understands space science — built from nothing in a 48-hour hackathon.",
        role: "Full-stack & NLP Developer",
        timeline: "October 2024 · 48-hour hackathon",
        status: "Shipped · NASA Space Apps 2024",
        overview: [
          "GARDS is an AI-powered knowledge repository for NASA material: you ask it a question in plain language and it returns the documents that actually answer it, ranked by meaning instead of keyword luck.",
          "Under the hood it chunks and embeds the corpus, clusters related material, and blends retrieval with an LLM — LMStudio locally for speed and Gemini for the heavier reasoning — behind a clean React interface served by FastAPI.",
          "Built live during the NASA Space Apps Challenge 2024: no sleep, no prior repo, no room for a second attempt.",
        ],
        techStack: [
          { group: "Backend",  items: ["Python", "FastAPI", "RAG Pipeline"] },
          { group: "NLP & AI", items: ["Embeddings", "Clustering", "Gemini", "LMStudio", "Prompt Engineering"] },
          { group: "Frontend", items: ["React", "Search UI"] },
          { group: "Deploy",   items: ["Vercel"] },
        ],
        highlights: [
          { title: "Semantic search, not keyword search", detail: "Embeddings + clustering mean related documents surface even when the wording never matches." },
          { title: "Hybrid LLM stack", detail: "LMStudio for local inference paired with Gemini — best of both worlds under hackathon time pressure." },
          { title: "Shipped in 48 hours", detail: "Full-stack, from empty repository to a deployed, working product during NASA Space Apps 2024." },
        ],
        stats: [
          { value: "48h", label: "concept to deployed" },
          { value: "NASA", label: "Space Apps 2024" },
          { value: "RAG", label: "embeddings + clustering" },
        ],
        links: [
          { label: "Launch Live Site", href: "https://gard-nasa-hackathon.vercel.app/", kind: "live" },
        ],
      },

      {
        title: "Gumzy",
        href: "https://gumzy.vercel.app/",
        description: "A small e-commerce platform for buying and selling products. \n\nBuilt with FastAPI & React.",
        tags: ["FastAPI", "React", "E-commerce"],
        banner: gumzy_banner,
        badge: "Freelance",
        tagline: "A complete, production-ready storefront — built solo, delivered solo, live in production.",
        role: "Sole Developer (Freelance)",
        timeline: "Freelance engagement",
        status: "Live in production",
        overview: [
          "Gumzy is a full e-commerce platform for buying and selling products: catalog, cart, checkout flow, and the admin tooling needed to actually run a store day to day.",
          "As the only developer on it I owned the entire stack — FastAPI services and data models on the back, a React storefront on the front, and every deployment in between. No hand-offs, no 'that's someone else's department'.",
          "It's live and taking real traffic today.",
        ],
        techStack: [
          { group: "Backend",  items: ["FastAPI", "Python", "REST API"] },
          { group: "Frontend", items: ["React", "E-commerce UX"] },
          { group: "Delivery", items: ["Vercel", "Freelance Delivery"] },
        ],
        highlights: [
          { title: "Owned 100% of the build", detail: "Architecture, API, storefront, and deployment — single-handed, start to finish." },
          { title: "Real client, real production", detail: "Shipped a working store that a business actually operates on." },
          { title: "Clean hand-off", detail: "Structured the codebase so the client can keep running it without me." },
        ],
        stats: [
          { value: "100%", label: "built solo, full stack" },
          { value: "Live", label: "in production" },
        ],
        links: [
          { label: "Launch Live Site", href: "https://gumzy.vercel.app/", kind: "live" },
        ],
      },

      {
        title: "RobotSkie",
        href: "https://robot-skie.vercel.app/",
        description: "An AI-powered web app for predicting Dota 2 tournament matches. Worked on as a side project with passion with analyzing dota 2 matches. Planning to add GPT wrapper soon!!! \n\nBuilt with FastAPI and React.",
        tags: ["React", "Prediction", "Machine Learning", "XGBoost", "Dota 2"],
        banner: robotskie_banner,
        tagline: "Tournament-grade Dota 2 match prediction, driven by real match data and an XGBoost model I trained myself.",
        role: "Creator, ML Engineer & Full-stack Developer",
        timeline: "Ongoing side project",
        status: "Live · GPT wrapper planned",
        overview: [
          "RobotSkie predicts the outcome of Dota 2 tournament matches. It pulls real match and team data, engineers features out of it, and runs an XGBoost model trained on historical results — all wrapped in a FastAPI backend and a React front end.",
          "This one is pure passion: I watch a lot of Dota, I wanted to know whether the numbers actually agree with my eye test, and the only way to find out was to build the thing myself.",
          "Next up is a GPT wrapper so you can just ask it who wins and why.",
        ],
        techStack: [
          { group: "ML",       items: ["XGBoost", "Feature Engineering", "Model Evaluation"] },
          { group: "Backend",  items: ["FastAPI", "Python", "Prediction API"] },
          { group: "Frontend", items: ["React", "Data Visualization"] },
          { group: "Domain",   items: ["Dota 2", "Match Analytics"] },
        ],
        highlights: [
          { title: "Trained my own prediction model", detail: "XGBoost on historical match data — features engineered from team and player performance." },
          { title: "Full ML product loop", detail: "Data ingestion → feature engineering → training → serving → UI, all by me." },
          { title: "Built out of genuine obsession", detail: "A passion project that refuses to stay a notebook." },
        ],
        stats: [
          { value: "XGBoost", label: "match outcome model" },
          { value: "Live", label: "web app in production" },
        ],
        links: [
          { label: "Launch Live Site", href: "https://robot-skie.vercel.app/", kind: "live" },
        ],
      },
      {
        title: "IsdaKnow",
        href: "#",
        description: "An AI-Powered web app that identifies fish species by uploading a fish image or via realtime web camera. Also won 3rd Place in the InnoFiesta 2024: AI and Data Science Competition. \n\nBuilt with YOLOv8, Flask, and OpenCV",
        tags: ["Image Classification", "AI", "YOLO", "Flask", "Data Cleaning & Annotation"],
        banner: isdaknow_banner,
        badge: "🏆 3rd Place — InnoFiesta 2024",
        tagline: "Point a camera at a fish and know the species instantly — a competition-winning computer vision system.",
        role: "ML Engineer & Computer Vision Developer",
        timeline: "2024 · InnoFiesta 2024: AI and Data Science Competition",
        status: "Competition-finalist · Undeployed",
        overview: [
          "IsdaKnow identifies fish species from a single uploaded photo or straight from a live webcam feed. Upload an image or point your camera, and it tells you what fish you're looking at.",
          "Behind it is a YOLOv8 detection model trained on cleaned and hand-annotated data, an OpenCV preprocessing layer, and a Flask app serving it all — with real-time inference handling the webcam path.",
          "It took 3rd Place at InnoFiesta 2024, the AI and Data Science Competition.",
        ],
        techStack: [
          { group: "Computer Vision", items: ["YOLOv8", "OpenCV", "Image Classification"] },
          { group: "ML Workflow",     items: ["Data Cleaning", "Dataset Annotation", "Model Validation"] },
          { group: "Backend",         items: ["Flask", "Python"] },
          { group: "Interfaces",      items: ["File Upload", "Realtime Webcam Inference"] },
        ],
        highlights: [
          { title: "🏆 3rd Place at InnoFiesta 2024", detail: "AI and Data Science Competition — judged and placed against peers." },
          { title: "Real-time webcam recognition", detail: "Not just batch uploads — live inference through the browser camera." },
          { title: "Hand-built dataset", detail: "Cleaned, annotated, and validated the training data myself." },
          { title: "Dual inference paths", detail: "Both static image upload and realtime video handled by the same pipeline." },
        ],
        stats: [
          { value: "3rd", label: "place at InnoFiesta 2024" },
          { value: "YOLOv8", label: "realtime fish detection" },
          { value: "2 modes", label: "upload + live camera" },
        ],
        links: [],
      },
      {
        title: "MCIIS DMS",
        href: "#",
        description: "A Document Management System for Mindanao Center for Informatics and Intelligent Systems (MCIIS) which allows users to manage and track documents digitally. \n\nBuilt with PHP, HTML, CSS, and JavaScript.",
        tags: ["PHP", "MariaDB", "HTML", "CSS", "JavaScript"],
        banner: mciis_banner,
        tagline: "A real document management system for a real research center — paper trails replaced with click trails.",
        role: "Full-stack Developer",
        timeline: "Academic / institutional build",
        status: "Delivered",
        overview: [
          "MCIIS DMS is a Document Management System built for the Mindanao Center for Informatics and Intelligent Systems, letting staff create, manage, and track documents digitally instead of losing them in folders and inboxes.",
          "It covers the full lifecycle: upload, categorize, route, and track the status of every document, with role-based access so the right people see the right files.",
          "Classic stack, serious responsibility — a PHP and MariaDB application built to survive real institutional use.",
        ],
        techStack: [
          { group: "Backend",  items: ["PHP", "MariaDB", "SQL"] },
          { group: "Frontend", items: ["HTML", "CSS", "JavaScript"] },
          { group: "Domain",   items: ["Document Workflow", "Record Tracking"] },
        ],
        highlights: [
          { title: "Full CRUD document lifecycle", detail: "Create, route, track, and archive — the whole workflow, not a demo slice." },
          { title: "Built for an actual institution", detail: "Delivered for MCIIS, not a classroom exercise." },
          { title: "Digital record-keeping that sticks", detail: "Replaced manual tracking with auditable, queryable document status." },
        ],
        links: [],
      },
      {
        title: "DenguePH",
        href: "https://matthew-usep.shinyapps.io/DenguePHDashboard/",
        description: "An interactive dashboard built with R and Shiny that visualizes dengue fever trends in the Philippines. \n\nFeatures include time series analysis, heatmaps, and predictive modeling to identify high-risk areas.",
        tags: ["Shiny", "Markdown", "R", "Data Analysis & Visualization", "Data Cleaning"],
        banner: dengueph_banner,
        tagline: "Philippine dengue data made legible — trends, hotspots, and forecasts in one interactive dashboard.",
        role: "Data Analyst & Developer",
        timeline: "Data science project",
        status: "Live on shinyapps.io",
        overview: [
          "DenguePH is an interactive R/Shiny dashboard that visualizes dengue fever trends across the Philippines: time series of case counts, geographic heatmaps of hotspots, and predictive modeling to flag where cases are likely to spike next.",
          "The hard part was never the charts — it was the data. Cleaning, reconciling, and formatting real public health data until it told a trustworthy story, then encoding that story in Markdown-driven, reproducible analysis.",
          "It's deployed publicly and runs live.",
        ],
        techStack: [
          { group: "Language", items: ["R", "Markdown"] },
          { group: "App",      items: ["Shiny", "Interactive Dashboards"] },
          { group: "Analysis", items: ["Time Series Analysis", "Heatmaps", "Predictive Modeling"] },
          { group: "Data",     items: ["Data Cleaning", "Analysis & Visualization"] },
        ],
        highlights: [
          { title: "Three views of one epidemic", detail: "Time series, geographic heatmaps, and predictive risk modeling in a single app." },
          { title: "Predictive hotspot detection", detail: "Modeling that identifies high-risk areas before the cases land." },
          { title: "Reproducible & public", detail: "Deployed on shinyapps.io — anyone can open it and explore the data." },
        ],
        stats: [
          { value: "Live", label: "public Shiny deployment" },
          { value: "3 views", label: "trends, heatmaps, forecasts" },
        ],
        links: [
          { label: "Launch Live Dashboard", href: "https://matthew-usep.shinyapps.io/DenguePHDashboard/", kind: "live" },
        ],
      },
      {
        title: "Portfolio Site",
        href: "https://seventeen-portfolio.vercel.app/",
        description: "This portfolio! Built with React and TypeScript.",
        tags: ["React", "TypeScript", "Tailwind"],
        // banner: portfolio_banner,
        badge: "WIP",
        tagline: "The site you're looking at right now — designed, built, and deployed by me.",
        role: "Designer & Developer",
        timeline: "Ongoing",
        status: "WIP · always evolving",
        overview: [
          "This portfolio is React 19, TypeScript, Tailwind CSS v4, and React Router — component-driven, typed end to end, and shipped through Vite to Vercel with Vercel Analytics wired in.",
          "Every block here is hand-built: the scroll-reveal system, the project cards, this very detail window you're reading. It's my sandbox for trying things I want to try, which is exactly why it stays fun.",
          "Treat it as a live resume — it changes as I do.",
        ],
        techStack: [
          { group: "Frontend", items: ["React 19", "TypeScript", "Tailwind CSS v4"] },
          { group: "Build",    items: ["Vite", "ESLint", "tsc"] },
          { group: "Delivery", items: ["Vercel", "Vercel Analytics"] },
        ],
        highlights: [
          { title: "Typed end to end", detail: "Strict TypeScript across data, components, and routing." },
          { title: "Zero UI library", detail: "Every component, animation, and interaction written from scratch." },
          { title: "Hand-rolled motion", detail: "Custom IntersectionObserver reveal system instead of an animation dependency." },
        ],
        stats: [
          { value: "0", label: "UI component libraries used" },
          { value: "100%", label: "hand-written components" },
        ],
        links: [
          { label: "Launch Live Site", href: "https://seventeen-portfolio.vercel.app/", kind: "live" },
        ],
      },
    ],
  },
  {
    emoji: "🤖",
    title: "AI & Machine Learning",
    projects: [
      {
        title: "Candy Eye - Lightweight Object Detection Model",
        href: "https://github.com/Seventeen23/CandyEye",
        description: "A lightweight object detection cpu first model implemented in Python from scratch.",
        tags: ["Python", "CPU First Computing", "Computer Vision", "Optimization"],
        badge: "WIP & PET",
        tagline: "Object detection written from scratch, tuned so it runs fast on ordinary CPUs — no GPU required.",
        role: "Author & Maintainer",
        timeline: "Ongoing · research-flavored side project",
        status: "WIP · PET",
        overview: [
          "CandyEye is a lightweight object detection model implemented in Python from first principles — not a wrapper around a pretrained library, but the actual architecture, training loop, and inference path written out.",
          "The constraint that makes it interesting: CPU-first computing. While the field optimizes for ever-bigger GPUs, CandyEye optimizes for the machine that everyone actually has, squeezing usable detection out of plain CPUs through careful architecture choices and real optimization work.",
          "It's part research, part engineering, and part proof that I'd rather understand how it works than call an API.",
        ],
        techStack: [
          { group: "Core",       items: ["Python", "NumPy", "From-scratch implementation"] },
          { group: "Focus",      items: ["CPU First Computing", "Optimization", "Model Compression"] },
          { group: "Domain",     items: ["Computer Vision", "Object Detection"] },
        ],
        highlights: [
          { title: "Built from scratch", detail: "Architecture, training, and inference written out — no black-box framework hiding the math." },
          { title: "CPU-first by design", detail: "Optimized for commodity hardware instead of assuming a datacenter GPU." },
          { title: "Open source", detail: "Publicly available and under active development." },
        ],
        stats: [
          { value: "From scratch", label: "no detection framework shortcuts" },
          { value: "CPU", label: "first-class target hardware" },
        ],
        links: [
          { label: "View Repository", href: "https://github.com/Seventeen23/CandyEye", kind: "repo" },
        ],
      },
      {
        title: "Choco - Personal Agentic Assistant",
        href: "https://github.com/Seventeen23/choco",
        description: "A personal agentic assistant that plans and executes multi-step tasks on your behalf through an LLM-driven tool-calling loop, running locally from the command line. \n\nBuilt with Python and LLM tooling.",
        // banner: choco_banner,
        tags: ["Python", "LLM", "Agentic AI", "Prompt Engineering"],
        tagline: "A local, CLI-native agent that breaks your goal into steps and executes them — with real tools, not vibes.",
        role: "Creator",
        timeline: "Ongoing side project",
        status: "Open source",
        overview: [
          "Choco is a personal agentic assistant that runs from your command line. Give it a goal and it plans the steps, calls the tools it needs, reads the results, and decides what to do next — an LLM-driven tool-calling loop that keeps going until the task is actually done.",
          "Everything runs locally: your shell, your files, your model endpoint. No cloud agent sitting between you and your machine.",
          "It's the project that taught me the most about what agents really are — not magic, but a tight loop of planning, acting, observing, and deciding, done reliably.",
        ],
        techStack: [
          { group: "Core",     items: ["Python", "LLM Tooling", "Tool-calling Loop"] },
          { group: "Agentic",  items: ["Task Planning", "Multi-step Execution", "State Tracking"] },
          { group: "Runtime",  items: ["Local Execution", "CLI", "Shell Integration"] },
          { group: "Craft",    items: ["Prompt Engineering"] },
        ],
        highlights: [
          { title: "Real agentic loop", detail: "Plan → act → observe → repeat, not a single-shot prompt wrapper." },
          { title: "Runs locally from the CLI", detail: "Works on your own machine, files, and shell — private by default." },
          { title: "Genuinely useful tooling", detail: "Multi-step tasks executed end to end instead of just suggested." },
        ],
        stats: [
          { value: "Local", label: "runs on your machine" },
          { value: "Multi-step", label: "autonomous task execution" },
        ],
        links: [
          { label: "View Repository", href: "https://github.com/Seventeen23/choco", kind: "repo" },
        ],
      },
    ],
  },
  {
    emoji: "📱",
    title: "Android Applications",
    projects: [
      {
        title: "DavaoFare Guide",
        href: "https://github.com/Seventeen23/DavaoFareGuide",
        description: "An offline mobile application that calculates fare estimates for different jeepney routes in Davao City.",
        tags: ["Android Studio", "Java", "Mobile"],
        banner: davaofare_banner,
        badge: "WIP & PET",
        tagline: "No signal, no problem — accurate jeepney fare estimates for Davao City that work completely offline.",
        role: "Android Developer",
        timeline: "Side project · WIP",
        status: "WIP · PET",
        overview: [
          "DavaoFare Guide is an offline Android app that calculates jeepney fare estimates across Davao City routes. Pick your route, see the fare — no data connection required, because half the time on a jeepney you don't have one.",
          "The interesting engineering is the constraint: everything is bundled locally, the route and fare data has to be structured for instant lookup, and the UI has to answer the question in under two seconds while you're digging for coins.",
          "Built in Android Studio with Java as a native-mobile exploration alongside my web work.",
        ],
        techStack: [
          { group: "Platform", items: ["Android Studio", "Java", "Android SDK"] },
          { group: "Design",   items: ["Offline-first Architecture", "Local Data Lookup"] },
          { group: "Domain",   items: ["Davao City Jeepney Routes", "Fare Calculation"] },
        ],
        highlights: [
          { title: "Fully offline", detail: "Zero network dependency — every fare calculation works without signal." },
          { title: "Practical local utility", detail: "Built around a real everyday problem people in Davao actually have." },
          { title: "Native Android work", detail: "Java + Android Studio, outside my usual web comfort zone." },
        ],
        links: [
          { label: "View Repository", href: "https://github.com/Seventeen23/DavaoFareGuide", kind: "repo" },
        ],
      },
    ],
  },
  {
    emoji: "🎮",
    title: "Game Projects",
    projects: [
      // TO BE ADDED IN THE FUTURE
    ],
  },
  {
    emoji: "📦",
    title: "Packages / Libraries",
    projects: [
      {
        title: "Candy Eye - Lightweight Object Detection Model",
        href: "https://github.com/Seventeen23/CandyEye",
        description: "A lightweight object detection cpu first model implemented in Python from scratch.",
        tags: ["Python", "CPU First Computing", "Computer Vision", "Optimization"],
        badge: "WIP & PET",
        tagline: "Object detection written from scratch, tuned so it runs fast on ordinary CPUs — no GPU required.",
        role: "Author & Maintainer",
        timeline: "Ongoing · research-flavored side project",
        status: "WIP · PET",
        overview: [
          "CandyEye is a lightweight object detection model implemented in Python from first principles — not a wrapper around a pretrained library, but the actual architecture, training loop, and inference path written out.",
          "The constraint that makes it interesting: CPU-first computing. While the field optimizes for ever-bigger GPUs, CandyEye optimizes for the machine that everyone actually has.",
          "Released as a public package/library so other people can build on it.",
        ],
        techStack: [
          { group: "Core",  items: ["Python", "NumPy", "From-scratch implementation"] },
          { group: "Focus", items: ["CPU First Computing", "Optimization", "Model Compression"] },
          { group: "Domain", items: ["Computer Vision", "Object Detection"] },
        ],
        highlights: [
          { title: "Built from scratch", detail: "No black-box detection framework hiding the math." },
          { title: "CPU-first by design", detail: "Optimized for commodity hardware." },
          { title: "Reusable by design", detail: "Packaged as a library, not a one-off script." },
        ],
        stats: [
          { value: "From scratch", label: "no detection framework shortcuts" },
          { value: "CPU", label: "first-class target hardware" },
        ],
        links: [
          { label: "View Repository", href: "https://github.com/Seventeen23/CandyEye", kind: "repo" },
        ],
      }
    ],
  },
  {
    emoji: "🛠️",
    title: "Tools & CLI",
    projects: [
      {
        title: "CoinPH Trading Bot",
        href: "#",
        description: "A simple trading bot that interacts with the CoinPH API to execute basic trading strategies. \n\nBuilt with Python and the CoinPH API.",
        tags: ["Python", "CoinPH API", "Basic Trading Algorithms"],
        tagline: "Automating crypto trades against the CoinPH API — strategies coded, emotions removed.",
        role: "Developer",
        timeline: "Side project",
        status: "Private tool",
        overview: [
          "A trading bot that talks to the CoinPH API and executes trading strategies automatically — no manual order placement, no hesitation, no emotional buy-ins at the top.",
          "It handles authentication, market data polling, order placement, and the strategy logic in between, all in Python.",
          "A great excuse to learn how exchange APIs really behave: rate limits, order states, and the exact ways an automated system can go wrong.",
        ],
        techStack: [
          { group: "Language", items: ["Python"] },
          { group: "Integration", items: ["CoinPH API", "Order Execution"] },
          { group: "Strategy", items: ["Basic Trading Algorithms", "Automation"] },
        ],
        highlights: [
          { title: "Full automated trading loop", detail: "Market data in, orders out — no manual intervention." },
          { title: "Exchange API integration", detail: "Auth, rate limits, and order lifecycle handled properly." },
          { title: "Emotion-free execution", detail: "The strategy runs exactly as written, every single time." },
        ],
        links: [],
      },
      {
        title: "Dota 2 Match Prediction CLI",
        href: "#",
        description: "A simple command-line tool that predicts the outcome of Dota 2 matches based on team compositions and historical data. \n\nBuilt with Python and the OpenDota API.",
        tags: ["Python", "OpenDota API", "XGBoost", "Data Analysis", "Machine Learning" ],
        tagline: "OpenDota data in, match predictions out — a machine learning model that lives in your terminal.",
        role: "Developer",
        timeline: "Side project",
        status: "Private tool",
        overview: [
          "A command-line tool that predicts Dota 2 match outcomes from team compositions and historical data, pulling from the OpenDota API and scoring the result with an XGBoost model.",
          "The pipeline: fetch matches, engineer features from team and player history, train, then predict straight from the terminal — no browser, no dashboard, just answers.",
          "It's the terminal-native sibling of RobotSkie, and a solid exercise in turning an API's raw data into a model that actually predicts something.",
        ],
        techStack: [
          { group: "ML",         items: ["XGBoost", "Machine Learning", "Data Analysis"] },
          { group: "Data Source", items: ["OpenDota API", "Historical Match Data"] },
          { group: "Interface",  items: ["Python", "Command-line Tool"] },
        ],
        highlights: [
          { title: "End-to-end ML in the terminal", detail: "Fetch, feature, train, predict — all from the CLI." },
          { title: "Real API, real messiness", detail: "Built on OpenDota's live data rather than a tidy CSV." },
          { title: "Instant answers", detail: "Predictions without opening a browser." },
        ],
        links: [],
      },
    ],
  },
  {
    emoji: "📄",
    title: "Papers & Research",
    projects: [
      {
        title: "Exploring the Role of Network Metrics in Infectious Disease Transmission: A Case Study on Medical Contact Networks",
        href: "/sna_paper.pdf",
        description: "A research paper that investigates the relationship between various network metrics and the transmission of infectious diseases within a medical contact network.",
        tags: ["Network Analysis", "Epidemiology", "Data Science"],
        badge: "Unpublished",
        tagline: "When does a network's shape predict an outbreak? A data-driven look at disease spread through medical contact networks.",
        role: "Author & Researcher",
        timeline: "Academic research",
        status: "Unpublished",
        overview: [
          "This paper investigates the relationship between network metrics and the transmission of infectious diseases within a medical contact network — asking which structural properties of a contact network actually predict how a disease moves through it.",
          "The work sits at the intersection of network analysis, epidemiology, and data science: building the graph, computing the metrics, and testing which of them carry real signal about transmission outcomes.",
          "It's my most research-flavored piece of work, and the one that shaped how I think about data that has relationships baked into it.",
        ],
        techStack: [
          { group: "Methods", items: ["Network Analysis", "Social Network Analysis", "Graph Metrics"] },
          { group: "Domain",  items: ["Epidemiology", "Medical Contact Networks"] },
          { group: "Field",   items: ["Data Science", "Statistical Analysis"] },
        ],
        highlights: [
          { title: "Original research", detail: "Formulated the question, ran the analysis, and wrote it up myself." },
          { title: "Interdisciplinary work", detail: "Network science applied to a real epidemiological question." },
          { title: "Data-heavy methodology", detail: "Graph construction, metric computation, and transmission modeling." },
        ],
        links: [
          { label: "Read the Paper", href: "/sna_paper.pdf", kind: "paper" },
        ],
      },
    ],
  },
  {
    emoji: "✨",
    title: "Misc",
    projects: [
      // TO BE ADDED IN THE FUTURE
    ],
  },
];

// ============================================================
// 📝 BLOG POSTS
// ============================================================
export interface BlogPost {
  date: string;
  title: string;
  href: string;
  tags?: string[];
  excerpt?: string;
}

export const blogPosts: BlogPost[] = [
  // {
  //   date: "Mar 10, 2025",
  //   title: "How I built my homelab with Raspberry Pi and Docker",
  //   href: "https://yourblog.com/homelab-setup",
  //   tags: ["homelab", "docker", "linux"],
  //   excerpt: "A walkthrough of my self-hosted setup — from hardware choices to container orchestration.",
  // },
];

// ============================================================
// 🧑‍🤝‍🧑 FRIENDS
// ============================================================
export interface Friend {
  name: string;
  href: string;
  avatar: string;
  bio?: string;
}

export const friends: Friend[] = [
  { 
    name: "Giver", 
    href: "https://giverphine-portfolio.vercel.app/", 
    avatar: giver_avatar, 
    bio: "Aspiring software developer and fellow Davaoeno! Check out my portfolio to see my projects and skills." 
  },
  { 
    name: "Hans", 
    href: "#", 
    avatar: "" },
  { 
    name: "Dessy", 
    href: "https://desireeportfolio.vercel.app/", 
    avatar: des_avatar,  
  },
  { 
    name: "PJ", 
    href: "https://www.pjlln.me/", 
    avatar: pj_avatar, 
  },
];

