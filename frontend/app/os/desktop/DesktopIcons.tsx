"use client";
import { useState } from "react";
import { APP_REGISTRY, APP_ORDER } from "../../apps/registry";
import { useOpenApp } from "../window/useOpenApp";
import { useSetting } from "../../hooks/useSetting";
import { ICON_SIZE_PRESETS, type IconSize } from "../theme/iconSizePresets";
import DesktopIcon from "./DesktopIcon";
import styles from "./DesktopIcons.module.css";

export default function DesktopIcons() {
  const [selected, setSelected] = useState<string | null>(null);
  const [showIcons] = useSetting<boolean>("showDesktopIcons", true);
  const [iconSize] = useSetting<IconSize>("desktopIconSize", "medium");
  const openApp = useOpenApp();
  const icons = APP_ORDER.map((id) => APP_REGISTRY[id]).filter((app) => app.desktopIcon);

  if (!showIcons) return null;

  return (
    <div className={styles.grid} onClick={() => setSelected(null)}>
      {icons.map((app) => (
        <DesktopIcon
          key={app.id}
          label={app.title}
          icon={app.icon}
          iconPx={ICON_SIZE_PRESETS[iconSize].svg}
          selected={selected === app.id}
          onSelect={() => setSelected(app.id)}
          onOpen={() => openApp(app.id)}
        />
      ))}
    </div>
  );
}
