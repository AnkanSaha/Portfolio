"use client";
import { useEffect, useRef, useState } from "react";
import { FiChevronLeft, FiChevronRight } from "react-icons/fi";
import { AppShell, ScrollArea } from "../../os/ui";
import styles from "./CalendarApp.module.css";

const WEEKDAYS = ["Sun", "Mon", "Tue", "Wed", "Thu", "Fri", "Sat"];
const MONTHS = [
  "January", "February", "March", "April", "May", "June",
  "July", "August", "September", "October", "November", "December",
];

function pad(n: number, len = 2) {
  return n.toString().padStart(len, "0");
}

function useLiveClock() {
  const [now, setNow] = useState(() => new Date());
  const [micros, setMicros] = useState(0);
  const raf = useRef(0);

  useEffect(() => {
    function tick() {
      setNow(new Date());
      setMicros(Math.floor((performance.now() % 1) * 1000));
      raf.current = requestAnimationFrame(tick);
    }
    raf.current = requestAnimationFrame(tick);
    return () => cancelAnimationFrame(raf.current);
  }, []);

  return { now, micros };
}

function buildMonthGrid(year: number, month: number): (number | null)[][] {
  const firstDay = new Date(year, month, 1).getDay();
  const daysInMonth = new Date(year, month + 1, 0).getDate();
  const cells: (number | null)[] = [...Array(firstDay).fill(null), ...Array.from({ length: daysInMonth }, (_, i) => i + 1)];
  while (cells.length % 7 !== 0) cells.push(null);

  const weeks: (number | null)[][] = [];
  for (let i = 0; i < cells.length; i += 7) weeks.push(cells.slice(i, i + 7));
  return weeks;
}

export default function CalendarApp() {
  const { now, micros } = useLiveClock();
  const today = new Date();
  const [viewYear, setViewYear] = useState(today.getFullYear());
  const [viewMonth, setViewMonth] = useState(today.getMonth());

  const weeks = buildMonthGrid(viewYear, viewMonth);
  const isCurrentMonth = viewYear === today.getFullYear() && viewMonth === today.getMonth();

  function prevMonth() {
    if (viewMonth === 0) {
      setViewMonth(11);
      setViewYear((y) => y - 1);
    } else {
      setViewMonth((m) => m - 1);
    }
  }

  function nextMonth() {
    if (viewMonth === 11) {
      setViewMonth(0);
      setViewYear((y) => y + 1);
    } else {
      setViewMonth((m) => m + 1);
    }
  }

  return (
    <AppShell>
      <ScrollArea>
        <div className={styles.calendar}>
          <div className={styles.clock}>
            <div className={styles.date}>
              {pad(now.getDate())} / {pad(now.getMonth() + 1)} / {now.getFullYear()}
            </div>
            <div className={styles.time}>
              {pad(now.getHours())}:{pad(now.getMinutes())}:{pad(now.getSeconds())}
              <span className={styles.sub}>:{pad(now.getMilliseconds(), 3)}</span>
              <span className={styles.sub2}>:{pad(micros, 3)}μs</span>
            </div>
          </div>

          <div className={styles.monthBar}>
            <button type="button" className={styles.navBtn} onClick={prevMonth} aria-label="Previous month">
              <FiChevronLeft />
            </button>
            <div className={styles.monthLabel}>
              {MONTHS[viewMonth]} {viewYear}
            </div>
            <button type="button" className={styles.navBtn} onClick={nextMonth} aria-label="Next month">
              <FiChevronRight />
            </button>
          </div>

          <div className={styles.grid}>
            {WEEKDAYS.map((d) => (
              <div key={d} className={styles.weekday}>
                {d}
              </div>
            ))}
            {weeks.flatMap((week, wi) =>
              week.map((day, di) => {
                const isToday = isCurrentMonth && day === today.getDate();
                return (
                  <div key={`${wi}-${di}`} className={`${styles.cell} ${isToday ? styles.today : ""}`}>
                    {day ?? ""}
                  </div>
                );
              })
            )}
          </div>
        </div>
      </ScrollArea>
    </AppShell>
  );
}
