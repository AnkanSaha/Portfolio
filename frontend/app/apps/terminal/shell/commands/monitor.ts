import { C, bar } from "../ansi";
import { portfolioData } from "../../../../data/portfolioData";
import type { CommandTable } from "../types";

function skillBars(): { name: string; pct: number }[] {
  const skills = portfolioData.skillCategories.flatMap((c) => c.skills);
  return skills.slice(0, 8).map((name, i) => ({ name, pct: Math.max(72, 96 - i * 3) }));
}

export const monitorCommands: CommandTable = {
  btop: {
    description: "Resource & skill usage monitor",
    run: () => {
      const rows = skillBars();
      const time = new Date().toLocaleTimeString();
      return [
        "",
        C.cyan("╔══════════════════════════════════════════════════╗"),
        C.cyan("║") + C.bold(C.white("  btop++ — Skill Usage Monitor")) + C.muted(`            ${time}  `) + C.cyan("║"),
        C.cyan("╠══════════════════════════════════════════════════╣"),
        ...rows.map(
          (r) =>
            C.cyan("║") +
            `  ${C.green(r.name.padEnd(16).slice(0, 16))} ${bar(r.pct)} ` +
            C.cyan("║")
        ),
        C.cyan("╚══════════════════════════════════════════════════╝"),
        C.muted("  Type 'clear' to dismiss"),
        "",
      ];
    },
  },

  htop: {
    description: "Interactive process viewer",
    run: () => {
      const rows = skillBars().map((r, i) => ({
        pid: String(1000 + i),
        name: r.name.toLowerCase().replace(/[^a-z0-9]+/g, "-"),
        cpu: `${r.pct}%`,
        mem: `${64 + i * 24}MB`,
      }));
      return [
        "",
        C.cyan(" ┌──────┬──────────────────┬──────┬────────┬───────┐"),
        C.cyan(" │") + C.yellow(" PID  ") + C.cyan("│") + C.yellow(" NAME             ") + C.cyan("│") + C.yellow(" CPU  ") + C.cyan("│") + C.yellow(" MEM    ") + C.cyan("│") + C.yellow(" STATE ") + C.cyan("│"),
        C.cyan(" ├──────┼──────────────────┼──────┼────────┼───────┤"),
        ...rows.map(
          (p) =>
            C.cyan(" │") +
            C.muted(` ${p.pid} `) +
            C.cyan("│") +
            C.green(` ${p.name.padEnd(17).slice(0, 17)}`) +
            C.cyan("│") +
            C.yellow(` ${p.cpu.padEnd(5)}`) +
            C.cyan("│") +
            C.white(` ${p.mem.padEnd(7)}`) +
            C.cyan("│") +
            `  ${C.green("S")}    ` +
            C.cyan("│")
        ),
        C.cyan(" └──────┴──────────────────┴──────┴────────┴───────┘"),
        C.muted("  F10 Quit  (type clear to dismiss)"),
        "",
      ];
    },
  },

  top: {
    description: "Task manager overview",
    run: () => {
      const now = new Date();
      const rows = skillBars();
      return [
        "",
        C.white(`top - ${now.getHours()}:${String(now.getMinutes()).padStart(2, "0")}  load average: ${rows[0].pct / 10}, ${rows[1].pct / 10}, ${rows[2].pct / 10}`),
        C.white(`Tasks: ${rows.length} total, 1 running, ${rows.length - 1} sleeping`),
        "",
        C.cyan("  PID USER    PR  %CPU  %MEM COMMAND"),
        ...rows.map(
          (r, i) =>
            C.white(` ${String(1000 + i).padStart(4)} ankan   20  ${String(r.pct).padStart(4)}  ${String(Math.round(r.pct / 12)).padStart(4)} `) +
            C.green(r.name.toLowerCase().replace(/[^a-z0-9]+/g, "-"))
        ),
        "",
      ];
    },
  },
};
