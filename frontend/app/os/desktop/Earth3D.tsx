"use client";
import { useCallback, useRef } from "react";
import dynamic from "next/dynamic";
import type { GlobeMethods } from "react-globe.gl";
import styles from "./Wallpaper.module.css";

// react-globe.gl touches `window` at module load (WebGL feature detection),
// which crashes Next.js SSR — must be loaded client-only.
const Globe = dynamic(() => import("react-globe.gl"), { ssr: false });

const GLOBE_SIZE = 620;

/** Real 3D globe via react-globe.gl (three.js under the hood): genuine
 * sphere geometry, lighting, and an atmosphere glow — not a hand-rolled
 * scene. Auto-rotates through its OrbitControls; interaction is disabled
 * since this is a background decoration, not a widget. */
export default function Earth3D() {
  const globeRef = useRef<GlobeMethods | undefined>(undefined);

  const handleReady = useCallback(() => {
    const controls = globeRef.current?.controls();
    if (!controls) return;
    controls.autoRotate = !window.matchMedia("(prefers-reduced-motion: reduce)").matches;
    controls.autoRotateSpeed = 1.1;
    controls.enableZoom = false;
    controls.enablePan = false;
    controls.enableRotate = false;
  }, []);

  return (
    <div className={styles.earthCanvas}>
      <Globe
        ref={globeRef}
        width={GLOBE_SIZE}
        height={GLOBE_SIZE}
        backgroundColor="rgba(0,0,0,0)"
        globeImageUrl="/os/earth-texture.jpg"
        showAtmosphere
        atmosphereColor="#4fa8ff"
        atmosphereAltitude={0.2}
        onGlobeReady={handleReady}
      />
    </div>
  );
}
