import { FiX, FiPlus } from "react-icons/fi";
import { tabLabel } from "./browserUtils";
import styles from "./BrowserTabStrip.module.css";

export interface BrowserTabSummary {
  id: string;
  url: string;
}

interface BrowserTabStripProps {
  tabs: BrowserTabSummary[];
  activeTabId: string;
  onSelect: (id: string) => void;
  onClose: (id: string) => void;
  onNew: () => void;
}

export default function BrowserTabStrip({ tabs, activeTabId, onSelect, onClose, onNew }: BrowserTabStripProps) {
  return (
    <div className={styles.strip}>
      {tabs.map((tab) => (
        <button
          key={tab.id}
          type="button"
          className={`${styles.tab} ${tab.id === activeTabId ? styles.tabActive : ""}`}
          onClick={() => onSelect(tab.id)}
        >
          <span className={styles.tabLabel}>{tabLabel(tab.url)}</span>
          {tabs.length > 1 && (
            <span
              className={styles.closeBtn}
              onClick={(e) => {
                e.stopPropagation();
                onClose(tab.id);
              }}
            >
              <FiX size={11} />
            </span>
          )}
        </button>
      ))}
      <button type="button" className={styles.newTabBtn} onClick={onNew} aria-label="New tab">
        <FiPlus size={14} />
      </button>
    </div>
  );
}
