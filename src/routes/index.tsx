import { lazy } from 'react';

export const routes = [
  {
    path: '/',
    component: lazy(() => import('../pages/Home')),
  },
  {
    path: 'profile/:username',
    component: lazy(() => import('../pages/Profile')),
  },
  {
    path: 'repo/:username/:repoName',
    component: lazy(() => import('../pages/RepositoryDetails')),
  },
  {
    path: '*',
    component: lazy(() => import('../pages/NotFound')),
  },
];
