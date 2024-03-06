import {createBrowserRouter} from 'react-router-dom';
import routerPaths from '@config/routerPaths.ts';
import ArtifactPage from '@pages/ArtifactPage.tsx';
import CheckoutPage from '@pages/CheckoutPage.tsx';

const router = createBrowserRouter([
  {
    path: routerPaths.home(),
    element: <ArtifactPage />,
  },
  {
    path: routerPaths.checkout(),
    element: <CheckoutPage />,
  },
]);

export default router;
