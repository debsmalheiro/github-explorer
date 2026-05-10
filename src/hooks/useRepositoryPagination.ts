import { useState, useMemo, useCallback } from 'react';
import type { GithubRepository } from '../types/githubRepositoriesUser';

interface UseRepositoryPaginationResult {
  currentPage: number;
  itemsPerPage: number;
  totalPages: number;
  totalItems: number;
  paginatedData: GithubRepository[];
  changePage: (page: number) => void;
  changeItemsPerPage: (items: number) => void;
}

const DEFAULT_ITEMS_PER_PAGE = 10;

export function useRepositoryPagination(
  data: GithubRepository[] | null,
  sortedData: GithubRepository[]
): UseRepositoryPaginationResult {
  const [currentPage, setCurrentPage] = useState(1);
  const [itemsPerPage, setItemsPerPage] = useState(DEFAULT_ITEMS_PER_PAGE);

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

  return {
    currentPage,
    itemsPerPage,
    totalPages,
    totalItems: data?.length || 0,
    paginatedData,
    changePage,
    changeItemsPerPage,
  };
}
