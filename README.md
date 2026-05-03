# Bhavik Bhoir — Personal Portfolio

Recruiter-facing portfolio for a Full Stack Developer / Module Lead with 5+ years building production-grade platforms in financial services.

**Live:** https://bbhoir-portfolio.web.app/

![React](https://img.shields.io/badge/React-18-61DAFB?logo=react&logoColor=white&style=flat-square)
![Vite](https://img.shields.io/badge/Vite-6-646CFF?logo=vite&logoColor=white&style=flat-square)
![Framer Motion](https://img.shields.io/badge/Framer_Motion-11-0055FF?logo=framer&logoColor=white&style=flat-square)
![SCSS](https://img.shields.io/badge/SCSS-Sass-CC6699?logo=sass&logoColor=white&style=flat-square)
![Firebase](https://img.shields.io/badge/Firebase_Hosting-Deployed-FFCA28?logo=firebase&logoColor=black&style=flat-square)

---

## Sections

| # | Section | Contents |
|---|---|---|
| 1 | Home | Typewriter role animation, hero name with per-letter entrance, tagline, resume download, contact links, tech stack pills |
| 2 | Experience | 4 employer cards — Idexcel (current, Module Lead), OpenTabs, Forkaia, Buttonwood Gaming — with bullet-point detail and tech tags |
| 3 | Education | MS EEE at Texas A&M Kingsville (4.0 GPA) and BE E&T at University of Mumbai |
| 4 | Projects | 9 projects — featured cards with hover-reveal screenshots, GitHub and live demo links |
| 5 | Skills | 8 skill categories — Frontend, Backend, Databases, Cloud/AWS, AI/GenAI, Testing, DevOps, Process |
| 6 | Certifications | 13 certificates — 4 AWS courses, Udemy bootcamps (Web, Python, SQL, TensorFlow), Unity, C/C++, LabVIEW |
| 7 | Artwork | 12 pieces of DC Comics and anime pencil and digital fan art |

---

## Features

- **Framer Motion animations** — section transitions with `AnimatePresence`, scroll-triggered `Reveal` fade-ups, staggered list entrances, per-character hero name animation
- **Dark / light theme** — toggle persisted to `localStorage`; CSS custom properties drive instant switching
- **Responsive sidebar navigation** — collapses to a hamburger menu on mobile
- **Cursor spotlight** — radial gradient follows the cursor across the main panel
- **Hover-reveal project previews** — screenshot slides open on project card hover
- **Featured project badges** — amber border and "Featured" pill for flagship projects
- **Lazy-loaded images** — certificates, artwork, and project screenshots
- **Security headers** — CSP, X-Frame-Options, X-XSS-Protection via Firebase Hosting config
- **PWA manifest** — `manifest.json` + theme-color meta tag

---

## Tech stack

| Layer | Technology |
|---|---|
| UI framework | React 18 + Vite 6 |
| Animations | Framer Motion 11 |
| Icons | React Icons 5 |
| Styling | SCSS (Sass 1.99) — token-based design system |
| Font | Inter (Google Fonts) |
| Hosting | Firebase Hosting |
| Build output | `build/` (Vite, code-split: react / motion / icons) |

---

## Setup & run

```bash
# Prerequisites: Node.js >= 20
npm install

npm run dev        # dev server at http://localhost:5173
npm run build      # production build → build/
npm run preview    # preview production build
npm run deploy     # build + firebase deploy
```
