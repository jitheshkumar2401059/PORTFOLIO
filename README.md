# Jithesh Kumar T — Personal Developer Portfolio

A modern, technically sophisticated personal developer portfolio for a Computer Science Engineering student specializing in Data Science, Artificial Intelligence, Machine Learning, Large Language Models (LLMs), and Software Development.

---

## 1. Portfolio Overview

This portfolio showcases engineering projects, technical skills, academic progression, and contact details with a focus on clean design, restrained futuristic aesthetics, and accessibility.

Built with **React 19**, **TypeScript**, **Vite**, and **Framer Motion**, the site delivers an accessible, high-performance experience with zero layout shift, dual dark/light themes, and strict reduced-motion support.

---

## 2. Features

- **Futuristic & Clean Aesthetic**: Designed with an Obsidian/Slate dark mode, crisp light mode, and ambient radial glow.
- **Accessible Motion System**: Global `MotionConfig` respecting `prefers-reduced-motion` at both the JavaScript (Framer Motion) and CSS levels.
- **Interactive Project Filtering**: Instant categorization of featured engineering work across AI/ML, Data Science, Software Development, Web Technologies, and Embedded Systems / IoT.
- **Accessible Project Detail View**: Keyboard-accessible (`Tab`/`Shift+Tab` focus trapped, `Esc` dismissable) dialog displaying architecture overviews, key highlights, technologies, and GitHub repository links.
- **Categorized Technical Stack**: Interactive skill chips with contextual detail view for tools, libraries, and frameworks.
- **Chronological Academic Timeline**: Semantic, accessible journey section detailing undergraduate progress and university milestones.
- **Responsive Navigation**: Adaptive desktop navbar and mobile drawer with full keyboard support.
- **SEO & Social Sharing Ready**: Complete Open Graph, Twitter card, theme-color, and robots metadata.

---

## 3. Technology Stack

- **Framework**: [React 19](https://react.dev/)
- **Build Tool**: [Vite 8](https://vite.dev/)
- **Language**: [TypeScript](https://www.typescriptlang.org/)
- **Animation**: [Framer Motion](https://motion.dev/)
- **Icons**: [Lucide React](https://lucide.dev/)
- **Styling**: Vanilla CSS Design Tokens (`tokens.css`, `global.css`, `components.css`)
- **Linter**: [Oxlint](https://oxc.rs/)

---

## 4. Project Structure

```text
PORTFOLIO/
├── public/
│   ├── favicon.svg             # Portfolio vector icon
│   └── robots.txt              # Search engine crawler instructions
├── src/
│   ├── assets/
│   │   └── profile.jpg         # Profile portrait
│   ├── components/
│   │   ├── layout/
│   │   │   ├── Navbar.tsx      # Navigation header & mobile menu
│   │   │   └── Footer.tsx      # Semantic footer
│   │   ├── sections/
│   │   │   ├── Hero.tsx        # Hero banner with bio tags & CTAs
│   │   │   ├── About.tsx       # About bio and education overview
│   │   │   ├── Skills.tsx      # Technical stack tabs & detail panel
│   │   │   ├── Projects.tsx    # Filterable project portfolio
│   │   │   ├── Journey.tsx     # Chronological academic milestones
│   │   │   └── Contact.tsx     # Contact info and social links
│   │   └── ui/
│   │       ├── Badge.tsx       # Accessible tag and interactive chips
│   │       ├── Button.tsx      # Primary, secondary & icon buttons
│   │       ├── Icons.tsx       # GitHub, LinkedIn custom SVG icons
│   │       ├── ProjectCard.tsx # Interactive project card component
│   │       ├── ProjectDetailModal.tsx # Accessible modal dialog
│   │       ├── SectionHeading.tsx # Reusable section title & eyebrow
│   │       └── ThemeToggle.tsx # Dark / light mode switcher
│   ├── context/
│   │   ├── ThemeContext.tsx    # Theme context provider
│   │   └── useTheme.ts         # Theme hook
│   ├── data/
│   │   ├── journey.ts          # Academic timeline data
│   │   ├── navigation.ts       # Section anchor links
│   │   ├── profile.ts          # Bio, education, and social links
│   │   ├── projects.ts         # Featured project implementations
│   │   └── skills.ts           # Categorized technical skills & details
│   ├── styles/
│   │   ├── tokens.css          # Design tokens (colors, spacing, shadows)
│   │   ├── global.css          # Reset, base styles, reduced motion
│   │   └── components.css      # Component layouts and micro-interactions
│   ├── types/
│   │   └── index.ts            # TypeScript interfaces and types
│   ├── App.tsx                 # Root application component with MotionConfig
│   └── main.tsx                # Entry point
├── index.html                  # HTML document with SEO & Open Graph tags
├── package.json
├── tsconfig.json
└── vite.config.ts
```

---

## 5. Local Setup & Installation

### Prerequisites
- [Node.js](https://nodejs.org/) (version 18 or higher recommended)
- `npm` (bundled with Node.js)

### Installation
Clone the repository and install dependencies:

```bash
git clone https://github.com/jitheshkumar2401059/PORTFOLIO.git
cd PORTFOLIO
npm install
```

---

## 6. Development & Build Commands

### Start Development Server
Runs the local Vite dev server with Hot Module Replacement (HMR):
```bash
npm run dev
```

### Run Linter
Runs Oxlint across all TypeScript and TSX files:
```bash
npm run lint
```

### Build for Production
Type-checks the project with TypeScript (`tsc -b`) and produces an optimized production bundle in `dist/`:
```bash
npm run build
```

### Preview Production Build
Locally tests the built bundle from `dist/`:
```bash
npm run preview
```

---

## 7. Projects Included

1. **JARVIS — AI Assistant** (`AI / ML`)
   - **Summary**: Real-time personal voice assistant powered by Google Gemini and LiveKit for streaming voice conversations and automated tool execution.
   - **Technologies**: Python, Google Gemini, LiveKit, WebRTC, Docker
   - **GitHub**: [github.com/jitheshkumar2401059/JARVIS](https://github.com/jitheshkumar2401059/JARVIS)

2. **Kavach — Automatic Train Protection System** (`Embedded Systems / IoT`)
   - **Summary**: NodeMCU-based railway safety prototype featuring proximity sensing, automated gate control, and alert mechanisms for collision prevention.
   - **Technologies**: NodeMCU, IoT, C++, Sensors & Actuators, Embedded Systems

---

## 8. Deployment Information

The portfolio is configured as a purely static Single-Page Application (SPA) ready for deployment on modern edge platforms:

- **Vercel**: Import the GitHub repository; build command is `npm run build` and output directory is `dist`.
- **Netlify**: Connect repository with publish directory set to `dist` and build command `npm run build`.
- **GitHub Pages**: Can be published using GitHub Actions with `actions/deploy-pages`.

No server-side secrets or runtime environment variables are required.
