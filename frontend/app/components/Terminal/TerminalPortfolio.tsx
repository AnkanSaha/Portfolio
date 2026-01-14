"use client";

import React, { useEffect, useRef, useState } from 'react';
import { Terminal } from '@xterm/xterm';
import { FitAddon } from '@xterm/addon-fit';
import { WebLinksAddon } from '@xterm/addon-web-links';
import { motion } from 'framer-motion';
import BootSequence from './BootSequence';
import { portfolioData } from '@/app/data/portfolioData';
import '@xterm/xterm/css/xterm.css';

const TerminalPortfolio: React.FC = () => {
  const terminalRef = useRef<HTMLDivElement>(null);
  const terminal = useRef<Terminal | null>(null);
  const fitAddon = useRef<FitAddon | null>(null);
  const [isReady, setIsReady] = useState(false);
  const [showTerminal, setShowTerminal] = useState(false);
  const [isMobile, setIsMobile] = useState(false);
  const [isBooting, setIsBooting] = useState(true);

  // Command history
  const commandHistory = useRef<string[]>([]);
  const historyIndex = useRef<number>(-1);
  const currentLine = useRef<string>('');

  const commands: { [key: string]: (args?: string) => void } = {
    // Portfolio commands
    help: () => {
      printHelp();
    },
    about: () => {
      printAbout();
    },
    contact: () => {
      printContact();
    },
    social: () => {
      printSocial();
    },
    skills: () => {
      printSkills();
    },
    experience: () => {
      printExperience();
    },
    projects: () => {
      printProjects();
    },
    education: () => {
      printEducation();
    },
    achievements: () => {
      printAchievements();
    },
    clear: () => {
      terminal.current?.reset();
    },
    github: () => {
      writeLine('\r\n\x1b[1;36mOpening GitHub profile...\x1b[0m');
      window.open(portfolioData.social.github, '_blank');
    },
    linkedin: () => {
      writeLine('\r\n\x1b[1;36mOpening LinkedIn profile...\x1b[0m');
      window.open(portfolioData.social.linkedin, '_blank');
    },
    // Linux-like commands
    whoami: () => {
      writeLine(`\r\n\x1b[1;37m${portfolioData.name}\x1b[0m`);
    },
    pwd: () => {
      writeLine('\r\n\x1b[1;37m/home/ankan/portfolio\x1b[0m');
    },
    ls: () => {
      writeLine('\r\n\x1b[1;34mabout/\x1b[0m  \x1b[1;34mprojects/\x1b[0m  \x1b[1;34mskills/\x1b[0m  \x1b[1;34mexperience/\x1b[0m  \x1b[1;32mREADME.md\x1b[0m');
    },
    'll': () => {
      writeLine('\r\n\x1b[1;37mtotal 5\x1b[0m');
      writeLine('\x1b[1;34mdrwxr-xr-x\x1b[0m  2 ankan ankan 4096 Dec 26 12:00 \x1b[1;34mabout/\x1b[0m');
      writeLine('\x1b[1;34mdrwxr-xr-x\x1b[0m  2 ankan ankan 4096 Dec 26 12:00 \x1b[1;34mprojects/\x1b[0m');
      writeLine('\x1b[1;34mdrwxr-xr-x\x1b[0m  2 ankan ankan 4096 Dec 26 12:00 \x1b[1;34mskills/\x1b[0m');
      writeLine('\x1b[1;34mdrwxr-xr-x\x1b[0m  2 ankan ankan 4096 Dec 26 12:00 \x1b[1;34mexperience/\x1b[0m');
      writeLine('\x1b[1;32m-rw-r--r--\x1b[0m  1 ankan ankan 1024 Dec 26 12:00 \x1b[1;32mREADME.md\x1b[0m');
    },
    'ls -la': () => {
      commands['ll']();
    },
    'ls -l': () => {
      commands['ll']();
    },
    'ls -a': () => {
      writeLine('\r\n\x1b[1;37m.\x1b[0m  \x1b[1;37m..\x1b[0m  \x1b[1;34m.config/\x1b[0m  \x1b[1;34mabout/\x1b[0m  \x1b[1;34mprojects/\x1b[0m  \x1b[1;34mskills/\x1b[0m  \x1b[1;34mexperience/\x1b[0m  \x1b[1;32mREADME.md\x1b[0m');
    },
    date: () => {
      writeLine(`\r\n\x1b[1;37m${new Date().toString()}\x1b[0m`);
    },
    uptime: () => {
      writeLine('\r\n\x1b[1;37m up 365 days, 24:00, 1 user, load average: 0.00, 0.01, 0.05\x1b[0m');
    },
    hostname: () => {
      writeLine('\r\n\x1b[1;37mportfolio.ankan.in\x1b[0m');
    },
    uname: () => {
      writeLine('\r\n\x1b[1;37mLinux\x1b[0m');
    },
    'uname -a': () => {
      writeLine('\r\n\x1b[1;37mLinux portfolio 6.1.0-ankan #1 SMP PREEMPT_DYNAMIC x86_64 GNU/Linux\x1b[0m');
    },
    neofetch: () => {
      writeLine('\r\n\x1b[1;36m        .--.       \x1b[0m\x1b[1;37mankan\x1b[0m@\x1b[1;37mportfolio\x1b[0m');
      writeLine('\x1b[1;36m       |o_o |      \x1b[0m\x1b[1;37m-----------------\x1b[0m');
      writeLine('\x1b[1;36m       |:_/ |      \x1b[0m\x1b[1;33mOS:\x1b[0m AnkanOS 1.0');
      writeLine('\x1b[1;36m      //   \\ \\     \x1b[0m\x1b[1;33mHost:\x1b[0m Portfolio Terminal');
      writeLine('\x1b[1;36m     (|     | )    \x1b[0m\x1b[1;33mKernel:\x1b[0m 6.1.0-ankan');
      writeLine('\x1b[1;36m    /\'\\_   _/`\\    \x1b[0m\x1b[1;33mUptime:\x1b[0m 365 days');
      writeLine('\x1b[1;36m    \\___)=(___/    \x1b[0m\x1b[1;33mShell:\x1b[0m portfolio-sh');
      writeLine('                   \x1b[1;33mTerminal:\x1b[0m cloudflare.js');
      writeLine('                   \x1b[1;33mCPU:\x1b[0m Full Stack Developer');
      writeLine('                   \x1b[1;33mMemory:\x1b[0m 10M+ users served');
    },
    history: () => {
      writeLine('');
      commandHistory.current.forEach((cmd, index) => {
        writeLine(`  \x1b[1;33m${index + 1}\x1b[0m  ${cmd}`);
      });
    },
    cat: (args) => {
      if (!args || args === 'README.md') {
        writeLine('\r\n\x1b[1;36m# Ankan Saha - Portfolio\x1b[0m');
        writeLine('');
        writeLine('Full Stack Developer specializing in backend engineering,');
        writeLine('system design, and infrastructure optimization.');
        writeLine('');
        writeLine('\x1b[1;33m## Quick Links\x1b[0m');
        writeLine('- Type \x1b[1;32mabout\x1b[0m to learn more about me');
        writeLine('- Type \x1b[1;32mprojects\x1b[0m to see my work');
        writeLine('- Type \x1b[1;32mcontact\x1b[0m to get in touch');
      } else {
        writeLine(`\r\n\x1b[1;31mcat: ${args}: No such file or directory\x1b[0m`);
      }
    },
    cd: (args) => {
      if (!args || args === '~' || args === '/home/ankan') {
        writeLine('');
      } else if (['about', 'projects', 'skills', 'experience'].includes(args?.replace('/', '') || '')) {
        commands[args.replace('/', '')]?.();
      } else {
        writeLine(`\r\n\x1b[1;31mcd: ${args}: No such file or directory\x1b[0m`);
      }
    },
    echo: (args) => {
      writeLine(`\r\n${args || ''}`);
    },
    man: (args) => {
      if (args && commands[args]) {
        writeLine(`\r\n\x1b[1;37mMANUAL: ${args}\x1b[0m`);
        writeLine(`\x1b[90mThis command displays ${args} information.\x1b[0m`);
        writeLine(`\x1b[90mUsage: ${args}\x1b[0m`);
      } else {
        writeLine(`\r\n\x1b[1;31mNo manual entry for ${args || 'unknown'}\x1b[0m`);
      }
    },
    exit: () => {
      writeLine('\r\n\x1b[1;33mThanks for visiting! Goodbye! 👋\x1b[0m');
      writeLine('\x1b[90m(Refresh the page to start a new session)\x1b[0m');
    },
    sudo: () => {
      writeLine('\r\n\x1b[1;31m[sudo] password for ankan: \x1b[0m');
      writeLine('\x1b[1;31mSorry, user ankan is not allowed to execute this command.\x1b[0m');
      writeLine('\x1b[90mNice try though! 😄\x1b[0m');
    },
    rm: () => {
      writeLine('\r\n\x1b[1;31mrm: cannot remove: Operation not permitted\x1b[0m');
      writeLine('\x1b[90mThis portfolio is protected! 🛡️\x1b[0m');
    },
    'rm -rf': () => {
      commands['rm']();
    },
    vim: () => {
      writeLine('\r\n\x1b[1;33mVim is great, but this terminal is read-only!\x1b[0m');
      writeLine('\x1b[90mTip: Use \x1b[1;32mcat README.md\x1b[0m\x1b[90m to read files.\x1b[0m');
    },
    nano: () => {
      commands['vim']();
    },
    touch: () => {
      writeLine('\r\n\x1b[1;31mtouch: cannot create file: Read-only file system\x1b[0m');
    },
    mkdir: () => {
      writeLine('\r\n\x1b[1;31mmkdir: cannot create directory: Read-only file system\x1b[0m');
    },
    wget: () => {
      writeLine('\r\n\x1b[1;31mwget: command disabled for security reasons\x1b[0m');
    },
    curl: () => {
      writeLine('\r\n\x1b[1;36mTry: curl https://api.github.com/users/AnkanSaha\x1b[0m');
      writeLine('\x1b[90m(Just kidding, but you can visit my GitHub!)\x1b[0m');
    },
    ping: () => {
      writeLine('\r\n\x1b[1;37mPING portfolio.ankan.in (127.0.0.1): 56 data bytes\x1b[0m');
      writeLine('\x1b[1;37m64 bytes from 127.0.0.1: icmp_seq=0 ttl=64 time=0.042 ms\x1b[0m');
      writeLine('\x1b[1;37m64 bytes from 127.0.0.1: icmp_seq=1 ttl=64 time=0.038 ms\x1b[0m');
      writeLine('\x1b[90m^C\x1b[0m');
      writeLine('\x1b[1;37m--- portfolio.ankan.in ping statistics ---\x1b[0m');
      writeLine('\x1b[1;37m2 packets transmitted, 2 received, 0% packet loss\x1b[0m');
    },
    top: () => {
      writeLine('\r\n\x1b[1;37mTasks: 7 total, 1 running\x1b[0m');
      writeLine('\x1b[1;37m%Cpu(s): 0.1 us, 0.0 sy, 0.0 ni, 99.9 id\x1b[0m');
      writeLine('\x1b[1;37mMiB Mem: 16384.0 total, 8192.0 free, 4096.0 used\x1b[0m');
      writeLine('');
      writeLine('\x1b[1;33m  PID USER      PR  NI    VIRT    RES COMMAND\x1b[0m');
      writeLine('\x1b[1;37m    1 ankan     20   0   1024m   512m portfolio\x1b[0m');
      writeLine('\x1b[1;37m    2 ankan     20   0    512m   256m nodejs\x1b[0m');
      writeLine('\x1b[1;37m    3 ankan     20   0    256m   128m docker\x1b[0m');
    },
    htop: () => {
      commands['top']();
    },
    ps: () => {
      writeLine('\r\n\x1b[1;33m  PID TTY          TIME CMD\x1b[0m');
      writeLine('\x1b[1;37m    1 pts/0    00:00:00 portfolio-sh\x1b[0m');
      writeLine('\x1b[1;37m    2 pts/0    00:00:00 xterm.js\x1b[0m');
    },
    'ps aux': () => {
      commands['top']();
    },
    df: () => {
      writeLine('\r\n\x1b[1;37mFilesystem     1K-blocks    Used Available Use% Mounted on\x1b[0m');
      writeLine('\x1b[1;37m/dev/sda1      104857600 52428800  52428800  50% /\x1b[0m');
      writeLine('\x1b[1;37mportfolio       10485760  2097152   8388608  20% /home/ankan\x1b[0m');
    },
    free: () => {
      writeLine('\r\n\x1b[1;37m              total        used        free      shared  buff/cache   available\x1b[0m');
      writeLine('\x1b[1;37mMem:       16777216     4194304    10485760      524288     2097152    12582912\x1b[0m');
      writeLine('\x1b[1;37mSwap:       8388608           0     8388608\x1b[0m');
    },
    id: () => {
      writeLine('\r\n\x1b[1;37muid=1000(ankan) gid=1000(ankan) groups=1000(ankan),27(sudo),999(docker)\x1b[0m');
    },
    which: (args) => {
      if (args && commands[args]) {
        writeLine(`\r\n\x1b[1;37m/usr/bin/${args}\x1b[0m`);
      } else {
        writeLine(`\r\n\x1b[1;31m${args || 'unknown'} not found\x1b[0m`);
      }
    },
    type: (args) => {
      if (args && commands[args]) {
        writeLine(`\r\n\x1b[1;37m${args} is a shell builtin\x1b[0m`);
      } else {
        writeLine(`\r\n\x1b[1;31m${args || 'unknown'}: not found\x1b[0m`);
      }
    },
  };

  const writeLine = (text: string) => {
    terminal.current?.writeln(text);
  };

  const write = (text: string) => {
    terminal.current?.write(text);
  };

  const typeText = async (text: string, delay: number = 20) => {
    for (const char of text) {
      write(char);
      await new Promise(resolve => setTimeout(resolve, delay));
    }
  };

  const printWelcome = async (mobile: boolean) => {
    if (mobile) {
      // Mobile banner - no ASCII, just text
      writeLine('');
      writeLine('\x1b[1;36mAnkan Saha\x1b[0m');
      writeLine('\x1b[1;33mFull Stack Engineer @ Hoichoi\x1b[0m');
    } else {
      // Desktop banner - full
      writeLine('\r\n\x1b[1;32m╔════════════════════════════════════════════════════════════════════════════════════════╗\x1b[0m');
      writeLine('\x1b[1;32m║\x1b[0m                                                                                        \x1b[1;32m║\x1b[0m');
      writeLine('\x1b[1;32m║\x1b[0m   \x1b[1;36m █████╗ ███╗   ██╗██╗  ██╗ █████╗ ███╗   ██╗    ███████╗ █████╗ ██╗  ██╗ █████╗ \x1b[0m   \x1b[1;32m║\x1b[0m');
      writeLine('\x1b[1;32m║\x1b[0m   \x1b[1;36m██╔══██╗████╗  ██║██║ ██╔╝██╔══██╗████╗  ██║    ██╔════╝██╔══██╗██║  ██║██╔══██╗\x1b[0m   \x1b[1;32m║\x1b[0m');
      writeLine('\x1b[1;32m║\x1b[0m   \x1b[1;36m███████║██╔██╗ ██║█████╔╝ ███████║██╔██╗ ██║    ███████╗███████║███████║███████║\x1b[0m   \x1b[1;32m║\x1b[0m');
      writeLine('\x1b[1;32m║\x1b[0m   \x1b[1;36m██╔══██║██║╚██╗██║██╔═██╗ ██╔══██║██║╚██╗██║    ╚════██║██╔══██║██╔══██║██╔══██║\x1b[0m   \x1b[1;32m║\x1b[0m');
      writeLine('\x1b[1;32m║\x1b[0m   \x1b[1;36m██║  ██║██║ ╚████║██║  ██╗██║  ██║██║ ╚████║    ███████║██║  ██║██║  ██║██║  ██║\x1b[0m   \x1b[1;32m║\x1b[0m');
      writeLine('\x1b[1;32m║\x1b[0m   \x1b[1;36m╚═╝  ╚═╝╚═╝  ╚═══╝╚═╝  ╚═╝╚═╝  ╚═╝╚═╝  ╚═══╝    ╚══════╝╚═╝  ╚═╝╚═╝  ╚═╝╚═╝  ╚═╝\x1b[0m   \x1b[1;32m║\x1b[0m');
      writeLine('\x1b[1;32m║\x1b[0m                                                                                        \x1b[1;32m║\x1b[0m');
      writeLine('\x1b[1;32m║\x1b[0m                          \x1b[1;33mFull Stack Engineer at Hoichoi\x1b[0m                              \x1b[1;32m║\x1b[0m');
      writeLine('\x1b[1;32m║\x1b[0m                                                                                        \x1b[1;32m║\x1b[0m');
      writeLine('\x1b[1;32m╚════════════════════════════════════════════════════════════════════════════════════════╝\x1b[0m');
    }
    writeLine('');
    await typeText('\x1b[1;37mWelcome to my terminal portfolio!\x1b[0m', 15);
    writeLine('');
    await typeText('\x1b[90mType \x1b[1;33mhelp\x1b[0m\x1b[90m to see available commands.\x1b[0m', 10);
    writeLine('\r\n');
  };

  const printHelp = () => {
    writeLine('\r\n\x1b[1;36m╔═══════════════════════════════════════════════════════════════════════╗\x1b[0m');
    writeLine('\x1b[1;36m║\x1b[0m                        \x1b[1;33mAVAILABLE COMMANDS\x1b[0m                          \x1b[1;36m║\x1b[0m');
    writeLine('\x1b[1;36m╠═══════════════════════════════════════════════════════════════════════╣\x1b[0m');
    writeLine('\x1b[1;36m║\x1b[0m                                                                       \x1b[1;36m║\x1b[0m');
    writeLine('\x1b[1;36m║\x1b[0m  \x1b[1;33m📋 PORTFOLIO COMMANDS:\x1b[0m                                             \x1b[1;36m║\x1b[0m');
    writeLine('\x1b[1;36m║\x1b[0m    \x1b[1;32mabout\x1b[0m          Show information about me                        \x1b[1;36m║\x1b[0m');
    writeLine('\x1b[1;36m║\x1b[0m    \x1b[1;32mcontact\x1b[0m        Display contact information                      \x1b[1;36m║\x1b[0m');
    writeLine('\x1b[1;36m║\x1b[0m    \x1b[1;32msocial\x1b[0m         Show social media links                          \x1b[1;36m║\x1b[0m');
    writeLine('\x1b[1;36m║\x1b[0m    \x1b[1;32mskills\x1b[0m         List technical skills and expertise              \x1b[1;36m║\x1b[0m');
    writeLine('\x1b[1;36m║\x1b[0m    \x1b[1;32mexperience\x1b[0m     Show work experience                             \x1b[1;36m║\x1b[0m');
    writeLine('\x1b[1;36m║\x1b[0m    \x1b[1;32mprojects\x1b[0m       Display portfolio projects                       \x1b[1;36m║\x1b[0m');
    writeLine('\x1b[1;36m║\x1b[0m    \x1b[1;32meducation\x1b[0m      Show educational background                      \x1b[1;36m║\x1b[0m');
    writeLine('\x1b[1;36m║\x1b[0m    \x1b[1;32machievements\x1b[0m   List achievements and badges                     \x1b[1;36m║\x1b[0m');
    writeLine('\x1b[1;36m║\x1b[0m    \x1b[1;32mgithub\x1b[0m         Open GitHub profile                              \x1b[1;36m║\x1b[0m');
    writeLine('\x1b[1;36m║\x1b[0m    \x1b[1;32mlinkedin\x1b[0m       Open LinkedIn profile                            \x1b[1;36m║\x1b[0m');
    writeLine('\x1b[1;36m║\x1b[0m                                                                       \x1b[1;36m║\x1b[0m');
    writeLine('\x1b[1;36m║\x1b[0m  \x1b[1;33m🐧 LINUX COMMANDS:\x1b[0m                                                 \x1b[1;36m║\x1b[0m');
    writeLine('\x1b[1;36m║\x1b[0m    \x1b[1;32mls\x1b[0m             List directory contents                           \x1b[1;36m║\x1b[0m');
    writeLine('\x1b[1;36m║\x1b[0m    \x1b[1;32mll\x1b[0m             Detailed file listing (ls -la)                   \x1b[1;36m║\x1b[0m');
    writeLine('\x1b[1;36m║\x1b[0m    \x1b[1;32mpwd\x1b[0m            Print working directory                           \x1b[1;36m║\x1b[0m');
    writeLine('\x1b[1;36m║\x1b[0m    \x1b[1;32mcd <dir>\x1b[0m       Change directory                                  \x1b[1;36m║\x1b[0m');
    writeLine('\x1b[1;36m║\x1b[0m    \x1b[1;32mcat <file>\x1b[0m     Display file contents                             \x1b[1;36m║\x1b[0m');
    writeLine('\x1b[1;36m║\x1b[0m    \x1b[1;32mecho <text>\x1b[0m    Print text to terminal                            \x1b[1;36m║\x1b[0m');
    writeLine('\x1b[1;36m║\x1b[0m    \x1b[1;32mwhoami\x1b[0m         Display current user                              \x1b[1;36m║\x1b[0m');
    writeLine('\x1b[1;36m║\x1b[0m    \x1b[1;32mhostname\x1b[0m       Show system hostname                              \x1b[1;36m║\x1b[0m');
    writeLine('\x1b[1;36m║\x1b[0m    \x1b[1;32mdate\x1b[0m           Display current date/time                         \x1b[1;36m║\x1b[0m');
    writeLine('\x1b[1;36m║\x1b[0m    \x1b[1;32muptime\x1b[0m         Show system uptime                                \x1b[1;36m║\x1b[0m');
    writeLine('\x1b[1;36m║\x1b[0m    \x1b[1;32muname -a\x1b[0m       System information                                \x1b[1;36m║\x1b[0m');
    writeLine('\x1b[1;36m║\x1b[0m    \x1b[1;32mneofetch\x1b[0m       Display system info with ASCII art                \x1b[1;36m║\x1b[0m');
    writeLine('\x1b[1;36m║\x1b[0m    \x1b[1;32mhistory\x1b[0m        Show command history                              \x1b[1;36m║\x1b[0m');
    writeLine('\x1b[1;36m║\x1b[0m    \x1b[1;32mtop\x1b[0m            Display running processes                         \x1b[1;36m║\x1b[0m');
    writeLine('\x1b[1;36m║\x1b[0m    \x1b[1;32mps\x1b[0m             Process status                                    \x1b[1;36m║\x1b[0m');
    writeLine('\x1b[1;36m║\x1b[0m    \x1b[1;32mdf\x1b[0m             Disk space usage                                  \x1b[1;36m║\x1b[0m');
    writeLine('\x1b[1;36m║\x1b[0m    \x1b[1;32mfree\x1b[0m           Memory usage                                      \x1b[1;36m║\x1b[0m');
    writeLine('\x1b[1;36m║\x1b[0m    \x1b[1;32mid\x1b[0m             User identity                                      \x1b[1;36m║\x1b[0m');
    writeLine('\x1b[1;36m║\x1b[0m    \x1b[1;32mping\x1b[0m           Network connectivity test                         \x1b[1;36m║\x1b[0m');
    writeLine('\x1b[1;36m║\x1b[0m                                                                       \x1b[1;36m║\x1b[0m');
    writeLine('\x1b[1;36m║\x1b[0m  \x1b[1;33m⚙️  SYSTEM COMMANDS:\x1b[0m                                                \x1b[1;36m║\x1b[0m');
    writeLine('\x1b[1;36m║\x1b[0m    \x1b[1;32mclear\x1b[0m          Clear terminal screen                             \x1b[1;36m║\x1b[0m');
    writeLine('\x1b[1;36m║\x1b[0m    \x1b[1;32mhelp\x1b[0m           Show this help message                            \x1b[1;36m║\x1b[0m');
    writeLine('\x1b[1;36m║\x1b[0m    \x1b[1;32mexit\x1b[0m           Exit terminal session                             \x1b[1;36m║\x1b[0m');
    writeLine('\x1b[1;36m║\x1b[0m                                                                       \x1b[1;36m║\x1b[0m');
    writeLine('\x1b[1;36m╚═══════════════════════════════════════════════════════════════════════╝\x1b[0m');
    writeLine('\r\n\x1b[90mTip: Use ↑↓ arrows for history, Tab for autocomplete, Ctrl+L to clear.\x1b[0m\r\n');
  };

  const printAbout = () => {
    writeLine('\r\n\x1b[1;36m╔═══════════════════════════════════════════════════════════════╗\x1b[0m');
    writeLine('\x1b[1;36m║\x1b[0m                         \x1b[1;33mABOUT ME\x1b[0m                           \x1b[1;36m║\x1b[0m');
    writeLine('\x1b[1;36m╚═══════════════════════════════════════════════════════════════╝\x1b[0m');
    writeLine('');
    writeLine(`  \x1b[1;37mName:\x1b[0m          ${portfolioData.name}`);
    writeLine(`  \x1b[1;37mTitle:\x1b[0m         ${portfolioData.title}`);
    writeLine(`  \x1b[1;37mSpecialty:\x1b[0m     ${portfolioData.subtitle}`);
    writeLine(`  \x1b[1;37mCurrent:\x1b[0m       ${portfolioData.currentCompany}`);
    writeLine(`  \x1b[1;37mLocation:\x1b[0m      ${portfolioData.location}`);
    writeLine('');
    writeLine('  \x1b[1;33mSummary:\x1b[0m');
    writeLine('  Full Stack Developer experienced in building DNS servers, NoSQL');
    writeLine('  databases, and container orchestration tools. Reduced infrastructure');
    writeLine('  costs by $3K/month and shipped open-source tools with 2,000+ downloads.');
    writeLine('  Serving 10M+ users with high-performance, scalable solutions.');
    writeLine('');
  };

  const printContact = () => {
    writeLine('\r\n\x1b[1;36m╔═══════════════════════════════════════════════════════════════╗\x1b[0m');
    writeLine('\x1b[1;36m║\x1b[0m                    \x1b[1;33mCONTACT INFORMATION\x1b[0m                    \x1b[1;36m║\x1b[0m');
    writeLine('\x1b[1;36m╚═══════════════════════════════════════════════════════════════╝\x1b[0m');
    writeLine('');
    writeLine(`  \x1b[1;37m📧 Email:\x1b[0m        ${portfolioData.email}`);
    writeLine(`  \x1b[1;37m📧 Alt Email:\x1b[0m    ${portfolioData.alternateEmail}`);
    writeLine(`  \x1b[1;37m📱 Phone:\x1b[0m        ${portfolioData.phone}`);
    writeLine(`  \x1b[1;37m📍 Location:\x1b[0m     ${portfolioData.location}`);
    writeLine(`  \x1b[1;37m💼 Status:\x1b[0m       Open to opportunities`);
    writeLine('');
    writeLine('  \x1b[90mI typically reply within 24 hours. For urgent inquiries,');
    writeLine('  please mention "URGENT" in your subject line.\x1b[0m');
    writeLine('');
  };

  const printSocial = () => {
    writeLine('\r\n\x1b[1;36m╔═══════════════════════════════════════════════════════════════╗\x1b[0m');
    writeLine('\x1b[1;36m║\x1b[0m                     \x1b[1;33mSOCIAL MEDIA LINKS\x1b[0m                     \x1b[1;36m║\x1b[0m');
    writeLine('\x1b[1;36m╚═══════════════════════════════════════════════════════════════╝\x1b[0m');
    writeLine('');
    writeLine(`  \x1b[1;37mGitHub:\x1b[0m      \x1b[4;34m${portfolioData.social.github}\x1b[0m`);
    writeLine(`  \x1b[1;37mLinkedIn:\x1b[0m    \x1b[4;34m${portfolioData.social.linkedin}\x1b[0m`);
    writeLine(`  \x1b[1;37mTwitter:\x1b[0m     \x1b[4;34m${portfolioData.social.twitter}\x1b[0m`);
    writeLine(`  \x1b[1;37mInstagram:\x1b[0m   \x1b[4;34m${portfolioData.social.instagram}\x1b[0m`);
    writeLine(`  \x1b[1;37mReddit:\x1b[0m      \x1b[4;34m${portfolioData.social.reddit}\x1b[0m`);
    writeLine(`  \x1b[1;37mDev.to:\x1b[0m      \x1b[4;34m${portfolioData.social.devto}\x1b[0m`);
    writeLine(`  \x1b[1;37mDiscord:\x1b[0m     \x1b[4;34m${portfolioData.social.discord}\x1b[0m`);
    writeLine('');
  };

  const printSkills = () => {
    writeLine('\r\n\x1b[1;36m╔═══════════════════════════════════════════════════════════════╗\x1b[0m');
    writeLine('\x1b[1;36m║\x1b[0m                  \x1b[1;33mSKILLS & TECHNOLOGIES\x1b[0m                    \x1b[1;36m║\x1b[0m');
    writeLine('\x1b[1;36m╚═══════════════════════════════════════════════════════════════╝\x1b[0m');

    Object.entries(portfolioData.skills).forEach(([category, skills]) => {
      writeLine('');
      writeLine(`  \x1b[1;33m${category}:\x1b[0m`);
      skills.forEach((skill: string) => {
        writeLine(`    \x1b[32m▸\x1b[0m ${skill}`);
      });
    });
    writeLine('');
  };

  const printExperience = () => {
    writeLine('\r\n\x1b[1;36m╔═══════════════════════════════════════════════════════════════╗\x1b[0m');
    writeLine('\x1b[1;36m║\x1b[0m                     \x1b[1;33mWORK EXPERIENCE\x1b[0m                        \x1b[1;36m║\x1b[0m');
    writeLine('\x1b[1;36m╚═══════════════════════════════════════════════════════════════╝\x1b[0m');

    portfolioData.experience.forEach((exp, index) => {
      writeLine('');
      writeLine(`  \x1b[1;37m${exp.title}\x1b[0m`);
      writeLine(`  \x1b[1;36m${exp.company}\x1b[0m`);
      writeLine(`  \x1b[90m${exp.period}\x1b[0m`);
      writeLine('');

      // Word wrap description
      const words = exp.description.split(' ');
      let line = '  ';
      words.forEach(word => {
        if ((line + word).length > 63) {
          writeLine(line);
          line = '  ' + word + ' ';
        } else {
          line += word + ' ';
        }
      });
      if (line.trim().length > 0) writeLine(line);

      writeLine('');
      writeLine(`  \x1b[1;33mTech Stack:\x1b[0m ${exp.technologies.join(', ')}`);

      if (index < portfolioData.experience.length - 1) {
        writeLine('  \x1b[90m─────────────────────────────────────────────────────────────\x1b[0m');
      }
    });
    writeLine('');
  };

  const printProjects = () => {
    writeLine('\r\n\x1b[1;36m╔═══════════════════════════════════════════════════════════════╗\x1b[0m');
    writeLine('\x1b[1;36m║\x1b[0m                   \x1b[1;33mPORTFOLIO PROJECTS\x1b[0m                       \x1b[1;36m║\x1b[0m');
    writeLine('\x1b[1;36m╚═══════════════════════════════════════════════════════════════╝\x1b[0m');

    portfolioData.projects.forEach((project, index) => {
      writeLine('');
      writeLine(`  \x1b[1;37m${project.name}\x1b[0m - \x1b[1;33m${project.tagline}\x1b[0m`);
      writeLine('');

      // Word wrap description
      const words = project.description.split(' ');
      let line = '  ';
      words.forEach(word => {
        if ((line + word).length > 63) {
          writeLine(line);
          line = '  ' + word + ' ';
        } else {
          line += word + ' ';
        }
      });
      if (line.trim().length > 0) writeLine(line);

      writeLine('');
      writeLine(`  \x1b[1;33mTech:\x1b[0m ${project.technologies.join(', ')}`);
      writeLine(`  \x1b[1;36mGitHub:\x1b[0m \x1b[4;34m${project.github}\x1b[0m`);
      if (project.npm) {
        writeLine(`  \x1b[1;36mNPM:\x1b[0m \x1b[4;34m${project.npm}\x1b[0m`);
      }

      if (index < portfolioData.projects.length - 1) {
        writeLine('  \x1b[90m─────────────────────────────────────────────────────────────\x1b[0m');
      }
    });
    writeLine('');
  };

  const printEducation = () => {
    writeLine('\r\n\x1b[1;36m╔═══════════════════════════════════════════════════════════════╗\x1b[0m');
    writeLine('\x1b[1;36m║\x1b[0m                        \x1b[1;33mEDUCATION\x1b[0m                          \x1b[1;36m║\x1b[0m');
    writeLine('\x1b[1;36m╚═══════════════════════════════════════════════════════════════╝\x1b[0m');
    writeLine('');
    writeLine(`  \x1b[1;37m${portfolioData.education.degree}\x1b[0m`);
    writeLine(`  \x1b[1;36m${portfolioData.education.university}\x1b[0m`);
    writeLine(`  \x1b[90m${portfolioData.education.period}\x1b[0m`);
    writeLine('');

    // Word wrap description
    const words = portfolioData.education.description.split(' ');
    let line = '  ';
    words.forEach(word => {
      if ((line + word).length > 63) {
        writeLine(line);
        line = '  ' + word + ' ';
      } else {
        line += word + ' ';
      }
    });
    if (line.trim().length > 0) writeLine(line);
    writeLine('');
  };

  const printAchievements = () => {
    writeLine('\r\n\x1b[1;36m╔═══════════════════════════════════════════════════════════════╗\x1b[0m');
    writeLine('\x1b[1;36m║\x1b[0m                \x1b[1;33mACHIEVEMENTS & RECOGNITION\x1b[0m                  \x1b[1;36m║\x1b[0m');
    writeLine('\x1b[1;36m╚═══════════════════════════════════════════════════════════════╝\x1b[0m');
    writeLine('');

    portfolioData.achievements.forEach(achievement => {
      writeLine(`  \x1b[32m★\x1b[0m ${achievement}`);
    });
    writeLine('');
  };

  const handleCommand = (command: string) => {
    const trimmedCmd = command.trim();

    if (trimmedCmd === '') {
      return;
    }

    // Add to history
    commandHistory.current.push(trimmedCmd);
    historyIndex.current = commandHistory.current.length;

    // Parse command and arguments
    const parts = trimmedCmd.split(' ');
    const cmd = parts[0].toLowerCase();
    const args = parts.slice(1).join(' ');
    const fullCmd = trimmedCmd.toLowerCase();

    // Check for full command with args first (e.g., "ls -la")
    if (commands[fullCmd]) {
      commands[fullCmd](args);
    } else if (commands[cmd]) {
      commands[cmd](args);
    } else {
      writeLine(`\r\n\x1b[1;31mCommand not found: ${cmd}\x1b[0m`);
      writeLine('\x1b[90mType \x1b[1;33mhelp\x1b[0m\x1b[90m to see available commands.\x1b[0m\r\n');
    }
  };

  const prompt = () => {
    write('\r\n\x1b[1;32mankan@portfolio\x1b[0m:\x1b[1;34m~\x1b[0m$ ');
  };

  const handleBootComplete = () => {
    setIsBooting(false);
  };

  useEffect(() => {
    if (!terminalRef.current || isReady || isBooting) return;

    // Detect mobile
    const checkMobile = () => {
      const mobile = window.innerWidth <= 768;
      setIsMobile(mobile);
      return mobile;
    };
    const mobile = checkMobile();

    // Initialize terminal with responsive font
    const term = new Terminal({
      cursorBlink: true,
      cursorStyle: 'bar',
      cursorWidth: 2,
      fontSize: mobile ? 12 : 15,
      fontFamily: '"Fira Code", "JetBrains Mono", "Cascadia Code", "Courier New", monospace',
      fontWeight: '400',
      fontWeightBold: '600',
      lineHeight: 1.2,
      letterSpacing: 0,
      scrollback: 5000,
      smoothScrollDuration: 100,
      theme: {
        background: '#000000',
        foreground: '#e0e0e0',
        cursor: '#00ff00',
        cursorAccent: '#0a0e27',
        selectionBackground: 'rgba(100, 150, 255, 0.3)',
        selectionForeground: '#ffffff',
        selectionInactiveBackground: 'rgba(100, 150, 255, 0.15)',
        black: '#000000',
        red: '#ff5555',
        green: '#50fa7b',
        yellow: '#f1fa8c',
        blue: '#bd93f9',
        magenta: '#ff79c6',
        cyan: '#8be9fd',
        white: '#f8f8f2',
        brightBlack: '#6272a4',
        brightRed: '#ff6e6e',
        brightGreen: '#69ff94',
        brightYellow: '#ffffa5',
        brightBlue: '#d6acff',
        brightMagenta: '#ff92df',
        brightCyan: '#a4ffff',
        brightWhite: '#ffffff',
      },
      allowTransparency: true,
      convertEol: true,
      scrollOnUserInput: true,
    });

    // Initialize addons
    const fit = new FitAddon();
    const webLinks = new WebLinksAddon();

    term.loadAddon(fit);
    term.loadAddon(webLinks);

    term.open(terminalRef.current);

    // Hide scrollbar via JavaScript
    const viewport = terminalRef.current.querySelector('.xterm-viewport');
    if (viewport) {
      const vpElement = viewport as HTMLElement;
      vpElement.style.overflow = 'hidden';
      vpElement.style.scrollbarWidth = 'none';
    }

    // Add webkit scrollbar hiding
    const style = document.createElement('style');
    style.textContent = `
      .xterm-viewport::-webkit-scrollbar {
        display: none;
      }
      .xterm-viewport {
        scrollbar-width: none;
        -ms-overflow-style: none;
      }
    `;
    document.head.appendChild(style);

    // Initial fit
    fit.fit();

    // Delayed fit to ensure proper sizing after render
    setTimeout(() => {
      fit.fit();
      // Re-apply scrollbar hiding after fit
      const vp = terminalRef.current?.querySelector('.xterm-viewport');
      if (vp) {
        const vpElement = vp as HTMLElement;
        vpElement.style.overflow = 'hidden';
        vpElement.style.scrollbarWidth = 'none';
      }
    }, 100);

    terminal.current = term;
    fitAddon.current = fit;

    // Focus terminal on load
    term.focus();

    // Show terminal with delay, then print welcome
    const init = async () => {
      await new Promise(resolve => setTimeout(resolve, 100));
      setShowTerminal(true);
      await printWelcome(mobile);
      prompt();
    };

    init();

    // Handle input
    let currentCommand = '';

    term.onData((data) => {
      const code = data.charCodeAt(0);

      // Enter key
      if (code === 13) {
        const cmd = currentCommand.trim().toLowerCase();
        if (cmd !== 'clear') {
          term.writeln('');
        }
        handleCommand(currentCommand);
        currentCommand = '';
        currentLine.current = '';
        prompt();
      }
      // Backspace
      else if (code === 127) {
        if (currentCommand.length > 0) {
          currentCommand = currentCommand.slice(0, -1);
          currentLine.current = currentCommand;
          term.write('\b \b');
        }
      }
      // Tab - autocomplete
      else if (code === 9) {
        // Get all base commands (filter out commands with spaces for cleaner autocomplete)
        const baseCommands = Object.keys(commands).filter(cmd => !cmd.includes(' '));
        const matches = baseCommands.filter(cmd =>
          cmd.startsWith(currentCommand.toLowerCase())
        );

        if (matches.length === 1) {
          // Single match - autocomplete
          const completion = matches[0].substring(currentCommand.length);
          currentCommand = matches[0];
          currentLine.current = currentCommand;
          term.write(completion);
        } else if (matches.length > 1) {
          // Multiple matches - show options
          term.writeln('');
          writeLine(`  \x1b[1;33m${matches.join('  ')}\x1b[0m`);
          write('\x1b[1;32mankan@portfolio\x1b[0m:\x1b[1;34m~\x1b[0m$ ');
          term.write(currentCommand);
        }
      }
      // Arrow up - previous command
      else if (data === '\x1b[A') {
        if (historyIndex.current > 0) {
          historyIndex.current--;
          const cmd = commandHistory.current[historyIndex.current];

          // Clear current line
          term.write('\r\x1b[K');
          write('\x1b[1;32mankan@portfolio\x1b[0m:\x1b[1;34m~\x1b[0m$ ');
          term.write(cmd);
          currentCommand = cmd;
          currentLine.current = cmd;
        }
      }
      // Arrow down - next command
      else if (data === '\x1b[B') {
        if (historyIndex.current < commandHistory.current.length - 1) {
          historyIndex.current++;
          const cmd = commandHistory.current[historyIndex.current];

          // Clear current line
          term.write('\r\x1b[K');
          write('\x1b[1;32mankan@portfolio\x1b[0m:\x1b[1;34m~\x1b[0m$ ');
          term.write(cmd);
          currentCommand = cmd;
          currentLine.current = cmd;
        } else if (historyIndex.current === commandHistory.current.length - 1) {
          historyIndex.current = commandHistory.current.length;

          // Clear current line
          term.write('\r\x1b[K');
          write('\x1b[1;32mankan@portfolio\x1b[0m:\x1b[1;34m~\x1b[0m$ ');
          currentCommand = '';
          currentLine.current = '';
        }
      }
      // Ctrl+L - clear screen
      else if (data === '\x0c') {
        term.reset();
        prompt();
        currentCommand = '';
        currentLine.current = '';
      }
      // Regular character
      else if (code >= 32 && code < 127) {
        currentCommand += data;
        currentLine.current = currentCommand;
        term.write(data);
      }
    });

    // Handle window resize with debounce
    let resizeTimeout: NodeJS.Timeout;
    const handleResize = () => {
      clearTimeout(resizeTimeout);
      resizeTimeout = setTimeout(() => {
        checkMobile();
        fit.fit();
      }, 50);
    };

    window.addEventListener('resize', handleResize);

    // Also handle orientation change for mobile
    window.addEventListener('orientationchange', () => {
      setTimeout(() => {
        checkMobile();
        fit.fit();
      }, 200);
    });

    setIsReady(true);

    return () => {
      clearTimeout(resizeTimeout);
      window.removeEventListener('resize', handleResize);
      term.dispose();
    };
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [isBooting]);

  return (
    <div
      className="w-full h-screen bg-[#000000]"
      style={{
        overflow: 'hidden',
        position: 'fixed',
        top: 0,
        left: 0,
        right: 0,
        bottom: 0,
      }}
    >
      {/* Boot Sequence */}
      {isBooting && <BootSequence onComplete={handleBootComplete} />}

      {/* Terminal */}
      {!isBooting && (
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={showTerminal ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
          transition={{ duration: 0.6, ease: "easeOut" }}
          className="w-full h-full"
        >
          <div
            ref={terminalRef}
            className="w-full h-full"
            style={{
              padding: isMobile ? '6px 8px' : '8px 12px',
              boxSizing: 'border-box',
              overflow: 'hidden',
            }}
          />
        </motion.div>
      )}
    </div>
  );
};

export default TerminalPortfolio;
