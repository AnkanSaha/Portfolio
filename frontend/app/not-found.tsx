import Link from "next/link";
import styles from "./not-found.module.css";

export default function NotFound() {
  return (
    <div className={styles.page}>
      <div className={styles.content}>
        <div className={styles.codeBlock}>
          <span className={styles.lineNum}>1</span>
          <span className={styles.keyword}>throw</span>
          <span className={styles.fn}> new </span>
          <span className={styles.error}>NotFoundError</span>
          <span className={styles.paren}>(</span>
          <span className={styles.string}>&quot;Page does not exist&quot;</span>
          <span className={styles.paren}>)</span>
          <span className={styles.semi}>;</span>
        </div>

        <h1 className={styles.code}>404</h1>
        <p className={styles.message}>Page not found</p>
        <p className={styles.hint}>
          <span className={styles.prompt}>$ </span>
          The resource you requested could not be located.
        </p>

        <Link href="/" className={styles.homeLink}>
          <span className={styles.prompt}>$ </span>
          cd ~/home
        </Link>
      </div>
    </div>
  );
}
