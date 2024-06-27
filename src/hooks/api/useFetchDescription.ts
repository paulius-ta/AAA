import useReactQuery from '@hooks/api/useReactQuery.ts';
import {API_BASE_URL} from '@config/env.ts';
import {DescriptionResponse} from '@customTypes/model/apiResponseTypes.ts';
import {useStore} from '@stores/store.ts';

const useFetchDescription = () => {
  const {wizardStore} = useStore();

  return useReactQuery<null, null, DescriptionResponse>({
    endpoint: `${API_BASE_URL}/description/${wizardStore.activeAuction}`,
    queryKey: 'description',
    opts: {
      enabled: !!wizardStore.activeAuction,
      refetchOnWindowFocus: false,
      refetchOnMount: false,
    },
  });
};

export default useFetchDescription;
