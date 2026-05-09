import axios from 'axios';
import type { GithubService } from '../types/githubService';
import type { GithubUser } from '../types/githubUser';

const api = axios.create({
  baseURL: import.meta.env.VITE_GITHUB_API_URL,
  timeout: 10000,
});

export const githubService: GithubService = {
  getUser: async (username: string) => {
    const { data } = await api.get<GithubUser>(`/users/${username}`);
    return data;
  },
};
