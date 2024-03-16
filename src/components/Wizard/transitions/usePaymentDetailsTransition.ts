import {useStore} from '@stores/store.ts';

const usePaymentDetailsTransition = () => {
  const {wizardStore} = useStore();

  const handleTransition = () => {
    wizardStore.setStep(wizardStore.step + 1);
  };

  return {handleTransition};
};

export default usePaymentDetailsTransition;
