"use client";
import { useState } from "react";
import { FiFolder, FiFileText, FiClipboard, FiHome } from "react-icons/fi";
import { AppShell, Toolbar, Sidebar, ListRow } from "../../os/ui";
import { fileSystemRoot, resolvePath, type FSNode } from "../../data/fileSystem";
import { useOpenApp } from "../../os/window/useOpenApp";
import styles from "./FilesApp.module.css";

const QUICK_LINKS: { label: string; path: string[] }[] = [
  { label: "Home", path: [] },
  { label: "Desktop", path: ["Desktop"] },
  { label: "Documents", path: ["Documents"] },
  { label: "Projects", path: ["Projects"] },
];

function nodeAt(path: string[]): FSNode {
  return path.length === 0 ? fileSystemRoot : (resolvePath(path) ?? fileSystemRoot);
}

export default function FilesApp() {
  const [path, setPath] = useState<string[]>([]);
  const openApp = useOpenApp();

  const node = nodeAt(path);
  const children = node.type === "directory" ? node.children : [];

  function openEntry(entry: FSNode) {
    if (entry.type === "directory") {
      setPath([...path, entry.name]);
      return;
    }
    if (entry.kind === "pdf") {
      openApp("resume");
      return;
    }
    openApp("editor", { path: [...path, entry.name] }, entry.name);
  }

  return (
    <AppShell
      toolbar={
        <Toolbar>
          <div className={styles.breadcrumb}>
            <button type="button" className={styles.crumb} onClick={() => setPath([])}>
              <FiHome />
            </button>
            {path.map((segment, i) => (
              <span key={segment} style={{ display: "flex", alignItems: "center", gap: 4 }}>
                <span className={styles.sep}>/</span>
                <button
                  type="button"
                  className={`${styles.crumb} ${i === path.length - 1 ? styles.crumbActive : ""}`}
                  onClick={() => setPath(path.slice(0, i + 1))}
                >
                  {segment}
                </button>
              </span>
            ))}
          </div>
        </Toolbar>
      }
      sidebar={
        <Sidebar width={150}>
          {QUICK_LINKS.map((link) => (
            <ListRow
              key={link.label}
              icon={<FiFolder />}
              label={link.label}
              active={link.path.join("/") === path.join("/")}
              onClick={() => setPath(link.path)}
            />
          ))}
        </Sidebar>
      }
    >
      {children.length === 0 ? (
        <div className={styles.empty}>This folder is empty.</div>
      ) : (
        <div className={styles.grid}>
          {children.map((entry) => (
            <button
              key={entry.name}
              type="button"
              className={styles.item}
              onDoubleClick={() => openEntry(entry)}
            >
              <span className={`${styles.itemIcon} ${entry.type === "file" ? styles.itemIconFile : ""}`}>
                {entry.type === "directory" ? (
                  <FiFolder />
                ) : entry.kind === "pdf" ? (
                  <FiClipboard />
                ) : (
                  <FiFileText />
                )}
              </span>
              <span className={styles.itemName}>{entry.name}</span>
            </button>
          ))}
        </div>
      )}
    </AppShell>
  );
}
