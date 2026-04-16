// ============================================================
// 🎨 PORTFOLIO DATA — Edit everything here!
// ============================================================

export const profile = {
  name: "Seventeen",
  displayNames: ["Seventeen (en)", "あなたの名前 (ja)"],
  pronouns: "(He/Him)",
  tagline: "full-stack developer crafting web experiences & open-source tools.",
  avatar: "./assets/avatar.png", // URL to your avatar image, leave empty for initials fallback
  socials: [
    { label: "GitHub",    href: "https://github.com/yourusername",           icon: "github"  },
    { label: "Twitter",   href: "https://x.com/yourusername",                icon: "twitter" },
    { label: "Bluesky",   href: "https://bsky.app/profile/you.bsky.social",  icon: "bluesky" },
    { label: "Discord",   href: "https://discord.gg/yourserver",             icon: "discord" },
    { label: "Email",     href: "mailto:you@example.com",                    icon: "email"   },
    { label: "itch.io",   href: "https://yourname.itch.io",                  icon: "itch"    },
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
        title: "My Awesome App",
        href: "https://github.com/yourusername/awesome-app",
        description: "A full-stack web application built with Next.js and PostgreSQL.",
        tags: ["Next.js", "TypeScript", "PostgreSQL"],
        banner: "",
      },
      {
        title: "Portfolio Site",
        href: "https://yourportfolio.com",
        description: "This portfolio! Built with React and TypeScript.",
        tags: ["React", "TypeScript", "Tailwind"],
      },
    ],
  },
  {
    emoji: "🎮",
    title: "Game Projects",
    projects: [
      {
        title: "Cool Indie Game",
        href: "https://yourusername.itch.io/cool-indie-game",
        description: "A 2D puzzle platformer made with Godot.",
        tags: ["Godot", "GDScript"],
        banner: "",
        badge: "WIP",
      },
    ],
  },
  {
    emoji: "📦",
    title: "Packages / Libraries",
    projects: [
      {
        title: "my-cool-lib",
        href: "https://github.com/yourusername/my-cool-lib",
        description: "A lightweight utility library for Node.js.",
        tags: ["Node.js", "TypeScript"],
      },
      {
        title: "another-fork",
        href: "https://github.com/yourusername/another-fork",
        description: "My fork of a popular library with extra features.",
        isFork: true,
        tags: ["JavaScript"],
      },
    ],
  },
  {
    emoji: "🛠️",
    title: "Tools & CLI",
    projects: [
      {
        title: "dev-toolkit",
        href: "https://github.com/yourusername/dev-toolkit",
        description: "A collection of CLI tools for developer productivity.",
        tags: ["Rust", "CLI"],
      },
    ],
  },
  {
    emoji: "📄",
    title: "Papers & Research",
    projects: [
      {
        title: "My Research Paper",
        href: "https://example.com/paper",
        description: "Research on machine learning applied to creative domains.",
        badge: "NeurIPS 2024",
        banner: "",
      },
    ],
  },
  {
    emoji: "✨",
    title: "Misc",
    projects: [
      {
        title: "Homelab / Network",
        href: "https://github.com/yourusername/homelab",
        description: "My homelab setup for self-hosting and experimentation.",
        tags: ["Linux", "Docker", "Networking"],
      },
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
  { date: "Mar 10, 2025", title: "How I built my homelab with Raspberry Pi and Docker", href: "https://yourblog.com/homelab-setup" },
  { date: "Jan 22, 2025", title: "Getting started with Rust for web developers",        href: "https://yourblog.com/rust-for-web-devs" },
  { date: "Dec 5, 2024",  title: "My 2024 year in review",                              href: "https://yourblog.com/2024-review" },
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
  { name: "Friend One", href: "https://friendone.dev", avatar: "" },
  { name: "Friend Two", href: "https://friendtwo.com", avatar: "" },
];

// ============================================================
// 🔑 PUBLIC KEYS
// ============================================================
export interface PublicKey {
  label: string;
  value: string;
  downloadHref?: string;
}

export const publicKeys: PublicKey[] = [
  { label: "PGP", value: "XXXX XXXX XXXX XXXX", downloadHref: "/yourname.asc" },
];
