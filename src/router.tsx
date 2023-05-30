import { createBrowserRouter } from 'react-router-dom';

import Root from './layout/Root/Root';
import ClothesPage from './pages/ClothesPage';
import ErrorPage from './pages/ErrorPage';

import { loader as clothesLoader } from './pages/ClothesPage';

const router = createBrowserRouter([
  {
    path: '',
    element: <Root />,
    errorElement: <ErrorPage />,
    children: [
      {
        path: '',
        element: <ClothesPage />,
        loader: clothesLoader,
      },
    ],
  },
]);

export default router;
