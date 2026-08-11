import { C } from "../ansi";
import { portfolioData } from "../../../../data/portfolioData";
import type { CommandTable } from "../types";

function uptimeSince(date: string): string {
  const diffDays = Math.floor((Date.now() - new Date(date).getTime()) / 86_400_000);
  const years = Math.floor(diffDays / 365);
  const months = Math.floor((diffDays % 365) / 30);
  return `${years}y ${months}m`;
}

export const systemCommands: CommandTable = {
  neofetch: {
    description: "System info with ASCII art",
    run: () => [
      "",
      C.blue("      ▟███▙"),
      C.blue("    ▟█████████▙"),
      C.cyan("   ████" + C.bold("AS") + "████"),
      C.cyan("    ▜█████████▛"),
      C.blue("      ▜███▛"),
      "",
      `${C.cyan("ankan")}${C.muted("@")}${C.cyan("ankanos")}`,
      C.muted("─────────────────────"),
      `${C.green("OS")}          ${C.white("Ankan OS")}`,
      `${C.green("Host")}        ${C.white("ankan.in")}`,
      `${C.green("Uptime")}      ${C.white(uptimeSince("2024-04-01"))}`,
      `${C.green("Shell")}       ${C.white("zsh 5.9")}`,
      `${C.green("Role")}        ${C.white(portfolioData.title)}`,
      `${C.green("Location")}    ${C.white(portfolioData.location)}`,
      `${C.green("Terminal")}    ${C.white("xterm.js")}`,
      "",
      `         ${C.red("███")}${C.yellow("███")}${C.green("███")}${C.cyan("███")}${C.blue("███")}${C.magenta("███")}`,
      "",
    ],
  },

  uname: {
    description: "Print system information",
    run: () => [C.white("Linux ankanos 6.9.0-ankanos-amd64 x86_64 GNU/Linux")],
  },

  date: {
    description: "Show current date & time",
    run: () => [C.white(new Date().toString())],
  },

  uptime: {
    description: "Show how long the session has been up",
    run: () => [C.white(`up ${uptimeSince("2024-04-01")}, session load average: 0.08, 0.05, 0.01`)],
  },

  echo: {
    description: "Echo text  —  echo <message>",
    run: (args) => [C.white(args.join(" "))],
  },

  history: {
    description: "Show command history",
    run: (_args, ctx) =>
      ctx.history.length ? ctx.history.map((h, i) => C.muted(`  ${i + 1}  `) + C.white(h)) : [C.muted("No history yet.")],
  },

  clear: {
    description: "Clear the terminal screen",
    run: (_args, ctx) => {
      ctx.clearScreen();
      return [];
    },
  },

  man: {
    description: "Show manual for a command  —  man <command>",
    run: (args, ctx) => {
      const entry = ctx.listCommands().find((c) => c.name === args[0]);
      if (!entry) return [C.red(`No manual entry for ${args[0] ?? ""}`)];
      return [C.yellow(entry.name.toUpperCase()), C.white(entry.description)];
    },
  },
};
