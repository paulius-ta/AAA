import styled, {css} from 'styled-components';
import Box from '@components/ui/Box/Box.tsx';
import Text from '@components/ui/Text/Text.tsx';
import Accordion from '@components/Accordion/Accordion.tsx';
import {iconPayment} from '@assets/AssetsProvider.ts';
import {PaymentDetails} from '@customTypes/model/apiTypes.ts';
import colors from '@styles/colors.ts';
import Separator from '@components/ui/Separator/Separator.tsx';
import Label from '@components/ui/Label/Label.tsx';
import {paymentMethods} from '@data/dataPaymentDetailsForm.ts';
import SecurityCodePreview from '@components/Wizard/elements/SecurityCodePreview.tsx';
import HiddenComponent from '@components/HiddenComponent.tsx';

interface ComponentProps extends CustomComponent {
  data: PaymentDetails;
}

const Root = styled(Box)``;

const Row = styled.div`
  ${() => css`
    position: relative;
    display: flex;
    gap: 5px;
    margin-top: 20px;
  `};
`;

const StyledText = styled(Text)`
  ${() => css`
    width: fit-content;
    background: ${colors.boxBackground};
    letter-spacing: 0.3rem;
  `};
`;

const StyledSeparator = styled(Separator)`
  ${() => css`
    background: ${colors.boxBackground};
  `};
`;

const Method = styled.img`
  ${() => css`
    width: auto;
    height: 100%;
    max-height: 60px;
    border-radius: 5px;
  `};
`;

const PaymentDetailsBox = ({data}: ComponentProps) => {
  const getPaymentMethodUrl = () => {
    return paymentMethods.find(m => data.paymentMethod === m.value)?.url;
  };

  return (
    <Root secondary>
      <Accordion icon={iconPayment}>
        <Row>
          <Label>Payment method:</Label>
          <Method src={getPaymentMethodUrl()} />
        </Row>
        <StyledSeparator />
        <Row>
          <Label>Card number:</Label>
          <StyledText boxed>{data.cardNumber}</StyledText>
        </Row>
        <StyledSeparator />
        <HiddenComponent label={'TVV:'}>
          <SecurityCodePreview />
        </HiddenComponent>
      </Accordion>
    </Root>
  );
};

export default PaymentDetailsBox;
