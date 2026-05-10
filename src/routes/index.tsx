import Profile from '../pages/Profile';
import Home from '../pages/Home';
import RepositoryDetails from '../pages/RepositoryDetails';
import NotFound from '../pages/NotFound';

export const routes = [
  {
    path: '/',
    component: Home,
  },
  {
    path: 'profile/:username',
    component: Profile,
  },
  {
    path: 'repo/:username/:repoName',
    component: RepositoryDetails,
  },
  {
    path: '*',
    component: NotFound,
  },
];
