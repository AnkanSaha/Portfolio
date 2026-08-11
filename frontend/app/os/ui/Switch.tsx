import styles from "./Switch.module.css";

export default function Switch({ on, onToggle }: { on: boolean; onToggle: () => void }) {
  return (
    <button type="button" className={`${styles.switch} ${on ? styles.switchOn : ""}`} onClick={onToggle} aria-pressed={on}>
      <span className={`${styles.knob} ${on ? styles.knobOn : ""}`} />
    </button>
  );
}
