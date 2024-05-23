import useReactQuery from '@hooks/api/useReactQuery.ts';
const useFetchTest = () => {
  return useReactQuery({
    endpoint: 'http://localhost:3000/test',
    queryKey: 'test',
    opts: {
      enabled: true,
      refetchOnWindowFocus: false,
      refetchOnMount: false,
    },
  });
};

export default useFetchTest;
