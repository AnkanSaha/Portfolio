"use client";
import { useEffect, useState } from "react";
import { AppShell, ScrollArea, Sparkline } from "../../os/ui";
import { useAppSelector } from "../../store/hooks";
import { useCpuLoad, useMemStats, useNetStats, useNetThroughput } from "./useSystemStats";
import styles from "./MonitorApp.module.css";

function meterClass(pct: number) {
  if (pct >= 80) return styles.high;
  if (pct >= 50) return styles.mid;
  return styles.low;
}

function formatUptime(ms: number) {
  const totalSec = Math.max(0, Math.floor(ms / 1000));
  const h = Math.floor(totalSec / 3600);
  const m = Math.floor((totalSec % 3600) / 60);
  const s = totalSec % 60;
  return `${h.toString().padStart(2, "0")}:${m.toString().padStart(2, "0")}:${s.toString().padStart(2, "0")}`;
}

function formatClock(date: Date) {
  return date.toTimeString().slice(0, 8);
}

function MeterBar({ pct }: { pct: number }) {
  const clamped = Math.min(100, Math.max(0, pct));
  return (
    <div className={styles.meterTrack}>
      <div className={`${styles.meterFill} ${meterClass(clamped)}`} style={{ width: `${clamped}%` }} />
    </div>
  );
}

export default function MonitorApp() {
  const cpu = useCpuLoad();
  const mem = useMemStats();
  const net = useNetStats();
  const netFlow = useNetThroughput();
  const windows = useAppSelector((s) => s.windows.windows);
  const zOrder = useAppSelector((s) => s.windows.zOrder);
  const focusedId = useAppSelector((s) => s.windows.focusedId);
  const [now, setNow] = useState(() => Date.now());
  const [cores] = useState(() => navigator.hardwareConcurrency || 1);
  const [bootedAt] = useState(() => Date.now() - performance.now());

  useEffect(() => {
    const id = setInterval(() => setNow(Date.now()), 1000);
    return () => clearInterval(id);
  }, []);

  const processes = [...zOrder].reverse().map((id) => windows[id]).filter((w): w is NonNullable<typeof w> => !!w);
  const memPct = mem.supported ? Math.round((mem.totalMB / mem.limitMB) * 100) : 0;

  return (
    <AppShell>
      <ScrollArea>
        <div className={styles.monitor}>
          <div className={styles.topBar}>
            <span className={styles.topBarHost}>ankan@ankanos</span>
            <span>up {formatUptime(now - bootedAt)}</span>
            <span>{cores} core{cores === 1 ? "" : "s"}</span>
            <span>{processes.length} proc</span>
            <span className={styles.topBarClock}>{formatClock(new Date(now))}</span>
          </div>

          <div className={`${styles.box} ${styles.boxCpu}`}>
            <div className={styles.boxTitle}>cpu</div>
            <Sparkline history={cpu.history} className={styles.spark} />
            <div className={styles.coreGrid}>
              {Array.from({ length: cores }, (_, i) => (
                <div key={i} className={styles.coreCell}>
                  <span className={styles.coreIdx}>{i + 1}</span>
                  <MeterBar pct={cpu.load} />
                  <span className={`${styles.corePct} ${meterClass(cpu.load)}`}>{cpu.load}%</span>
                </div>
              ))}
            </div>
            <div className={styles.boxFoot}>
              real main-thread load via rAF frame timing · per-core split unavailable in-browser, each lane mirrors
              the aggregate
            </div>
          </div>

          <div className={styles.midRow}>
            <div className={`${styles.box} ${styles.boxMem}`}>
              <div className={styles.boxTitle}>mem</div>
              {mem.supported ? (
                <>
                  <div className={styles.memRow}>
                    <span className={styles.memLabel}>used</span>
                    <MeterBar pct={mem.pct} />
                    <span className={meterClass(mem.pct)}>{mem.usedMB.toFixed(0)}M</span>
                  </div>
                  <div className={styles.memRow}>
                    <span className={styles.memLabel}>alloc</span>
                    <MeterBar pct={memPct} />
                    <span className={meterClass(memPct)}>{mem.totalMB.toFixed(0)}M</span>
                  </div>
                  <div className={styles.boxFoot}>js heap · {mem.limitMB.toFixed(0)}M limit</div>
                </>
              ) : (
                <div className={styles.unsupported}>performance.memory unavailable in this browser</div>
              )}
            </div>

            <div className={`${styles.box} ${styles.boxNet}`}>
              <div className={styles.boxTitle}>net</div>
              <Sparkline history={netFlow.history} max={Math.max(8, ...netFlow.history)} className={styles.spark} />
              <div className={styles.netRows}>
                <div>
                  <span className={styles.netLabel}>down</span>
                  {netFlow.downKBs.toFixed(1)} KB/s
                </div>
                <div>
                  <span className={styles.netLabel}>total</span>
                  {netFlow.totalDownMB.toFixed(2)} MB
                </div>
                <div>
                  <span className={styles.netLabel}>status</span>
                  {net.online ? "online" : "offline"}
                </div>
                {net.supported && (
                  <div>
                    <span className={styles.netLabel}>link</span>
                    {net.effectiveType || "unknown"} · {net.rttMs}ms rtt
                  </div>
                )}
              </div>
              <div className={styles.boxFoot}>real bytes transferred (Resource Timing API) · this tab only</div>
            </div>
          </div>

          <div className={`${styles.box} ${styles.boxProc}`}>
            <div className={styles.boxTitle}>proc</div>
            <div className={styles.procHead}>
              <span>pid</span>
              <span>program</span>
              <span>status</span>
              <span>uptime</span>
            </div>
            {processes.length === 0 ? (
              <div className={styles.unsupported}>no windows open</div>
            ) : (
              processes.map((w) => (
                <div key={w.id} className={`${styles.procRow} ${focusedId === w.id ? styles.procActive : ""}`}>
                  <span className={styles.procPid}>{w.id.slice(0, 6)}</span>
                  <span className={styles.procName}>{w.title}</span>
                  <span>{w.minimized ? "minimized" : focusedId === w.id ? "focused" : "running"}</span>
                  <span>{formatUptime(now - w.openedAt)}</span>
                </div>
              ))
            )}
          </div>
        </div>
      </ScrollArea>
    </AppShell>
  );
}
