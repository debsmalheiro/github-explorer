import type { ReactNode } from 'react';
import { Link } from 'react-router-dom';
import { routes } from '../types/routes';
import { Icon } from './Icon';

interface LayoutProps {
  children: ReactNode;
}

export default function Layout({ children }: LayoutProps) {
  return (
    <div className="d-flex flex-column min-vh-100">
      <header className="fixed-top bg-white border-bottom">
        <div className="container py-3">
          <Link to={routes.home} className="text-decoration-none text-dark">
            <div className="d-flex align-items-center gap-3">
              <Icon name="github" className="fs-3" />
              <h1 className="h4 m-0 fw-bold">GitHub Explorer</h1>
            </div>
          </Link>
        </div>
      </header>
      <main className="container flex-grow-1 main-with-fixed-header">
        {children}
      </main>
      <footer className="bg-white border-top py-4">
        <div className="container text-center text-muted">
          <p className="m-0">© {new Date().getFullYear()} malheiro.dev</p>
        </div>
      </footer>
    </div>
  );
}
