# Ankan OS

A portfolio that boots like a desktop operating system. Not a themed landing page — a working single-page OS simulation with a boot sequence, a window manager, a taskbar, a start menu, and a set of real apps, all built on Next.js.

![Next.js](https://img.shields.io/badge/Next.js-15.3.4-black?style=for-the-badge&logo=next.js)
![React](https://img.shields.io/badge/React-19-blue?style=for-the-badge&logo=react)
![TypeScript](https://img.shields.io/badge/TypeScript-5.0-blue?style=for-the-badge&logo=typescript)
![Cloudflare Workers](https://img.shields.io/badge/Deployed_on-Cloudflare_Workers-f38020?style=for-the-badge&logo=cloudflare)

## Live Demo

Visit: [ankan.in](https://ankan.in)

## What it actually is

Loading the site plays a boot sequence (GRUB-style menu, systemd-style log lines, splash screen), then drops you onto a desktop: wallpaper, desktop icons, a top panel with a start menu, quick-launch, running-window buttons, and a system tray. Every "app" is a real window — draggable, resizable, minimizable, closable — backed by a Redux store that tracks window state, not a single scrolling page.

Closing/shutting down runs its own log sequence and can hand off into a real reboot. Refreshing mid-session remembers you already booted (via `sessionStorage`) and skips straight to the desktop.

## Features

- **Boot / shutdown sequence** — GRUB menu, staged systemd-style log lines that reveal one at a time, splash screen with a progress bar; shutdown mirrors it in reverse. Skippable with any key. Respects `prefers-reduced-motion`.
- **Window manager** — drag, resize, minimize, maximize, focus/z-order, all apps open as real windows (`app/os/window`).
- **Taskbar** — start menu with search/filtering by category, pinned quick-launch icons, live running-window buttons, and a system tray.
- **System tray** — Wi-Fi and Sound are real toggleable popovers, not static icons. Turning Wi-Fi off is a simulated offline mode: apps that fetch live data (GitHub, Nexoral, Blog) show an actual "You're Offline" screen instead of silently succeeding. Battery opens a real app window backed by the browser's Battery Status API (Chromium only — shows an honest "unavailable" state elsewhere rather than faking a percentage). The clock opens a Calendar app with a real month grid and a live sub-millisecond clock.
- **Real 3D Earth wallpaper** — an actual rotating 3D globe (`react-globe.gl` / three.js) with a real NASA Blue Marble texture, not a flat animated image.
- **Desktop icons** — right-click context menu, selectable, configurable size/visibility from Settings.
- **Settings app** — wallpaper accent variants, terminal opacity/font size, reduced-motion, desktop icon visibility/size, and more, all persisted to `localStorage`.
- **A real terminal** — see below.

## Apps

| App | What it does |
|---|---|
| Terminal | A real shell — see [Terminal](#terminal) below |
| About Me | Bio, summary, education, languages, achievements |
| Experience | Work history |
| Projects | Open-source & production projects |
| Skills | Technical skill categories |
| Contact | Contact info and a working contact form |
| Files | A simulated filesystem browser |
| Text Editor | Opens files from the Files app |
| Resume | Formatted resume, viewable/printable |
| GitHub Profile | Live GitHub profile — real avatar, bio, stats, and full public repo list with descriptions, pulled from the GitHub API (not an iframe — GitHub blocks that) |
| Nexoral (GitHub Org) | Same treatment for the [Nexoral](https://github.com/nexoral) organization |
| Blog | Embeds [blog.ankan.in](https://blog.ankan.in) |
| System Monitor | A real btop-style resource monitor — CPU load from actual `requestAnimationFrame` frame timing, JS heap usage, real network throughput via the Resource Timing API. Never fabricates a number it can't measure; says so when a metric isn't available in-browser |
| Calculator | Basic calculator |
| Battery | Live battery level, charging state, and time estimates via `navigator.getBattery()` |
| Calendar | Month-grid calendar + live clock |
| Settings | System preferences |

## Terminal

A shell built from scratch on top of `xterm.js`, with tab completion, history (↑/↓), `Ctrl+C`/`Ctrl+L`. Real commands, not a canned command list:

- **Filesystem**: `ls`, `cd`, `pwd`, `cat`, `file`, `tree`
- **Portfolio**: `about`, `experience`, `skills`, `projects`, `contact`, `resume`, `github`, `linkedin`
- **System**: `neofetch`, `uname`, `date`, `uptime`, `history`, `man`, `whoami`
- **"Process" tools**: `ps`, `top`/`htop` (reflects real open windows), `free`, `df`, `ifconfig`/`ip`, `which`
- **Power**: `poweroff` / `shutdown` / `halt` / `init 0`, `reboot` / `init 6`, `exit` (closes the terminal window, not the OS)
- **REPLs**: `node` drops into a real JavaScript REPL (genuine `eval`, since the browser already is a JS runtime); `python` drops into a lightweight arithmetic + `print()` REPL (clearly labeled as not a real interpreter)
- **Fun**: `sudo`, `hack`, `cowsay`, `matrix`, `calc`, `weather`, `banner`, `apt install skills`

Run `help` inside the terminal for the full, current list — it's generated from the actual command table, so it never drifts from what's real.

## Tech Stack

- **Framework**: [Next.js 15](https://nextjs.org/) (App Router) + React 19 + TypeScript
- **State**: Redux Toolkit — window manager, system state (boot phase, Wi-Fi/sound), GitHub data cache
- **Terminal**: [xterm.js](https://xtermjs.org/) with FitAddon and WebLinksAddon
- **Animation**: [Motion](https://motion.dev/) (Framer Motion) for window/menu transitions
- **3D**: [react-globe.gl](https://github.com/vasturiano/react-globe.gl) / three.js for the rotating Earth
- **Styling**: plain CSS Modules + CSS custom properties (no Tailwind) — design tokens in `app/globals.css`
- **Icons**: react-icons (Feather set)
- **Deployment**: Cloudflare Workers via [OpenNext](https://opennext.js.org/)
- **Analytics**: Vercel Analytics

## Project Structure

```
Portfolio/
├── frontend/
│   ├── app/
│   │   ├── os/                  # The OS shell itself
│   │   │   ├── boot/            # Boot sequence
│   │   │   ├── shutdown/        # Shutdown sequence
│   │   │   ├── desktop/         # Wallpaper, desktop icons, 3D Earth
│   │   │   ├── window/          # Window manager (drag/resize/focus)
│   │   │   ├── panel/           # Taskbar: start menu, tray, clock
│   │   │   ├── theme/           # Accent color, icon size, fullscreen
│   │   │   ├── gate/            # Mobile gate (desktop-class experience only)
│   │   │   └── ui/              # Shared primitives (AppShell, Switch, Sparkline...)
│   │   ├── apps/                # One folder per app (see table above)
│   │   │   └── terminal/shell/  # The real shell: commands, REPLs, filesystem
│   │   ├── store/                # Redux slices
│   │   ├── data/portfolioData.ts # All portfolio content lives here
│   │   ├── hooks/                 # useSetting, useLocalStorage, useGitHubData...
│   │   ├── lib/                   # Server-side helpers (GitHub API + cache)
│   │   └── api/                   # Next.js route handlers
│   ├── public/os/                # Wallpaper, dragon mark, Earth texture, cursors
│   ├── package.json
│   ├── next.config.ts
│   └── wrangler.toml             # Cloudflare config
├── config/
│   └── ankan.conf                # Nginx configuration
├── LICENSE
└── README.md
```

## Installation

### Prerequisites

- Node.js 18.x or higher
- npm

### Quick Start

```bash
git clone https://github.com/AnkanSaha/Portfolio.git
cd Portfolio/frontend
npm install
npm run dev
```

Open [http://localhost:3000](http://localhost:3000).

### Environment variables

None are required to run it. Optionally:

- `GITHUB_TOKEN` — a GitHub personal access token. Without it, the GitHub Profile/Nexoral apps still work (unauthenticated GitHub API), just at a lower rate limit (60 req/hr per IP vs. much higher authenticated).

## Deployment

### Cloudflare Workers

```bash
npm run login:cf
npm run build:cf
npm run deploy:cf
```

### Vercel / other platforms

```bash
npm run build
npm run start
```

## Customization

All portfolio content (name, bio, experience, projects, skills, social links) lives in one place: `frontend/app/data/portfolioData.ts`. Edit that file — nothing else needs to change for content updates.

App registration (which apps exist, their icons, default window size, desktop visibility) lives in `frontend/app/apps/registry.tsx`.

## License

MIT — see [LICENSE](LICENSE).

## Author

**Ankan Saha**
- Backend Engineer
- GitHub: [@AnkanSaha](https://github.com/AnkanSaha)
- LinkedIn: [theankansaha](https://linkedin.com/in/theankansaha)
- Email: connect@ankan.in

## Acknowledgments

- [xterm.js](https://xtermjs.org/) — the terminal emulator
- [Next.js](https://nextjs.org/) — the framework
- [react-globe.gl](https://github.com/vasturiano/react-globe.gl) — the 3D globe
- NASA Visible Earth / Blue Marble — the Earth texture (public domain)
- [OpenNext](https://opennext.js.org/) — Cloudflare Workers deployment
