import { Link } from 'react-router-dom';
import type { GithubUser } from '../types/githubUser';
import { routes } from '../types/routes';
import { getAvatarUrl } from '../utils/avatar';

interface UserCardProps {
  user: GithubUser;
}

export default function UserCard({ user }: UserCardProps) {
  return (
    <Link to={routes.profile(user.login)} className="user-card">
      <div className="user-card-inner">
        <div className="user-card-content">
          <img
            src={getAvatarUrl(user.avatar_url, 80)}
            alt={`Avatar de ${user.login}`}
            loading="lazy"
            width="80"
            height="80"
            className="user-card-avatar"
          />
          <div className="user-card-info">
            <h3 className="user-card-name">{user.name || user.login}</h3>
            <div className="user-card-stats">
              <span className="user-card-stat">
                ⭐ {user.followers} seguidores
              </span>
              <span className="user-card-stat">
                👥 {user.following} seguindo
              </span>
              <span className="user-card-stat">
                📦 {user.public_repos} repositórios
              </span>
            </div>
          </div>
        </div>
      </div>
    </Link>
  );
}
