"use client";
import { useState } from "react";
import { FiDroplet, FiTerminal, FiMonitor, FiEye, FiInfo, FiRotateCcw } from "react-icons/fi";
import { AppShell, Sidebar, ListRow, ScrollArea } from "../../os/ui";
import { useSetting } from "../../hooks/useSetting";
import { WALLPAPER_VARIANTS, type WallpaperVariant } from "../../os/desktop/wallpaperVariants";
import { ICON_SIZE_PRESETS, type IconSize } from "../../os/theme/iconSizePresets";
import { portfolioData } from "../../data/portfolioData";
import styles from "./SettingsApp.module.css";

const CATEGORIES = [
  { id: "appearance", label: "Appearance", icon: FiDroplet },
  { id: "terminal", label: "Terminal", icon: FiTerminal },
  { id: "desktop", label: "Desktop", icon: FiMonitor },
  { id: "accessibility", label: "Accessibility", icon: FiEye },
  { id: "about", label: "About", icon: FiInfo },
] as const;

type Category = (typeof CATEGORIES)[number]["id"];

function Switch({ on, onToggle }: { on: boolean; onToggle: () => void }) {
  return (
    <button
      type="button"
      className={`${styles.switch} ${on ? styles.switchOn : ""}`}
      onClick={onToggle}
      aria-pressed={on}
    >
      <span className={`${styles.knob} ${on ? styles.knobOn : ""}`} />
    </button>
  );
}

