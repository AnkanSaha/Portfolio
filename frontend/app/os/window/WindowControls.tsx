import { FiMinus, FiSquare, FiX } from "react-icons/fi";
import styles from "./WindowControls.module.css";

interface WindowControlsProps {
  onMinimize: () => void;
  onMaximize: () => void;
  onClose: () => void;
}

export default function WindowControls({ onMinimize, onMaximize, onClose }: WindowControlsProps) {
  return (
    <div className={styles.controls}>
      <button type="button" className={styles.btn} aria-label="Minimize" onClick={onMinimize}>
        <FiMinus />
      </button>
      <button type="button" className={styles.btn} aria-label="Maximize" onClick={onMaximize}>
        <FiSquare />
      </button>
      <button type="button" className={`${styles.btn} ${styles.close}`} aria-label="Close" onClick={onClose}>
        <FiX />
      </button>
    </div>
  );
}
