import { Link } from 'react-router-dom';
import { routes } from '../types/routes';

function NotFound() {
  return (
    <div className="my-5">
      <div className="row justify-content-center">
        <div className="col-12 col-md-8 col-lg-6 text-center">
          <div className="py-5">
            <h1 className="display-1 fw-bold text-muted">404</h1>
            <h2 className="h3 mb-3">Página não encontrada</h2>
            <p className="text-muted mb-4">
              Ops! A página que você está procurando não existe!
            </p>
            <Link to={routes.home} className="btn btn-dark github-button px-4">
              <i className="bi bi-house me-2" aria-hidden="true"></i>
              Voltar à página inicial
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
}

export default NotFound;
