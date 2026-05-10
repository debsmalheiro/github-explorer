import { Suspense } from 'react';
import { Routes, Route } from 'react-router-dom';
import Layout from './components/Layout';
import { routes } from './routes';
import { RouteErrorFallback } from './components/ErrorBoundary';
import { RouteSkeleton } from './components/RouteSkeleton';

function App() {
  return (
    <Layout>
      <Routes>
        {routes.map((route) => (
          <Route
            key={route.path}
            path={route.path}
            element={
              <Suspense fallback={<RouteSkeleton />}>
                <route.component />
              </Suspense>
            }
          />
        ))}
        <Route path="*" element={<RouteErrorFallback />} />
      </Routes>
    </Layout>
  );
}

export default App;
