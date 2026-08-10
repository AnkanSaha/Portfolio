import { C } from "../ansi";
import { portfolioData } from "../../../../data/portfolioData";
import type { CommandTable } from "../types";

export const funCommands: CommandTable = {
  sudo: {
    description: "Run a command as root",
    run: (args) => [
      C.yellow("[sudo] password for ankan: "),
      C.muted("Nice try. This terminal runs as an unprivileged visitor."),
      args.length ? C.red(`sudo: ${args.join(" ")}: permission denied`) : "",
    ].filter(Boolean),
  },

  hack: {
    description: "Hack the mainframe",
    run: () => [
      C.green("Initiating breach sequence..."),
      C.muted("Bypassing firewall............ ") + C.green("OK"),
      C.muted("Cracking encryption........... ") + C.green("OK"),
      C.muted("Escalating privileges......... ") + C.red("DENIED"),
      "",
      C.red("Access Denied.") + C.muted(" Nice try though — try 'projects' for the real thing."),
    ],
  },

  aptinstallskills: {
    description: "apt install skills",
    run: () => {
      const skills = portfolioData.skillCategories.flatMap((c) => c.skills).slice(0, 6);
      return [
        C.white("Reading package lists... Done"),
        C.white("Building dependency tree... Done"),
        "",
        C.white(`The following packages will be installed: ${skills.length}`),
        C.muted(`  ${skills.join(" ")}`),
        "",
        ...skills.map((s) => `${C.muted("Setting up")} ${C.green(s.toLowerCase().replace(/[^a-z0-9]+/g, "-"))} ${C.muted("...")} ${C.green("done")}`),
        "",
        C.green("All skills installed successfully."),
      ];
    },
  },

  cowsay: {
    description: "A cow says something  —  cowsay <text>",
    run: (args) => {
      const text = args.join(" ") || "Hire me.";
      const top = " " + "_".repeat(text.length + 2);
      const bottom = " " + "-".repeat(text.length + 2);
      return [
        C.white(top),
        C.white(`< ${text} >`),
        C.white(bottom),
        C.white("        \\   ^__^"),
        C.white("         \\  (oo)\\_______"),
        C.white("            (__)\\       )\\/\\"),
        C.white("                ||----w |"),
        C.white("                ||     ||"),
      ];
    },
  },

  matrix: {
    description: "Enter the matrix",
    run: () => {
      const chars = "01ｱｲｳｴｵｶｷｸｹｺABCDEF";
      const rand = (n: number) =>
        Array.from({ length: n }, () => chars[Math.floor(Math.random() * chars.length)]).join(" ");
      return [
        "",
        ...Array.from({ length: 8 }, () => C.green(rand(24))),
        "",
        C.muted("Wake up, ankan..."),
      ];
    },
  },

  calc: {
    description: "Evaluate a math expression  —  calc <expr>",
    run: (args) => {
      const expr = args.join(" ");
      if (!/^[0-9+\-*/().%\s]+$/.test(expr) || !expr.trim()) {
        return [C.red("calc: only numbers and + - * / ( ) % are allowed")];
      }
      try {
        const result = Function(`"use strict"; return (${expr})`)();
        if (typeof result !== "number" || !Number.isFinite(result)) throw new Error("invalid");
        return [C.white(`${expr} = `) + C.green(String(result))];
      } catch {
        return [C.red("calc: could not evaluate expression")];
      }
    },
  },

  weather: {
    description: "Show local weather  —  weather",
    run: () => [
      C.cyan(`Weather for ${portfolioData.location}`),
      C.white("  ☁  28°C, partly cloudy"),
      C.muted("  Humidity 74% · Wind 11 km/h"),
      C.muted("  (yes, this is fake — it's a portfolio, not a weather API)"),
    ],
  },

  banner: {
    description: "Print the ASCII name banner",
    run: () => [
      "",
      C.blue("   █████╗ ███╗   ██╗██╗  ██╗ █████╗ ███╗   ██╗"),
      C.blue("  ██╔══██╗████╗  ██║██║ ██╔╝██╔══██╗████╗  ██║"),
      C.cyan("  ███████║██╔██╗ ██║█████╔╝ ███████║██╔██╗ ██║"),
      C.cyan("  ██╔══██║██║╚██╗██║██╔═██╗ ██╔══██║██║╚██╗██║"),
      C.green("  ██║  ██║██║ ╚████║██║  ██╗██║  ██║██║ ╚████║"),
      C.green("  ╚═╝  ╚═╝╚═╝  ╚═══╝╚═╝  ╚═╝╚═╝  ╚═╝╚═╝  ╚═══╝"),
      "",
    ],
  },
};
