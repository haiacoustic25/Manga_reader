// import { Login } from "";

import AZList from '../pages/AZList';
import DetailManga from '../pages/detailManga';
import Home from '../pages/home';
import ReadManga from '../pages/Read';
import Views from '../pages/Views';

export const url = {
  Views: '/',
  Home: '/home',
  DetailManga: '/detail-manga',
  AZLIST: '/az-list',
  READ: '/read',
};

export const RouterPublic = [
  { url: url.Views, element: <Views /> },
  { url: url.Home, element: <Home /> },
  { url: url.DetailManga, element: <DetailManga /> },
  { url: url.AZLIST, element: <AZList /> },
  { url: url.READ, element: <ReadManga /> },
];
