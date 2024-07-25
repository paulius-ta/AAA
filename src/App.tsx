import {RouterProvider} from 'react-router-dom';
import router from '@config/router.tsx';
import GlobalStyle from '@styles/globalStyle.ts';
import {QueryClient, QueryClientProvider} from '@tanstack/react-query';
import PageLayout from '@layout/PageLayout.tsx';

function App() {
  const queryClient = new QueryClient();
  return (
    <QueryClientProvider client={queryClient}>
      <GlobalStyle />
      <PageLayout>
        <RouterProvider router={router} />
      </PageLayout>
    </QueryClientProvider>
  );
}

export default App;
