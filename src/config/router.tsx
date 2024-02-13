import {createBrowserRouter} from 'react-router-dom';
import routerPaths from '@config/routerPaths.ts';
import ArtifactPage from '@pages/ArtifactPage.tsx';

const router = createBrowserRouter([
  {
    path: routerPaths.home(),
    element: <ArtifactPage />,
  },
]);

export default router;
