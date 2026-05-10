import axios from 'axios';
import type { GithubService } from '../types/githubService';
import type { GithubUser } from '../types/githubUser';
import type { GithubRepository } from '../types/githubRepositoriesUser';

const api = axios.create({
  baseURL: import.meta.env.VITE_GITHUB_API_URL,
  timeout: 10000,
  headers: {
    'User-Agent': 'GitHub-Explorer',
  },
});

export const githubService: GithubService = {
  getUser: async (username: string) => {
    const { data } = await api.get<GithubUser>(`/users/${username}`);
    return data;
  },
  getRepositoriesUser: async (username: string) => {
    const { data } = await api.get<GithubRepository[]>(
      `/users/${username}/repos`
    );
    return data;
  },
  getRepositoryById: async (fullName: string) => {
    const { data } = await api.get<GithubRepository>(`/repos/${fullName}`);
    return data;
  },
};
