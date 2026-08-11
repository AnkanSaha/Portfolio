import Link from "next/link";
import styles from "./not-found.module.css";

export default function NotFound() {
  return (
    <div className={styles.screen}>
      <div className={styles.line}>
        <span className={styles.ok}>[ OK ]</span> Started Ankan OS Display Manager.
      </div>
      <div className={styles.line}>
        <span className={styles.fail}>[FAIL]</span> Failed to mount requested route.
      </div>
      <div className={styles.line}>
        <span className={styles.fail}>[FAIL]</span> kernel panic — not syncing: page not found
      </div>
      <div className={styles.title}>404</div>
      <p className={styles.message}>
        This portfolio runs as a single-page desktop OS now — there&apos;s nothing mounted at this path.
      </p>
      <Link href="/" className={styles.link}>
        cd ~ && boot
      </Link>
    </div>
  );
}
