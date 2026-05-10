import type { GithubError } from '../types/githubError';

interface ErrorCardProps {
  error: GithubError;
}

const errorConfig = {
  not_found: {
    icon: 'bi-person-x',
    alertClass: 'alert-warning',
    title: 'Usuário não encontrado',
  },
  network: {
    icon: 'bi-wifi-off',
    alertClass: 'alert-danger',
    title: 'Erro de conexão',
  },
} as const;

export default function ErrorCard({ error }: ErrorCardProps) {
  const config = errorConfig[error.type];

  return (
    <div
      className={`alert ${config.alertClass} d-flex align-items-center`}
      role="alert"
    >
      <i className={`bi ${config.icon} fs-4 me-3`} />
      <div className="flex-grow-1">
        <h3 className="h5 alert-heading mb-1">{config.title}</h3>
        <p className="mb-0">{error.message}</p>
      </div>
    </div>
  );
}
