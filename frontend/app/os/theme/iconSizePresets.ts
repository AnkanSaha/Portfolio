export type IconSize = "small" | "medium" | "large";

export const ICON_SIZE_PRESETS: Record<IconSize, { box: string; glyph: string; font: string; svg: number }> = {
  small: { box: "68px", glyph: "32px", font: "0.68rem", svg: 16 },
  medium: { box: "84px", glyph: "40px", font: "0.74rem", svg: 20 },
  large: { box: "104px", glyph: "50px", font: "0.82rem", svg: 24 },
};
