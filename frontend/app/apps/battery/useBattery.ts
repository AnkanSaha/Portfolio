"use client";
import { useEffect, useState } from "react";

const HISTORY_LEN = 60;
const POLL_MS = 2000;

interface BatteryManager extends EventTarget {
  charging: boolean;
  level: number;
  chargingTime: number;
  dischargingTime: number;
}

export interface BatteryStats {
  supported: boolean;
  charging: boolean;
  level: number;
  chargingTime: number;
  dischargingTime: number;
  history: number[];
}

const initialStats: BatteryStats = {
  supported: false,
  charging: false,
  level: 0,
  chargingTime: 0,
  dischargingTime: 0,
  history: [],
};

const EVENTS = ["levelchange", "chargingchange", "chargingtimechange", "dischargingtimechange"] as const;

/**
 * Real navigator.getBattery() — level, charging state, and time estimates
 * straight from the device. Only Chromium exposes this (Firefox and Safari
 * dropped it over fingerprinting concerns), so stats.supported stays false
 * everywhere else rather than faking a percentage.
 *
 * The Battery Status API fires charge-time and discharge-time updates as
 * their own events, separate from chargingchange — missing those meant the
 * "time to full"/"time remaining" fields only ever caught up on the next
 * poll tick instead of updating the instant the browser recomputed them.
 */
export function useBattery(): BatteryStats {
  const [stats, setStats] = useState<BatteryStats>(initialStats);

  useEffect(() => {
    const getBattery = (navigator as Navigator & { getBattery?: () => Promise<BatteryManager> }).getBattery;
    if (!getBattery) return;

    let battery: BatteryManager | null = null;
    let cancelled = false;

    function read() {
      if (!battery) return;
      const pct = Math.round(battery.level * 100);
      setStats((s) => ({
        supported: true,
        charging: battery!.charging,
        level: pct,
        chargingTime: battery!.chargingTime,
        dischargingTime: battery!.dischargingTime,
        history: s.history.length >= HISTORY_LEN ? [...s.history.slice(1), pct] : [...s.history, pct],
      }));
    }

    getBattery.call(navigator).then((b) => {
      if (cancelled) return;
      battery = b;
      read();
      for (const evt of EVENTS) b.addEventListener(evt, read);
    });

    const id = setInterval(read, POLL_MS);

    return () => {
      cancelled = true;
      clearInterval(id);
      if (battery) for (const evt of EVENTS) battery.removeEventListener(evt, read);
    };
  }, []);

  return stats;
}
