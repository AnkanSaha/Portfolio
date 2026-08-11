import { FiDownload, FiExternalLink } from "react-icons/fi";
import { AppShell, Toolbar, ToolbarSpacer } from "../../os/ui";
import styles from "./ResumeApp.module.css";

const RESUME_URL = "https://resume.ankan.in/Resume_of_Ankan_Saha.pdf";

export default function ResumeApp() {
  return (
    <AppShell
      toolbar={
        <Toolbar>
          <span style={{ fontFamily: "var(--font-mono)", fontSize: "0.8rem", color: "var(--ankan-fg-muted)" }}>
            resume.pdf
          </span>
          <ToolbarSpacer />
          <a className={styles.link} href={RESUME_URL} target="_blank" rel="noopener noreferrer">
            <FiExternalLink /> Open
          </a>
          <a className={styles.link} href={RESUME_URL} download>
            <FiDownload /> Download
          </a>
        </Toolbar>
      }
    >
      <iframe className={styles.frame} src={RESUME_URL} title="Ankan Saha — Resume" />
    </AppShell>
  );
}
