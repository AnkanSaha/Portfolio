import { C } from "./ansi";
import { fsCommands } from "./commands/fs";
import { portfolioCommands } from "./commands/portfolio";
import { systemCommands } from "./commands/system";
import { powerCommands } from "./commands/power";
import { funCommands } from "./commands/fun";
import { appCommands } from "./commands/apps";
import { monitorCommands } from "./commands/monitor";
import { sysinfoCommands } from "./commands/sysinfo";
import type { CommandTable, ShellContext } from "./types";

const ALL_COMMANDS: CommandTable = {
  ...fsCommands,
  ...portfolioCommands,
  ...systemCommands,
  ...powerCommands,
  ...funCommands,
  ...appCommands,
  ...monitorCommands,
  ...sysinfoCommands,
};

const MULTIWORD_ALIASES: Record<string, string> = {
  "init 0": "poweroff",
  "apt install skills": "aptinstallskills",
};

const DISPLAY_LIST: { name: string; description: string }[] = [
  ...Object.entries(fsCommands).map(([name, e]) => ({ name, description: e.description })),
  ...Object.entries(portfolioCommands).map(([name, e]) => ({ name, description: e.description })),
  ...Object.entries(systemCommands).map(([name, e]) => ({ name, description: e.description })),
  { name: "shutdown", description: powerCommands.shutdown.description },
  { name: "reboot", description: powerCommands.reboot.description },
  ...Object.entries(appCommands).map(([name, e]) => ({ name, description: e.description })),
  ...Object.entries(monitorCommands).map(([name, e]) => ({ name, description: e.description })),
  ...Object.entries(sysinfoCommands).map(([name, e]) => ({ name, description: e.description })),
  { name: "sudo", description: funCommands.sudo.description },
  { name: "apt install skills", description: funCommands.aptinstallskills.description },
  { name: "hack", description: funCommands.hack.description },
  { name: "cowsay", description: funCommands.cowsay.description },
  { name: "matrix", description: funCommands.matrix.description },
  { name: "calc", description: funCommands.calc.description },
  { name: "weather", description: funCommands.weather.description },
  { name: "banner", description: funCommands.banner.description },
  { name: "help", description: "Show this help message" },
];

export function listCommands() {
  return DISPLAY_LIST;
}

export function completableCommandNames(): string[] {
  return DISPLAY_LIST.map((c) => c.name).filter((n) => !n.includes(" "));
}

function helpOutput(): string[] {
  return [
    C.cyan("Available Commands"),
    C.muted("─────────────────────────────────────────"),
    ...DISPLAY_LIST.map((c) => `  ${C.green(c.name.padEnd(20))} ${C.muted(c.description)}`),
    "",
    C.muted("Use ↑ ↓ arrow keys for history, Tab to autocomplete."),
  ];
}

export function runCommand(raw: string, ctx: ShellContext): string[] {
  const trimmed = raw.trim();
  if (!trimmed) return [];

  const aliasTarget = MULTIWORD_ALIASES[trimmed.toLowerCase()];
  if (aliasTarget) return ALL_COMMANDS[aliasTarget].run([], ctx);

  const [base, ...args] = trimmed.split(/\s+/);
  const key = base.toLowerCase();

  if (key === "help" || key === "?") return helpOutput();
  if (key === "cls") return ALL_COMMANDS.clear.run([], ctx);

  const entry = ALL_COMMANDS[key];
  if (!entry) {
    return [C.red(`Command not found: ${base}`), C.muted("Type 'help' to see available commands.")];
  }
  return entry.run(args, ctx);
}
