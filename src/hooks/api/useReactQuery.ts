import {useQuery, UseQueryOptions} from '@tanstack/react-query';

interface RequestOptions extends SimpleObject {
  retry?: number;
  enabled?: boolean;
}

interface ReactQueryProps {
  endpoint: string;
  queryKey: string;
  body?: SimpleObject;
  opts: RequestOptions;
  method?: 'POST' | 'GET';
}
const useReactQuery = ({
  endpoint,
  queryKey,
  body,
  method = 'GET',
  opts,
}: ReactQueryProps) => {
  const fetchConfig = {
    method,
    headers: {
      'Content-Type': 'application/json',
    },
    body: JSON.stringify(body),
    options: opts,
  };

  const queryOptions: UseQueryOptions = {
    queryKey: [queryKey],
    queryFn: async () => {
      const response = await fetch(endpoint, fetchConfig);

      if (response.ok) {
        return await response.json();
      }

      if (response.status === 422) {
        throw await response.json();
      }

      throw new Error('API request failed');
    },
    ...opts,
  };

  const queryResult = useQuery(queryOptions);

  return {
    ...queryResult,
  };
};

export default useReactQuery;
