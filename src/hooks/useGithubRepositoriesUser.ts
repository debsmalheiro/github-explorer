import { useState } from 'react';
import type { GithubError } from '../types/githubError';
import { createGithubError } from '../types/githubError';
import { githubService } from '../services/githubService';
import type { GithubRepository } from '../types/githubRepositoriesUser';

interface UseGithubRepositoriesUserResult {
  data: GithubRepository[] | null;
  loading: boolean;
  error: GithubError | null;
  fetchRepositoriesUser: (username: string) => Promise<void>;
}

export function useGithubRepositoriesUser(): UseGithubRepositoriesUserResult {
  const [data, setData] = useState<GithubRepository[] | null>(null);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState<GithubError | null>(null);

  const fetchRepositoriesUser = async (username: string) => {
    setLoading(true);
    setError(null);

    try {
      const repositories = await githubService.getRepositoriesUser(username);
      setData(repositories);
    } catch (err) {
      setError(createGithubError(err));
      setData(null);
    } finally {
      setLoading(false);
    }
  };

  return { data, loading, error, fetchRepositoriesUser };
}
