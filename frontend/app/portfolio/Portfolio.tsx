"use client";
import { useState, useEffect, useRef } from "react";
import { portfolioData } from "../data/portfolioData";
import { useInView } from "./useInView";
import styles from "./Portfolio.module.css";

function Anim({ children, className = "", delay = 0 }: { children: React.ReactNode; className?: string; delay?: number }) {
  const { ref, inView } = useInView(0.1);
  return (
    <div ref={ref} className={`${className} ${inView ? styles.show : styles.hide}`} style={{ transitionDelay: `${delay}ms` }}>
      {children}
    </div>
  );
}

function CountUp({ target, suffix = "" }: { target: number; suffix?: string }) {
  const [val, setVal] = useState(0);
  const { ref, inView } = useInView(0.3);
  const started = useRef(false);
  useEffect(() => {
    if (!inView || started.current) return;
    started.current = true;
    const dur = 1200, start = performance.now();
    function tick(now: number) {
      const p = Math.min((now - start) / dur, 1);
      setVal(Math.round((1 - Math.pow(1 - p, 3)) * target));
      if (p < 1) requestAnimationFrame(tick);
    }
    requestAnimationFrame(tick);
  }, [inView, target]);
  return <span ref={ref}>{val.toLocaleString()}{suffix}</span>;
}

function Nav({ active }: { active: string }) {
  const links = ["about", "projects", "work", "stack", "contact"];
  const [scrolled, setScrolled] = useState(false);
  useEffect(() => {
    const fn = () => setScrolled(window.scrollY > 40);
    window.addEventListener("scroll", fn, { passive: true });
    return () => window.removeEventListener("scroll", fn);
  }, []);
  return (
    <nav className={`${styles.nav} ${scrolled ? styles.navSolid : ""}`}>
      <a href="#about" className={styles.navLogo}>A.</a>
      <div className={styles.navLinks}>
        {links.map((l) => (
          <a key={l} href={`#${l}`} className={`${styles.navLink} ${active === l ? styles.navLinkOn : ""}`}>{l}</a>
        ))}
      </div>
      <div className={styles.navActions}>
        <a href="https://resume.ankan.in" target="_blank" rel="noopener noreferrer" className={styles.navResume}>Resume</a>
        <a href={`mailto:${portfolioData.alternateEmail}`} className={styles.navCta}>Get in touch</a>
      </div>
    </nav>
  );
}

const EDGE_FALLBACK = [
  { label: "Users", value: 100, comment: "Registered accounts" },
  { label: "Load Balancers", value: 10, comment: "Workers deployed" },
  { label: "API Gateways", value: 14, comment: "Gateway workers" },
  { label: "Active Balancers", value: 7, comment: "Status = active" },
  { label: "AI Runs", value: 310, comment: "Agent runs completed" },
  { label: "Scripts Deployed", value: 60, comment: "Worker versions shipped" },
];

function parseEdgeStats(raw: unknown): { label: string; value: number; comment: string }[] {
  if (Array.isArray(raw)) return raw;
  if (raw && typeof raw === "object") {
    const obj = raw as Record<string, unknown>;
    if (Array.isArray(obj.data)) return obj.data;
    if (Array.isArray(obj.stats)) return obj.stats;
    const entries: { label: string; value: number; comment: string }[] = [];
    for (const [key, val] of Object.entries(obj)) {
      if (typeof val === "number") entries.push({ label: key, value: val, comment: key });
      else if (val && typeof val === "object" && "value" in (val as Record<string, unknown>)) {
        const v = val as Record<string, unknown>;
        entries.push({ label: key, value: Number(v.value) || 0, comment: String(v.label || v.description || key) });
      }
    }
    if (entries.length) return entries;
  }
  return EDGE_FALLBACK;
}

function EdgeStats() {
  const [stats, setStats] = useState(EDGE_FALLBACK);
  useEffect(() => {
    fetch("/api/edge-stats").then((r) => r.json()).then((d) => {
      if (!d.error) setStats(parseEdgeStats(d));
    }).catch(() => {});
  }, []);
  return (
    <div className={styles.edgeGrid}>
      {stats.map((s, i) => (
        <div key={i} className={styles.edgeCard}>
          <span className={styles.edgeComment}>{"// "}{s.comment}</span>
          <span className={styles.edgeValue}><CountUp target={s.value} /></span>
          <span className={styles.edgeLabel}>{s.label}</span>
        </div>
      ))}
    </div>
  );
}

