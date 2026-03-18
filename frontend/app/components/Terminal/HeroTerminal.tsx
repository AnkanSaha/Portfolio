"use client";
import { useEffect, useRef } from "react";
import "@xterm/xterm/css/xterm.css";
import styles from "./HeroTerminal.module.css";
import { terminalOptions } from "./terminalConfig";

// ─── ANSI helpers ────────────────────────────────────────────
const C = {
  green:   (s: string) => `\x1b[32m${s}\x1b[0m`,
  cyan:    (s: string) => `\x1b[36m${s}\x1b[0m`,
  yellow:  (s: string) => `\x1b[33m${s}\x1b[0m`,
  white:   (s: string) => `\x1b[37m${s}\x1b[0m`,
  muted:   (s: string) => `\x1b[90m${s}\x1b[0m`,
  bold:    (s: string) => `\x1b[1m${s}\x1b[0m`,
  red:     (s: string) => `\x1b[31m${s}\x1b[0m`,
  blue:    (s: string) => `\x1b[34m${s}\x1b[0m`,
  magenta: (s: string) => `\x1b[35m${s}\x1b[0m`,
};

const PROMPT = `${C.green("ankan")}${C.muted("@")}${C.cyan("portfolio")}${C.muted(":")}${C.yellow("~")}${C.muted("$")} `;

// ─── Static data ─────────────────────────────────────────────
const COMMANDS: Record<string, string[]> = {
  help:         ["Show available commands"],
  whoami:       ["Display personal info"],
  about:        ["About Ankan Saha"],
  skills:       ["List all technical skills"],
  experience:   ["Work experience history"],
  projects:     ["Open-source & production projects"],
  education:    ["Education background"],
  contact:      ["Contact information"],
  achievements: ["GitHub & career achievements"],
  neofetch:     ["System info with ASCII art"],
  btop:         ["Resource & skill usage monitor"],
  htop:         ["Interactive process viewer"],
  top:          ["Task manager overview"],
  ls:           ["List available sections"],
  pwd:          ["Print working directory"],
  date:         ["Show current date & time"],
  clear:        ["Clear terminal screen"],
  cls:          ["Alias for clear"],
  echo:         ["Echo text  —  echo <message>"],
  github:       ["Open GitHub profile in new tab"],
  linkedin:     ["Open LinkedIn profile in new tab"],
  navigate:     ["Go to page  —  navigate <about|skills|projects|contact>"],
  exit:         ["Reload the page"],
};

// ─── bar helper ──────────────────────────────────────────────
function bar(pct: number, width = 20, color = C.green): string {
  const filled = Math.round((pct / 100) * width);
  return (
    C.muted("[") +
    color("█".repeat(filled)) +
    C.muted("░".repeat(width - filled)) +
    C.muted("]") +
    " " +
    color(`${pct}%`)
  );
}

