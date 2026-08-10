import { C } from "./ansi";

export function cwdLabel(cwd: string[]): string {
  return cwd.length === 0 ? "~" : `~/${cwd.join("/")}`;
}

export function promptLines(cwd: string[]): { top: string; bottom: string } {
  const path = cwdLabel(cwd);
  const top =
    C.green("┌──(") +
    C.bold(C.blue("ankan")) +
    C.muted("㉿") +
    C.bold(C.blue("ankanos")) +
    C.green(")-[") +
    C.bold(path) +
    C.green("]");
  const bottom = C.green("└─") + C.bold(C.blue("$")) + " ";
  return { top, bottom };
}
