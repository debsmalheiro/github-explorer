import type { GithubUser } from '../types/githubUser';
import { sanitizeUrl } from '../utils/url';
import { getAvatarUrl } from '../utils/avatar';

interface UserProfileProps {
  user: GithubUser;
}

export default function UserProfile({ user }: UserProfileProps) {
  const formatDate = (dateString: string) => {
    return new Date(dateString).toLocaleDateString('pt-BR', {
      day: '2-digit',
      month: 'long',
      year: 'numeric',
    });
  };

  return (
    <div className="card shadow-sm border-0">
      <div className="card-body p-5">
        <div className="d-flex flex-column flex-md-row align-items-center gap-4">
          <img
            src={getAvatarUrl(user.avatar_url, 120)}
            alt={`Avatar de ${user.login}`}
            loading="lazy"
            className="rounded-circle"
            style={{ width: '120px', height: '120px', objectFit: 'cover' }}
          />
          <div className="flex-grow-1 text-center text-md-start">
            <h2 className="fw-bold mb-2">{user.name || user.login}</h2>
            <p className="text-muted mb-3">@{user.login}</p>

            {user.bio ? <p className="mb-3">{user.bio}</p> : null}

            <ul className="d-flex justify-content-center justify-content-md-start gap-4 text-muted mb-3 list-unstyled">
              <li className="d-flex align-items-center gap-2">
                <span aria-hidden="true">⭐</span>
                <span>{user.followers} seguidores</span>
              </li>
              <li className="d-flex align-items-center gap-2">
                <span aria-hidden="true">👥</span>
                <span>{user.following} seguindo</span>
              </li>
              <li className="d-flex align-items-center gap-2">
                <span aria-hidden="true">📦</span>
                <span>{user.public_repos} repositórios</span>
              </li>
            </ul>

            <div className="d-flex flex-column flex-md-row gap-3 text-muted small mb-3">
              {user.company && <span>🏢 {user.company}</span>}
              {user.location && <span>📍 {user.location}</span>}
              {user.email && (
                <span>
                  📧{' '}
                  <a
                    href={`mailto:${user.email}`}
                    className="text-decoration-none"
                  >
                    {user.email}
                  </a>
                </span>
              )}
              {user.blog && (
                <span>
                  🔗{' '}
                  <a
                    href={sanitizeUrl(user.blog)}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-decoration-none"
                  >
                    {user.blog}
                  </a>
                </span>
              )}
              {user.html_url && (
                <span>
                  👤{' '}
                  <a
                    href={user.html_url}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-decoration-none"
                  >
                    GitHub
                  </a>
                </span>
              )}
            </div>

            <div className="text-muted small">
              <span>📅 Entrou em {formatDate(user.created_at)}</span>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
