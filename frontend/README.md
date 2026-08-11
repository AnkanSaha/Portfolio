# Ankan OS — Frontend

The Next.js app behind [ankan.in](https://ankan.in): a portfolio built as a working desktop OS simulation — boot sequence, window manager, taskbar, and a set of real apps — rather than a themed single page.

See the [root README](../README.md) for the full feature tour. This one covers the frontend specifically: scripts, dependencies, structure, and how to extend it.

## Scripts

```bash
npm run dev        # Dev server (Turbopack)
npm run build       # Production build
npm run build:cf     # Build for Cloudflare Workers (OpenNext)
npm run start        # Start production server
npm run lint          # ESLint
npm run login:cf       # Cloudflare login
npm run deploy:cf       # Deploy to Cloudflare Workers
```

## Dependencies

### Core
- **next** 15.3.4 — App Router
- **react** / **react-dom** 19
- **@reduxjs/toolkit** + **react-redux** — window manager, system state, GitHub data cache
- **@xterm/xterm** + FitAddon + WebLinksAddon — the real terminal
- **motion** (Framer Motion) — window/menu/boot-sequence animation
- **react-globe.gl** + **three** — the rotating 3D Earth wallpaper
- **react-icons** — Feather icon set throughout the UI
- **react-rnd** — window drag/resize

### Deployment
- **@opennextjs/cloudflare** + **wrangler** — Cloudflare Workers adapter

### Styling
Plain CSS Modules + CSS custom properties. No Tailwind, no CSS-in-JS. Design tokens (colors, z-index scale, spacing) live in `app/globals.css`.

## Environment Variables

Everything works with zero configuration. Optionally:

| Variable | Purpose |
|---|---|
| `GITHUB_TOKEN` | GitHub personal access token, used server-side (`app/lib/github.ts`) to raise the GitHub API rate limit for the GitHub Profile / Nexoral apps. Without it, those apps still work against the unauthenticated API (60 req/hr/IP), and results are cached both server-side (in-memory, 1hr) and client-side (`localStorage`, 12hr). |

## Project Structure

```
frontend/
├── app/
│   ├── os/                       # The OS shell — not app content
│   │   ├── boot/                 # BootScreen: GRUB menu, log lines, splash
│   │   ├── shutdown/              # ShutdownOverlay: mirrors the boot sequence
│   │   ├── desktop/                # Wallpaper (incl. 3D Earth), desktop icons,
│   │   │                            right-click menu
│   │   ├── window/                  # WindowLayer, WindowTitleBar, drag/resize,
│   │   │                            useOpenApp (the only way apps get opened)
│   │   ├── panel/                    # Taskbar: WhiskerMenu (start menu),
│   │   │                            QuickLaunch, TaskbarButtons, SystemTray
│   │   │                            (Wi-Fi/Sound popovers, battery, clock),
│   │   │                            PowerMenu
│   │   ├── theme/                    # Accent color, icon size presets,
│   │   │                            auto-fullscreen
│   │   ├── gate/                      # MobileGate — this OS simulation is
│   │   │                            desktop-class only
│   │   └── ui/                        # Shared primitives: AppShell, Toolbar,
│   │                                 Switch, Sparkline, BatteryIcon,
│   │                                 OfflineScreen, ScrollArea, ListRow...
│   ├── apps/                     # One folder per app — each exports a
│   │   │                        default component registered in registry.tsx
│   │   ├── terminal/
│   │   │   └── shell/             # The actual shell: runCommand.ts dispatches
│   │   │                        to command tables in commands/*.ts, plus
│   │   │                        repl.ts (node/python REPLs) and
│   │   │                        filesystem.ts (path resolution for cd/ls —
│   │   │                        the filesystem data itself lives in
│   │   │                        data/fileSystem.ts, shared with Files/Editor)
│   │   ├── github/                # Shared GitHubProfileCard, used by both
│   │   │   └── ...               # the GitHub Profile app and Nexoral
│   │   ├── nexoral/
│   │   ├── monitor/               # useSystemStats.ts — real rAF-timed CPU,
│   │   │                        real JS heap, real Resource Timing net stats
│   │   ├── battery/                # useBattery.ts — navigator.getBattery()
│   │   ├── calendar/, blog/, about/, projects/, skills/, experience/,
│   │   └── contact/, files/, editor/, resume/, settings/, calculator/
│   ├── apps/registry.tsx         # THE source of truth for what apps exist:
│   │                             id, title, icon, component, default window
│   │                             size, category, desktop visibility
│   ├── store/
│   │   ├── slices/systemSlice.ts     # boot phase, wifiEnabled, soundEnabled,
│   │   │                            volume
│   │   ├── slices/windowsSlice.ts    # open windows, z-order, geometry
│   │   └── slices/githubSlice.ts     # cached GitHub API responses, keyed by
│   │                                login (used by both github/ and nexoral/)
│   ├── data/portfolioData.ts    # ALL portfolio content — the only file you
│   │                            need to edit to update your own info
│   ├── data/fileSystem.ts        # The simulated filesystem tree, shared by
│   │                            Files, Editor, and the terminal's fs commands
│   ├── hooks/                    # useSetting/useLocalStorage (persisted
│   │                             settings), useGitHubData
│   ├── lib/github.ts             # Server-side GitHub API fetch + in-memory
│   │                             cache, shared by the /api/github route
│   └── api/github/route.ts       # The only API route in the app
├── public/os/
│   ├── wallpaper.svg              # Abstract background (theme-tintable via
│   │                             hue-rotate — the Earth photo deliberately
│   │                             is not, so it's never recolored)
│   ├── earth-texture.jpg           # Real NASA Blue Marble texture (public
│   │                             domain), used by the 3D globe
│   ├── dragon.svg                  # The OS mark, used in boot/whisker/gate
│   └── cursors/                    # Custom cursor SVGs
├── next.config.ts
├── wrangler.toml                 # Cloudflare Workers config
└── package.json
```

## Adding a new app

1. Create `app/apps/<name>/<Name>App.tsx` (+ `.module.css` if it needs styles). Use `AppShell`/`ScrollArea`/`Toolbar` from `app/os/ui` for consistent chrome.
2. Register it in `app/apps/registry.tsx`: add an entry to `APP_REGISTRY` (id, title, icon, component, default size, category, `desktopIcon`) and to `APP_ORDER`.
3. That's it — the taskbar start menu, search, and window system all read from the registry; nothing else needs wiring.

## Deployment

### Cloudflare Workers

```bash
npm run login:cf
npm run build:cf
npm run deploy:cf
```

### Vercel / other platforms

Standard Next.js deployment — `npm run build && npm run start`.

## License

MIT — see [LICENSE](../LICENSE).
