import {useStore} from '@stores/store.ts';
import {useForm} from 'react-hook-form';
import {PaymentDetails} from '@customTypes/model/apiTypes.ts';
import {number, object, ObjectSchema, string} from 'yup';
import {yupResolver} from '@hookform/resolvers/yup';

const paymentDetailsSchema: ObjectSchema<PaymentDetails> = object().shape({
  paymentMethod: string().required(),
  cardNumber: number().required(),
});

const usePaymentDetailsTransition = () => {
  const {wizardStore} = useStore();
  const {
    register,
    handleSubmit,
    setValue,
    formState: {errors},
  } = useForm<PaymentDetails>({
    resolver: yupResolver(paymentDetailsSchema),
    shouldFocusError: false,
  });

  const handleTransition = handleSubmit(data => {
    console.log(data);
    wizardStore.updatePaymentDetails(data);
    wizardStore.setStep(2);
  });

  return {handleTransition, register, setValue, errors};
};

export default usePaymentDetailsTransition;
