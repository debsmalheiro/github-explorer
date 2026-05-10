import type { GithubRepository } from './githubRepositoriesUser';
import type { GithubUser } from './githubUser';

export interface GithubService {
  getUser: (username: string) => Promise<GithubUser>;
  getRepositoriesUser: (username: string) => Promise<GithubRepository[]>;
  getRepositoryById: (fullName: string) => Promise<GithubRepository>;
}
