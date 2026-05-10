import { Link } from 'react-router-dom';
import type { GithubRepository } from '../types/githubRepositoriesUser';
import { routes } from '../types/routes';

interface RepositoryCardProps {
  repository: GithubRepository;
}

export default function RepositoryCard({ repository }: RepositoryCardProps) {
  const [username, repoName] = repository.full_name.split('/');

  return (
    <div className="card shadow-sm border-0 h-auto hover-shadow transition-shadow">
      <div className="card-body p-4">
        <div className="d-flex flex-column gap-2">
          <div className="d-flex align-items-start justify-content-between gap-2">
            <div>
              <Link
                to={routes.repo(username, repoName)}
                className="text-primary fw-bold text-decoration-none"
              >
                {repository.full_name}
              </Link>
            </div>
          </div>

          {repository.description && (
            <p className="card-text text-secondary mb-0 small">
              {repository.description}
            </p>
          )}

          <div className="d-flex align-items-center gap-4 mt-2 text-secondary small">
            {repository.language && (
              <div className="d-flex align-items-center gap-1">
                <span>{repository.language}</span>
              </div>
            )}

            <div className="d-flex align-items-center gap-1">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="14"
                height="14"
                viewBox="0 0 16 16"
                fill="currentColor"
                aria-hidden="true"
              >
                <path d="M8 .25a.75.75 0 01.673.418l1.882 3.815 4.21.612a.75.75 0 01.416 1.279l-3.046 2.97.719 4.192a.75.75 0 01-1.088.791L8 12.347l-3.766 1.98a.75.75 0 01-1.088-.79l.72-4.194L.818 6.374a.75.75 0 01.416-1.28l4.21-.611L7.327.668A.75.75 0 018 .25z" />
              </svg>
              <span>{repository.stargazers_count}</span>
            </div>

            <div className="d-flex align-items-center gap-1">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="14"
                height="14"
                viewBox="0 0 16 16"
                fill="currentColor"
                aria-hidden="true"
              >
                <path d="M5 3.25a.75.75 0 11-1.5 0 .75.75 0 011.5 0zm0 2.122a2.25 2.25 0 10-1.5 0v.878A2.25 2.25 0 005.75 8.5h1.5v2.128a2.251 2.251 0 101.5 0V8.5h1.5a2.25 2.25 0 002.25-2.25v-.878a2.25 2.25 0 10-1.5 0v.878a.75.75 0 01-.75.75h-4.5A.75.75 0 015 6.25v-.878zm3.75 7.378a.75.75 0 11-1.5 0 .75.75 0 011.5 0zm3-8.75a.75.75 0 100-1.5.75.75 0 000 1.5z" />
              </svg>
              <span>{repository.forks_count}</span>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
