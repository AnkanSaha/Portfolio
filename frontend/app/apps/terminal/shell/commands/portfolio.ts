import { C } from "../ansi";
import { portfolioData } from "../../../../data/portfolioData";
import type { CommandTable } from "../types";

export const portfolioCommands: CommandTable = {
  whoami: {
    description: "Display personal info",
    run: () => [
      C.cyan(`${portfolioData.name}`) + C.muted(`  — ${portfolioData.title}`),
      C.muted(portfolioData.subtitle),
      "",
      `${C.yellow("location")}  ${portfolioData.location}`,
      `${C.yellow("email")}     ${portfolioData.alternateEmail}`,
      `${C.yellow("phone")}     ${portfolioData.phone}`,
    ],
  },

  about: {
    description: "About Ankan Saha",
    run: () => [
      C.cyan("// About"),
      "",
      ...wrap(portfolioData.summary),
      "",
      ...portfolioData.achievements.slice(0, 4).map((a) => `${C.green("▸")} ${a}`),
      "",
      C.muted("Type 'experience' or 'projects' to learn more."),
    ],
  },

  education: {
    description: "Education background",
    run: () => [
      C.cyan("// Education"),
      "",
      C.yellow(portfolioData.education.university),
      C.white(portfolioData.education.degree),
      C.muted(`${portfolioData.education.period} · ${portfolioData.education.location}`),
      "",
      ...wrap(portfolioData.education.description),
    ],
  },

  skills: {
    description: "List all technical skills",
    run: () =>
      portfolioData.skillCategories.flatMap((cat) => [
        C.yellow(`${cat.name}:`),
        C.white(`  ${cat.skills.join(" · ")}`),
        "",
      ]),
  },

  experience: {
    description: "Work experience history",
    run: () =>
      portfolioData.experience.flatMap((exp, i) => [
        C.green(`${String(i + 1).padStart(2, "0")}. ${exp.title}`),
        C.yellow(`    ${exp.company}`) + (exp.companyDesc ? C.muted(` — ${exp.companyDesc}`) : ""),
        C.muted(`    ${exp.period} · ${exp.location}`),
        ...exp.bullets.map((b) => C.white(`    ▸ ${b}`)),
        "",
      ]),
  },

  projects: {
    description: "Open-source & production projects",
    run: () =>
      portfolioData.projects.flatMap((p) => [
        C.green(p.name) + C.muted(`  [${p.technologies.join(" · ")}]`),
        C.white(`  ${p.tagline}`),
        C.muted(`  ${p.github}`),
        "",
      ]),
  },

  contact: {
    description: "Contact information",
    run: () => [
      C.cyan("// Contact"),
      "",
      `${C.green("Email   ")} ${portfolioData.alternateEmail}`,
      `${C.green("Phone   ")} ${portfolioData.phone}`,
      `${C.green("GitHub  ")} ${portfolioData.social.github.replace("https://", "")}`,
      `${C.green("LinkedIn")} ${portfolioData.social.linkedin.replace("https://", "")}`,
      `${C.green("Location")} ${portfolioData.location}`,
    ],
  },

  achievements: {
    description: "GitHub & career achievements",
    run: () => [C.cyan("// Achievements"), "", ...portfolioData.achievements.map((a) => `${C.green("▸")} ${a}`)],
  },
};

function wrap(text: string, width = 68): string[] {
  const words = text.split(" ");
  const lines: string[] = [];
  let current = "";
  for (const word of words) {
    if ((current + " " + word).trim().length > width) {
      lines.push(C.white(current.trim()));
      current = word;
    } else {
      current += " " + word;
    }
  }
  if (current.trim()) lines.push(C.white(current.trim()));
  return lines;
}
