import { C } from "./ansi";

export type ReplKind = "node" | "python";

export function replPrompt(kind: ReplKind): string {
  return kind === "node" ? C.green("> ") : C.green(">>> ");
}

export function isReplExit(cmd: string): boolean {
  return cmd === ".exit" || cmd === "exit" || cmd === "exit()" || cmd === "quit()";
}

export function replBanner(kind: ReplKind): string[] {
  return kind === "node"
    ? [C.muted('Node.js REPL (real JS, runs in this browser tab). Type ".exit" to leave.')]
    : [C.muted('Python-lite REPL (arithmetic + print() only, not a real interpreter). Type "exit()" to leave.')];
}

function formatJsValue(value: unknown): string {
  if (value === undefined) return "undefined";
  if (typeof value === "string") return `'${value}'`;
  if (typeof value === "function") return value.toString();
  try {
    return JSON.stringify(value) ?? String(value);
  } catch {
    return String(value);
  }
}

export function runNodeLine(line: string): string[] {
  try {
    // Real eval, on purpose: the browser already is a JS runtime, and this
    // only ever runs in the visitor's own tab against their own input.
    const result = (0, eval)(line);
    return [C.white(formatJsValue(result))];
  } catch (err) {
    return [C.red(err instanceof Error ? `Uncaught ${err.name}: ${err.message}` : String(err))];
  }
}

export function createPyScope(): Record<string, unknown> {
  return {};
}

const ASSIGN_RE = /^([A-Za-z_]\w*)\s*=(?!=)\s*(.+)$/;
const PRINT_RE = /^print\((.*)\)$/;

function pyToJs(expr: string): string {
  return expr.replace(/\bTrue\b/g, "true").replace(/\bFalse\b/g, "false").replace(/\bNone\b/g, "null");
}

function evalPyExpr(expr: string, scope: Record<string, unknown>): unknown {
  const names = Object.keys(scope);
  const values = Object.values(scope);
  return Function(...names, `"use strict"; return (${pyToJs(expr)});`)(...values);
}

function pyFormat(value: unknown): string {
  if (value === null || value === undefined) return "None";
  if (typeof value === "boolean") return value ? "True" : "False";
  if (typeof value === "string") return value;
  return String(value);
}

function splitTopLevelArgs(s: string): string[] {
  const parts: string[] = [];
  let depth = 0;
  let cur = "";
  let inStr: string | null = null;
  for (const ch of s) {
    if (inStr) {
      cur += ch;
      if (ch === inStr) inStr = null;
      continue;
    }
    if (ch === "'" || ch === '"') {
      inStr = ch;
      cur += ch;
      continue;
    }
    if (ch === "(" || ch === "[") depth++;
    if (ch === ")" || ch === "]") depth--;
    if (ch === "," && depth === 0) {
      parts.push(cur);
      cur = "";
      continue;
    }
    cur += ch;
  }
  if (cur.trim()) parts.push(cur);
  return parts.map((p) => p.trim()).filter(Boolean);
}

export function runPythonLine(line: string, scope: Record<string, unknown>): string[] {
  try {
    const assign = line.match(ASSIGN_RE);
    if (assign) {
      const [, name, rhs] = assign;
      scope[name] = evalPyExpr(rhs, scope);
      return [];
    }
    const print = line.match(PRINT_RE);
    if (print) {
      const args = splitTopLevelArgs(print[1]).map((a) => pyFormat(evalPyExpr(a, scope)));
      return [C.white(args.join(" "))];
    }
    const value = evalPyExpr(line, scope);
    return value === undefined ? [] : [C.white(pyFormat(value))];
  } catch (err) {
    return [C.red(`Error: ${err instanceof Error ? err.message : String(err)}`)];
  }
}
