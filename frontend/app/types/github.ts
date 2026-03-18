export interface GitHubProfile {
  login: string;
  followers: number;
  following: number;
  public_repos: number;
  public_gists: number;
}

export interface GitHubAPIResponse {
  followers: number;
  following: number;
  publicRepos: number;
  publicGists: number;
  totalStars: number;
  fetchedAt: number;
}
