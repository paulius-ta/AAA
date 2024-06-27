import useReactQuery from '@hooks/api/useReactQuery.ts';
import {API_BASE_URL} from '@config/env.ts';
import {AuctionItemResponse} from '@customTypes/model/apiResponseTypes.ts';
import {useStore} from '@stores/store.ts';

const useFetchAuctionItem = () => {
  const {wizardStore} = useStore();

  const response = useReactQuery<null, null, AuctionItemResponse>({
    endpoint: `${API_BASE_URL}/auctionItem`,
    queryKey: 'auction-item-active',
    opts: {
      enabled: true,
      refetchOnWindowFocus: false,
      refetchOnMount: false,
    },
  });

  if (response.data?.id) wizardStore.setActiveAuction(response.data?.id);

  return {...response};
};

export default useFetchAuctionItem;
