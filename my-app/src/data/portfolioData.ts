// ============================================================
// 🎨 PORTFOLIO DATA — Edit everything here!
// ============================================================

import avatar         from "../assets/avatar.png"; // Profile Picture
import giver_avatar   from "../assets/giver_avatar.png"; // Friend's Avatar

import undp_banner     from "../assets/undp_banner.png"; // Project Banner
import mciis_banner    from "../assets/mciis_banner.png"; // Project Banner
import isdaknow_banner from "../assets/isdaknow_banner.png"; // Project Banner

export const profile = {
  name: "Seventeen",
  displayNames: ["Seventeen (en)", "実佳 (jp)"],
  pronouns: "(He/Him)",
  tagline: "Full-stack & Data Scientist crafting web experiences & open-source tools. Aspiring game developer, AI researcher & developer.",
  avatar: avatar, // URL to your avatar image, leave empty for initials fallback
  socials: [
    { label: "Resume",    href: "/resume1.pdf",                               icon: "resume",  download: true },
    { label: "GitHub",    href: "https://github.com/Seventeen23",           icon: "github"  },
    { label: "Twitter",   href: "https://x.com/MatthewTanutan",                icon: "twitter" },
    // { label: "Bluesky",   href: "https://bsky.app/profile/you.bsky.social",  icon: "bluesky" },
    // { label: "Discord",   href: "https://discord.gg/yourserver",             icon: "discord" },
    { label: "Email",     href: "mailto:matthewtanutan17@gmail.com",         icon: "email"   },
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
      },
      {
        title: "IsdaKnow",
        href: "#",
        description: "An AI-Powered web app that identify fish specied by uploading a fish image or via realtime web camera. \n\nBuilt with YOLOv8, Flask, and OpenCV",
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
      }
    ],
  },
  {
    emoji: "📄",
    title: "Papers & Research",
    projects: [
      // TO BE ADDED In THE FUTURE
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
}

export const blogPosts: BlogPost[] = [
  // { date: "Mar 10, 2025", title: "How I built my homelab with Raspberry Pi and Docker", href: "https://yourblog.com/homelab-setup" },
  // { date: "Jan 22, 2025", title: "Getting started with Rust for web developers",        href: "https://yourblog.com/rust-for-web-devs" },
  // { date: "Dec 5, 2024",  title: "My 2024 year in review",                              href: "https://yourblog.com/2024-review" },
];

// ============================================================
// 🧑‍🤝‍🧑 FRIENDS
// ============================================================
export interface Friend {
  name: string;
  href: string;
  avatar: string;
}

export const friends: Friend[] = [
  { name: "Giver", href: "https://giverphine-portfolio.vercel.app/", avatar: giver_avatar },
  { name: "Hans", href: "#", avatar: "" },
];

// ============================================================
// 🔑 PUBLIC KEYS [SOON]
// ============================================================
export interface PublicKey {
  label: string;
  value: string;
  downloadHref?: string;
}

export const publicKeys: PublicKey[] = [
  { label: "PGP", value: "XXXX XXXX XXXX XXXX", downloadHref: "/yourname.asc" },
];
