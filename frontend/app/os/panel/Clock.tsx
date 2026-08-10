"use client";
import { useEffect, useState } from "react";
import { useOpenApp } from "../window/useOpenApp";

export default function Clock() {
  const [now, setNow] = useState<Date | null>(null);
  const openApp = useOpenApp();

  useEffect(() => {
    setNow(new Date());
    const id = setInterval(() => setNow(new Date()), 1000);
    return () => clearInterval(id);
  }, []);

  if (!now) return null;

  const time = now.toLocaleTimeString([], { hour: "2-digit", minute: "2-digit" });
  const date = now.toLocaleDateString([], { weekday: "short", day: "numeric", month: "short" });

  return (
    <button
      type="button"
      onClick={() => openApp("calendar")}
      style={{
        fontFamily: "var(--font-mono)",
        fontSize: "0.78rem",
        color: "var(--ankan-fg)",
        padding: "0 4px",
      }}
    >
      {date} {time}
    </button>
  );
}
