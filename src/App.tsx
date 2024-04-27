import {RouterProvider} from 'react-router-dom';
import router from '@config/router.tsx';
import GlobalStyle from '@styles/globalStyle.ts';
import {QueryClient, QueryClientProvider} from '@tanstack/react-query';

function App() {
  const queryClient = new QueryClient();
  return (
    <QueryClientProvider client={queryClient}>
      <GlobalStyle />
      <RouterProvider router={router} />
    </QueryClientProvider>
  );
}

export default App;
