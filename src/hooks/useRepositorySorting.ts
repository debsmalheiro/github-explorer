import { useState, useMemo, useCallback } from 'react';
import type {
  GithubRepository,
  SortField,
  SortDirection,
  SortOption,
} from '../types/githubRepositoriesUser';

const DEFAULT_SORT_OPTION: SortOption = 'stargazers_count-desc';

function parseSortOption(option: SortOption): {
  field: SortField;
  direction: SortDirection;
} {
  const [field, direction] = option.split('-') as [SortField, SortDirection];
  return { field, direction };
}

interface UseRepositorySortingResult {
  sortOption: SortOption;
  sortedData: GithubRepository[];
  changeSortOption: (option: SortOption) => void;
}

export function useRepositorySorting(
  data: GithubRepository[] | null
): UseRepositorySortingResult {
  const [sortOption, setSortOption] = useState<SortOption>(DEFAULT_SORT_OPTION);

  const { field: sortField, direction: sortDirection } =
    parseSortOption(sortOption);

  const sortedData = useMemo(() => {
    if (!data) return [];

    return data.toSorted((a, b) => {
      let aVal: string | number;
      let bVal: string | number;

      switch (sortField) {
        case 'stargazers_count':
          aVal = a.stargazers_count;
          bVal = b.stargazers_count;
          break;
        case 'full_name':
          aVal = a.full_name.toLowerCase();
          bVal = b.full_name.toLowerCase();
          break;
        case 'created_at':
          aVal = new Date(a.created_at).getTime();
          bVal = new Date(b.created_at).getTime();
          break;
        case 'language':
          aVal = a.language || '';
          bVal = b.language || '';
          break;
        default:
          return 0;
      }

      if (aVal < bVal) return sortDirection === 'asc' ? -1 : 1;
      if (aVal > bVal) return sortDirection === 'asc' ? 1 : -1;
      return 0;
    });
  }, [data, sortField, sortDirection]);

  const changeSortOption = useCallback((option: SortOption) => {
    setSortOption(option);
  }, []);

  return {
    sortOption,
    sortedData,
    changeSortOption,
  };
}
