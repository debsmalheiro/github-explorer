import type { GithubError } from '../types/githubError';
import { Icon } from './Icon';

interface ErrorCardProps {
  error: GithubError;
}

const errorConfig = {
  not_found: {
    iconName: 'person-x' as const,
    alertClass: 'alert-warning',
    title: 'Usuário não encontrado',
  },
  network: {
    iconName: 'wifi-off' as const,
    alertClass: 'alert-danger',
    title: 'Erro de conexão',
  },
} as const;

export default function ErrorCard({ error }: ErrorCardProps) {
  const config = errorConfig[error.type];

  // Para ícones não suportados, mantenha o bootstrap-icon original
  if (config.iconName === 'wifi-off') {
    return (
      <div
        className={`alert ${config.alertClass} d-flex align-items-center`}
        role="alert"
      >
        <i className={`bi bi-${config.iconName} fs-4 me-3`} />
        <div className="flex-grow-1">
          <h3 className="h5 alert-heading mb-1">{config.title}</h3>
          <p className="mb-0">{error.message}</p>
        </div>
      </div>
    );
  }

  return (
    <div
      className={`alert ${config.alertClass} d-flex align-items-center`}
      role="alert"
    >
      <Icon name={config.iconName} className="fs-4 me-3" />
      <div className="flex-grow-1">
        <h3 className="h5 alert-heading mb-1">{config.title}</h3>
        <p className="mb-0">{error.message}</p>
      </div>
    </div>
  );
}
