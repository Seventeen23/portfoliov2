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

export const profile = {
  name: "Seventeen",
  displayNames: ["Matthew Feri Tanutan (en)","Seventeen (en)", "実佳 (jp)"],
  pronouns: "(He/Him)",
  tagline: "Full-stack & Data Scientist crafting web experiences & open-source tools. Aspiring game developer, AI researcher & developer.",
  avatar: avatar, // URL to your avatar image, leave empty for initials fallback
  socials: [
    { label: "Resume",    href: "/resume.pdf",                                icon: "resume",     download: true },
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
export interface Project {
  title: string;
  href: string;
  description: string;
  banner?: string;   // URL to banner image (optional)
  tags?: string[];
  isFork?: boolean;
  badge?: string;    // e.g. "WIP", "CoRL 2025"
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
      },
      {
        title: "GARDS: NASA Space Knowledge Engine",
        href: "https://gard-nasa-hackathon.vercel.app/",
        description: "An AI-powered repository equipped with a search engine using NLP, clustering, and embeddings. \n\nDeveloped during the NASA Space Apps Challenge 2024 and Built with FastAPI, React, LMStudio, and Gemini.",
        tags: ["NLP", "Python", "React", "Search Engine", "Prompt Engineering"],
        banner: gards_banner,
        badge: "NASA Space Apps Challenge 2024",
      },
      {
        title: "RobotSkie",
        href: "https://robot-skie.vercel.app/",
        description: "An AI-powered web app for predicting Dota 2 tournament matches. Worked on as a side project with passion with analyzing dota 2 matches. Planning to add GPT wrapper soon!!! \n\nBuilt with FastAPI and React.",
        tags: ["React", "Prediction", "Machine Learning", "Dota 2"],
        banner: robotskie_banner,
        badge: "WIP",
      },
      {
        title: "IsdaKnow",
        href: "#",
        description: "An AI-Powered web app that identifies fish species by uploading a fish image or via realtime web camera. Also won 3rd Place in the InnoFiesta 2024: AI and Data Science Competition. \n\nBuilt with YOLOv8, Flask, and OpenCV",
        tags: ["Image Classification", "AI", "Flask", "Data Cleaning & Annotation"],
        banner: isdaknow_banner,
        badge: "Undeployed",
      },
      {
        title: "MCIIS DMS",
        href: "#",
        description: "A Document Management System for Mindanao Center for Informatics and Intelligent Systems (MCIIS) which allows users to manage and track documents digitally. \n\nBuilt with PHP, HTML, CSS, and JavaScript.",
        tags: ["PHP", "MariaDB", "HTML", "CSS", "JavaScript"],
        banner: mciis_banner,
      },
      {
        title: "DenguePH",
        href: "https://matthew-usep.shinyapps.io/DenguePHDashboard/",
        description: "An interactive dashboard built with R and Shiny that visualizes dengue fever trends in the Philippines. \n\nFeatures include time series analysis, heatmaps, and predictive modeling to identify high-risk areas.",
        tags: ["Shiny", "Markdown", "R", "Data Analysis & Visualization", "Data Cleaning"],
        banner: dengueph_banner
      },
      {
        title: "Portfolio Site",
        href: "https://seventeen-portfolio.vercel.app/",
        description: "This portfolio! Built with React and TypeScript.",
        tags: ["React", "TypeScript", "Tailwind"],
        // banner: portfolio_banner,
        badge: "WIP",
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
      // TO BE ADDED IN THE FUTURE
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
      },
      {
        title: "Dota 2 Match Prediction CLI",
        href: "#",
        description: "A simple command-line tool that predicts the outcome of Dota 2 matches based on team compositions and historical data. \n\nBuilt with Python and the OpenDota API.",
        tags: ["Python", "OpenDota API", "XGBoost", "Data Analysis", "Machine Learning" ],
      },
      {
        title: "DavaoFare Guide",
        href: "#",
        description: "A offline mobile applcation that calculate fare estimates for different jeepney routes in Davao City.",
        tags: ["Android Studio", "Java", "Mobile"],
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
  { name: "Giver", href: "https://giverphine-portfolio.vercel.app/", avatar: giver_avatar, bio: "Aspiring software developer and fellow Davaoeno! Check out my portfolio to see my projects and skills." },
  { name: "Hans", href: "#", avatar: "" },
  { name: "Dessy", href: "https://desireeportfolio.vercel.app/", avatar: des_avatar,  },
  { name: "PJ", href: "http://pjlln.me/portfolio/", avatar: pj_avatar, },
];


