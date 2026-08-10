"use client";
import { useAppDispatch, useAppSelector } from "../../store/hooks";
import { setActiveWorkspace } from "../../store/slices/systemSlice";
import styles from "./WorkspaceSwitcher.module.css";

const WORKSPACES = [1, 2, 3, 4];

export default function WorkspaceSwitcher() {
  const active = useAppSelector((s) => s.system.activeWorkspace);
  const dispatch = useAppDispatch();

  return (
    <div className={styles.switcher}>
      {WORKSPACES.map((w) => (
        <button
          key={w}
          type="button"
          className={`${styles.cell} ${active === w ? styles.active : ""}`}
          onClick={() => dispatch(setActiveWorkspace(w))}
        >
          {w}
        </button>
      ))}
    </div>
  );
}
