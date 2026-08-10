import { C } from "../ansi";
import { APP_REGISTRY } from "../../../registry";
import type { CommandTable } from "../types";

export const appCommands: CommandTable = {
  open: {
    description: "Open an app  —  open <app>",
    run: (args, ctx) => {
      const id = args[0]?.toLowerCase();
      const app = id ? APP_REGISTRY[id] : undefined;
      if (!app) {
        return [
          C.red(`Usage: open <${Object.keys(APP_REGISTRY).join("|")}>`),
        ];
      }
      ctx.openApp(id!);
      return [C.cyan(`Opening ${app.title}...`)];
    },
  },

  github: {
    description: "Open GitHub profile in new tab",
    run: () => {
      if (typeof window !== "undefined") window.open("https://github.com/AnkanSaha", "_blank");
      return [C.cyan("Opening GitHub profile...")];
    },
  },

  linkedin: {
    description: "Open LinkedIn profile in new tab",
    run: () => {
      if (typeof window !== "undefined") window.open("https://linkedin.com/in/theankansaha", "_blank");
      return [C.cyan("Opening LinkedIn profile...")];
    },
  },
};