function getOutput(cmd: string): string[] {
  const [base, ...args] = cmd.trim().split(/\s+/);

  switch (base.toLowerCase()) {

    case "whoami":
      return [
        C.cyan("┌─────────────────────────────────────────┐"),
        C.cyan("│") + "  " + C.bold(C.white("Ankan Saha")) + C.muted("  — Full Stack Developer") + "  " + C.cyan("│"),
        C.cyan("│") + "  " + C.yellow("📍") + " Kolkata, India" + C.muted("                        ") + C.cyan("│"),
        C.cyan("│") + "  " + C.yellow("📧") + " connect@ankan.in" + C.muted("                      ") + C.cyan("│"),
        C.cyan("│") + "  " + C.yellow("📞") + " +91 7063355213" + C.muted("                       ") + C.cyan("│"),
        C.cyan("└─────────────────────────────────────────┘"),
      ];

    case "about":
      return [
        C.cyan("// About"),
        "",
        C.white("Backend-focused Engineer specializing in"),
        C.white("JavaScript, TypeScript & Node.js."),
        "",
        C.green("▸") + " Reduced infra costs by $3K/month at Hoichoi",
        C.green("▸") + " Maintained systems serving 10M+ users",
        C.green("▸") + " Built AxioDB with 2,000+ NPM downloads",
        C.green("▸") + " NexoralDNS: 8,050+ QPS, 0% packet loss",
        "",
        C.muted("Type 'experience' or 'projects' to learn more."),
      ];

    case "skills":
      return [
        C.cyan("// Technical Skills"),
        "",
        C.yellow("Languages & Frameworks:"),
        C.white("  JavaScript · TypeScript · Node.js · Express.js"),
        C.white("  Fastify · NestJS · Golang"),
        "",
        C.yellow("Frontend Ecosystem:"),
        C.white("  React.js · Next.js · Redux Toolkit · Zustand"),
        C.white("  TailwindCSS · GraphQL"),
        "",
        C.yellow("Databases & Cloud:"),
        C.white("  MongoDB · SQL · Redis · Redis Streams · RabbitMQ"),
        C.white("  Docker · AWS Lambda · Cloudflare Workers"),
        C.white("  Nginx · Git · CI/CD · Linux"),
        "",
        C.yellow("AI & Integration:"),
        C.white("  Gemini API · OpenAI API · Google AI File API"),
        "",
        C.yellow("System Design:"),
        C.white("  Microservices · Modular Monolith"),
        C.white("  Event-driven Architecture · RESTful APIs · WebSockets"),
      ];

    case "experience":
      return [
        C.cyan("// Work Experience"),
        "",
        C.green("01. Full Stack Developer"),
        C.yellow("    Hoichoi Technologies") + C.muted(" — Bengal's Leading OTT Platform"),
        C.muted("    Jul 2025 – Mar 2026 · Kolkata"),
        C.white("    ▸ Migrated platform to Cloudflare Workers (10M+ users)"),
        C.white("    ▸ Reduced infra costs by $3,000/month"),
        C.white("    ▸ Built FFmpeg API Wrapper for video processing"),
        "",
        C.green("02. Software Engineer"),
        C.yellow("    Openweb Solutions"),
        C.muted("    Sep 2024 – Jul 2025 · Kolkata"),
        C.white("    ▸ RTSP pipeline: 40+ concurrent camera feeds"),
        C.white("    ▸ Real-time AI inference on live video streams"),
        C.white("    ▸ Internal tool: automated client onboarding"),
        "",
        C.green("03. Junior Software Developer"),
        C.yellow("    Excellis IT"),
        C.muted("    Apr 2024 – Sep 2024 · Kolkata"),
        C.white("    ▸ Smart Lock IoT system — 200+ live devices"),
        C.white("    ▸ WebSocket stability + exponential backoff"),
      ];

    case "projects":
      return [
        C.cyan("// Projects"),
        "",
        C.green("NexoralDNS") + C.muted("  [Node.js · UDP · Redis · MongoDB]"),
        C.white("  Self-hosted DNS server — 8,050+ QPS, 0.00% packet loss"),
        C.muted("  github.com/nexoral/NexoralDNS"),
        "",
        C.green("AxioDB") + C.muted("  [TypeScript · Node.js · Binary Serialization]"),
        C.white("  Embedded NoSQL DB — 2,000+ NPM downloads"),
        C.muted("  npmjs.com/package/axiodb"),
        "",
        C.green("ContainDB") + C.muted("  [Golang · Docker · CLI]"),
        C.white("  One-command database deployment (.deb installer)"),
        C.muted("  github.com/nexoral/ContainDB"),
        "",
        C.green("xpack") + C.muted("  [Golang · Linux · CLI]"),
        C.white("  Universal Linux package builder (.deb · .rpm · tar.gz)"),
        C.muted("  github.com/nexoral/xpack"),
      ];

    case "education":
      return [
        C.cyan("// Education"),
        "",
        C.yellow("University of Kalyani"),
        C.white("Bachelor of Arts – Art Studies"),
        C.muted("Oct 2021 – Oct 2024 · Kolkata, India"),
        "",
        C.muted("Self-taught engineer — intensive study in system design,"),
        C.muted("distributed architectures, and software engineering."),
      ];

    case "contact":
      return [
        C.cyan("// Contact"),
        "",
        C.green("Email   ") + C.white("connect@ankan.in"),
        C.green("Phone   ") + C.white("+91 7063355213"),
        C.green("GitHub  ") + C.white("github.com/AnkanSaha"),
        C.green("LinkedIn") + C.white("linkedin.com/in/theankansaha"),
        C.green("Twitter ") + C.white("twitter.com/theankansaha"),
        C.green("Location") + C.white("Kolkata, India"),
        "",
        C.muted("Type 'github' or 'linkedin' to open in browser."),
      ];

    case "achievements":
      return [
        C.cyan("// Achievements"),
        "",
        C.green("▸") + " $3K/month Infrastructure Cost Savings — Hoichoi",
        C.green("▸") + " 2,000+ NPM Downloads (AxioDB)",
        C.green("▸") + " 10M+ Users Served",
        C.green("▸") + " 8,050+ DNS QPS (NexoralDNS)",
        C.green("▸") + " GitHub Pro",
        C.green("▸") + " Pull Shark ×4",
        C.green("▸") + " Pair Extraordinaire",
        C.green("▸") + " YOLO Badge · Quickdraw Badge",
      ];

    case "neofetch": {
      const uptime = (() => {
        const d = new Date();
        const born = new Date("2024-04-01");
        const diff = Math.floor((d.getTime() - born.getTime()) / (1000 * 60 * 60 * 24));
        const y = Math.floor(diff / 365);
        const m = Math.floor((diff % 365) / 30);
        return `${y}y ${m}m`;
      })();
      return [
        "",
        C.green("   █████╗ ███╗   ██╗██╗  ██╗ █████╗ ███╗   ██╗"),
        C.green("  ██╔══██╗████╗  ██║██║ ██╔╝██╔══██╗████╗  ██║"),
        C.green("  ███████║██╔██╗ ██║█████╔╝ ███████║██╔██╗ ██║"),
        C.green("  ██╔══██║██║╚██╗██║██╔═██╗ ██╔══██║██║╚██╗██║"),
        C.cyan("  ██║  ██║██║ ╚████║██║  ██╗██║  ██║██║ ╚████║"),
        C.cyan("  ╚═╝  ╚═╝╚═╝  ╚═══╝╚═╝  ╚═╝╚═╝  ╚═╝╚═╝  ╚═══╝"),
        "",
        `         ${C.cyan("ankan")}${C.muted("@")}${C.cyan("portfolio")}`,
        `         ${C.muted("─────────────────────────")}`,
        `         ${C.green("OS")}          ${C.white("AnkanOS 2026 x86_64")}`,
        `         ${C.green("Host")}        ${C.white("ankan.in")}`,
        `         ${C.green("Uptime")}      ${C.white(uptime)}`,
        `         ${C.green("Shell")}       ${C.white("zsh 5.9 + oh-my-zsh")}`,
        `         ${C.green("Role")}        ${C.white("Full Stack Developer")}`,
        `         ${C.green("Location")}    ${C.white("Kolkata, India")}`,
        `         ${C.green("Experience")}  ${C.white("2+ years")}`,
        `         ${C.green("Users")}       ${C.white("10M+ served")}`,
        `         ${C.green("DNS QPS")}     ${C.white("8,050+")}`,
        `         ${C.green("NPM DLs")}     ${C.white("2,000+ (AxioDB)")}`,
        `         ${C.green("Languages")}   ${C.white("JS · TS · Go")}`,
        `         ${C.green("Editor")}      ${C.white("VS Code")}`,
        `         ${C.green("Terminal")}    ${C.white("xterm.js")}`,
        "",
        `         ${C.red("███")}${C.yellow("███")}${C.green("███")}${C.cyan("███")}${C.blue("███")}${C.magenta("███")}`,
        "",
      ];
    }

    case "btop": {
      const now = new Date();
      const time = now.toLocaleTimeString();
      return [
        "",
        C.cyan("╔══════════════════════════════════════════════════╗"),
        C.cyan("║") + C.bold(C.white("  btop++ — Resource Monitor")) + C.muted(`               ${time}  `) + C.cyan("║"),
        C.cyan("╠══════════════════════════════════════════════════╣"),
        C.cyan("║") + C.yellow("  SKILL USAGE                                    ") + C.cyan("║"),
        C.cyan("╠══════════════════════════════════════════════════╣"),
        C.cyan("║") + `  ${C.green("Node.js    ")} ${bar(95)} ` + C.cyan("║"),
        C.cyan("║") + `  ${C.green("TypeScript ")} ${bar(93)} ` + C.cyan("║"),
        C.cyan("║") + `  ${C.green("JavaScript ")} ${bar(95)} ` + C.cyan("║"),
        C.cyan("║") + `  ${C.cyan("Docker     ")} ${bar(92, 20, C.cyan)} ` + C.cyan("║"),
        C.cyan("║") + `  ${C.cyan("MongoDB    ")} ${bar(90, 20, C.cyan)} ` + C.cyan("║"),
        C.cyan("║") + `  ${C.blue("Golang     ")} ${bar(80, 20, C.blue)} ` + C.cyan("║"),
        C.cyan("║") + `  ${C.blue("Redis      ")} ${bar(90, 20, C.blue)} ` + C.cyan("║"),
        C.cyan("╠══════════════════════════════════════════════════╣"),
        C.cyan("║") + C.yellow("  INFRASTRUCTURE                                 ") + C.cyan("║"),
        C.cyan("╠══════════════════════════════════════════════════╣"),
        C.cyan("║") + `  ${C.green("CF Workers ")} ${bar(88)} ` + C.cyan("║"),
        C.cyan("║") + `  ${C.green("CI/CD      ")} ${bar(87)} ` + C.cyan("║"),
        C.cyan("║") + `  ${C.cyan("Nginx      ")} ${bar(85, 20, C.cyan)} ` + C.cyan("║"),
        C.cyan("║") + `  ${C.cyan("Linux      ")} ${bar(86, 20, C.cyan)} ` + C.cyan("║"),
        C.cyan("╚══════════════════════════════════════════════════╝"),
        C.muted("  Press q to quit (type clear to dismiss)"),
        "",
      ];
    }

    case "htop": {
      const procs = [
        { pid: "1001", name: "node",         cpu: "95%", mem: "180MB", status: C.green("S") },
        { pid: "1002", name: "typescript",   cpu: "93%", mem: "120MB", status: C.green("S") },
        { pid: "1003", name: "golang",        cpu: "80%", mem:  "64MB", status: C.green("S") },
        { pid: "1004", name: "docker",        cpu: "92%", mem: "256MB", status: C.green("S") },
        { pid: "1005", name: "redis-server",  cpu: "90%", mem:  "48MB", status: C.green("S") },
        { pid: "1006", name: "mongod",        cpu: "88%", mem: "312MB", status: C.green("S") },
        { pid: "1007", name: "nginx",         cpu: "85%", mem:  "32MB", status: C.green("S") },
        { pid: "1008", name: "cf-worker",     cpu: "88%", mem:  "96MB", status: C.green("S") },
        { pid: "1009", name: "NexoralDNS",    cpu: "99%", mem: "128MB", status: C.cyan("R") },
        { pid: "1010", name: "AxioDB",        cpu: "87%", mem:  "72MB", status: C.green("S") },
      ];
      return [
        "",
        C.cyan(" ┌─────────────────────────────────────────────────┐"),
        C.cyan(" │") + C.bold(C.white("  htop — Ankan Saha Process Viewer")) + C.cyan("               │"),
        C.cyan(" ├──────┬──────────────────┬──────┬────────┬───────┤"),
        C.cyan(" │") + C.yellow(" PID  ") + C.cyan("│") + C.yellow(" NAME             ") + C.cyan("│") + C.yellow(" CPU  ") + C.cyan("│") + C.yellow(" MEM    ") + C.cyan("│") + C.yellow(" STATE ") + C.cyan("│"),
        C.cyan(" ├──────┼──────────────────┼──────┼────────┼───────┤"),
        ...procs.map((p) =>
          C.cyan(" │") +
          C.muted(` ${p.pid} `) + C.cyan("│") +
          C.green(` ${p.name.padEnd(17)}`) + C.cyan("│") +
          C.yellow(` ${p.cpu.padEnd(5)}`) + C.cyan("│") +
          C.white(` ${p.mem.padEnd(7)}`) + C.cyan("│") +
          `  ${p.status}    ` + C.cyan("│")
        ),
        C.cyan(" ├──────┴──────────────────┴──────┴────────┴───────┤"),
        C.cyan(" │") + C.muted(`  Tasks: ${procs.length}  Running: 1  Sleeping: ${procs.length - 1}  Stopped: 0 `) + C.cyan(" │"),
        C.cyan(" └─────────────────────────────────────────────────┘"),
        C.muted("  F1 Help  F3 Search  F5 Tree  F9 Kill  F10 Quit"),
        "",
      ];
    }

    case "top": {
      const uptime2 = (() => {
        const d = new Date();
        const h = d.getHours();
        const m = d.getMinutes();
        return `${h}:${String(m).padStart(2, "0")}`;
      })();
      return [
        "",
        C.white(`top - ${uptime2}  up 2 years, 2 devs,  load average: 8.05, 9.3, 0.00`),
        C.white(`Tasks: 10 total,   1 running,   9 sleeping,   0 stopped`),
        C.white(`%Cpu(s): 93.5 us,  3.2 sy,  0.0 ni,  2.8 id`),
        C.white(`MiB Mem :  16384.0 total,   4096.0 free,   8192.0 used`),
        C.white(`MiB Swap:      0.0 total,      0.0 free,      0.0 used`),
        "",
        C.cyan("  PID USER       PR  NI    VIRT    RES    SHR S  %CPU  %MEM COMMAND"),
        C.green(" 1009 ankan      20   0  128000 128000  12800 R  99.0   0.8 NexoralDNS"),
        C.white(" 1001 ankan      20   0  180000 180000  18000 S  95.0   1.1 node"),
        C.white(" 1002 ankan      20   0  120000 120000  12000 S  93.0   0.7 typescript"),
        C.white(" 1004 ankan      20   0  256000 256000  25600 S  92.0   1.6 docker"),
        C.white(" 1006 ankan      20   0  312000 312000  31200 S  88.0   1.9 mongod"),
        C.white(" 1008 ankan      20   0   96000  96000   9600 S  88.0   0.6 cf-worker"),
        C.white(" 1010 ankan      20   0   72000  72000   7200 S  87.0   0.4 AxioDB"),
        C.white(" 1005 ankan      20   0   48000  48000   4800 S  85.0   0.3 nginx"),
        C.white(" 1003 ankan      20   0   64000  64000   6400 S  80.0   0.4 golang"),
        C.white(" 1007 ankan      20   0   32000  32000   3200 S  80.0   0.2 redis-server"),
        C.muted(""),
        C.muted("  q Quit  k Kill  r Renice  h Help"),
        "",
      ];
    }

    case "ls":
      return [
        C.cyan("sections/"),
        Object.keys(COMMANDS)
          .map((k) => C.green(k.padEnd(14)))
          .reduce<string[]>((rows, item, i) => {
            if (i % 4 === 0) rows.push("  ");
            rows[rows.length - 1] += item + "  ";
            return rows;
          }, [])
          .join("\n")
          .split("\n"),
      ].flat();

    case "pwd":
      return [C.white("/home/ankan/portfolio")];

    case "date":
      return [C.white(new Date().toString())];

    case "echo":
      return [C.white(args.join(" ") || "")];

    case "github":
      if (typeof window !== "undefined")
        window.open("https://github.com/AnkanSaha", "_blank");
      return [C.cyan("Opening GitHub profile...")];

    case "linkedin":
      if (typeof window !== "undefined")
        window.open("https://linkedin.com/in/theankansaha", "_blank");
      return [C.cyan("Opening LinkedIn profile...")];

    case "navigate": {
      const page = args[0]?.toLowerCase();
      const valid = ["about", "skills", "projects", "contact"];
      if (!page || !valid.includes(page)) {
        return [C.red(`Usage: navigate <${valid.join("|")}> `)];
      }
      if (typeof window !== "undefined")
        window.location.href = `/${page}`;
      return [C.cyan(`Navigating to /${page}...`)];
    }

    case "exit":
      if (typeof window !== "undefined") window.location.reload();
      return [C.cyan("Reloading...")];

    case "help":
    case "?":
    default:
      if (base && base !== "help" && base !== "?") {
        return [
          C.red(`Command not found: ${base}`),
          C.muted("Type 'help' to see available commands."),
        ];
      }
      return [
        C.cyan("Available Commands"),
        C.muted("─────────────────────────────────────────"),
        ...Object.entries(COMMANDS).map(
          ([cmd, [desc]]) =>
            `  ${C.green(cmd.padEnd(14))} ${C.muted(desc)}`
        ),
        "",
        C.muted("Use ↑ ↓ arrow keys to navigate history."),
      ];
  }
}

