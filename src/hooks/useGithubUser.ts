import { useState } from 'react';
import type { GithubUser } from '../types/githubUser';
import { githubService } from '../services/githubService';

interface UseGithubUserResut {
  data: GithubUser | null;
  loading: boolean;
  error: string | null;
  fetchUser: (username: string) => Promise<void>;
}

export function useGithubUser(): UseGithubUserResut {
  const [data, setData] = useState<GithubUser | null>(null);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState<string | null>(null);

  const fetchUser = async (username: string) => {
    setLoading(true);
    setError(null);

    try {
      const user = await githubService.getUser(username);
      setData(user);
    } catch (err) {
      setError(err instanceof Error ? err.message : 'Usuário não encontrado!');
      setData(null);
    } finally {
      setLoading(false);
    }
  };

  return { data, loading, error, fetchUser };
}
