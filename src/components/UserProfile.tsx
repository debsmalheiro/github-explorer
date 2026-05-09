import type { GithubUser } from '../types/githubUser';

interface UserProfileProps {
  user: GithubUser;
}

export default function UserProfile({ user }: UserProfileProps) {
  return (
    <div className="card shadow-sm border-0">
      <div className="card-body p-5">
        <div className="d-flex flex-column flex-md-row align-items-center gap-4">
          <img
            src={user.avatar_url}
            alt={`Avatar de ${user.login}`}
            className="rounded-circle"
            style={{ width: '120px', height: '120px', objectFit: 'cover' }}
          />
          <div className="flex-grow-1 text-center text-md-start">
            <h2 className="fw-bold mb-2">{user.name || user.login}</h2>

            {user.bio ? <p className="text-muted mb-3">{user.bio}</p> : null}

            <div className="d-flex justify-content-center justify-content-md-start gap-4 text-muted">
              <span className="d-flex align-items-center gap-2">
                <span>⭐</span>
                <span>{user.followers} seguidores</span>
              </span>
              <span className="d-flex align-items-center gap-2">
                <span>👥</span>
                <span>{user.following} seguindo</span>
              </span>
              <span className="d-flex align-items-center gap-2">
                <span>📦</span>
                <span>{user.public_repos} repositórios</span>
              </span>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
