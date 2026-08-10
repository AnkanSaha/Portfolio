import type { ComponentType } from "react";
import styles from "./DesktopIcon.module.css";

interface DesktopIconProps {
  label: string;
  icon: ComponentType<{ size?: number }>;
  iconPx: number;
  selected: boolean;
  onSelect: () => void;
  onOpen: () => void;
}

export default function DesktopIcon({ label, icon: Icon, iconPx, selected, onSelect, onOpen }: DesktopIconProps) {
  return (
    <button
      type="button"
      className={`${styles.icon} ${selected ? styles.selected : ""}`}
      onClick={(e) => {
        e.stopPropagation();
        onSelect();
      }}
      onDoubleClick={(e) => {
        e.stopPropagation();
        onOpen();
      }}
    >
      <span className={styles.glyph}>
        <Icon size={iconPx} />
      </span>
      <span className={styles.label}>{label}</span>
    </button>
  );
}
