const code = (n: number) => (s: string) => `\x1b[${n}m${s}\x1b[0m`;

export const C = {
  green: code(32),
  red: code(31),
  yellow: code(33),
  blue: code(34),
  magenta: code(35),
  cyan: code(36),
  white: code(37),
  muted: code(90),
  bold: (s: string) => `\x1b[1m${s}\x1b[0m`,
};

export function bar(pct: number, width = 20, color: (s: string) => string = C.green): string {
  const filled = Math.round((pct / 100) * width);
  return (
    C.muted("[") +
    color("█".repeat(filled)) +
    C.muted("░".repeat(width - filled)) +
    C.muted("]") +
    " " +
    color(`${pct}%`)
  );
}
