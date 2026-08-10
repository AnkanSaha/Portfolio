import styles from "./WhiskerMenuCategories.module.css";

export const CATEGORIES = ["all", "portfolio", "utility", "system"] as const;
export type Category = (typeof CATEGORIES)[number];

interface WhiskerMenuCategoriesProps {
  active: Category;
  onChange: (c: Category) => void;
}

export default function WhiskerMenuCategories({ active, onChange }: WhiskerMenuCategoriesProps) {
  return (
    <div className={styles.tabs}>
      {CATEGORIES.map((c) => (
        <button
          key={c}
          type="button"
          className={`${styles.tab} ${active === c ? styles.active : ""}`}
          onClick={() => onChange(c)}
        >
          {c}
        </button>
      ))}
    </div>
  );
}
