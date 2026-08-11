"use client";
import { useSetting } from "../../hooks/useSetting";
import { WALLPAPER_VARIANTS, type WallpaperVariant } from "./wallpaperVariants";
import Earth3D from "./Earth3D";
import styles from "./Wallpaper.module.css";

export default function Wallpaper() {
  const [variant] = useSetting<WallpaperVariant>("wallpaperVariant", "blue");
  const hueRotate = WALLPAPER_VARIANTS.find((v) => v.id === variant)?.hueRotate ?? 0;

  return (
    <div className={styles.wallpaper}>
      {/* Theme-tintable abstract background — hue-rotate here only. */}
      <div className={styles.background} style={{ filter: `hue-rotate(${hueRotate}deg)` }} />
      {/* Real 3D globe + title, kept untinted so the Earth is never recolored. */}
      <div className={styles.compose}>
        <Earth3D />
        <div className={styles.title}>ANKAN OS</div>
      </div>
    </div>
  );
}
