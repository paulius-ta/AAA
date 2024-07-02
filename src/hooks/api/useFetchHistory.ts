import useReactQuery from '@hooks/api/useReactQuery.ts';
import {API_BASE_URL} from '@config/env.ts';
import {useStore} from '@stores/store.ts';
import {History} from '@customTypes/model/apiTypes.ts';

const useFetchHistory = () => {
  const {wizardStore} = useStore();

  return useReactQuery<null, null, History>({
    endpoint: `${API_BASE_URL}/history/${wizardStore.activeAuction}`,
    queryKey: 'history',
    opts: {
      enabled: !!wizardStore.activeAuction,
      refetchOnWindowFocus: false,
      refetchOnMount: false,
    },
  });
};

export default useFetchHistory;
