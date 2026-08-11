import styles from "./Sparkline.module.css";

export default function Sparkline({
  history,
  max = 100,
  className,
}: {
  history: number[];
  max?: number;
  className?: string;
}) {
  const cls = `${styles.spark} ${className ?? ""}`;
  if (history.length < 2) return <svg className={cls} viewBox="0 0 100 32" preserveAspectRatio="none" />;
  const step = 100 / (history.length - 1);
  const linePoints = history.map((v, i) => `${i * step},${32 - (Math.min(v, max) / max) * 32}`).join(" ");
  const areaPoints = `0,32 ${linePoints} 100,32`;
  return (
    <svg className={cls} viewBox="0 0 100 32" preserveAspectRatio="none">
      <polyline points={areaPoints} className={styles.fill} />
      <polyline points={linePoints} className={styles.line} />
    </svg>
  );
}
