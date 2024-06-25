import useReactQuery from '@hooks/api/useReactQuery.ts';
import {API_BASE_URL} from '@config/env.ts';
const useFetchTest = () => {
  return useReactQuery({
    endpoint: `${API_BASE_URL}/test`,
    queryKey: 'test',
    opts: {
      enabled: true,
      refetchOnWindowFocus: false,
      refetchOnMount: false,
    },
  });
};

export default useFetchTest;
