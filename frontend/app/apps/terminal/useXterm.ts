"use client";
import { useEffect, useRef, type RefObject } from "react";
import "@xterm/xterm/css/xterm.css";
import { terminalOptions } from "./terminalTheme";
import { runCommand, listCommands, completableCommandNames } from "./shell/runCommand";
import { promptLines } from "./shell/prompt";
import { C } from "./shell/ansi";
import { useAppDispatch } from "../../store/hooks";
import { setPhase } from "../../store/slices/systemSlice";
import { useOpenApp } from "../../os/window/useOpenApp";
import type { ShellContext } from "./shell/types";

const BANNER = [
  C.cyan(" Ankan Saha — Kali Linux Portfolio Edition"),
  C.muted(" ────────────────────────────────────────"),
  ` ${C.green("▸")} Type ${C.yellow("help")} to see all commands`,
  ` ${C.green("▸")} Type ${C.yellow("about")} to get started`,
  ` ${C.green("▸")} Type ${C.yellow("open <app>")} to launch a window`,
  "",
];

export function useXterm(containerRef: RefObject<HTMLDivElement | null>, options?: { fontSize?: number }) {
  const dispatch = useAppDispatch();
  const openApp = useOpenApp();
  const openAppRef = useRef(openApp);
  openAppRef.current = openApp;
  const fontSize = options?.fontSize;

  useEffect(() => {
    let cancelled = false;
    let ro: ResizeObserver | null = null;
    let term: import("@xterm/xterm").Terminal | null = null;

    async function init() {
      const { Terminal } = await import("@xterm/xterm");
      const { FitAddon } = await import("@xterm/addon-fit");
      const { WebLinksAddon } = await import("@xterm/addon-web-links");
      if (cancelled || !containerRef.current) return;

      term = new Terminal({
        ...terminalOptions,
        fontSize: fontSize ?? terminalOptions.fontSize,
      });
      const fit = new FitAddon();
      term.loadAddon(fit);
      term.loadAddon(new WebLinksAddon());
      term.open(containerRef.current);

      requestAnimationFrame(() => {
        if (!cancelled) try { fit.fit(); } catch { /* ignore */ }
      });
      ro = new ResizeObserver(() => { try { fit.fit(); } catch { /* ignore */ } });
      ro.observe(containerRef.current);

      let cwd: string[] = [];
      const history: string[] = [];

      function writePrompt(leadingBlank: boolean) {
        const { top, bottom } = promptLines(cwd);
        if (leadingBlank) term!.writeln("");
        term!.writeln(top);
        term!.write(bottom);
      }

      function buildCtx(): ShellContext {
        return {
          cwd,
          history,
          setCwd: (next) => { cwd = next; },
          openApp: (id, params, title) => openAppRef.current(id, params, title),
          triggerShutdown: () => dispatch(setPhase("shuttingDown")),
          clearScreen: () => term!.clear(),
          listCommands,
        };
      }

      for (const line of BANNER) {
        if (cancelled) return;
        term.writeln(line);
        await new Promise<void>((r) => setTimeout(r, 60));
      }
      writePrompt(false);

      let inputBuffer = "";
      let historyIndex = -1;

      term.onKey(({ key, domEvent }) => {
        const code = domEvent.keyCode;

        if (code === 13) {
          const cmd = inputBuffer.trim();
          inputBuffer = "";
          historyIndex = -1;
          term!.writeln("");

          if (cmd) {
            history.unshift(cmd);
            if (history.length > 50) history.pop();
            const lines = runCommand(cmd, buildCtx());
            for (const line of lines) term!.writeln(line);
          }
          writePrompt(true);
          return;
        }

        if (code === 8) {
          if (inputBuffer.length > 0) {
            inputBuffer = inputBuffer.slice(0, -1);
            term!.write("\b \b");
          }
          return;
        }

        if (code === 38) {
          if (history.length > 0) {
            historyIndex = Math.min(historyIndex + 1, history.length - 1);
            const prev = history[historyIndex];
            const { bottom } = promptLines(cwd);
            term!.write("\r" + bottom + prev + " ".repeat(Math.max(0, inputBuffer.length - prev.length)));
            inputBuffer = prev;
          }
          return;
        }

        if (code === 40) {
          const { bottom } = promptLines(cwd);
          if (historyIndex > 0) {
            historyIndex--;
            const prev = history[historyIndex];
            term!.write("\r" + bottom + prev + " ".repeat(Math.max(0, inputBuffer.length - prev.length)));
            inputBuffer = prev;
          } else {
            historyIndex = -1;
            term!.write("\r" + bottom + " ".repeat(inputBuffer.length));
            term!.write("\r" + bottom);
            inputBuffer = "";
          }
          return;
        }

        if (code === 9) {
          domEvent.preventDefault();
          const matches = completableCommandNames().filter((c) => c.startsWith(inputBuffer.toLowerCase()));
          if (matches.length === 1) {
            const completion = matches[0].slice(inputBuffer.length);
            term!.write(completion);
            inputBuffer += completion;
          } else if (matches.length > 1) {
            term!.writeln("");
            term!.writeln(matches.map((m) => C.green(m)).join("  "));
            const { bottom } = promptLines(cwd);
            term!.write(bottom + inputBuffer);
          }
          return;
        }

        if (domEvent.ctrlKey && domEvent.key === "c") {
          term!.writeln("^C");
          inputBuffer = "";
          historyIndex = -1;
          writePrompt(false);
          return;
        }

        if (domEvent.ctrlKey && domEvent.key === "l") {
          term!.clear();
          writePrompt(false);
          term!.write(inputBuffer);
          return;
        }

        if (key.length === 1 && !domEvent.ctrlKey && !domEvent.altKey && !domEvent.metaKey) {
          inputBuffer += key;
          term!.write(key);
        }
      });
    }

    init();

    return () => {
      cancelled = true;
      ro?.disconnect();
      term?.dispose();
    };
  }, [containerRef, dispatch, fontSize]);
}