export default function Portfolio() {
  const d = portfolioData;
  const [activeSection, setActiveSection] = useState("about");
  useEffect(() => {
    const ids = ["about", "projects", "work", "stack", "contact"];
    const obs = new IntersectionObserver(
      (entries) => { for (const e of entries) if (e.isIntersecting) setActiveSection(e.target.id); },
      { rootMargin: "-40% 0px -50% 0px" }
    );
    ids.forEach((id) => { const el = document.getElementById(id); if (el) obs.observe(el); });
    return () => obs.disconnect();
  }, []);

  const featured = d.projects.filter((p) => p.featured);
  const others = d.projects.filter((p) => !p.featured);

  return (
    <>
      <Nav active={activeSection} />

      {/* ═══ HERO ═══ */}
      <section id="about" className={styles.hero}>
        <div className={styles.heroInner}>
          <div className={styles.heroGrid}>
            <div className={styles.heroLeft}>
              <div className={styles.heroBadge}><span className={styles.heroDot} />{d.currentCompany}</div>
              <h1 className={styles.heroName}>
                {d.name.split("").map((c, i) => (
                  <span key={i} className={styles.heroChar} style={{ animationDelay: `${i * 35}ms` }}>{c === " " ? "\u00A0" : c}</span>
                ))}
              </h1>
              <p className={styles.heroTitle}>{d.title}</p>
              <p className={styles.heroSummary}>{d.summary}</p>
              <div className={styles.heroActions}>
                <a href="#projects" className={styles.btnPrimary}>View projects</a>
                <a href="https://resume.ankan.in" target="_blank" rel="noopener noreferrer" className={styles.btnSecondary}>View resume →</a>
              </div>
            </div>
            <div className={styles.heroRight}>
              <div className={styles.heroStats}>
                <div className={styles.hStat}><span className={styles.hStatNum}><CountUp target={d.github.followers} /></span><span className={styles.hStatLabel}>GitHub Followers</span></div>
                <div className={styles.hStat}><span className={styles.hStatNum}><CountUp target={d.github.stars} /></span><span className={styles.hStatLabel}>Total Stars</span></div>
                <div className={styles.hStat}><span className={styles.hStatNum}><CountUp target={20} suffix="K+" /></span><span className={styles.hStatLabel}>NPM Downloads/yr</span></div>
                <div className={styles.hStat}><span className={styles.hStatNum}><CountUp target={6} /></span><span className={styles.hStatLabel}>Open Source Projects</span></div>
              </div>
              <div className={styles.githubBadges}>
                {d.github.achievements.map((a) => <span key={a} className={styles.ghBadge}>{a}</span>)}
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* ═══ PROJECTS — 2-column: left=projects, right=sidebar ═══ */}
      <section id="projects" className={styles.section}>
        <div className={styles.container}>
          <Anim><div className={styles.sectionHead}><span className={styles.sectionNum}>01</span><h2 className={styles.sectionTitle}>Open Source Projects</h2><p className={styles.sectionSub}>Infrastructure tools I build and maintain under <a href="https://github.com/nexoral" target="_blank" rel="noopener noreferrer" className={styles.inlineLink}>Nexoral</a>.</p></div></Anim>
          <div className={styles.projectGrid}>
            <div className={styles.projectList}>
              {featured.map((p, i) => (
                <Anim key={p.name} delay={i * 80}>
                  <article className={styles.projectCard}>
                    <div className={styles.projectHead}>
                      <div><h3 className={styles.projectName}>{p.name}</h3><p className={styles.projectTagline}>{p.tagline}</p></div>
                      <div className={styles.projectMeta}>{p.stars !== undefined && <span className={styles.projectStars}>★ {p.stars}</span>}<span className={styles.projectPeriod}>{p.period}</span></div>
                    </div>
                    <p className={styles.projectDesc}>{p.description}</p>
                    <div className={styles.projectBullets}>{p.bullets.map((b, j) => <p key={j} className={styles.pBullet}>{b}</p>)}</div>
                    <div className={styles.tagRow}>{p.technologies.map((t) => <span key={t} className={styles.tag}>{t}</span>)}</div>
                    <div className={styles.projectLinks}>
                      <a href={p.github} target="_blank" rel="noopener noreferrer" className={styles.pLink}>GitHub →</a>
                      {p.live && <a href={p.live} target="_blank" rel="noopener noreferrer" className={styles.pLink}>Live →</a>}
                      {p.npm && <a href={p.npm} target="_blank" rel="noopener noreferrer" className={styles.pLink}>NPM →</a>}
                      {p.docs && <a href={p.docs} target="_blank" rel="noopener noreferrer" className={styles.pLink}>Docs →</a>}
                    </div>
                  </article>
                </Anim>
              ))}
            </div>

            <div className={styles.projectSidebar}>
              <Anim delay={100}>
                <div className={styles.edgeSection}>
                  <div className={styles.edgeHeader}>
                    <h3 className={styles.edgeTitle}>EdgeBalancer — Live Stats</h3>
                    <a href="https://edge.nexoral.in/stats" target="_blank" rel="noopener noreferrer" className={styles.edgeLink}>View live →</a>
                  </div>
                  <EdgeStats />
                </div>
              </Anim>
              <Anim delay={150}>
                <div>
                  <h3 className={styles.othersTitle}>Also built</h3>
                  <div className={styles.othersList}>
                    {others.map((p) => (
                      <a key={p.name} href={p.github} target="_blank" rel="noopener noreferrer" className={styles.otherCard}>
                        <div className={styles.otherHead}>
                          <span className={styles.otherName}>{p.name}</span>
                          {p.stars !== undefined && <span className={styles.otherStars}>★ {p.stars}</span>}
                        </div>
                        <p className={styles.otherDesc}>{p.tagline}</p>
                      </a>
                    ))}
                  </div>
                </div>
              </Anim>
            </div>
          </div>
        </div>
      </section>

      {/* ═══ WORK — Grid of cards ═══ */}
      <section id="work" className={styles.sectionAlt}>
        <div className={styles.container}>
          <Anim><div className={styles.sectionHead}><span className={styles.sectionNum}>02</span><h2 className={styles.sectionTitle}>Experience</h2></div></Anim>
          <div className={styles.workGrid}>
            {d.experience.map((exp, i) => (
              <Anim key={i} delay={i * 80}>
                <div className={styles.workCard}>
                  <span className={styles.workPeriod}>{exp.period}</span><span className={styles.workLoc}>{exp.location}</span>
                  <h3 className={styles.workTitle}>{exp.title}</h3>
                  <p className={styles.workCompany}>{exp.companyUrl ? <a href={exp.companyUrl} target="_blank" rel="noopener noreferrer">{exp.company}</a> : exp.company}</p>
                  {exp.companyDesc && <p className={styles.workDesc}>{exp.companyDesc}</p>}
                  <div className={styles.workBullets}>{exp.bullets.map((b, j) => <p key={j} className={styles.wBullet}>{b}</p>)}</div>
                  <div className={styles.tagRow}>{exp.technologies.map((t) => <span key={t} className={styles.tag}>{t}</span>)}</div>
                </div>
              </Anim>
            ))}
          </div>
        </div>
      </section>

      {/* ═══ STACK ═══ */}
      <section id="stack" className={styles.section}>
        <div className={styles.container}>
          <Anim><div className={styles.sectionHead}><span className={styles.sectionNum}>03</span><h2 className={styles.sectionTitle}>Technical Skills</h2></div></Anim>
          <div className={styles.stackGrid}>
            {d.skillCategories.map((cat, i) => (
              <Anim key={cat.name} delay={i * 50}>
                <div className={styles.stackCard}>
                  <h3 className={styles.stackCat}>{cat.name}</h3>
                  <div className={styles.stackSkills}>{cat.skills.map((s) => <span key={s} className={styles.stackSkill}>{s}</span>)}</div>
                </div>
              </Anim>
            ))}
          </div>
          <Anim delay={200}>
            <div className={styles.achieveGrid}>
              {d.achievements.map((a, i) => (
                <div key={i} className={styles.achieveItem}>
                  <span className={styles.achieveNum}>{String(i + 1).padStart(2, "0")}</span>
                  <span>{a}</span>
                </div>
              ))}
            </div>
          </Anim>
        </div>
      </section>

      {/* ═══ CONTACT — 2-column ═══ */}
      <section id="contact" className={styles.sectionAlt}>
        <div className={styles.container}>
          <div className={styles.contactGrid}>
            <Anim>
              <div className={styles.contactLeft}>
                <span className={styles.sectionNum}>04</span>
                <h2 className={styles.contactTitle}>Let&apos;s talk</h2>
                <p className={styles.contactSub}>I&apos;m currently open to Backend / SDE roles. Whether you have an opportunity or want to discuss open source, my inbox is always open.</p>
                <a href={`mailto:${d.alternateEmail}`} className={styles.contactEmail}>{d.alternateEmail}</a>
              </div>
            </Anim>
            <Anim delay={100}>
              <div className={styles.contactRight}>
                <div className={styles.contactInfo}>
                  <div className={styles.contactRow}><span className={styles.contactLabel}>Location</span><span className={styles.contactValue}>{d.location}</span></div>
                  <div className={styles.contactRow}><span className={styles.contactLabel}>Education</span><span className={styles.contactValue}>{d.education.degree} — {d.education.university}</span></div>
                  <div className={styles.contactRow}><span className={styles.contactLabel}>Languages</span><span className={styles.contactValue}>{d.languages.join(", ")}</span></div>
                </div>
                <div className={styles.socialRow}>
                  {Object.entries(d.social).map(([key, url]) => (
                    <a key={key} href={url} target="_blank" rel="noopener noreferrer" className={styles.socialLink}>{key}</a>
                  ))}
                </div>
              </div>
            </Anim>
          </div>
        </div>
      </section>

      <footer className={styles.footer}>
        <span>Designed & built by {d.name}</span>
        <span>{d.name} © {new Date().getFullYear()}</span>
      </footer>
    </>
  );
}