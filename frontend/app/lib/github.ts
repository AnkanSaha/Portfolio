import type { GitHubAPIResponse, GitHubEntityKind, GitHubOrgProfile, GitHubRepo, GitHubUserProfile } from "../types/github";

const CACHE_TTL_MS = 60 * 60 * 1000; // 1 hour — matches the route's Cache-Control s-maxage
const cache = new Map<string, { data: GitHubAPIResponse; expiresAt: number }>();

interface RawRepo {
  name: string;
  description: string | null;
  html_url: string;
  stargazers_count: number;
  language: string | null;
  fork: boolean;
}

async function fetchGitHubStatsUncached(kind: GitHubEntityKind, login: string): Promise<GitHubAPIResponse> {
  const headers: Record<string, string> = {
    Accept: "application/vnd.github.v3+json",
    "User-Agent": "Ankan Saha Portfolio",
  };
  if (process.env.GITHUB_TOKEN) {
    headers.Authorization = `Bearer ${process.env.GITHUB_TOKEN}`;
  }

  const base = kind === "org" ? "orgs" : "users";
  const [profileRes, reposRes] = await Promise.all([
    fetch(`https://api.github.com/${base}/${login}`, { headers }),
    fetch(`https://api.github.com/${base}/${login}/repos?per_page=100&sort=pushed&direction=desc`, { headers }),
  ]);

  if (!profileRes.ok) {
    throw new Error(`GitHub ${kind} fetch failed: ${profileRes.status}`);
  }

  const rawRepos: RawRepo[] = reposRes.ok ? await reposRes.json() : [];
  const repos: GitHubRepo[] = rawRepos
    .filter((r) => !r.fork)
    .map((r) => ({
      name: r.name,
      description: r.description,
      htmlUrl: r.html_url,
      stars: r.stargazers_count,
      language: r.language,
      fork: r.fork,
    }));
  const totalStars = repos.reduce((sum, r) => sum + r.stars, 0);

  if (kind === "org") {
    const profile: GitHubOrgProfile = await profileRes.json();
    return {
      login: profile.login,
      name: profile.name,
      bio: profile.description,
      avatarUrl: profile.avatar_url,
      htmlUrl: profile.html_url,
      followers: profile.followers,
      following: profile.following,
      publicRepos: profile.public_repos,
      publicGists: profile.public_gists,
      totalStars,
      repos,
      fetchedAt: Date.now(),
    };
  }

  const profile: GitHubUserProfile = await profileRes.json();
  return {
    login: profile.login,
    name: profile.name,
    bio: profile.bio,
    avatarUrl: profile.avatar_url,
    htmlUrl: profile.html_url,
    followers: profile.followers,
    following: profile.following,
    publicRepos: profile.public_repos,
    publicGists: profile.public_gists,
    totalStars,
    repos,
    fetchedAt: Date.now(),
  };
}

/**
 * Server-side memoization on top of the client's own localStorage cache:
 * every visitor hitting this Worker isolate within the TTL shares one
 * GitHub API call instead of each triggering their own, which matters now
 * that a fetch also pulls the full repo list (not just a couple of counts).
 */
export async function fetchGitHubStats(kind: GitHubEntityKind, login: string): Promise<GitHubAPIResponse> {
  const key = `${kind}:${login}`;
  const cached = cache.get(key);
  if (cached && cached.expiresAt > Date.now()) {
    return cached.data;
  }

  const data = await fetchGitHubStatsUncached(kind, login);
  cache.set(key, { data, expiresAt: Date.now() + CACHE_TTL_MS });
  return data;
}
