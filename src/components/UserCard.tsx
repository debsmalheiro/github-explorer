import { Link } from 'react-router-dom';
import type { GithubUser } from '../types/githubUser';
import { routes } from '../types/routes';
import { getAvatarUrl } from '../utils/avatar';

interface UserCardProps {
  user: GithubUser;
}

export default function UserCard({ user }: UserCardProps) {
  return (
    <Link to={routes.profile(user.login)} className="text-decoration-none">
      <div className="card shadow-sm border-0 h-auto">
        <div className="card-body p-4">
          <div className="d-flex align-items-center gap-4">
            <img
              src={getAvatarUrl(user.avatar_url, 80)}
              alt={`Avatar de ${user.login}`}
              loading="lazy"
              width="80"
              height="80"
              className="rounded-circle"
              style={{ width: '80px', height: '80px', objectFit: 'cover' }}
            />
            <div className="flex-grow-1">
              <h3 className="h5 card-title mb-1 fw-bold text-dark">
                {user.name || user.login}
              </h3>

              <div className="d-flex gap-3 text-muted small">
                <span>⭐ {user.followers} seguidores</span>
                <span>👥 {user.following} seguindo</span>
                <span>📦 {user.public_repos} repositórios</span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </Link>
  );
}
