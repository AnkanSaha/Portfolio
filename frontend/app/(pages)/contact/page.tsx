import type { Metadata } from "next";
import ContactHero from "../../components/contact/ContactHero/ContactHero";
import ContactInfo from "../../components/contact/ContactInfo/ContactInfo";
import ContactForm from "../../components/contact/ContactForm/ContactForm";
import styles from "./contact.module.css";

export const metadata: Metadata = {
  title: "Contact",
  description:
    "Get in touch with Ankan Saha. Available for full-time roles, freelance projects, and open-source collaboration.",
};

export default function ContactPage() {
  return (
    <>
      <ContactHero />
      <section className={styles.section}>
        <div className={styles.inner}>
          <ContactInfo />
          <ContactForm />
        </div>
      </section>
    </>
  );
}
