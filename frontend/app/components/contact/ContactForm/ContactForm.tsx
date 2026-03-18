"use client";
import { useState } from "react";
import GlowButton from "../../shared/GlowButton/GlowButton";
import styles from "./ContactForm.module.css";

export default function ContactForm() {
  const [name, setName] = useState("");
  const [subject, setSubject] = useState("");
  const [message, setMessage] = useState("");

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    const body = `Name: ${name}\n\n${message}`;
    const mailto = `mailto:connect@ankan.in?subject=${encodeURIComponent(subject || "Portfolio Contact")}&body=${encodeURIComponent(body)}`;
    window.location.href = mailto;
  };

  return (
    <form className={styles.form} onSubmit={handleSubmit}>
      <h2 className={styles.heading}>Send a Message</h2>

      <div className={styles.field}>
        <label className={styles.label} htmlFor="name">Name</label>
        <input
          id="name"
          className={styles.input}
          type="text"
          placeholder="Your name"
          value={name}
          onChange={(e) => setName(e.target.value)}
          required
        />
      </div>

      <div className={styles.field}>
        <label className={styles.label} htmlFor="subject">Subject</label>
        <input
          id="subject"
          className={styles.input}
          type="text"
          placeholder="What's this about?"
          value={subject}
          onChange={(e) => setSubject(e.target.value)}
        />
      </div>

      <div className={styles.field}>
        <label className={styles.label} htmlFor="message">Message</label>
        <textarea
          id="message"
          className={`${styles.input} ${styles.textarea}`}
          placeholder="Tell me about your project or opportunity..."
          value={message}
          onChange={(e) => setMessage(e.target.value)}
          required
          rows={5}
        />
      </div>

      <GlowButton type="submit" variant="primary">
        Send via Email
      </GlowButton>

      <p className={styles.note}>Opens your default email client</p>
    </form>
  );
}
