import {useStore} from '@stores/store.ts';
import {useForm} from 'react-hook-form';
import {PaymentDetails} from '@customTypes/model/apiTypes.ts';
import {reaction} from 'mobx';

const usePaymentDetailsTransition = () => {
  const {wizardStore} = useStore();
  const {register, handleSubmit, setValue} = useForm<PaymentDetails>();

  const handleTransition = handleSubmit(data => {
    wizardStore.updatePaymentDetails(data);
  });

  reaction(
    () => wizardStore.paymentDetails.paymentMethod,
    paymentMethod => {
      setValue('paymentMethod', paymentMethod);
    }
  );

  return {handleTransition, register, setValue};
};

export default usePaymentDetailsTransition;
