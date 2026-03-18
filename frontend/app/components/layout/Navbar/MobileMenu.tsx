"use client";
import { useDispatch, useSelector } from "react-redux";
import type { RootState, AppDispatch } from "../../../store";
import { closeMobileNav } from "../../../store/slices/uiSlice";
import NavLink from "./NavLink";
import styles from "./Navbar.module.css";

const links = [
  { href: "/", label: "~/home" },
  { href: "/about", label: "~/about" },
  { href: "/skills", label: "~/skills" },
  { href: "/projects", label: "~/projects" },
  { href: "/contact", label: "~/contact" },
];

export default function MobileMenu() {
  const dispatch = useDispatch<AppDispatch>();
  const open = useSelector((s: RootState) => s.ui.mobileNavOpen);
  const close = () => dispatch(closeMobileNav());

  return (
    <>
      {open && <div className={styles.overlay} onClick={close} aria-hidden="true" />}
      <nav className={`${styles.mobileNav} ${open ? styles.mobileNavOpen : ""}`}>
        {links.map((l) => (
          <NavLink key={l.href} href={l.href} onClick={close}>
            {l.label}
          </NavLink>
        ))}
      </nav>
    </>
  );
}
