import React from 'react';
import { isRouteErrorResponse, useRouteError } from 'react-router-dom';

interface Props {
  children: React.ReactNode;
}

interface State {
  hasError: boolean;
  error: Error | null;
}

export class ErrorBoundary extends React.Component<Props, State> {
  constructor(props: Props) {
    super(props);
    this.state = { hasError: false, error: null };
  }

  static getDerivedStateFromError(error: Error): State {
    return { hasError: true, error };
  }

  componentDidCatch(error: Error, errorInfo: React.ErrorInfo): void {
    console.error('ErrorBoundary capturou:', error, errorInfo);
  }

  handleReset = (): void => {
    this.setState({ hasError: false, error: null });
  };

  render(): React.ReactNode {
    if (this.state.hasError) {
      return (
        <ErrorFallback error={this.state.error} onReset={this.handleReset} />
      );
    }

    return this.props.children;
  }
}

interface ErrorFallbackProps {
  error: Error | null;
  onReset: () => void;
}

function ErrorFallback({
  error,
  onReset,
}: ErrorFallbackProps): React.ReactNode {
  return (
    <div className="min-vh-100 d-flex align-items-center justify-content-center bg-light">
      <div className="container">
        <div className="row justify-content-center">
          <div className="col-12 col-md-8 col-lg-6">
            <div className="alert alert-danger shadow-sm" role="alert">
              <div className="d-flex align-items-start gap-3">
                <i className="bi bi-exclamation-triangle-fill fs-1 flex-shrink-0"></i>
                <div className="flex-grow-1">
                  <h4 className="alert-heading fw-bold mb-2">
                    Algo deu errado 😢
                  </h4>
                  <p className="mb-3">
                    Ocorreu um erro inesperado na aplicação. Por favor, tente
                    novamente.
                  </p>

                  {error && (
                    <details className="mb-3">
                      <summary className="cursor-pointer small text-muted">
                        Detalhes técnicos
                      </summary>
                      <pre className="mt-2 p-3 bg-dark text-light rounded small">
                        <code>{error.toString()}</code>
                      </pre>
                    </details>
                  )}

                  <div className="d-flex gap-2 flex-wrap">
                    <button
                      className="btn btn-outline-danger"
                      onClick={onReset}
                    >
                      <i className="bi bi-arrow-clockwise me-2"></i>
                      Tentar novamente
                    </button>
                    <button
                      className="btn btn-danger"
                      onClick={() => (window.location.href = '/')}
                    >
                      <i className="bi bi-house me-2"></i>
                      Voltar ao início
                    </button>
                  </div>
                </div>
              </div>
            </div>

            <div className="text-center mt-4 text-muted small">
              <p className="mb-1">
                Se o problema persistir, entre em contato com o suporte.
              </p>
              <p className="mb-0">
                <i className="bi bi-github me-1"></i>
                <a
                  href="https://github.com/debsmalheiro/github-explorer/issues"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-decoration-none"
                >
                  Reportar problema no GitHub
                </a>
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export function RouteErrorFallback(): React.ReactNode {
  const error = useRouteError();

  if (isRouteErrorResponse(error)) {
    return (
      <div className="min-vh-100 d-flex align-items-center justify-content-center bg-light">
        <div className="container text-center">
          <div className="display-1 text-muted mb-3">
            <i className="bi bi-signstop"></i>
          </div>
          <h1 className="h2 mb-3">Página não encontrada</h1>
          <p className="text-muted mb-4">
            {error.status === 404
              ? 'A página que você procura não existe.'
              : 'Ocorreu um erro ao carregar esta página.'}
          </p>
          <a href="/" className="btn btn-dark">
            <i className="bi bi-house me-2"></i>
            Voltar ao início
          </a>
        </div>
      </div>
    );
  }

  return (
    <ErrorFallback
      error={error as Error}
      onReset={() => window.location.reload()}
    />
  );
}
