import type { ReplKind } from "./repl";

export interface ShellContext {
  cwd: string[];
  history: string[];
  setCwd: (path: string[]) => void;
  openApp: (appId: string, params?: Record<string, unknown>, titleSuffix?: string) => void;
  triggerShutdown: () => void;
  closeTerminal: () => void;
  enterRepl: (kind: ReplKind) => void;
  clearScreen: () => void;
  listCommands: () => { name: string; description: string }[];
}

export type CommandFn = (args: string[], ctx: ShellContext) => string[];

export interface CommandEntry {
  description: string;
  run: CommandFn;
}

export type CommandTable = Record<string, CommandEntry>;
