"use client";
import Link from "next/link";
import { useDispatch, useSelector } from "react-redux";
import type { RootState, AppDispatch } from "../../../store";
import { toggleMobileNav } from "../../../store/slices/uiSlice";
import NavLink from "./NavLink";
import MobileMenu from "./MobileMenu";
import styles from "./Navbar.module.css";

const links = [
  { href: "/", label: "~/home" },
  { href: "/about", label: "~/about" },
  { href: "/skills", label: "~/skills" },
  { href: "/projects", label: "~/projects" },
  { href: "/contact", label: "~/contact" },
];

export default function Navbar() {
  const dispatch = useDispatch<AppDispatch>();
  const open = useSelector((s: RootState) => s.ui.mobileNavOpen);

  return (
    <>
      <header className={styles.header}>
        <div className={styles.inner}>
          <Link href="/" className={styles.logo}>
            <span className={styles.logoBracket}>[</span>
            <span className={styles.logoText}>Ankan Saha</span>
            <span className={styles.logoBracket}>]</span>
          </Link>

          <nav className={styles.desktopNav}>
            {links.map((l) => (
              <NavLink key={l.href} href={l.href}>{l.label}</NavLink>
            ))}
          </nav>

          <button
            className={styles.hamburger}
            onClick={() => dispatch(toggleMobileNav())}
            aria-label={open ? "Close menu" : "Open menu"}
            aria-expanded={open}
          >
            <span className={`${styles.bar} ${open ? styles.barOpen1 : ""}`} />
            <span className={`${styles.bar} ${open ? styles.barOpen2 : ""}`} />
            <span className={`${styles.bar} ${open ? styles.barOpen3 : ""}`} />
          </button>
        </div>
      </header>

      {/* MobileMenu must be outside <header> — backdrop-filter on header
          creates a new containing block, breaking position:fixed children */}
      <MobileMenu />
    </>
  );
}
