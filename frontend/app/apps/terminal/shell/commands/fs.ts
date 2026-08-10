import { C } from "../ansi";
import { directoryAt, resolveCd } from "../filesystem";
import { resolvePath } from "../../../../data/fileSystem";
import type { CommandTable } from "../types";

export const fsCommands: CommandTable = {
  ls: {
    description: "List files in the current directory",
    run: (args, ctx) => {
      const target = args[0] ? resolveCd(ctx.cwd, args[0]) : ctx.cwd;
      if (target === null) return [C.red(`ls: cannot access '${args[0]}': No such directory`)];
      const dir = directoryAt(target);
      if (!dir) return [C.red(`ls: cannot access '${args[0]}': No such directory`)];
      if (dir.children.length === 0) return [];
      return [
        dir.children
          .map((c) => (c.type === "directory" ? C.bold(C.blue(c.name + "/")) : C.white(c.name)))
          .join("  "),
      ];
    },
  },

  cd: {
    description: "Change directory  —  cd <path>",
    run: (args, ctx) => {
      const next = resolveCd(ctx.cwd, args[0]);
      if (next === null) return [C.red(`cd: ${args[0]}: No such directory`)];
      ctx.setCwd(next);
      return [];
    },
  },

  pwd: {
    description: "Print working directory",
    run: (_args, ctx) => [C.white(`/home/ankan${ctx.cwd.length ? "/" + ctx.cwd.join("/") : ""}`)],
  },

  cat: {
    description: "Print a file's contents  —  cat <file>",
    run: (args, ctx) => {
      if (!args[0]) return [C.red("cat: missing file operand")];
      const node = resolvePath([...ctx.cwd, args[0]]);
      if (!node) return [C.red(`cat: ${args[0]}: No such file`)];
      if (node.type === "directory") return [C.red(`cat: ${args[0]}: Is a directory`)];
      if (node.kind === "pdf") {
        return [C.muted(`cat: ${args[0]}: binary file — open it from Files instead`)];
      }
      return node.content.split("\n").map((l) => C.white(l));
    },
  },

  file: {
    description: "Identify a file's type  —  file <name>",
    run: (args, ctx) => {
      if (!args[0]) return [C.red("file: missing operand")];
      const node = resolvePath([...ctx.cwd, args[0]]);
      if (!node) return [C.red(`file: cannot open '${args[0]}': No such file or directory`)];
      if (node.type === "directory") return [`${args[0]}: ${C.blue("directory")}`];
      return [`${args[0]}: ${C.cyan(node.kind === "pdf" ? "PDF document" : "ASCII text")}`];
    },
  },

  tree: {
    description: "Show the directory tree from here",
    run: (_args, ctx) => {
      const root = directoryAt(ctx.cwd);
      if (!root) return [];
      const lines: string[] = [C.bold(C.blue("."))];
      const walk = (nodes: typeof root.children, prefix: string) => {
        nodes.forEach((node, i) => {
          const last = i === nodes.length - 1;
          const branch = last ? "└── " : "├── ";
          lines.push(
            prefix + branch + (node.type === "directory" ? C.bold(C.blue(node.name)) : C.white(node.name))
          );
          if (node.type === "directory") {
            walk(node.children, prefix + (last ? "    " : "│   "));
          }
        });
      };
      walk(root.children, "");
      return lines;
    },
  },
};
