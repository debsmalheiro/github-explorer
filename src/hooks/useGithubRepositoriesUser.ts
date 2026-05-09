import { useState, useMemo, useCallback } from 'react';
import type { GithubError } from '../types/githubError';
import { createGithubError } from '../types/githubError';
import { githubService } from '../services/githubService';
import type {
  GithubRepository,
  SortField,
  SortDirection,
  SortOption,
} from '../types/githubRepositoriesUser';

interface UseGithubRepositoriesUserResult {
  data: GithubRepository[] | null;
  paginatedData: GithubRepository[];
  loading: boolean;
  error: GithubError | null;
  currentPage: number;
  itemsPerPage: number;
  totalPages: number;
  totalItems: number;
  sortOption: SortOption;
  fetchRepositoriesUser: (username: string) => Promise<void>;
  changePage: (page: number) => void;
  changeItemsPerPage: (items: number) => void;
  changeSortOption: (option: SortOption) => void;
}

const ITEMS_PER_PAGE_OPTIONS = [10, 50, 100] as const;

const DEFAULT_SORT_OPTION: SortOption = 'stargazers_count-desc';

function parseSortOption(option: SortOption): {
  field: SortField;
  direction: SortDirection;
} {
  const [field, direction] = option.split('-') as [SortField, SortDirection];
  return { field, direction };
}

export function useGithubRepositoriesUser(): UseGithubRepositoriesUserResult {
  const [data, setData] = useState<GithubRepository[] | null>(null);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState<GithubError | null>(null);
  const [currentPage, setCurrentPage] = useState(1);
  const [itemsPerPage, setItemsPerPage] = useState(10);
  const [sortOption, setSortOption] = useState<SortOption>(DEFAULT_SORT_OPTION);

  const { field: sortField, direction: sortDirection } =
    parseSortOption(sortOption);

  const fetchRepositoriesUser = async (username: string) => {
    setLoading(true);
    setError(null);

    try {
      const repositories = await githubService.getRepositoriesUser(username);
      setData(repositories);
      setCurrentPage(1);
    } catch (err) {
      setError(createGithubError(err));
      setData(null);
    } finally {
      setLoading(false);
    }
  };

  const sortedData = useMemo(() => {
    if (!data) return [];

    return [...data].sort((a, b) => {
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

  const totalPages = useMemo(() => {
    if (!data) return 0;
    return Math.ceil(data.length / itemsPerPage);
  }, [data, itemsPerPage]);

  const paginatedData = useMemo(() => {
    const startIndex = (currentPage - 1) * itemsPerPage;
    const endIndex = startIndex + itemsPerPage;
    return sortedData.slice(startIndex, endIndex);
  }, [sortedData, currentPage, itemsPerPage]);

  const changePage = useCallback((page: number) => {
    setCurrentPage(page);
  }, []);

  const changeItemsPerPage = useCallback((items: number) => {
    setItemsPerPage(items);
    setCurrentPage(1);
  }, []);

  const changeSortOption = useCallback((option: SortOption) => {
    setSortOption(option);
  }, []);

  return {
    data,
    paginatedData,
    loading,
    error,
    currentPage,
    itemsPerPage,
    totalPages,
    totalItems: data?.length || 0,
    sortOption,
    fetchRepositoriesUser,
    changePage,
    changeItemsPerPage,
    changeSortOption,
  };
}

export { ITEMS_PER_PAGE_OPTIONS };
