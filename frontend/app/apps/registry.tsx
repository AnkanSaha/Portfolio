import dynamic from "next/dynamic";
import type { ComponentType } from "react";
import {
  FiUser,
  FiBriefcase,
  FiFolder,
  FiCpu,
  FiMail,
  FiHardDrive,
  FiFileText,
  FiClipboard,
  FiSettings,
  FiGithub,
  FiTerminal,
  FiPercent,
  FiActivity,
  FiBookOpen,
} from "react-icons/fi";
import type { AppComponentProps } from "./types";
import ChromeIcon from "./browser/ChromeIcon";

import AboutApp from "./about/AboutApp";
import ExperienceApp from "./experience/ExperienceApp";
import ProjectsApp from "./projects/ProjectsApp";
import SkillsApp from "./skills/SkillsApp";
import ContactApp from "./contact/ContactApp";
import FilesApp from "./files/FilesApp";
import EditorApp from "./editor/EditorApp";
import ResumeApp from "./resume/ResumeApp";
import SettingsApp from "./settings/SettingsApp";
import GitHubApp from "./github/GitHubApp";
import CalculatorApp from "./calculator/CalculatorApp";
import MonitorApp from "./monitor/MonitorApp";
import BrowserApp from "./browser/BrowserApp";
import BlogApp from "./blog/BlogApp";

const TerminalApp = dynamic(() => import("./terminal/TerminalApp"), { ssr: false });

export interface AppDefinition {
  id: string;
  title: string;
  icon: ComponentType<{ size?: number }>;
  component: ComponentType<AppComponentProps>;
  defaultSize: { w: number; h: number };
  category: "portfolio" | "utility" | "system";
  desktopIcon: boolean;
}

export const APP_REGISTRY: Record<string, AppDefinition> = {
  terminal: {
    id: "terminal",
    title: "Terminal",
    icon: FiTerminal,
    component: TerminalApp,
    defaultSize: { w: 660, h: 420 },
    category: "system",
    desktopIcon: true,
  },
  about: {
    id: "about",
    title: "About Me",
    icon: FiUser,
    component: AboutApp,
    defaultSize: { w: 620, h: 540 },
    category: "portfolio",
    desktopIcon: true,
  },
  experience: {
    id: "experience",
    title: "Experience",
    icon: FiBriefcase,
    component: ExperienceApp,
    defaultSize: { w: 680, h: 580 },
    category: "portfolio",
    desktopIcon: true,
  },
  projects: {
    id: "projects",
    title: "Projects",
    icon: FiFolder,
    component: ProjectsApp,
    defaultSize: { w: 780, h: 600 },
    category: "portfolio",
    desktopIcon: true,
  },
  skills: {
    id: "skills",
    title: "Skills",
    icon: FiCpu,
    component: SkillsApp,
    defaultSize: { w: 640, h: 560 },
    category: "portfolio",
    desktopIcon: true,
  },
  contact: {
    id: "contact",
    title: "Contact",
    icon: FiMail,
    component: ContactApp,
    defaultSize: { w: 520, h: 480 },
    category: "portfolio",
    desktopIcon: true,
  },
  files: {
    id: "files",
    title: "Files",
    icon: FiHardDrive,
    component: FilesApp,
    defaultSize: { w: 720, h: 480 },
    category: "utility",
    desktopIcon: true,
  },
  editor: {
    id: "editor",
    title: "Text Editor",
    icon: FiFileText,
    component: EditorApp,
    defaultSize: { w: 640, h: 520 },
    category: "utility",
    desktopIcon: false,
  },
  resume: {
    id: "resume",
    title: "Resume",
    icon: FiClipboard,
    component: ResumeApp,
    defaultSize: { w: 720, h: 760 },
    category: "utility",
    desktopIcon: true,
  },
  settings: {
    id: "settings",
    title: "Settings",
    icon: FiSettings,
    component: SettingsApp,
    defaultSize: { w: 560, h: 520 },
    category: "system",
    desktopIcon: true,
  },
  github: {
    id: "github",
    title: "GitHub Stats",
    icon: FiGithub,
    component: GitHubApp,
    defaultSize: { w: 480, h: 440 },
    category: "utility",
    desktopIcon: true,
  },
  calculator: {
    id: "calculator",
    title: "Calculator",
    icon: FiPercent,
    component: CalculatorApp,
    defaultSize: { w: 300, h: 420 },
    category: "utility",
    desktopIcon: true,
  },
  monitor: {
    id: "monitor",
    title: "System Monitor",
    icon: FiActivity,
    component: MonitorApp,
    defaultSize: { w: 560, h: 560 },
    category: "system",
    desktopIcon: true,
  },
  browser: {
    id: "browser",
    title: "Chrome",
    icon: ChromeIcon,
    component: BrowserApp,
    defaultSize: { w: 820, h: 600 },
    category: "utility",
    desktopIcon: true,
  },
  blog: {
    id: "blog",
    title: "Blog",
    icon: FiBookOpen,
    component: BlogApp,
    defaultSize: { w: 760, h: 640 },
    category: "utility",
    desktopIcon: true,
  },
};

export const APP_ORDER = [
  "terminal",
  "browser",
  "about",
  "experience",
  "projects",
  "skills",
  "contact",
  "files",
  "editor",
  "resume",
  "blog",
  "monitor",
  "calculator",
  "settings",
  "github",
];
