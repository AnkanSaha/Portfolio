"use client";
import { FiVolume, FiVolume1, FiVolume2, FiVolumeX } from "react-icons/fi";
import { Switch } from "../ui";
import { useAppDispatch, useAppSelector } from "../../store/hooks";
import { setSoundEnabled, setVolume } from "../../store/slices/systemSlice";
import TrayPopover from "./TrayPopover";
import styles from "./TrayPopoverContent.module.css";

function volumeIcon(soundEnabled: boolean, volume: number) {
  if (!soundEnabled || volume === 0) return <FiVolumeX />;
  if (volume < 50) return <FiVolume1 />;
  return <FiVolume2 />;
}

export default function SoundPopover() {
  const dispatch = useAppDispatch();
  const soundEnabled = useAppSelector((s) => s.system.soundEnabled);
  const volume = useAppSelector((s) => s.system.volume);

  return (
    <TrayPopover icon={volumeIcon(soundEnabled, volume)} label="Sound" active={soundEnabled}>
      <div className={styles.row}>
        <div>
          <div className={styles.title}>Sound</div>
          <div className={styles.subtitle}>{soundEnabled ? `${volume}%` : "Muted"}</div>
        </div>
        <Switch on={soundEnabled} onToggle={() => dispatch(setSoundEnabled(!soundEnabled))} />
      </div>
      <div className={styles.sliderRow}>
        <FiVolume />
        <input
          type="range"
          min={0}
          max={100}
          value={volume}
          disabled={!soundEnabled}
          onChange={(e) => dispatch(setVolume(Number(e.target.value)))}
          className={styles.slider}
        />
        <FiVolume2 />
      </div>
    </TrayPopover>
  );
}
