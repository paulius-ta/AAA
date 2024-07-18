import useReactQuery from '@hooks/api/useReactQuery.ts';
import {API_BASE_URL} from '@config/env.ts';
import {useStore} from '@stores/store.ts';
import {useState} from 'react';

const useCreateBidderDetails = () => {
  const [enabled, setEnabled] = useState(false);
  const {wizardStore} = useStore();
  const {contactDetails, paymentDetails} = wizardStore;

  const mergedData = {contactDetails, paymentDetails};

  const response = useReactQuery<null, null, typeof mergedData>({
    endpoint: `${API_BASE_URL}/bidder`,
    queryKey: 'create-bidder-details',
    method: 'POST',
    body: {...mergedData},
    opts: {
      enabled: enabled,
      refetchOnWindowFocus: false,
      refetchOnMount: false,
      onSuccess: () => {
        setEnabled(false);
      },
    },
  });

  const submitData = () => {
    setEnabled(true);
  };

  return {...response, submitData};
};

export default useCreateBidderDetails;
