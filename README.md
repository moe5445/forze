# FORZE - Small-Sided Football Community

FORZE is a landing page for a small-sided football community in Belfast, focused on mental health, social inclusion, and recreational football. The project is a React/TypeScript single-page application built with Vite.

## 🚀 Quick Start

### Prerequisites
- Node.js (latest LTS recommended)

### Installation
1. Clone the repository
2. Install dependencies:
   ```bash
   npm install
   ```

### Development
Start the development server:
```bash
npm run dev
```
The app will be available at `http://localhost:3000`.

### Build
Build for production:
```bash
npm run build
```

Preview the production build locally:
```bash
npm run preview
```

## 🏗️ Architecture

### Tech Stack
- **React 19.2.0** with React DOM
- **TypeScript 5.8.2** with strict configuration
- **Vite 6.2.0** for bundling and dev server
- **Tailwind CSS** via CDN
- **Lucide React** for icons
- **Import maps** for browser-native module resolution

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
- **App.tsx**: Main orchestrator rendering Navbar, Footer, and section components
- **Layout Components**: Navbar and Footer for consistent layout
- **Section Components**: Self-contained sections that can be reordered
- **ContentBlock**: Versatile section template with theme variants and layout options

### Styling System
- Custom Tailwind configuration with FORZE brand colors
- Glass morphism effects and custom animations
- Responsive design with mobile-first approach
- Dark/light theme sections for visual contrast

## 🔧 Configuration

### Environment
- Set `GEMINI_API_KEY` in `.env.local` if needed (referenced in README but may not be actively used)
- Dev server runs on port 3000, host 0.0.0.0

### TypeScript
- Path alias: `@/*` maps to root directory
- Target: ES2022 with ESNext modules
- JSX: react-jsx transform
- Experimental decorators enabled

## 🛠️ Development

### Adding New Sections
1. Create component in `components/Sections/`
2. Import and add to `App.tsx` in desired order
3. Use existing sections as templates for consistent styling

### Modifying Styling
- Tailwind config is inline in `index.html` script tag
- Global styles in `index.html` style tag
- Component styles use Tailwind utility classes

### Navigation
- Navbar links use hash routing (`#battles`, `#about`, etc.)
- Ensure section IDs match href values for smooth scrolling
- Smooth scroll enabled via `scroll-smooth` class on html element

## 📄 License

This project is private and proprietary.
# forze
