import { useMemo } from 'react';
import type { GithubRepository } from '../types/githubRepositoriesUser';

interface UseRepositoryGroupingResult {
  groupedByLanguage: Record<string, GithubRepository[]>;
}

export function useRepositoryGrouping(
  data: GithubRepository[] | null
): UseRepositoryGroupingResult {
  const groupedByLanguage = useMemo(() => {
    if (!data) return {};
    return Object.groupBy(
      data,
      (repo) => repo.language || 'Sem linguagem'
    ) as Record<string, GithubRepository[]>;
  }, [data]);

  return { groupedByLanguage };
}
