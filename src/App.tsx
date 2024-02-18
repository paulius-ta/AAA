import {RouterProvider} from 'react-router-dom';
import router from '@config/router.tsx';
import GlobalStyle from '@styles/globalStyle.ts';
function App() {
  return (
    <>
      <GlobalStyle />
      <RouterProvider router={router} />
    </>
  );
}

export default App;
