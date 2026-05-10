import { useState } from 'react';
import type { GithubError } from '../types/githubError';
import { createGithubError } from '../types/githubError';
import { githubService } from '../services/githubService';
import type { GithubRepository } from '../types/githubRepositoriesUser';

interface UseGithubRepositoryResult {
  data: GithubRepository | null;
  loading: boolean;
  error: GithubError | null;
  fetchRepository: (fullName: string) => Promise<void>;
}

export function useGithubRepository(): UseGithubRepositoryResult {
  const [data, setData] = useState<GithubRepository | null>(null);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState<GithubError | null>(null);

  const fetchRepository = async (fullName: string) => {
    setLoading(true);
    setError(null);

    try {
      const repository = await githubService.getRepositoryById(fullName);
      setData(repository);
    } catch (err) {
      setError(createGithubError(err));
      setData(null);
    } finally {
      setLoading(false);
    }
  };

  return {
    data,
    loading,
    error,
    fetchRepository,
  };
}
