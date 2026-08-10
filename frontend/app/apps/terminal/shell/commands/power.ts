import { C } from "../ansi";
import type { CommandTable } from "../types";

const poweroff: CommandTable[string] = {
  description: "Power off the machine",
  run: (_args, ctx) => {
    ctx.triggerShutdown();
    return [C.yellow("Shutting down…")];
  },
};

const reboot: CommandTable[string] = {
  description: "Restart the machine",
  run: () => {
    if (typeof window !== "undefined") {
      setTimeout(() => window.location.reload(), 600);
    }
    return [C.yellow("Rebooting…")];
  },
};

export const powerCommands: CommandTable = {
  shutdown: poweroff,
  poweroff,
  halt: poweroff,
  reboot,
  exit: reboot,
};
