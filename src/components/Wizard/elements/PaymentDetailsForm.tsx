import styled, {css} from 'styled-components';
import Input from '@components/ui/Input/Input.tsx';
import PaymentMethodInput from '@components/Wizard/elements/PaymentMethodInput.tsx';
import {paymentMethods} from '@data/dataPaymentDetailsForm.ts';
import {Control, FieldErrors, Path, UseFormRegister} from 'react-hook-form';
import {
  PaymentDetails,
  SecurityCodeDetails,
} from '@customTypes/model/apiTypes.ts';
import SecurityCodeInput from '@components/Wizard/elements/SecurityCodeInput.tsx';

interface ComponentProps extends CustomComponent {
  register: UseFormRegister<PaymentDetails>;
  securityCodeControl: Control<SecurityCodeDetails>;
  onSecurityCodeChange: (
    name: Path<SecurityCodeDetails>,
    index: number,
    char: string
  ) => void;
  errors: FieldErrors<PaymentDetails>;
  securityCodeErrors: FieldErrors<SecurityCodeDetails>;
}

const Root = styled.div`
  ${() => css`
    display: flex;
    flex-direction: column;
    gap: 20px;
  `};
`;

const PaymentDetailsForm = ({
  register,
  securityCodeControl,
  onSecurityCodeChange,
  securityCodeErrors,
  errors,
}: ComponentProps) => {
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
      <SecurityCodeInput
        control={securityCodeControl}
        onChange={onSecurityCodeChange}
        errors={securityCodeErrors}
      />
    </Root>
  );
};

export default PaymentDetailsForm;
