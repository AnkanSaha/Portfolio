"use client";
import { useEffect, useState } from "react";

const HISTORY_LEN = 60;

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

/**
 * Real navigator.getBattery() — level, charging state, and time estimates
 * straight from the device. Only Chromium exposes this (Firefox and Safari
 * dropped it over fingerprinting concerns), so stats.supported stays false
 * everywhere else rather than faking a percentage.
 */
export function useBattery(): BatteryStats {
  const [stats, setStats] = useState<BatteryStats>(initialStats);

  useEffect(() => {
    const getBattery = (navigator as Navigator & { getBattery?: () => Promise<BatteryManager> }).getBattery;
    if (!getBattery) return;

    let battery: BatteryManager | null = null;
    let cancelled = false;

    function read(b: BatteryManager) {
      const pct = Math.round(b.level * 100);
      setStats((s) => ({
        supported: true,
        charging: b.charging,
        level: pct,
        chargingTime: b.chargingTime,
        dischargingTime: b.dischargingTime,
        history: s.history.length >= HISTORY_LEN ? [...s.history.slice(1), pct] : [...s.history, pct],
      }));
    }

    getBattery.call(navigator).then((b) => {
      if (cancelled) return;
      battery = b;
      read(b);
      b.addEventListener("levelchange", () => read(b));
      b.addEventListener("chargingchange", () => read(b));
    });

    const id = setInterval(() => {
      if (battery) read(battery);
    }, 5000);

    return () => {
      cancelled = true;
      clearInterval(id);
    };
  }, []);

  return stats;
}
