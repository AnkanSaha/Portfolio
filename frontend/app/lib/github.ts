import type { GitHubAPIResponse, GitHubProfile } from "../types/github";

export async function fetchGitHubStats(): Promise<GitHubAPIResponse> {
  const headers: Record<string, string> = {
    Accept: "application/vnd.github.v3+json",
    "User-Agent": "Ankan Saha Portfolio",
  };
  if (process.env.GITHUB_TOKEN) {
    headers.Authorization = `Bearer ${process.env.GITHUB_TOKEN}`;
  }

  const [profileRes, reposRes] = await Promise.all([
    fetch("https://api.github.com/users/AnkanSaha", { headers }),
    fetch("https://api.github.com/users/AnkanSaha/repos?per_page=100", { headers }),
  ]);

  if (!profileRes.ok) {
    throw new Error(`GitHub profile fetch failed: ${profileRes.status}`);
  }

  const profile: GitHubProfile = await profileRes.json();
  const repos: Array<{ stargazers_count: number }> = reposRes.ok ? await reposRes.json() : [];

  const totalStars = repos.reduce((sum, r) => sum + (r.stargazers_count ?? 0), 0);

  return {
    followers: profile.followers,
    following: profile.following,
    publicRepos: profile.public_repos,
    publicGists: profile.public_gists,
    totalStars,
    fetchedAt: Date.now(),
  };
}
