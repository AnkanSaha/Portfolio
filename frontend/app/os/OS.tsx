"use client";
import { AnimatePresence, MotionConfig } from "motion/react";
import { useAppSelector } from "../store/hooks";
import { useSetting } from "../hooks/useSetting";
import MobileGate from "./gate/MobileGate";
import BootScreen from "./boot/BootScreen";
import Desktop from "./desktop/Desktop";
import Panel from "./panel/Panel";
import { default as WindowLayer } from "./window/WindowLayer";
import ShutdownOverlay from "./shutdown/ShutdownOverlay";
import { useAccentColor } from "./theme/useAccentColor";
import { useAutoFullscreen } from "./theme/useAutoFullscreen";
import { useWindowOpacity } from "./theme/useWindowOpacity";
import { useIconSize } from "./theme/useIconSize";
import { useUnderlineLinks } from "./theme/useUnderlineLinks";

export default function OS() {
  const phase = useAppSelector((s) => s.system.phase);
  const [reducedMotion] = useSetting<boolean>("reducedMotion", false);
  const desktopMounted = phase === "desktop" || phase === "shuttingDown" || phase === "halted";
  const overlayMounted = phase === "shuttingDown" || phase === "halted";
  useAccentColor();
  useAutoFullscreen();
  useWindowOpacity();
  useIconSize();
  useUnderlineLinks();

  return (
    <MotionConfig reducedMotion={reducedMotion ? "always" : "user"}>
      <MobileGate>
        {desktopMounted && (
          <>
            <Desktop />
            <Panel />
            <WindowLayer />
          </>
        )}

        <AnimatePresence>{phase === "boot" && <BootScreen />}</AnimatePresence>
        <AnimatePresence>{overlayMounted && <ShutdownOverlay />}</AnimatePresence>
      </MobileGate>
    </MotionConfig>
  );
}
