import type { WindowGeometry } from "../../store/slices/windowsSlice";
import { PANEL_HEIGHT, SNAP_THRESHOLD } from "../constants";

export type SnapZone = "left" | "right" | "top" | null;

export function getMaximizedRect(): WindowGeometry {
  if (typeof window === "undefined") return { x: 0, y: PANEL_HEIGHT, w: 0, h: 0 };
  return {
    x: 0,
    y: PANEL_HEIGHT,
    w: window.innerWidth,
    h: window.innerHeight - PANEL_HEIGHT,
  };
}

export function detectSnapZone(pointerX: number, pointerY: number): SnapZone {
  if (typeof window === "undefined") return null;
  if (pointerY <= PANEL_HEIGHT + SNAP_THRESHOLD) return "top";
  if (pointerX <= SNAP_THRESHOLD) return "left";
  if (pointerX >= window.innerWidth - SNAP_THRESHOLD) return "right";
  return null;
}

export function getSnapRect(zone: SnapZone): WindowGeometry | null {
  if (typeof window === "undefined" || !zone) return null;
  const fullHeight = window.innerHeight - PANEL_HEIGHT;
  const halfWidth = window.innerWidth / 2;

  switch (zone) {
    case "top":
      return getMaximizedRect();
    case "left":
      return { x: 0, y: PANEL_HEIGHT, w: halfWidth, h: fullHeight };
    case "right":
      return { x: halfWidth, y: PANEL_HEIGHT, w: halfWidth, h: fullHeight };
    default:
      return null;
  }
}

export function clampToViewport(geometry: WindowGeometry): WindowGeometry {
  if (typeof window === "undefined") return geometry;
  const maxX = Math.max(0, window.innerWidth - 120);
  const maxY = Math.max(PANEL_HEIGHT, window.innerHeight - 60);
  return {
    ...geometry,
    x: Math.min(Math.max(geometry.x, -geometry.w + 160), maxX),
    y: Math.min(Math.max(geometry.y, PANEL_HEIGHT), maxY),
  };
}
