"use client";
import { useSetting } from "../../hooks/useSetting";
import { WALLPAPER_VARIANTS, type WallpaperVariant } from "./wallpaperVariants";
import styles from "./Wallpaper.module.css";

export default function Wallpaper() {
  const [variant] = useSetting<WallpaperVariant>("wallpaperVariant", "blue");
  const hueRotate = WALLPAPER_VARIANTS.find((v) => v.id === variant)?.hueRotate ?? 0;

  return <div className={styles.wallpaper} style={{ filter: `hue-rotate(${hueRotate}deg)` }} />;
}
