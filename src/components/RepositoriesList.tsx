import { useEffect } from 'react';
import { useGithubRepositoriesUser } from '../hooks/useGithubRepositoriesUser';
import ErrorCard from './ErrorCard';
import RepositoryCard from './RepositoryCard';

interface RepositoriesListProps {
  user: string;
}

export default function RepositoriesList({ user }: RepositoriesListProps) {
  const { data, loading, error, fetchRepositoriesUser } =
    useGithubRepositoriesUser();

  useEffect(() => {
    if (user) {
      fetchRepositoriesUser(user);
    }
  }, [user]);

  if (loading) {
    return (
      <div className="d-flex justify-content-center my-5">
        <div className="spinner-border text-dark" role="status">
          <span className="visually-hidden">Carregando...</span>
        </div>
      </div>
    );
  }

  if (error) {
    return <ErrorCard error={error} />;
  }

  if (!data) {
    return null;
  }

  return (
    <div>
      {data.map((repository, index) => (
        <div key={index}>
          <RepositoryCard repository={repository} />
        </div>
      ))}
    </div>
  );
}
