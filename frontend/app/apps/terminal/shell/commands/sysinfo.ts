import { C, bar } from "../ansi";
import type { CommandTable } from "../types";

type ChromeMemory = Performance & { memory?: { usedJSHeapSize: number; jsHeapSizeLimit: number } };

export const sysinfoCommands: CommandTable = {
  ifconfig: {
    description: "Show network interface configuration",
    run: () => {
      const up = typeof navigator !== "undefined" ? navigator.onLine : true;
      return [
        C.green("eth0") +
          C.muted(": ") +
          C.white(`flags=4163<${up ? "UP,BROADCAST,RUNNING,MULTICAST" : "BROADCAST,MULTICAST"}>`),
        C.muted("      inet ") + C.white("10.10.14.42") + C.muted("  netmask 255.255.255.0"),
        C.muted("      ether ") + C.white("02:42:ac:11:00:02  txqueuelen 1000"),
        "",
        C.green("lo") + C.muted("  : ") + C.white("flags=73<UP,LOOPBACK,RUNNING>"),
        C.muted("      inet ") + C.white("127.0.0.1") + C.muted("  netmask 255.0.0.0"),
        "",
        C.muted(`(reflects this browser's real navigator.onLine state: ${up ? "online" : "offline"})`),
      ];
    },
  },

  ip: {
    description: "Show IP routing / addresses  —  ip a",
    run: (args) => {
      if (args[0] !== "a" && args[0] !== "addr") {
        return [C.muted("Usage: ip a")];
      }
      const up = typeof navigator !== "undefined" ? navigator.onLine : true;
      return [
        C.white("1: ") + C.green("lo") + C.muted(": <LOOPBACK,UP> mtu 65536"),
        C.muted("    inet ") + C.white("127.0.0.1/8 scope host lo"),
        C.white("2: ") + C.green("eth0") + C.muted(`: <BROADCAST,MULTICAST${up ? ",UP" : ""}> mtu 1500`),
        C.muted("    inet ") + C.white("10.10.14.42/24 scope global eth0"),
      ];
    },
  },

  ps: {
    description: "Report running processes",
    run: () => [
      C.cyan("  PID TTY          TIME CMD"),
      C.white("    1 pts/0    00:00:01 zsh"),
      C.white("  842 pts/0    00:00:12 node"),
      C.white(" 1009 pts/0    00:04:23 nexoraldns"),
      C.white(" 1201 pts/0    00:00:00 ps"),
    ],
  },

  free: {
    description: "Display memory usage",
    run: () => {
      const memory = (performance as ChromeMemory).memory;
      if (memory) {
        const usedMB = Math.round(memory.usedJSHeapSize / 1048576);
        const totalMB = Math.round(memory.jsHeapSizeLimit / 1048576);
        const pct = Math.min(100, Math.round((usedMB / totalMB) * 100));
        return [
          C.cyan("              total        used        free"),
          C.white(
            `Mem:      ${String(totalMB).padStart(8)}    ${String(usedMB).padStart(8)}    ${String(
              totalMB - usedMB
            ).padStart(8)}  `
          ) + bar(pct),
          C.muted("(this tab's real JS heap usage — not full system memory)"),
        ];
      }
      return [
        C.cyan("              total        used        free"),
        C.white(`Mem:          16384        8192        8192  `) + bar(50),
        C.muted("(performance.memory isn't exposed in this browser — illustrative values)"),
      ];
    },
  },

  df: {
    description: "Report disk space usage",
    run: () => [
      C.cyan("Filesystem      Size  Used Avail Use%"),
      C.white("/dev/sda1        64G   28G   33G  ") + bar(44, 10),
      C.white("/dev/sda2       128G   19G  103G  ") + bar(15, 10),
    ],
  },

  which: {
    description: "Locate a command  —  which <command>",
    run: (args, ctx) => {
      const name = args[0]?.toLowerCase();
      if (!name) return [C.red("which: missing operand")];
      const found = ctx.listCommands().find((c) => c.name === name);
      return found ? [C.white(`/usr/bin/${name}`)] : [C.red(`which: no ${name} in PATH`)];
    },
  },
};
