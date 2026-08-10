import { AppShell, Toolbar } from "../../os/ui";
import { resolvePath } from "../../data/fileSystem";
import type { AppComponentProps } from "../types";
import styles from "./EditorApp.module.css";

export default function EditorApp({ params }: AppComponentProps) {
  const path = (params?.path as string[] | undefined) ?? [];
  const node = path.length > 0 ? resolvePath(path) : undefined;
  const content = node?.type === "file" ? node.content : null;
  const lines = content?.split("\n") ?? [];

  return (
    <AppShell
      toolbar={
        <Toolbar>
          <span className={styles.filename}>{path.length ? path.join("/") : "untitled"}</span>
        </Toolbar>
      }
    >
      {content === null ? (
        <div className={styles.empty}>No file open. Double-click a text file in Files to view it here.</div>
      ) : (
        <div className={styles.body}>
          <div className={styles.gutter}>
            {lines.map((_, i) => (
              <div key={i}>{i + 1}</div>
            ))}
          </div>
          <div className={styles.content}>{content}</div>
        </div>
      )}
    </AppShell>
  );
}
