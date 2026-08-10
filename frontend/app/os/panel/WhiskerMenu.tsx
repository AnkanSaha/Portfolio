"use client";
import { useMemo, useState } from "react";
import { motion } from "motion/react";
import { FiUser, FiSettings, FiPower } from "react-icons/fi";
import { APP_REGISTRY, APP_ORDER } from "../../apps/registry";
import { useOpenApp } from "../window/useOpenApp";
import { useAppDispatch } from "../../store/hooks";
import { setPhase } from "../../store/slices/systemSlice";
import WhiskerMenuCategories, { type Category } from "./WhiskerMenuCategories";
import styles from "./WhiskerMenu.module.css";

export default function WhiskerMenu({ onClose }: { onClose: () => void }) {
  const [query, setQuery] = useState("");
  const [category, setCategory] = useState<Category>("all");
  const openApp = useOpenApp();
  const dispatch = useAppDispatch();

  const apps = useMemo(() => {
    return APP_ORDER.map((id) => APP_REGISTRY[id]).filter((app) => {
      const matchesCategory = category === "all" || app.category === category;
      const matchesQuery = app.title.toLowerCase().includes(query.toLowerCase());
      return matchesCategory && matchesQuery;
    });
  }, [query, category]);

  function launch(id: string) {
    openApp(id);
    onClose();
  }

  return (
    <>
      <div className={styles.overlay} onClick={onClose} />
      <motion.div
        className={styles.menu}
        initial={{ opacity: 0, y: -6 }}
        animate={{ opacity: 1, y: 0 }}
        exit={{ opacity: 0 }}
        transition={{ duration: 0.14 }}
      >
        <div className={styles.searchWrap}>
          <input
            className={styles.search}
            placeholder="Search applications…"
            value={query}
            onChange={(e) => setQuery(e.target.value)}
            autoFocus
          />
        </div>

        <WhiskerMenuCategories active={category} onChange={setCategory} />

        <div className={styles.list}>
          {apps.length === 0 ? (
            <div className={styles.empty}>No applications found.</div>
          ) : (
            apps.map((app) => {
              const Icon = app.icon;
              return (
                <button key={app.id} type="button" className={styles.appRow} onClick={() => launch(app.id)}>
                  <span className={styles.appIcon}>
                    <Icon size={16} />
                  </span>
                  {app.title}
                </button>
              );
            })
          )}
        </div>

        <div className={styles.footer}>
          <span className={styles.userTag}>
            <FiUser /> ankan@kali
          </span>
          <div className={styles.footerActions}>
            <button type="button" className={styles.footerBtn} title="Settings" onClick={() => launch("settings")}>
              <FiSettings size={15} />
            </button>
            <button
              type="button"
              className={styles.footerBtn}
              title="Shut Down"
              onClick={() => {
                dispatch(setPhase("shuttingDown"));
                onClose();
              }}
            >
              <FiPower size={15} />
            </button>
          </div>
        </div>
      </motion.div>
    </>
  );
}
