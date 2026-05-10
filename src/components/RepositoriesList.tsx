import { useEffect } from 'react';
import { useGithubRepositoriesUser } from '../hooks/useGithubRepositoriesUser';
import ErrorCard from './ErrorCard';
import RepositoryCard from './RepositoryCard';
import Pagination from './Pagination';
import RepositoriesSort from './RepositoriesSort';
import { RepositoryListSkeleton } from './RepositorySkeleton';

interface RepositoriesListProps {
  user: string;
}

export default function RepositoriesList({ user }: RepositoriesListProps) {
  const {
    paginatedData,
    loading,
    error,
    currentPage,
    itemsPerPage,
    totalPages,
    totalItems,
    sortOption,
    fetchRepositoriesUser,
    changePage,
    changeItemsPerPage,
    changeSortOption,
  } = useGithubRepositoriesUser();

  useEffect(() => {
    if (user) {
      fetchRepositoriesUser(user);
    }
  }, [user]);

  if (loading) {
    return (
      <div className="mt-4">
        <RepositoryListSkeleton count={5} />
      </div>
    );
  }

  if (error) {
    return <ErrorCard error={error} />;
  }

  if (paginatedData.length === 0) {
    return null;
  }

  return (
    <div className="mt-4">
      <RepositoriesSort
        itemsPerPage={itemsPerPage}
        sortOption={sortOption}
        onItemsPerPageChange={changeItemsPerPage}
        onSortOptionChange={changeSortOption}
      />

      <div className="d-flex flex-column gap-3">
        {paginatedData.map((repository) => (
          <RepositoryCard key={repository.id} repository={repository} />
        ))}
      </div>

      <div className="mt-4">
        <Pagination
          currentPage={currentPage}
          totalPages={totalPages}
          totalItems={totalItems}
          onPageChange={changePage}
        />
      </div>
    </div>
  );
}
