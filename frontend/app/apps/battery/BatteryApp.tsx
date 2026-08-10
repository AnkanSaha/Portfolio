"use client";
import { FiBattery } from "react-icons/fi";
import { AppShell, ScrollArea, Sparkline, BatteryIcon } from "../../os/ui";
import { useBattery } from "./useBattery";
import styles from "./BatteryApp.module.css";

function formatDuration(seconds: number): string {
  if (!Number.isFinite(seconds) || seconds <= 0) return "—";
  const h = Math.floor(seconds / 3600);
  const m = Math.round((seconds % 3600) / 60);
  return h > 0 ? `${h}h ${m}m` : `${m}m`;
}

function levelClass(level: number, styles: Record<string, string>) {
  if (level <= 20) return styles.low;
  if (level <= 50) return styles.mid;
  return styles.high;
}

export default function BatteryApp() {
  const battery = useBattery();

  if (!battery.supported) {
    return (
      <AppShell>
        <ScrollArea>
          <div className={styles.unsupported}>
            <FiBattery className={styles.unsupportedIcon} />
            <div className={styles.unsupportedTitle}>Battery status unavailable</div>
            <div className={styles.unsupportedText}>
              This browser doesn&apos;t expose the Battery Status API (Firefox and Safari removed it over
              fingerprinting concerns — only Chromium-based browsers still support it).
            </div>
          </div>
        </ScrollArea>
      </AppShell>
    );
  }

  return (
    <AppShell>
      <ScrollArea>
        <div className={styles.battery}>
          <div className={styles.headline}>
            <div className={`${styles.level} ${levelClass(battery.level, styles)}`}>{battery.level}%</div>
            <div className={styles.status}>
              <BatteryIcon level={battery.level} charging={battery.charging} size={18} />
              {battery.charging ? "Charging" : "On battery"}
            </div>
          </div>

          <Sparkline history={battery.history} className={levelClass(battery.level, styles)} />

          <div className={styles.grid}>
            <div className={styles.row}>
              <span className={styles.label}>Charge level</span>
              <span>{battery.level}%</span>
            </div>
            <div className={styles.row}>
              <span className={styles.label}>State</span>
              <span>{battery.charging ? "Charging" : "Discharging"}</span>
            </div>
            <div className={styles.row}>
              <span className={styles.label}>Time to full</span>
              <span>{battery.charging ? formatDuration(battery.chargingTime) : "—"}</span>
            </div>
            <div className={styles.row}>
              <span className={styles.label}>Time remaining</span>
              <span>{!battery.charging ? formatDuration(battery.dischargingTime) : "—"}</span>
            </div>
          </div>

          <div className={styles.footnote}>
            Real data from navigator.getBattery(), updated the instant the browser reports a change. Browsers
            deliberately throttle how often that happens (rounded level, infrequent time estimates) to stop battery
            drain patterns from being used to fingerprint you — that throttling happens below the page, so no amount
            of polling here makes it more real-time.
          </div>
        </div>
      </ScrollArea>
    </AppShell>
  );
}
