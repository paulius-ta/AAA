import useReactQuery from '@hooks/api/useReactQuery.ts';
import {API_BASE_URL} from '@config/env.ts';

const useFetchAuctionItem = () => {
  return useReactQuery({
    endpoint: `${API_BASE_URL}/auctionItem`,
    queryKey: 'auction-item-active',
    opts: {
      enabled: true,
      refetchOnWindowFocus: false,
      refetchOnMount: false,
    },
  });
};

export default useFetchAuctionItem;
