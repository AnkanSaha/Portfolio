export interface WallpaperVariantDef {
  id: string;
  color: string;
  hueRotate: number;
  accent: string;
  accentBright: string;
}

export const WALLPAPER_VARIANTS: WallpaperVariantDef[] = [
  { id: "blue", color: "#367bf0", hueRotate: 0, accent: "#367bf0", accentBright: "#277fff" },
  { id: "teal", color: "#198388", hueRotate: -50, accent: "#1a9ea3", accentBright: "#22c4ca" },
  { id: "magenta", color: "#9755b3", hueRotate: 110, accent: "#9755b3", accentBright: "#b366d1" },
  { id: "green", color: "#5ebdab", hueRotate: -95, accent: "#3fae97", accentBright: "#47d4b9" },
];

export type WallpaperVariant = (typeof WALLPAPER_VARIANTS)[number]["id"];
