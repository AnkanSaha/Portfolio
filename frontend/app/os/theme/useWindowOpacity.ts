"use client";
import { useEffect } from "react";
import { useSetting } from "../../hooks/useSetting";

export function useWindowOpacity() {
  const [opacity] = useSetting<number>("windowOpacity", 100);

  useEffect(() => {
    const root = document.documentElement.style;
    root.setProperty("--window-opacity", String(opacity / 100));
    return () => {
      root.removeProperty("--window-opacity");
    };
  }, [opacity]);
}
