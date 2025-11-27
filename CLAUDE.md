# CLAUDE.md

This file provides guidance to Claude Code (claude.ai/code) when working with code in this repository.

## Project Overview

FORZE is a landing page for a small-sided football community in Belfast focused on mental health, social inclusion, and recreational football. The project is a React/TypeScript single-page application built with Vite.

## Development Commands

### Setup
```bash
npm install                    # Install dependencies
```

### Development
```bash
npm run dev                    # Start dev server on http://localhost:3000
```

### Build
```bash
npm run build                  # Build production bundle with Vite
npm run preview                # Preview production build locally
```

## Environment Configuration

- Set `GEMINI_API_KEY` in `.env.local` (referenced in README but may not be actively used)
- The Vite config exposes this as `process.env.GEMINI_API_KEY` and `process.env.API_KEY`
- Dev server runs on port 3000, host 0.0.0.0

## Architecture

### Tech Stack
- **React 19.2.0** with React DOM
- **TypeScript 5.8.2** with strict configuration
- **Vite 6.2.0** for bundling and dev server
- **Tailwind CSS** via CDN (configured in index.html)
- **Lucide React** for icons
- **Import maps** for browser-native module resolution (aistudiocdn.com CDN)

### Project Structure
```
/
├── index.tsx              # React app entry point
├── App.tsx                # Main app component with layout and sections
├── components/
│   ├── ui/
│   │   └── Button.tsx     # Reusable button component
│   ├── Layout/
│   │   ├── Navbar.tsx     # Fixed navbar with scroll effects
│   │   └── Footer.tsx     # Site footer
│   └── Sections/
│       ├── Hero.tsx       # Full-screen hero section
│       ├── ContentBlock.tsx  # Reusable content section with theme variants
│       ├── ValuesGrid.tsx
│       ├── MissionStatement.tsx
│       ├── SocialStats.tsx
│       └── Locations.tsx
├── index.html             # HTML entry with Tailwind config
└── vite.config.ts         # Vite configuration
```

### Component Architecture

**App.tsx** is the main orchestrator that:
- Renders Navbar and Footer as layout components
- Composes multiple section components in sequence
- Uses ContentBlock with different themes (light/dark) for main content sections
- Implements scroll-to-top on mount

**Key patterns:**
- Component structure: Layout components (Navbar/Footer) + Section components
- Section components are self-contained and can be reordered in App.tsx
- ContentBlock is a versatile section template with theme variants and reversed layout option

### Styling System

**Tailwind Configuration** (in index.html):
- Custom color palette:
  - `forze-yellow`: #FFC800 (primary brand color)
  - `forze-yellowHover`: #E5B300
  - `forze-black`: #09090b
  - Token colors: `token-green`, `token-orange`, `token-purple`, `token-blue`, `token-dark`
- Custom fonts:
  - `font-sans`: Inter (body text)
  - `font-display`: Anton (headings)
- Custom animations: `fade-up`, `fade-in`, `float`, `pulse-slow`, `slide-up`
- Custom background: `bg-noise` for texture overlay

**Design patterns:**
- Glass morphism effects via `.glass-panel` utility class
- Staggered animation delays using inline `animationDelay` styles
- Responsive design with mobile-first approach
- Dark/light theme sections for visual contrast

### TypeScript Configuration

- Path alias: `@/*` maps to root directory
- Target: ES2022 with ESNext modules
- JSX: react-jsx (new transform)
- Experimental decorators enabled
- No emit mode (Vite handles bundling)

## Working with This Codebase

### Adding New Sections
1. Create component in `components/Sections/`
2. Import and add to App.tsx in desired order
3. Use existing sections as templates for consistent styling

### Modifying Styling
- Tailwind config is inline in index.html script tag
- Global styles in index.html style tag
- Component styles use Tailwind utility classes

### Navigation Links
- Navbar links use hash routing (`#battles`, `#about`, etc.)
- Ensure section IDs match href values for smooth scrolling
- Smooth scroll enabled via `scroll-smooth` class on html element
