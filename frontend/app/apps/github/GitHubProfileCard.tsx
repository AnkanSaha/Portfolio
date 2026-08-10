"use client";
import { FiExternalLink, FiUsers, FiUserPlus, FiFolder, FiStar } from "react-icons/fi";
import { AppShell, ScrollArea, Toolbar, ToolbarSpacer } from "../../os/ui";
import { useGitHubData } from "../../hooks/useGitHubData";
import styles from "./GitHubProfileCard.module.css";

export default function GitHubProfileCard({ login }: { login: string }) {
  const { data, status, error } = useGitHubData(login);

  return (
    <AppShell
      toolbar={
        <Toolbar>
          <span className={styles.toolbarTitle}>github.com/{login}</span>
          <ToolbarSpacer />
          <a className={styles.link} href={`https://github.com/${login}`} target="_blank" rel="noopener noreferrer">
            <FiExternalLink /> Open on GitHub
          </a>
        </Toolbar>
      }
    >
      <ScrollArea>
        {status === "loading" || status === "idle" ? (
          <div className={styles.state}>Fetching live profile…</div>
        ) : status === "failed" ? (
          <div className={`${styles.state} ${styles.error}`}>{error ?? "Failed to load GitHub profile."}</div>
        ) : data ? (
          <div className={styles.profile}>
            <div className={styles.identity}>
              {/* eslint-disable-next-line @next/next/no-img-element -- remote GitHub avatar, no local static path for next/image */}
              <img src={data.avatarUrl} alt="" className={styles.avatar} />
              <div>
                <div className={styles.name}>{data.name ?? data.login}</div>
                <div className={styles.login}>@{data.login}</div>
              </div>
            </div>

            {data.bio && <p className={styles.bio}>{data.bio}</p>}

            <div className={styles.stats}>
              <div className={styles.stat}>
                <FiUsers className={styles.statIcon} />
                <span className={styles.statValue}>{data.followers}</span>
                <span className={styles.statLabel}>Followers</span>
              </div>
              <div className={styles.stat}>
                <FiUserPlus className={styles.statIcon} />
                <span className={styles.statValue}>{data.following}</span>
                <span className={styles.statLabel}>Following</span>
              </div>
              <div className={styles.stat}>
                <FiFolder className={styles.statIcon} />
                <span className={styles.statValue}>{data.publicRepos}</span>
                <span className={styles.statLabel}>Repositories</span>
              </div>
              <div className={styles.stat}>
                <FiStar className={styles.statIcon} />
                <span className={styles.statValue}>{data.totalStars}</span>
                <span className={styles.statLabel}>Total Stars</span>
              </div>
            </div>

            <div className={styles.reposHead}>Public Repositories ({(data.repos ?? []).length})</div>
            <div className={styles.repos}>
              {(data.repos ?? []).map((repo) => (
                <a
                  key={repo.name}
                  className={styles.repoRow}
                  href={repo.htmlUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  <div className={styles.repoTop}>
                    <span className={styles.repoName}>{repo.name}</span>
                    <span className={styles.repoStars}>
                      <FiStar /> {repo.stars}
                    </span>
                  </div>
                  <p className={styles.repoDesc}>{repo.description || "No description provided."}</p>
                  {repo.language && <span className={styles.repoLang}>{repo.language}</span>}
                </a>
              ))}
            </div>

            <div className={styles.footnote}>
              GitHub blocks its pages from being embedded (X-Frame-Options), so this is a native profile view built
              from real, live GitHub API data — not a screenshot. Use &quot;Open on GitHub&quot; for the actual page.
            </div>
          </div>
        ) : null}
      </ScrollArea>
    </AppShell>
  );
}
