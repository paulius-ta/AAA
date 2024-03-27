import {useForm} from 'react-hook-form';
import {useStore} from '@stores/store.ts';

const usePreviewTransition = () => {
  const {wizardStore} = useStore();
  const {register, handleSubmit} = useForm<{bidAmount: number}>();

  const handleTransition = handleSubmit(data => {
    wizardStore.setBidAmount(data.bidAmount);
    console.log('bid is successful');
  });

  return {
    handleTransition,
    register,
    contactDetails: wizardStore.contactDetails,
    paymentDetails: wizardStore.paymentDetails,
  };
};

export default usePreviewTransition;
