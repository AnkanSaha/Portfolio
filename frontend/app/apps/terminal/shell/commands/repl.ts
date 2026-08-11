import type { CommandTable } from "../types";
import { replBanner } from "../repl";

export const replCommands: CommandTable = {
  node: {
    description: "Start a Node.js-style JavaScript REPL",
    run: (_args, ctx) => {
      ctx.enterRepl("node");
      return replBanner("node");
    },
  },
  python: {
    description: "Start a lightweight Python-style REPL",
    run: (_args, ctx) => {
      ctx.enterRepl("python");
      return replBanner("python");
    },
  },
};
