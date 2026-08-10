import type { ReactNode } from "react";
import styles from "./ListRow.module.css";

interface ListRowProps {
  icon?: ReactNode;
  label: string;
  meta?: string;
  active?: boolean;
  onClick?: () => void;
  onDoubleClick?: () => void;
}

export default function ListRow({ icon, label, meta, active, onClick, onDoubleClick }: ListRowProps) {
  return (
    <button
      type="button"
      className={`${styles.row} ${active ? styles.active : ""}`}
      onClick={onClick}
      onDoubleClick={onDoubleClick}
    >
      {icon && <span className={styles.icon}>{icon}</span>}
      <span className={styles.label}>{label}</span>
      {meta && <span className={styles.meta}>{meta}</span>}
    </button>
  );
}
