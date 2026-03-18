import Link from "next/link";
import styles from "./GlowButton.module.css";

interface GlowButtonProps {
  children: React.ReactNode;
  href?: string;
  onClick?: () => void;
  variant?: "primary" | "secondary" | "outline";
  type?: "button" | "submit";
  disabled?: boolean;
  external?: boolean;
}

export default function GlowButton({
  children,
  href,
  onClick,
  variant = "primary",
  type = "button",
  disabled,
  external,
}: GlowButtonProps) {
  const cls = `${styles.btn} ${styles[variant]}`;

  if (href) {
    if (external) {
      return (
        <a href={href} className={cls} target="_blank" rel="noopener noreferrer">
          {children}
        </a>
      );
    }
    return <Link href={href} className={cls}>{children}</Link>;
  }

  return (
    <button className={cls} onClick={onClick} type={type} disabled={disabled}>
      {children}
    </button>
  );
}
