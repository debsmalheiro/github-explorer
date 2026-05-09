import { useState } from 'react';
import type { GithubUser } from '../types/githubUser';
import type { GithubError } from '../types/githubError';
import { createGithubError } from '../types/githubError';
import { githubService } from '../services/githubService';

interface UseGithubUserResult {
  data: GithubUser | null;
  loading: boolean;
  error: GithubError | null;
  fetchUser: (username: string) => Promise<void>;
}

export function useGithubUser(): UseGithubUserResult {
  const [data, setData] = useState<GithubUser | null>(null);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState<GithubError | null>(null);

  const fetchUser = async (username: string) => {
    setLoading(true);
    setError(null);

    try {
      const user = await githubService.getUser(username);
      setData(user);
    } catch (err) {
      setError(createGithubError(err));
      setData(null);
    } finally {
      setLoading(false);
    }
  };

  return { data, loading, error, fetchUser };
}