// ─── Component ───────────────────────────────────────────────
export default function HeroTerminal() {
  const containerRef = useRef<HTMLDivElement>(null);
  const termRef = useRef<import("@xterm/xterm").Terminal | null>(null);

  useEffect(() => {
    let cancelled = false;
    let ro: ResizeObserver | null = null;

    async function init() {
      const { Terminal } = await import("@xterm/xterm");
      const { FitAddon } = await import("@xterm/addon-fit");
      const { WebLinksAddon } = await import("@xterm/addon-web-links");

      if (cancelled || !containerRef.current) return;

      const term = new Terminal(terminalOptions);
      const fit = new FitAddon();
      term.loadAddon(fit);
      term.loadAddon(new WebLinksAddon());
      term.open(containerRef.current);
      termRef.current = term;

      requestAnimationFrame(() => {
        if (!cancelled) try { fit.fit(); } catch { /* ignore */ }
      });

      ro = new ResizeObserver(() => { try { fit.fit(); } catch { /* ignore */ } });
      ro.observe(containerRef.current);

      // ── Welcome banner ──
      const banner = [
        C.cyan(" Ankan Saha Portfolio v2.0.26"),
        C.muted(" ─────────────────────────────"),
        ` ${C.green("▸")} Type ${C.yellow("help")} to see all commands`,
        ` ${C.green("▸")} Use ${C.yellow("↑ ↓")} for command history`,
        ` ${C.green("▸")} Type ${C.yellow("about")} to get started`,
        "",
      ];
      for (const line of banner) {
        if (cancelled) return;
        term.writeln(line);
        await new Promise<void>((r) => setTimeout(r, 80));
      }

      // ── Input handling ──
      let inputBuffer = "";
      const history: string[] = [];
      let historyIndex = -1;

      const writePrompt = () => { term.write("\r\n" + PROMPT); };
      writePrompt();

      term.onKey(({ key, domEvent }) => {
        const code = domEvent.keyCode;

        // Enter
        if (code === 13) {
          const cmd = inputBuffer.trim();
          inputBuffer = "";
          historyIndex = -1;
          term.writeln("");

          if (cmd === "clear" || cmd === "cls") {
            term.clear();
            term.write(PROMPT);
            return;
          }

          if (cmd) {
            history.unshift(cmd);
            if (history.length > 50) history.pop();
            const lines = getOutput(cmd);
            for (const line of lines) {
              if (Array.isArray(line)) {
                for (const l of line) term.writeln(l);
              } else {
                term.writeln(line);
              }
            }
          }
          writePrompt();
          return;
        }

        // Backspace
        if (code === 8) {
          if (inputBuffer.length > 0) {
            inputBuffer = inputBuffer.slice(0, -1);
            term.write("\b \b");
          }
          return;
        }

        // Arrow Up
        if (code === 38) {
          if (history.length > 0) {
            historyIndex = Math.min(historyIndex + 1, history.length - 1);
            const prev = history[historyIndex];
            term.write("\r" + PROMPT + prev + " ".repeat(Math.max(0, inputBuffer.length - prev.length)));
            inputBuffer = prev;
          }
          return;
        }

        // Arrow Down
        if (code === 40) {
          if (historyIndex > 0) {
            historyIndex--;
            const prev = history[historyIndex];
            term.write("\r" + PROMPT + prev + " ".repeat(Math.max(0, inputBuffer.length - prev.length)));
            inputBuffer = prev;
          } else {
            historyIndex = -1;
            term.write("\r" + PROMPT + " ".repeat(inputBuffer.length));
            term.write("\r" + PROMPT);
            inputBuffer = "";
          }
          return;
        }

        // Tab — basic autocomplete
        if (code === 9) {
          domEvent.preventDefault();
          const matches = Object.keys(COMMANDS).filter((c) =>
            c.startsWith(inputBuffer.toLowerCase())
          );
          if (matches.length === 1) {
            const completion = matches[0].slice(inputBuffer.length);
            term.write(completion);
            inputBuffer += completion;
          } else if (matches.length > 1) {
            term.writeln("");
            term.writeln(matches.map((m) => C.green(m)).join("  "));
            term.write(PROMPT + inputBuffer);
          }
          return;
        }

        // Ctrl+C
        if (domEvent.ctrlKey && domEvent.key === "c") {
          term.writeln("^C");
          inputBuffer = "";
          historyIndex = -1;
          writePrompt();
          return;
        }

        // Ctrl+L
        if (domEvent.ctrlKey && domEvent.key === "l") {
          term.clear();
          term.write(PROMPT + inputBuffer);
          return;
        }

        // Printable characters only
        if (key.length === 1 && !domEvent.ctrlKey && !domEvent.altKey && !domEvent.metaKey) {
          inputBuffer += key;
          term.write(key);
        }
      });
    }

    init();

    return () => {
      cancelled = true;
      ro?.disconnect();
      termRef.current?.dispose();
      termRef.current = null;
    };
  }, []);

  return (
    <div className={styles.wrapper}>
      <div className={styles.titleBar}>
        <span className={styles.dot} />
        <span className={styles.dot} />
        <span className={styles.dot} />
        <span className={styles.title}>terminal — ankan@portfolio</span>
      </div>
      <div ref={containerRef} className={styles.terminal} />
    </div>
  );
}
