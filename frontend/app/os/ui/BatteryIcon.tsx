function fillColor(level: number): string {
  if (level <= 20) return "var(--ankan-red-bright, #ec0101)";
  if (level <= 50) return "var(--ankan-yellow-bright, #ff8a18)";
  return "currentColor";
}

/**
 * Feather's own battery/battery-charging icons are fixed glyphs — the
 * non-charging one is just an empty outline no matter the real level, which
 * reads as "blank/broken" once wired to actual data. This draws the fill
 * proportional to the real percentage instead, with a bolt overlay when
 * charging, so level and charging state are both visible at once.
 */
export default function BatteryIcon({ level, charging, size = 15 }: { level: number; charging?: boolean; size?: number }) {
  const clamped = Math.max(0, Math.min(100, level));
  const fillWidth = (14 * clamped) / 100;

  return (
    <svg width={size} height={size} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
      <rect x="1" y="6" width="18" height="12" rx="2" ry="2" />
      <line x1="23" y1="14" x2="23" y2="10" />
      {fillWidth > 0 && <rect x="3" y="8" width={fillWidth} height="8" fill={fillColor(clamped)} stroke="none" />}
      {charging && (
        <polygon
          points="11,7.5 6.5,13 10,13 9,16.5 13.5,11 10,11"
          fill="var(--ankan-fg-bright, #fff)"
          stroke="var(--ankan-bg, #23252e)"
          strokeWidth="1"
        />
      )}
    </svg>
  );
}
