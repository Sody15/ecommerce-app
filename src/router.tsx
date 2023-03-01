import { createBrowserRouter } from 'react-router-dom';

import Root from './layout/Root/Root';
import ClothesPage from './pages/ClothesPage';

import HomePage from './pages/HomePage';

const router = createBrowserRouter([
  {
    path: '/',
    element: <Root />,
    children: [
      {
        index: true,
        element: <HomePage />,
      },
      {
        path: 'clothes',
        element: <ClothesPage />,
      },
    ],
  },
]);

export default router;
