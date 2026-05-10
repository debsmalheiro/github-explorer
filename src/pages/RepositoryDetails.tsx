import { useEffect } from 'react';
import { useParams, Link } from 'react-router-dom';
import { useGithubRepository } from '../hooks/useGithubRepository';
import ErrorCard from '../components/ErrorCard';
import RepositoryDetailsSkeleton from '../components/RepositoryDetailsSkeleton';
import { routes } from '../types/routes';

function RepositoryDetails() {
  const { username, repoName } = useParams<{
    username: string;
    repoName: string;
  }>();
  const { data, loading, error, fetchRepository } = useGithubRepository();

  useEffect(() => {
    if (username && repoName) {
      fetchRepository(`${username}/${repoName}`);
    }
  }, [username, repoName]);

  if (loading) {
    return <RepositoryDetailsSkeleton />;
  }

  if (error) {
    return <ErrorCard error={error} />;
  }

  if (!data) {
    return null;
  }

  return (
    <div className="my-4">
      <div className="row justify-content-center">
        <div className="col-12 col-md-10 col-lg-8">
          <Link
            to={routes.profile(username || '')}
            className="text-decoration-none text-secondary mb-3 d-inline-block"
          >
            ← Voltar para {username}
          </Link>

          <div className="card shadow-sm">
            <div className="card-body">
              <div className="d-flex justify-content-between align-items-start mb-3">
                <div>
                  <h1 className="h3 mb-1">
                    <a
                      href={data.html_url}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="text-primary text-decoration-none"
                    >
                      {data.full_name}
                    </a>
                  </h1>
                  {data.description && (
                    <p className="text-secondary mb-0">{data.description}</p>
                  )}
                </div>
              </div>

              <div className="d-flex flex-wrap gap-3 mb-4 text-secondary small">
                {data.language && (
                  <div className="d-flex align-items-center gap-1">
                    <span className="badge bg-light text-dark border">
                      {data.language}
                    </span>
                  </div>
                )}

                <div className="d-flex align-items-center gap-1">
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    width="14"
                    height="14"
                    viewBox="0 0 16 16"
                    fill="currentColor"
                  >
                    <path d="M8 .25a.75.75 0 01.673.418l1.882 3.815 4.21.612a.75.75 0 01.416 1.279l-3.046 2.97.719 4.192a.75.75 0 01-1.088.791L8 12.347l-3.766 1.98a.75.75 0 01-1.088-.79l.72-4.194L.818 6.374a.75.75 0 01.416-1.28l4.21-.611L7.327.668A.75.75 0 018 .25z" />
                  </svg>
                  <span>{data.stargazers_count}</span>
                </div>

                <div className="d-flex align-items-center gap-1">
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    width="14"
                    height="14"
                    viewBox="0 0 16 16"
                    fill="currentColor"
                  >
                    <path d="M5 3.25a.75.75 0 11-1.5 0 .75.75 0 011.5 0zm0 2.122a2.25 2.25 0 10-1.5 0v.878A2.25 2.25 0 005.75 8.5h1.5v2.128a2.251 2.251 0 101.5 0V8.5h1.5a2.25 2.25 0 002.25-2.25v-.878a2.25 2.25 0 10-1.5 0v.878a.75.75 0 01-.75.75h-4.5A.75.75 0 015 6.25v-.878zm3.75 7.378a.75.75 0 11-1.5 0 .75.75 0 011.5 0zm3-8.75a.75.75 0 100-1.5.75.75 0 000 1.5z" />
                  </svg>
                  <span>{data.forks_count}</span>
                </div>

                <div className="d-flex align-items-center gap-1">
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    width="14"
                    height="14"
                    viewBox="0 0 16 16"
                    fill="currentColor"
                  >
                    <path d="M8 9.5a1.5 1.5 0 100-3 1.5 1.5 0 000 3z" />
                    <path d="M8 0a8 8 0 100 16A8 8 0 008 0zM1.5 8a6.5 6.5 0 1113 0 6.5 6.5 0 01-13 0z" />
                  </svg>
                  <span>{data.watchers_count}</span>
                </div>

                <div className="d-flex align-items-center gap-1">
                  <span className="badge bg-secondary">{data.visibility}</span>
                </div>
              </div>

              <div className="row g-3">
                <div className="col-sm-6">
                  <small className="text-secondary d-block">Criado em</small>
                  <span>
                    {new Date(data.created_at).toLocaleDateString('pt-BR')}
                  </span>
                </div>
                <div className="col-sm-6">
                  <small className="text-secondary d-block">
                    Última atualização
                  </small>
                  <span>
                    {new Date(data.updated_at).toLocaleDateString('pt-BR')}
                  </span>
                </div>
                <div className="col-sm-6">
                  <small className="text-secondary d-block">
                    Branch padrão
                  </small>
                  <span className="badge bg-light text-dark border">
                    {data.default_branch}
                  </span>
                </div>
                <div className="col-sm-6">
                  <small className="text-secondary d-block">
                    Issues abertas
                  </small>
                  <span>{data.open_issues_count}</span>
                </div>
                <div className="col-sm-6">
                  <small className="text-secondary d-block">Tamanho</small>
                  <span>{data.size} KB</span>
                </div>
                <div className="col-sm-6">
                  <small className="text-secondary d-block">Fork</small>
                  <span>{data.fork ? 'Sim' : 'Não'}</span>
                </div>
              </div>

              {data.topics && data.topics.length > 0 && (
                <div className="mt-4">
                  <small className="text-secondary d-block mb-2">Tópicos</small>
                  <div className="d-flex flex-wrap gap-2">
                    {data.topics.map((topic) => (
                      <span key={topic} className="badge bg-info text-dark">
                        {topic}
                      </span>
                    ))}
                  </div>
                </div>
              )}

              <div className="mt-4">
                <a
                  href={data.html_url}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="btn btn-dark"
                >
                  Ver no GitHub
                </a>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default RepositoryDetails;
