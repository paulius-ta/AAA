import styled, {css} from 'styled-components';
import Box from '@components/ui/Box/Box.tsx';
import PaymentDetailsForm from '@components/Wizard/elements/PaymentDetailsForm.tsx';
import Button from '@components/ui/Button/Button.tsx';
import Icon from '@components/ui/Icon/Icon.tsx';
import {iconPayment} from '@assets/AssetsProvider.ts';
import usePaymentDetailsTransition from '@components/Wizard/transitions/usePaymentDetailsTransition.ts';

const Root = styled(Box)`
  ${() => css`
    display: flex;
    flex-direction: column;
    gap: 20px;
  `};
`;

const StyledButton = styled(Button)`
  ${() => css`
    align-self: flex-end;
  `};
`;

const StyledIcon = styled(Icon)`
  ${() => css`
    align-self: center;
  `};
`;

const PaymentDetailsStep = () => {
  const {handleTransition, register, errors} = usePaymentDetailsTransition();

  return (
    <Root>
      <StyledIcon icon={iconPayment} />
      <PaymentDetailsForm register={register} errors={errors} />
      <StyledButton onClick={handleTransition}>Next</StyledButton>
    </Root>
  );
};

export default PaymentDetailsStep;
