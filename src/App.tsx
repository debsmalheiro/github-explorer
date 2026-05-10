import { Routes, Route } from 'react-router-dom';
import Layout from './components/Layout';
import { routes } from './routes';
import { RouteErrorFallback } from './components/ErrorBoundary';

function App() {
  return (
    <Layout>
      <Routes>
        {routes.map((route) => (
          <Route
            key={route.path}
            path={route.path}
            element={<route.component />}
          />
        ))}
        <Route path="*" element={<RouteErrorFallback />} />
      </Routes>
    </Layout>
  );
}

export default App;
