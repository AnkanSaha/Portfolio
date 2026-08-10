"use client";
import { useEffect } from "react";
import { useSetting } from "../../hooks/useSetting";
import { WALLPAPER_VARIANTS, type WallpaperVariant } from "../desktop/wallpaperVariants";

export function useAccentColor() {
  const [variant] = useSetting<WallpaperVariant>("wallpaperVariant", "blue");

  useEffect(() => {
    const def = WALLPAPER_VARIANTS.find((v) => v.id === variant) ?? WALLPAPER_VARIANTS[0];
    const root = document.documentElement.style;
    root.setProperty("--kali-blue", def.accent);
    root.setProperty("--kali-blue-bright", def.accentBright);
    return () => {
      root.removeProperty("--kali-blue");
      root.removeProperty("--kali-blue-bright");
    };
  }, [variant]);
}
