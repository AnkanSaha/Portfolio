# Terminal Portfolio - Frontend

The frontend application for the terminal-based portfolio, built with Next.js 15 and xterm.js.

## Overview

This Next.js application provides an interactive terminal experience where visitors can explore the portfolio using Linux-like commands. The entire interface is a terminal emulator powered by xterm.js.

## Features

- 🖥️ Full terminal emulation with xterm.js
- ⌨️ Tab autocomplete for commands
- 📜 Command history with arrow key navigation
- 🎨 Beautiful dark theme with syntax highlighting
- 📱 Responsive design for all screen sizes
- ⚡ Deployed on Cloudflare Workers for edge performance

## Available Scripts

```bash
# Development server with Turbopack
npm run dev

# Production build
npm run build

# Build for Cloudflare Workers
npm run build:cf

# Start production server
npm run start

# Deploy to Cloudflare Workers
npm run deploy:cf

# Lint code
npm run lint
```

## Dependencies

### Core
- **next**: 15.3.4 - React framework
- **react**: 19.0.0 - UI library
- **@xterm/xterm**: 6.0.0 - Terminal emulator
- **@xterm/addon-fit**: Auto-resize terminal
- **@xterm/addon-web-links**: Clickable links

### Styling
- **tailwindcss**: 4.0 - Utility-first CSS

### Deployment
- **@opennextjs/cloudflare**: Cloudflare Workers adapter
- **wrangler**: Cloudflare CLI

## Environment Variables

No environment variables required for basic functionality.

## Project Structure

```
frontend/
├── app/
│   ├── components/
│   │   └── Terminal/
│   │       └── TerminalPortfolio.tsx  # Main terminal component (900+ lines)
│   ├── globals.css                     # Global styles & scrollbar hiding
│   ├── layout.tsx                      # Root layout with Analytics
│   ├── page.tsx                        # Home page
│   ├── not-found.tsx                   # 404 page
│   ├── robots.ts                       # SEO robots.txt
│   └── sitemap.ts                      # SEO sitemap.xml
├── public/
│   ├── patterns/                       # Background patterns
│   └── social/                         # Social media icons
├── next.config.ts                      # Next.js configuration
├── tsconfig.json                       # TypeScript config
├── postcss.config.mjs                  # PostCSS config
├── eslint.config.mjs                   # ESLint config
├── wrangler.toml                       # Cloudflare Workers config
└── package.json
```

## Terminal Commands

### Portfolio
- `about` - About me
- `skills` - Technical skills
- `experience` - Work history
- `projects` - Portfolio projects
- `education` - Educational background
- `achievements` - Awards & badges
- `contact` - Contact info
- `social` - Social links

### Linux-like
- `ls`, `ll`, `ls -a` - List files
- `pwd` - Current directory
- `cat` - Read files
- `whoami` - Current user
- `neofetch` - System info
- `history` - Command history
- And many more!

## Deployment

### Cloudflare Workers

1. Login: `npm run login:cf`
2. Build: `npm run build:cf`
3. Deploy: `npm run deploy:cf`

### Other Platforms

Standard Next.js deployment works on Vercel, Netlify, etc.

## License

MIT License - see [LICENSE](../LICENSE) for details.
