"use client";
import { useEffect, useRef, useState } from "react";

const HISTORY_LEN = 48;
const SAMPLE_MS = 500;

function pushHistory(history: number[], value: number): number[] {
  const next = history.length >= HISTORY_LEN ? history.slice(1) : history.slice();
  next.push(value);
  return next;
}

export interface CpuStats {
  load: number;
  history: number[];
}

/**
 * No OS-level CPU counter exists in a browser sandbox. This measures the
 * real thing a browser *can* see: how long the main thread takes between
 * animation frames. A busy main thread (GC, layout, other tab work) delays
 * rAF past the 16.7ms/60fps budget — that delay is genuine, not random.
 */
export function useCpuLoad(): CpuStats {
  const [load, setLoad] = useState(0);
  const [history, setHistory] = useState<number[]>([]);

  useEffect(() => {
    let raf = 0;
    let ema = 0;
    let last = performance.now();
    let lastSample = last;

    function tick(now: number) {
      const delta = now - last;
      last = now;
      const fps = delta > 0 ? Math.min(1000 / delta, 60) : 60;
      const instant = 100 * (1 - fps / 60);
      ema = ema * 0.85 + instant * 0.15;

      if (now - lastSample >= SAMPLE_MS) {
        lastSample = now;
        const rounded = Math.round(Math.min(100, Math.max(0, ema)));
        setLoad(rounded);
        setHistory((h) => pushHistory(h, rounded));
      }
      raf = requestAnimationFrame(tick);
    }
    raf = requestAnimationFrame(tick);
    return () => cancelAnimationFrame(raf);
  }, []);

  return { load, history };
}

interface PerformanceMemory {
  usedJSHeapSize: number;
  totalJSHeapSize: number;
  jsHeapSizeLimit: number;
}

export interface MemStats {
  supported: boolean;
  usedMB: number;
  totalMB: number;
  limitMB: number;
  pct: number;
  history: number[];
}

/** Real JS heap usage — Chromium's non-standard performance.memory. No
 * fallback fabrication on Firefox/Safari: stats.supported stays false. */
export function useMemStats(): MemStats {
  const [stats, setStats] = useState<MemStats>({
    supported: false,
    usedMB: 0,
    totalMB: 0,
    limitMB: 0,
    pct: 0,
    history: [],
  });

  useEffect(() => {
    const memory = (performance as Performance & { memory?: PerformanceMemory }).memory;
    if (!memory) return;

    const id = setInterval(() => {
      const usedMB = memory.usedJSHeapSize / 1048576;
      const totalMB = memory.totalJSHeapSize / 1048576;
      const limitMB = memory.jsHeapSizeLimit / 1048576;
      const pct = Math.round((usedMB / limitMB) * 100);
      setStats((s) => ({ supported: true, usedMB, totalMB, limitMB, pct, history: pushHistory(s.history, pct) }));
    }, 1000);
    return () => clearInterval(id);
  }, []);

  return stats;
}

interface NetworkInformation extends EventTarget {
  effectiveType: string;
  downlink: number;
  rtt: number;
  saveData: boolean;
}

export interface NetStats {
  supported: boolean;
  online: boolean;
  effectiveType: string;
  downlinkMbps: number;
  rttMs: number;
}

/** Real navigator.connection (Chromium/Android only) + real navigator.onLine. */
export function useNetStats(): NetStats {
  const [stats, setStats] = useState<NetStats>({ supported: false, online: true, effectiveType: "", downlinkMbps: 0, rttMs: 0 });
  const connRef = useRef<NetworkInformation | undefined>(undefined);

  useEffect(() => {
    const conn = (navigator as Navigator & { connection?: NetworkInformation }).connection;
    connRef.current = conn;

    function read() {
      setStats({
        supported: !!conn,
        online: navigator.onLine,
        effectiveType: conn?.effectiveType ?? "",
        downlinkMbps: conn?.downlink ?? 0,
        rttMs: conn?.rtt ?? 0,
      });
    }
    read();
    conn?.addEventListener("change", read);
    window.addEventListener("online", read);
    window.addEventListener("offline", read);
    return () => {
      conn?.removeEventListener("change", read);
      window.removeEventListener("online", read);
      window.removeEventListener("offline", read);
    };
  }, []);

  return stats;
}

export interface NetThroughput {
  downKBs: number;
  totalDownMB: number;
  history: number[];
}

/**
 * Real bytes transferred, via the Resource Timing API — every request this
 * tab actually makes (scripts, fonts, XHR/fetch, images) reports a real
 * transferSize. Sampled once a second as a KB/s delta. This is this tab's
 * own traffic, not system-wide bandwidth, and there's no meaningful upload
 * side to measure (the page doesn't send bulk data), so only download is
 * real here — genuine numbers, just a narrower slice than a native monitor.
 */
export function useNetThroughput(): NetThroughput {
  const [stats, setStats] = useState<NetThroughput>({ downKBs: 0, totalDownMB: 0, history: [] });
  const totalRef = useRef(0);

  useEffect(() => {
    if (typeof PerformanceObserver === "undefined") return;

    function addEntries(entries: PerformanceEntryList) {
      for (const entry of entries) {
        totalRef.current += (entry as PerformanceResourceTiming).transferSize ?? 0;
      }
    }
    addEntries(performance.getEntriesByType("resource"));

    const observer = new PerformanceObserver((list) => addEntries(list.getEntries()));
    observer.observe({ type: "resource", buffered: false });

    let lastTotal = totalRef.current;
    const id = setInterval(() => {
      const total = totalRef.current;
      const deltaKB = (total - lastTotal) / 1024;
      lastTotal = total;
      setStats((s) => ({
        downKBs: Math.round(deltaKB * 10) / 10,
        totalDownMB: total / 1048576,
        history: pushHistory(s.history, deltaKB),
      }));
    }, 1000);

    return () => {
      observer.disconnect();
      clearInterval(id);
    };
  }, []);

  return stats;
}
