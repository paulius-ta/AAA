import styled, {css} from 'styled-components';
import Input from '@components/ui/Input/Input.tsx';
import PaymentMethodInput from '@components/Wizard/elements/PaymentMethodInput.tsx';
import {paymentMethods} from '@data/dataPaymentDetailsForm.ts';
import {FieldErrors, UseFormRegister} from 'react-hook-form';
import {PaymentDetails} from '@customTypes/model/apiTypes.ts';

interface ComponentProps extends CustomComponent {
  register: UseFormRegister<PaymentDetails>;
  errors: FieldErrors<PaymentDetails>;
}

const Root = styled.div`
  ${() => css`
    display: flex;
    flex-direction: column;
    gap: 20px;
  `};
`;

const PaymentDetailsForm = ({register, errors}: ComponentProps) => {
  return (
    <Root>
      <PaymentMethodInput
        data={paymentMethods}
        error={errors.paymentMethod?.message}
        register={register}
        name={'paymentMethod'}
      />
      <Input
        label={'Card number:'}
        placeholder={'1234 5678 0000 0000 0000 0000 0000'}
        register={register}
        name={'cardNumber'}
        error={errors.cardNumber?.message}
      />
    </Root>
  );
};

export default PaymentDetailsForm;
