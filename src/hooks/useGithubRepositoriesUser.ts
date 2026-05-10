import type { SortOption } from '../types/githubRepositoriesUser';
import { useGithubRepositoriesData } from './useGithubRepositoriesData';
import { useRepositorySorting } from './useRepositorySorting';
import { useRepositoryGrouping } from './useRepositoryGrouping';
import { useRepositoryPagination } from './useRepositoryPagination';

interface UseGithubRepositoriesUserResult {
  data: ReturnType<typeof useGithubRepositoriesData>['data'] | null;
  paginatedData: ReturnType<typeof useRepositoryPagination>['paginatedData'];
  loading: boolean;
  error: ReturnType<typeof useGithubRepositoriesData>['error'];
  currentPage: number;
  itemsPerPage: number;
  totalPages: number;
  totalItems: number;
  sortOption: SortOption;
  groupedByLanguage: Record<string, unknown[]>;
  fetchRepositoriesUser: (username: string) => Promise<void>;
  changePage: (page: number) => void;
  changeItemsPerPage: (items: number) => void;
  changeSortOption: (option: SortOption) => void;
}

const ITEMS_PER_PAGE_OPTIONS = [10, 50, 100] as const;

export function useGithubRepositoriesUser(): UseGithubRepositoriesUserResult {
  const { data, loading, error, fetchRepositoriesUser } =
    useGithubRepositoriesData();

  const { sortOption, sortedData, changeSortOption } =
    useRepositorySorting(data);

  const { groupedByLanguage } = useRepositoryGrouping(data);

  const {
    currentPage,
    itemsPerPage,
    totalPages,
    totalItems,
    paginatedData,
    changePage,
    changeItemsPerPage,
  } = useRepositoryPagination(data, sortedData);

  return {
    data,
    paginatedData,
    loading,
    error,
    currentPage,
    itemsPerPage,
    totalPages,
    totalItems,
    sortOption,
    groupedByLanguage,
    fetchRepositoriesUser,
    changePage,
    changeItemsPerPage,
    changeSortOption,
  };
}

export { ITEMS_PER_PAGE_OPTIONS };
