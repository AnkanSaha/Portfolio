import { portfolioData } from "./portfolioData";

export interface FSFile {
  type: "file";
  name: string;
  kind: "text" | "pdf";
  content: string;
}

export interface FSDirectory {
  type: "directory";
  name: string;
  children: FSNode[];
}

export type FSNode = FSFile | FSDirectory;

function file(name: string, content: string, kind: FSFile["kind"] = "text"): FSFile {
  return { type: "file", name, kind, content };
}

function dir(name: string, children: FSNode[]): FSDirectory {
  return { type: "directory", name, children };
}

const aboutTxt = [
  `${portfolioData.name} — ${portfolioData.title}`,
  portfolioData.subtitle,
  "",
  portfolioData.summary,
  "",
  `Location: ${portfolioData.location}`,
  `Email:    ${portfolioData.alternateEmail}`,
].join("\n");

const zshrc = [
  '# ~/.zshrc',
  'export PROMPT_SYMBOL="㉿"',
  'export EDITOR="mousepad"',
  "alias ll='ls -la'",
  "alias projects='cd ~/Projects && ls'",
  "# Type 'help' for the full command list.",
].join("\n");

const readme = [
  `# ${portfolioData.name}`,
  "",
  portfolioData.subtitle,
  "",
  "Run `whoami`, `about`, `experience`, `projects`, `skills` or `contact` in the terminal,",
  "or just open the apps from the Whisker menu.",
].join("\n");

const projectsDir = dir(
  "Projects",
  portfolioData.projects.map((p) =>
    dir(p.name.toLowerCase(), [
      file(
        "readme.md",
        [
          `# ${p.name}`,
          p.tagline,
          "",
          p.description,
          "",
          ...p.bullets.map((b) => `- ${b}`),
          "",
          `Tech: ${p.technologies.join(", ")}`,
          `GitHub: ${p.github}`,
          p.npm ? `NPM: ${p.npm}` : "",
        ]
          .filter(Boolean)
          .join("\n")
      ),
    ])
  )
);

export const fileSystemRoot: FSDirectory = dir("ankan", [
  dir("Desktop", []),
  dir("Documents", [
    file("resume.pdf", "https://resume.ankan.in/Resume_of_Ankan_Saha.pdf", "pdf"),
    file("about.txt", aboutTxt),
  ]),
  projectsDir,
  file(".zshrc", zshrc),
  file(".bashrc", '# ~/.bashrc\nsource ~/.zshrc\n'),
  file("README.md", readme),
]);

export function resolvePath(segments: string[]): FSNode | undefined {
  let node: FSNode = fileSystemRoot;
  for (const segment of segments) {
    if (node.type !== "directory") return undefined;
    const match: FSNode | undefined = node.children.find((c) => c.name === segment);
    if (!match) return undefined;
    node = match;
  }
  return node;
}
