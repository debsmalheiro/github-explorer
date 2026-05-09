import Profile from '../pages/Profile';
import Home from '../pages/Home';

export const routes = [
  {
    path: '/',
    component: Home,
  },
  {
    path: 'profile/:username',
    component: Profile,
  },
];
