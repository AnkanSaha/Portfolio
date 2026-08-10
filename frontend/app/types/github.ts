export type GitHubEntityKind = "user" | "org";

export interface GitHubUserProfile {
  login: string;
  name: string | null;
  bio: string | null;
  avatar_url: string;
  html_url: string;
  followers: number;
  following: number;
  public_repos: number;
  public_gists: number;
}

export interface GitHubOrgProfile {
  login: string;
  name: string | null;
  description: string | null;
  avatar_url: string;
  html_url: string;
  followers: number;
  following: number;
  public_repos: number;
  public_gists: number;
}

export interface GitHubRepo {
  name: string;
  description: string | null;
  htmlUrl: string;
  stars: number;
  language: string | null;
  fork: boolean;
}

export interface GitHubAPIResponse {
  login: string;
  name: string | null;
  bio: string | null;
  avatarUrl: string;
  htmlUrl: string;
  followers: number;
  following: number;
  publicRepos: number;
  publicGists: number;
  totalStars: number;
  repos: GitHubRepo[];
  fetchedAt: number;
}
