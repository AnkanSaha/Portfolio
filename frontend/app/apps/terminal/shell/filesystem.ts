import { resolvePath, fileSystemRoot, type FSDirectory } from "../../../data/fileSystem";

export function directoryAt(path: string[]): FSDirectory | null {
  if (path.length === 0) return fileSystemRoot;
  const node = resolvePath(path);
  return node && node.type === "directory" ? node : null;
}

export function resolveCd(cwd: string[], target: string | undefined): string[] | null {
  if (!target || target === "~") return [];

  let next = target.startsWith("~") ? [] : [...cwd];
  const rest = target.startsWith("~") ? target.slice(1) : target;

  for (const part of rest.split("/").filter(Boolean)) {
    if (part === ".") continue;
    if (part === "..") {
      next.pop();
      continue;
    }
    const candidate = [...next, part];
    if (!directoryAt(candidate)) return null;
    next = candidate;
  }
  return next;
}
