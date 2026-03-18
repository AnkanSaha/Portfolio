import styles from "./CodeBlock.module.css";

interface CodeBlockProps {
  lines: Array<{ prefix?: string; content: string; color?: "green" | "cyan" | "blue" | "muted" | "white" }>;
  title?: string;
}

export default function CodeBlock({ lines, title }: CodeBlockProps) {
  return (
    <div className={styles.wrapper}>
      <div className={styles.titleBar}>
        <span className={styles.dot} data-color="red" />
        <span className={styles.dot} data-color="yellow" />
        <span className={styles.dot} data-color="green" />
        {title && <span className={styles.title}>{title}</span>}
      </div>
      <pre className={styles.code}>
        {lines.map((line, i) => (
          <div key={i} className={styles.line}>
            <span className={styles.lineNum}>{String(i + 1).padStart(2, "0")}</span>
            {line.prefix && <span className={styles.prefix}>{line.prefix}</span>}
            <span className={`${styles.content} ${line.color ? styles[line.color] : ""}`}>
              {line.content}
            </span>
          </div>
        ))}
      </pre>
    </div>
  );
}
