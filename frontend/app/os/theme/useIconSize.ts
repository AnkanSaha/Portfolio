"use client";
import { useEffect } from "react";
import { useSetting } from "../../hooks/useSetting";
import { ICON_SIZE_PRESETS, type IconSize } from "./iconSizePresets";

export function useIconSize() {
  const [size] = useSetting<IconSize>("desktopIconSize", "medium");

  useEffect(() => {
    const preset = ICON_SIZE_PRESETS[size];
    const root = document.documentElement.style;
    root.setProperty("--icon-box-size", preset.box);
    root.setProperty("--icon-glyph-size", preset.glyph);
    root.setProperty("--icon-font-size", preset.font);
    return () => {
      root.removeProperty("--icon-box-size");
      root.removeProperty("--icon-glyph-size");
      root.removeProperty("--icon-font-size");
    };
  }, [size]);
}
