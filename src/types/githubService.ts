import type { GithubUser } from './githubUser';

export interface GithubService {
  getUser: (username: string) => Promise<GithubUser>;
}
