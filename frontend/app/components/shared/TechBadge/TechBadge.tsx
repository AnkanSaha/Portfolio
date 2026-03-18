import styles from "./TechBadge.module.css";

interface TechBadgeProps {
  label: string;
  variant?: "green" | "cyan" | "blue" | "default";
}

export default function TechBadge({ label, variant = "default" }: TechBadgeProps) {
  return (
    <span className={`${styles.badge} ${styles[variant]}`}>
      {label}
    </span>
  );
}