export default function SettingsApp() {
  const [category, setCategory] = useState<Category>("appearance");

  const [wallpaper, setWallpaper] = useSetting<WallpaperVariant>("wallpaperVariant", "blue");
  const [windowOpacity, setWindowOpacity] = useSetting<number>("windowOpacity", 100);
  const [terminalOpacity, setTerminalOpacity] = useSetting<number>("terminalOpacity", 95);
  const [fontSize, setFontSize] = useSetting<number>("terminalFontSize", 14);
  const [showDesktopIcons, setShowDesktopIcons] = useSetting<boolean>("showDesktopIcons", true);
  const [iconSize, setIconSize] = useSetting<IconSize>("desktopIconSize", "medium");
  const [panelAutoHide, setPanelAutoHide] = useSetting<boolean>("panelAutoHide", false);
  const [reducedMotion, setReducedMotion] = useSetting<boolean>("reducedMotion", false);
  const [underlineLinks, setUnderlineLinks] = useSetting<boolean>("underlineLinks", false);

  function resetAllSettings() {
    Object.keys(localStorage)
      .filter((key) => key.startsWith("os:"))
      .forEach((key) => localStorage.removeItem(key));
    window.location.reload();
  }

  return (
    <AppShell
      sidebar={
        <Sidebar width={160}>
          {CATEGORIES.map((c) => (
            <ListRow
              key={c.id}
              icon={<c.icon />}
              label={c.label}
              active={category === c.id}
              onClick={() => setCategory(c.id)}
            />
          ))}
        </Sidebar>
      }
    >
      <ScrollArea>
        {category === "appearance" && (
          <>
            <div className={styles.panelTitle}>Appearance</div>
            <div className={styles.section}>
              <div className={styles.sectionTitle}>{"// Accent Color"}</div>
              <div className={styles.swatchRow}>
                {WALLPAPER_VARIANTS.map((v) => (
                  <button
                    key={v.id}
                    type="button"
                    aria-label={v.id}
                    className={`${styles.swatch} ${wallpaper === v.id ? styles.swatchActive : ""}`}
                    style={{ background: v.color }}
                    onClick={() => setWallpaper(v.id)}
                  />
                ))}
              </div>
            </div>
            <div className={styles.section}>
              <div className={styles.sectionTitle}>{"// Window Transparency"}</div>
              <div className={styles.row}>
                <span className={styles.rowLabel}>All windows</span>
                <input
                  type="range"
                  className={styles.slider}
                  min={70}
                  max={100}
                  value={windowOpacity}
                  onChange={(e) => setWindowOpacity(Number(e.target.value))}
                />
                <span className={styles.rowValue}>{windowOpacity}%</span>
              </div>
            </div>
          </>
        )}

        {category === "terminal" && (
          <>
            <div className={styles.panelTitle}>Terminal</div>
            <div className={styles.section}>
              <div className={styles.row}>
                <span className={styles.rowLabel}>Background opacity</span>
                <input
                  type="range"
                  className={styles.slider}
                  min={70}
                  max={100}
                  value={terminalOpacity}
                  onChange={(e) => setTerminalOpacity(Number(e.target.value))}
                />
                <span className={styles.rowValue}>{terminalOpacity}%</span>
              </div>
              <div className={styles.row}>
                <span className={styles.rowLabel}>Font size</span>
                <input
                  type="range"
                  className={styles.slider}
                  min={11}
                  max={18}
                  value={fontSize}
                  onChange={(e) => setFontSize(Number(e.target.value))}
                />
                <span className={styles.rowValue}>{fontSize}px</span>
              </div>
            </div>
          </>
        )}

        {category === "desktop" && (
          <>
            <div className={styles.panelTitle}>Desktop</div>
            <div className={styles.section}>
              <div className={styles.row}>
                <span className={styles.rowLabel}>Show desktop icons</span>
                <Switch on={showDesktopIcons} onToggle={() => setShowDesktopIcons(!showDesktopIcons)} />
              </div>
              <div className={styles.row}>
                <span className={styles.rowLabel}>Icon size</span>
                <div className={styles.segmented}>
                  {(Object.keys(ICON_SIZE_PRESETS) as IconSize[]).map((s) => (
                    <button
                      key={s}
                      type="button"
                      className={`${styles.segment} ${iconSize === s ? styles.segmentActive : ""}`}
                      onClick={() => setIconSize(s)}
                    >
                      {s[0].toUpperCase() + s.slice(1)}
                    </button>
                  ))}
                </div>
              </div>
              <div className={styles.row}>
                <span className={styles.rowLabel}>Auto-hide panel</span>
                <Switch on={panelAutoHide} onToggle={() => setPanelAutoHide(!panelAutoHide)} />
              </div>
            </div>
          </>
        )}

        {category === "accessibility" && (
          <>
            <div className={styles.panelTitle}>Accessibility</div>
            <div className={styles.section}>
              <div className={styles.row}>
                <span className={styles.rowLabel}>Reduce motion</span>
                <Switch on={reducedMotion} onToggle={() => setReducedMotion(!reducedMotion)} />
              </div>
              <div className={styles.row}>
                <span className={styles.rowLabel}>Underline links</span>
                <Switch on={underlineLinks} onToggle={() => setUnderlineLinks(!underlineLinks)} />
              </div>
            </div>
          </>
        )}

        {category === "about" && (
          <>
            <div className={styles.panelTitle}>About This System</div>
            <div className={styles.section}>
              <div className={styles.infoGrid}>
                <div>
                  <div className={styles.infoLabel}>OS</div>
                  <div className={styles.infoValue}>Kali Linux Portfolio Edition</div>
                </div>
                <div>
                  <div className={styles.infoLabel}>Host</div>
                  <div className={styles.infoValue}>ankan.in</div>
                </div>
                <div>
                  <div className={styles.infoLabel}>Shell</div>
                  <div className={styles.infoValue}>zsh 5.9</div>
                </div>
                <div>
                  <div className={styles.infoLabel}>Window Manager</div>
                  <div className={styles.infoValue}>xfwm4 (homage)</div>
                </div>
                <div>
                  <div className={styles.infoLabel}>Maintainer</div>
                  <div className={styles.infoValue}>{portfolioData.name}</div>
                </div>
                <div>
                  <div className={styles.infoLabel}>Contact</div>
                  <div className={styles.infoValue}>{portfolioData.alternateEmail}</div>
                </div>
              </div>
            </div>
            <div className={styles.section}>
              <div className={styles.sectionTitle}>{"// Reset"}</div>
              <button type="button" className={styles.resetBtn} onClick={resetAllSettings}>
                <FiRotateCcw /> Reset all settings to defaults
              </button>
              <div className={styles.resetHint}>Clears every preference above and reloads the OS.</div>
            </div>
          </>
        )}
      </ScrollArea>
    </AppShell>
  );
}
