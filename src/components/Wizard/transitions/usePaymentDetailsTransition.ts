import {useStore} from '@stores/store.ts';
import {useForm} from 'react-hook-form';
import {PaymentDetails} from '@customTypes/model/apiTypes.ts';
import {number, object, ObjectSchema, string} from 'yup';
import {yupResolver} from '@hookform/resolvers/yup';
import useSecurityCodeDetails from '@hooks/useSecurityCodeDetails.ts';

const paymentDetailsSchema: ObjectSchema<PaymentDetails> = object().shape({
  paymentMethod: string().required(),
  cardNumber: number().required(),
});

const usePaymentDetailsTransition = () => {
  const {wizardStore} = useStore();
  const {
    securityCodeHandleSubmit,
    securityCodeControl,
    securityCodeErrors,
    securityCodeIsValid,
    handleSecurityCodeChange,
  } = useSecurityCodeDetails();

  const {
    register,
    control,
    handleSubmit,
    formState: {errors, isValid},
  } = useForm<PaymentDetails>({
    resolver: yupResolver(paymentDetailsSchema),
    shouldFocusError: false,
    defaultValues: wizardStore.paymentDetails,
  });

  const handleTransition = () => {
    handleSubmit(data => {
      wizardStore.updatePaymentDetails(data);
    })();

    securityCodeHandleSubmit(data => {
      wizardStore.updateSecurityCodeDetails(data);
    })();

    if (!isValid || !securityCodeIsValid) return;

    wizardStore.setStep(2);
  };

  return {
    handleTransition,
    handleSecurityCodeChange,
    securityCodeControl,
    securityCodeErrors,
    register,
    control,
    errors,
  };
};

export default usePaymentDetailsTransition;
