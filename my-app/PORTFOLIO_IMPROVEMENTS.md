# Portfolio Improvement Suggestions

Notes only — nothing here is implemented yet. Ordered roughly by impact/effort ratio.

---

## 🔴 High impact, low effort

### 1. Real page title & SEO meta tags
`index.html:7` still ships the Vite default:

```html
<title>my-app</title>
```

Your tab title and your Google result are both "my-app". Replace with your name + role, and add the
description / Open Graph tags that make link previews work when someone shares your site on Discord,
Twitter, or LinkedIn:

```html
<title>Matthew Tanutan — Full-stack & Data Scientist</title>
<meta name="description" content="Full-stack & Data Scientist crafting web experiences and open-source tools. Aspiring game developer, AI researcher & developer." />

<meta property="og:type" content="website" />
<meta property="og:title" content="Matthew Tanutan — Full-stack & Data Scientist" />
<meta property="og:description" content="..." />
<meta property="og:image" content="/og.png" />
<meta property="og:url" content="https://seventeen-portfolio.vercel.app/" />

<meta name="twitter:card" content="summary_large_image" />
```

`og:image` needs to be an absolute URL and a real 1200×630 file — worth generating from `hero.png`.

### 2. Per-route document titles
Right now the title never changes as you navigate. A small hook fixes it:

```tsx
// src/hooks/useDocumentTitle.ts
export const useDocumentTitle = (title: string) => {
  useEffect(() => {
    document.title = `${title} — ${profile.name}`;
  }, [title]);
};
```

Then call `useDocumentTitle("Projects")` at the top of each page.

### 3. Favicon / avatar is a generic placeholder
`public/favicon.svg` and `src/assets/hero.png` look like leftovers from the Vite template. Your
`avatar.png` and the violet `pulse-dot` in `Layout.tsx:87` are a much stronger identity — use them
for the favicon and OG image.

### 4. `href: "#"` renders a dead-but-clickable card
Several projects use `href: "#"` (`IsdaKnow`, `MCIIS DMS`, `CoinPH Trading Bot`, `Dota 2 CLI`). These
still render a full card with a chevron and open a new tab to the same page. Options:

- Add an optional `disabled?: boolean` to `Project` and render a non-anchor `<div>` with a
  "coming soon" state, or
- Point them at the GitHub repo if one exists — even a private/empty repo beats `#`.

Also add a guard in `ProjectCard` for external links to `vercel.app`/`github.com` only, so a typo
can't silently produce an unstyled `mailto:` link.

---

## 🟡 Medium impact

### 5. Empty categories take up vertical space
`Game Projects`, `Packages / Libraries`, `Misc` and now `AI & Machine Learning` all render as
collapsed-looking headers with a `0` badge. Now that there are 8 categories, the Projects page is
mostly empty headers. Consider:

- Filtering out zero-project categories on the Projects page, or
- Rendering an explicit "nothing here yet — see GitHub" line so it reads as intentional rather than
  broken.

### 6. No tech-stack / skills section
The data model has `tags` on every project but nothing aggregates them. A "Stack" section built by
counting tag frequency would be cheap to add and is the single most-requested thing on a portfolio:

```ts
export const allTags = [...new Set(
  projectCategories.flatMap(c => c.projects.flatMap(p => p.tags ?? []))
)].sort();
```

Pair it with proficiency grouping (strong / familiar / learning) which is much more persuasive than a
flat list of logos.

### 7. The `/posts` nav item leads to an empty page
`blogPosts` is `[]`, so `PostsPage` renders nothing but the nav link. Either write one post or hide the
route until you have content — a dead nav item is worse than no nav item.

### 8. Dead `href`s on friends and projects
`friends` has `"Hans", href: "#"` (`portfolioData.ts:220`), and two friends are missing `bio` while
two have it — the `FriendChip` tooltip only shows the name. Clean these up or make the layout tolerate
the inconsistency.

### 9. Resume file is duplicated
`public/resume.pdf` and `public/Resume.pdf` both exist and the link uses the capitalised one
(`portfolioData.ts:26`). On a case-sensitive host only one will resolve. Delete one and standardise
on lowercase, which is also the Vite/public-serve convention.

### 10. Tag vocabulary is inconsistent
`"React"`, `"Python"`, `"Java"` are languages. `"NLP"`, `"Object Detection"`, `"Machine Learning"`,
`"Prediction"` are domains. `"Mobile"`, `"E-commerce"`, `"Search Engine"` are categories. Pick one
axis (or tag each project with `stack` + `domain`) so the future stack section isn't muddled.

### 11. Badge text is unclear
`"WIP & PET"`, `"Undeployed"`, `"Unpublished"` — `PET` in particular needs expanding to
"Proof of Concept". Consider a consistent badge vocabulary: `WIP`, `Live`, `Private`, `Paper`,
`Award`, and move award/hackathon info into a separate `award` field so it can be styled differently.

---

## 🟢 Polish

### 12. Accessibility
- `ProjectCard.tsx:67` — the collapse `<button>` has no `aria-expanded` or `aria-controls`.
- Banners use `object-fill`, which distorts. `object-cover` looks better; if banners are designed at a
  fixed ratio, `object-contain` avoids distortion entirely.
- Project cards are `<a>` elements that wrap a lot of interactive-looking content. Add a visible
  `:focus-visible` ring — I don't see one anywhere, so keyboard users currently get no focus indicator.
- The `Reveal` animation sets `opacity: 0` initially with no `prefers-reduced-motion` guard. Add a
  media-query fallback so users with reduced-motion preferences aren't left waiting on IntersectionObserver.

### 13. Lint is failing on a clean tree
`npm run lint` fails with a pre-existing `react-refresh/only-export-components` error at
`Layout.tsx:58` (`navLinks` and `Reveal` are exported alongside the `Layout` component). Move
`navLinks` into `src/data/navLinks.ts` to get a green baseline — worth doing before adding anything else.

### 14. Bundle / delivery
- No `vercel.json` / SPA rewrite config is committed. If the Vercel project doesn't already rewrite
  unknown paths to `index.html`, deep links like `/projects` will 404 on refresh.
- Vite is set up with Tailwind v4 via the Vite plugin, but `autoprefixer` + `postcss` are still in
  `devDependencies` and Tailwind isn't loaded via `@tailwindcss/vite` in `main.tsx` as far as the
  config implies. Worth confirming the CSS pipeline is using the fast path.

### 15. Data file ergonomics
`portfolioData.ts` is the single source of truth and it's clearly meant to be hand-edited, but the
banner `import` block is manual and easy to break — adding a project with a banner means adding an
import and hoping the path is right. Options:

- `import.meta.glob("../assets/banners/*", { eager: true })` keyed by filename, so banners resolve
  by string key instead of an import statement, or
- Move to a single `projects.json` with `import.meta.glob` for assets.

### 16. Consider adding
- **Featured / pinned projects** — a `featured?: boolean` flag so the homepage can lead with 2–3
  strongest work instead of an arbitrary slice of categories.
- **Project detail or case-study pages** — a `slug` plus a short writeup on the interesting problems.
  For ML/data work especially, recruiters will want to read *how* something was built.
- **Keyboard shortcut `/` to search** — a lightweight filter box over project tags. With this many
  categories it becomes genuinely useful fast.
- **OG image per route** is overkill, but a generated static OG image from your tagline is cheap.